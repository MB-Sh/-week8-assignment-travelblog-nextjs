// "use client";
// import Image from "next/image";
// import ballon from "@/../public/ballon.jpg";
// import car from "@/../public/car.jpg";
// import hamburg from "@/../public/hamburg.jpg";
// import train from "@/../public/train.jpg";
// import camera from "@/../public/camera.jpg";
// import ship from "@/../public/ship.jpg";
// import { motion } from "framer-motion";
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
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={ballon}
            alt="Hot Air Balloon"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={car}
            alt="Car"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>

       
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={hamburg}
            alt="Hamburg"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={train}
            alt="Train"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={camera}
            alt="Camera"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>


        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={ship}
            alt="Ship"
            width={500}
            height={300}
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div> */}
      {/* </div> */}
    </div>
  );
}