import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faCertificate, faAward, faGraduationCap, faLaptopCode, faFlask, faUsers, faChalkboardTeacher, faNewspaper, faSearch, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const AchievementsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample achievement data
  const achievements = [
    {
      id: 1,
      title: "First Prize in National Hackathon",
      description: "Team of 4 students won first prize in the National Coding Hackathon organized by Microsoft.",
      date: "March 15, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faTrophy,
      iconColor: "#FFD700",
      participants: ["Rahul Sharma", "Priya Patel", "Amit Kumar", "Neha Singh"],
      details: "The 48-hour hackathon focused on developing solutions for sustainable development goals. Our students created an AI-powered application that helps optimize water usage in agriculture, earning them the top prize of ₹1,00,000 and internship opportunities at Microsoft."
    },
    {
      id: 2,
      title: "Research Paper Published in IEEE Journal",
      description: "Dr. Rajesh Verma published a paper on 'Advanced Machine Learning Algorithms for Healthcare' in the IEEE Journal.",
      date: "January 10, 2023",
      category: "faculty",
      type: "publication",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faNewspaper,
      iconColor: "#4e54c8",
      participants: ["Dr. Rajesh Verma"],
      details: "The research paper explores novel machine learning approaches for early disease detection and has been cited by researchers from top universities worldwide. This publication has positioned our department as a leader in healthcare AI research."
    },
    {
      id: 3,
      title: "Google Summer of Code Selection",
      description: "Three students selected for Google Summer of Code program with stipends of $3000 each.",
      date: "April 20, 2023",
      category: "student",
      type: "program",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faLaptopCode,
      iconColor: "#4285F4",
      participants: ["Vikram Mehta", "Sanya Kapoor", "Arjun Nair"],
      details: "The students will be contributing to open-source projects over the summer. Vikram will work on TensorFlow, Sanya on Kubernetes, and Arjun on Flutter. This is the highest number of selections from our college in a single year."
    },
    {
      id: 4,
      title: "Best Teacher Award",
      description: "Prof. Anita Desai received the Best Teacher Award from the State Education Department.",
      date: "September 5, 2022",
      category: "faculty",
      type: "award",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faChalkboardTeacher,
      iconColor: "#E91E63",
      participants: ["Prof. Anita Desai"],
      details: "The award recognizes her innovative teaching methodologies and dedication to student mentorship. Prof. Desai has developed a unique project-based learning approach that has significantly improved student engagement and learning outcomes."
    },
    {
      id: 5,
      title: "Smart India Hackathon Runners-up",
      description: "Team of 6 students secured second place in Smart India Hackathon 2023.",
      date: "February 28, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faMedal,
      iconColor: "#C0C0C0",
      participants: ["Karan Malhotra", "Deepika Reddy", "Farhan Khan", "Meera Joshi", "Rohan Singhania", "Tanvi Gupta"],
      details: "The team developed a blockchain-based solution for supply chain transparency in the agriculture sector. Their project was commended for its practical implementation and scalability potential."
    },
    {
      id: 6,
      title: "Research Grant of ₹50 Lakhs",
      description: "Dr. Sunil Mehta and team secured a research grant from the Department of Science and Technology.",
      date: "June 15, 2022",
      category: "faculty",
      type: "grant",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faFlask,
      iconColor: "#9C27B0",
      participants: ["Dr. Sunil Mehta", "Dr. Priya Sharma", "Dr. Anil Kumar"],
      details: "The grant will fund research on quantum computing applications in cryptography. The project aims to develop quantum-resistant encryption algorithms that can withstand attacks from future quantum computers."
    },
    {
      id: 7,
      title: "ACM ICPC Regional Finalists",
      description: "Three teams qualified for the ACM ICPC Asia Regional Finals.",
      date: "November 12, 2022",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faLaptopCode,
      iconColor: "#FF5722",
      participants: ["Team Alpha", "Team Beta", "Team Gamma"],
      details: "This is the first time our college has had three teams qualifying for the regional finals. The teams underwent rigorous training for six months under the guidance of our algorithmic programming club mentors."
    },
    {
      id: 8,
      title: "Patent Granted for IoT Innovation",
      description: "Prof. Ramesh Kumar and two students granted patent for their IoT-based water quality monitoring system.",
      date: "July 7, 2022",
      category: "faculty",
      type: "patent",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faCertificate,
      iconColor: "#4CAF50",
      participants: ["Prof. Ramesh Kumar", "Aditya Sharma", "Ishita Patel"],
      details: "The patented system uses low-cost sensors and machine learning algorithms to detect water contaminants in real-time. The technology has been adopted by the local municipal corporation for monitoring water quality in three districts."
    },
  ];

  // Filter achievements based on category and search term
  const filteredAchievements = achievements
    .filter(achievement => {
      if (filter === 'all') return true;
      return achievement.category === filter;
    })
    .filter(achievement => {
      if (!searchTerm) return true;
      return (
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.participants.some(participant => 
          participant.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

  // Visible achievements based on current count
  const visibleAchievements = filteredAchievements.slice(0, visibleCount);

  // Handle "View More" button click
  const handleViewMore = () => {
    if (visibleCount + 6 >= filteredAchievements.length) {
      setVisibleCount(filteredAchievements.length);
    } else {
      setVisibleCount(visibleCount + 4);
    }
  };

  // Handle achievement card click to show details
  const handleCardClick = (achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(4);
  }, [filter, searchTerm]);

  // Get icon based on achievement type
  const getTypeIcon = (type) => {
    switch(type) {
      case 'competition': return faTrophy;
      case 'publication': return faNewspaper;
      case 'award': return faAward;
      case 'grant': return faFlask;
      case 'patent': return faCertificate;
      case 'program': return faLaptopCode;
      case 'scholarship': return faGraduationCap;
      default: return faAward;
    }
  };

  return (
    <section id="achievements" className="relative py-20 pb-64 bg-gray-200 overflow-hidden z-10">
      <div className="container mx-auto px-4 z-20 relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600">Celebrating excellence and innovation in our academic community</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('student')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'student' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              Student Achievements
            </button>
            <button 
              onClick={() => setFilter('faculty')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'faculty' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600'
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
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleAchievements.length > 0 ? (
            visibleAchievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => handleCardClick(achievement)}
              >
                {/* Card Image */}
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${achievement.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full ${
                    achievement.category === 'student' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-green-500 text-white'
                  }`}>
                    {achievement.category === 'student' ? 'Student' : 'Faculty'}
                  </span>
                  
                  {/* Icon */}
                  <div 
                    className="absolute -bottom-5 left-5 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md z-10"
                    style={{ backgroundColor: achievement.iconColor }}
                  >
                    <FontAwesomeIcon icon={achievement.icon} className="text-lg" />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-5 pt-8">
                  {/* Type Badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 mb-3">
                    <FontAwesomeIcon icon={getTypeIcon(achievement.type)} className="mr-1" />
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {achievement.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-gray-500 text-xs">{achievement.date}</span>
                    <span className="text-indigo-600 text-sm font-medium group-hover:underline">
                      View Details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <FontAwesomeIcon icon={faAward} className="text-gray-300 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No achievements found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* View More Button */}
        {visibleCount < filteredAchievements.length && (
          <div className="text-center mt-12 z-20 relative">
            <button 
              onClick={handleViewMore}
              className="px-8 py-3 rounded-full bg-white text-indigo-600 border border-indigo-200 font-medium transition-all duration-300 hover:bg-indigo-500 hover:border-indigo-300 hover:-translate-y-1 hover:shadow-md"
            >
              View More
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs" />
            </button>
          </div>
        )}
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Achievement Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              {selectedAchievement && (
                <>
                  {/* Modal Header */}
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg leading-6 font-semibold text-indigo-600 flex items-center">
                      <FontAwesomeIcon 
                        icon={selectedAchievement.icon} 
                        style={{ color: selectedAchievement.iconColor }}
                        className="mr-2" 
                      />
                      {selectedAchievement.title}
                    </h3>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close</span>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  
                  {/* Modal Body */}
                  <div className="px-6 py-4">
                    {/* Image */}
                    <div className="relative mb-6">
                      <img 
                        src={selectedAchievement.image} 
                        alt={selectedAchievement.title} 
                        className="w-full h-64 object-cover rounded-lg" 
                      />
                      <span className={`absolute top-4 right-4 text-xs font-medium px-4 py-1 rounded-full ${
                        selectedAchievement.category === 'student' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                      }`}>
                        {selectedAchievement.category === 'student' ? 'Student Achievement' : 'Faculty Achievement'}
                      </span>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-4">
                        <h4 className="w-32 text-sm font-semibold text-indigo-600 mb-1 sm:mb-0">Date:</h4>
                        <p className="text-gray-700">{selectedAchievement.date}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-4">
                        <h4 className="w-32 text-sm font-semibold text-indigo-600 mb-1 sm:mb-0">Category:</h4>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {selectedAchievement.type.charAt(0).toUpperCase() + selectedAchievement.type.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row border-b border-gray-100 pb-4">
                        <h4 className="w-32 text-sm font-semibold text-indigo-600 mb-1 sm:mb-0">Participants:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedAchievement.participants.map((participant, index) => (
                            <span 
                              key={index} 
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                            >
                              {participant}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold text-indigo-600 mb-2">Description:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedAchievement.details || selectedAchievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modal Footer */}
                  <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                    <button 
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors">
                      Share Achievement
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;