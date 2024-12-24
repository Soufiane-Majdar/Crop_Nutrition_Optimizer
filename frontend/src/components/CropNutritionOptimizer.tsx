import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { SoilTypeSelector } from './SoilTypeSelector';
import { CropTypeSelector } from './CropTypeSelector';
import { Results } from './Results';
import { useOptimizer } from '../contexts/OptimizerContext';
import { getSoilTypes, getCropTypes, getRecommendations, getYieldData } from '../services/api';

export const CropNutritionOptimizer: React.FC = () => {
  const {
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
  } = useOptimizer();

  const [soilTypes, setSoilTypes] = React.useState([]);
  const [cropTypes, setCropTypes] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [soilTypesResponse, cropTypesResponse] = await Promise.all([
          getSoilTypes(),
          getCropTypes(),
        ]);
        setSoilTypes(soilTypesResponse.data);
        setCropTypes(cropTypesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNext = async () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const [recommendationsResponse, yieldDataResponse] = await Promise.all([
          getRecommendations(formData),
          getYieldData(formData),
        ]);
        setRecommendations(recommendationsResponse.data);
        setYieldData(yieldDataResponse.data);
        setShowResults(true);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {!showResults && currentStep === 0 && <HeroSection onNext={handleNext} />}

      {!showResults && currentStep > 0 && (
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-600 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <SoilTypeSelector
                soilTypes={soilTypes}
                selectedSoilType={formData.soilType}
                onSelect={(soilType) => setFormData({ ...formData, soilType })}
              />
            )}

            {currentStep === 2 && (
              <CropTypeSelector
                cropTypes={cropTypes}
                selectedCropType={formData.cropType}
                onSelect={(cropType) => setFormData({ ...formData, cropType })}
              />
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {showResults && (
        <Results recommendations={recommendations} yieldData={yieldData} />
      )}

      {/* Footer */}
      <footer className="bg-gray-50 mt-auto py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">Contact</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Terms of Service</a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2023 Crop Nutrition Optimizer. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 