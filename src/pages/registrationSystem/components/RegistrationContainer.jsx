import React from "react";
import { motion } from "framer-motion";

export default function RegistrationContainer({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-3xl p-6 sm:p-8"
    >
      {children}
    </motion.div>
  );
}
