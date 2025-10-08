import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/doctors?page=1`,{withCredentials:true});
        // console.log(doctors)
        setDoctors(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getDoctors();
  }, []);

  return { doctors, loading };
}
