import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, HelpingHand, Microscope, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160501-bbe57469278b?ixid=MnwxMjA3fDB8MHxwaG90by1wYXJ0fHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80")'
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-blue-900/50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-center max-w-3xl px-6"
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">About HealthCare Plus</h1>
          <p className="text-xl mb-8">
            Dedicated to providing world-class healthcare with cutting-edge technology and compassion.
          </p>
        </motion.div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600">
              HealthCare Plus is a leader in **innovative diagnostics**, offering **state-of-the-art medical imaging** and **AI-driven healthcare solutions**. Our mission is to revolutionize early disease detection, ensuring **timely and accurate treatments** for all.
            </p>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Our Mission */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our goal is to enhance medical accessibility and improve early **brain tumor and pancreatic cancer detection** through AI-powered diagnostics. We believe in **preventive care** that saves lives.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where **AI and medical expertise** work together seamlessly, providing **affordable, accessible, and accurate healthcare** solutions globally.
              </p>
            </motion.div>
          </div>

          {/* Our Services & Commitments */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Services */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <Microscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Diagnosis</h3>
              <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
                <li>Early detection of **Brain Tumors & Pancreatic Cancer**</li>
                <li>AI-assisted **medical imaging** for fast & accurate results</li>
                <li>Personalized **treatment plans** based on AI analytics</li>
                <li>Collaboration with top medical professionals</li>
              </ul>
            </motion.div>

            {/* Humanity & Help */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <HelpingHand className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Commitment to Humanity</h3>
              <ul className="list-disc text-gray-600 text-left mx-auto max-w-sm">
                <li>Free **health checkups** for underprivileged communities</li>
                <li>Global **medical awareness programs** & disease prevention</li>
                <li>24/7 **emergency healthcare support**</li>
                <li>Medical outreach in **rural and remote areas**</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
