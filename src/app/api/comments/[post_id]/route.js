// app/api/comments/[post_id]/route.js
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { post_id } = params;
  const formData = await request.formData();

  const name = formData.get("name");
  const comment = formData.get("comment");

  await db.query(
    `INSERT INTO comments (post_id, name, comment) VALUES ($1, $2, $3)`,
    [post_id, name, comment]
  );

  // revalidate the path to refresh the comments on the page
  revalidatePath(`/travelpost/${post_id}`);

  // redirect to the current post page after adding the comment
  return NextResponse.redirect(`/travelpost/${post_id}`);
}
