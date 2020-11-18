// External Dependencies
import { sortBy, round, isEmpty } from 'lodash';

// Local Dependencies
import { loadDocuments } from 'store/reader/document';
import {
  documentCategories,
  MINIMUM_ZOOM,
  DOCUMENTS_OR_COMMENTS_ENUM,
  CATEGORIES,
  ACTION_NAMES,
  INTERACTION_TYPES
} from 'store/constants/reader';
import { formatCategoryName, formatFilterCriteria, searchString } from 'utils/reader';
import { fetchAppealDetails, setZoomLevel } from 'store/reader/pdfViewer';
import { stopPlacingAnnotation } from 'store/reader/annotationLayer';
import { navigate } from 'store/routes';

/*
 * Helper Method to load documents into the store only when necessary
 * @param {string} loadedId -- Id of the Appeal in the Store
 * @param {string} vacolsId -- The New Appeal ID
 */
export const fetchDocuments = ({ loadedAppealId, appeal, params }, dispatch) => () => {
  // Set the crumbs for the Reader app
  const crumbs = [{
    breadcrumb: 'Reader',
    path: '/reader/appeal/:vacolsId/documents'
  }];

  // Update the crumbs if navigating to a document
  if (params.docId) {
    crumbs.push({
      breadcrumb: 'Document Viewer',
      path: '/reader/appeal/:vacolsId/documents/:docId'
    });
  }

  // Load the crumbs into the navbar
  dispatch(navigate({ crumbs }));

  // Load the Data Needed by the Documents List
  if (loadedAppealId !== params.vacolsId) {
    // Load the new Documents
    dispatch(loadDocuments(params));
  }

  // Determine whether to load the appeal details
  if (isEmpty(appeal) || ((appeal.vacols_id || appeal.external_id) !== params.vacolsId)) {
    dispatch(fetchAppealDetails(params.vacolsId));
  }
};

/**
 * Helper Method to Calculate the Documents List View
 * @param {array} documents -- List of documents for the selected appeal
 * @param {Object} filter -- The Document Filter Criteria
 * @param {string} view -- The Currently selected view `viewingDocumentsOrComments`
 * @returns {string} -- The type of view to load in the documents list
 */
export const documentsView = (documents, filter, view) => {
  // Return no Results if there are no documents found matching the search
  if (!documents.length && filter.searchQuery.length > 0) {
    return 'none';
  }

  // Set the Comments view if viewing the Comments table
  if (view === DOCUMENTS_OR_COMMENTS_ENUM.COMMENTS) {
    return 'comments';
  }

  // Default to return the documents table
  return 'documents';
};

/**
 * Helper Method to Calculate the Document Rows
 * @param {array} documents -- The list of documents for the selected appeal
 * @param {array} annotationsPerDocument -- The list of comments for each document
 * @returns {array} -- The list of comment rows for the table
 */
export const documentRows = (ids, documents, annotations) => ids.map((id) => {
  // Set the current document
  const document = documents[id];

  // Get the documents with comments
  const [docWithComments] = annotations.filter((note) => note.documentId === document.id);

  // Apply the comment if present
  if (docWithComments && document.listComments) {
    return {
      ...document,
      isComment: true
    };
  }

  // Default to return the document
  return document;
});

/**
 * Helper Method to get the Categories for each Document
 * @param {Object} document -- The Document to get categories
 */
export const categoriesOfDocument = (document) =>
  sortBy(Object.keys(documentCategories).filter((categoryName) =>
    document[formatCategoryName(categoryName)]), 'renderOrder');

/**
 * Helper Method to set the Zoom of the Document
 * @param {number} delta -- The Change in zoom
 * @param {number} scale -- The current scale
 * @param {Function} dispatch -- Redux Dispatcher to update the store
 */
export const zoom = (delta, scale, dispatch) => () => {
  // Calculate the change in scale
  const nextScale = Math.max(MINIMUM_ZOOM, round(scale + delta, 2));

  // Calculate the zoom direction
  const zoomDirection = delta > 0 ? 'in' : 'out';

  // Update the windows analytics with the action
  window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, `zoom ${zoomDirection}`, nextScale);

  // Update the store with the new scale
  dispatch(setZoomLevel(nextScale));
};

/**
 * Helper Method to download the document
 * @param {string} contentUrl -- The absolute path to the document
 * @param {string} type -- The type of document
 */
export const openDownloadLink = (contentUrl, type) => {
  // Update the windows analytics with the action
  window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, 'download');

  // Trigger the file download
  window.open(`${contentUrl}?type=${type}&download=true`);
};

/**
 * Helper Method to change to the previous document
 * @param {string} docId -- The ID of the previous document
 * @param {Function} showPdf -- Helper method that changes documents
 * @param {Function} dispatch -- Redux Dispatcher to update the store
 */
