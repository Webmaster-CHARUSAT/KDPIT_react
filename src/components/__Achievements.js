import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import achievementsData from "../data/achievements.json";

const AchievementsSection = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupImage, setPopupImage] = useState(null);

  // ------------- Achievement Section to showcase students and faculties achievements


  // Determine source arrays and apply search filtering
  const studentsAll = achievementsData.students || [];
  const facultyAll = achievementsData.faculty || [];

  const studentsFiltered = studentsAll.filter((achievement) => {
    if (!searchTerm) return true;
    return achievement.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const facultyFiltered = facultyAll.filter((achievement) => {
    if (!searchTerm) return true;
    return achievement.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let filteredAchievements = [];
  if (filter === "student") {
    filteredAchievements = studentsFiltered;
  } else if (filter === "faculty") {
    filteredAchievements = facultyFiltered;
  } else {
    // For 'all' — interleave students and faculty so the grid shows variety (1 student, 1 faculty...)
    const maxLen = Math.max(studentsFiltered.length, facultyFiltered.length);
    const combined = [];
    for (let i = 0; i < maxLen; i++) {
      if (i < studentsFiltered.length) combined.push(studentsFiltered[i]);
      if (i < facultyFiltered.length) combined.push(facultyFiltered[i]);
    }
    filteredAchievements = combined;
  }

  // Visible achievements based on current count
  const visibleAchievements = filteredAchievements.slice(0, visibleCount);

  // Handle "View More" button click
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  // Handle image click to show popup
  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  // Handle closing the popup
  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section
      id="achievements"
      className="relative py-20 overflow-hidden z-10"
      style={{ 
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
        position: 'relative'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute -right-20 bottom-10 w-56 h-56 bg-gradient-to-br from-pink-200/30 to-yellow-200/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="container mx-auto px-4 z-20 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Achievements
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full shadow-lg"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg font-medium"
          >
            Celebrating excellence and innovation in our academic community
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 shadow-md hover:shadow-lg"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("student")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "student"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 shadow-md hover:shadow-lg"
              }`}
            >
              Student Achievements
            </button>
            <button
              onClick={() => setFilter("faculty")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === "faculty"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 shadow-md hover:shadow-lg"
              }`}
            >
              Faculty Achievements
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 pr-12 rounded-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg text-gray-700 placeholder-gray-500"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500 border border-gray-100"
              onClick={() => handleImageClick(achievement.image)}
            >
              {/* Achievement Type Badge */}
              <div className="absolute top-4 right-4 z-20">
                {facultyAll.some(f => f.id === achievement.id) ? (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Faculty
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Student
                  </span>
                )}
              </div>

              {/* Card Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {achievement.title}
                    </h3>
                    <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {facultyAll.some(f => f.id === achievement.id) ? 'Faculty Achievement' : 'Student Achievement'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer - Always visible */}
              <div className="p-6 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
                <h4 className="text-gray-800 font-semibold text-base line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {facultyAll.some(f => f.id === achievement.id) ? 'Faculty' : 'Student'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredAchievements.length && (
          <div className="text-center mt-16 z-20 relative">
            <motion.button
              onClick={handleViewMore}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:from-indigo-700 hover:to-purple-700"
            >
              View More Achievements
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Image Popup */}
      {popupImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl p-4 max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center z-10 transition-colors duration-200 shadow-lg"
            >
              <FontAwesomeIcon icon={faTimesCircle} className="text-lg" />
            </button>
            <div className="flex items-center justify-center p-4">
              <img
                src={popupImage}
                alt="Achievement"
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AchievementsSection;
