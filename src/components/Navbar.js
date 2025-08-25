// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faChevronDown,
//   faSearch,
//   faTimes,
//   faAngleRight,
//   faBars,
//   faXmark
// } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';
// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
//   const searchRef = useRef(null);
//   const inputRef = useRef(null);
//   const academicsDropdownRef = useRef(null);

//   // React Router hooks
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Check if we're on the home page
//   const isHomePage = location.pathname === '/';

//   // Common navigation function for both mobile and desktop
//   const handleNavigation = (path, sectionId) => {
//     // Close UI elements
//     setSearchQuery('');
//     setShowSearchResults(false);
//     setSearchFocused(false);
//     setMobileMenuOpen(false);
//     setAcademicsDropdownOpen(false);

//     if (path.startsWith('/#')) {
//       // For section navigation
//       if (!isHomePage) {
//         // If not on home page, navigate to home first
//         navigate('/', { replace: true });
//         // Wait for the page to load before scrolling
//         const scrollToSection = () => {
//           const sectionElement = document.querySelector(sectionId);
//           if (sectionElement) {
//             sectionElement.scrollIntoView({ behavior: 'smooth' });
//             return true;
//           }
//           return false;
//         };

//         // Try scrolling immediately
//         if (!scrollToSection()) {
//           // If section not found, try again after a short delay
//           const interval = setInterval(() => {
//             if (scrollToSection()) {
//               clearInterval(interval);
//             }
//           }, 100);

//           // Clear interval after 2 seconds if section still not found
//           setTimeout(() => clearInterval(interval), 2000);
//         }
//       } else {
//         // If already on home page, just scroll
//         const sectionElement = document.querySelector(sectionId);
//         if (sectionElement) {
//           sectionElement.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     } else {
//       // For page navigation
//       navigate(path, { replace: true });
//     }
//   };

//   // Handle scroll position when location changes
//   useEffect(() => {
//     // Only scroll to top if it's a new page (not a hash change)
//     if (!location.hash) {
//       document.documentElement.scrollTo({
//         top: 0,
//         behavior: 'instant'
//       });
//     } else {
//       // If there's a hash, scroll to the section
//       const sectionId = location.hash;
//       const sectionElement = document.querySelector(sectionId);
//       if (sectionElement) {
//         sectionElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location.pathname, location.hash]);

//   const sections = {
//     home: { id: '#home', label: 'Home', path: '/' },
//     about: { id: '#about', label: 'About', path: '/#about' },
//     clubs: { id: '#clubs', label: 'Student Clubs', path: '/#clubs' },
//     certifications: { id: '#certifications', label: 'Certifications', path: '/#certifications' },
//     chapters: { id: '#chapters', label: 'Student Chapters', path: '/#chapters' },
//     alumni: { id: '#alumni', label: 'Alumni', path: '/#alumni' },
//     gallery: { id: '#gallery', label: 'Gallery', path: '/#gallery' },
//     recruiters: { id: '#recruiters', label: 'Recruiters', path: '/#recruiters' },
//     testimonials: { id: '#testimonials', label: 'Testimonials', path: '/#testimonials' },
//     faculty: { id: '/faculty', label: 'Faculty & Staff', path: '/faculty' }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSearchResults(false);
//         setSearchFocused(false);
//       }
//       if (academicsDropdownRef.current && !academicsDropdownRef.current.contains(event.target)) {
//         setAcademicsDropdownOpen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     const query = searchQuery.toLowerCase().trim();

//     const filteredResults = Object.entries(sections)
//       .filter(([key, section]) =>
//         key.includes(query) ||
//         section.label.toLowerCase().includes(query)
//       )
//       .map(([key, section]) => ({
//         key,
//         ...section
//       }));

//     setSearchResults(filteredResults);
//     setShowSearchResults(true);
//   }, [searchQuery]);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (searchResults.length > 0) {
//       const firstResult = searchResults[0];
//       handleNavigation(firstResult.path, firstResult.id);
//     } else if (searchQuery.trim() !== '') {
//       alert(`No matching section found for: ${searchQuery}`);
//     }
//   };

//   // Mobile menu navigation handler
//   const handleMobileNavClick = (path, sectionId) => {
//     handleNavigation(path, sectionId);
//   };

//   // Mobile academics dropdown handler
//   const handleAcademicsClick = () => {
//     setAcademicsDropdownOpen(!academicsDropdownOpen);
//   };

