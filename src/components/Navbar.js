import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faSearch, 
  faTimes,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const sections = {
    home: { id: '#home', label: 'Home' },
    about: { id: '#about', label: 'About' },
    clubs: { id: '#clubs', label: 'Student Clubs' },
    certifications: { id: '#certifications', label: 'Certifications' },
    chapters: { id: '#chapters', label: 'Student Chapters' },
    alumni: { id: '#alumni', label: 'Alumni' },
    gallery: { id: '#gallery', label: 'Gallery' },
    recruiters: { id: '#recruiters', label: 'Recruiters' },
    testimonials: { id: '#testimonials', label: 'Testimonials' },
    contact: { id: '#contact', label: 'Contact Us' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
        setSearchFocused(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    const filteredResults = Object.entries(sections)
      .filter(([key, section]) => 
        key.includes(query) || 
        section.label.toLowerCase().includes(query)
      )
      .map(([key, section]) => ({
        key,
        ...section
      }));

    setSearchResults(filteredResults);
    setShowSearchResults(true);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      navigateToSection(firstResult.id);
    } else if (searchQuery.trim() !== '') {
      alert(`No matching section found for: ${searchQuery}`);
    }
  };

  const navigateToSection = (sectionId) => {
    const sectionElement = document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setSearchQuery('');
      setShowSearchResults(false);
      setSearchFocused(false);
      setMobileMenuOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const focusSearch = () => {
    setSearchFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'py-2 shadow-lg' : 'py-3'} 
      bg-white/95 backdrop-blur-sm text-gray-800`}
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
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <div className="relative mr-2" ref={searchRef}>
              <button
                onClick={() => setShowSearchResults(!showSearchResults)}
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
              </button>
              
              <AnimatePresence>
                {showSearchResults && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <form onSubmit={handleSearch} className="p-3">
                      <div className="relative">
                        <input 
                          ref={inputRef}
                          type="text"
                          placeholder="Search sections..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-2.5 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          autoFocus
                        />
                        <FontAwesomeIcon 
                          icon={faSearch} 
                          className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        {searchQuery && (
                          <button 
                            type="button" 
                            onClick={clearSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </form>
                    
                    {searchResults.length > 0 && (
                      <div className="max-h-60 overflow-y-auto border-t border-gray-100">
                        {searchResults.map((result) => (
                          <button
                            key={result.key}
                            type="button"
                            onClick={() => navigateToSection(result.id)}
                            className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-center justify-between text-gray-700 text-sm transition-colors border-b border-gray-50 last:border-0"
                          >
                            <span>{result.label}</span>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3 text-indigo-500" />
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery.trim() !== '' && searchResults.length === 0 && (
                      <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-100">
                        No matching sections found
                      </div>
                    )}
                    
                    {searchQuery.trim() === '' && (
                      <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-100">
                        Type to search for sections
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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

            {/* Enhanced Search Bar */}
            <div className="relative" ref={searchRef}>
              <div 
                className={`flex items-center transition-all duration-300 rounded-full overflow-hidden border ${
                  searchFocused 
                    ? 'bg-white border-indigo-500 shadow-md w-56' 
                    : 'bg-gray-100 border-transparent w-40 hover:bg-gray-200'
                }`}
              >
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className={`${searchFocused ? 'text-indigo-500' : 'text-gray-500'} ml-3 transition-colors`}
                />
                <input 
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    setSearchFocused(true);
                    setShowSearchResults(true);
                  }}
                  className={`w-full px-3 py-2 text-sm bg-transparent border-none focus:outline-none`}
                />
                {searchQuery && searchFocused && (
                  <button 
                    type="button" 
                    onClick={clearSearch}
                    className="px-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              
              <AnimatePresence>
                {showSearchResults && (searchResults.length > 0 || searchQuery.trim() !== '') && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    {searchResults.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto py-2">
                        {searchResults.map((result) => (
                          <button
                            key={result.key}
                            type="button"
                            onClick={() => navigateToSection(result.id)}
                            className="w-full text-left px-4 py-2.5 hover:bg-indigo-50 flex items-center justify-between group"
                          >
                            <span className="text-gray-700 text-sm group-hover:text-indigo-600 transition-colors">{result.label}</span>
                            <FontAwesomeIcon 
                              icon={faAngleRight} 
                              className="h-3 w-3 text-gray-400 group-hover:text-indigo-500 transition-colors transform group-hover:translate-x-1 duration-200" 
                            />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No matching sections found
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="p-4 rounded-lg shadow-lg bg-white">
                {/* Mobile Search Bar */}
                <div className="mb-4">
                  <div 
                    onClick={focusSearch}
                    className="flex items-center bg-gray-100 rounded-lg border border-gray-300 overflow-hidden cursor-text"
                  >
                    <FontAwesomeIcon 
                      icon={faSearch} 
                      className="text-gray-500 ml-3"
                    />
                    <input 
                      type="text"
                      placeholder="Search sections..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSearchResults(true)}
                      className="w-full px-3 py-2.5 text-sm bg-transparent border-none focus:outline-none"
                    />
                    {searchQuery && (
                      <button 
                        type="button" 
                        onClick={clearSearch}
                        className="px-3 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Search Results */}
                  <AnimatePresence>
                    {showSearchResults && searchResults.length > 0 && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                      >
                        {searchResults.map((result) => (
                          <button
                            key={result.key}
                            type="button"
                            onClick={() => navigateToSection(result.id)}
                            className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-center justify-between text-gray-700 text-sm transition-colors border-b border-gray-100 last:border-0"
                          >
                            <span>{result.label}</span>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3 text-indigo-500" />
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <MobileNavLink href="#home" label="Home" onClick={() => navigateToSection('#home')} />
                <MobileNavLink href="#about" label="About" onClick={() => navigateToSection('#about')} />
                
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
                    <MobileNavLink 
                      href="#clubs" 
                      label="Student Clubs" 
                      onClick={() => navigateToSection('#clubs')}
                    />
                    <MobileNavLink 
                      href="#certifications" 
                      label="Certifications" 
                      onClick={() => navigateToSection('#certifications')}
                    />
                    <MobileNavLink 
                      href="#chapters" 
                      label="Student Chapters" 
                      onClick={() => navigateToSection('#chapters')}
                    />
                  </div>
                </div>
                
                <MobileNavLink 
                  href="#alumni" 
                  label="Alumni" 
                  onClick={() => navigateToSection('#alumni')}
                />
                <MobileNavLink 
                  href="#gallery" 
                  label="Gallery" 
                  onClick={() => navigateToSection('#gallery')}
                />
                <MobileNavLink 
                  href="#recruiters" 
                  label="Recruiters" 
                  onClick={() => navigateToSection('#recruiters')}
                />
                
                <div className="mt-4 flex flex-col space-y-3">
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection('#contact');
                    }}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-center text-sm transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
const MobileNavLink = ({ href, label, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    className="block px-3 py-2 rounded text-gray-800 font-medium hover:bg-indigo-50 transition-colors"
  >
    {label}
  </a>
);

export default NavBar;