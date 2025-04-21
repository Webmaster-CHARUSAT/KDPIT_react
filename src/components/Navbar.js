import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faSearch,
  faTimes,
  faAngleRight,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const academicsDropdownRef = useRef(null);

  // React Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Common navigation function for both mobile and desktop
  const handleNavigation = (path, sectionId) => {
    // Close UI elements
    setSearchQuery('');
    setShowSearchResults(false);
    setSearchFocused(false);
    setMobileMenuOpen(false);
    setAcademicsDropdownOpen(false);

    if (path.startsWith('/#')) {
      // For section navigation
      if (!isHomePage) {
        // If not on home page, navigate to home first
        navigate('/', { replace: true });
        // Wait for the page to load before scrolling
        const scrollToSection = () => {
          const sectionElement = document.querySelector(sectionId);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            return true;
          }
          return false;
        };

        // Try scrolling immediately
        if (!scrollToSection()) {
          // If section not found, try again after a short delay
          const interval = setInterval(() => {
            if (scrollToSection()) {
              clearInterval(interval);
            }
          }, 100);

          // Clear interval after 2 seconds if section still not found
          setTimeout(() => clearInterval(interval), 2000);
        }
      } else {
        // If already on home page, just scroll
        const sectionElement = document.querySelector(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For page navigation
      navigate(path, { replace: true });
    }
  };

  // Handle scroll position when location changes
  useEffect(() => {
    // Only scroll to top if it's a new page (not a hash change)
    if (!location.hash) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    } else {
      // If there's a hash, scroll to the section
      const sectionId = location.hash;
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, location.hash]);

  const sections = {
    home: { id: '#home', label: 'Home', path: '/' },
    about: { id: '#about', label: 'About', path: '/#about' },
    clubs: { id: '#clubs', label: 'Student Clubs', path: '/#clubs' },
    certifications: { id: '#certifications', label: 'Certifications', path: '/#certifications' },
    chapters: { id: '#chapters', label: 'Student Chapters', path: '/#chapters' },
    alumni: { id: '#alumni', label: 'Alumni', path: '/#alumni' },
    gallery: { id: '#gallery', label: 'Gallery', path: '/#gallery' },
    recruiters: { id: '#recruiters', label: 'Recruiters', path: '/#recruiters' },
    testimonials: { id: '#testimonials', label: 'Testimonials', path: '/#testimonials' },
    faculty: { id: '/faculty', label: 'Faculty & Staff', path: '/faculty' }
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
      if (academicsDropdownRef.current && !academicsDropdownRef.current.contains(event.target)) {
        setAcademicsDropdownOpen(false);
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
      handleNavigation(firstResult.path, firstResult.id);
    } else if (searchQuery.trim() !== '') {
      alert(`No matching section found for: ${searchQuery}`);
    }
  };

  // Mobile menu navigation handler
  const handleMobileNavClick = (path, sectionId) => {
    handleNavigation(path, sectionId);
  };

  // Mobile academics dropdown handler
  const handleAcademicsClick = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <motion.img
              src="/images/logo.webp"
              alt="Department Logo"
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
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
                            onClick={() => handleNavigation(result.path, result.id)}
                            className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-center justify-between text-gray-700 text-sm transition-colors border-b border-gray-50 last:border-0"
                          >
                            <span>{result.label}</span>
                            <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3 text-indigo-500" />
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <FontAwesomeIcon
                icon={mobileMenuOpen ? faXmark : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              label="Home"
              isActive={location.pathname === '/'}
              onClick={() => handleNavigation('/', null)}
            />

            <NavLink
              to="/#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#about', '#about');
              }}
              label="About"
              isActive={false}
            />

            <div className="relative group" ref={academicsDropdownRef}>
              <button
                className="flex items-center px-4 py-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition-colors group"
                onClick={() => setAcademicsDropdownOpen(!academicsDropdownOpen)}
              >
                <span>Academics</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-1 h-3 w-3 transition-transform duration-300 ${academicsDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {academicsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-2 rounded-md bg-white shadow-xs">
                      <DropdownItem
                        to="/#clubs"
                        label="Student Clubs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation('/#clubs', '#clubs');
                        }}
                      />
                      <DropdownItem
                        to="/#certifications"
                        label="Certifications"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation('/#certifications', '#certifications');
                        }}
                      />
                      <DropdownItem
                        to="/#chapters"
                        label="Student Chapters"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation('/#chapters', '#chapters');
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/#alumni"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#alumni', '#alumni');
              }}
              label="Alumni"
              isActive={false}
            />

            <NavLink
              to="/#gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#gallery', '#gallery');
              }}
              label="Gallery"
              isActive={false}
            />

            <NavLink
              to="/#recruiters"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/#recruiters', '#recruiters');
              }}
              label="Recruiters"
              isActive={false}
            />

            <NavLink
              to="/projects"
              label="Projects"
              isActive={location.pathname === '/projects'}
              onClick={() => handleNavigation('/projects', null)}
            />

            <NavLink
              to="/faculty"
              label="Faculty & Staff"
              isActive={location.pathname === '/faculty'}
              onClick={() => handleNavigation('/faculty', null)}
            />

            <div className="relative" ref={searchRef}>
              <div
                className={`flex items-center transition-all duration-300 rounded-full overflow-hidden border ${searchFocused
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
                            onClick={() => handleNavigation(result.path, result.id)}
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
                <div className="space-y-2">
                  <MobileNavLink
                    to="/"
                    label="Home"
                    onClick={() => handleNavigation('/', null)}
                  />

                  <MobileNavLink
                    to="/#about"
                    label="About"
                    onClick={() => handleNavigation('/#about', '#about')}
                  />

                  <div className="py-2">
                    <div
                      className="flex justify-between items-center px-3 py-2 rounded hover:bg-indigo-50 cursor-pointer"
                      onClick={handleAcademicsClick}
                    >
                      <span className="text-gray-800 font-medium">Academics</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${academicsDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    <AnimatePresence>
                      {academicsDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-1 space-y-1"
                        >
                          <MobileNavLink
                            to="/#clubs"
                            label="Student Clubs"
                            onClick={() => handleNavigation('/#clubs', '#clubs')}
                          />
                          <MobileNavLink
                            to="/#certifications"
                            label="Certifications"
                            onClick={() => handleNavigation('/#certifications', '#certifications')}
                          />
                          <MobileNavLink
                            to="/#chapters"
                            label="Student Chapters"
                            onClick={() => handleNavigation('/#chapters', '#chapters')}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <MobileNavLink
                    to="/#alumni"
                    label="Alumni"
                    onClick={() => handleNavigation('/#alumni', '#alumni')}
                  />
                  <MobileNavLink
                    to="/#gallery"
                    label="Gallery"
                    onClick={() => handleNavigation('/#gallery', '#gallery')}
                  />
                  <MobileNavLink
                    to="/#recruiters"
                    label="Recruiters"
                    onClick={() => handleNavigation('/#recruiters', '#recruiters')}
                  />
                  <MobileNavLink
                    to="/projects"
                    label="Projects"
                    onClick={() => handleNavigation('/projects', null)}
                  />
                  <MobileNavLink
                    to="/faculty"
                    label="Faculty & Staff"
                    onClick={() => handleNavigation('/faculty', null)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Updated Desktop Navigation Link
const NavLink = ({ to, label, onClick, isActive }) => {
  const Component = onClick ? 'button' : Link;

  return (
    <Component
      to={onClick ? undefined : to}
      onClick={onClick}
      className={`relative px-4 py-2 font-medium text-sm transition-colors group
        ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Component>
  );
};

// Updated Dropdown Item
const DropdownItem = ({ to, label, onClick }) => {
  const Component = onClick ? 'button' : Link;

  return (
    <Component
      to={onClick ? undefined : to}
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:pl-6"
    >
      {label}
    </Component>
  );
};

// Updated Mobile Navigation Link
const MobileNavLink = ({ to, label, onClick }) => {
  const Component = onClick ? 'button' : Link;

  return (
    <Component
      to={onClick ? undefined : to}
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded text-gray-800 font-medium hover:bg-indigo-50 transition-colors"
    >
      {label}
    </Component>
  );
};

export default NavBar;