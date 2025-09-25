import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  Paperclip, 
  Globe,
  Image,
  FileText,
  MapPin,
  Waveform
} from 'lucide-react';

const AISearchBarClean = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  };

  const toggleVoiceSearch = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative">
        <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.005] transition-transform duration-200">
          <div className="flex items-center px-6 py-4 gap-4">
            {/* Left Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              <button className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
                <Paperclip className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
                <MapPin className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything or @mention a medical condition"
              className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
            />

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
                <Globe className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
                <Image className="h-5 w-5 text-gray-400 hover:text-white" />
              </button>

              <button className="w-10 h-10 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
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

              <button className="w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
                <Waveform className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchBarClean;
