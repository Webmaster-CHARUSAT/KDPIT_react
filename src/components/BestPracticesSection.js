// import React from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faGraduationCap, faCertificate, faChalkboardTeacher, faFlask, 
//   faBriefcase, faPuzzlePiece, faUserFriends, faUsers, 
//   faUserCheck, faLaptop 
// } from '@fortawesome/free-solid-svg-icons';

// const BestPracticesSection = () => {
//   // Best practices data
//   const bestPractices = [
//     {
//       id: 1,
//       title: "Academic Enrichment through MOOC Certification",
//       description: "like Coursera, NPTEL",
//       icon: faGraduationCap,
//       color: "#4e54c8"
//     },
//     {
//       id: 2,
//       title: "Industry Recognized Certification Courses",
//       description: "like: AWS, EC-COUNCIL, ORACLE, MICROSOFT",
//       icon: faCertificate,
//       color: "#ff5e62"
//     },
//     {
//       id: 3,
//       title: "Experienced Faculties",
//       description: "",
//       icon: faChalkboardTeacher,
//       color: "#E91E63"
//     },
//     {
//       id: 4,
//       title: "State-of-art Laboratory Facilities",
//       description: "",
//       icon: faFlask,
//       color: "#9C27B0"
//     },
//     {
//       id: 5,
//       title: "Excellent Placement Record",
//       description: "and Pre-Placement Orientation Activity",
//       icon: faBriefcase,
//       color: "#4CAF50"
//     },
//     {
//       id: 6,
//       title: "Competitive Exam Preparation",
//       description: "",
//       icon: faPuzzlePiece,
//       color: "#FF9800"
//     },
//     {
//       id: 7,
//       title: "Continuous Evaluation and Collaborative Learning Environment",
//       description: "",
//       icon: faUserFriends,
//       color: "#3F51B5"
//     },
//     {
//       id: 8,
//       title: "Student Clubs",
//       description: "like: AWS Student Club, Eager Beavers, Data Science Club, CP Squad",
//       icon: faUsers,
//       color: "#FF5722"
//     },
//     {
//       id: 9,
//       title: "One to One Student Mentoring",
//       description: "",
//       icon: faUserCheck,
//       color: "#607D8B"
//     },
//     {
//       id: 10,
//       title: "Intense Use Of Learning Management Software",
//       description: "",
//       icon: faLaptop,
//       color: "#00BCD4"
//     }
//   ];

//   return (
//   <section id="best-practices" className="relative bg-white/70 overflow-hidden">
//       <div className="container mx-auto px-4 pb-40">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Best Practices</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to excellence through innovative educational approaches</p>
//         </div>

//         {/* Practices Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//           {bestPractices.map((practice, index) => (
//             <motion.div 
//               key={practice.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-stretch h-full">
//                 {/* Icon Section */}
//                 <div 
//                   className="w-20 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:w-24"
//                   style={{ backgroundColor: `${practice.color}15` }}
//                 >
//                   <div 
//                     className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
//                     style={{ backgroundColor: `${practice.color}25` }}
//                   >
//                     <FontAwesomeIcon 
//                       icon={practice.icon} 
//                       className="text-xl transition-all duration-300"
//                       style={{ color: practice.color }}
//                     />
//                   </div>
//                 </div>
                
//                 {/* Content Section - Now vertically centered */}
//                 <div className="flex-1 p-3 border-l border-gray-100 flex flex-col justify-center">
//                   <h3 className="text-base font-semibold text-gray-800 mb-1 leading-tight">
//                     {practice.title}
//                   </h3>
//                   {practice.description && (
//                     <p className="text-sm text-gray-600 m-0">
//                       {practice.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
      
//       {/* Bottom Wave */}
//       <div className="absolute -bottom-12 left-0 w-full overflow-hidden leading-[0] z-10">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
//           <path fill="#f3f4f6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default BestPracticesSection;

