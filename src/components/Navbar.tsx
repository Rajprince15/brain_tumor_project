import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, File as FileReport, Home, Phone, Star, BookOpen, LogIn, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-400" />
            <span className="text-2xl font-bold">HealthCare Plus</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link to="/learn" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            
            <Link to="/diagnose" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Brain className="h-5 w-5" />
              <span>Diagnose</span>
            </Link>
            
            <Link to="/reports" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <FileReport className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            
            <Link to="/contact" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            
            <Link to="/rate" className="nav-link flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Star className="h-5 w-5" />
              <span>Rate Us</span>
            </Link>
          </div>
          
          
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;