import React from "react";
import { motion } from "framer-motion";
import { Video, Building2 } from "lucide-react";

export default function ConsultationTypeSelector({ selected, onChange }) {
  const types = [
    { id: "in-person", label: "In-Person", icon: <Building2 size={20} /> },
    { id: "online", label: "Online", icon: <Video size={20} /> },
  ];

  return (
    <div className="flex gap-3">
      {types.map((type) => (
        <motion.button
          key={type.id}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border w-full justify-center transition-all duration-300 ${
            selected === type.id
              ? "bg-primary-600/20 border-primary-500 text-primary-300"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:border-primary-400/40"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={() => onChange(type.id)}
        >
          {type.icon}
          {type.label}
        </motion.button>
      ))}
    </div>
  );
}
