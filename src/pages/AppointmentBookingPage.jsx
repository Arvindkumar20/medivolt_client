// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Search, 
//   MapPin, 
//   Filter, 
//   Star, 
//   Clock, 
//   Calendar,
//   Video,
//   User,
//   Phone,
//   Download,
//   CheckCircle,
//   X,
//   ChevronDown,
//   Heart,
//   Brain,
//   Eye,
//   Stethoscope
// } from 'lucide-react';
// import { Button } from '../components/ui/Button';

// export default function AppointmentBookingPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState({
//     location: '',
//     specialty: '',
//     availability: '',
//     priceRange: '',
//     hospitalType: ''
//   });
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [bookingStep, setBookingStep] = useState('booking'); // booking, confirmation
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [consultationType, setConsultationType] = useState('in-person');

//   // Sample doctors data
//   const doctors = [
//     {
//       id: 1,
//       name: 'Dr. Priya Sharma',
//       photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
//       specialty: 'Cardiologist',
//       hospital: 'Apollo Hospital',
//       location: 'Mumbai, Maharashtra',
//       rating: 4.8,
//       reviews: 250,
//       fee: 800,
//       experience: '15 years',
//       qualification: 'MBBS, MD (Cardiology)',
//       nextSlot: 'Today, 3:30 PM',
//       availability: ['Today', 'Tomorrow']
//     },
//     {
//       id: 2,
//       name: 'Dr. Rajesh Kumar',
//       photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
//       specialty: 'General Physician',
//       hospital: 'Fortis Hospital',
//       location: 'Delhi, NCR',
//       rating: 4.6,
//       reviews: 180,
//       fee: 500,
//       experience: '12 years',
//       qualification: 'MBBS, MD (Internal Medicine)',
//       nextSlot: 'Tomorrow, 10:00 AM',
//       availability: ['Tomorrow', 'Next 7 Days']
//     },
//     {
//       id: 3,
//       name: 'Dr. Anita Desai',
//       photo: 'https://images.unsplash.com/photo-1594824804732-ca8db5ac6b9b?w=150&h=150&fit=crop&crop=face',
//       specialty: 'Dentist',
//       hospital: 'Max Healthcare',
//       location: 'Bangalore, Karnataka',
//       rating: 4.9,
//       reviews: 320,
//       fee: 600,
//       experience: '18 years',
//       qualification: 'BDS, MDS (Oral Surgery)',
//       nextSlot: 'Today, 5:00 PM',
//       availability: ['Today', 'Tomorrow', 'Next 7 Days']
//     }
//   ];

//   const specialties = [
//     { name: 'General Physician', icon: Stethoscope },
//     { name: 'Cardiologist', icon: Heart },
//     { name: 'Neurologist', icon: Brain },
//     { name: 'Ophthalmologist', icon: Eye },
//     { name: 'Dentist', icon: User },
//   ];

//   const timeSlots = [
//     '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//     '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
//   ];

//   const handleBookAppointment = (doctor) => {
//     setSelectedDoctor(doctor);
//     setShowBookingModal(true);
//     setBookingStep('booking');
//   };

//   const handleConfirmBooking = () => {
//     setBookingStep('confirmation');
//   };

//   const DoctorCard = ({ doctor }) => (
//     <motion.div
//       className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-gray-600/30 rounded-3xl p-8 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 backdrop-blur-sm group max-w-4xl mx-auto"
//       whileHover={{ y: -8, scale: 1.01 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <div className="flex items-start gap-6">
//         <div className="relative">
//           <img
//             src={doctor.photo}
//             alt={doctor.name}
//             className="w-20 h-20 rounded-2xl object-cover border-3 border-primary-500/40 shadow-lg group-hover:border-primary-400/60 transition-all duration-300"
//           />
//           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-gray-900 rounded-full"></div>
//         </div>
        
//         <div className="flex-1">
//           <div className="flex items-start justify-between mb-3">
//             <div>
//               <h3 className="text-white font-bold text-xl mb-1 group-hover:text-primary-200 transition-colors">{doctor.name}</h3>
//               <p className="text-primary-300 text-base font-semibold">{doctor.specialty}</p>
//               <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
//                 <MapPin className="h-3 w-3" />
//                 {doctor.hospital} • {doctor.location}
//               </p>
//             </div>
            
//             <div className="text-right">
//               <div className="text-white mb-1">
//                 <span className="text-2xl font-bold text-primary-300">₹{doctor.fee}</span>
//                 <span className="text-gray-400 text-sm ml-1">/ session</span>
//               </div>
//               <div className="flex items-center gap-1 text-accent-400 text-sm">
//                 <Clock className="h-3 w-3" />
//                 <span className="font-medium">{doctor.nextSlot}</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-6 mb-4">
//             <div className="flex items-center gap-1">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
//                 ))}
//               </div>
//               <span className="text-white text-sm font-semibold ml-1">{doctor.rating}</span>
//               <span className="text-gray-400 text-sm">({doctor.reviews}+ reviews)</span>
//             </div>
            
