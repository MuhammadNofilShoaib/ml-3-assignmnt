'use client';

import { useState } from 'react';

interface Comment {
  id: string;
  text: string;
}

const Comment = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState <Comment[]> ([]);
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    if (!commentText.trim()) return;
    setComments([...comments, { id: postId, text: commentText }]);
    setCommentText('');
  };
  

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="mb-4">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-2">
            {comment.text}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Add a comment"
        />
        <button onClick={addComment} className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default Comment;