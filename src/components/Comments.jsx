import React from 'react';

export const Comments = ({ comments }) => {
  console.log('Comments in React', comments);
  return (
    <div className="comments">
      {comments.records.map((comment, index) => {
        console.log(comment);
        return (
          <div key={comment.fields.name + index} className="comment">
            <div className="comment-header">
              <div className="comment-name">{comment.fields.name}</div>
            </div>
            <p>{comment.fields.comment}</p>
          </div>
        );
      })}
    </div>
  );
};
