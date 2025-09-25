import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Stethoscope, Send, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SymptomCheckerPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const check = () => {
    setLoading(true);
    setTimeout(()=>{
      setResult({
        possibilities: [
          { name: 'Viral Fever', urgency: 'low', next: 'Hydration, rest, monitor 3 days' },
          { name: 'COVID-19', urgency: 'medium', next: 'Consider test if persistent 3+ days' },
        ],
        advice: 'If fever > 101°F for more than 3 days, see a doctor.',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30">
              <Stethoscope className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            🩺 AI Symptom Checker
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Describe your symptoms and get AI-powered health insights
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <textarea 
            className="w-full h-32 bg-gray-800/50 border border-gray-600/50 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 focus:shadow-lg focus:shadow-primary-500/20" 
            placeholder="e.g., Cough + fever + tiredness for 2 days" 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
          />
          <Button 
            className="mt-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500" 
            onClick={check} 
            disabled={!text.trim() || loading}
          >
            {loading ? 'Checking...' : 'Check'}
          </Button>
        </div>

        {result && (
          <div className="mt-6 space-y-3 relative z-10">
            {result.possibilities.map((p,i)=> (
              <div key={i} className="p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-white">{p.name}</div>
                  <span className={`text-xs px-2 py-1 rounded ${p.urgency==='high'?'bg-red-500/20 text-red-300 border border-red-500/30':p.urgency==='medium'?'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30':'bg-green-500/20 text-green-300 border border-green-500/30'}`}>{p.urgency.toUpperCase()}</span>
                </div>
                <div className="text-sm text-gray-300 mt-2">Next: {p.next}</div>
              </div>
            ))}
            <div className="flex items-start gap-2 text-sm text-primary-200 p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg">
              <AlertTriangle className="h-4 w-4 mt-0.5 text-primary-300" />
              <p>{result.advice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
