import React, { useState } from "react";
import FileUpload from "../FileUpload";

export default function DocumentsStep({ onSubmit, onBack, loading }) {
  const [files, setFiles] = useState({ govId: null, license: null, certificates: [] });

  const handleFile = (key, file, multiple = false) => {
    if (multiple) {
      setFiles((p) => ({ ...p, [key]: [...(p[key] || []), ...file] }));
    } else {
      setFiles((p) => ({ ...p, [key]: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!files.govId || !files.license) return;
    onSubmit(files);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Upload Documents</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUpload label="Government ID" onChange={(f) => handleFile("govId", f)} />
        <FileUpload label="Medical License" onChange={(f) => handleFile("license", f)} />
      </div>

      <FileUpload
        label="Certificates (multiple)"
        multiple
        onChange={(f) => handleFile("certificates", f, true)}
      />

      <div className="flex space-x-4 mt-4">
        <button type="button" onClick={onBack} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Back</button>
        <button type="submit" disabled={loading} className="flex-1 bg-purple-700 text-white py-3 rounded-lg">
          {loading ? "Uploading..." : "Submit for Verification"}
        </button>
      </div>
    </form>
  );
}
