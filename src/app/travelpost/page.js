import { db } from "@/utils/dbConnection";
import Link from "next/link";

export const metadata = {
  title: "Travel Posts",
  description: "Explore various travel posts shared by the community.",
};


export default async function PostsPage({ searchParams }) {
  // Fetch my posts from db
  let travelPosts = await db.query(`SELECT * FROM travelpost ORDER BY title ASC`);
  
  // if sort is set to 'desc' Reverse the order 
  if (searchParams.sort === "desc") {
    travelPosts.rows.reverse();  
  }

  const posts = travelPosts.rows; 

  return (
    <div>
      <h1>Travel Posts</h1>

      <div className="my-4">
        <Link href="/travelpost?sort=asc">
          <button className="mr-4 border border-gray-500 p-2">Sort Ascending</button>
        </Link>
        <Link href="/travelpost?sort=desc">
          <button className="border border-gray-500 p-2">Sort Descending</button>
        </Link>
      </div>

     
      <ul className="list-disc ml-5">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href={`/travelpost/${post.id}`}>
                  {post.title} - {post.location}
                
              </Link>
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>
  );
}
