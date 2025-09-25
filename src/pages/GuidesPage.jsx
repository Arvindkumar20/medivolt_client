import React from 'react';
import { Book, Lightbulb, Settings, HelpCircle } from 'lucide-react';

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Book size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Guides & Tutorials</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Unlock the full potential of MediVolt with our comprehensive guides and step-by-step tutorials designed to help you navigate our platform and maximize its benefits.</p>
        </div>
        
        {/* Featured Guides */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Lightbulb size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Getting Started with MediVolt AI</h2>
            <p className="text-lg opacity-90">A beginner-friendly guide to setting up your MediVolt account and understanding the basics of our AI-powered health insights.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
            <Settings size={48} className="text-white mb-4 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4">Interpreting Your Medical Reports</h2>
            <p className="text-lg opacity-90">Learn how to use MediVolt to decipher complex medical terminology and understand your lab results with ease.</p>
          </div>
        </div>
        
        {/* Guide Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Account Management</h3>
              <p className="opacity-90">Guides on managing your profile, privacy settings, and data.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">AI Features</h3>
              <p className="opacity-90">Deep dives into our AI capabilities, from symptom analysis to personalized recommendations.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6 text-center">
              <HelpCircle size={40} className="mx-auto text-white mb-3" />
              <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
              <p className="opacity-90">Solutions to common issues and FAQs to help you get back on track.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">If you can't find what you're looking for, our support team is here to assist you.</p>
          <a href="/support" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Contact Support</a>
        </div>
      </div>
    </div>
  );
}