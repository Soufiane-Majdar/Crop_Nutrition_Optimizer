import React, { createContext, useContext, useState } from 'react';
import { FormData, SoilType, CropType, Recommendation, YieldData } from '../types';

interface OptimizerContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
  recommendations: Recommendation[];
  setRecommendations: (recommendations: Recommendation[]) => void;
  yieldData: YieldData | null;
  setYieldData: (data: YieldData | null) => void;
}

const OptimizerContext = createContext<OptimizerContextType | undefined>(undefined);

export const OptimizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    soilType: '',
    cropType: '',
    targetYield: '',
    unit: 'tons/acre',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [yieldData, setYieldData] = useState<YieldData | null>(null);

  return (
    <OptimizerContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        showResults,
        setShowResults,
        recommendations,
        setRecommendations,
        yieldData,
        setYieldData,
      }}
    >
      {children}
    </OptimizerContext.Provider>
  );
};

export const useOptimizer = () => {
  const context = useContext(OptimizerContext);
  if (context === undefined) {
    throw new Error('useOptimizer must be used within an OptimizerProvider');
  }
  return context;
}; 