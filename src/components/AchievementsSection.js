import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const AchievementsSection = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupImage, setPopupImage] = useState(null);

// ------------- Achievement Section to showcase students and faculties achievements

  // Sample achievement data
  const achievements = [
    {
      id: 1,
      title: "Achievement by Vachani Zeel",
      category: "student",
      image: "./images/achievements/VACHANI ZEEL_22IT149.webp",
    },
    {
      id: 2,
      title: "Achievement by Vyom Pandya",
      category: "student",
      image: "./images/achievements/VYOM_PANDYA.webp",
    },
    {
      id: 3,
      title: "NPTEL Toppers Jay Bordab 2024",
      category: "student",
      image: "./images/achievements/NPTEL toppers jay bordab2024.webp",
    },
    {
      id: 4,
      title: "NPTEL Toppers Engineering Nov 2024",
      category: "student",
      image: "./images/achievements/NPTEL_TOPPERS_EH_NOV 2024.webp",
    },
    {
      id: 5,
      title: "NPTEL Toppers Jan-Mar DAA 2025",
      category: "student",
      image: "./images/achievements/NPTEL_Toppers_JAN_MAR_DAA2025.webp",
    },
    {
      id: 6,
      title: "NPTEL Toppers Jul-Sep 2024 DBMS",
      category: "student",
      image: "./images/achievements/NPTEL_TOPPERS_JUL_SEP_2024_DBMS.webp",
    },
    {
      id: 7,
      title: "NPTEL Toppers OS Nov 2024 (Batch 1)",
      category: "student",
      image: "./images/achievements/NPTEL_TOPPERS_OS_NOV_2024_1.webp",
    },
    {
      id: 8,
      title: "NPTEL Toppers OS Nov 2024 (Batch 2)",
      category: "student",
      image: "./images/achievements/NPTEL_TOPPERS_OS_NOV_2024_2.webp",
    },
    {
      id: 9,
      title: "Achievement by Parthik Panchal",
      category: "student",
      image: "./images/achievements/Parthik_Panchal_21IT098.webp",
    },
    {
      id: 10,
      title: "Achievement by Rachit Devanshi Yash",
      category: "student",
      image: "./images/achievements/RACHIT_DEVANSHI_YASH.webp",
    },
    {
      id: 11,
      title: "Achievement by Rachit Shah",
      category: "student",
      image: "./images/achievements/RACHIT_SHAH.webp",
    },
    {
      id: 12,
      title: "Samarth Chauhan Internship",
      category: "student",
      image: "./images/achievements/Samarth Chauhan Internship.webp",
    },
    {
      id: 13,
      title: "Achievement by Shruti Tirth",
      category: "student",
      image: "./images/achievements/SHRUTI_TIRTH_PPP.webp",
    },
    {
      id: 14,
      title: "Jaitej Bhamra Project",
      category: "student",
      image: "./images/achievements/JAITEJ_BHAMRA PROJECT_21IT180.webp",
    },
    {
      id: 15,
      title: "Achievement by Jaitej Krisha",
      category: "student",
      image: "./images/achievements/JAITEJ_KRISHA.webp",
    },
    {
      id: 16,
      title: "Jaitej Krisha PPP",
      category: "student",
      image: "./images/achievements/JAITEJ_KRISHA_PPP.webp",
    },
    {
      id: 17,
      title: "Jay Anshuman PPP",
      category: "student",
      image: "./images/achievements/JAY_ANSHUMAN_PPP.webp",
    },
    {
      id: 18,
      title: "Achievement by Jugal Mehta",
      category: "student",
      image: "./images/achievements/JUGAL_MEHTA_21IT083.webp",
    },
    {
      id: 19,
      title: "Achievement by Jugal Mehta Yash Bhadaniya",
      category: "student",
      image: "./images/achievements/JUGAL_MEHTA_YASH_BHADANIYA.webp",
    },
    {
      id: 20,
      title: "Khunt Jaimin Internship",
      category: "student",
      image: "./images/achievements/Khunt Jaimin 22it045 Internship.webp",
    },
    {
      id: 21,
      title: "Krisha Zalaria Project",
      category: "student",
      image: "./images/achievements/KRISHA ZALARIA PROJECT_21IT178.webp",
    },
    {
      id: 22,
      title: "Manav Madhav PPP",
      category: "student",
      image: "./images/achievements/MANAV_MADHAV_PPP.webp",
    },
    {
      id: 23,
      title: "NPTEL Toppers DSA Nov 2024 (Batch 1)",
      category: "student",
      image: "./images/achievements/NPTEL TOPPERS DSA_NOV 2024_1.webp",
    },
    {
      id: 24,
      title: "NPTEL Toppers DSA Nov 2024 (Batch 2)",
      category: "student",
      image: "./images/achievements/NPTEL TOPPERS DSA_NOV 2024_2.webp",
    },
    {
      id: 25,
      title: "Anant PPP",
      category: "student",
      image: "./images/achievements/ANANT_PPP.webp",
    },
    {
      id: 26,
      title: "Ankit PPP",
      category: "student",
      image: "./images/achievements/ANKIT_PPP.webp",
    },
    {
      id: 27,
      title: "Anshuman Prajapati GATE",
      category: "student",
      image: "./images/achievements/Anshuman_Prajapati_22IT003_GATE.webp",
    },
    {
      id: 28,
      title: "Unique Achievement 1",
      category: "student",
      image: "./images/achievements/dd300bbb-37f7-45e5-a3d1-48c20fb91863.webp",
    },
    {
      id: 29,
      title: "Achievement by Dhvani Patel",
      category: "student",
      image: "./images/achievements/Dhvani Patel_21IT108.webp",
    },
    {
      id: 30,
      title: "Unique Achievement 2",
      category: "student",
      image: "./images/achievements/f3148567-5c62-40d8-bb31-5fa575351251.webp",
    },
    {
      id: 31,
      title: "Achievement by Harshvardhan Goplani",
      category: "student",
      image: "./images/achievements/Harshvardhan_Goplani_21IT041.webp",
    },
    {
      id: 32,
      title: "ICT4SD HNY",
      category: "student",
      image: "./images/achievements/ICT4SD_HNY.webp",
    },
    {
      id: 33,
      title: "ICT4SD Madhav Ajwalia",
      category: "student",
      image: "./images/achievements/ICT4SD_Madhav_Ajwalia.webp",
    },
    {
      id: 34,
      title: "ICT4SD Purvi Prajapati",
      category: "student",
      image: "./images/achievements/ICT4SD_Purvi_Prajapati.webp",
    },
    {
      id: 35,
      title: "ISBM AKP 2024",
      category: "student",
      image: "./images/achievements/ISBM_AKP_21it144_2024.webp",
    },
    {
      id: 36,
      title: "Achievement by Jaitej",
      category: "student",
      image: "./images/achievements/JAITEJ.webp",
    },
  ];

  // Filter achievements based on category and search term
  const filteredAchievements = achievements
    .filter((achievement) => {
      if (filter === "all") return true;
      return achievement.category === filter;
    })
    .filter((achievement) => {
      if (!searchTerm) return true;
      return achievement.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

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
