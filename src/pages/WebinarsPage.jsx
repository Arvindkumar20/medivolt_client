import React from 'react';
import { Video, Calendar, Users, PlayCircle } from 'lucide-react';

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Video size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Webinars</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Join our expert-led webinars to gain deeper insights into AI in healthcare, product updates, and best practices for leveraging MediVolt.</p>
        </div>
        
        {/* Upcoming Webinars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Calendar size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">AI in Preventive Healthcare</h2>
            <p className="text-lg opacity-90 mb-4">Discover how AI is revolutionizing preventive healthcare by identifying risks early and enabling personalized interventions.</p>
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <Calendar size={16} className="mr-2" /><span>November 15, 2023</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Users size={16} className="mr-2" /><span>Dr. Anya Sharma, AI Health Specialist</span>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Calendar size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Maximizing Your MediVolt Experience</h2>
            <p className="text-lg opacity-90 mb-4">A practical guide to utilizing all the features of MediVolt to manage your health data and insights effectively.</p>
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <Calendar size={16} className="mr-2" /><span>December 2, 2023</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Users size={16} className="mr-2" /><span>MediVolt Product Team</span>
            </div>
          </div>
        </div>
        
        {/* On-Demand Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">On-Demand Webinars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <PlayCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Understanding Your Genetic Data</h3>
              <p className="opacity-90">Watch now to learn how AI interprets genetic information for personalized health.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <PlayCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">The Ethics of AI in Medicine</h3>
              <p className="opacity-90">Explore the ethical considerations and challenges of AI implementation in healthcare.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <PlayCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Data Security in Digital Health</h3>
              <p className="opacity-90">Learn about the measures MediVolt takes to ensure the security and privacy of your health data.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Missed a Webinar?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Access our full library of past webinars on demand and catch up on valuable insights at your convenience.</p>
          <a href="/webinars-archive" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">View Archive</a>
        </div>
      </div>
    </div>
  );
}