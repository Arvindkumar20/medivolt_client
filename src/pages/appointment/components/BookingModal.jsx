import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { validateAppointment } from "../utils/validateAppointment";
import ConsultationTypeSelector from "./ConsultationTypeSelector";
import { Button } from "../../../components/ui/Button";


export default function BookingModal({ doctor, onClose, onConfirm }) {
  const [step, setStep] = useState("booking");
  const [consultationType, setConsultationType] = useState("in-person");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleConfirm = () => {
    const validation = validateAppointment({ selectedDate, selectedTime });
    if (validation.error) return alert(validation.error);
    setStep("confirmation");
    onConfirm();
  };

  return (
    <AnimatePresence>
      {doctor && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-6 w-full max-w-lg relative border border-gray-700"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {step === "booking" ? (
              <>
                <h2 className="text-white text-xl font-semibold mb-4">Book Appointment</h2>
                <ConsultationTypeSelector
                  selected={consultationType}
                  onChange={setConsultationType}
                />

                <div className="mt-6">
                  <label className="text-gray-300 text-sm mb-2 block">Select Date</label>
                  <select
                    className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="">Choose Date</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="text-gray-300 text-sm mb-2 block">Select Time</label>
                  <select
                    className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-700"
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Choose Time</option>
                    {["9:00 AM", "10:00 AM", "3:00 PM"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <Button
                  className="w-full mt-6"
                  onClick={handleConfirm}
                  disabled={!selectedDate || !selectedTime}
                >
                  Confirm Appointment
                </Button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl font-bold mb-3">✅ Appointment Confirmed</h3>
                <p className="text-gray-400">You’re all set with {doctor.name}</p>
                <Button onClick={onClose} className="mt-4 w-full">
                  Close
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
