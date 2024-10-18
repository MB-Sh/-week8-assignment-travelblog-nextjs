// app/api/comments/route.js
import { db } from "@/utils/dbConnection";
import { NextResponse } from "next/server";

// POST method to handle comment submission
export async function POST(request) {
  try {
    // Parse the incoming request body
    const formData = await request.json();
    
    const { post_id, name, comment } = formData;

    // Insert the new comment into the comments table
    await db.query(
      `INSERT INTO comments (post_id, name, comment) VALUES ($1, $2, $3)`,
      [post_id, name, comment]
    );

    return NextResponse.json({ message: "Comment added successfully!" });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json({ message: "Failed to add comment." }, { status: 500 });
  }
}
