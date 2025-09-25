import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function PremiumCard({ 
  children, 
  className, 
  hover = true, 
  glow = false, 
  gradient = false,
  ...props 
}) {
  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    },
    hover: { 
      scale: 1.05,
      rotateX: -5,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 0px rgba(16, 185, 129, 0)" 
    },
    hover: { 
      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" 
    }
  };

  return (
    <motion.div
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-2xl border border-white/20",
        // Glassmorphism effect
        "backdrop-blur-xl bg-white/10",
        // Gradient background if enabled
        gradient && "bg-gradient-to-br from-white/20 via-white/10 to-transparent",
        // Glow effect
        glow && "shadow-2xl shadow-primary/20",
        // Interactive styles
        hover && "cursor-pointer transition-all duration-300",
        className
      )}
      variants={cardVariants}
      initial="initial"
      whileHover={hover ? "hover" : "initial"}
      style={{
        perspective: 1000,
      }}
      {...props}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{ padding: '1px' }}>
        <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}

export function FeatureCard({ icon: Icon, title, description, benefits, color, ...props }) {
  return (
    <PremiumCard 
      className="group h-full"
      hover={true}
      glow={true}
      gradient={true}
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className={`p-3 ${color} rounded-xl flex-shrink-0 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <div className="flex-1">
            <motion.h3 
              className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-sm leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
        
        <div className="space-y-2 mb-6 flex-1">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full flex-shrink-0 shadow-sm"></div>
              <span className="text-gray-600">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </PremiumCard>
  );
}
