import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faChevronDown, 
  faTimes, 
  faEnvelope, 
  faPhone, 
  faGraduationCap, 
  faBookOpen,
  faFlask,
  faUsers,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGoogleScholar, 
  faResearchgate 
} from '@fortawesome/free-brands-svg-icons';

const FacultyDirectory = () => {
  // State for filters and search
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    designation: [],
    specialization: [],
    showFilters: false
  });
  
  // Sample faculty data - replace with your actual data
  const facultyData = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      designation: "Professor & Head of Department",
      type: "faculty",
      image: "/public/images/placeholder.jpg",
      specialization: ["Artificial Intelligence", "Machine Learning"],
      education: "Ph.D. in Computer Science, Stanford University",
      email: "emily.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      office: "Room 301, Computer Science Building",
      bio: "Dr. Johnson is a leading researcher in AI with over 15 years of experience. She has published numerous papers in top conferences and journals.",
      research: "Current research focuses on explainable AI and ethical machine learning applications in healthcare.",
      courses: ["CS101: Introduction to AI", "CS401: Advanced Machine Learning"],
      publications: [
        "Johnson, E. et al. (2022). 'Explainable AI in Healthcare.' IEEE Transactions on AI.",
        "Johnson, E. & Smith, J. (2021). 'Ethical Considerations in Machine Learning.' ACM Conference on AI Ethics."
      ],
      links: {
        linkedin: "https://linkedin.com/in/emilyjohnson",
        scholar: "https://scholar.google.com/emilyjohnson",
        researchgate: "https://researchgate.net/profile/Emily_Johnson"
      }
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      designation: "Associate Professor",
      type: "faculty",
      image: "/public/images/placeholder.jpg",
      specialization: ["Computer Networks", "Cybersecurity"],
      education: "Ph.D. in Computer Engineering, MIT",
      email: "michael.chen@university.edu",
      phone: "+1 (555) 234-5678",
      office: "Room 205, Computer Science Building",
      bio: "Prof. Chen specializes in network security and has worked with several major tech companies on security infrastructure.",
      research: "Network vulnerability assessment, intrusion detection systems, and secure communication protocols.",
      courses: ["CS202: Computer Networks", "CS305: Network Security"],
      publications: [
        "Chen, M. & Williams, R. (2023). 'Advanced Intrusion Detection Systems.' IEEE Security & Privacy.",
        "Chen, M. (2022). 'Secure Routing Protocols for IoT.' ACM IoT Journal."
      ],
      links: {
        linkedin: "https://linkedin.com/in/michaelchen",
        scholar: "https://scholar.google.com/michaelchen",
        researchgate: "https://researchgate.net/profile/Michael_Chen"
      }
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      designation: "Assistant Professor",
      type: "faculty",
      image: "/public/images/placeholder.jpg",
      specialization: ["Data Science", "Big Data Analytics"],
      education: "Ph.D. in Data Science, UC Berkeley",
      email: "sarah.martinez@university.edu",
      phone: "+1 (555) 345-6789",
      office: "Room 210, Computer Science Building",
      bio: "Dr. Martinez is an expert in big data analytics with experience in both academia and industry.",
      research: "Scalable data processing, distributed computing, and real-time analytics.",
      courses: ["CS203: Introduction to Data Science", "CS404: Big Data Technologies"],
      publications: [
        "Martinez, S. et al. (2023). 'Scalable Analytics for Urban Data.' Big Data Conference.",
        "Martinez, S. (2021). 'Real-time Processing of Sensor Data.' IEEE Data Engineering Bulletin."
      ],
      links: {
        linkedin: "https://linkedin.com/in/sarahmartinez",
        scholar: "https://scholar.google.com/sarahmartinez",
        researchgate: "https://researchgate.net/profile/Sarah_Martinez"
      }
    },
    {
      id: 4,
      name: "Robert Williams",
      designation: "Lab Coordinator",
      type: "staff",
      image: "/public/images/placeholder.jpg",
      specialization: ["Lab Management", "Technical Support"],
      education: "M.S. in Computer Science, State University",
      email: "robert.williams@university.edu",
      phone: "+1 (555) 456-7890",
      office: "Room 101, Computer Science Building",
      bio: "Robert manages all computer labs and provides technical support for faculty and students.",
      responsibilities: "Lab equipment maintenance, software installation, student assistance, and technical troubleshooting."
    },
    {
      id: 5,
      name: "Jennifer Lee",
      designation: "Administrative Assistant",
      type: "staff",
      image: "/public/images/placeholder.jpg",
      specialization: ["Administration", "Student Affairs"],
      education: "B.A. in Business Administration, City College",
      email: "jennifer.lee@university.edu",
      phone: "+1 (555) 567-8901",
      office: "Room 100, Computer Science Building",
      bio: "Jennifer handles administrative tasks for the department and is the first point of contact for students.",
      responsibilities: "Student inquiries, scheduling, document management, and departmental communications."
    }
  ];
  
  // Filter faculty data based on active tab, search query, and filters
  const getFilteredFaculty = () => {
    return facultyData.filter(member => {
      // Filter by tab (faculty type)
      if (activeTab !== 'all' && member.type !== activeTab) return false;
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = member.name.toLowerCase().includes(query);
        const matchesDesignation = member.designation.toLowerCase().includes(query);
        const matchesSpecialization = member.specialization?.some(spec => 
          spec.toLowerCase().includes(query)
        );
        
        if (!matchesName && !matchesDesignation && !matchesSpecialization) return false;
      }
      
      // Filter by designation
      if (filters.designation.length > 0 && !filters.designation.some(d => 
        member.designation.toLowerCase().includes(d.toLowerCase()))
      ) {
        return false;
      }
      
      // Filter by specialization
      if (filters.specialization.length > 0 && !member.specialization?.some(spec => 
        filters.specialization.includes(spec))
      ) {
        return false;
      }
      
      return true;
    });
  };
  
  const filteredFaculty = getFilteredFaculty();
  
  // Get unique designations and specializations for filters
  const getAllDesignations = () => {
    const designations = new Set();
    facultyData.forEach(member => {
      if (member.designation) {
        // Extract the main designation (before any '&' or ',')
        const mainDesignation = member.designation.split(/[&,]/)[0].trim();
        designations.add(mainDesignation);
      }
    });
    return Array.from(designations);
  };
  
  const getAllSpecializations = () => {
    const specializations = new Set();
    facultyData.forEach(member => {
      if (member.specialization) {
        member.specialization.forEach(spec => specializations.add(spec));
      }
    });
    return Array.from(specializations);
  };
  
  // Handle filter changes
  const toggleDesignationFilter = (designation) => {
    setFilters(prev => {
      const isSelected = prev.designation.includes(designation);
      return {
        ...prev,
        designation: isSelected 
          ? prev.designation.filter(d => d !== designation)
          : [...prev.designation, designation]
      };
    });
  };
  
  const toggleSpecializationFilter = (specialization) => {
    setFilters(prev => {
      const isSelected = prev.specialization.includes(specialization);
      return {
        ...prev,
        specialization: isSelected 
          ? prev.specialization.filter(s => s !== specialization)
          : [...prev.specialization, specialization]
      };
    });
  };
  
  const clearFilters = () => {
    setFilters({
      designation: [],
      specialization: [],
      showFilters: false
    });
    setSearchQuery('');
  };
  
  // Reference for faculty member details modal
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef();
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Faculty & Staff Directory</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of faculty members and staff who are committed to excellence in teaching, research, and service.
          </p>
        </div>
        
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-4 md:mb-0">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('faculty')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'faculty' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Faculty
              </button>
              <button 
                onClick={() => setActiveTab('staff')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'staff' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Staff
              </button>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search by name, designation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              
              <button 
                onClick={() => setFilters(prev => ({ ...prev, showFilters: !prev.showFilters }))}
                className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon icon={faFilter} className="mr-2 text-indigo-600" />
                <span>Filter</span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`ml-2 text-xs transition-transform duration-300 ${
                    filters.showFilters ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
          
          {/* Advanced Filters Panel */}
          {filters.showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-4 mb-6"
            >
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Designation Filters */}
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <h3 className="font-medium text-gray-800 mb-2">Designation</h3>
                  <div className="space-y-2">
                    {getAllDesignations().map((designation, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.designation.includes(designation)}
                          onChange={() => toggleDesignationFilter(designation)}
                          className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                        />
                        <span className="text-gray-700">{designation}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Specialization Filters */}
                <div className="md:w-1/2">
                  <h3 className="font-medium text-gray-800 mb-2">Specialization</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getAllSpecializations().map((specialization, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.specialization.includes(specialization)}
                          onChange={() => toggleSpecializationFilter(specialization)}
                          className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                        />
                        <span className="text-gray-700">{specialization}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Filter Actions */}
              <div className="flex justify-end mt-4">
                <button 
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Active Filters Display */}
          {(filters.designation.length > 0 || filters.specialization.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-gray-600">Active Filters:</span>
              
              {filters.designation.map((designation, index) => (
                <span 
                  key={`designation-${index}`}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs flex items-center"
                >
                  {designation}
                  <button 
                    onClick={() => toggleDesignationFilter(designation)}
                    className="ml-1.5 hover:text-indigo-600"
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              {filters.specialization.map((specialization, index) => (
                <span 
                  key={`specialization-${index}`}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs flex items-center"
                >
                  {specialization}
                  <button 
                    onClick={() => toggleSpecializationFilter(specialization)}
                    className="ml-1.5 hover:text-purple-600"
                  >
                    <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              <button 
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-gray-700 underline ml-2"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
        
        {/* Faculty/Staff Cards Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/public/images/placeholder.jpg";
                          }}
                        />
                      ) : (
                        <div className="text-white text-6xl font-light">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {member.type === 'faculty' ? 'Faculty' : 'Staff'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium text-sm mb-3">{member.designation}</p>
                    
                    {member.specialization && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {member.specialization.map((spec, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400" />
                      <a href={`mailto:${member.email}`} className="hover:text-indigo-600 transition-colors">
                        {member.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm">
                      <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 pt-2 mt-auto">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-shadow duration-300 text-sm font-medium"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/70 rounded-lg shadow-sm">
            <div className="text-indigo-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-1">No Results Found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Faculty/Staff Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
              
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 md:p-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-white/20 mb-4 flex items-center justify-center">
                      {selectedMember.image ? (
                        <img 
                          src={selectedMember.image} 
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/public/images/placeholder.jpg";
                          }}
                        />
                      ) : (
                        <div className="text-white text-6xl font-light">
                          {selectedMember.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-1 text-center md:text-left">{selectedMember.name}</h2>
                    <p className="text-indigo-200 mb-4 text-center md:text-left">{selectedMember.designation}</p>
                    
                    <div className="space-y-3 w-full">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-indigo-200" />
                        <a href={`mailto:${selectedMember.email}`} className="text-white hover:text-indigo-100">
                          {selectedMember.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-3 text-indigo-200" />
                        <span>{selectedMember.phone}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-indigo-200 mt-1" />
                        <span>{selectedMember.education}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-map-marker-alt mr-3 text-indigo-200 mt-1"></i>
                        <span>{selectedMember.office}</span>
                      </div>
                    </div>
                    
                    {selectedMember.links && (
                      <div className="mt-6 flex space-x-3">
                        {selectedMember.links.linkedin && (
                          <a 
                            href={selectedMember.links.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-200 transition-colors"
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                          </a>
                        )}
                        
                        {selectedMember.links.scholar && (
                          <a 
                            href={selectedMember.links.scholar} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-200 transition-colors"
                          >
                            <FontAwesomeIcon icon={faGoogleScholar} className="h-5 w-5" />
                          </a>
                        )}
                        
                        {selectedMember.links.researchgate && (
                          <a 
                            href={selectedMember.links.researchgate} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-200 transition-colors"
                          >
                            <FontAwesomeIcon icon={faResearchgate} className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                      <p className="text-gray-600">{selectedMember.bio}</p>
                    </div>
                    
                    {selectedMember.specialization && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.specialization.map((spec, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedMember.type === 'faculty' && (
                      <>
                        {selectedMember.research && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              <FontAwesomeIcon icon={faFlask} className="mr-2 text-indigo-600" />
                              Research Interests
                            </h3>
                            <p className="text-gray-600">{selectedMember.research}</p>
                          </div>
                        )}
                        
                        {selectedMember.courses && selectedMember.courses.length > 0 && (
                          <div>
                             <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-indigo-600" />
                              Courses Taught
                            </h3>
                            <ul className="space-y-1 text-gray-600">
                              {selectedMember.courses.map((course, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-indigo-500 mr-2">•</span>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {selectedMember.publications && selectedMember.publications.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-indigo-600" />
                              Selected Publications
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                              {selectedMember.publications.map((publication, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-indigo-500 mr-2">•</span>
                                  <span className="text-sm">{publication}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                    
                    {selectedMember.type === 'staff' && selectedMember.responsibilities && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          <FontAwesomeIcon icon={faUsers} className="mr-2 text-indigo-600" />
                          Responsibilities
                        </h3>
                        <p className="text-gray-600">{selectedMember.responsibilities}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FacultyDirectory;