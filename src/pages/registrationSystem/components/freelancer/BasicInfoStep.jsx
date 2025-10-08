import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../../../../components/ui/Input";

const API_BASE = import.meta.env.VITE_API_URL;

export default function BasicInfoStep({ form, onSubmit, loading }) {
  const [data, setData] = useState(form);
  const [fetching, setFetching] = useState(true);

  // ✅ Fetch current logged-in user details via cookie
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setFetching(true);
        const res = await axios.get(`${API_BASE}/auth/me`, {
          withCredentials: true, // send cookie automatically
        });

        console.log(res.data.user)
        if (res.data?.user) {
          const u = res.data.user;
          setData((prev) => ({
            ...prev,
            name: u.name || "",
            email: u.email || "",
            phone: u.phone || "",
            city: u.city || "",
            state: u.state || "",
          }));
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setFetching(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone) return;
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111827] text-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto space-y-6 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-2">Basic Information</h3>
        <p className="text-gray-400 text-sm text-center">
          Please confirm or update your personal details below.
        </p>
      </div>

      {fetching ? (
        <div className="text-center py-6 text-gray-400">Loading user data...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
              value={data.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Enter your email address"
              value={data.email}
              onChange={handleChange}
            />
            <Input
              name="phone"
              label="Phone"
              placeholder="Enter your phone number"
              value={data.phone}
              onChange={handleChange}
            />
            <Input
              name="city"
              label="City"
              placeholder="Your city"
              value={data.city}
              onChange={handleChange}
            />
            <Input
              name="state"
              label="State"
              placeholder="Your state"
              value={data.state}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
                loading
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-purple-700 hover:bg-purple-800 text-white"
              }`}
            >
              {loading ? "Saving..." : "Continue"}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
