import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { CropType } from '../types';

interface CropTypeSelectorProps {
  cropTypes: CropType[];
  selectedCropType: string;
  onSelect: (cropType: string) => void;
}

export const CropTypeSelector: React.FC<CropTypeSelectorProps> = ({
  cropTypes,
  selectedCropType,
  onSelect,
}) => {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Select Crop Type</h2>
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" />
        <select
          className="w-full p-3 pl-10 rounded-lg border-2 border-gray-200"
          value={selectedCropType}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">Select crop...</option>
          {cropTypes.map((crop) => (
            <option key={crop.id} value={crop.id}>
              {crop.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-3 text-gray-400" />
      </div>
    </motion.div>
  );
}; 