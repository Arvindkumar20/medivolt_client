import React from 'react';
import { Info, Users, Award, Heart, Clock, Globe } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Info size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Join Our Team</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">At Medivolt, we're building the future of healthcare. Join a passionate team dedicated to making a real difference in people's lives through technology and innovation.</p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Users size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Our Mission for Talent</h2>
            <p className="text-lg opacity-90">To attract, develop, and retain exceptional talent who are passionate about transforming healthcare and committed to our values.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Globe size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Our Vision for Growth</h2>
            <p className="text-lg opacity-90">To create a dynamic and inclusive environment where every team member can thrive, innovate, and contribute to meaningful advancements in health technology.</p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Award size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="opacity-90">Embrace new ideas and push the boundaries of what's possible in health tech.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Heart size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="opacity-90">Work together, support each other, and achieve collective success.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Clock size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="opacity-90">Act with honesty, transparency, and a strong ethical compass.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Award size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="opacity-90">Focus on creating solutions that genuinely improve health outcomes.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Heart size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="opacity-90">Continuously learn, develop, and seek new challenges.</p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Journey Together</h2>
          <p className="text-lg mb-4">Medivolt started with a vision to simplify healthcare. Our growth has been fueled by the dedication and brilliance of our team. We believe in fostering a culture where every voice is heard and every contribution is valued.</p>
          <p className="text-lg mb-4">From a small startup to a growing enterprise, our journey has been marked by relentless innovation and a commitment to our users.</p>
          <p className="text-lg mb-4">Achieving key product launches, expanding our user base, and building a strong, diverse team.</p>
          <p className="text-lg">We are constantly looking for new ways to evolve and make a greater impact on global health.</p>
        </div>
        
        {/* Current Open Positions */}
        <section id="open-positions" className="py-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl mb-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Current Open Positions</h2>
            <p className="text-lg text-white opacity-90 mb-12">We're always looking for talented individuals to join our team. Explore our current openings below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for job listings */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
                <p className="text-gray-600 mb-4">Develop and maintain our core platform, focusing on scalability and performance.</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Full-time</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full ml-2">Remote</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-2xl font-semibold mb-2">Product Designer</h3>
                <p className="text-gray-600 mb-4">Design intuitive and engaging user experiences for our healthcare applications.</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Full-time</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full ml-2">Hybrid</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-2xl font-semibold mb-2">Data Scientist</h3>
                <p className="text-gray-600 mb-4">Analyze complex health data to derive insights and improve our AI models.</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Full-time</span>
                <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full ml-2">On-site</span>
              </div>
            </div>
            <button className="mt-12 px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              See All Openings
            </button>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">If you're passionate about innovation and want to contribute to a healthier future, we'd love to hear from you.</p>
          <a href="#open-positions" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Apply Now</a>
        </div>
      </div>
    </div>
  );
}