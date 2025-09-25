import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Pill, Search, Camera, Info, AlertTriangle, CheckCircle, IndianRupee, Clock, Heart, Shield } from 'lucide-react';

export default function MedicineInfoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [medicineInfo, setMedicineInfo] = useState(null);
  const [selectedTab, setSelectedTab] = useState('search');
  const [language, setLanguage] = useState('english');

  const commonMedicines = [
    { name: 'Paracetamol 500mg', category: 'Pain Relief', price: '₹15-25' },
    { name: 'Crocin 650mg', category: 'Fever', price: '₹20-30' },
    { name: 'Combiflam', category: 'Pain & Fever', price: '₹25-35' },
    { name: 'Cetirizine 10mg', category: 'Allergy', price: '₹10-20' },
    { name: 'Pantoprazole 40mg', category: 'Acidity', price: '₹30-50' },
    { name: 'Azithromycin 500mg', category: 'Antibiotic', price: '₹80-120' },
  ];

  const searchMedicine = (medicineName) => {
    setIsSearching(true);
    setSearchTerm(medicineName || searchTerm);
    
    // Simulate AI search
    setTimeout(() => {
      const mockData = {
        name: medicineName || searchTerm,
        genericName: medicineName === 'Crocin 650mg' ? 'Paracetamol' : 'Paracetamol',
        strength: '500mg',
        manufacturer: 'Generic Pharmaceutical',
        category: 'Analgesic & Antipyretic',
        
        usage: language === 'hindi' ? [
          'बुखार कम करने के लिए',
          'सिर दर्द के लिए',
          'शरीर में दर्द के लिए',
          'दांत दर्द के लिए'
        ] : [
          'Reduces fever and body temperature',
          'Relieves headache and migraine',
          'Reduces body pain and muscle aches',
          'Helps with toothache'
        ],
        
        dosage: {
          adult: language === 'hindi' 
            ? '500-1000mg हर 4-6 घंटे में (दिन में अधिकतम 4000mg)'
            : '500-1000mg every 4-6 hours (max 4000mg per day)',
          child: language === 'hindi'
            ? '10-15mg/kg हर 4-6 घंटे में'
            : '10-15mg/kg every 4-6 hours',
          elderly: language === 'hindi'
            ? 'कम डोज़ या डॉक्टर की सलाह लें'
            : 'Reduced dose or consult doctor'
        },
        
        sideEffects: {
          common: language === 'hindi' ? [
            'जी मिचलाना',
            'पेट की खराबी',
            'चक्कर आना'
          ] : [
            'Nausea',
            'Stomach upset',
            'Dizziness'
          ],
          serious: language === 'hindi' ? [
            'लिवर को नुकसान (अधिक मात्रा में)',
            'स्किन रैश',
            'सांस लेने में तकलीफ'
          ] : [
            'Liver damage (overdose)',
            'Skin rash',
            'Breathing difficulties'
          ]
        },
        
        interactions: language === 'hindi' ? [
          'शराब के साथ न लें',
          'वार्फरिन के साथ सावधानी',
          'अन्य दर्द निवारक दवाओं के साथ न मिलाएं'
        ] : [
          'Avoid with alcohol',
          'Caution with warfarin',
          'Do not combine with other pain relievers'
        ],
        
        alternatives: [
          { name: 'Dolo 650', price: '₹12-18', savings: '₹5-10' },
          { name: 'Pyrigesic 500', price: '₹8-15', savings: '₹7-15' },
          { name: 'Febrinil 500', price: '₹10-16', savings: '₹5-12' },
        ],
        
        price: {
          brand: '₹20-30',
          generic: '₹8-15',
          savings: '60-70%'
        },
        
        availability: {
          prescription: language === 'hindi' ? 'पर्चे की जरूरत नहीं' : 'No prescription needed',
          stores: language === 'hindi' ? 'सभी मेडिकल स्टोर में उपलब्ध' : 'Available at all medical stores',
          online: true
        }
      };
      
      setMedicineInfo(mockData);
      setIsSearching(false);
    }, 2000);
  };

  const scanMedicine = () => {
    alert('Camera functionality would be implemented here');
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
              <Pill className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-200 to-accent-300 bg-clip-text text-transparent">
            💊 AI Medicine Information
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get detailed information about medicines, side effects, dosage, and alternatives
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">
              🔍 Search Any Medicine
            </span>
            <span className="px-4 py-2 bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full text-sm font-medium">
              📱 Scan Medicine
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-200 border border-primary-500/30 rounded-full text-sm font-medium">
              💰 Price Comparison
            </span>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mb-8 max-w-2xl mx-auto p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Pill className="h-5 w-5 text-primary-400" />
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

        {/* Search/Scan Tabs */}
        <div className="mb-8 max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm relative z-10">
          <div className="flex border-b border-gray-600/50">
            <button
              className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                selectedTab === 'search'
                  ? 'border-b-2 border-primary-400 text-primary-300'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setSelectedTab('search')}
            >
              <Search className="h-5 w-5 mx-auto mb-1" />
              {language === 'hindi' ? 'दवा खोजें' : 'Search Medicine'}
            </button>
            <button
              className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
                selectedTab === 'scan'
                  ? 'border-b-2 border-primary-400 text-primary-300'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setSelectedTab('scan')}
            >
              <Camera className="h-5 w-5 mx-auto mb-1" />
              {language === 'hindi' ? 'दवा स्कैन करें' : 'Scan Medicine'}
            </button>
          </div>

          <div className="p-6">
            {selectedTab === 'search' ? (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder={language === 'hindi' ? 'दवा का नाम लिखें (जैसे: पैरासिटामोल 500mg)' : 'Enter medicine name (e.g., Paracetamol 500mg)'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => searchMedicine()}
                    disabled={isSearching || !searchTerm.trim()}
                    className="px-8"
                  >
                    {isSearching ? (
                      <>
                        <Search className="animate-spin h-4 w-4 mr-2" />
                        {language === 'hindi' ? 'खोज रहे हैं...' : 'Searching...'}
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        {language === 'hindi' ? 'खोजें' : 'Search'}
                      </>
                    )}
                  </Button>
                </div>

                {/* Common Medicines */}
                <div>
                  <h4 className="font-medium mb-3 text-white">
                    {language === 'hindi' ? 'आम दवाइयां:' : 'Common Medicines:'}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {commonMedicines.map((medicine, index) => (
                      <button
                        key={index}
                        className="p-3 text-left border border-gray-600/50 rounded-lg hover:bg-gray-700/30 hover:border-primary-500/50 transition-colors"
                        onClick={() => searchMedicine(medicine.name)}
                      >
                        <p className="font-medium text-sm text-white">{medicine.name}</p>
                        <p className="text-xs text-gray-400">{medicine.category}</p>
                        <p className="text-xs text-primary-300 font-medium">{medicine.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Camera className="h-24 w-24 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {language === 'hindi' ? 'दवा का फोटो लें' : 'Take Medicine Photo'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {language === 'hindi'
                    ? 'दवा की पैकेजिंग या लेबल का फोटो लें'
                    : 'Take a photo of medicine packaging or label'
                  }
                </p>
                <Button onClick={scanMedicine} size="lg">
                  <Camera className="h-5 w-5 mr-2" />
                  {language === 'hindi' ? 'कैमरा खोलें' : 'Open Camera'}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Medicine Information Display */}
        {medicineInfo && (
          <div className="max-w-6xl mx-auto space-y-6 relative z-10">
            {/* Basic Info */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">{medicineInfo.name}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-300">
                        {language === 'hindi' ? 'जेनेरिक नाम:' : 'Generic Name:'}
                      </span>
                      <span className="text-white">{medicineInfo.genericName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-300">
                        {language === 'hindi' ? 'खुराक:' : 'Strength:'}
                      </span>
                      <span className="text-white">{medicineInfo.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-300">
                        {language === 'hindi' ? 'श्रेणी:' : 'Category:'}
                      </span>
                      <span className="text-white">{medicineInfo.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-500/20 border border-primary-500/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-primary-200">
                      {language === 'hindi' ? 'कीमत तुलना' : 'Price Comparison'}
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{language === 'hindi' ? 'ब्रांडेड:' : 'Branded:'}</span>
                      <span className="font-medium">{medicineInfo.price.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'hindi' ? 'जेनेरिक:' : 'Generic:'}</span>
                      <span className="font-medium text-green-600">{medicineInfo.price.generic}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-green-700">
                      <span>{language === 'hindi' ? 'बचत:' : 'Savings:'}</span>
                      <span>{medicineInfo.price.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-red-400" />
                <h4 className="text-lg font-semibold text-white">
                  {language === 'hindi' ? 'उपयोग' : 'Uses'}
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {medicineInfo.usage.map((use, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary-400 flex-shrink-0" />
                    <span className="text-primary-200">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosage */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-orange-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'खुराक' : 'Dosage'}
                </h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'वयस्क:' : 'Adult:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.adult}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'बच्चे:' : 'Children:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.child}</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h5 className="font-medium text-gray-700 mb-2">
                    {language === 'hindi' ? 'बुजुर्ग:' : 'Elderly:'}
                  </h5>
                  <p className="text-sm text-gray-600">{medicineInfo.dosage.elderly}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Side Effects */}
              <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h4 className="text-lg font-semibold">
                    {language === 'hindi' ? 'दुष्प्रभाव' : 'Side Effects'}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">
                      {language === 'hindi' ? 'सामान्य:' : 'Common:'}
                    </h5>
                    <div className="space-y-1">
                      {medicineInfo.sideEffects.common.map((effect, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-600">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">
                      {language === 'hindi' ? 'गंभीर:' : 'Serious:'}
                    </h5>
                    <div className="space-y-1">
                      {medicineInfo.sideEffects.serious.map((effect, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="w-3 h-3 text-red-500"></AlertTriangle>
                          <span className="text-red-600">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Drug Interactions */}
              <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <h4 className="text-lg font-semibold">
                    {language === 'hindi' ? 'दवा के साथ परस्पर क्रिया' : 'Drug Interactions'}
                  </h4>
                </div>
                
                <div className="space-y-2">
                  {medicineInfo.interactions.map((interaction, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-purple-800">{interaction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cheaper Alternatives */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <IndianRupee className="h-5 w-5 text-green-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'सस्ते विकल्प' : 'Cheaper Alternatives'}
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {medicineInfo.alternatives.map((alt, index) => (
                  <div key={index} className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-green-800">{alt.name}</h5>
                      <span className="text-sm font-semibold text-green-600">{alt.savings} saved</span>
                    </div>
                    <p className="text-green-700 font-medium">{alt.price}</p>
                    <Button size="sm" variant="outline" className="w-full mt-3 border-green-300 text-green-700 hover:bg-green-100">
                      {language === 'hindi' ? 'खरीदें' : 'Buy Now'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-blue-500" />
                <h4 className="text-lg font-semibold">
                  {language === 'hindi' ? 'उपलब्धता' : 'Availability'}
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'पर्चा' : 'Prescription'}
                    </p>
                    <p className="text-sm text-gray-600">{medicineInfo.availability.prescription}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'दुकानें' : 'Stores'}
                    </p>
                    <p className="text-sm text-gray-600">{medicineInfo.availability.stores}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">
                      {language === 'hindi' ? 'ऑनलाइन' : 'Online'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {medicineInfo.availability.online 
                        ? (language === 'hindi' ? 'उपलब्ध' : 'Available') 
                        : (language === 'hindi' ? 'उपलब्ध नहीं' : 'Not Available')
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-start gap-2 text-gray-500 text-sm p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              <strong>
                {language === 'hindi' ? 'अस्वीकरण:' : 'Disclaimer:'}
              </strong>{' '}
              {language === 'hindi'
                ? 'यह जानकारी केवल शिक्षा के लिए है। दवा लेने से पहले हमेशा अपने डॉक्टर की सलाह लें। दवा का दुरुपयोग न करें।'
                : 'This information is for educational purposes only. Always consult your doctor or healthcare provider before taking any medication. Do not self-medicate or exceed recommended dosage.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

