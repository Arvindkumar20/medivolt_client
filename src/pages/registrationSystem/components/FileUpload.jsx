import React from "react";

export default function FileUpload({ label, accept, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files[0])}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg text-white px-4 py-3"
      />
    </div>
  );
}
