import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "../../../components/ui/Button";


export default function ConfirmModal({ show, doctor, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 border border-gray-700/40 rounded-2xl p-8 max-w-md w-full text-center relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <CheckCircle2
              size={72}
              className="text-green-400 mx-auto mb-4 drop-shadow-lg"
            />

            <h2 className="text-2xl font-semibold text-white mb-2">
              Appointment Confirmed!
            </h2>
            <p className="text-gray-400 mb-6">
              Your appointment with <span className="text-primary-400">{doctor?.name}</span>{" "}
              has been successfully booked.
            </p>

            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
