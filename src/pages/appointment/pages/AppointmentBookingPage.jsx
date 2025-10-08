import React, { useState } from "react";
import useFetchDoctors from "../hooks/useFetchDoctors";
import useBookAppointment from "../hooks/useBookAppointment";
import DoctorCard from "../components/DoctorCard";
import BookingModal from "../components/BookingModal";
import ConfirmModal from "../components/ConfirmModal";
import { ElementLoader } from "../../../components/ui/ElementLoader";
import toast from "react-hot-toast";

export default function AppointmentBookingPage() {
  const { doctors, loading } = useFetchDoctors();
  const { bookAppointment, booking } = useBookAppointment();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
console.log(doctors.data)
  const handleConfirm = async (appointmentData) => {
    try {
      await bookAppointment(appointmentData);
      setShowConfirm(true);
    } catch (err) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
      alert("Failed to book appointment");
    }
  };

  if (loading || booking)
    return <ElementLoader text="Fetching doctors..." />;

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Book Appointment</h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {doctors.data.length>0&&doctors?.data?.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} onBook={setSelectedDoctor} />
        ))}
      </div>

      <BookingModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onConfirm={(data) => handleConfirm(data)}
      />

      <ConfirmModal
        show={showConfirm}
        doctor={selectedDoctor}
        onClose={() => {
          setShowConfirm(false);
          setSelectedDoctor(null);
        }}
      />
    </div>
  );
}
