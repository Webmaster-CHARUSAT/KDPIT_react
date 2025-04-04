import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'py-2 shadow-lg' : 'py-3'} 
      bg-white/95 text-gray-800 ${scrolled ? 'bg-white/95' : ''}`}
    >
      <div className="container mx-auto px-2 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <motion.img
              src="/images/logo.webp"
              alt="Department Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden sm:block"
            >
              {/* Add your department name or text here if needed */}
            </motion.div>
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center px-3 py-2 rounded text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition-colors group">
                <span>Academics</span>
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="py-2 rounded-md bg-white shadow-xs">
                  <DropdownItem href="#clubs" label="Student Clubs" />
                  <DropdownItem href="#certifications" label="Certifications" />
                  <DropdownItem href="#chapters" label="Student Chapters" />
                </div>
              </div>
            </div>
            
            <NavLink href="#alumni" label="Alumni" />
            <NavLink href="#gallery" label="Gallery" />
            <NavLink href="#recruiters" label="Recruiters" />
            
            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-white">
            <MobileNavLink href="#home" label="Home" />
            <MobileNavLink href="#about" label="About" />
            
            {/* Mobile Dropdown */}
            <div className="py-2">
              <div 
                className="flex justify-between items-center px-3 py-2 rounded hover:bg-indigo-50 cursor-pointer"
                onClick={() => document.getElementById('mobile-dropdown').classList.toggle('hidden')}
              >
                <span className="text-gray-800 font-medium">Academics</span>
                <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3 text-gray-500" />
              </div>
              <div id="mobile-dropdown" className="hidden pl-4 mt-1">
                <MobileNavLink href="#clubs" label="Student Clubs" />
                <MobileNavLink href="#certifications" label="Certifications" />
                <MobileNavLink href="#chapters" label="Student Chapters" />
              </div>
            </div>
            
            <MobileNavLink href="#alumni" label="Alumni" />
            <MobileNavLink href="#gallery" label="Gallery" />
            <MobileNavLink href="#recruiters" label="Recruiters" />
            
            <div className="mt-4 flex flex-col space-y-3">
              <a 
                href="#contact" 
                className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-center text-sm transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="relative px-4 py-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition-colors group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
  </a>
);

// Dropdown Item
const DropdownItem = ({ href, label }) => (
  <a 
    href={href} 
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:pl-6"
  >
    {label}
  </a>
);

// Mobile Navigation Link
const MobileNavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="block px-3 py-2 rounded text-gray-800 font-medium hover:bg-indigo-50 transition-colors"
  >
    {label}
  </a>
);

export default NavBar;