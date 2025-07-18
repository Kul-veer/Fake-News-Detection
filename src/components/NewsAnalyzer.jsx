import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Link, FileText, Loader2 } from 'lucide-react';

const NewsAnalyzer = ({ onAnalyze, isAnalyzing }) => {
  const [activeTab, setActiveTab] = useState('text');
  const [textInput, setTextInput] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'text' && textInput.trim()) {
      onAnalyze(textInput);
    } else if (activeTab === 'url' && urlInput.trim()) {
      onAnalyze('', urlInput);
    }
  };

  const isDisabled = isAnalyzing || (activeTab === 'text' ? !textInput.trim() : !urlInput.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Analyze News Content
        </h2>

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === 'text'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Text</span>
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === 'url'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Link className="h-4 w-4" />
            <span>URL</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {activeTab === 'text' ? (
          <div>
            <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
              Paste news article text
            </label>
            <textarea
              id="text-input"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Paste the news article content here..."
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              disabled={isAnalyzing}
            />
          </div>
        ) : (
          <div>
            <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
              Enter news article URL
            </label>
            <input
              id="url-input"
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/news-article"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isAnalyzing}
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: isDisabled ? 1 : 1.02 }}
          whileTap={{ scale: isDisabled ? 1 : 0.98 }}
          type="submit"
          disabled={isDisabled}
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              <span>Analyze Content</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default NewsAnalyzer;
