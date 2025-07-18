import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, TrendingUp, TrendingDown, Minus, Loader2 } from 'lucide-react';

const ResultsDisplay = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8"
      >
        <div className="flex items-center justify-center space-x-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Analyzing Content</h3>
            <p className="text-gray-600">Please wait while we process your request...</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!result) return null;

  const getCredibilityColor = (score) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCredibilityBg = (score) => {
    if (score >= 70) return 'bg-green-100';
    if (score >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getClassificationIcon = (classification) => {
    return classification === 'real' ? (
      <CheckCircle className="h-8 w-8 text-green-600" />
    ) : (
      <XCircle className="h-8 w-8 text-red-600" />
    );
  };

  const getFactorIcon = (impact) => {
    switch (impact) {
      case 'positive':
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'negative':
        return <TrendingDown className="h-5 w-5 text-red-600" />;
      default:
        return <Minus className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Overall Score */}
        <div className="space-y-6">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${getCredibilityBg(result.credibilityScore)} mb-4`}>
              <span className={`text-2xl font-bold ${getCredibilityColor(result.credibilityScore)}`}>
                {Math.round(result.credibilityScore)}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Credibility Score</h3>
            <p className="text-gray-600">
              {result.credibilityScore >= 70 ? 'Highly Credible' :
                result.credibilityScore >= 40 ? 'Moderately Credible' : 'Low Credibility'}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
            {getClassificationIcon(result.classification)}
            <div>
              <p className="font-semibold text-gray-900">
                Classification: {result.classification === 'real' ? 'Likely Real' : 'Likely Fake'}
              </p>
              <p className="text-sm text-gray-600">
                Confidence: {Math.round(result.confidence)}%
              </p>
            </div>
          </div>
        </div>

        {/* Analysis Factors */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Analysis Factors</h4>
          <div className="space-y-3">
            {result.factors.map((factor, index) => (
              <motion.div
                key={factor.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {getFactorIcon(factor.impact)}
                  <span className="font-medium text-gray-900">{factor.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        factor.impact === 'positive' ? 'bg-green-500' :
                          factor.impact === 'negative' ? 'bg-red-500' : 'bg-gray-500'
                      }`}
                      style={{ width: `${factor.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-8">
                    {Math.round(factor.score)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Analysis Summary</h4>
            <p className="text-blue-800 text-sm">{result.summary}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Analysis completed at {new Date(result.timestamp).toLocaleString()}
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;
