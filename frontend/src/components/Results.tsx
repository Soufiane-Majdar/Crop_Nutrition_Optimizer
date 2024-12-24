import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Download, MessageCircle } from 'lucide-react';
import { Recommendation, YieldData } from '../types';

interface ResultsProps {
  recommendations: Recommendation[];
  yieldData: YieldData | null;
}

export const Results: React.FC<ResultsProps> = ({ recommendations, yieldData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-8">Your Optimization Results</h2>

      {/* Recommendations */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {recommendations.map((rec, index) => (
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
        ))}
      </div>

      {/* Yield Comparison */}
      {yieldData && (
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2"
        >
          <Download size={20} /> Save Recommendations
        </motion.button>
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