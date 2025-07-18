import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import NewsAnalyzer from './components/NewsAnalyzer';
import ResultsDisplay from './components/ResultsDisplay';
import FeaturesList from './components/FeaturesList';
import Footer from './components/Footer';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = async (text, url) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock analysis result
    const mockResult = {
      credibilityScore: Math.random() * 100,
      classification: Math.random() > 0.5 ? 'real' : 'fake',
      confidence: Math.random() * 100,
      factors: [
        { name: 'Source Credibility', score: Math.random() * 100, impact: 'positive' },
        { name: 'Language Analysis', score: Math.random() * 100, impact: 'neutral' },
        { name: 'Fact Verification', score: Math.random() * 100, impact: 'positive' },
        { name: 'Bias Detection', score: Math.random() * 100, impact: 'negative' },
        { name: 'Emotional Language', score: Math.random() * 100, impact: 'negative' }
      ],
      summary: 'This article has been analyzed using multiple factors including source credibility, language patterns, and fact-checking databases.',
      timestamp: new Date().toISOString()
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Fake News Detection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Analyze news articles and content using advanced AI to determine credibility and detect misinformation
            </p>
          </div>

          <NewsAnalyzer onAnalyze={handleAnalysis} isAnalyzing={isAnalyzing} />
          
          {(analysisResult || isAnalyzing) && (
            <ResultsDisplay result={analysisResult} isLoading={isAnalyzing} />
          )}
          
          <FeaturesList />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
