
import Images from "@/components/Images";

export const metadata = {
    title: "Home page",
    description: "This blogs is for people who love to travel",
  };
  
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 my-10">Explore Our Travel Moments</h2>
      <p className="text-center text-lg mb-10 text-gray-600">
        Discover stunning destinations and moments captured by travelers around the world.
      </p>

      <Images/>
     
    </div>
  );
}