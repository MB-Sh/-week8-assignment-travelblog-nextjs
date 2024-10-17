import Image from "next/image";
import { db } from "@/utils/dbConnection";

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
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>Travel Post Details</h1>
      <h2>{post.title}</h2>
      <p><strong>Location:</strong> {post.location}</p>
      <p><strong>Traveller:</strong> {post.traveller_name}</p>
      <Image
        src={post.image_url}
        alt={post.title}
        width={700}
        height={600}
        className="rounded-lg border-amber-400 border-4 flex flex-col items-center "
      />

      
      <h2>Comments</h2>
      {postComments.length > 0 ? (
        <ul>
          {postComments.map(comment => (
            <li key={comment.id} className="my-2">
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}

    
      <h3>Add a Comment</h3>
      <form action={`/api/comments`} method="POST">
        <input type="hidden" name="post_id" value={id} />
        <textarea
          name="comment"
          placeholder="Add your comment"
          required
          className="border-2 border-gray-300 rounded-md p-2 my-2 w-full"
        ></textarea>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border-2 border-gray-300 rounded-md p-2 my-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit Comment
        </button>
      </form>

      
    </>
  );
}
