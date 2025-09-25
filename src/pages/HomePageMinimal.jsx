import React from "react";

export default function HomePageMinimal() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">MediVolt</h1>
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center px-6 py-4 gap-4">
              <input
                type="text"
                placeholder="Ask anything or @mention a medical condition"
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