export const showPreviousDocument = (docId, showPdf, dispatch) => {
  // Update the windows analytics with the action
  window.analyticsEvent(
    CATEGORIES.VIEW_DOCUMENT_PAGE,
    ACTION_NAMES.VIEW_PREVIOUS_DOCUMENT,
    INTERACTION_TYPES.VISIBLE_UI
  );

  // Change to the Previous document
  showPdf(docId);

  // Update the annotation state
  dispatch(stopPlacingAnnotation(INTERACTION_TYPES.VISIBLE_UI));
};

/**
 * Helper Method to change to the previous document
 * @param {string} docId -- The ID of the previous document
 * @param {Function} showPdf -- Helper method that changes documents
 * @param {Function} dispatch -- Redux Dispatcher to update the store
 */
export const showNextDocument = (docId, showPdf, dispatch) => {
  // Update the windows analytics with the action
  window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, ACTION_NAMES.VIEW_NEXT_DOCUMENT, INTERACTION_TYPES.VISIBLE_UI);

  // Change to the next Document
  showPdf(docId);

  // Update the annotation state
  dispatch(stopPlacingAnnotation(INTERACTION_TYPES.VISIBLE_UI));
};

/**
 * Helper Method to adjust the Document to fit the current screen
 * @param {number} scale -- The scale the screen is currently
 * @param {number} zoomLevel -- The Current Zoom Level
 * @param {Function} dispatch -- Redux Dispatcher to update the store
 */
export const fitToScreen = (scale, zoomLevel, dispatch) => {
  // Update the window analytics with the current action
  window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, 'fit to screen');

  // Toggle fit to screen property.
  if (scale === zoomLevel) {
    dispatch(setZoomLevel(1));
  } else {
    dispatch(setZoomLevel(zoom));
  }
};

/**
 * Helper Method to get the page number by page index
 * @param {number} index -- The index of the current page
 */
export const pageNumber = (index) => index + 1;

/**
 * Helper Method to get the index number by page number
 * @param {number} number -- The number of the current page
 */
export const pageIndex = (number) => number - 1;

/**
 * Helper Method to translate the rotation into X coordinates
 * @param {number} rotation -- The current document rotation
 * @param {number} outerHeight -- The height of the containing element
 * @param {number} outerWidth -- The width of the containing element
 */
export const translateX = (rotation, outerHeight, outerWidth) =>
  Math.sin((rotation / 180) * Math.PI) * (outerHeight - outerWidth) / 2;

/**
 * Helper Method to count the number of columns for a specific page
 * @param {number} width -- The Width of the screen
 * @param {number} pageWidth -- The Width of the page
 * @param {number} numPages -- The number of pages
 */
export const columnCount = (width, pageWidth, numPages) =>
  Math.min(Math.max(Math.floor(width / pageWidth), 1), numPages);

/**
 * Helper Method to sort an object by an array of keys
 * @param {Object} options -- Values to sort the list by and optional direction
 */
export const sortKeysBy = ({ keys, list, value, dir }) => keys.sort((first, second) => {
  // Return the keys if there is no list
  if (!list[first]) {
    return keys;
  }

  // Map fields according to the sort order and value, default to ascending sort
  const fieldA = dir === 'desc' ? list[second][value] : list[first][value];
  const fieldB = dir === 'desc' ? list[first][value] : list[second][value];

  // Handle string columns
  if (typeof fieldA === 'string') {
    return fieldA.localeCompare(fieldB);
  }

  // Field A is less than B and not a string
  if (fieldA < fieldB) {
    return -1;
  }

  // Field A is greater than B and not a string
  if (fieldA > fieldB) {
    return 1;
  }

  // Field A is equivalent to B and not a string
  return 0;
});

/**
 * Helper Method to filter documents based on criteria object
 * @param {Object} criteria -- The criteria to filter on
 * @param {Object} documents -- The list of documents
 * @returns {array} -- Contains the IDs of the filtered documents
 */
export const filterDocuments = (criteria, documents, state) => {
  // Get the Filters to apply
  const { active, filters } = formatFilterCriteria(criteria);

  // Set the Original Documents according to the initial state
  const docs = state.storeDocuments ? state.storeDocuments : documents;

  // Set the IDs to the store doc IDs or the filtered IDs if active
  const ids = active.length ? Object.keys(docs).map((doc) => docs[doc].id).
    filter((id) => {
      // Initialize whether to show the document
      let include = true;

      // Set the Current Document
      const document = docs[id];

      // Apply the Category filters
      if (!isEmpty(filters.category)) {
        include = filters.category.filter((name) => document[name] === true).length;
      }

      // Apply the search filters
      if (filters.searchQuery) {
        include = searchString(filters.searchQuery, state)(document);
      }

      // Default return the object to be truthy
      return include;
    }) :
    Object.keys(docs).map((doc) => docs[doc].id);

  // Return the filtered IDs
  return sortKeysBy({
    keys: ids,
    list: docs,
    value: criteria.sort.sortBy,
    dir: !criteria.sort.sortAscending && 'desc'
  });
};
