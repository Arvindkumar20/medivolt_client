import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function AITypingAnimation({ messages, speed = 100, className }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!messages || messages.length === 0) return;

    const message = messages[currentMessageIndex];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setCurrentText(message.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setCurrentText('');
          setIsTyping(true);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex, messages, speed]);

  return (
    <div className={className}>
      <span className="text-primary font-mono">AI:</span>{' '}
      <span className="font-mono">{currentText}</span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-primary"
        >
          |
        </motion.span>
      )}
    </div>
  );
}

export function AIProcessingIndicator({ isVisible, text = "AI is analyzing..." }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.9 
      }}
      className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg"
    >
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      <span className="text-primary font-medium">{text}</span>
    </motion.div>
  );
}
