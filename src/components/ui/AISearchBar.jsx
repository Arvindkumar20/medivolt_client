import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Mic, 
  Camera, 
  Paperclip, 
  Sparkles, 
  Brain,
  FileText,
  Stethoscope,
  Calculator,
  AlertTriangle,
  Globe,
  Zap,
  MapPin,
  Image,
  Waveform
} from 'lucide-react';

const AISearchBar = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  const medicalSuggestions = [
    { 
      text: "Explain my blood test report in simple terms", 
      icon: FileText, 
      category: "Report Analysis" 
    },
    { 
      text: "Safe medicines during pregnancy - first trimester", 
      icon: Brain, 
      category: "Pregnancy Care" 
    },
    { 
      text: "I have morning sickness, what can I do?", 
      icon: Stethoscope, 
      category: "Pregnancy Symptoms" 
    },
    { 
      text: "Diabetes management during pregnancy", 
      icon: Calculator, 
      category: "Pregnancy Health" 
    },
    { 
      text: "High blood pressure symptoms and treatment", 
      icon: AlertTriangle, 
      category: "Health Concerns" 
    },
    { 
      text: "Vaccination schedule for newborns", 
      icon: Globe, 
      category: "Child Health" 
    }
  ];

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => setIsTyping(false), 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    // Here you would typically trigger the search
    console.log('Searching for:', suggestion.text);
  };

  const toggleVoiceSearch = () => {
    setIsListening(!isListening);
    // Here you would implement actual voice recognition
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      console.log('Searching for:', query);
      // Here you would implement the actual search functionality
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Search Container */}
      <div className="relative">
        <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.005] transition-transform duration-200">
          {/* Perplexity Style Search Input */}
          <div className="flex items-center px-6 py-4 gap-4">
            {/* Left Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              <button
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Paperclip className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MapPin className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Input Field */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything or @mention a medical condition"
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
            />

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Globe className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Image className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <FileText className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button
                onClick={toggleVoiceSearch}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isListening 
                    ? 'bg-red-500 text-white' 
                    : 'hover:bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <Mic className="h-5 w-5" />
              </button>

              <button
                className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Waveform className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* AI Processing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-3"
              >
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="h-3 w-3" />
                  </motion.div>
                  <span>AI is thinking...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {showSuggestions && !query && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
            >
              <div className="p-4">
                <div className="text-neutral-400 text-sm mb-3 flex items-center gap-2">
                  <Zap className="h-3 w-3 text-primary-400" />
                  Try asking about:
                </div>
                <div className="space-y-2">
                  {medicalSuggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-3 hover:bg-neutral-800/50 rounded-lg transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 p-2 bg-neutral-800 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                          <suggestion.icon className="h-4 w-4 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">
                            {suggestion.text}
                          </div>
                          <div className="text-neutral-500 text-xs">
                            {suggestion.category}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSuggestions(false)}
        />
      )}
    </div>
  );
};

export default AISearchBar;
