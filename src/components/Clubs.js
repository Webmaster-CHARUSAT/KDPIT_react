// import React from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faRobot, faShieldAlt, faMobileAlt, faGamepad, faCloud } from '@fortawesome/free-solid-svg-icons';

// const Clubs = () => {
//   const clubs = [
//     {
//       id: 1,
//       name: 'Coding Club',
//       description: 'A community of coding enthusiasts who participate in competitive programming and hackathons.',
//       icon: faCode,
//       color: '#4e54c8',
//       members: 120
//     },
//     {
//       id: 2,
//       name: 'AI & ML Club',
//       description: 'Exploring the frontiers of artificial intelligence and machine learning through projects and workshops.',
//       icon: faRobot,
//       color: '#f83600',
//       members: 85
//     },
//     {
//       id: 3,
//       name: 'Cybersecurity Club',
//       description: 'Learning about network security, ethical hacking, and cyber defense strategies.',
//       icon: faShieldAlt,
//       color: '#1CB5E0',
//       members: 65
//     },
//     {
//       id: 4,
//       name: 'App Development Club',
//       description: 'Designing and developing mobile applications for various platforms and purposes.',
//       icon: faMobileAlt,
//       color: '#00b09b',
//       members: 90
//     },
//     {
//       id: 5,
//       name: 'Gaming Club',
//       description: 'Creating interactive games and understanding game development engines and principles.',
//       icon: faGamepad,
//       color: '#8E2DE2',
//       members: 70
//     },
//     {
//       id: 6,
//       name: 'Cloud Computing Club',
//       description: 'Exploring cloud technologies, serverless architectures, and distributed systems.',
//       icon: faCloud,
//       color: '#F37335',
//       members: 55
//     }
//   ];

//   return (
//     <section id="clubs" className="relative  pt-20 pb-[150px] overflow-hidden"
//   style={{backgroundColor: 'var(--section-bg)'}}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Clubs</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">Join our vibrant student communities to enhance your skills and network with like-minded peers</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
//           {clubs.map((club, index) => (
//             <motion.div
//               key={club.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ 
//                 y: -10,
//                 transition: { duration: 0.3, ease: "easeOut" }
//               }}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl h-full"
//             >
//               <div className="p-6 flex flex-col items-center text-center">
//                 <div 
//                   className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white text-2xl shadow-lg transform transition-transform duration-300 hover:scale-110"
//                   style={{ 
//                     backgroundColor: club.color,
//                     boxShadow: `0 10px 15px -3px ${club.color}40, 0 4px 6px -4px ${club.color}30`
//                   }}
//                 >
//                   <FontAwesomeIcon icon={club.icon} size="lg" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">{club.name}</h3>
//                 <p className="text-gray-600 mb-6 px-2">{club.description}</p>
//                 <div className="mt-auto w-full flex justify-center">
//                   <span className="text-gray-500 text-sm bg-gray-100 px-4 py-2 rounded-full">
//                     {club.members} Members
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute -bottom-[130px] left-0 w-full leading-[0] z-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
//           <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Clubs;
import React from 'react';
import { Users, Calendar, Award, TrendingUp } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    {
      id: "AWS",
      name: "AWS Student Club",
      logo: "images/clubs/aws.webp",
      events: "25+",
      members: "150+",
      description: "Cloud computing and AWS certification training",
      color: "#FF9900", // AWS Orange
      gradient: "from-orange-400 to-orange-600",
      link: "https://acc.charusat.ac.in/"
    },
    {
      id: "DS",
      name: "Data Science Club",
      logo: "images/clubs/DSLogo.webp", 
      events: "30+",
      members: "120+",
      description: "Machine learning and data analytics projects",
      color: "#4285F4", // Google Blue
      gradient: "from-blue-400 to-blue-600",
      link: "https://datascienceclub.charusat.ac.in/"
    },
    {
      id: "CPS",
      name: "Competitive Programming Squad",
      logo: "images/clubs/CPSQAUD.webp",
      events: "40+",
      members: "200+",
      description: "Algorithmic problem solving and contests",
      color: "#34A853", // Google Green
      gradient: "from-green-400 to-green-600",
      link: ""
    },
    {
      id: "Eloquence",
      name: "Eloquence Club",
      logo: "images/clubs/eloquence_logo.webp",
      events: "35+",
      members: "180+",
      description: "Public speaking and communication skills",
      color: "#9C27B0", // Purple
      gradient: "from-purple-400 to-purple-600",
      link: ""
    }
  ];

  return (
    <section 
      id="student-clubs" 
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex items-center py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      {/* Background overlay with texture */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-blue-900/30 to-blue-900/40"></div> */}
    
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Student Clubs
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect, learn, and grow with fellow students in our active clubs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {clubs.map((club, index) => {
            const clickable = !!club.link;
            return (
              <div
                key={club.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'slideInUp 0.8s ease-out forwards',
                  cursor: clickable ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = club.color + '15';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '';
                }}
                onClick={clickable ? () => window.open(club.link, '_blank', 'noopener,noreferrer') : undefined}
                tabIndex={clickable ? 0 : -1}
                role={clickable ? 'button' : undefined}
                aria-label={clickable ? `Visit ${club.name} website` : undefined}
              >
                {/* Logo Container */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div className="w-36 h-36 bg-white rounded-3xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                    <img 
                      src={club.logo} 
                      alt={club.name}
                      className="w-full h-full object-contain rounded-3xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gray-200 rounded-lg items-center justify-center text-gray-500 text-sm hidden font-bold"
                    >
                      {club.id}
                    </div>
                  </div>
                </div>

                {/* Club Name */}
                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {club.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center text-sm mb-0 leading-relaxed">
                  {club.description}
                </p>

                {/* Decorative element */}
                <div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: club.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
      `}</style>
    </section>
  );
}

export default Clubs;
