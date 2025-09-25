import React from 'react';
import { Book, Search, Lightbulb, FileText } from 'lucide-react';

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Book size={64} className="mx-auto text-white mb-4 animate-bounce" />
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Healthcare AI Glossary</h1>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto">Demystify complex medical and AI terminology with our comprehensive glossary, designed to help you understand the language of modern healthcare.</p>
        </div>
        
        {/* Search and Alphabetical Filter */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <div className="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Search terms..." 
              className="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
              <span key={letter} className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-blue-800">{letter}</span>
            ))}
          </div>
        </div>
        
        {/* Glossary Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Common Terms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
              <Lightbulb size={48} className="text-white mb-4 animate-pulse" />
              <h3 className="text-2xl font-semibold mb-2">Artificial Intelligence (AI)</h3>
              <p className="text-lg opacity-90">The simulation of human intelligence processes by machines, especially computer systems.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
              <FileText size={48} className="text-white mb-4 animate-pulse" />
              <h2 className="text-2xl font-semibold mb-4">Machine Learning (ML)</h2>
              <p className="text-lg opacity-90">A subset of AI that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention.</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find a Term?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">Suggest a term to be added to our glossary or contact us for further clarification.</p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">Suggest a Term</a>
        </div>
      </div>
    </div>
  );
}