// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { constant } from 'lodash';

// Local Dependencies
import Table from 'app/components/Table';
import { Comment } from 'components/reader/DocumentViewer/Sidebar/Comment';
import { documentHeaders } from 'components/reader/DocumentList/DocumentsTable/Columns';

/**
 * Comments Table Component
 * @param {Object} -- Props contain the documents and annotations
 */
export const CommentsTable = ({ showPdf, documents, comments, filterCriteria, show, documentPathBase, ...props }) => {
  // Filter the rows
  const rows = filterCriteria?.searchQuery ? comments.filter((item) => item.comment.includes(filterCriteria?.searchQuery)) : comments;

  // Get the row Span for the table
  const span = () => documentHeaders(props).length;

  return show && (
    <div>
      <Table
        columns={[
          {
            span,
            header: 'Sorted by relevant date',
            valueFunction: (comment, index) => {
              // Get the Comment document
              const doc = documents[comment.document_id];

              return (
                <Comment
                  showPdf={showPdf}
                  documentPathBase={documentPathBase}
                  currentDocument={doc}
                  comment={comment}
                  key={index}
                  id={`comment${doc?.id}-${index}`}
                  selected={false}
                  page={comment?.page}
                  date={comment?.relevant_date}
                  horizontalLayout
                  {...props}
                />
              );
            }
          }
        ]}
        rowObjects={rows}
        className="documents-table full-width"
        bodyClassName="cf-document-list-body"
        getKeyForRow={(_, row) => row.uuid}
        headerClassName="comments-table-header"
        rowClassNames={constant('borderless')}
      />
    </div>
  );
};

CommentsTable.propTypes = {
  documents: PropTypes.array.isRequired,
  showPdf: PropTypes.func,
  comments: PropTypes.array,
  filterCriteria: PropTypes.object,
  show: PropTypes.bool
};
