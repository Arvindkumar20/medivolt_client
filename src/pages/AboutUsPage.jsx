import React from 'react';
import { Info, Users, Award, Heart, Clock, Globe } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Info size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About MediVolt</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">We are a passionate team dedicated to revolutionizing healthcare through AI-powered technology, making healthcare more accessible, personalized, and effective for everyone.</p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Users size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg opacity-90">To empower individuals with accessible, reliable, and innovative health solutions that enhance well-being and simplify healthcare management through cutting-edge AI technology.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Globe size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg opacity-90">A world where everyone has access to personalized healthcare insights, empowering them to make informed decisions about their health and well-being regardless of location or resources.</p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Award size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="opacity-90">We strive for excellence in every aspect of our service, from AI algorithms to user experience.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Heart size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="opacity-90">We approach healthcare with empathy, understanding the personal nature of health concerns.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Clock size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="opacity-90">We continuously innovate to provide cutting-edge solutions that address evolving healthcare needs.</p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-lg mb-4">MediVolt was founded in 2021 by a team of healthcare professionals, AI specialists, and technology enthusiasts who recognized the potential of artificial intelligence to transform healthcare delivery.</p>
          <p className="text-lg mb-4">Frustrated by the complexity and inaccessibility of healthcare information, our founders set out to create a platform that would make medical knowledge more accessible and personalized for everyone.</p>
          <p className="text-lg">Today, MediVolt serves thousands of users across India, helping them understand their health better, interpret medical reports, and make informed decisions about their well-being.</p>
        </div>
        
        {/* Join Us CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Whether you're a healthcare professional, AI enthusiast, or someone passionate about making healthcare better, we'd love to connect with you.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Contact Us</a>
        </div>
      </div>
    </div>
  );
}