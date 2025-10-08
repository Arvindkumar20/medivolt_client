import React from "react";
import { motion } from "framer-motion";

export const ElementLoader = ({ text = "Loading..." }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <motion.div
      className="relative w-16 h-16"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
      <div className="absolute inset-0 border-4 border-t-primary-500 border-gray-700 rounded-full"></div>
    </motion.div>

    <motion.p
      className="text-gray-400 text-lg mt-4 tracking-wide"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      {text}
    </motion.p>
  </div>
);
