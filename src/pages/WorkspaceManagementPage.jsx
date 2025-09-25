import React from 'react';
import { Briefcase, Layout, Users, Settings } from 'lucide-react';

export default function WorkspaceManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Briefcase size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Workspace Management</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Optimize your team's productivity and collaboration with MediVolt's advanced workspace management solutions, designed for seamless integration and efficient operations.</p>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Layout size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Centralized Dashboard</h2>
            <p className="text-lg opacity-90">Gain a holistic view of your team's activities, project progress, and resource allocation from a single, intuitive dashboard.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Users size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Collaborative Tools</h2>
            <p className="text-lg opacity-90">Facilitate seamless communication and document sharing with integrated tools designed to enhance team collaboration.</p>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits for Your Organization</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Settings size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
              <p className="opacity-90">Streamline workflows and automate routine tasks to boost overall operational efficiency.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Settings size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Productivity</h3>
              <p className="opacity-90">Provide your team with the tools they need to focus on high-value tasks and achieve more.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <Settings size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Better Decision Making</h3>
              <p className="opacity-90">Access real-time data and analytics to make informed decisions about your workspace and resources.</p>
            </div>
          </div>
        </div>
        
        {/* Case Studies */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
          <p className="text-lg mb-4">"MediVolt's workspace management solution transformed our remote team's collaboration. We saw a significant increase in project completion rates." - Tech Solutions Inc.</p>
          <p className="text-lg mb-4">"The centralized dashboard has been a game-changer for our project managers, providing clarity and control over multiple initiatives." - Global Innovations Ltd.</p>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Workspace?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Discover how MediVolt can help your organization achieve new levels of efficiency and collaboration.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Request a Demo</a>
        </div>
      </div>
    </div>
  );
}