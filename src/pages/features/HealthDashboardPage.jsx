import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { Button } from '../../components/ui/Button';
import { HeartPulse, Activity, Moon, Sun, Utensils, Brain, BatteryCharging, Award, Sparkles, TrendingUp } from 'lucide-react';

export default function HealthDashboardPage() {
  const [metrics, setMetrics] = useState({
    steps: 5200,
    sleep: 6.5,
    water: 6,
    stress: 3,
    calories: 1800,
    bp: '130/85',
    sugar: 98,
  });

  const computeScore = () => {
    // Simple mock scoring
    let score = 70;
    if (metrics.steps > 8000) score += 10;
    if (metrics.sleep >= 7) score += 10;
    if (metrics.water >= 8) score += 5;
    if (metrics.stress < 3) score += 5;
    return Math.min(100, score);
  };

  const score = computeScore();

  const getScoreColor = (score) => {
    if (score >= 90) return 'from-green-500 to-emerald-600';
    if (score >= 70) return 'from-blue-500 to-cyan-600';
    if (score >= 50) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const getScoreEmoji = (score) => {
    if (score >= 90) return '🎆';
    if (score >= 70) return '😊';
    if (score >= 50) return '😐';
    return '😟';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="inline mr-2 h-8 w-8 text-yellow-400" />
            AI Health Dashboard
          </motion.h1>
          <motion.p 
            className="text-white/80 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Your personalized health insights powered by AI
          </motion.p>
        </motion.div>

        {/* Main Health Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <PremiumCard className="p-8 text-center" glow={true} gradient={true}>
            <div className="flex flex-col items-center">
              <motion.div
                className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${getScoreColor(score)} bg-clip-text text-transparent mb-4`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                {score}
              </motion.div>
              <motion.div 
                className="text-white/80 text-xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-3xl mr-2">{getScoreEmoji(score)}</span>
                Overall Health Score
              </motion.div>
              <motion.div 
                className="w-full max-w-md h-3 bg-white/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${getScoreColor(score)} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </motion.div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Activity, label: 'Steps', value: metrics.steps, target: '8,000', color: 'from-blue-500 to-cyan-500' },
            { icon: Moon, label: 'Sleep (hrs)', value: metrics.sleep, target: '7–8', color: 'from-purple-500 to-indigo-500' },
            { icon: Utensils, label: 'Calories', value: metrics.calories, target: '1600–2200', color: 'from-green-500 to-emerald-500' },
            { icon: Brain, label: 'Stress Level', value: metrics.stress, target: '<3', color: 'from-red-500 to-pink-500' }
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <PremiumCard className="text-center p-6" hover={true}>
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-white/80 font-medium mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-white/60">
                    Target: {metric.target}
                  </div>
                </PremiumCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PremiumCard className="p-6" hover={true} gradient={true}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <HeartPulse className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">Vitals</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Blood Pressure:</span>
                  <span className="text-white font-medium">{metrics.bp}</span>
                </div>
                <div className="text-xs text-white/50">Goal: 120/80</div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Fasting Sugar:</span>
                  <span className="text-white font-medium">{metrics.sugar} mg/dl</span>
                </div>
                <div className="text-xs text-white/50">Goal: 70–100</div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Water Intake:</span>
                  <span className="text-white font-medium">{metrics.water} glasses</span>
                </div>
                <div className="text-xs text-white/50">Goal: 8 glasses</div>
              </div>
            </PremiumCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <PremiumCard className="p-6" hover={true} gradient={true}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">AI Tips</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  Walk 15 minutes after meals to improve sugar control.
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  Do 5 minutes of breathing exercises in the afternoon.
                </li>
                <li className="flex items-start gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  Target 7.5 hours of sleep tonight; avoid screens 1 hour before bed.
                </li>
              </ul>
            </PremiumCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <PremiumCard className="p-6" hover={true} gradient={true}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg">
                    💧 Log Water +1
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg">
                    🚶 Add Steps
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg">
                    📊 View Trends
                  </Button>
                </motion.div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
