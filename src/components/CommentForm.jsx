import React from 'react';

export const CommentForm = ({ page }) => {
  const [name, setName] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(
      `${import.meta.env.PUBLIC_NETLIFY_URL}/.netlify/functions/addComment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          comment,
          email,
          page
        })
      }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-lg mx-auto shadow-md mt-4">
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="mb-2">
          <input
            name="name"
            placeholder="Bruce Wayne"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 mb-2"
          />
          <input
            name="email"
            placeholder="bruce.wayne@gmail.com"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 mb-2"
          />
          <textarea
            placeholder="Write your comment here"
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            id="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
        >
          Comment
        </button>
      </form>
    </div>
  );
};
