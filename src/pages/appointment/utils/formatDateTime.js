// utils/formatDateTime.js
export const formatDateTime = (date, time) => {
  if (!date || !time) return null;
  const formatted = new Date(`${date} ${time}`);
  return formatted.toLocaleString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};
