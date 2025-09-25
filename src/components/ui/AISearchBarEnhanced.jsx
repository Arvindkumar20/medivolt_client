import React, { useState, useRef } from 'react';
import { 
  Search, 
  Mic, 
  Paperclip, 
  Globe,
  Image,
  FileText,
  MapPin,
  Waveform,
  Brain,
  Stethoscope,
  Calculator,
  AlertTriangle,
  Zap
} from 'lucide-react';

const AISearchBarEnhanced = () => {
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
    
    // Simple typing delay
    setTimeout(() => setIsTyping(false), 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    console.log('Searching for:', suggestion.text);
  };

  const toggleVoiceSearch = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        {/* Main Search Bar */}
        <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.005] transition-transform duration-200">
          <div className="flex items-center px-6 py-4 gap-4">
            {/* Left Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={handleSearch}
                title="Search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              <button 
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="Attach medical report"
              >
                <Paperclip className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button 
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="Find nearby hospitals"
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything or @mention a medical condition"
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
            />

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="Language settings"
              >
                <Globe className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button 
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="Upload medical image"
              >
                <Image className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button 
                className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="Attach file"
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
                title="Voice search"
              >
                <Mic className="h-5 w-5" />
              </button>

              <button 
                className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                title="AI Assistant"
              >
                <Waveform className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* AI Processing Indicator */}
          {isTyping && (
            <div className="px-6 pb-3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm">
                <div className="animate-spin">
                  <Brain className="h-3 w-3" />
                </div>
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && !query && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50">
            <div className="p-4">
              <div className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                <Zap className="h-3 w-3 text-cyan-400" />
                Try asking about:
              </div>
              <div className="space-y-2">
                {medicalSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-3 hover:bg-gray-800/50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <suggestion.icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {suggestion.text}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {suggestion.category}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
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

export default AISearchBarEnhanced;
