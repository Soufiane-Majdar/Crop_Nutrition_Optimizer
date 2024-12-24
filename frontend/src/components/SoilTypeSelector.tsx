import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { SoilType } from '../types';

interface SoilTypeSelectorProps {
  soilTypes: SoilType[];
  selectedSoilType: string;
  onSelect: (soilType: string) => void;
}

export const SoilTypeSelector: React.FC<SoilTypeSelectorProps> = ({
  soilTypes,
  selectedSoilType,
  onSelect,
}) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Select Soil Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {soilTypes.map((soil) => (
          <button
            key={soil.id}
            onClick={() => onSelect(soil.id)}
            className={`p-4 rounded-lg border-2 ${
              selectedSoilType === soil.id
                ? "border-green-600 bg-green-50"
                : "border-gray-200"
            }`}
          >
            <Leaf className="mx-auto mb-2" />
            <span>{soil.name}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}; 