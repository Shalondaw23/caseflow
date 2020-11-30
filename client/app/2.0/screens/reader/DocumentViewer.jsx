// External Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

// Local Dependencies
import { pdfWrapper } from 'styles/reader/Document/Pdf';
import { fetchDocuments, openDownloadLink } from 'utils/reader/document';
import { focusComment } from 'utils/reader/comments';
import { documentScreen } from 'store/reader/selectors';
import { DocumentHeader } from 'components/reader/DocumentViewer/Header';
import { DocumentSidebar } from 'components/reader/DocumentViewer/Sidebar';
import { DocumentFooter } from 'components/reader/DocumentViewer/Footer';
import { DocumentSearch } from 'app/2.0/components/reader/DocumentViewer/Search';
import { Pdf } from 'app/2.0/components/reader/DocumentViewer/PDF';
import { ZOOM_RATE, MINIMUM_ZOOM, CATEGORIES, PDF_PAGE_HEIGHT } from 'app/2.0/store/constants/reader';
import { ShareComment } from 'app/2.0/components/reader/DocumentViewer/modals/Share';
import { DeleteComment } from 'app/2.0/components/reader/DocumentViewer/modals/Delete';
import {
  showPdf,
  togglePdfSideBar,
  toggleSearchBar,
  toggleAccordion,
  toggleShareModal,
  toggleDeleteModal,
  setOverscanValue,
  saveDescription,
  changeDescription,
  resetDescription,
  handleCategoryToggle,
  setPageNumber,
  searchText
} from 'store/reader/documentViewer';
import {
  selectComment,
  startEdit,
  updateComment,
  saveComment,
  addComment,
  cancelDrop,
  dropComment,
  createComment,
  removeComment,
  startMove,
  moveComment
} from 'store/reader/annotationLayer';

