
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CarCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [rotation, setRotation] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  
  // High performance motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the car movement
  const springConfig = { damping: 25, stiffness: 200 };
  const carX = useSpring(mouseX, springConfig);
  const carY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 2) {
        // Calculate rotation based on movement direction
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation(angle);

        // Emit smoke particles if moving fast enough
        if (distance > 5) {
          setParticles(prev => [
            ...prev.slice(-15),
            {
              id: Date.now(),
              x: e.clientX,
              y: e.clientY,
              size: Math.random() * 10 + 5
            }
          ]);
        }
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Smoke Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.4, scale: 0.5, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 2, 
              x: p.x + (Math.random() - 0.5) * 40,
              y: p.y + (Math.random() - 0.5) * 40 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-4 h-4 bg-slate-400/20 rounded-full blur-md"
            style={{ width: p.size, height: p.size }}
          />
        ))}
      </AnimatePresence>

      {/* The Car */}
      <motion.div
        style={{ x: carX, y: carY, rotate: rotation, translateX: '-50%', translateY: '-50%' }}
        className="relative"
      >
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Car Body */}
          <rect x="2" y="4" width="36" height="12" rx="4" fill="#3b82f6" />
          <rect x="8" y="2" width="20" height="16" rx="3" fill="#1d4ed8" />
          {/* Windows */}
          <rect x="12" y="5" width="12" height="10" rx="1" fill="#93c5fd" fillOpacity="0.5" />
          {/* Headlights */}
          <circle cx="36" cy="7" r="1.5" fill="#fef08a" />
          <circle cx="36" cy="13" r="1.5" fill="#fef08a" />
          {/* Wheels */}
          <rect x="6" y="2" width="6" height="3" rx="1" fill="#0f172a" />
          <rect x="28" y="2" width="6" height="3" rx="1" fill="#0f172a" />
          <rect x="6" y="15" width="6" height="3" rx="1" fill="#0f172a" />
          <rect x="28" y="15" width="6" height="3" rx="1" fill="#0f172a" />
          {/* Spoilers */}
          <rect x="2" y="5" width="2" height="10" fill="#1e3a8a" />
        </svg>
        
        {/* Flame from exhaust when drifting */}
        <motion.div 
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 0.1 }}
          className="absolute left-[-10px] top-[4px] w-6 h-2 bg-gradient-to-r from-orange-500 to-transparent blur-sm rounded-full origin-right rotate-180" 
        />
        <motion.div 
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 0.1, delay: 0.05 }}
          className="absolute left-[-10px] top-[14px] w-6 h-2 bg-gradient-to-r from-orange-500 to-transparent blur-sm rounded-full origin-right rotate-180" 
        />
      </motion.div>
    </div>
  );
};

export default CarCursor;
