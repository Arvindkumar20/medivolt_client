// src/pages/registration/components/SuccessScreen.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

export default function SuccessScreen({ title = "Registration Submitted!", message, onPrimary }) {
  return (
    <div className="text-center p-8">
      <CheckCircle className="mx-auto h-20 w-20 text-green-400 mb-6" />
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-6">
        {message || "Thanks! Your application is submitted. We'll review your documents and contact you via email / phone."}
      </p>

      {onPrimary && (
        <button
          onClick={onPrimary}
          className="px-6 py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-500 transition"
        >
          Done
        </button>
      )}
    </div>
  );
}
