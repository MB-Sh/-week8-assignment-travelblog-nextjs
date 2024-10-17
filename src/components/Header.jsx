"use client";
import { motion } from "framer-motion";
export default function Header(){
    return(
        <>
        <motion.div initial={{opacity:0,scale:0.1}} 
        animate={{ opacity: 1, scale:1 }}
        transition={{duration:3}}
        >
            
            <h1 className="font-semibold text-white flex flex-col items-center "> Welcome Travellers</h1>
        </motion.div>
        </>
    );
  }
  