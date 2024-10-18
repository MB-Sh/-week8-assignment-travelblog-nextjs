import Image from "next/image";
import { db } from "@/utils/dbConnection";
import AnimatedHeading from "@/components/AminatedHeading";
import { motion } from "framer-motion";

export const metadata = {
  title: "Post Details",
  description: "Detailed view of a travel post",
};

export default async function TravelPostIdPage({ params }) {
    //Dynamic Id
  const { id } = params;  

  // Fetch post using its ID
  const travelPostId = await db.query(`SELECT * FROM travelpost WHERE id = $1`, [id]);
  const comments = await db.query(`SELECT * FROM comments WHERE post_id = $1`, [id]);

  const post = travelPostId.rows[0];  
  const postComments = comments.rows;  
  

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <AnimatedHeading  text="Travel Posts"  className="text-cyan-800"  
      />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h2>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Location:</strong> {post.location}
        </p>
        <p className="text-lg text-gray-600 mb-6">
          <strong>Traveller:</strong> {post.traveller_name}
        </p>
        
        
        <Image
          src={post.image_url}
          alt={post.title}
          width={700}
          height={600}
          className="rounded-lg border-l-cyan-700 border-4 mb-6 shadow-lg mx-auto"
        />
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
        {postComments.length > 0 ? (
          <ul className="space-y-4">
            {postComments.map((comment) => (
              <li key={comment.id} className="bg-gray-50 p-4 rounded-md shadow-sm">
                <strong className="text-gray-800">{comment.name}:</strong>
                <p className="text-gray-700">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}

        {/* Add Comment Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add a Comment</h3>
          <form action={`/api/comments`} method="POST" className="space-y-4">
            <input type="hidden" name="post_id" value={id} />
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
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
