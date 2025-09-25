import React from 'react';

const AISearchBarTest = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex items-center px-6 py-4 gap-4">
          <input
            type="text"
            placeholder="Test search bar"
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AISearchBarTest;