//   const clearSearch = () => {
//     setSearchQuery('');
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   const focusSearch = () => {
//     setSearchFocused(true);
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 
//       ${scrolled ? 'py-2 shadow-lg' : 'py-3'} 
//       bg-white/95 backdrop-blur-sm text-gray-800`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-4">
//             <motion.img
//               src="/images/logo.webp"
//               alt="Department Logo"
//               className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'}`}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             />
//           </Link>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center space-x-4">
//             <div className="relative" ref={searchRef}>
//               <button
//                 onClick={() => setShowSearchResults(!showSearchResults)}
//                 className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
//                 aria-label="Search"
//               >
//                 <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
//               </button>

//               <AnimatePresence>
//                 {showSearchResults && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
//                   >
//                     <form onSubmit={handleSearch} className="p-3">
//                       <div className="relative">
//                         <input
//                           ref={inputRef}
//                           type="text"
//                           placeholder="Search sections..."
//                           value={searchQuery}
//                           onChange={(e) => setSearchQuery(e.target.value)}
//                           className="w-full px-4 py-2.5 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                           autoFocus
//                         />
//                         <FontAwesomeIcon
//                           icon={faSearch}
//                           className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400"
//                         />
//                         {searchQuery && (
//                           <button
//                             type="button"
//                             onClick={clearSearch}
//                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                           >
//                             <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
//                           </button>
//                         )}
//                       </div>
//                     </form>

//                     {searchResults.length > 0 && (
//                       <div className="max-h-60 overflow-y-auto border-t border-gray-100">
//                         {searchResults.map((result) => (
//                           <button
//                             key={result.key}
//                             type="button"
//                             onClick={() => handleNavigation(result.path, result.id)}
//                             className="w-full text-left px-4 py-3 hover:bg-indigo-50 flex items-center justify-between text-gray-700 text-sm transition-colors border-b border-gray-50 last:border-0"
//                           >
//                             <span>{result.label}</span>
//                             <FontAwesomeIcon icon={faAngleRight} className="h-3 w-3 text-indigo-500" />
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
//               aria-label="Menu"
//             >
//               <FontAwesomeIcon
//                 icon={mobileMenuOpen ? faXmark : faBars}
//                 className="h-6 w-6"
//               />
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-1">
//             <NavLink
//               to="/"
//               label="Home"
//               isActive={location.pathname === '/'}
//               onClick={() => handleNavigation('/', null)}
//             />

//             <NavLink
//               to="/#about"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavigation('/#about', '#about');
//               }}
//               label="About"
//               isActive={false}
//             />

//             <div className="relative group" ref={academicsDropdownRef}>
//               <button
//                 className="flex items-center px-4 py-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition-colors group"
//                 onClick={() => setAcademicsDropdownOpen(!academicsDropdownOpen)}
//               >
//                 <span>Academics</span>
//                 <FontAwesomeIcon
//                   icon={faChevronDown}
//                   className={`ml-1 h-3 w-3 transition-transform duration-300 ${academicsDropdownOpen ? 'rotate-180' : ''}`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {academicsDropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
//                   >
//                     <div className="py-2 rounded-md bg-white shadow-xs">
//                       <DropdownItem
//                         to="/#clubs"
//                         label="Student Clubs"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleNavigation('/#clubs', '#clubs');
//                         }}
//                       />
//                       <DropdownItem
//                         to="/#certifications"
//                         label="Certifications"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleNavigation('/#certifications', '#certifications');
//                         }}
//                       />
//                       <DropdownItem
//                         to="/#chapters"
//                         label="Student Chapters"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleNavigation('/#chapters', '#chapters');
//                         }}
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <NavLink
//               to="/#alumni"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavigation('/#alumni', '#alumni');
//               }}
//               label="Alumni"
//               isActive={false}
//             />

//             <NavLink
//               to="/#gallery"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavigation('/#gallery', '#gallery');
//               }}
//               label="Gallery"
//               isActive={false}
//             />

//             <NavLink
//               to="/#recruiters"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavigation('/#recruiters', '#recruiters');
//               }}
//               label="Recruiters"
//               isActive={false}
//             />

//             <NavLink
//               to="/projects"
//               label="Projects"
//               isActive={location.pathname === '/projects'}
//               onClick={() => handleNavigation('/projects', null)}
//             />

//             <NavLink
//               to="/faculty"
//               label="Faculty & Staff"
//               isActive={location.pathname === '/faculty'}
//               onClick={() => handleNavigation('/faculty', null)}
//             />

//            <SearchBar
//   searchQuery={searchQuery}
//   setSearchQuery={setSearchQuery}
//   searchResults={searchResults}
//   showSearchResults={showSearchResults}
//   setShowSearchResults={setShowSearchResults}
//   handleSearch={(e, path, id) => {
//     if (e) e.preventDefault();

//     if (path && id) {
//       handleNavigation(path, id);
//     } else if (searchResults.length > 0) {
//       const firstResult = searchResults[0];
//       handleNavigation(firstResult.path, firstResult.id);
//     } else if (searchQuery.trim() !== '') {
//       alert(`No matching section found for: ${searchQuery}`);
//     }
//   }}
//   clearSearch={() => {
//     setSearchQuery('');
//     inputRef.current?.focus();
//   }}
//   inputRef={inputRef}
//   searchRef={searchRef}
// />

//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lg:hidden overflow-hidden mt-4"
//             >
//               <div className="p-4 rounded-lg shadow-lg bg-white">
//                 <div className="space-y-2">
//                   <MobileNavLink
//                     to="/"
//                     label="Home"
//                     onClick={() => handleNavigation('/', null)}
//                   />

//                   <MobileNavLink
//                     to="/#about"
//                     label="About"
//                     onClick={() => handleNavigation('/#about', '#about')}
//                   />

//                   <div className="py-2">
//                     <div
//                       className="flex justify-between items-center px-3 py-2 rounded hover:bg-indigo-50 cursor-pointer"
//                       onClick={handleAcademicsClick}
//                     >
//                       <span className="text-gray-800 font-medium">Academics</span>
//                       <FontAwesomeIcon
//                         icon={faChevronDown}
//                         className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${academicsDropdownOpen ? 'rotate-180' : ''}`}
//                       />
//                     </div>
//                     <AnimatePresence>
//                       {academicsDropdownOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="pl-4 mt-1 space-y-1"
//                         >
//                           <MobileNavLink
//                             to="/#clubs"
//                             label="Student Clubs"
//                             onClick={() => handleNavigation('/#clubs', '#clubs')}
//                           />
//                           <MobileNavLink
//                             to="/#certifications"
//                             label="Certifications"
//                             onClick={() => handleNavigation('/#certifications', '#certifications')}
//                           />
//                           <MobileNavLink
//                             to="/#chapters"
//                             label="Student Chapters"
//                             onClick={() => handleNavigation('/#chapters', '#chapters')}
//                           />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   <MobileNavLink
//                     to="/#alumni"
//                     label="Alumni"
//                     onClick={() => handleNavigation('/#alumni', '#alumni')}
//                   />
//                   <MobileNavLink
//                     to="/#gallery"
//                     label="Gallery"
//                     onClick={() => handleNavigation('/#gallery', '#gallery')}
//                   />
//                   <MobileNavLink
//                     to="/#recruiters"
//                     label="Recruiters"
//                     onClick={() => handleNavigation('/#recruiters', '#recruiters')}
//                   />
//                   <MobileNavLink
//                     to="/projects"
//                     label="Projects"
//                     onClick={() => handleNavigation('/projects', null)}
//                   />
//                   <MobileNavLink
//                     to="/faculty"
//                     label="Faculty & Staff"
//                     onClick={() => handleNavigation('/faculty', null)}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// // Updated Desktop Navigation Link
// const NavLink = ({ to, label, onClick, isActive }) => {
//   const Component = onClick ? 'button' : Link;

//   return (
//     <Component
//       to={onClick ? undefined : to}
//       onClick={onClick}
//       className={`relative px-4 py-2 font-medium text-sm transition-colors group
//         ${isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
//     >
//       {label}
//       <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300
//         ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
//     </Component>
//   );
// };

// // Updated Dropdown Item
// const DropdownItem = ({ to, label, onClick }) => {
//   const Component = onClick ? 'button' : Link;

//   return (
//     <Component
//       to={onClick ? undefined : to}
//       onClick={onClick}
//       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:pl-6"
//     >
//       {label}
//     </Component>
//   );
// };

// // Updated Mobile Navigation Link
// const MobileNavLink = ({ to, label, onClick }) => {
//   const Component = onClick ? 'button' : Link;

//   return (
//     <Component
//       to={onClick ? undefined : to}
//       onClick={onClick}
//       className="block w-full text-left px-3 py-2 rounded text-gray-800 font-medium hover:bg-indigo-50 transition-colors"
//     >
//       {label}
//     </Component>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

// Example sections (replace with your actual)
const sections = {
    // home: { id: '#home', label: 'Home', path: '/' },
    about: { id: 'about', label: 'About', path: '/#about' },
  clubs: { id: 'clubs', label: 'Student Clubs', path: '/#clubs' },
  certifications: { id: 'certifications', label: 'Certifications', path: '/#certifications' },
  chapters: { id: 'chapters', label: 'Student Chapters', path: '/#chapters' },
  alumni: { id: 'alumni', label: 'Alumni', path: '/#alumni' },
  gallery: { id: 'gallery', label: 'Gallery', path: '/#gallery' },
  recruiters: { id: 'recruiters', label: 'Recruiters', path: '/#recruiters' },
  testimonials: { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' },
  projects: { id: 'projects', label: 'Projects', path: '/projects' },
  // faculty: { id: '/faculty', label: 'Faculty & Staff', path: '/faculty' }
};

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const searchResults = Object.values(sections).filter((s) =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Scroll Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Section Highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sections).forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavigation = (path, id) => {
    setMobileMenuOpen(false);
    setShowSearch(false);
    if (path.startsWith("/#")) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = path;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-black/30 backdrop-brightness-75"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/images/logo.webp"
            alt="Logo"
            className="h-12 lg:h-14"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2 ml-10">
          {Object.entries(sections).map(([key, s]) =>
            ["clubs", "certifications", "chapters"].includes(key) ? null : (
              <button
                key={s.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(s.path, s.id);
                }}
                className={`px-3 py-2 font-medium transition-colors relative
                  ${activeSection === s.id
                    ? "text-indigo-600"
                    : scrolled
                    ? "text-gray-800 hover:text-indigo-600"
                    : "text-white hover:text-indigo-400"}
                  after:content-[''] after:block after:h-[2px] after:bg-indigo-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300
                  ${activeSection === s.id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
              >
                {s.label}
              </button>
            )
          )}

          {/* Academics Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAcademicsDropdownOpen(true)}
            onMouseLeave={() => setAcademicsDropdownOpen(false)}
          >
            <button
              className={`flex items-center px-3 py-2 font-medium ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-indigo-600`}
            >
              Academics
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-1 h-3 w-3 transition-transform ${
                  academicsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {academicsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-3 w-56 bg-white shadow-lg rounded-lg overflow-hidden text-gray-800"
                >
                  {["clubs", "certifications", "chapters"].map((key) => (
                    <button
                      key={key}
                      onClick={() => handleNavigation(sections[key].path, sections[key].id)}
                      className="block w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm"
                    >
                      {sections[key].label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar */}
          <div className="relative ml-6">
            <div className="flex items-center bg-white text-black rounded-full px-4 py-1.5 shadow-md w-56">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent focus:outline-none text-sm w-full"
                onFocus={() => setShowSearch(true)}
              />
            </div>
            {showSearch && searchResults.length > 0 && (
              <div className="absolute top-12 left-0 w-56 bg-white shadow-lg rounded-lg z-50 text-black">
                {searchResults.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavigation(s.path, s.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-blue-400 text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white shadow-lg rounded-lg text-black"
          >
            <div className="p-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <div className="flex items-center bg-white text-black rounded-full px-4 py-1.5 shadow-md">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent focus:outline-none text-sm w-full"
                    onFocus={() => setShowSearch(true)}
                  />
                </div>
                {showSearch && searchResults.length > 0 && (
                  <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg z-50 text-black">
                    {searchResults.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleNavigation(s.path, s.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Nav Items */}
              {Object.entries(sections).map(([key, s]) =>
                ["clubs", "certifications", "chapters"].includes(key) ? null : (
                  <button
                    key={s.id}
                    onClick={() => handleNavigation(s.path, s.id)}
                    className={`block px-4 py-2 rounded-md ${
                      activeSection === s.id ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"
                    }`}
                  >
                    {s.label}
                  </button>
                )
              )}

              {/* Mobile Academics Dropdown */}
              <div className="border-t pt-2">
                <p className="px-4 py-2 font-semibold text-gray-700">Academics</p>
                {["clubs", "certifications", "chapters"].map((key) => (
                  <button
                    key={key}
                    onClick={() => handleNavigation(sections[key].path, sections[key].id)}
                    className="block px-6 py-2 hover:bg-gray-100 rounded-md"
                  >
                    {sections[key].label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