const DocumentViewer = (props) => {
  // Get the Document List state
  const state = useSelector(documentScreen);

  // Create the Dispatcher
  const dispatch = useDispatch();

  // Attach the PDF Worker to the params to setup PDFJS
  const params = {
    ...props.match.params,
    worker: props.pdfWorker,
    currentDocument: state.currentDocument,
    scale: state.scale
  };

  // Calculate the Next and Prev Docs
  const docs = {
    prev: state.filteredDocIds[state.filteredDocIds.indexOf(state.currentDocument.id) - 1],
    current: state.filteredDocIds.indexOf(state.currentDocument.id),
    next: state.filteredDocIds[state.filteredDocIds.indexOf(state.currentDocument.id) + 1],
  };

  // Load the Documents
  useEffect(fetchDocuments({ ...state, params }, dispatch), [params.docId]);

  // Create the Grid Ref
  const gridRef = React.createRef();

  // Create the dispatchers
  const actions = {
    moveComment: (comment) => dispatch(moveComment(comment)),
    startMove: (commentId) => dispatch(startMove(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    dropComment: (comment) => dispatch(dropComment(comment)),
    clickPage: (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (state.addingComment) {
        dispatch(cancelDrop());
      }
    },
    cancelDrop: () => dispatch(cancelDrop()),
    addComment: (event) => {
      event.stopPropagation();
      dispatch(addComment());
    },
    saveComment: (comment) => dispatch(saveComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    editComment: (commentId) => dispatch(startEdit(commentId)),
    resetEdit: () => {
      dispatch(updateComment({}));
      dispatch(startEdit(null));
    },
    selectComment: (comment) => {
      // Scroll to the comment location
      focusComment(comment);

      // Update the store with the selected component
      dispatch(selectComment(comment));
    },
    searchText: (searchTerm, index) => {
      // Calculate the match index
      const maxIndex = index >= state.search.totalMatchesInFile ? 0 : index;
      const matchIndex = index < 0 ? state.search.totalMatchesInFile - 1 : maxIndex;

      dispatch(searchText({ searchTerm, docId: state.currentDocument.id, matchIndex }));
    },
    saveDescription: (description) => dispatch(saveDescription({ docId: state.currentDocument.id, description })),
    changeDescription: (description) => dispatch(changeDescription(description)),
    resetDescription: () => dispatch(resetDescription()),
    setOverscanValue: (val) => dispatch(setOverscanValue(val)),
    handleCategoryToggle: (categoryKey, toggleState) => dispatch(handleCategoryToggle({
      docId: state.currentDocument.id,
      categoryKey,
      toggleState
    })),
    closeShareModal: () => dispatch(toggleShareModal(null)),
    closeDeleteModal: () => dispatch(toggleDeleteModal(null)),
    shareComment: (id) => dispatch(toggleShareModal(id)),
    deleteComment: (id) => dispatch(toggleDeleteModal(id)),
    removeComment: () => dispatch(removeComment({ commentId: state.deleteCommentId, docId: state.currentDocument.id })),
    toggleAccordion: (sections) => dispatch(toggleAccordion(sections)),
    togglePdfSidebar: () => dispatch(togglePdfSideBar()),
    toggleSearchBar: () => dispatch(toggleSearchBar()),
    download: () => openDownloadLink(state.currentDocument.content_url, state.currentDocument.type),
    scrollPage: ({ clientHeight, ...options }) => {
      // Assign the Canvas Elements
      const elements = Array.from(document.getElementsByClassName('canvasWrapper'));

      // Calculate the Page Offset
      const offset = Math.floor(options.scrollTop / PDF_PAGE_HEIGHT);

      // Set the Current page number
      const pageNumber = offset + 1;

      // Update the Pages if the client height and canvas list have changed
      if (clientHeight > 0 && state.canvasList.length !== elements.length && isEmpty(state.selectedComment)) {
        dispatch(showPdf({
          pageNumber,
          currentDocument: state.currentDocument,
          worker: props.pdfWorker,
          scale: state.scale
        }));
      } else if (pageNumber !== state.currentDocument.currentPage) {
        dispatch(setPageNumber(pageNumber));
      }
    },
    overscanIndices: ({ cellCount, overscanCellsCount, startIndex, stopIndex }) => ({
      overscanStartIndex: Math.max(0, startIndex - Math.ceil(overscanCellsCount / 2)),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + Math.ceil(overscanCellsCount / 2))
    }),
    fitToScreen: () => {
      window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, 'fit to screen');

      dispatch(showPdf({
        currentDocument: state.currentDocument,
        worker: props.pdfWorker,
        scale: 1
      }));
    },
    rotateDocument: () => {
      dispatch(showPdf({
        currentDocument: state.currentDocument,
        rotation: state.currentDocument.rotation,
        worker: props.pdfWorker,
        scale: state.scale
      }));
    },
    zoom: (direction) => {
      // Determine the Amount to zoom based on the direction
      const delta = direction === 'in' ? ZOOM_RATE : -ZOOM_RATE;

      // Calculate the new Scale to zoom the document
      const scale = Math.min(Math.max(MINIMUM_ZOOM, state.scale + delta), 2);

      window.analyticsEvent(CATEGORIES.VIEW_DOCUMENT_PAGE, `zoom ${direction}`, scale);

      dispatch(showPdf({ currentDocument: state.currentDocument, worker: props.pdfWorker, scale }));
    },
    setPageNumber: (pageNumber) => {
      gridRef.current?.scrollToPosition({ scrollTop: (pageNumber - 1) * PDF_PAGE_HEIGHT });
    },
    prevDoc: () => {
      const doc = state.documents[docs.prev];

      props.history.push(`/reader/appeal/${params.vacolsId}/documents/${doc.id}`);

      dispatch(showPdf({ currentDocument: doc, worker: props.pdfWorker, scale: state.scale }));
    },
    nextDoc: () => {
      const doc = state.documents[docs.next];

      props.history.push(`/reader/appeal/${params.vacolsId}/documents/${doc.id}`);

      dispatch(showPdf({ currentDocument: doc, worker: props.pdfWorker, scale: state.scale }));
    }
  };

  return (
    <div id="document-viewer" className="cf-pdf-page-container" onClick={state.addingComment === true ? actions.clickPage : null}>
      <div className={classNames('cf-pdf-container', { 'hidden-sidebar': state.hidePdfSidebar })} {...pdfWrapper}>
        <DocumentHeader
          {...state}
          {...actions}
          documentPathBase={`/reader/appeal/${ state.appeal.id }/documents`}
          doc={state.currentDocument}
        />
        <DocumentSearch {...actions} {...state.search} doc={state.currentDocument} hidden={state.hideSearchBar} />
        <Pdf
          {...state}
          {...props}
          {...actions}
          doc={state.currentDocument}
          gridRef={gridRef}
        />
        <DocumentFooter
          {...state}
          {...props}
          {...actions}
          nextDocId={docs.next > 0 ? docs.next : 0}
          prevDocId={docs.prev > 0 ? docs.prev : 0}
          currentIndex={docs.current}
          doc={state.currentDocument}
        />
      </div>
      <DocumentSidebar
        {...state}
        {...props}
        {...actions}
        show={!state.hidePdfSidebar}
        doc={state.currentDocument}
      />
      <ShareComment {...state} {...actions} show={state.shareCommentId !== null} commentId={state.shareCommentId} />
      <DeleteComment {...state} {...actions} show={state.deleteCommentId !== null} />
    </div>
  );
};

DocumentViewer.propTypes = {
  appeal: PropTypes.object,
  history: PropTypes.object,
  pdfWorker: PropTypes.string,
  userDisplayName: PropTypes.string,
  dropdownUrls: PropTypes.array,
  singleDocumentMode: PropTypes.bool,
  match: PropTypes.object,
  annotations: PropTypes.array,

  // Required actions
  onScrollToComment: PropTypes.func,
  stopPlacingAnnotation: PropTypes.func,
};

export default DocumentViewer;
