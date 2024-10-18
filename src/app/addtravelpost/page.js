import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddTravelPost() {

  // Handle submit
  async function handleSubmit(formValues) {
    "use server"; 

  
    const formData = {
      traveller_name: formValues.get("traveller_name"),
      title: formValues.get("title"),
      location: formValues.get("location"),
      image_url: formValues.get("image_url"),
    };

    // Insert the new post 
    await db.query(
      `INSERT INTO travelpost (traveller_name, title, location, image_url)
      VALUES ($1, $2, $3, $4)`,
      [formData.traveller_name, formData.title, formData.location, formData.image_url]
    );

  
    revalidatePath("/travelpost");
    redirect("/travelpost");
  }

  return (
    <>
      <h2 className="text-cyan-800 flex flex-col items-center">
        Add a new Travel Post
      </h2>
      
      
      <form action={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="traveller_name">Traveller Name</label>
        <input
          type="text"
          name="traveller_name"
          id="traveller_name"
          placeholder="Add traveller name here"
          required
          className="text-red-400"
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add post title here"
          required
          className="text-red-400"
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location here"
          required
          className="text-red-400"
        />

        <label htmlFor="image_url">Image URL</label>
        <input
          type="url"
          name="image_url"
          id="image_url"
          placeholder="Image URL here"
          required
          className="text-red-400"
        />

        <button type="submit" className="border-2 border-cyan-200 text-fuchsia-600">
          Submit
        </button>
      </form>
    </>
  );
}
