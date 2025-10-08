// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Star, Clock, User } from "lucide-react";
// import { Button } from "../../../components/ui/Button";

// export default function DoctorCard({ doctor, onBook }) {
//     console.log(doctor)
//   return (
//     <motion.div
//       className="bg-gray-900/90 border border-gray-700/40 rounded-3xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-500 backdrop-blur-sm group"
//       whileHover={{ y: -8 }}
//     >
//       <div className="flex items-start gap-6">
//         <img
//           src={doctor.photo}
//           alt={doctor.name}
//           className="w-20 h-20 rounded-2xl object-cover border-2 border-primary-400/40 shadow-md"
//         />

//         <div className="flex-1">
//           <div className="flex justify-between mb-2">
//             <div>
//               <h3 className="text-white font-semibold text-xl">{doctor.name}</h3>
//               <p className="text-primary-300 text-sm">{doctor.specialty}</p>
//               <p className="text-gray-400 text-xs flex items-center gap-1">
//                 <MapPin size={12} /> {doctor.hospital}, {doctor.location}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-primary-300 font-bold">₹{doctor.fee}</p>
//               <p className="text-gray-400 text-xs">/ session</p>
//               <div className="text-gray-400 text-xs flex items-center gap-1 mt-1">
//                 <Clock size={12} /> {doctor.nextSlot}
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 mb-3">
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   size={14}
//                   className={i < Math.floor(doctor.rating) ? "text-yellow-400" : "text-gray-600"}
//                   fill={i < Math.floor(doctor.rating) ? "currentColor" : "none"}
//                 />
//               ))}
//               <span className="text-white text-xs font-semibold">{doctor.rating}</span>
//               <span className="text-gray-400 text-xs">({doctor.reviews}+)</span>
//             </div>
//             <div className="flex items-center gap-1 text-gray-400 text-xs">
//               <User size={12} /> {doctor.experience}
//             </div>
//           </div>

//           <Button onClick={() => onBook(doctor)} size="sm" className="mt-2">
//             Book Appointment
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, User } from "lucide-react";
import { Button } from "../../../components/ui/Button";

export default function DoctorCard({ doctor, onBook }) {
  console.log(doctor.user?.name)
  // Backend data mapping
  const name = doctor.user?.name || "N/A";
  const photo = doctor.profilePicture || "/default-avatar.png"; // agar photo na ho
  const specialty = doctor.specialization || "General";
  const hospital = doctor.clinicAddress?.clinicName || "N/A";
  const location = doctor.clinicAddress?.city || "N/A";
  const fee = doctor.consultationFee || 0;
  const rating = doctor.rating || 0;
  const reviews = doctor.reviewCount || 0;
  const experience = doctor.experienceYears || 0;
  const nextSlot = doctor.dailyTimeWindows?.[0]?.start || "Not available"; // simple example

  return (
    <motion.div
      className="bg-gray-900/90 border border-gray-700/40 rounded-3xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-500 backdrop-blur-sm group"
      whileHover={{ y: -8 }}
    >
      <div className="flex items-start gap-6">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-2xl object-cover border-2 border-primary-400/40 shadow-md"
        />

        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <div>
              <h3 className="text-white font-semibold text-xl">{name}</h3>
              <p className="text-primary-300 text-sm">{specialty}</p>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <MapPin size={12} /> {hospital}, {location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-primary-300 font-bold">₹{fee}</p>
              <p className="text-gray-400 text-xs">/ session</p>
              <div className="text-gray-400 text-xs flex items-center gap-1 mt-1">
                <Clock size={12} /> {nextSlot}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                />
              ))}
              <span className="text-white text-xs font-semibold">{rating}</span>
              <span className="text-gray-400 text-xs">({reviews}+)</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <User size={12} /> {experience} yrs
            </div>
          </div>

          <Button onClick={() => onBook(doctor)} size="sm" className="mt-2">
            Book Appointment
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
