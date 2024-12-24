import React, { createContext, useContext, useState } from 'react';
import { FormData, Recommendation, YieldData } from '../types';

interface OptimizerContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  showResults: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  recommendations: Recommendation[];
  setRecommendations: React.Dispatch<React.SetStateAction<Recommendation[]>>;
  yieldData: YieldData | null;
  setYieldData: React.Dispatch<React.SetStateAction<YieldData | null>>;
}

const OptimizerContext = createContext<OptimizerContextType | undefined>(undefined);

export const OptimizerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    soilType: '',
    cropType: ''
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