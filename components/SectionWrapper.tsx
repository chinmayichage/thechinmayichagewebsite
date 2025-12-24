
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  onVisible: (id: string) => void;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, onVisible, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      onVisible(id);
    }
  }, [isInView, id, onVisible]);

  return (
    <section ref={ref} id={id} className={`min-h-screen py-24 px-6 relative z-10 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
