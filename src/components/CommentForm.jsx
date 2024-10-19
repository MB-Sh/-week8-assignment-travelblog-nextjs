"use client"; 
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function CommentForm({ postId }) {
  const router = useRouter();
  const formRef = useRef();

  
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); 

    
    const response = await fetch(`/api/comments/${postId}`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.refresh();
      setName(''); 
      setComment('');
    } else {
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="space-y-4 mt-6">
      <input type="hidden" name="post_id" value={postId} />
      <textarea
        name="comment"
        placeholder="Add your comment"
        required
        className="border-2 border-gray-300 rounded-md p-3 w-full text-gray-800 resize-none"
        rows="4"
      ></textarea>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="border-2 border-gray-300 rounded-md p-3 w-full text-gray-800"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Make Comment
      </button>
    </form>
  );
}
