import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AnimatedHeading from "@/components/AminatedHeading";

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
    console.log(formData);

    // Insert the new post 
    await db.query(
      `INSERT INTO travelpost (traveller_name, title, location, image_url)
      VALUES ($1, $2, $3, $4)`,
      [formData.traveller_name, formData.title, formData.location, formData.image_url]
    );
    console.log("Post saved!");

  
    revalidatePath("/travelpost");
    redirect("/travelpost");
  }

  return (
    <div className="bg-white min-h-screen py-12 px-8">
      <AnimatedHeading 
        text=" Add new Travel Posts"  
        className="text-cyan-800"  
      />

      <form action={handleSubmit} className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="traveller_name" className="block text-sm font-medium text-gray-700">
            Traveller Name
          </label>
          <input
            type="text"
            name="traveller_name"
            id="traveller_name"
            placeholder="Enter traveller name"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter post title"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter location"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image_url"
            id="image_url"
            placeholder="Enter image URL"
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}