// ----------- on hover color funcitonality will work after removing bg white from card

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faCertificate, faChalkboardTeacher, faFlask, 
  faBriefcase, faPuzzlePiece, faUserFriends, faUsers, 
  faUserCheck, faLaptop 
} from '@fortawesome/free-solid-svg-icons';

const BestPracticesSection = () => {
  // Best practices data with updated descriptions and bullet points
  const bestPractices = [
    {
      id: 1,
      title: "MOOC Certifications",
      description: "Enhancing knowledge through online courses.",
      icon: faGraduationCap,
      color: "#4e54c8",
      bullets: [
        "Coursera, NPTEL, edX",
        "Skill-based learning"
      ]
    },
    {
      id: 2,
      title: "Industry Certifications",
      description: "Professional credentials from tech giants.",
      icon: faCertificate,
      color: "#ff5e62",
      bullets: [
        "AWS, Oracle, Microsoft",
        "Career-boosting skills"
      ]
    },
    {
      id: 3,
      title: "Expert Faculty",
      description: "Learning from highly experienced educators.",
      icon: faChalkboardTeacher,
      color: "#E91E63",
      bullets: [
        "Dedicated professors",
        "Real-world insights"
      ]
    },
    {
      id: 4,
      title: "Advanced Laboratories",
      description: "Hands-on experience with modern facilities.",
      icon: faFlask,
      color: "#9C27B0",
      bullets: [
        "State-of-the-art equipment",
        "Practical experiments"
      ]
    },
    {
      id: 5,
      title: "Placement Excellence",
      description: "Strong placement record with dedicated support.",
      icon: faBriefcase,
      color: "#4CAF50",
      bullets: [
        "Pre-placement training",
        "Career guidance"
      ]
    },
    {
      id: 6,
      title: "Competitive Exam Prep",
      description: "Guidance and resources for national exams.",
      icon: faPuzzlePiece,
      color: "#FF9800",
      bullets: [
        "GATE, GRE, and more",
        "Comprehensive study material"
      ]
    },
    {
      id: 7,
      title: "Collaborative Learning",
      description: "Continuous evaluation and teamwork-focused environment.",
      icon: faUserFriends,
      color: "#3F51B5",
      bullets: [
        "Group projects",
        "Peer-to-peer learning"
      ]
    },
    {
      id: 8,
      title: "Vibrant Student Clubs",
      description: "Active participation in extracurricular activities.",
      icon: faUsers,
      color: "#FF5722",
      bullets: [
        "AWS Student Club",
        "Data Science Club"
      ]
    },
    {
      id: 9,
      title: "Personalized Mentoring",
      description: "One-to-one guidance for all-round development.",
      icon: faUserCheck,
      color: "#607D8B",
      bullets: [
        "Academic and career advice",
        "Personal growth"
      ]
    },
    {
      id: 10,
      title: "Smart Learning Tools",
      description: "Effective use of modern educational software.",
      icon: faLaptop,
      color: "#00BCD4",
      bullets: [
        "Learning management systems",
        "Interactive tools"
      ]
    }
  ];

  // Animation variants for the card reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="bg-white/70 py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Best Practices</h2>
          <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            Our commitment to excellence through innovative educational approaches.
          </p>
        </div>

        {/* Practices Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {bestPractices.map((practice) => (
            <motion.div
              key={practice.id}
              className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 cursor-pointer h-full flex flex-col justify-start text-center transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
                backgroundColor: `${practice.color}20`
              }}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{
                    backgroundColor: practice.color,
                    boxShadow: `0 4px 6px rgba(0,0,0,0.1)`
                  }}
                >
                  <FontAwesomeIcon icon={practice.icon} className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">
                  {practice.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{practice.description}</p>
              
              {/* <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 mt-auto text-left">
                <li className="font-medium text-gray-700">{practice.bullets[0]}</li>
                <li className="font-medium text-gray-700">{practice.bullets[1]}</li>
              </ul> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestPracticesSection;
