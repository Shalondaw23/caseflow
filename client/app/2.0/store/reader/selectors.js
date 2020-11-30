// External Dependencies
import { createSelector } from '@reduxjs/toolkit';
import { isEmpty, compact, uniqBy } from 'lodash';

// Local Dependencies
import { documentCategories } from 'store/constants/reader';
import { formatCategoryName } from 'app/2.0/utils/reader/format';
import { documentsView } from 'utils/reader';

/**
 * Filtered Documents state
 */
export const filteredDocuments = ({ reader }) =>
  reader.documentList.filteredDocIds.reduce(
    (list, id) => ({ ...list, [id]: reader.documentList.documents[id] }),
    {}
  );

/**
 * Selector for the Documents
 * @param {Object} state -- The current Redux Store state
 * @returns {Object} -- The Documents
 */
export const documentState = (state) => {
  // Set the filtered documents
  const documents = filteredDocuments(state);

  // Calculate the number of documents
  const docsCount = state.reader.documentList.filteredDocIds ?
    state.reader.documentList.filteredDocIds.length :
    Object.values(documents).length;

  // Return the Filtered Documents and count
  return { documents, docsCount };
};

/**
 * State for the Document List Screen
 * @param {Object} state -- The current Redux Store state
 * @returns {Object} -- The Documents List State
 */
export const documentListScreen = (state) => {
  // Get the filtered documents and count
  const { documents, docsCount } = documentState(state);

  return {
    documents,
    docsCount,
    currentDocument: state.reader.documentViewer.selected,
    storeDocuments: state.reader.documentList.documents,
    documentList: state.reader.documentList,
    comments: state.reader.annotationLayer.comments,
    documentsView: documentsView(
      Object.values(documents),
      state.reader.documentList.filterCriteria,
      state.reader.documentList.view
    ),
    tagOptions: state.reader.documentViewer.tagOptions,
    filterCriteria: state.reader.documentList.filterCriteria,
    filteredDocIds: state.reader.documentList.filteredDocIds,
    searchCategoryHighlights: state.reader.documentList.searchCategoryHighlights,
    manifestVbmsFetchedAt: state.reader.documentList.manifestVbmsFetchedAt,
    manifestVvaFetchedAt: state.reader.documentList.manifestVvaFetchedAt,
    queueRedirectUrl: state.reader.documentList.queueRedirectUrl,
    queueTaskType: state.reader.documentList.queueTaskType,
    documentFilters: state.reader.documentList.pdfList.filters,
    isPlacingAnnotation: state.reader.annotationLayer.isPlacingAnnotation,
    appeal: state.reader.appeal.selected,
    scale: state.reader.documentViewer.scale
  };
};

/**
 * State for the Document Screen
 * @param {Object} state -- The current Redux Store state
 * @returns {Object} -- The Document State
 */
export const documentScreen = (state) => {
  // Get the filtered documents and count
  const { documents, docsCount } = documentState(state);
  const categories = Object.keys(documentCategories).reduce((list, key) => {
    // Set the current Category
    const cat = state.reader.documentViewer.selected[formatCategoryName(key)] ? key : '';

    // Return the Categories Object
    return {
      ...list,
      [cat]: true
    };
  }, {});

  // Filter the comments for the current document
  const comments = state.reader.annotationLayer.comments.filter((comment) =>
    comment.document_id === state.reader.documentViewer.selected.id);

  return {
    documents,
    docsCount,
    categories,
    comments,
    keyboardInfoOpen: state.reader.documentViewer.keyboardInfoOpen,
    pendingDeletion: state.reader.annotationLayer.pendingDeletion,
    droppedComment: state.reader.annotationLayer.droppedComment,
    addingComment: state.reader.annotationLayer.dropping,
    movingComment: state.reader.annotationLayer.moving,
    savingComment: state.reader.annotationLayer.saving,
    selectedComment: state.reader.annotationLayer.selected,
    search: state.reader.documentViewer.search,
    canvasList: state.reader.documentViewer.canvasList,
    windowingOverscan: state.reader.documentViewer.windowingOverscan,
    deleteCommentId: state.reader.documentViewer.deleteCommentId,
    shareCommentId: state.reader.documentViewer.shareCommentId,
    filterCriteria: state.reader.documentList.filterCriteria,
    openSections: state.reader.documentViewer.openedAccordionSections,
    currentDocument: state.reader.documentViewer.selected,
    filteredDocIds: state.reader.documentList.filteredDocIds,
    appeal: state.reader.appeal.selected,
    searchCategoryHighlights: state.reader.documentList.searchCategoryHighlights,
    documentFilters: state.reader.documentList.pdfList.filters,
    storeDocuments: state.reader.documentList.documents,
    isPlacingAnnotation: state.reader.annotationLayer.isPlacingAnnotation,
    annotationLayer: state.reader.annotationLayer,
    hidePdfSidebar: state.reader.documentViewer.hidePdfSidebar,
    hideSearchBar: state.reader.documentViewer.hideSearchBar,
    scale: state.reader.documentViewer.scale,
    errors: {
      comments: state.reader.annotationLayer.errors
    },
  };
};
