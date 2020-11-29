// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Local Dependencies
import { EditComment } from 'components/reader/DocumentViewer/Sidebar/EditComment';
import { CannotSaveAlert } from 'components/reader/DocumentViewer/CannotSaveAlert';
import { plusIcon } from 'app/components/RenderFunctions';
import Button from 'app/components/Button';
import { Comment } from 'components/reader/DocumentViewer/Sidebar/Comment';

/**
 * Sidebar Comment Component for Document Screen
 * @param {Object} props --  Contains details about the comments and managing comments
 */
export const SidebarComments = ({
  comments,
  addComment,
  droppedComment,
  errors,
  createAnnotation,
  updateComment,
  stopPlacingAnnotation,
  cancelEditAnnotation,
  handleClick,
  commentRef,
  selectedComment,
  currentDocument,
  saveComment,
  cancelDrop,
  createComment,
  ...props
}) => (
  <div>
    <span className="cf-right-side cf-add-comment-button">
      <Button name="AddComment" onClick={addComment} disabled={Boolean(droppedComment)} >
        <span>{plusIcon()}&nbsp; Add a comment</span>
      </Button>
    </span>
    <div style={{ clear: 'both' }}></div>
    <div className="cf-comment-wrapper">
      {errors?.comments?.comment?.visible && <CannotSaveAlert message={errors.comments.comment.message} />}
      <div className="cf-pdf-comment-list">
        {droppedComment && (
          <EditComment
            {...props}
            resetEdit={cancelDrop}
            comment={droppedComment}
            id="addComment"
            disableOnEmpty
            onChange={(val) => updateComment({ ...droppedComment, pendingComment: val })}
            changeDate={(val) => updateComment({ ...droppedComment, pendingDate: val })}
            onCancelCommentEdit={stopPlacingAnnotation}
            saveComment={() => createComment({
              ...droppedComment,
              relevant_date: droppedComment.pendingDate || droppedComment.relevant_date,
              comment: droppedComment.pendingComment || droppedComment.comment
            })}
          />
        )}
        {comments.map((comment, index) => comment.id !== droppedComment?.id && (
          <React.Fragment key={index}>
            {comment.editing ? (
              <EditComment
                {...props}
                id={`editCommentBox-${comment.temporaryId || comment.id}`}
                saveComment={() => saveComment({
                  ...comment,
                  relevant_date: comment.pendingDate || comment.relevant_date,
                  comment: comment.pendingComment || comment.comment
                })}
                comment={comment}
                onCancelCommentEdit={cancelEditAnnotation}
                onChange={(val) => updateComment({ ...comment, pendingComment: val })}
                changeDate={(val) => updateComment({ ...comment, pendingDate: val })}
                value={comment.comment}
                key={comment.temporaryId || comment.id}
              />
            ) : (
              <div ref={commentRef} key={comment.temporaryId || comment.id}>
                <Comment
                  {...props}
                  id={`comment${index}`}
                  comment={comment}
                  selected={comment.id === selectedComment.id}
                  handleClick={handleClick}
                  page={comment.page}
                  date={comment.relevant_date}
                  currentDocument={currentDocument}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

SidebarComments.propTypes = {
  currentDocument: PropTypes.object,
  comments: PropTypes.array,
  addComment: PropTypes.func,
  droppedComment: PropTypes.object,
  errors: PropTypes.object,
  createAnnotation: PropTypes.func,
  updateComment: PropTypes.func,
  updateCommentDate: PropTypes.func,
  stopPlacingAnnotation: PropTypes.func,
  cancelEditAnnotation: PropTypes.func,
  requestEditAnnotation: PropTypes.func,
  handleClick: PropTypes.func,
  commentRef: PropTypes.element,
  startEditAnnotation: PropTypes.func,
  selectedComment: PropTypes.object,
};
