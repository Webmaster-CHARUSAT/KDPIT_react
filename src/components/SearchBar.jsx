// components/SearchBar.jsx
import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchResults,
  showSearchResults,
  setShowSearchResults,
  handleSearch,
  clearSearch,
  inputRef,
  searchRef
}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef, setShowSearchResults]);

  return (
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
                  className="w-full px-6 py-2.5 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                )}
              </div>
            </form>
            {searchResults.length > 0 && (
              <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                {searchResults.map((result) => (
                  <li key={result.key}>
                    <button
                      onClick={() => {
                        handleSearch(null, result.path, result.id);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {result.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
