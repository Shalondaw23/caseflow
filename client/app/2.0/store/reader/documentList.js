// External Dependencies
import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { isNil, pickBy } from 'lodash';

// Local Dependencies
import ApiUtil from 'app/util/ApiUtil';
import { ENDPOINT_NAMES, DOCUMENTS_OR_COMMENTS_ENUM } from 'store/constants/reader';
import {
  filterDocuments,
  addMetaLabel,
  commentContainsWords,
  categoryContainsWords,
  getQueueRedirectUrl,
  getQueueTaskType
} from 'utils/reader';
import { showPdf, selectCurrentPdfLocally } from 'store/reader/documentViewer';
import { onReceiveAnnotations } from 'store/reader/annotationLayer';

/**
 * PDF Initial State
 */
export const initialState = {
  loading: false,
  documents: {},
  queueRedirectUrl: getQueueRedirectUrl(),
  queueTaskType: getQueueTaskType(),
  view: DOCUMENTS_OR_COMMENTS_ENUM.DOCUMENTS,
  searchCategoryHighlights: {},
  filteredDocIds: [],
  filterCriteria: {
    sort: {
      sortBy: 'receivedAt',
      sortAscending: true
    },
    category: {},
    tag: {},
    searchQuery: ''
  },
  pdfList: {
    scrollTop: null,
    lastReadDocId: null,
    dropdown: {
      tag: false,
      category: false
    }
  },
  manifestVbmsFetchedAt: null,
  manifestVvaFetchedAt: null
};

/**
 * Helper Method to change the Last Read Document
 * @param {Object} state -- The current Redux Store State
 * @param {string} docId -- The ID of the Document to set as the last Read
 */
export const updateLastReadDoc = (state, docId) => {
  state.pdfList.lastReadDocId = docId;
};

/**
 * Dispatcher to Load Appeal Documents
 */
export const loadDocuments = createAsyncThunk('documentList/load', async (params, { getState, dispatch }) => {
  // Get the current state
  const state = getState();

  // Request the Documents for the Appeal
  const { body } = await ApiUtil.get(`/reader/appeal/${params.vacolsId}/documents?json`, {}, ENDPOINT_NAMES.DOCUMENTS);

  // Load the Document if the Doc ID is present
  if (params.docId) {
    dispatch(showPdf({
      currentDocument: body.appealDocuments.filter((doc) => doc.id === parseInt(params.docId, 10))[0],
      worker: params.worker,
      scale: params.scale
    }));
  }

  // Return the response and attach the Filter Criteria
  return {
    ...body,
    ...params,
    documents: body.appealDocuments,
    filterCriteria: state.reader.documentList.filterCriteria
  };
});

/**
 * Dispatcher to Set the Last Read Document
 */
export const handleSetLastRead = createAction('documentList/handleSetLastRead');

/**
 * Document List Combined Reducer/Action creators
 */
