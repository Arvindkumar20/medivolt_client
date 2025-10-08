import { useState } from "react";
import axios from "axios";

export default function useBookAppointment() {
  const [booking, setBooking] = useState(false);
  const [error, setError] = useState(null);

  const bookAppointment = async (appointmentData) => {
    setBooking(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/appointments`,
        appointmentData
      );
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
      console.error("Booking Error:", err);
      throw err;
    } finally {
      setBooking(false);
    }
  };

  return { bookAppointment, booking, error };
}
