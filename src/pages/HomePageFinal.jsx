import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import AISearchBarEnhanced from "../components/ui/AISearchBarEnhanced";
import {
  Brain,
  FileText,
  Shield,
  BarChart3,
  Calculator,
  Building,
  Stethoscope,
  AlertTriangle,
  Dumbbell,
  BookOpen,
} from "lucide-react";

export default function HomePageFinal() {
  const aiFeatures = [
    {
      id: "report-explainer",
      title: "AI Medical Report Explainer",
      icon: FileText,
    },
    {
      id: "medicine-info",
      title: "AI Medicine Information",
      icon: Shield,
    },
    {
      id: "health-dashboard",
      title: "Health Intelligence Dashboard",
      icon: BarChart3,
    },
    {
      id: "symptom-checker",
      title: "AI Symptom Assessment",
      icon: Stethoscope,
    },
    {
      id: "nutrition-calculator",
      title: "Nutrition Intelligence",
      icon: Calculator,
    },
    {
      id: "govt-schemes",
      title: "Healthcare Navigator",
      icon: Building,
    },
    {
      id: "emergency-sos",
      title: "Emergency Response",
      icon: AlertTriangle,
    },
    {
      id: "fitness-planner",
      title: "AI Fitness Planner",
      icon: Dumbbell,
    },
    {
      id: "health-literacy",
      title: "Health Education",
      icon: BookOpen,
    },
    {
      id: "ai-assistant",
      title: "AI Health Assistant",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
                Your AI Health
              </span>
              <br />
              <span className="text-white">Companion</span>
            </h1>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            className="w-full max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AISearchBarEnhanced />
          </motion.div>

          {/* Health Category Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              "🤰 Pregnancy Care",
              "💊 Medicine Info",
              "📊 Health Reports",
              "🏥 Find Hospitals",
              "🚨 Emergency SOS",
              "💪 Fitness Plans"
            ].map((category, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Circular AI Features Layout */}
          <div className="relative h-[500px] mb-16">
            {/* Center Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Book an Appointment
                </Button>
              </motion.div>
            </div>

            {/* Rotating Circular App Icons */}
            <motion.div 
              className="absolute inset-0 z-10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const angle = (index * 360) / aiFeatures.length;
                const radius = 250;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                const medicalImages = [
                  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=center'
                ];

                return (
                  <motion.div
                    key={feature.id}
                    className="absolute w-20 h-20 cursor-pointer group"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: -360 
                    }}
                    transition={{
                      opacity: { duration: 0.8, delay: index * 0.1 },
                      scale: { duration: 0.8, delay: index * 0.1 },
                      rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center relative rounded-3xl shadow-2xl group-hover:shadow-[0_25px_60px_rgba(139,92,246,0.4)] transition-all duration-300 border border-white/20"
                      style={{ 
                        backgroundImage: `url(${medicalImages[index % medicalImages.length]})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MediVolt Section */}
      <section className="w-full py-24 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎯 Why People Will Come to MediVolt?
            </h2>
            <p className="mx-auto max-w-[800px] text-white/70 text-lg leading-relaxed">
              In India, the problem is not tracking health → it's{" "}
              <strong>understanding it</strong>.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Most apps give data (numbers)
              </h3>
              <p className="text-white/70">
                Blood pressure: 140/90, Sugar: 180mg/dl, Cholesterol: 250mg/dl
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-primary-200">
                MediVolt gives meaning (explanation)
              </h3>
              <p className="text-white/70">
                "Aapka BP high hai, exercise kariye aur namak kam kariye. Doctor
                se miliye."
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                All in One Platform
              </h3>
              <p className="text-white/70">
                AI Doctor + Nutritionist + Insurance Advisor + Fitness Trainer +
                Govt Guide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
