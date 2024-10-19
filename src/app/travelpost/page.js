import AnimatedHeading from "@/components/AminatedHeading";
import { db } from "@/utils/dbConnection";
import Link from "next/link";


export const metadata = {
  title: "Travel Posts",
  description: "Explore various travel posts shared by the community.",
};


export default async function PostsPage({ searchParams }) {
  // Fetch my posts from db
  let travelPosts = await db.query(`SELECT * FROM travelpost ORDER BY title ASC`);

 
  if (searchParams.sort === "desc") {
    travelPosts.rows.reverse();
  }

  const posts = travelPosts.rows;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-8">
      <AnimatedHeading text="Travel Posts" className="text-cyan-800 mb-10 text-center" />

      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/travelpost?sort=asc">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Sort Ascending
          </button>
        </Link>
        <Link href="/travelpost?sort=desc">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Sort Descending
          </button>
        </Link>
      </div>

      <ul className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="mb-4 border-b pb-4 last:border-b-0">
              <Link href={`/travelpost/${post.id}`} className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                {post.title} - <span className="text-gray-600">{post.location}</span>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts found.</p>
        )}
      </ul>
    </div>
  );
}
