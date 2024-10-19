import Image from "next/image";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection";
import AnimatedHeading from "@/components/AminatedHeading";
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Post Details",
  description: "Detailed view of a travel post",
};

// Function to handle delete 
async function deleteComment(commentId, postId) {
  "use server";
  
  
  await db.query(`DELETE FROM comments WHERE id = $1`, [commentId]);

 
  redirect(`/travelpost/${postId}`);
}

export default async function TravelPostIdPage({ params }) {
  const { id } = params; 

  // Fetch the travel post by its ID
  const travelPostId = await db.query(`SELECT * FROM travelpost WHERE id = $1`, [id]);
  
  // Fetch the comments for the post
  const comments = await db.query(
    `SELECT * FROM comments WHERE post_id = $1`, 
    [id]
  );

  // Get the post and comments data
  const post = travelPostId.rows[0];
  const postComments = comments.rows;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <AnimatedHeading text="Travel Posts" className="text-cyan-800" />

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <BackButton /> 
      
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

        <CommentList comments={postComments} deleteComment={deleteComment} postId={id} />

        <CommentForm postId={id} />
      </div>
     </div>
    </div>
  );
}
