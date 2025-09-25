import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white p-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
        <div className="mb-8">
          <Mail size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Get in Touch</h1>
          <p className="text-xl font-light opacity-90">We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white border-opacity-30 pt-8">
          <div className="flex flex-col items-center">
            <Mail size={36} className="text-white mb-2" />
            <p className="text-lg font-semibold">Email Us</p>
            <p className="text-md opacity-80">support@medivolt.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone size={36} className="text-white mb-2" />
            <p className="text-lg font-semibold">Call Us</p>
            <p className="text-md opacity-80">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={36} className="text-white mb-2" />
            <p className="text-lg font-semibold">Visit Us</p>
            <p className="text-md opacity-80">123 Health St, Wellness City</p>
          </div>
        </div>
      </div>
    </div>
  );
}