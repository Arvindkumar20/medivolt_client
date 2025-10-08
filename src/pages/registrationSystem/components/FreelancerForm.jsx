// // src/pages/registration/components/FreelancerForm.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import StepProgress from "./StepProgress";
// import { Input } from "../../../components/ui/Input";
// import FileUpload from "./FileUpload";

// /**
//  * FreelancerForm (3-step)
//  * Step1: Basic (name, email, phone, city, state, password)
//  * Step2: Professional (specialty, experience, education, fees, availability)
//  * Step3: Documents (gov id, license, profile photo, certificates)
//  *
//  * NOTE: Replace API_BASE and endpoints to match your backend.
//  */
// const API_BASE = import.meta.env.VITE_API_URL;

// export default function FreelancerForm({ setStep }) {
//   const [currentStep, setCurrentStep] = useState(1);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     city: "",
//     state: "",
//     specialty: "",
//     experience: "",
//     education: "",
//     consultationFee: "",
//     hourlyRate: "",
//     availability: [], // ['Monday', ...]
//   });

//   const [documents, setDocuments] = useState({
//     govId: null,
//     medicalLicense: null,
//     profilePhoto: null,
//     certificates: [], // multiple
//   });

//   // Try to prefill user basic details if token exists
//   useEffect(() => {
//     // const token = localStorage.getItem("token");
//     // if (!token) return;

//     let mounted = true;
//     const fetchProfile = async () => {
//       try {
//       const resp = await axios.get(`${API_BASE}/auth/me`, {
//   withCredentials: true, // 👈 cookie bhejne ke liye required
// });
// console.log(resp)
//         if (!mounted) return;
//         const user = resp.data.user || {};
//         setForm((prev) => ({
//           ...prev,
//           fullName: user.name || prev.fullName,
//           email: user.email || prev.email,
//           phone: user.phone || prev.phone,
//           city: user.city || prev.city,
//           state: user.state || prev.state,
//         }));
//       } catch (err) {
//         console.log(err)
//         // ignore silently (user not logged in)
//       }
//     };
//     fetchProfile();
//     return () => (mounted = false);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === "availability") {
//       // checkbox group
//       setForm((p) => {
//         const exists = p.availability.includes(value);
//         return {
//           ...p,
//           availability: exists ? p.availability.filter((d) => d !== value) : [...p.availability, value],
//         };
//       });
//       return;
//     }
//     setForm((p) => ({ ...p, [name]: value }));
//   };

//   const handleFile = (key, file, multiple = false) => {
//     if (multiple) {
//       setDocuments((p) => ({ ...p, [key]: [...(p[key] || []), ...file] }));
//     } else {
//       setDocuments((p) => ({ ...p, [key]: file }));
//     }
//   };

//   const validateStep1 = () => {
//     if (!form.fullName || !form.email || !form.phone) {
//       setError("Please fill name, email and phone.");
//       return false;
//     }
//     return true;
//   };

//   const validateStep2 = () => {
//     if (!form.specialty) {
//       setError("Please select your specialty.");
//       return false;
//     }
//     return true;
//   };

//   const handleStep1Submit = async (e) => {
//     e && e.preventDefault();
//     setError("");
//     if (!validateStep1()) return;

//     setLoading(true);
//     try {
//       // POST basic details
//       const token = localStorage.getItem("token");
//       await axios.post(
//         `${API_BASE}/freelancers/basic`,
//         {
//           name: form.fullName,
//           email: form.email,
//           phone: form.phone,
//           password: form.password || undefined,
//           city: form.city,
//           state: form.state,
//         },
//         { headers: token ? { Authorization: `Bearer ${token}` } : {} }
//       );

//       setCurrentStep(2);
//     } catch (err) {
//       console.error(err);
//       setError(err?.response?.data?.message || "Failed to save basic details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStep2Submit = async (e) => {
//     e && e.preventDefault();
//     setError("");
//     if (!validateStep2()) return;

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         `${API_BASE}/freelancers/spec`,
//         {
//           specialty: form.specialty,
//           experience: form.experience,
//           education: form.education,
//           consultationFee: form.consultationFee,
//           hourlyRate: form.hourlyRate,
//           availability: form.availability,
//         },
//         { headers: token ? { Authorization: `Bearer ${token}` } : {} }
//       );

//       setCurrentStep(3);
//     } catch (err) {
//       console.error(err);
//       setError(err?.response?.data?.message || "Failed to save professional details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStep3Submit = async (e) => {
//     e && e.preventDefault();
//     setError("");

