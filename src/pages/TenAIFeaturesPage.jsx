import React from 'react';
import { Brain, Lightbulb, Globe, Zap, Shield, TrendingUp, BarChart, Cloud, Code, Users } from 'lucide-react';

export default function TenAIFeaturesPage() {
  const features = [
    { icon: <Brain size={48} className="text-blue-500" />, title: "AI-Powered Diagnostics", description: "Early and accurate disease detection." },
    { icon: <Lightbulb size={48} className="text-green-500" />, title: "Personalized Health Plans", description: "Tailored wellness and treatment strategies." },
    { icon: <Globe size={48} className="text-purple-500" />, title: "Telemedicine Integration", description: "Seamless virtual consultations and care." },
    { icon: <Zap size={48} className="text-yellow-500" />, title: "Predictive Analytics", description: "Forecasting health trends and outbreaks." },
    { icon: <Shield size={48} className="text-red-500" />, title: "Drug Discovery & Development", description: "Accelerating new medication research." },
    { icon: <TrendingUp size={48} className="text-indigo-500" />, title: "Genomic Data Analysis", description: "Understanding genetic predispositions." },
    { icon: <BarChart size={48} className="text-pink-500" />, title: "Robotics in Surgery", description: "Precision and minimally invasive procedures." },
    { icon: <Cloud size={48} className="text-teal-500" />, title: "AI-Driven Research", description: "Analyzing vast medical literature." },
    { icon: <Code size={48} className="text-orange-500" />, title: "Healthcare Chatbots", description: "Instant support and information." },
    { icon: <Users size={48} className="text-cyan-500" />, title: "Elderly Care Assistance", description: "Monitoring and support for seniors." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">AI Features</h1>
        <p className="text-xl text-center mb-16 opacity-90">Exploring the transformative power of Artificial Intelligence in India's healthcare landscape.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-70 rounded-xl shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">{feature.title}</h2>
              <p className="text-lg opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg opacity-70">These features aim to enhance accessibility, efficiency, and quality of healthcare across India.</p>
        </div>
      </div>
    </div>
  );
}