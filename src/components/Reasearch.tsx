import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Brain, FlaskConical, BarChart4, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Research</h2>
          <p className="text-xl text-gray-600">
            Driving innovation in AI-driven healthcare and advanced disease detection.
          </p>
        </div>

        {/* AI Research Fields */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI in Neurology</h3>
            <p className="text-gray-600">Using deep learning for brain tumor detection and neurological disorders.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cancer Detection</h3>
            <p className="text-gray-600">AI-based screening for pancreatic and other aggressive cancers.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <FlaskConical className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Genomic Research</h3>
            <p className="text-gray-600">Exploring genetic patterns and AI-assisted drug discovery.</p>
          </motion.div>
        </div>

        {/* Breakthrough Technologies */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <BarChart4 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Predictive Healthcare</h3>
            <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
              <li>AI-powered early disease prediction models</li>
              <li>Risk assessment for chronic illnesses</li>
              <li>Real-time health monitoring</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI & Medical Ethics</h3>
            <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
              <li>Ensuring responsible AI deployment in healthcare</li>
              <li>Data privacy and security in medical AI</li>
              <li>Ethical challenges in AI-driven diagnostics</li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/learn')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors mx-auto"
          >
            <span>Explore More Research</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Research;
