import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white select-none">
      {/* Logo or Icon animation */}
      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: [0, 360, 720],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.2,
        }}
        className="w-16 h-16 rounded-full border-4 border-t-transparent border-blue-500"
      />

      {/* Brand name or text shimmer */}
      <motion.h2
        className="mt-6 text-xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0.9, 1], y: [20, 0, 0, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 0.8,
        }}
      >
        Loading Medivolt...
      </motion.h2>

      {/* Progress bar shimmer */}
      <div className="w-48 h-1.5 mt-8 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
