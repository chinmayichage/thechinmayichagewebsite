
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
  activeSection: string;
}

const Background: React.FC<BackgroundProps> = ({ activeSection }) => {
  const colors = useMemo(() => {
    const palette = {
      home: { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#60a5fa' },
      skills: { primary: '#6366f1', secondary: '#3b82f6', accent: '#a5b4fc' },
      projects: { primary: '#0ea5e9', secondary: '#0891b2', accent: '#22d3ee' },
      certifications: { primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24' },
      experience: { primary: '#64748b', secondary: '#475569', accent: '#94a3b8' },
      education: { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
      contact: { primary: '#a855f7', secondary: '#7c3aed', accent: '#c084fc' },
    };
    return palette[activeSection as keyof typeof palette] || palette.home;
  }, [activeSection]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617] transition-colors duration-1000">
      {/* Dynamic Orbs - Simplified for performance */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-30 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          filter: 'blur(100px)' // Move filter to a separate layer or simplify
        }}
      />
      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          x: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-20 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(100px)'
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.accent} 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.accent} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

export default Background;