//     // Ensure required documents
//     if (!documents.govId || !documents.medicalLicense) {
//       setError("Please upload required documents (Gov ID & Medical License).");
//       return;
//     }

//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const fd = new FormData();
//       fd.append("govId", documents.govId);
//       fd.append("medicalLicense", documents.medicalLicense);
//       if (documents.profilePhoto) fd.append("profilePhoto", documents.profilePhoto);
//       // certificates as multiple
//       if (documents.certificates && documents.certificates.length) {
//         documents.certificates.forEach((f, i) => fd.append(`certificates[${i}]`, f));
//       }

//       await axios.post(`${API_BASE}/freelancers/documents`, fd, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           ...(token ? { Authorization: `Bearer ${token}` } : {}),
//         },
//       });

//       // Completed - go to verification / success
//       setStep("verification"); // or 'success' depending on outer controller flow
//     } catch (err) {
//       console.error(err);
//       setError(err?.response?.data?.message || "Failed to upload documents.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto">
//       <StepProgress currentStep={currentStep} />
//       <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
//         <h3 className="text-xl font-semibold text-white mb-4">Healthcare Professional Registration</h3>

//         {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

//         {currentStep === 1 && (
//           <form onSubmit={handleStep1Submit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input name="fullName" label="Full Name" value={form.fullName} onChange={handleChange} placeholder="Dr. John Smith" />
//               <Input name="email" type="email" label="Email" value={form.email} onChange={handleChange} placeholder="doc@example.com" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm text-gray-300 mb-2">Mobile Number</label>
//                 <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="+91 9876543210" />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-300 mb-2">Password (optional)</label>
//                 <input name="password" value={form.password} onChange={handleChange} type="password" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Create password (if new user)" />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input name="city" label="City" value={form.city} onChange={handleChange} placeholder="Mumbai" />
//               <Input name="state" label="State" value={form.state} onChange={handleChange} placeholder="Maharashtra" />
//             </div>

//             <div className="flex space-x-3 mt-3">
//               <button type="button" onClick={() => setCurrentStep(2)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Skip (if already saved)</button>
//               <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg">
//                 {loading ? "Saving..." : "Continue"}
//               </button>
//             </div>
//           </form>
//         )}

//         {currentStep === 2 && (
//           <form onSubmit={handleStep2Submit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm text-gray-300 mb-2">Specialty</label>
//                 <select name="specialty" value={form.specialty} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
//                   <option value="">Select Specialty</option>
//                   <option>Cardiologist</option>
//                   <option>Neurologist</option>
//                   <option>Orthopedic Surgeon</option>
//                   <option>Pediatrician</option>
//                   <option>Registered Nurse</option>
//                   <option>Nutritionist</option>
//                   <option>Physiotherapist</option>
//                 </select>
//               </div>

//               <Input name="experience" type="number" label="Years of Experience" value={form.experience} onChange={handleChange} placeholder="5" />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-300 mb-2">Education & Certifications</label>
//               <textarea name="education" value={form.education} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="MBBS, MD..."></textarea>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input name="consultationFee" type="number" label="Consultation Fee (₹)" value={form.consultationFee} onChange={handleChange} placeholder="2500" />
//               <Input name="hourlyRate" type="number" label="Hourly Rate (₹)" value={form.hourlyRate} onChange={handleChange} placeholder="1200" />
//             </div>

//             <div>
//               <label className="block text-sm text-gray-300 mb-2">Availability</label>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                 {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
//                   <label key={day} className="flex items-center space-x-2 text-gray-300">
//                     <input name="availability" value={day} checked={form.availability.includes(day)} onChange={handleChange} type="checkbox" className="rounded border-gray-700 bg-gray-800 text-purple-600" />
//                     <span className="text-sm">{day}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div className="flex space-x-4 mt-3">
//               <button type="button" onClick={() => setCurrentStep(1)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Back</button>
//               <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg">
//                 {loading ? "Saving..." : "Continue to Documents"}
//               </button>
//             </div>
//           </form>
//         )}

