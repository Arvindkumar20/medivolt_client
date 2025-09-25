import React from 'react';
import { LayoutDashboard, Heart, Activity, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AIHealthDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30">
              <Activity className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            🏥 AI Health Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your personalized health insights powered by AI
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-primary-500/50">
            <Heart size={48} className="text-primary-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">Personalized Health Scoring</h2>
            <p className="text-lg text-gray-300">Receive an AI-driven health score based on your data, providing a holistic view of your well-being and areas for improvement.</p>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-primary-500/50">
            <Activity size={48} className="text-accent-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">Activity & Lifestyle Tracking</h2>
            <p className="text-lg text-gray-300">Seamlessly integrate data from wearables and apps to track your physical activity, sleep patterns, and daily habits.</p>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-primary-500/50">
            <TrendingUp size={48} className="text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">Progress & Goal Management</h2>
            <p className="text-lg text-gray-300">Set and monitor your health goals with intelligent insights and recommendations to keep you on track.</p>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-primary-500/50">
            <ShieldCheck size={48} className="text-blue-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">Health Risk Assessment</h2>
            <p className="text-lg text-gray-300">Get proactive health insights and risk assessments based on your medical history and current health data.</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How Your AI Health Dashboard Works</h2>
          <div className="space-y-6">
            <p className="text-lg opacity-90">1. <strong>Data Integration:</strong> Connect your health apps, wearables, and medical records for a unified view of your health data.</p>
            <p className="text-lg opacity-90">2. <strong>AI Analysis:</strong> Our advanced AI algorithms process your data to identify patterns, trends, and potential health insights.</p>
            <p className="text-lg opacity-90">3. <strong>Personalized Insights:</strong> Receive actionable recommendations, health scores, and progress reports tailored to your unique profile.</p>
            <p className="text-lg opacity-90">4. <strong>Proactive Management:</strong> Use your dashboard to make informed decisions about your health and well-being, with Medivolt as your intelligent health partner.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Unlock the power of AI to understand and manage your health like never before. Get your personalized health dashboard now.</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Access Your Dashboard</a>
        </div>
      </div>
    </div>
  );
}