//             <div className="flex items-center gap-1 text-gray-400 text-sm">
//               <User className="h-3 w-3" />
//               <span>{doctor.experience} experience</span>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex gap-2">
//               <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full border border-primary-500/30">
//                 Available Today
//               </span>
//               <span className="px-3 py-1 bg-accent-500/20 text-accent-300 text-xs font-medium rounded-full border border-accent-500/30">
//                 Video Consultation
//               </span>
//             </div>
            
//             <Button
//               onClick={() => handleBookAppointment(doctor)}
//               className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:scale-105"
//             >
//               Book Appointment
//             </Button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );

//   const BookingModal = () => (
//     <AnimatePresence>
//       {showBookingModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowBookingModal(false)}
//           />
          
//           <motion.div
//             className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//           >
//             <button
//               onClick={() => setShowBookingModal(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             {bookingStep === 'booking' ? (
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-6">Book Appointment</h2>
                
//                 {/* Doctor Profile */}
//                 <div className="flex items-start gap-4 mb-6 p-4 bg-gray-800/50 rounded-xl">
//                   <img
//                     src={selectedDoctor?.photo}
//                     alt={selectedDoctor?.name}
//                     className="w-20 h-20 rounded-full object-cover border-2 border-primary-500/30"
//                   />
//                   <div>
//                     <h3 className="text-white font-semibold text-xl">{selectedDoctor?.name}</h3>
//                     <p className="text-primary-300 font-medium">{selectedDoctor?.specialty}</p>
//                     <p className="text-gray-400 text-sm">{selectedDoctor?.qualification}</p>
//                     <p className="text-gray-400 text-sm">{selectedDoctor?.experience} experience</p>
//                     <div className="flex items-center gap-1 mt-1">
//                       <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                       <span className="text-white text-sm">{selectedDoctor?.rating}</span>
//                       <span className="text-gray-400 text-sm">({selectedDoctor?.reviews}+ reviews)</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Consultation Type */}
//                 <div className="mb-6">
//                   <h4 className="text-white font-medium mb-3">Consultation Type</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     <button
//                       onClick={() => setConsultationType('in-person')}
//                       className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                         consultationType === 'in-person'
//                           ? 'border-primary-500 bg-primary-500/10 text-primary-300'
//                           : 'border-gray-600 text-gray-400 hover:border-gray-500'
//                       }`}
//                     >
//                       <User className="h-6 w-6 mx-auto mb-2" />
//                       <div className="text-sm font-medium">In-Person</div>
//                       <div className="text-xs">Visit clinic</div>
//                     </button>
//                     <button
//                       onClick={() => setConsultationType('online')}
//                       className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                         consultationType === 'online'
//                           ? 'border-primary-500 bg-primary-500/10 text-primary-300'
//                           : 'border-gray-600 text-gray-400 hover:border-gray-500'
//                       }`}
//                     >
//                       <Video className="h-6 w-6 mx-auto mb-2" />
//                       <div className="text-sm font-medium">Online</div>
//                       <div className="text-xs">Video call</div>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Date Selection */}
//                 <div className="mb-6">
//                   <h4 className="text-white font-medium mb-3">Select Date</h4>
//                   <div className="grid grid-cols-3 gap-3">
//                     {['Today', 'Tomorrow', 'Day After'].map((date, index) => (
//                       <button
//                         key={date}
//                         onClick={() => setSelectedDate(date)}
//                         className={`p-3 rounded-xl border-2 transition-all duration-200 ${
//                           selectedDate === date
//                             ? 'border-primary-500 bg-primary-500/10 text-primary-300'
//                             : 'border-gray-600 text-gray-400 hover:border-gray-500'
//                         }`}
//                       >
//                         <Calendar className="h-5 w-5 mx-auto mb-1" />
//                         <div className="text-sm font-medium">{date}</div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Time Slots */}
//                 <div className="mb-6">
//                   <h4 className="text-white font-medium mb-3">Available Time Slots</h4>
//                   <div className="grid grid-cols-4 gap-2">
//                     {timeSlots.map((time) => (
//                       <button
//                         key={time}
//                         onClick={() => setSelectedTime(time)}
//                         className={`p-2 rounded-lg border transition-all duration-200 text-sm ${
//                           selectedTime === time
//                             ? 'border-primary-500 bg-primary-500/10 text-primary-300'
//                             : 'border-gray-600 text-gray-400 hover:border-gray-500'
//                         }`}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Payment Summary */}
//                 <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
//                   <h4 className="text-white font-medium mb-3">Payment Summary</h4>
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-gray-400">
//                       <span>Consultation Fee</span>
//                       <span>₹{selectedDoctor?.fee}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-400">
//                       <span>Convenience Charge</span>
//                       <span>₹50</span>
//                     </div>
//                     <div className="border-t border-gray-700 pt-2 flex justify-between text-white font-semibold">
//                       <span>Total Amount</span>
//                       <span>₹{(selectedDoctor?.fee || 0) + 50}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={handleConfirmBooking}
//                   disabled={!selectedDate || !selectedTime}
//                   className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Confirm Appointment
//                 </Button>
//               </div>
//             ) : (
//               <div className="text-center">
//                 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold text-white mb-4">Appointment Confirmed!</h2>
//                 <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
//                   <p className="text-gray-300 mb-2">
//                     ✅ Appointment confirmed with <span className="text-primary-300 font-semibold">{selectedDoctor?.name}</span>
//                   </p>
//                   <p className="text-gray-300 mb-2">
//                     📍 {selectedDoctor?.hospital}, {selectedDoctor?.location}
//                   </p>
//                   <p className="text-gray-300 mb-2">
//                     📅 {selectedDate}, {selectedTime}
//                   </p>
//                   <p className="text-gray-300">
//                     💻 {consultationType === 'online' ? 'Online Video Consultation' : 'In-Person Visit'}
//                   </p>
//                 </div>
                