//         {currentStep === 3 && (
//           <form onSubmit={handleStep3Submit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FileUpload label="Government ID (Aadhaar/PAN)" accept=".pdf,.jpg,.jpeg,.png" onChange={(f) => handleFile("govId", f)} />
//               <FileUpload label="Medical License" accept=".pdf,.jpg,.jpeg,.png" onChange={(f) => handleFile("medicalLicense", f)} />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FileUpload label="Profile Photo" accept=".jpg,.jpeg,.png" onChange={(f) => handleFile("profilePhoto", f)} />
//               <div>
//                 <label className="block text-sm text-gray-300 mb-2">Certificates (multiple)</label>
//                 <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple onChange={(e) => {
//                   const files = Array.from(e.target.files || []);
//                   setDocuments((p) => ({ ...p, certificates: [...(p.certificates || []), ...files] }));
//                 }} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" />
//                 {documents.certificates && documents.certificates.length > 0 && (
//                   <div className="text-xs text-gray-300 mt-2">{documents.certificates.length} file(s) ready</div>
//                 )}
//               </div>
//             </div>

//             <div className="flex space-x-4 mt-3">
//               <button type="button" onClick={() => setCurrentStep(2)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Back</button>
//               <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg">
//                 {loading ? "Uploading..." : "Submit for Verification"}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import StepProgress from "./StepProgress";
import BasicInfoStep from "./freelancer/BasicInfoStep";
import ProfessionalInfoStep from "./freelancer/ProfessionalInfoStep";
import DocumentsStep from "./freelancer/DocumentsStep";

const API_BASE = import.meta.env.VITE_API_URL;

export default function FreelancerForm({ setStep }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    specialization: "",
    qualifications: "",
    experienceYears: "",
    consultationFee: "",
    clinicName: "",
    clinicAddress: "",
    availableDays: [],
  });

  const [documents, setDocuments] = useState({
    govId: null,
    license: null,
    certificates: [],
  });

  // ✅ Step 1: Prefill user info (via cookie)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await axios.get(`${API_BASE}/auth/me`, {
          withCredentials: true,
        });
        const user = resp.data?.user || {};
        setForm((prev) => ({
          ...prev,
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          city: user.city || "",
          state: user.state || "",
        }));
      } catch {
        // ignore unauthenticated
      }
    };
    fetchProfile();
  }, []);

  // ✅ Step Navigation
  const nextStep = () => setCurrentStep((p) => p + 1);
  const prevStep = () => setCurrentStep((p) => p - 1);

  // ✅ Step 1: Basic Info → POST /doctors/basic
  const handleStep1 = async (data) => {
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${API_BASE}/doctors`,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          state: data.state,
        },
        { withCredentials: true }
      );

      setForm((p) => ({ ...p, ...data }));
      nextStep();
    } catch (err) {
        console.log(err)
      setError(err.response?.data?.message || "Failed to save basic details.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: Professional Info → POST /doctors/professional
  const handleStep2 = async (data) => {
    setLoading(true);
    setError("");
    try {
      await axios.post(
        `${API_BASE}/doctors`,
        {
          specialization: data.specialization,
          qualifications: data.qualifications,
          experienceYears: data.experienceYears,
          consultationFee: data.consultationFee,
          clinicName: data.clinicName,
          clinicAddress: data.clinicAddress,
          availableDays: data.availableDays,
        },
        { withCredentials: true }
      );

      setForm((p) => ({ ...p, ...data }));
      nextStep();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to save professional details."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 3: Upload Documents → POST /doctors/documents
  const handleSubmitDocs = async (files) => {
    setDocuments(files);
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      if (files.govId) fd.append("govId", files.govId);
      if (files.license) fd.append("license", files.license);
      if (files.certificates?.length) {
        files.certificates.forEach((file, i) =>
          fd.append(`certificates[${i}]`, file)
        );
      }

      await axios.post(`${API_BASE}/doctors/documents`, fd, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Move to verification / success screen
      setStep("verification");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to upload documents.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <StepProgress currentStep={currentStep} />
      {error && (
        <div className="text-red-400 mb-4 text-sm text-center">{error}</div>
      )}

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 transition-all duration-300">
        {currentStep === 1 && (
          <BasicInfoStep
            form={form}
            loading={loading}
            onSubmit={handleStep1}
          />
        )}

        {currentStep === 2 && (
          <ProfessionalInfoStep
            form={form}
            loading={loading}
            onBack={prevStep}
            onSubmit={handleStep2}
          />
        )}

        {currentStep === 3 && (
          <DocumentsStep
            loading={loading}
            onBack={prevStep}
            onSubmit={handleSubmitDocs}
          />
        )}
      </div>
    </div>
  );
}
