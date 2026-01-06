import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Main Laboratory</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Medical Center Drive
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@healthcare.plus
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                24/7 Emergency Service
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Branch Locations</h3>
            <ul className="space-y-2">
              <li>New York Medical Center</li>
              <li>Los Angeles Health Hub</li>
              <li>Chicago Care Center</li>
              <li>Houston Health Institute</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/research" className="hover:text-blue-400 transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 cursor-pointer hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 cursor-pointer hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 cursor-pointer hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 cursor-pointer hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 HealthCare Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
