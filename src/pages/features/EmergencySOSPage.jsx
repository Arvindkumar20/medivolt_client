import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, PhoneCall, Heart, Zap, Shield, Clock, Mic, Phone, Truck, Building2, Users } from 'lucide-react';

export default function EmergencySOSPage() {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [testMode, setTestMode] = useState(false);
  const [voiceActivated, setVoiceActivated] = useState(false);

  const triggerSOS = () => {
    if (testMode) {
      alert('🧪 TEST MODE: SOS simulation completed successfully!');
      return;
    }
    
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsLoading(true);
          // Mock location fetch with delay
          setTimeout(() => {
            setStatus({
              sent: true,
              location: '28.6139° N, 77.2090° E',
              timestamp: new Date().toLocaleString(),
              contacts: ['Family', 'Doctor', 'Emergency Services'],
              responseTime: '< 30 seconds'
            });
            setIsLoading(false);
          }, 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelCountdown = () => {
    setCountdown(0);
  };

  const callEmergency = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Purple Flow Background Effects - Consistent with other pages */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/8 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Professional Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-medium">Emergency Response</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Emergency SOS
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Instant Medical Alert
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400 text-lg leading-relaxed">
            Send your location, medical history, and emergency alert to family, doctors, and emergency services instantly.
          </p>
        </motion.div>

        {/* Professional SOS Interface */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - SOS Button */}
              <div className="text-center">
                {countdown > 0 ? (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="text-6xl font-bold text-red-400 mb-4">{countdown}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">SOS Activating...</h3>
                    <button
                      className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                      onClick={cancelCountdown}
                    >
                      Cancel SOS
                    </button>
                  </motion.div>
                ) : isLoading ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-white">Sending Emergency Alert...</h3>
                  </div>
                ) : status ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">SOS Sent Successfully!</h3>
                    <div className="text-sm text-gray-300 space-y-2">
                      <p>📍 Location: {status.location}</p>
                      <p>⚡ Response Time: {status.responseTime}</p>
                      <p>👥 Contacts: {status.contacts.join(', ')}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    <motion.button
                      className="w-48 h-48 rounded-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-2xl shadow-red-500/25 transition-all duration-300 mb-6"
                      onClick={triggerSOS}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                          "0 0 0 20px rgba(239, 68, 68, 0)",
                          "0 0 0 0 rgba(239, 68, 68, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex flex-col items-center">
                        <AlertTriangle className="w-12 h-12 mb-2" />
                        <span className="text-xl">EMERGENCY</span>
                        <span className="text-lg">SOS</span>
                      </div>
                    </motion.button>
                    
                    {/* Advanced Options */}
                    <div className="flex justify-center gap-4">
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          testMode 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                            : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setTestMode(!testMode)}
                      >
                        {testMode ? '✓ Test Mode' : 'Test Mode'}
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                        onClick={() => callEmergency('108')}
                      >
                        📞 Call 108
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">What happens when you press SOS?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-3 h-3 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Live Location Shared</p>
                        <p className="text-gray-400 text-sm">GPS coordinates sent to emergency contacts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-3 h-3 text-red-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Medical History Shared</p>
                        <p className="text-gray-400 text-sm">Complete health profile sent to doctors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone className="w-3 h-3 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Emergency Services Alerted</p>
                        <p className="text-gray-400 text-sm">Hospitals and ambulances notified instantly</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 font-medium text-sm">Security & Privacy</span>
                  </div>
                  <p className="text-gray-300 text-sm">Your data is encrypted and secure. Only shared during emergencies with your consent.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Emergency Response Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">40%</div>
                <p className="text-gray-300 font-medium">Faster Response Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">10,000+</div>
                <p className="text-gray-300 font-medium">Lives Protected</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">24/7</div>
                <p className="text-gray-300 font-medium">Always Available</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">GPS Tracking</h3>
            <p className="text-gray-400 text-sm">Real-time location sharing with emergency contacts</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Auto Notifications</h3>
            <p className="text-gray-400 text-sm">Instant alerts to family and medical team</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Medical Data</h3>
            <p className="text-gray-400 text-sm">Complete health profile for faster treatment</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Instant Response</h3>
            <p className="text-gray-400 text-sm">Emergency services alerted within seconds</p>
          </div>
        </motion.div>

        {/* Emergency Contacts Setup */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Emergency Contact Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Family Members</h4>
                <p className="text-gray-400 text-sm">Add up to 5 family contacts for immediate notification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Medical Team</h4>
                <p className="text-gray-400 text-sm">Connect your doctors and healthcare providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Always connected to emergency services</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
