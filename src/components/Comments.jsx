import React from 'react';

export const Comments = ({ comments }) => {
  return (
    <div className="space-y-6 mt-10">
      <h4>Check out the comments others have left!</h4>
      {comments.records.map((comment, index) => {
        return (
          <div
            key={comment.fields.name + index}
            className="flex space-x-4 border rounded-lg mt-4 p-4"
          >
            <div className="flex-grow">
              <div className="flex space-x-2">
                <b>{comment.fields.name}</b>
              </div>
              <p>{comment.fields.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
