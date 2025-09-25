import React from 'react';
import { Info, Users, Award, Heart, Clock, Globe } from 'lucide-react';

export default function WhyMedivoltPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Info size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Why Choose MediVolt?</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Discover how our AI-powered healthcare solutions can transform your experience with personalized, accessible, and effective healthcare technology.</p>
        </div>
        
        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Users size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">For Patients</h2>
            <p className="text-lg opacity-90">Get personalized health insights, understand medical reports, and make informed decisions about your well-being with our easy-to-use platform.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Globe size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">For Healthcare Providers</h2>
            <p className="text-lg opacity-90">Enhance your practice with our AI tools that help interpret complex medical data, saving time while improving patient outcomes.</p>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Key Differentiators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Award size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge AI</h3>
              <p className="opacity-90">Our proprietary algorithms deliver accurate, personalized health insights you can trust.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Heart size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
              <p className="opacity-90">Intuitive interfaces make complex healthcare information accessible to everyone.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Clock size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
              <p className="opacity-90">We constantly evolve our platform to address emerging healthcare challenges.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">What Our Users Say</h2>
          <p className="text-lg mb-4">"MediVolt transformed how I understand my health reports. The AI explanations are clear and actionable." - Priya K., Patient</p>
          <p className="text-lg mb-4">"As a doctor, I appreciate how MediVolt helps bridge the communication gap with my patients." - Dr. Sharma, Cardiologist</p>
          <p className="text-lg">"The personalized health insights have helped me make better lifestyle choices." - Rohan M., Fitness Enthusiast</p>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Join thousands of satisfied users who are taking control of their health with MediVolt.</p>
          <a href="/signup" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Get Started</a>
        </div>
      </div>
    </div>
  );
}