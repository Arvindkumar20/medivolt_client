// src/pages/registration/components/HospitalForm.jsx
import React, { useEffect, useState } from "react";

import axios from "axios";
import StepProgress from "./StepProgress";
import { Input } from "../../../components/ui/Input";
import FileUpload from "./FileUpload";

const API_BASE = import.meta.env.VITE_REACT_APP_API_URL;

/**
 * HospitalForm (3-step)
 * Step1: Institution info (name, type, address, email, phone, contact)
 * Step2: Details (doctors, beds, specialties, services)
 * Step3: Documents (registration cert, PAN/GST, doctor licenses, authorized ID)
 */
export default function HospitalForm({ setStep }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    institutionType: "",
    address: "",
    officialEmail: "",
    officialPhone: "",
    contactPerson: "",
    contactPhone: "",
    numberOfDoctors: "",
    numberOfBeds: "",
    specialties: [],
    services: "",
  });

  const [documents, setDocuments] = useState({
    registrationCert: null,
    panGst: null,
    doctorLicenses: [],
    authorizedPersonId: null,
  });

  // Prefill if logged in & endpoint exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    let mounted = true;
    const fetch = async () => {
      try {
        const resp = await axios.get(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
        if (!mounted) return;
        const d = resp.data || {};
        setForm((p) => ({ ...p, officialEmail: d.email || p.officialEmail, officialPhone: d.phone || p.officialPhone }));
      } catch (err) {}
    };
    fetch();
    return () => (mounted = false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const toggleSpecialty = (s) => {
    setForm((p) => {
      const exists = p.specialties.includes(s);
      return { ...p, specialties: exists ? p.specialties.filter((x) => x !== s) : [...p.specialties, s] };
    });
  };

  const handleFile = (key, file, multiple = false) => {
    if (multiple) {
      setDocuments((p) => ({ ...p, [key]: [...(p[key] || []), ...file] }));
    } else setDocuments((p) => ({ ...p, [key]: file }));
  };

  const handleStep1 = async (e) => {
    e && e.preventDefault();
    setError("");
    if (!form.name || !form.institutionType) {
      setError("Please provide institution name and type.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_BASE}/hospitals/basic`,
        {
          name: form.name,
          institutionType: form.institutionType,
          address: form.address,
          officialEmail: form.officialEmail,
          officialPhone: form.officialPhone,
          contactPerson: form.contactPerson,
          contactPhone: form.contactPhone,
        },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      setCurrentStep(2);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to save institution info.");
    } finally {
      setLoading(false);
    }
  };

  const handleStep2 = async (e) => {
    e && e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_BASE}/hospitals/spec`,
        {
          numberOfDoctors: form.numberOfDoctors,
          numberOfBeds: form.numberOfBeds,
          specialties: form.specialties,
          services: form.services,
        },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      setCurrentStep(3);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to save institution details.");
    } finally {
      setLoading(false);
    }
  };

  const handleStep3 = async (e) => {
    e && e.preventDefault();
    setError("");
    if (!documents.registrationCert || !documents.panGst || !documents.authorizedPersonId) {
      setError("Please upload required documents: Registration, PAN/GST, Authorized ID.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const fd = new FormData();
      fd.append("registrationCert", documents.registrationCert);
      fd.append("panGst", documents.panGst);
      fd.append("authorizedPersonId", documents.authorizedPersonId);
      if (documents.doctorLicenses && documents.doctorLicenses.length) {
        documents.doctorLicenses.forEach((f, i) => fd.append(`doctorLicenses[${i}]`, f));
      }

      await axios.post(`${API_BASE}/hospitals/documents`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      setStep("verification");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to upload documents.");
    } finally {
      setLoading(false);
    }
  };

  const specialtiesList = ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Emergency", "ICU", "Surgery", "Radiology"];

  return (
    <div className="max-w-3xl mx-auto">
      <StepProgress currentStep={currentStep} />
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Hospital / Clinic Registration</h3>

        {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

        {currentStep === 1 && (
          <form onSubmit={handleStep1} className="space-y-4">
            <Input name="name" label="Hospital/Clinic Name" value={form.name} onChange={handleChange} placeholder="Apollo Hospital Mumbai" />
            <div>
              <label className="block text-sm text-gray-300 mb-2">Institution Type</label>
              <select name="institutionType" value={form.institutionType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
                <option value="">Select Type</option>
                <option>Hospital</option>
                <option>Clinic</option>
                <option>Diagnostic Center</option>
                <option>Nursing Home</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Full Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Complete address with pincode..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="officialEmail" label="Official Email" value={form.officialEmail} onChange={handleChange} />
              <Input name="officialPhone" label="Official Phone" value={form.officialPhone} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="contactPerson" label="Contact Person Name" value={form.contactPerson} onChange={handleChange} />
              <Input name="contactPhone" label="Contact Person Mobile" value={form.contactPhone} onChange={handleChange} />
            </div>

            <div className="flex space-x-4 mt-3">
              <button type="button" onClick={() => setCurrentStep(1)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Cancel</button>
              <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg">
                {loading ? "Saving..." : "Continue"}
              </button>
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <form onSubmit={handleStep2} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="numberOfDoctors" type="number" label="Number of Doctors" value={form.numberOfDoctors} onChange={handleChange} />
              <Input name="numberOfBeds" type="number" label="Number of Beds" value={form.numberOfBeds} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Specialties Available</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {specialtiesList.map((s) => (
                  <label key={s} className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" checked={form.specialties.includes(s)} onChange={() => toggleSpecialty(s)} className="rounded border-gray-700 bg-gray-800 text-blue-600" />
                    <span className="text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Services Offered</label>
              <textarea name="services" value={form.services} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="24/7 Emergency, ICU, Surgery, Diagnostics, Pharmacy..."></textarea>
            </div>

            <div className="flex space-x-4 mt-3">
              <button type="button" onClick={() => setCurrentStep(1)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Back</button>
              <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg">
                {loading ? "Saving..." : "Continue to Documents"}
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form onSubmit={handleStep3} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUpload label="Hospital Registration Certificate" accept=".pdf,.jpg,.jpeg,.png" onChange={(f) => handleFile("registrationCert", f)} />
              <FileUpload label="PAN / GST Certificate" accept=".pdf,.jpg,.jpeg,.png" onChange={(f) => handleFile("panGst", f)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Doctor Licenses (multiple)</label>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setDocuments((p) => ({ ...p, doctorLicenses: [...(p.doctorLicenses || []), ...files] }));
                }} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" />
                {documents.doctorLicenses?.length > 0 && <div className="text-xs text-gray-300 mt-2">{documents.doctorLicenses.length} file(s) ready</div>}
              </div>

              <FileUpload label="Authorized Person ID" accept=".pdf,.jpg,.jpeg,.png" onChange={(f) => handleFile("authorizedPersonId", f)} />
            </div>

            <div className="flex space-x-4 mt-3">
              <button type="button" onClick={() => setCurrentStep(2)} className="flex-1 bg-gray-700 text-white py-3 rounded-lg">Back</button>
              <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg">
                {loading ? "Uploading..." : "Submit for Verification"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
