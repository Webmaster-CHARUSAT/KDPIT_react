import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFilter, 
  faTimes, 
  faGlobe, 
  faCode, 
  faLink, 
  faCalendarAlt,
  faUser,
  faAward,
  faDownload,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Updated Project page to showcase all the projects

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Sample categories - replace with your department's project categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software Development' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'data', label: 'Data Science' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'iot', label: 'IoT Projects' },
    { id: 'research', label: 'Research Projects' }
  ];
  
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "AI-Powered Student Attendance System",
      category: "ai",
      thumbnail: "/public/images/logo.webp",
      year: 2023,
      semester: "Spring",
      students: ["Jane Smith", "John Doe", "Robert Johnson"],
      supervisor: "Dr. Emily Parker",
      description: "An attendance tracking system using facial recognition to automatically mark student attendance in classrooms. The system uses deep learning algorithms to identify students and record their presence in real-time.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      features: [
        "Facial recognition for automatic attendance",
        "Real-time dashboard for instructors",
        "Attendance reports and analytics",
        "Mobile app for students to view their attendance",
        "Integration with university LMS"
      ],
      links: {
        github: "https://github.com/example/attendance-system",
        demo: "https://demo-attendance.example.com",
        report: "/documents/attendance-system-report.pdf"
      },
      awards: ["Best AI Project Award 2023", "Innovation Challenge Finalist"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 2,
      title: "Smart Campus Navigation App",
      category: "mobile",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2023,
      semester: "Fall",
      students: ["Michael Chen", "Sarah Williams"],
      supervisor: "Prof. David Anderson",
      description: "A mobile application that helps students and visitors navigate the university campus. The app features indoor mapping, real-time directions, accessibility routes, and points of interest.",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Bluetooth Beacons"],
      features: [
        "Interactive campus map with building information",
        "Indoor navigation with turn-by-turn directions",
        "Accessibility routes for disabled users",
        "Real-time events and notifications",
        "Offline mode for areas with poor connectivity"
      ],
      links: {
        github: "https://github.com/example/campus-navigator",
        demo: "https://campus-nav.example.com",
        report: "/documents/campus-navigator-report.pdf"
      },
      awards: ["Mobile Innovation Award"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 3,
      title: "Blockchain-based Academic Credential Verification",
      category: "research",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2022,
      semester: "Spring",
      students: ["Alex Thompson", "Lisa Garcia", "Kevin Wong"],
      supervisor: "Dr. Samantha Lee",
      description: "A secure system for issuing and verifying academic credentials using blockchain technology. The platform allows universities to issue tamper-proof digital diplomas and certificates that can be easily verified by employers.",
      technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"],
      features: [
        "Immutable credential storage on blockchain",
        "Self-sovereign identity for students",
        "One-click verification for employers",
        "Integration with existing university systems",
        "Privacy-preserving credential sharing"
      ],
      links: {
        github: "https://github.com/example/blockchain-credentials",
        demo: "https://verify-creds.example.com",
        report: "/documents/blockchain-credentials-report.pdf"
      },
      awards: ["Best Research Project 2022", "Blockchain Innovation Award"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 4,
      title: "Sustainable Energy Monitoring Dashboard",
      category: "iot",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2023,
      semester: "Spring",
      students: ["Emma Davis", "Tyler Martinez"],
      supervisor: "Prof. James Wilson",
      description: "An IoT-based system that monitors and visualizes energy consumption across campus buildings to promote sustainability. The dashboard provides real-time data and insights to help reduce energy waste.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana", "React"],
      features: [
        "Real-time energy consumption monitoring",
        "Historical data analysis and visualization",
        "Anomaly detection for energy usage spikes",
        "Automated alerts for excessive consumption",
        "Recommendations for energy conservation"
      ],
      links: {
        github: "https://github.com/example/energy-dashboard",
        demo: "https://energy.example.com",
        report: "/documents/energy-dashboard-report.pdf"
      },
      awards: ["Sustainability Innovation Award"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 5,
      title: "Personalized Learning Recommendation System",
      category: "data",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2022,
      semester: "Fall",
      students: ["Daniel Brown", "Olivia Wilson", "Ethan Miller"],
      supervisor: "Dr. Rebecca Johnson",
      description: "A recommendation system that analyzes student performance data to suggest personalized learning resources and study plans. The system uses machine learning to identify knowledge gaps and recommend appropriate materials.",
      technologies: ["Python", "Scikit-learn", "Django", "PostgreSQL", "React"],
      features: [
        "Personalized learning resource recommendations",
        "Adaptive assessment of student knowledge",
        "Custom study plan generation",
        "Progress tracking and visualization",
        "Integration with popular learning platforms"
      ],
      links: {
        github: "https://github.com/example/learning-recommender",
        demo: "https://learn-rec.example.com",
        report: "/documents/learning-recommender-report.pdf"
      },
      awards: ["Educational Technology Award"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 6,
      title: "Virtual Laboratory for Remote Science Experiments",
      category: "web",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2023,
      semester: "Fall",
      students: ["Sophia Clark", "Ryan Lewis"],
      supervisor: "Prof. Thomas White",
      description: "A web-based virtual laboratory that allows students to conduct science experiments remotely. The platform simulates various experiments with realistic physics and provides interactive tools for data collection and analysis.",
      technologies: ["Three.js", "WebGL", "React", "Node.js", "WebSockets", "MongoDB"],
      features: [
        "3D simulations of physics, chemistry, and biology experiments",
        "Real-time collaboration between students",
        "Data collection and export tools",
        "Virtual lab notebook integration",
        "Instructor dashboard for monitoring student work"
      ],
      links: {
        github: "https://github.com/example/virtual-lab",
        demo: "https://vlab.example.com",
        report: "/documents/virtual-lab-report.pdf"
      },
      awards: ["Educational Innovation Award", "Web Development Excellence"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 7,
      title: "Automated Essay Grading System",
      category: "ai",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2022,
      semester: "Spring",
      students: ["Jason Kim", "Natalie Chen"],
      supervisor: "Dr. Laura Martinez",
      description: "An AI-powered system that automatically grades student essays based on content, structure, grammar, and coherence. The system provides detailed feedback to help students improve their writing skills.",
      technologies: ["Python", "NLTK", "SpaCy", "BERT", "Flask", "React"],
      features: [
        "Automated scoring of essays across multiple dimensions",
        "Detailed feedback on writing strengths and weaknesses",
        "Plagiarism detection",
        "Grammar and style suggestions",
        "Integration with learning management systems"
      ],
      links: {
        github: "https://github.com/example/essay-grader",
        demo: "https://essay-grader.example.com",
        report: "/documents/essay-grader-report.pdf"
      },
      awards: ["AI Innovation in Education Award"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    },
    {
      id: 8,
      title: "Campus Safety Alert System",
      category: "software",
      thumbnail: "/public/images/placeholder.jpg",
      year: 2023,
      semester: "Spring",
      students: ["Andrew Jackson", "Maria Rodriguez", "David Lee"],
      supervisor: "Prof. Karen Thompson",
      description: "A comprehensive safety alert system for university campuses that enables quick reporting of incidents and emergency notifications. The platform includes mobile apps, web dashboards, and integration with campus security systems.",
      technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "WebSockets"],
      features: [
        "One-touch emergency reporting",
        "Real-time incident tracking and mapping",
        "Automated alerts to campus security",
        "Mass notification system for emergencies",
        "Anonymous reporting option for sensitive issues"
      ],
      links: {
        github: "https://github.com/example/campus-safety",
        demo: "https://safety.example.com",
        report: "/documents/campus-safety-report.pdf"
      },
      awards: ["Campus Innovation Award", "Safety Technology Excellence"],
      images: [
        "/public/images/placeholder.jpg",
        "/public/images/placeholder.jpg"
      ]
    }
  ];
  
  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projects;
    
    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        project.students.some(student => student.toLowerCase().includes(query)) ||
        project.supervisor.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);
  
  // Initialize filtered projects on component mount
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);
  
  // Function to get category label from ID
  const getCategoryLabel = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24  pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Projects</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore innovative projects developed by our talented students. 
            These projects showcase their technical skills, creativity, and ability to solve real-world problems.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FontAwesomeIcon icon={faFilter} className="text-indigo-600" />
                <span>Filter</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`text-xs transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`}
                />
              </button>
              
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="px-3 py-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
          
          {/* Category Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/public/images/placeholder.jpg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-4xl font-light">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {getCategoryLabel(project.category)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{project.title}</h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-400" />
                    <span className="line-clamp-1">
                      {project.students.slice(0, 2).join(', ')}
                      {project.students.length > 2 && ` +${project.students.length - 2} more`}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-shadow duration-300 text-sm font-medium"
                  >
                    View Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-1">No Projects Found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {/* Year/Category Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projects by Category */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Projects by Category</h3>
              <div className="space-y-3">
                {categories.filter(cat => cat.id !== 'all').map(category => {
                  const count = projects.filter(p => p.category === category.id).length;
                  const percentage = Math.round((count / projects.length) * 100);
                  
                  return (
                    <div key={category.id} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{category.label}</span>
                        <span className="text-sm text-gray-500">{count} projects</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Projects by Year */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Projects by Year</h3>
              <div className="space-y-3">
                {Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a).map(year => {
                  const count = projects.filter(p => p.year === year).length;
                  const percentage = Math.round((count / projects.length) * 100);
                  
                  return (
                    <div key={year} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{year}</span>
                        <span className="text-sm text-gray-500">{count} projects</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Project Idea?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're always looking for interesting problems to solve and innovative ideas to pursue.
            If you have a project proposal or want to collaborate with our students, get in touch!
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Contact Department
          </a>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Images */}
              <div className="mb-8">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="rounded-lg shadow-md w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/public/images/placeholder.jpg';
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <h3 className="text-2xl font-light">{selectedProject.title}</h3>
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="col-span-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Description</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
                  <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Details</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-medium text-gray-800">{getCategoryLabel(selectedProject.category)}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500">Academic Year</p>
                      <p className="font-medium text-gray-800">{selectedProject.year}, {selectedProject.semester} Semester</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500">Students</p>
                      <ul className="list-disc pl-5 font-medium text-gray-800">
                        {selectedProject.students.map((student, index) => (
                          <li key={index}>{student}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-500">Supervisor</p>
                      <p className="font-medium text-gray-800">{selectedProject.supervisor}</p>
                    </div>
                    
                    {selectedProject.awards && selectedProject.awards.length > 0 && (
                      <div>
                        <p className="text-gray-500">Awards & Recognition</p>
                        <ul className="list-disc pl-5 font-medium text-gray-800">
                        {selectedProject.awards.map((award, index) => (
                            <li key={index}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Links */}
              {selectedProject.links && (
                <div className="border-t border-gray-200 pt-6 pb-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Resources</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.github && (
                      <a 
                        href={selectedProject.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    
                    {selectedProject.links.demo && (
                      <a 
                        href={selectedProject.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    {selectedProject.links.report && (
                      <a 
                        href={selectedProject.links.report} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download Report</span>
                      </a>
                    )}
                    
                    {selectedProject.links.code && (
                      <a 
                        href={selectedProject.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        <span>Source Code</span>
                      </a>
                    )}
                    
                    {selectedProject.links.presentation && (
                      <a 
                        href={selectedProject.links.presentation} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faLink} />
                        <span>Presentation</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
              
              {/* Related Projects */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {projects
                    .filter(p => p.id !== selectedProject.id && p.category === selectedProject.category)
                    .slice(0, 3)
                    .map(project => (
                      <div 
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="font-medium text-gray-800 mb-2 line-clamp-2">{project.title}</h4>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{project.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;