import React from "react";
import { User, Stethoscope, Building } from "lucide-react";
import AccountTypeCard from "./AccountTypeCard";

export default function AccountTypeSelection({ setAccountType, setStep }) {
  const handleSelect = (type) => {
    setAccountType(type);
    setStep("form");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Choose your account type to get started
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* 🧍‍♂️ Patient Card */}
        <AccountTypeCard
          icon={<User className="w-8 h-8 text-purple-400" />}
          title="Patient"
          subtitle="For individuals using MediVolt's AI tools & booking appointments"
          points={[
            "AI Health Tools",
            "Book Appointments",
            "Emergency SOS",
            "Health Tracking",
          ]}
          ctaText="Get Started"
          gradientFrom="from-[#1e1e2a]"
          gradientTo="to-[#11111a]"
          onClick={() => handleSelect("patient")}
        />

        {/* 👨‍⚕️ Doctor / Nurse */}
        <AccountTypeCard
          icon={<Stethoscope className="w-8 h-8 text-green-400" />}
          title="Doctor/Nurse"
          subtitle="For healthcare experts offering consultations or seeking employment"
          points={[
            "Freelancer Marketplace",
            "Set Consultation Fees",
            "Hospital Hiring",
            "Professional Verification",
          ]}
          ctaText="Join as Professional"
          gradientFrom="from-[#122820]"
          gradientTo="to-[#0a1712]"
          onClick={() => handleSelect("freelancer")}
        />

        {/* 🏥 Hospital / Clinic */}
        <AccountTypeCard
          icon={<Building className="w-8 h-8 text-blue-400" />}
          title="Hospital/Clinic"
          subtitle="For institutions managing appointments & hiring freelancers"
          points={[
            "Admin Panel Access",
            "Hire Freelancers",
            "Patient Management",
            "Appointment System",
          ]}
          ctaText="Register Institution"
          gradientFrom="from-[#1a2035]"
          gradientTo="to-[#0d0f18]"
          onClick={() => handleSelect("hospital")}
        />
      </div>
    </div>
  );
}
