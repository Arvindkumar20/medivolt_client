import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { FileText, Upload, Languages, Brain, CheckCircle, AlertCircle, Download } from 'lucide-react';

export default function ReportExplainerPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [language, setLanguage] = useState('english');
  const [dragActive, setDragActive] = useState(false);

  const sampleReports = [
    { name: 'Blood Sugar Report', type: 'Diabetes Test', file: 'sample-blood-sugar.pdf' },
    { name: 'Lipid Profile', type: 'Cholesterol Test', file: 'sample-lipid.pdf' },
    { name: 'Liver Function Test', type: 'LFT Report', file: 'sample-lft.pdf' },
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setAnalysisResult(null);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      setAnalysisResult(null);
    }
  };

  const analyzeSampleReport = (sampleReport) => {
    setSelectedFile({ name: sampleReport.name, type: 'sample' });
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const sampleAnalysis = {
        reportType: sampleReport.type,
        summary: language === 'hindi' 
          ? "आपकी रिपोर्ट में कुछ महत्वपूर्ण बातें हैं जिन पर ध्यान देना जरूरी है।" 
          : "Your report shows several important findings that need attention.",
        keyFindings: language === 'hindi' ? [
          { parameter: 'रक्त शुगर', value: '180 mg/dl', status: 'high', explanation: 'यह सामान्य से अधिक है। डायबिटीज के लिए तुरंत डॉक्टर से मिलें।' },
          { parameter: 'कोलेस्ट्रॉल', value: '240 mg/dl', status: 'high', explanation: 'कोलेस्ट्रॉल बढ़ा हुआ है। आपको अपना खाना बदलना होगा।' },
        ] : [
          { parameter: 'Blood Sugar', value: '180 mg/dl', status: 'high', explanation: 'This is higher than normal. Please consult a doctor immediately for diabetes management.' },
          { parameter: 'Cholesterol', value: '240 mg/dl', status: 'high', explanation: 'Your cholesterol is elevated. Dietary changes and possibly medication may be needed.' },
        ],
        recommendations: language === 'hindi' ? [
          'तुरंत डॉक्टर से मिलें',
          'चीनी और मिठाई कम करें',
          'रोज़ाना 30 मिनट वॉकिंग करें',
          'अपना वजन कंट्रोल करें'
        ] : [
          'Consult your doctor immediately',
          'Reduce sugar and sweets intake',
          'Walk for 30 minutes daily',
          'Maintain healthy weight'
        ],
        urgency: 'medium'
      };
      
      setAnalysisResult(sampleAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const analyzeReport = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const analysis = {
        reportType: 'General Health Report',
        summary: language === 'hindi' 
          ? "आपकी रिपोर्ट AI द्वारा विश्लेषित की गई है। यहाँ आसान भाषा में समझाया गया है।" 
          : "Your report has been analyzed by AI. Here's what it means in simple terms.",
        keyFindings: language === 'hindi' ? [
          { parameter: 'हीमोग्लोबिन', value: '12.5 g/dl', status: 'normal', explanation: 'यह सामान्य रेंज में है। आपमें खून की कमी नहीं है।' },
          { parameter: 'विटामिन D', value: '18 ng/ml', status: 'low', explanation: 'विटामिन D कम है। धूप में बैठें और डॉक्टर से सप्लीमेंट के बारे में पूछें।' },
        ] : [
          { parameter: 'Hemoglobin', value: '12.5 g/dl', status: 'normal', explanation: 'This is within normal range. You do not have anemia.' },
          { parameter: 'Vitamin D', value: '18 ng/ml', status: 'low', explanation: 'Your vitamin D is low. Get more sunlight and consult doctor about supplements.' },
        ],
        recommendations: language === 'hindi' ? [
          'रोज़ाना 20 मिनट धूप में बैठें',
          'हरी सब्जियां और फल खाएं',
          '6 महीने बाद दोबारा टेस्ट कराएं'
        ] : [
          'Get 20 minutes of sunlight daily',
          'Eat more green vegetables and fruits',
          'Retest after 6 months'
        ],
        urgency: 'low'
      };
      
      setAnalysisResult(analysis);
      setIsAnalyzing(false);
    }, 3000);
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
              <FileText className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            🩺 AI Medical Report Explainer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your medical report and get AI-powered explanations in simple Hindi or English
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">
              📝 Upload Any Report
            </span>
            <span className="px-4 py-2 bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full text-sm font-medium">
              🇮🇳 Hindi Support
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-200 border border-primary-500/30 rounded-full text-sm font-medium">
              🤖 AI Powered
            </span>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Languages className="h-5 w-5 text-primary-400" />
            <h3 className="text-lg font-semibold text-white">Choose Language / भाषा चुनें</h3>
          </div>
          <div className="flex gap-4">
            <Button
              variant={language === 'english' ? 'primary' : 'outline'}
              onClick={() => setLanguage('english')}
              className="flex-1"
            >
              English
            </Button>
            <Button
              variant={language === 'hindi' ? 'primary' : 'outline'}
              onClick={() => setLanguage('hindi')}
              className="flex-1"
            >
              हिंदी (Hindi)
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* File Upload Section */}
          <div>
            <div className="mb-6 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">Upload Your Report</h3>
              
              {/* Drag and Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-primary-400 bg-primary-500/10' 
                    : 'border-gray-600 hover:border-primary-500/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-4">
                  Drag & drop your medical report here, or click to select
                </p>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="report-upload"
                />
                <Button asChild className="mb-4">
                  <label htmlFor="report-upload" className="cursor-pointer">
                    Choose File
                  </label>
                </Button>
                <p className="text-xs text-gray-400">
                  Supports PDF, JPG, PNG files up to 10MB
                </p>
              </div>

              {selectedFile && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="font-medium text-green-300">
                      File Selected: {selectedFile.name}
                    </span>
                  </div>
                </div>
              )}

              {selectedFile && (
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500" 
                  onClick={analyzeReport}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="animate-spin h-4 w-4 mr-2" />
                      AI is analyzing your report...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      Analyze Report with AI
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Sample Reports */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">Try Sample Reports</h3>
              <div className="space-y-3">
                {sampleReports.map((sample, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-600/50 rounded-lg hover:bg-gray-700/30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-white">{sample.name}</p>
                      <p className="text-sm text-gray-400">{sample.type}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => analyzeSampleReport(sample)}
                      disabled={isAnalyzing}
                    >
                      Try This
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div>
            {analysisResult ? (
              <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {language === 'hindi' ? 'रिपोर्ट विश्लेषण' : 'Report Analysis'}
                  </h3>
                </div>

                {/* Summary */}
                <div className="mb-6 p-4 bg-primary-500/20 border border-primary-500/30 rounded-lg">
                  <h4 className="font-semibold text-primary-200 mb-2">
                    {language === 'hindi' ? 'सारांश' : 'Summary'}
                  </h4>
                  <p className="text-primary-100">{analysisResult.summary}</p>
                </div>

                {/* Key Findings */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-4">
                    {language === 'hindi' ? 'मुख्य परिणाम' : 'Key Findings'}
                  </h4>
                  <div className="space-y-3">
                    {analysisResult.keyFindings.map((finding, index) => (
                      <div 
                        key={index}
                        className={`p-4 border rounded-lg ${
                          finding.status === 'high' ? 'bg-red-500/20 border-red-500/30' :
                          finding.status === 'low' ? 'bg-yellow-500/20 border-yellow-500/30' :
                          'bg-green-500/20 border-green-500/30'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-medium text-white">{finding.parameter}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            finding.status === 'high' ? 'bg-red-400/30 text-red-200' :
                            finding.status === 'low' ? 'bg-yellow-400/30 text-yellow-200' :
                            'bg-green-400/30 text-green-200'
                          }`}>
                            {finding.value}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">{finding.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {language === 'hindi' ? 'सुझाव' : 'Recommendations'}
                  </h4>
                  <div className="space-y-2">
                    {analysisResult.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgency Level */}
                <div className={`p-4 border rounded-lg ${
                  analysisResult.urgency === 'high' ? 'bg-red-50 border-red-200' :
                  analysisResult.urgency === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <AlertCircle className={`h-5 w-5 ${
                      analysisResult.urgency === 'high' ? 'text-red-600' :
                      analysisResult.urgency === 'medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`} />
                    <span className="font-medium">
                      {language === 'hindi' ? 'प्राथमिकता स्तर' : 'Priority Level'}: 
                      <span className={`ml-1 ${
                        analysisResult.urgency === 'high' ? 'text-red-600' :
                        analysisResult.urgency === 'medium' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {analysisResult.urgency === 'high' ? 
                          (language === 'hindi' ? 'उच्च - तुरंत डॉक्टर से मिलें' : 'High - See doctor immediately') :
                        analysisResult.urgency === 'medium' ? 
                          (language === 'hindi' ? 'मध्यम - जल्दी डॉक्टर से मिलें' : 'Medium - See doctor soon') :
                          (language === 'hindi' ? 'कम - नियमित जांच कराते रहें' : 'Low - Regular monitoring needed')
                        }
                      </span>
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-6" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  {language === 'hindi' ? 'रिपोर्ट डाउनलोड करें' : 'Download Analysis Report'}
                </Button>
              </div>
            ) : (
              <div className="text-center py-12 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  {language === 'hindi' ? 'AI विश्लेषण के लिए तैयार' : 'Ready for AI Analysis'}
                </h3>
                <p className="text-gray-400">
                  {language === 'hindi' 
                    ? 'अपनी रिपोर्ट अपलोड करें या सैंपल रिपोर्ट आज़माएं'
                    : 'Upload your report or try a sample report to get started'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
