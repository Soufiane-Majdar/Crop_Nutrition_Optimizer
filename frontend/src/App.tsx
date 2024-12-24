import React from 'react';
import { OptimizerProvider } from './contexts/OptimizerContext';
import { CropNutritionOptimizer } from './components/CropNutritionOptimizer';

function App() {
  return (
    <OptimizerProvider>
      <CropNutritionOptimizer />
    </OptimizerProvider>
  );
}

export default App; 