import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Shield, Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function InsuranceExplainerPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [planText, setPlanText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        summary: 'Covers hospitalization up to ₹5L; excludes cosmetic surgery, dental unless accident; 24-month waiting period on pre-existing conditions.',
        coverage: [
          'Inpatient care up to ₹5,00,000',
          'Daycare procedures',
          'Ambulance up to ₹2,000/claim'
        ],
        exclusions: [
          'Cosmetic treatment',
          'Dental (unless accident)',
          'First 30 days non-accidental illnesses'
        ],
        claims: [
          'Cashless at network hospitals',
          'Reimbursement within 15 days',
        ],
        bestFor: 'Family of 3–4 in Tier-2 city, age 25–40',
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Purple Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-80 z-0">
          <div className="w-full h-full bg-gradient-to-t from-primary-500/40 via-accent-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30">
              <Shield className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">🛡️ AI Insurance Explainer</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Upload a policy PDF or paste plan details. Get coverage, exclusions, waiting periods, and claim steps in plain words.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-3 text-white">Upload Policy</h3>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-primary-500/50 transition-colors">
              <Upload className="h-10 w-10 text-primary-400 mx-auto mb-3" />
              <Input type="file" accept=".pdf" onChange={(e)=>setSelectedFile(e.target.files?.[0])} />
              {selectedFile && (
                <p className="text-sm text-gray-300 mt-2">Selected: {selectedFile.name}</p>
              )}
            </div>
            <Button onClick={analyze} disabled={!selectedFile && !planText.trim()} className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500">
              {isAnalyzing ? 'Analyzing...' : 'Explain My Policy'}
            </Button>
          </div>
          <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-3 text-white">Or Paste Plan Text</h3>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Or paste plan details</h4>
              <textarea className="input h-32" value={planText} onChange={(e)=>setPlanText(e.target.value)} placeholder="Sum insured, premium, inclusions, exclusions..." />
            </div>
            {result ? (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-900">{result.summary}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Coverage</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {result.coverage.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exclusions</h4>
                  <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                    {result.exclusions.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Claim Process</h4>
                  <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1">
                    {result.claims.map((c,i)=>(<li key={i}>{c}</li>))}
                  </ol>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-green-800"><strong>Best for:</strong> {result.bestFor}</p>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-sm flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Upload a policy or paste details to analyze.</span>
              </div>
            )}
            <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
              <AlertCircle className="h-4 w-4 mt-0.5" />
              <p>We summarize publicly available information. Verify with insurer documents.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
