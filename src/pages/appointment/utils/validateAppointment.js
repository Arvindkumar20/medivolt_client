// utils/validateAppointment.js
export const validateAppointment = ({ selectedDate, selectedTime }) => {
  if (!selectedDate) return { error: "Please select a date" };
  if (!selectedTime) return { error: "Please select a time" };
  return { success: true };
};
