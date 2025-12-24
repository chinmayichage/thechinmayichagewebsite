
import React from 'react';
import { motion } from 'framer-motion';

export const IntroAnimation = () => (
  <motion.div 
    className="relative w-full h-[400px] flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-sm">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Abstract person shapes */}
      <motion.circle 
        cx="100" cy="60" r="30" fill="url(#grad)" 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M40,160 Q100,100 160,160 L160,180 L40,180 Z" 
        fill="url(#grad)" 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect 
        x="60" y="100" width="80" height="20" rx="10" fill="white" fillOpacity="0.2"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Floating data bits */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx={40 + Math.random() * 120}
          cy={40 + Math.random() * 120}
          r={Math.random() * 4 + 2}
          fill="#3b82f6"
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </svg>
  </motion.div>
);

export const HandshakeAnimation = () => (
  <motion.div 
    className="relative w-full h-[200px] flex items-center justify-center"
  >
    <svg viewBox="0 0 200 100" className="w-full h-full max-w-xs overflow-visible">
      <motion.path
        d="M20,50 L70,50"
        stroke="#3b82f6"
        strokeWidth="12"
        strokeLinecap="round"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      />
      <motion.path
        d="M180,50 L130,50"
        stroke="#8b5cf6"
        strokeWidth="12"
        strokeLinecap="round"
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
      />
      <motion.circle
        cx="100" cy="50" r="15"
        fill="white"
        fillOpacity="0.1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      />
      {/* Handshake fingers detail */}
      <motion.path
        d="M85,45 L115,45 M85,55 L115,55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </svg>
  </motion.div>
);
