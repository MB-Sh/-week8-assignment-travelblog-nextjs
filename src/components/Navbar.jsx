"use client";  // To enable client-side interactivity

import Link from "next/link";
import { motion } from "framer-motion";  // Import Framer Motion for animations

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Travel Post", href: "/travelpost" },
    { name: "Add Travel Post", href: "/addtravelpost" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 sticky top-0 z-50 shadow-lg text-white flex gap-5 justify-center md:justify-end"
    >
      {links.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mx-2"
        >
          <Link href={link.href} className="hover:text-yellow-300 transition-colors">
            {link.name}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