const documentListSlice = createSlice({
  name: 'documentList',
  initialState,
  reducers: {
    changeSortState: {
      reducer: (state, action) => {
        state.filterCriteria.sort.sortBy = action.payload.sortBy;
        state.filterCriteria.sort.sortAscending =
         !state.filterCriteria.sort.sortAscending;
      },
      prepare: (sortBy, props) => addMetaLabel('change-sort-by', { sortBy, ...props },
        `${sortBy}-${props.filterCriteria.sort.sortAscending ? 'ascending' : 'descending'}`
      )
    },
    clearCategoryFilters: {
      reducer: (state) => {
        state.filterCriteria.category = {};
      },
      prepare: (props) => addMetaLabel('clear-category-filters', { ...props })
    },
    setCategoryFilter: {
      reducer: (state, action) => {
        state.filterCriteria.category[action.payload.categoryName] = action.payload.checked;
      },
      prepare: (categoryName, checked, props) =>
        addMetaLabel(`${checked ? 'select' : 'unselect'}-category-filter`, { categoryName, checked, ...props }, categoryName)
    },
    toggleDropdownFilterVisibility: {
      reducer: (state, action) => {
        state.pdfList.dropdown[action.payload.filterName] = !state.pdfList.dropdown[action.payload.filterName];
      },
      prepare: (filterName) => addMetaLabel('toggle-dropdown-filter', { filterName }, filterName)
    },
    setTagFilter: {
      reducer: (state, action) => {
        state.filterCriteria.tag[action.payload.text] = action.payload.checked;
      },
      prepare: (text, checked, tagId, props) =>
        addMetaLabel(`${checked ? 'select' : 'unselect'}-category-filter`, { ...props, text, checked }, tagId)
    },
    clearTagFilters: {
      reducer: (state) => {
        state.filterCriteria.tag = {};
      },
      prepare: (props) => addMetaLabel('clear-tag-filters', { ...props })
    },
    setDocListScrollPosition: {
      reducer: (state, action) => {
        state.pdfList.scrollTop = action.payload.scrollTop;
      },
      prepare: (scrollTop) => ({ payload: { scrollTop } })
    },
    setSearch: {
      reducer: (state, action) => {
        state.filterCriteria.searchQuery = action.payload.filterCriteria.searchQuery;
      },
      prepare: (searchQuery, annotations, documents) =>
        addMetaLabel('clear-tag-filters', { filterCriteria: { searchQuery }, annotations, documents })
    },
    clearSearch: {
      reducer: (state) => {
        state.filterCriteria.searchQuery = '';
      },
      prepare: (filterCriteria, annotations, documents) =>
        addMetaLabel('clear-search', { filterCriteria, annotations, documents })
    },
    clearAllFilters: {
      reducer: (state) => {
        state.filterCriteria = initialState.filterCriteria;
      },
      prepare: (props) => addMetaLabel('clear-all-filters', { ...props })
    },
    changeView: {
      reducer: (state, action) => {
        state.view = action.payload.documentsView;
      },
      prepare: (documentsView) =>
        addMetaLabel('set-viewing-documents-or-comments', { documentsView }, documentsView)
    },
    onReceiveManifests: {
      reducer: (state, action) => {
        state.manifestVbmsFetchedAt = action.payload.manifestVbmsFetchedAt;
        state.manifestVvaFetchedAt = action.payload.manifestVvaFetchedAt;
      },
      prepare: (manifestVbmsFetchedAt, manifestVvaFetchedAt) =>
        ({ payload: { manifestVbmsFetchedAt, manifestVvaFetchedAt } })
    },
  },
  extraReducers: (builder) => {
    builder.
      addCase(loadDocuments.pending, (state) => {
        state.loading = true;
      }).
      addCase(loadDocuments.fulfilled, (state, action) => {
        state.documents = action.payload.documents.reduce((list, doc) => ({
          ...list,
          [doc.id]: {
            ...doc,
            receivedAt: doc.received_at,
            listComments: false,
            wasUpdated: !isNil(doc.previous_document_version_id) && !doc.opened_by_current_user
          }
        }), {});
      }).
      addMatcher(
        (action) => [
          loadDocuments.fulfilled.toString(),
          loadDocuments.rejected.toString()
        ].includes(action.type),
        (state) => {
          // Reset the Loading State
          state.loading = false;
        }).
      addMatcher(
        (action) => [
          selectCurrentPdfLocally.toString()
        ].includes(action.type),
        (state, action) => {
          updateLastReadDoc(state, action.payload.docId);
        }
      ).
      addMatcher(
        (action) => [
          'documentList/setSearch',
          'documentList/clearSearch',
          'documentList/changeSortState',
          'documentList/setCategoryFilter',
          'documentList/clearCategoryFilters',
          'documentList/clearAllFilters',
          'documentList/setTagFilter',
          'documentList/clearTagFilters',
          onReceiveAnnotations.toString(),
          loadDocuments.fulfilled.toString(),
        ].includes(action.type),
        (state, action) => {
          // If the Action is loading the documents, also update the manifest
          if (action.type === loadDocuments.fulfilled.toString()) {
            state.manifestVbmsFetchedAt = action.payload.manifestVbmsFetchedAt;
            state.manifestVvaFetchedAt = action.payload.manifestVvaFetchedAt;
          }

          // Set the Documents
          const documents = action.payload.documents;

          // Extract the Filter Criteria to process
          const { filterCriteria } = state;

          // Format the search query
          const searchQuery = filterCriteria.searchQuery.toLowerCase();

          // Set the Filtered IDs
          state.filteredDocIds = filterDocuments(filterCriteria, documents, action.payload);

          // Check whether there is a search query to locate
          if (searchQuery) {
          // Loop through all the documents to update category highlights and expanding comments
            Object.keys(documents).forEach((id) => {
            // Set the document
              const doc = documents[id];

              // Getting all the truthy values from the object
              const matchesCategories = pickBy(categoryContainsWords(searchQuery, doc));

              // Update the state for all the search category highlights
              if (matchesCategories !== state.searchCategoryHighlights[doc.id]) {
                state.searchCategoryHighlights[doc.id] = matchesCategories;
              }

              // Determine whether the comment contains the search query
              const containsWords = commentContainsWords(searchQuery, action.payload, doc);

              // Updating the state of all annotations for expanded comments
              if (containsWords !== doc.listComments) {
                state.documents[doc.id].listComments = containsWords;
              }
            });
          }
        });
  }
});

// Export the Reducer actions
export const {
  toggleDropdownFilterVisibility,
  setDocListScrollPosition,
  changeView,
  onReceiveManifests,
  setSearch,
  clearSearch,
  changeSortState,
  setCategoryFilter,
  clearCategoryFilters,
  clearAllFilters,
  setTagFilter,
  clearTagFilters
} = documentListSlice.actions;

// Default export the reducer
export default documentListSlice.reducer;

