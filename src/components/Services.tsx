import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, BrainCircuit, Stethoscope, Microscope, FileHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We provide cutting-edge AI-powered diagnostics and patient care solutions.
          </p>
        </div>

        {/* AI-Powered Services */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <BrainCircuit className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brain Tumor Detection</h3>
            <p className="text-gray-600">AI-driven MRI and CT scan analysis for early and precise tumor diagnosis.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pancreatic Cancer Screening</h3>
            <p className="text-gray-600">Cutting-edge AI to detect pancreatic abnormalities with high accuracy.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <FileHeart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Treatment Plans</h3>
            <p className="text-gray-600">AI-assisted reports tailored for each patient's unique needs.</p>
          </motion.div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Stethoscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Medical Analysis</h3>
            <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
              <li>Deep learning algorithms for medical imaging</li>
              <li>Automated anomaly detection for quicker diagnosis</li>
              <li>Continuous AI model improvements</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <HeartPulse className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patient-Centric Approach</h3>
            <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
              <li>Remote consultations with specialists</li>
              <li>Free health checkups for underprivileged communities</li>
              <li>24/7 telemedicine support</li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/diagnose')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors mx-auto"
          >
            <span>Start Your Diagnosis</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
