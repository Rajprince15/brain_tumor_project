import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate hook

function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
            <p className="text-xl mb-8">
              Advanced medical diagnostics powered by AI technology. Early detection saves lives.
              Trust our expertise in brain tumor and pancreatic cancer detection.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/diagnose')}  // ✅ Navigate to Diagnose page
              className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Leading the way in medical innovation and patient care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-50 rounded-xl text-center"
            >
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Diagnostics</h3>
              <p className="text-gray-600">State-of-the-art AI-powered diagnostic tools for accurate results</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-50 rounded-xl text-center"
            >
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Results</h3>
              <p className="text-gray-600">High accuracy rates with verified medical professionals</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-50 rounded-xl text-center"
            >
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Fast and reliable results when you need them most</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;