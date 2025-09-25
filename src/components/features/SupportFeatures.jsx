import React from 'react';
 import { motion } from 'framer-motion';
 import { Shield, CheckCircle, MessageCircle, Lock } from 'lucide-react';
 
 const supportOptions = [
   {
     icon: <Shield size={24} className="text-primary-400" />,
     title: 'Instant Health Answers:',
     description: 'Medical reports, symptoms, medicine info & emergency guidance',
   },
   {
     icon: <CheckCircle size={24} className="text-accent-400" />,
     title: 'AI Health Monitoring:',
     description: 'Real-time health tracking & personalized recommendations',
   },
   {
     icon: <MessageCircle size={24} className="text-primary-500" />,
     title: '24/7 Medical Support:',
     description: 'Get instant help via AI chat or emergency hotline',
   },
   {
     icon: <Lock size={24} className="text-accent-500" />,
     title: 'Patients\' Choice:',
     description: '50K+ Users • 98% satisfaction • 4.8★ health rating',
   },
 ];
 
 const SupportFeatures = () => {
   return (
     <section className="relative py-16 bg-black overflow-hidden">
      {/* Purple Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-60 z-0">
        <div className="w-full h-full bg-gradient-to-t from-primary-500/30 via-accent-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
       <div className="relative container mx-auto px-4 z-10">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
           {/* Mobile Chat Interface */}
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true, amount: 0.3 }}
             className="relative w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-3xl shadow-xl overflow-hidden ring-1 ring-gray-200"
             style={{ aspectRatio: '9 / 16' }}
           >
             <div className="w-full h-full flex flex-col">
               {/* Chat Header */}
               <div className="flex items-center justify-between p-4 bg-primary text-white shadow-md">
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                     <MessageCircle size={20} className="text-primary" />
                   </div>
                   <span className="font-semibold">Medivolt Support</span>
                 </div>
                 <span className="text-sm">Online</span>
               </div>
 
               {/* Chat Messages */}
               <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
                 {/* Support Greeting */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5 }}
                   className="flex justify-start"
                 >
                   <div className="bg-gray-100 text-gray-800 p-3 rounded-xl max-w-[80%] shadow-sm">
                     <p className="font-semibold text-sm">Medivolt Support</p>
                     <p className="text-sm mt-1">Hi there! How can I help you with your Medivolt query today?</p>
                   </div>
                 </motion.div>
 
                 {/* User Question 1 */}
                 <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.2 }}
                   className="flex justify-end"
                 >
                   <div className="bg-primary text-white p-3 rounded-xl max-w-[80%] shadow-sm">
                     <p className="text-sm">Can you explain my blood test results?</p>
                   </div>
                 </motion.div>
 
                 {/* Support Response 1 */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.4 }}
                   className="flex justify-start"
                 >
                   <div className="bg-gray-100 text-gray-800 p-3 rounded-xl max-w-[80%] shadow-sm">
                     <p className="font-semibold text-sm">Medivolt Support</p>
                     <p className="text-sm mt-1">Absolutely! I can help explain your results in simple terms. Please upload your report.</p>
                   </div>
                 </motion.div>
 
                 {/* User Question 2 */}
                 <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.6 }}
                   className="flex justify-end"
                 >
                   <div className="bg-orange-500 text-white p-3 rounded-xl max-w-[80%] shadow-sm">
                     <p className="text-sm">Yes, I did, but it's still not working.</p>
                   </div>
                 </motion.div>
 
                 {/* Support Response 2 */}
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.8 }}
                   className="flex justify-start"
                 >
                   <div className="bg-gray-100 text-gray-800 p-3 rounded-xl max-w-[80%] shadow-sm">
                     <p className="font-semibold text-sm">Medivolt Support</p>
                     <p className="text-sm mt-1">Okay, I see. Could you please provide your registered email address so I can look into it for you?</p>
                   </div>
                 </motion.div>
 
                 {/* Typing Indicator */}
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.5, delay: 1 }}
                   className="flex justify-start"
                 >
                   <div className="bg-gray-100 text-gray-800 p-3 rounded-xl max-w-[80%] shadow-sm flex items-center space-x-2">
                     <span className="text-sm">Medivolt Support is typing</span>
                     <div className="dot-pulse"></div>
                   </div>
                 </motion.div>
               </div>
 
               {/* Chat Input (Optional, for visual completeness) */}
               <div className="p-4 border-t border-gray-200 bg-white">
                 <input
                   type="text"
                   placeholder="Type your message..."
                   className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                 />
               </div>
             </div>
           </motion.div>
 
           {/* Support Options */}
           <div className="w-full space-y-8">
             <div className="text-center lg:text-left">
               <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Beyond Booking</h2>
               <p className="text-lg text-gray-600">
                 Our dedicated support team is here to assist you with any queries related to your Medivolt account or services.
               </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {supportOptions.map((option, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.1 * index }}
                   viewport={{ once: true, amount: 0.3 }}
                   className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 ring-1 ring-gray-100 hover:ring-orange-300 transition-all duration-300"
                 >
                   <div className="flex-shrink-0 p-3 bg-orange-100 rounded-full">
                     {option.icon}
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
                     <p className="text-gray-600 mt-2">{option.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default SupportFeatures;