//                 <div className="grid grid-cols-3 gap-3 mb-6">
//                   <button className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
//                     <Calendar className="h-6 w-6 text-primary-400 mb-1" />
//                     <span className="text-xs text-gray-300">Add to Calendar</span>
//                   </button>
//                   <button className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
//                     <Download className="h-6 w-6 text-primary-400 mb-1" />
//                     <span className="text-xs text-gray-300">Download PDF</span>
//                   </button>
//                   <button className="flex flex-col items-center p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
//                     <Phone className="h-6 w-6 text-primary-400 mb-1" />
//                     <span className="text-xs text-gray-300">Contact Hospital</span>
//                   </button>
//                 </div>

//                 <Button
//                   onClick={() => setShowBookingModal(false)}
//                   className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-primary-500/25"
//                 >
//                   Done
//                 </Button>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12">
//         {/* Premium Header */}
//         <div className="text-center mb-12">
//           <motion.h1 
//             className="text-5xl font-bold bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Book an Appointment
//           </motion.h1>
//           <motion.p 
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Connect with India's top doctors and hospitals. Book consultations, get expert care, and manage your health with ease.
//           </motion.p>
//         </div>

//         {/* Premium Search Bar */}
//         <div className="mb-8">
//           <div className="relative bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-primary-500/30 rounded-2xl shadow-2xl shadow-primary-500/10 overflow-hidden backdrop-blur-sm max-w-2xl mx-auto">
//             <div className="flex items-center px-6 py-4 gap-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
//                 <Search className="h-5 w-5 text-white" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search doctors, hospitals, or symptoms"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="flex-1 bg-transparent text-white placeholder-gray-400 text-base focus:outline-none focus:placeholder-primary-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Premium Filters */}
//         <div className="mb-12">
//           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//             <select className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-600/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-primary-500/50 focus:shadow-lg focus:shadow-primary-500/20 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-200 min-w-[160px]">
//               <option>📍 Location</option>
//               <option>Mumbai</option>
//               <option>Delhi</option>
//               <option>Bangalore</option>
//             </select>
//             <select className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-600/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-primary-500/50 focus:shadow-lg focus:shadow-primary-500/20 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-200 min-w-[160px]">
//               <option>🩺 Specialty</option>
//               <option>General Physician</option>
//               <option>Cardiologist</option>
//               <option>Dentist</option>
//             </select>
//             <select className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-600/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-primary-500/50 focus:shadow-lg focus:shadow-primary-500/20 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-200 min-w-[160px]">
//               <option>📅 Availability</option>
//               <option>Today</option>
//               <option>Tomorrow</option>
//               <option>Next 7 Days</option>
//             </select>
//             <select className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-gray-600/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-primary-500/50 focus:shadow-lg focus:shadow-primary-500/20 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-200 min-w-[160px]">
//               <option>💰 Price Range</option>
//               <option>₹0 - ₹500</option>
//               <option>₹500 - ₹1000</option>
//               <option>₹1000+</option>
//             </select>
//           </div>
//         </div>

//         {/* Premium Specialties */}
//         <div className="mb-12">
//           <h3 className="text-white font-semibold mb-6 text-center text-xl">Popular Specialties</h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
//             {specialties.map((specialty, index) => {
//               const IconComponent = specialty.icon;
//               return (
//                 <motion.button
//                   key={index}
//                   className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-600/30 rounded-2xl hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 backdrop-blur-sm group"
//                   whileHover={{ y: -5, scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
//                     <IconComponent className="h-6 w-6 text-primary-400 group-hover:text-primary-300" />
//                   </div>
//                   <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{specialty.name}</span>
//                 </motion.button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Doctor Cards */}
//         <div className="space-y-8">
//           <h3 className="text-white font-semibold text-2xl text-center mb-8">Available Doctors</h3>
//           {doctors.map((doctor) => (
//             <DoctorCard key={doctor.id} doctor={doctor} />
//           ))}
//         </div>
//       </div>

//       <BookingModal />
//     </div>
//   );
// }

