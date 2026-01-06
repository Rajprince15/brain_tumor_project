import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Search, AlertCircle } from 'lucide-react';

function Learn() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Knowledge Center</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about various medical conditions, diagnostic procedures, and treatment options.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="block w-full pl-10 pr-14 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search medical topics..."
              />
              <button
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 px-4 flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-r-md"
              >
                Search
              </button>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brain Tumor Section */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold">Brain Tumors</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn about different types of brain tumors, their symptoms, and modern diagnostic approaches.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Types of Brain Tumors</li>
                <li>• Common Symptoms</li>
                <li>• Diagnostic Procedures</li>
                <li>• Treatment Options</li>
              </ul>
            </motion.div>

            {/* Pancreatic Cancer Section */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold">Pancreatic Cancer</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Understanding pancreatic cancer, risk factors, and early detection methods.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Risk Factors</li>
                <li>• Early Warning Signs</li>
                <li>• Screening Methods</li>
                <li>• Treatment Approaches</li>
              </ul>
            </motion.div>

            {/* Prevention Section */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold">Prevention</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Preventive measures and lifestyle changes to reduce health risks.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Healthy Lifestyle Tips</li>
                <li>• Regular Screenings</li>
                <li>• Risk Assessment</li>
                <li>• Family History Importance</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Learn;
