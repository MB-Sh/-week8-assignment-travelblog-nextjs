"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import homepic from "@/../public/travel.png";
import AnimatedHeading from "@/components/AminatedHeading";

export default function Aboutpage() {
  const { scrollYProgress } = useScroll(); 

 
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen p-8 relative"
    >
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }} 
      />

      
      <AnimatedHeading 
        text="About Us"  
        className="text-cyan-800" 
      />

      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.p
          className="text-lg text-gray-700 leading-7 mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.7 }}
        >
          Welcome to our travel blog! Here, you will find a collection of
          stories, tips, and experiences from passionate travellers exploring
          the world. Whether you are looking for new travel destinations,
          adventurous trips, or simply some inspiration, you are in the right
          place. Dive into our posts and discover new ways to see the world.

           Kindly leave a comment by telling us your thoughts !
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Image
            src={homepic}
            alt="Travellers"
            width={500}
            height={300}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            placeholder="blur"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
