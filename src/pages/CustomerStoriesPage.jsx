import React from 'react';
import { Users, Lightbulb, Star, MessageSquare } from 'lucide-react';

export default function CustomerStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Users size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Customer Stories</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Hear directly from our users about how MediVolt has transformed their healthcare experience and improved their well-being.</p>
        </div>
        
        {/* Featured Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Lightbulb size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Priya's Journey to Better Health</h2>
            <p className="text-lg opacity-90">"Before MediVolt, I struggled to understand my lab results. Now, I feel empowered to make informed decisions about my health." - Priya K.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Star size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Dr. Sharma's Enhanced Practice</h2>
            <p className="text-lg opacity-90">"MediVolt's AI tools have streamlined my patient consultations, allowing me to focus more on care and less on data interpretation." - Dr. Sharma</p>
          </div>
        </div>
        
        {/* More Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">More Inspiring Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <MessageSquare size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Rohan's Fitness Transformation</h3>
              <p className="opacity-90">"The personalized health insights from MediVolt helped me optimize my fitness routine and achieve my goals."</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <MessageSquare size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Community Health Initiative</h3>
              <p className="opacity-90">"MediVolt's platform enabled us to reach more people with vital health information in remote areas."</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <MessageSquare size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Hospital Efficiency Boost</h3>
              <p className="opacity-90">"Integrating MediVolt into our system significantly reduced administrative burden and improved patient flow."</p>
            </div>
          </div>
        </div>
        
        {/* Share Your Story CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">We love hearing how MediVolt has made a difference in your life. Share your experience with us!</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Share Your Story</a>
        </div>
      </div>
    </div>
  );
}