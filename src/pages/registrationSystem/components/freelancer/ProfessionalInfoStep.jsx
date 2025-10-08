import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input";
import { Briefcase, Calendar, IndianRupee, Home } from "lucide-react";

export default function ProfessionalInfoStep({
  form,
  onSubmit,
  onBack,
  loading,
}) {
  const [data, setData] = useState(form);
  const [selectedDays, setSelectedDays] = useState(form.availableDays || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  };

  const toggleDay = (day) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updated);
    setData((p) => ({ ...p, availableDays: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.specialization || !data.qualifications || !data.experienceYears)
      return alert("Please fill all required professional details!");
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-semibold text-white">
          Professional Details
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Tell us about your specialization and work schedule
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          icon={<Briefcase className="text-gray-400 w-5 h-5" />}
          name="specialization"
          label="Specialization"
          value={data.specialization}
          onChange={handleChange}
          options={["Dermatologist", "Cardiologist", "Neurologist"]}
        />

        <Input
          icon={<Briefcase className="text-gray-400 w-5 h-5" />}
          name="qualifications"
          label="Qualifications"
          placeholder="e.g. MBBS, MD"
          value={data.qualifications}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="experienceYears"
          label="Experience (Years)"
          placeholder="e.g. 5"
          value={data.experienceYears}
          onChange={handleChange}
        />
        <Input
          icon={<IndianRupee className="text-gray-400 w-5 h-5" />}
          type="number"
          name="consultationFee"
          label="Consultation Fee (₹)"
          placeholder="e.g. 800"
          value={data.consultationFee}
          onChange={handleChange}
        />
        <Input
          icon={<Home className="text-gray-400 w-5 h-5" />}
          name="clinicName"
          label="Clinic Name"
          placeholder="e.g. New Formacy Clinic"
          value={data.clinicName}
          onChange={handleChange}
        />
        <Input
          name="clinicAddress"
          label="Clinic Address"
          placeholder="Enter clinic address"
          value={data.clinicAddress}
          onChange={handleChange}
        />
      </div>

      {/* Available Days */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-purple-400" />
          Available Days
        </label>
        <div className="flex flex-wrap gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
            const isSelected = selectedDays.includes(day);
            return (
              <button
                type="button"
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-purple-700 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        {selectedDays.length === 0 && (
          <p className="text-xs text-red-400 mt-1">Select at least one day</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-all duration-200"
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-purple-700 hover:bg-purple-600 disabled:opacity-50 text-white py-3 rounded-lg transition-all duration-200"
        >
          {loading ? "Saving..." : "Continue →"}
        </button>
      </div>
    </form>
  );
}
