import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export function ExpandableCard({ 
  icon: Icon, 
  title, 
  description, 
  benefits, 
  color, 
  children,
  className,
  id, // Add id prop for unique identification
  expandedCardId, // Current expanded card ID from parent
  setExpandedCardId, // Function to set expanded card ID
  ...props 
}) {
  // Determine if this card is expanded based on ID comparison
  const isExpanded = id === expandedCardId;

  // Enhanced card variants for premium Lift & Reveal animation
  const cardVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
      y: 0,
      rotateX: 0,
      rotateY: 0
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)',
      y: -8,
      rotateX: -5,
      rotateY: 3,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 15
      }
    },
    expanded: {
      scale: 1.08,
      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
      y: -15,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 20
      }
    }
  };

  // Handle card click
  const handleCardClick = () => {
    // If this card is already expanded, collapse it
    // Otherwise, expand this card (which will collapse any other expanded card)
    setExpandedCardId(isExpanded ? null : id);
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20",
        "backdrop-blur-xl bg-white/10",
        "bg-gradient-to-br from-white/20 via-white/10 to-transparent",
        "shadow-2xl shadow-primary/20",
        "cursor-pointer transition-all duration-300",
        className
      )}
      variants={cardVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
      whileHover={!isExpanded ? "hover" : ""}
      onClick={handleCardClick}
      style={{ perspective: 1000 }}
      {...props}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full">
        <div className="flex flex-col h-full">
          {/* Card Header */}
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
                className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-neutral-300 text-sm leading-relaxed mb-4 drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {description}
              </motion.p>
            </div>
          </div>
          
          {/* Content */}
           <AnimatePresence>
             {isExpanded && (
               <motion.div
                 className="space-y-4"
                 initial={{ opacity: 0, height: 0, y: 30, scale: 0.95 }}
                 animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
                 exit={{ opacity: 0, height: 0, y: 20, scale: 0.95 }}
                 transition={{ 
                   type: 'spring',
                   stiffness: 350,
                   damping: 25,
                   staggerChildren: 0.15,
                   delayChildren: 0.2
                 }}
               >
                {/* Benefits Section */}
                <div>
                  <motion.h4 
                    className="font-semibold text-white mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Benefits
                  </motion.h4>
                  <div className="space-y-2">
                    {benefits.map((benefit, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          delay: 0.3 + idx * 0.15,
                          type: 'spring',
                          stiffness: 400,
                          damping: 20
                        }}
                      >
                        <motion.div 
                          className="w-3 h-3 bg-gradient-to-r from-primary to-blue-500 rounded-full flex-shrink-0 shadow-md"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        ></motion.div>
                        <span className="text-white/90 font-medium drop-shadow-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Additional Content */}
                <div className="pt-4">
                  {children}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {!isExpanded && (
            <div className="space-y-3 mb-6 flex-1">
              {benefits.slice(0, 1).map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3 text-sm"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.3 + idx * 0.15,
                    type: 'spring',
                    stiffness: 400,
                    damping: 20
                  }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-r from-primary to-blue-500 rounded-full flex-shrink-0 shadow-md"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  ></motion.div>
                  <span className="text-white/90 font-medium drop-shadow-sm">{benefit}</span>
                </motion.div>
              ))}
              <motion.div 
                className="text-xs text-primary/80 font-medium flex items-center gap-1 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Click to see more</span>
                <motion.span 
                  animate={{ x: [0, 3, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced shine effect for premium look */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
      </div>
      
      {/* Premium glow effect */}
      {isExpanded && (
        <motion.div 
          className="absolute inset-0 -z-10 opacity-0"
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 blur-xl" />
        </motion.div>
      )}
    </motion.div>
  );
}