import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3')",
          filter: "brightness(0.7)",
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Optimize Your Crop Yield
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center gap-2"
        >
          Start Optimization <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
}; 