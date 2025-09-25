import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
// import { PremiumCard, FeatureCard } from "../components/ui/PremiumCard";
// import { ExpandableCard } from "../components/ui/ExpandableCard";
// import MedicalScene from "../components/3d/MedicalScene";
// import SupportFeatures from "../components/features/SupportFeatures";
// import AISearchBarEnhanced from "../components/ui/AISearchBarEnhanced";
import {
  ArrowRight,
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
  Users,
  TrendingUp,
  Award,
  MapPin,
  Sparkles,
  Zap,
  Star,
  Bot,
  MessageSquare,
  Activity,
  Cpu,
} from "lucide-react";
import {
  AITypingAnimation,
  AIProcessingIndicator,
} from "../components/ui/AITypingAnimation";
import { Apple, Play } from "lucide-react";

export default function HomePage() {
  // State to track which card is currently expanded
  const [expandedCardId, setExpandedCardId] = useState(null);
  // State for search input
  const [searchInput, setSearchInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Handle search submission
  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      console.log("Searching for:", searchInput);
      // Here you can add your search logic
      // For now, we'll just clear the input
      setSearchInput("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  // Handle file attachment
  const handleAttachment = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf,.doc,.docx,.txt';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        console.log("File selected:", file.name);
        // Here you can handle the file upload
        alert(`File "${file.name}" selected for upload`);
      }
    };
    input.click();
  };

  // Handle voice recording
  const handleVoiceRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      console.log("Starting voice recording...");
      // Simulate recording for demo
      setTimeout(() => {
        setIsRecording(false);
        setSearchInput("Voice message recorded");
        console.log("Voice recording completed");
      }, 3000);
    } else {
      setIsRecording(false);
      console.log("Voice recording stopped");
    }
  };

  const aiFeatures = [
    {
      id: "report-explainer",
      title: "AI Medical Report Explainer",
      description:
        "Advanced AI interpretation of medical reports with bilingual explanations",
      icon: FileText,
      color: "bg-blue-500",
      benefits: [
        "Clinical insights simplified",
        "Dual-language support (Hindi/English)",
        "Comprehensive health intelligence",
        "Professional-grade analysis",
      ],
    },
    {
      id: "insurance-explainer",
      title: "AI Insurance Explainer & Finder",
      description:
        "AI-powered policy interpretation, coverage mapping, and claim assistance",
      icon: Shield,
      color: "bg-purple-500",
      benefits: [
        "Policy transparency engine",
        "Coverage optimization",
        "Claims navigation support",
        "Financial protection analysis",
      ],
    },
    {
      id: "nutrition-calculator",
      title: "Calories & Nutrition Calculator (AI Diet Buddy)",
      description:
        "AI-powered nutritional analysis with regional Indian cuisine database",
      icon: Calculator,
      color: "bg-orange-500",
      benefits: [
        "Regional food intelligence",
        "Personalized dietary planning",
        "Nutritional optimization",
        "Cultural dietary adaptation",
      ],
    },
    {
      id: "govt-schemes",
      title: "Government Health Scheme Finder",
      description:
        "Intelligent eligibility assessment for national health schemes",
      icon: Building,
      color: "bg-red-500",
      benefits: [
        "Multi-scheme eligibility analysis",
        "Application optimization",
        "Policy benefit mapping",
        "Accessibility streamlining",
      ],
    },
    {
      id: "symptom-checker",
      title: "AI Symptom Checker",
      description: "Advanced AI symptom analysis with clinical guidance",
      icon: Stethoscope,
      color: "bg-teal-500",
      benefits: [
        "24/7 clinical assessment",
        "Triage guidance system",
        "Healthcare navigation",
        "Emergency protocol mapping",
      ],
    },
    {
      id: "health-literacy",
      title: "Health Education Platform",
      description:
        "Advanced medical knowledge dissemination with visual learning",
      icon: BookOpen,
      color: "bg-yellow-500",
      benefits: [
        "Medical education simplified",
        "Visual learning system",
        "Disease awareness platform",
        "Health literacy enhancement",
      ],
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users" },
    { icon: FileText, value: "25,000+", label: "Reports Explained" },
    { icon: Shield, value: "15,000+", label: "Medicines Scanned" },
    { icon: TrendingUp, value: "30,000+", label: "Health Scores Generated" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
        {/* 3D Medical Background */}
        <div className="absolute inset-0 opacity-40">
          {/* <MedicalScene /> */}
        </div>

        {/* Purple Glow Effect at Bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-5">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Subtle geometric elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            className="absolute top-20 right-20 w-2 h-2 bg-primary/20 rounded-full"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-1 h-1 bg-accent/30 rounded-full"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Main Content - Clean Search Focus */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col items-center justify-center space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* MediVolt Logo/Branding */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Your Personal AI Doctor, 24/7
              </h1>
            </motion.div>

            {/* AI Search Bar - Center Focus */}
            <motion.div
              className="w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* MediVolt Branded Search Bar */}
              <div className="w-full max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-primary-500/30 rounded-3xl shadow-2xl shadow-primary-500/20 overflow-hidden backdrop-blur-sm">
                  <div className="flex items-center px-6 py-4 gap-4">
                    {/* Input Field */}
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask anything or @mention a medical condition"
                      className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none py-2 focus:placeholder-primary-300"
                    />

                    {/* Right Icons - Paperclip, Microphone, and Send Arrow */}
                    <div className="flex items-center gap-2">
                      {/* Paperclip Icon - File Attachment */}
                      <button 
                        onClick={handleAttachment}
                        className="w-9 h-9 hover:bg-primary-500/20 hover:border-primary-500/50 border border-transparent rounded-xl flex items-center justify-center transition-all duration-200 group"
                        title="Attach file"
                      >
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 00-2.828-2.828z" />
                        </svg>
                      </button>

                      {/* Microphone Icon - Voice Recording */}
                      <button 
                        onClick={handleVoiceRecording}
                        className={`w-9 h-9 hover:bg-primary-500/20 hover:border-primary-500/50 border border-transparent rounded-xl flex items-center justify-center transition-all duration-200 group ${
                          isRecording ? 'bg-red-500/20 border-red-500/50' : ''
                        }`}
                        title={isRecording ? "Stop recording" : "Start voice recording"}
                      >
                        <svg className={`w-4 h-4 transition-colors ${
                          isRecording ? 'text-red-400 animate-pulse' : 'text-gray-400 group-hover:text-primary-300'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>

                      {/* Send Arrow - Only shows when typing */}
                      {searchInput.trim() && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          onClick={handleSearchSubmit}
                          className="w-9 h-9 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg shadow-primary-500/25 hover:scale-110"
                          title="Send message"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* MediVolt Medical Categories */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {[
                    { icon: "🩺", text: "Diagnose" },
                    { icon: "💊", text: "Medicine" },
                    { icon: "🤰", text: "Pregnancy" },
                    { icon: "📊", text: "Reports" },
                    { icon: "🚨", text: "Emergency" }
                  ].map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/40 hover:bg-primary-500/20 border border-gray-600/30 hover:border-primary-500/50 rounded-full text-sm text-gray-300 hover:text-primary-200 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="text-base">{category.icon}</span>
                      <span className="font-medium">{category.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Live AI Demo Section */}
      <section className="relative w-full py-16 bg-black overflow-hidden">
        {/* Purple Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-60 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/30 via-accent-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Live AI Demo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              See AI in action
            </h2>
            <p className="text-neutral-300 text-lg">
              Watch how our AI processes and explains complex medical
              information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Medical Report Analysis Demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/30 w-full h-full hover:border-primary-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Medical Report Analysis
                  </h3>
                  <p className="text-sm text-gray-300">
                    Real-time AI explanation
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">
                    UPLOADED REPORT
                  </div>
                  <div className="text-sm text-neutral-700">
                    "Hemoglobin: 8.5 g/dL (Normal: 12-15 g/dL)"
                  </div>
                </div>

                <motion.div
                  className="bg-primary/5 p-4 rounded-lg border border-primary/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Your hemoglobin level is 8.5 g/dL, which is below the normal range.",
                      "This indicates anemia. You should eat iron-rich foods like spinach.",
                      "आपका हीमोग्लोबिन कम है। आयरन युक्त भोजन लें और डॉक्टर से मिलें।",
                    ]}
                    speed={50}
                    className="text-sm text-neutral-300"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Symptom Checker Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/30 w-full h-full hover:border-primary-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    AI Symptom Checker
                  </h3>
                  <p className="text-sm text-neutral-300">
                    24/7 health assistant
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">
                    USER INPUT
                  </div>
                  <div className="text-sm text-neutral-700">
                    "Fever, headache, and body aches for 2 days"
                  </div>
                </div>

                <motion.div
                  className="bg-primary/5 p-4 rounded-lg border border-primary/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Likely viral infection. Rest, hydration recommended.",
                      "Monitor temperature. See doctor if fever >101°F for 3+ days.",
                      "Consider COVID test if symptoms persist or worsen.",
                    ]}
                    speed={60}
                    className="text-sm text-neutral-300"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Nutrition Calculator Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/30 w-full h-full hover:border-primary-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Calories & Nutrition Calculator
                  </h3>
                  <p className="text-sm text-gray-300">AI Diet Buddy</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xs text-neutral-400 mb-2">FOOD ITEM</div>
                  <div className="text-sm text-neutral-700">
                    "Butter Chicken with 2 Rotis"
                  </div>
                </div>

                <motion.div
                  className="bg-primary/5 p-4 rounded-lg border border-primary/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <AITypingAnimation
                    messages={[
                      "Calories: 650 kcal (Butter Chicken: 450 kcal, Rotis: 200 kcal)",
                      "Protein: 32g | Carbs: 58g | Fat: 35g | Fiber: 6g",
                      "Healthier option: Replace cream with yogurt to reduce calories by 120 kcal",
                    ]}
                    speed={60}
                    className="text-sm text-neutral-300"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* AI Processing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  AI Performance
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Real-time processing power
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <motion.div
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  0.3s
                </motion.div>
                <div className="text-sm text-neutral-600">Response Time</div>
              </div>
              <div>
                <motion.div
                  className="text-2xl font-bold text-accent mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  99.9%
                </motion.div>
                <div className="text-sm text-neutral-600">Accuracy</div>
              </div>
              <div>
                <motion.div
                  className="text-2xl font-bold text-primary mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  24/7
                </motion.div>
                <div className="text-sm text-neutral-600">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10 AI Features with Premium 3D Background */}
      <section className="w-full py-24 relative overflow-hidden bg-black">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-80 z-5">
          <div className="w-full h-full bg-gradient-to-b from-primary-500/30 via-accent-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold tracking-wide">
                AI TOOLS
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
                style={{ textShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                AI Features
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto max-w-[900px] text-white/90 text-lg md:text-xl leading-relaxed font-medium drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
            >
              India's most comprehensive AI health platform - from medical
              report explanation to government health schemes, all in one
              intelligent ecosystem
            </motion.p>
          </motion.div>

          <div className="w-full max-w-7xl mx-auto">
            {/* Packed with Innovation Layout */}
            <div className="relative h-[500px] mb-16">
              {/* Center Button Only */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link to="/book-appointment">Book an Appointment</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Slowly Moving Circular App Icons */}
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
                  // Position icons around the center in a circular pattern
                  const angle = (index * 360) / aiFeatures.length;
                  const radius = 250;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  // Medical/Health related images for each AI tool
                  const medicalImages = [
                    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=120&fit=crop&crop=center', // Medical report/stethoscope
                    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=120&h=120&fit=crop&crop=center', // Pills/medicine
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=120&fit=crop&crop=center', // Insurance/documents
                    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=120&h=120&fit=crop&crop=center', // Health dashboard/charts
                    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=120&h=120&fit=crop&crop=center', // Nutrition/food
                    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&h=120&fit=crop&crop=center', // Government/hospital
                    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=120&fit=crop&crop=center', // Symptom checker/doctor
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=center', // Emergency/ambulance
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=center', // Health education/learning
                    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=center'  // Fitness/exercise
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
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        opacity: { duration: 0.8, delay: index * 0.1 },
                        scale: { duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 200 },
                        rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      {/* App Icon Card */}
                      <div 
                        className="w-full h-full bg-cover bg-center relative rounded-3xl shadow-2xl group-hover:shadow-[0_25px_60px_rgba(139,92,246,0.4)] transition-all duration-300 border border-white/20"
                        style={{ 
                          backgroundImage: `url(${medicalImages[index % medicalImages.length]})`,
                        }}
                      >
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
                        
                        {/* Icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Featured AI Tools Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
              {aiFeatures.slice(0, 6).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full bg-gradient-to-b from-neutral-900/90 to-neutral-800/90 backdrop-blur-sm rounded-2xl border border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Card Header */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-center mb-4">
                        <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed flex-grow">
                          {feature.description}
                        </p>
                      </div>

                      {/* Enhanced Preview Screen */}
                      <div className="mt-auto">
                        <div className="bg-black/50 rounded-xl p-4 border border-primary/10 h-28 flex flex-col justify-between group-hover:border-primary/20 transition-colors duration-300">
                          <div className="space-y-2">
                            <div className="h-2 bg-primary/30 rounded w-3/4 group-hover:bg-primary/40 transition-colors"></div>
                            <div className="h-2 bg-primary/20 rounded w-1/2 group-hover:bg-primary/30 transition-colors"></div>
                            <div className="h-2 bg-primary/10 rounded w-2/3 group-hover:bg-primary/20 transition-colors"></div>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                              <IconComponent className="h-3 w-3 text-primary" />
                            </div>
                            <div className="text-xs text-primary/60 font-medium">AI Powered</div>
                          </div>
                        </div>
                      </div>

                      {/* Try Now Button */}
                      <div className="mt-4">
                        <Button
                          className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300"
                          asChild
                        >
                          <Link to={`/${feature.id}`}>
                            Try {feature.title.split(' ')[0]}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional AI Tools Cards - Enhanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
              {aiFeatures.slice(6).map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-b from-neutral-900/95 to-neutral-800/95 backdrop-blur-sm rounded-3xl border border-primary/30 overflow-hidden group hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col h-full transform hover:scale-105"
                  >
                    {/* Enhanced Card Header */}
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Enhanced Preview Screen */}
                    <div className="px-8 pb-6 flex-1">
                      <div className="bg-black/60 rounded-2xl p-6 border border-primary/20 h-28 flex flex-col justify-between group-hover:border-primary/40 transition-all duration-300">
                        <div className="space-y-3">
                          <div className="h-2 bg-gradient-to-r from-primary/40 to-accent/30 rounded-full w-4/5"></div>
                          <div className="h-2 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full w-3/5"></div>
                          <div className="h-2 bg-gradient-to-r from-primary/20 to-accent/10 rounded-full w-3/4"></div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Try Button */}
                    <div className="px-8 pb-8 mt-auto">
                      <Button
                        className="w-full bg-gradient-to-r from-primary/20 to-accent/15 hover:from-primary/30 hover:to-accent/25 text-white border border-primary/40 hover:border-primary/60 transition-all duration-300 py-3 rounded-xl font-semibold group-hover:shadow-lg group-hover:shadow-primary/25"
                        asChild
                      >
                        <Link to={`/${feature.id}`} className="flex items-center justify-center gap-2">
                          <span>Explore {feature.title.split(' ')[0]}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "🔄",
                  title: "Real-Time Analysis",
                  description: "Instant insights for faster decision-making."
                },
                {
                  icon: "🛡️",
                  title: "HIPAA Compliant",
                  description: "AI-powered security and data protection."
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Optimized AI/UX that enhances user experience."
                },
                {
                  icon: "📊",
                  title: "Predictive Analytics",
                  description: "Make data-driven decisions with AI insights."
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-2xl mb-3">{highlight.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-neutral-400 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium AI Tools Section */}
      <section className="w-full py-16 relative overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Star className="h-4 w-4 text-purple-300" />
              <span className="text-purple-200 font-semibold tracking-wide">
                PREMIUM AI TOOLS
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced AI Healthcare Solutions
              </span>
            </motion.h2>

            <motion.p
              className="mx-auto max-w-[700px] text-gray-400 text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional-grade AI tools designed for healthcare providers and advanced users
            </motion.p>
          </motion.div>

          {/* Premium AI Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {/* AI Medicine Information */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-6 w-6 text-green-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">AI Medicine Information</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Comprehensive drug information, interactions, and cost-effective alternatives.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-green-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://knowhow.distrelec.com/wp-content/uploads/2023/12/iStock-1517344698-min-1024x683.jpg" 
                    alt="AI Medicine Analysis" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">Medicine Database</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>

            {/* AI Health Dashboard */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <BarChart3 className="h-6 w-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">AI Health Dashboard</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Comprehensive wellness monitoring with personalized health scoring and predictive analytics.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-indigo-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://blog.labtag.com/wp-content/uploads/2021/10/0139-Diagnostic-AI-700x290px.jpg" 
                    alt="Diagnostic AI Technology" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">24/7 Health Monitoring</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Response System */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <AlertTriangle className="h-6 w-6 text-red-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Emergency Response System</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Intelligent emergency coordination with real-time health data sharing and instant alerts.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-red-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://www.just-medical.ch/hubfs/AI-diagnostic_855591230.jpeg" 
                    alt="AI Emergency Response" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">Emergency Analytics</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>

            {/* AI Lifestyle & Fitness Planner */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Dumbbell className="h-6 w-6 text-pink-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">AI Lifestyle & Fitness Planner</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  AI-driven fitness programming with cultural adaptation and personalized wellness plans.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-pink-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Robot Assistant" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">Fitness Analytics</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>

            {/* AI Chatbots */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <MessageSquare className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">AI Medical Chatbots</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Instant AI-powered chatbots that automate medical consultations and provide 24/7 support.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-cyan-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://www.revechat.com/wp-content/uploads/2020/01/what-is-a-chatbot.webp" 
                    alt="AI Medical Chatbot" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">Smart Conversations</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>

            {/* Advanced Analytics */}
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-violet-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Advanced Health Analytics</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  Leverage AI to analyze health trends and predict outcomes for smarter healthcare decisions.
                </p>
                
                {/* Premium Feature Image */}
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden border border-violet-500/20 flex-shrink-0 bg-gray-800/50">
                  <img 
                    src="https://datafloq.com/wp-content/uploads/2021/12/blog_pictures2Faiinmedicine-750x420.jpg" 
                    alt="AI in Medicine Analytics" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-purple-300 font-medium text-xs">Predictive Models</span>
                  <div className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Premium</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <SupportFeatures /> */}

      {/* Why MediVolt */}
      <section className="w-full py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          {/* Support Dot */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Here When You
              <br />
              <span className="text-gray-400">Need Health Most Important.</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 text-lg leading-relaxed mb-8">
              MediVolt comes with dedicated AI support to help you understand and maintain
              your health without confusion.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View About MediVolt
            </motion.button>
          </motion.div>

          {/* Professional Feature Showcase */}
          <div className="relative mb-20">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Dynamic Zig-Zag Feature Layout */}
              <div className="space-y-16">
                {/* Row 1: AI Report Explainer (Left) + Health Dashboard (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* AI Report Explainer - Left Side */}
                  <motion.div
                    className="group relative bg-gradient-to-br from-primary-900/40 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-primary-500/30 hover:border-primary-400/60 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500/30 to-primary-600/40 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <svg className="w-10 h-10 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">
                        🩺 AI Report Explainer
                      </h3>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Transform complex medical reports into simple Hindi & English explanations. 
                        <span className="text-primary-300 font-semibold block mt-2 text-lg"> "Aapka BP high hai, exercise kariye!"</span>
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-primary-300 text-base font-semibold group-hover:text-primary-200 transition-colors cursor-pointer">
                          <span>Try AI Analysis</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="text-sm text-primary-400 bg-primary-500/20 px-4 py-2 rounded-full font-medium">
                          Free
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Visual Connector */}
                  <motion.div
                    className="hidden lg:flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Row 2: Health Dashboard (Center Large) */}
                <motion.div
                  className="max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="group relative bg-gradient-to-br from-accent-900/40 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-accent-500/30 hover:border-accent-400/60 hover:shadow-2xl hover:shadow-accent-500/20 transition-all duration-500 overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent-500/30 to-accent-600/40 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <svg className="w-12 h-12 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent-200 transition-colors">
                        📊 AI Health Dashboard
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Complete health ecosystem: Symptom checker, nutrition calculator, medicine finder & insurance guidance. 
                        <span className="text-accent-300 font-semibold block mt-2 text-xl">All in one place!</span>
                      </p>
                      
                      <div className="flex items-center justify-center gap-8">
                        <div className="flex items-center text-accent-300 text-lg font-semibold group-hover:text-accent-200 transition-colors cursor-pointer">
                          <span>Explore Dashboard</span>
                          <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="text-base text-accent-400 bg-accent-500/20 px-6 py-3 rounded-full font-medium">
                          Premium
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Row 3: Medicine Assistant (Right) + Visual Element (Left) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Visual Connector */}
                  <motion.div
                    className="hidden lg:flex justify-center items-center order-2 lg:order-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* AI Medicine Assistant - Right Side */}
                  <motion.div
                    className="group relative bg-gradient-to-br from-green-900/40 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-600/40 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <svg className="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">
                        💊 AI Medicine Assistant
                      </h3>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Smart medicine information, price comparison, side effects & alternatives. 
                        <span className="text-green-300 font-semibold block mt-2 text-lg">Save money, stay safe!</span>
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-green-300 text-base font-semibold group-hover:text-green-200 transition-colors cursor-pointer">
                          <span>Find Medicines</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="text-sm text-green-400 bg-green-500/20 px-4 py-2 rounded-full font-medium">
                          24/7
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Professional Stats */}
              <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div>
                  <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Users Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">0.3s</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* AI Health Analysis */}
            <div className="text-left p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Health Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get instant AI-powered explanations of your medical reports.
              </p>
            </div>

            {/* Expert Medical Guidance */}
            <div className="text-left p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Medical Guidance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our AI understands both medical terminology and patient needs.
              </p>
            </div>

            {/* 24/7 Health Support */}
            <div className="text-left p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Health Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Health guidance doesn't stop - available whenever you need it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Purple Flow Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Our Patients Say
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">About MediVolt's Excellence</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 text-lg leading-relaxed mb-8">
              Hear from our happy patients! See how we've helped them achieve
              their health goals and create lasting impact.
            </p>
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-purple-500/25 border border-purple-500/20 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Trusted by Patients, Backed by AI
            </motion.div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Rajesh Kumar</h4>
                    <p className="text-purple-300 text-sm">Diabetes Patient</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "MediVolt's AI explained my blood sugar reports in simple Hindi. Now I understand my condition better and manage it effectively. Excellent service!"
                </p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    P
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Priya Sharma</h4>
                    <p className="text-purple-300 text-sm">Working Mother</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "The nutrition calculator helped me plan healthy meals for my family. The medicine finder saved me money by showing cheaper alternatives. Highly recommended!"
                </p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Amit Patel</h4>
                    <p className="text-purple-300 text-sm">Senior Citizen</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "24/7 health support is amazing! Got instant help during my BP emergency. The AI symptom checker guided me to the right doctor immediately."
                </p>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Sneha Gupta</h4>
                    <p className="text-purple-300 text-sm">Fitness Enthusiast</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "The health dashboard tracks everything perfectly. From calories to symptoms, everything in one place. Made my fitness journey so much easier!"
                </p>
              </div>
            </motion.div>

            {/* Testimonial 5 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    V
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Vikram Singh</h4>
                    <p className="text-purple-300 text-sm">Heart Patient</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Insurance guidance helped me find the best coverage for my heart treatment. Saved thousands of rupees! MediVolt is a lifesaver."
                </p>
              </div>
            </motion.div>

            {/* Testimonial 6 */}
            <motion.div
              className="group bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Meera Joshi</h4>
                    <p className="text-purple-300 text-sm">New Mother</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Government scheme finder helped me get free vaccination for my baby. The platform is user-friendly and genuinely helpful for families."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Purple Flow Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Header */}
            <motion.div
              className="lg:sticky lg:top-12 h-fit"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* FAQ Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300 font-medium">FAQ</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Frequently Asked
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  Questions
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Have questions? Get quick answers to the most common inquiries about MediVolt's AI-powered healthcare platform.
              </motion.p>

              {/* Decorative Element */}
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>

            {/* Right Side - FAQ Items */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                {
                  question: "How does MediVolt's AI analyze my medical reports?",
                  answer: "Our AI uses advanced machine learning to interpret blood tests, X-rays, and medical reports. It explains complex medical terms in simple Hindi and English, helping you understand your health condition better."
                },
                {
                  question: "Is my health data secure and private?",
                  answer: "Absolutely! We use bank-level encryption and follow strict HIPAA compliance. Your medical data is stored securely in India and never shared without your consent. You have full control over your information."
                },
                {
                  question: "Can I use MediVolt without medical knowledge?",
                  answer: "Yes! MediVolt is designed for everyone. Our AI explains medical terms in simple language, provides step-by-step guidance, and offers 24/7 support to help you understand your health better."
                },
                {
                  question: "What makes MediVolt different from other health apps?",
                  answer: "MediVolt combines AI-powered medical analysis with personalized health insights. We offer report explanation, symptom checking, medication guidance, and emergency SOS - all in one comprehensive platform."
                },
                {
                  question: "How accurate is the AI medical analysis?",
                  answer: "Our AI is trained on vast medical datasets and provides highly accurate analysis. However, it's designed to complement, not replace, professional medical advice. We always recommend consulting with healthcare providers for serious conditions."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-3 flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-purple-900/20 to-gray-900/50 border border-purple-500/30 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
                <p className="text-gray-400 mb-6">
                  Can't find what you're looking for? Our support team is here to help 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Support
                  </motion.button>
                  <motion.button
                    className="border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Chat
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
