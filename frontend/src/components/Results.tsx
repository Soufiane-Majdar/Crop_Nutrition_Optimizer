import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Download, MessageCircle } from 'lucide-react';
import { Recommendation, YieldData, CropType, SoilType } from '../types';
import { PDFDownloadButton } from './PDFGenerator';

interface ResultsProps extends React.PropsWithChildren {
  recommendations: Recommendation[];
  yieldData: YieldData | null;
  soilType: string;
  cropType: string;
  cropTypes: CropType[];
  soilTypes: SoilType[];
}

export const Results: React.FC<ResultsProps> = ({ recommendations, yieldData, soilType, cropType, cropTypes, soilTypes }) => {
  const hasRecommendations = recommendations && recommendations.length > 0;
  const hasYieldData = yieldData && (yieldData.current || yieldData.potential);

  const getCropTypeName = (id: string) => {
    const crop = cropTypes.find(c => c.id.toString() === id);
    return crop ? crop.name : id;
  };

  const getSoilTypeName = (id: string) => {
    const soil = soilTypes.find(s => s.id === id);
    return soil ? soil.name : id;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-8">Your Optimization Results</h2>

      {/* Soil and Crop Information */}
      <div className="bg-green-50 p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Selected Parameters</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <span className="font-medium text-green-700">Soil Type:</span>
            <span className="ml-2">{getSoilTypeName(soilType)}</span>
          </div>
          <div>
            <span className="font-medium text-green-700">Crop Type:</span>
            <span className="ml-2">{getCropTypeName(cropType)}</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {hasRecommendations ? (
          recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold mb-2">{rec.product}</h3>
              <p className="text-gray-600 mb-4">{rec.description}</p>
              <div className="text-green-600 font-medium">{rec.dosage}</div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No recommendations available for this combination.
          </div>
        )}
      </div>

      {/* Yield Comparison */}
      {hasYieldData && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="font-semibold mb-4">Yield Comparison</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Current Yield</span>
                <span>{yieldData.current}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${yieldData.current}%` }}
                  className="h-full bg-yellow-500 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Potential Yield</span>
                <span>{yieldData.potential}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${yieldData.potential}%` }}
                  className="h-full bg-green-600 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer">
            <Download size={20} />
            <PDFDownloadButton
              recommendations={recommendations}
              yieldData={yieldData}
              soilType={soilType}
              cropType={cropType}
              cropTypes={cropTypes}
              soilTypes={soilTypes}
            />
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-full flex items-center gap-2"
        >
          <MessageCircle size={20} /> Consult Expert
        </motion.button>
      </div>
    </motion.div>
  );
}; 