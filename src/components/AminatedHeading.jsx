"use client";  

import { motion } from "framer-motion"; 

export default function AnimatedHeading({ text, className = "", initial, animate, transition }) {
  return (
    <motion.h2
      className={`text-3xl font-bold text-center mb-8 ${className}`}
      initial={initial || { opacity: 0, y: -50 }}  
      animate={animate || { opacity: 1, y: 0 }}  
      transition={transition || { duration: 1.2, ease: "easeOut" }}  
    >
      {text}
    </motion.h2>
  );
}
