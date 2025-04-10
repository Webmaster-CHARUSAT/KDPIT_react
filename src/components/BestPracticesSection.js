import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faCertificate, faChalkboardTeacher, faFlask, 
  faBriefcase, faPuzzlePiece, faUserFriends, faUsers, 
  faUserCheck, faLaptop 
} from '@fortawesome/free-solid-svg-icons';

const BestPracticesSection = () => {
  // Best practices data
  const bestPractices = [
    {
      id: 1,
      title: "Academic Enrichment through MOOC Certification",
      description: "like Coursera, NPTEL",
      icon: faGraduationCap,
      color: "#4e54c8"
    },
    {
      id: 2,
      title: "Industry Recognized Certification Courses",
      description: "like: AWS, EC-COUNCIL, ORACLE, MICROSOFT",
      icon: faCertificate,
      color: "#ff5e62"
    },
    {
      id: 3,
      title: "Experienced Faculties",
      description: "",
      icon: faChalkboardTeacher,
      color: "#E91E63"
    },
    {
      id: 4,
      title: "State-of-art Laboratory Facilities",
      description: "",
      icon: faFlask,
      color: "#9C27B0"
    },
    {
      id: 5,
      title: "Excellent Placement Record",
      description: "and Pre-Placement Orientation Activity",
      icon: faBriefcase,
      color: "#4CAF50"
    },
    {
      id: 6,
      title: "Competitive Exam Preparation",
      description: "",
      icon: faPuzzlePiece,
      color: "#FF9800"
    },
    {
      id: 7,
      title: "Continuous Evaluation and Collaborative Learning Environment",
      description: "",
      icon: faUserFriends,
      color: "#3F51B5"
    },
    {
      id: 8,
      title: "Student Clubs",
      description: "like: AWS Student Club, Eager Beavers, Data Science Club, CP Squad",
      icon: faUsers,
      color: "#FF5722"
    },
    {
      id: 9,
      title: "One to One Student Mentoring",
      description: "",
      icon: faUserCheck,
      color: "#607D8B"
    },
    {
      id: 10,
      title: "Intense Use Of Learning Management Software",
      description: "",
      icon: faLaptop,
      color: "#00BCD4"
    }
  ];

  return (
    <section id="best-practices" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 pb-40">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Best Practices</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to excellence through innovative educational approaches</p>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {bestPractices.map((practice, index) => (
            <motion.div 
              key={practice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-stretch h-full">
                {/* Icon Section */}
                <div 
                  className="w-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: `${practice.color}15` }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${practice.color}25` }}
                  >
                    <FontAwesomeIcon 
                      icon={practice.icon} 
                      className="text-xl transition-all duration-300"
                      style={{ color: practice.color }}
                    />
                  </div>
                </div>
                
                {/* Content Section - Now vertically centered */}
                <div className="flex-1 p-3 border-l border-gray-100 flex flex-col justify-center">
                  <h3 className="text-base font-semibold text-gray-800 mb-1 leading-tight">
                    {practice.title}
                  </h3>
                  {practice.description && (
                    <p className="text-sm text-gray-600 m-0">
                      {practice.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute -bottom-12 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default BestPracticesSection;