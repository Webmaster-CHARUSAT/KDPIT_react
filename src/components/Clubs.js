import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faShieldAlt, faMobileAlt, faGamepad, faCloud } from '@fortawesome/free-solid-svg-icons';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: 'Coding Club',
      description: 'A community of coding enthusiasts who participate in competitive programming and hackathons.',
      icon: faCode,
      color: '#4e54c8',
      members: 120
    },
    {
      id: 2,
      name: 'AI & ML Club',
      description: 'Exploring the frontiers of artificial intelligence and machine learning through projects and workshops.',
      icon: faRobot,
      color: '#f83600',
      members: 85
    },
    {
      id: 3,
      name: 'Cybersecurity Club',
      description: 'Learning about network security, ethical hacking, and cyber defense strategies.',
      icon: faShieldAlt,
      color: '#1CB5E0',
      members: 65
    },
    {
      id: 4,
      name: 'App Development Club',
      description: 'Designing and developing mobile applications for various platforms and purposes.',
      icon: faMobileAlt,
      color: '#00b09b',
      members: 90
    },
    {
      id: 5,
      name: 'Gaming Club',
      description: 'Creating interactive games and understanding game development engines and principles.',
      icon: faGamepad,
      color: '#8E2DE2',
      members: 70
    },
    {
      id: 6,
      name: 'Cloud Computing Club',
      description: 'Exploring cloud technologies, serverless architectures, and distributed systems.',
      icon: faCloud,
      color: '#F37335',
      members: 55
    }
  ];

  return (
    <section id="clubs" className="relative  pt-20 pb-[150px] overflow-hidden"
  style={{backgroundColor: '#e1e1e1'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Clubs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Join our vibrant student communities to enhance your skills and network with like-minded peers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl h-full"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div 
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: club.color,
                    boxShadow: `0 10px 15px -3px ${club.color}40, 0 4px 6px -4px ${club.color}30`
                  }}
                >
                  <FontAwesomeIcon icon={club.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{club.name}</h3>
                <p className="text-gray-600 mb-6 px-2">{club.description}</p>
                <div className="mt-auto w-full flex justify-center">
                  <span className="text-gray-500 text-sm bg-gray-100 px-4 py-2 rounded-full">
                    {club.members} Members
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-[130px] left-0 w-full leading-[0] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Clubs;