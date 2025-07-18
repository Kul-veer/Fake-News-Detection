import React from 'react';
import { Shield, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TruthGuard</h1>
              <p className="text-sm text-gray-500">AI-Powered Fact Checker</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              API
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
