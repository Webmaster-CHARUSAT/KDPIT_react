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
  className="relative py-20  overflow-hidden z-10" style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="container mx-auto px-4 z-20 relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence and innovation in our academic community
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("student")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "student"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              Student Achievements
            </button>
            <button
              onClick={() => setFilter("faculty")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "faculty"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              Faculty Achievements
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-100 hover:shadow-xl"
              onClick={() => handleImageClick(achievement.image)}
            >
              {/* Card Image */}
              <div className="relative h-72">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 "></div>
              </div>
              {/* Card Title */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {achievement.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredAchievements.length && (
          <div className="text-center mt-12 z-20 relative">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 rounded-full bg-white text-indigo-600 border border-indigo-200 font-medium transition-all duration-300 hover:bg-indigo-500 hover:border-indigo-300 hover:-translate-y-1 hover:shadow-md"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Image Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closePopup}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-lg p-2"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image area
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900 z-10 bg-white bg-opacity-80 rounded-full p-1"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <div
              className="flex items-center justify-center"
              style={{ minHeight: "40vh", maxHeight: "80vh" }}
            >
              <img
                src={popupImage}
                alt="Popup"
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
