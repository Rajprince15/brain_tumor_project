import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Diagnose from './components/Diagnose';
import Contact from './components/Contact';
import Learn from './components/Learn';
import RateUs from './components/RateUs';
import Reports from './components/Reports';
import About from './components/About'; // Import About page
import Footer from './components/Footer';
import Services from './components/Services';
import Research from './components/Reasearch';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnose" element={<Diagnose />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/rate" element={<RateUs />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} /> {/* Added About route */}
            <Route path="/services" element={<Services />} /> {/* Added About route */}
            <Route path="/research" element={<Research />} /> {/* Added About route */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
