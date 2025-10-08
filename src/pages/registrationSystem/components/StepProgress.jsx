// src/pages/registration/components/StepProgress.jsx
import React from "react";
import { User, GraduationCap, FileText } from "lucide-react";

/**
 * StepProgress
 * props:
 *  - currentStep: number (1,2,3)
 */
export default function StepProgress({ currentStep = 1 }) {
  const steps = [
    { id: 1, label: "Basic", icon: <User className="h-5 w-5" /> },
    { id: 2, label: "Professional", icon: <GraduationCap className="h-5 w-5" /> },
    { id: 3, label: "Documents", icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-4">
        {steps.map((s, idx) => {
          const active = s.id === currentStep;
          const done = s.id < currentStep;
          return (
            <div key={s.id} className="flex-1">
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center rounded-full w-10 h-10 mr-3 ${
                    done ? "bg-purple-600 text-white" : active ? "bg-white/10 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {s.icon}
                </div>

                <div>
                  <div className={`${done || active ? "text-white" : "text-gray-400"} font-medium`}>
                    {s.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {done ? "Completed" : active ? "In progress" : "Pending"}
                  </div>
                </div>
              </div>

              {/* connector */}
              {idx !== steps.length - 1 && (
                <div
                  className={`h-1 mt-3 rounded ${s.id < currentStep ? "bg-purple-600" : "bg-gray-700"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
