import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Building, Search, CheckCircle } from 'lucide-react';

export default function GovtSchemesPage() {
  const [input, setInput] = useState({ age: '', income: '', state: '' });
  const [schemes, setSchemes] = useState([]);

  const find = () => {
    // Mock eligibility
    const results = [
      { name: 'Ayushman Bharat (PM-JAY)', benefit: '₹5 lakh coverage per family', eligibility: 'BPL / SECC list', link: '#' },
      { name: 'State Health Assurance', benefit: '₹2–3 lakh coverage', eligibility: 'State specific criteria', link: '#' },
    ];
    setSchemes(results);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30">
              <Building className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            🏛️ Government Health Scheme Finder
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find government health schemes you're eligible for based on your profile
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">
              🏥 Ayushman Bharat
            </span>
            <span className="px-4 py-2 bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full text-sm font-medium">
              🏛️ State Schemes
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-200 border border-primary-500/30 rounded-full text-sm font-medium">
              ✅ Eligibility Check
            </span>
          </div>
        </div>

        <div className="mb-6 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <div className="grid md:grid-cols-4 gap-3">
            <input 
              className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50" 
              placeholder="Age" 
              value={input.age} 
              onChange={(e)=>setInput({...input, age:e.target.value})} 
            />
            <input 
              className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50" 
              placeholder="Annual Income (₹)" 
              value={input.income} 
              onChange={(e)=>setInput({...input, income:e.target.value})} 
            />
            <input 
              className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50" 
              placeholder="State" 
              value={input.state} 
              onChange={(e)=>setInput({...input, state:e.target.value})} 
            />
            <Button onClick={find} className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500">
              <Search className="h-4 w-4 mr-2"/>Check
            </Button>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          {schemes.map((s, i)=> (
            <div key={i} className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              <div>
                <div className="font-semibold text-white">{s.name}</div>
                <div className="text-sm text-gray-300">Benefit: {s.benefit}</div>
                <div className="text-sm text-gray-300">Eligibility: {s.eligibility}</div>
                <div className="mt-2">
                  <a href={s.link} className="text-primary-300 text-sm hover:text-primary-200 transition-colors">Apply/Know More →</a>
                </div>
              </div>
            </div>
          ))}

          {schemes.length === 0 && (
            <div className="text-sm text-gray-400 text-center py-8">Fill details to see schemes.</div>
          )}
        </div>
      </div>
    </div>
  );
}
