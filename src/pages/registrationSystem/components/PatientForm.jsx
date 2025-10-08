import React, { useState } from "react";
import { Input } from "../../../components/ui/Input";

export default function PatientForm({ setStep }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-bold text-center mb-4">Patient Registration</h2>
      <Input label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
      <Input label="Email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
      <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone" />
      <button type="submit" className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all">
        Continue
      </button>
    </form>
  );
}
