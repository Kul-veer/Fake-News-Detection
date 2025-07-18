import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Search, BarChart3, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze content patterns and linguistic markers'
  },
  {
    icon: Shield,
    title: 'Source Verification',
    description: 'Cross-reference with trusted news sources and fact-checking databases'
  },
  {
    icon: Search,
    title: 'Deep Content Analysis',
    description: 'Examine writing style, emotional language, and factual consistency'
  },
  {
    icon: BarChart3,
    title: 'Credibility Scoring',
    description: 'Comprehensive scoring system based on multiple reliability factors'
  },
  {
    icon: Globe,
    title: 'Real-time Processing',
    description: 'Instant analysis of news articles and social media content'
  },
  {
    icon: Zap,
    title: 'Fast & Accurate',
    description: 'Get results in seconds with high accuracy and detailed explanations'
  }
];

const FeaturesList = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our advanced AI system uses multiple techniques to analyze and verify news content
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesList;
