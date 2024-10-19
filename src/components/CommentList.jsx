"use client"; 

import React from "react";

const CommentList = ({ comments, deleteComment, postId }) => {
  return (
    <ul className="space-y-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <li key={comment.id} className="bg-gray-50 p-4 rounded-md shadow-sm">
            <strong className="text-gray-800">{comment.name}:</strong>
            <p className="text-gray-700">{comment.comment}</p>
            <button
              className="text-red-500 mt-2"
              onClick={() => deleteComment(comment.id, postId)} 
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
      )}
    </ul>
  );
};

export default CommentList;
