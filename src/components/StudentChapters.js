import React from 'react';
import { motion } from 'framer-motion';

const StudentChapters = () => {
  const chapters = [
    {
      id: 1,
      name: 'IEEE Student Branch',
      logo: '/images/chapters/ieee.png',
      description: 'Promoting technological innovation and excellence for the benefit of humanity.',
      members: 85,
      activities: ['Technical Workshops', 'Paper Presentations', 'Industry Visits'],
      color: '#006699'
    },
    {
      id: 2,
      name: 'ACM Student Chapter',
      logo: '/images/chapters/acm.png',
      description: 'Advancing computing as a science and profession through leadership, education, and knowledge sharing.',
      members: 72,
      activities: ['Coding Competitions', 'Research Symposiums', 'Tech Talks'],
      color: '#0085ca'
    },
    {
      id: 3,
      name: 'CSI Student Chapter',
      logo: '/images/chapters/csi.png',
      description: 'Computer Society of India student branch focused on facilitating research, knowledge sharing, and career enhancement.',
      members: 68,
      activities: ['Software Development', 'Technical Seminars', 'Hackathons'],
      color: '#d62828'
    }
  ];

  return (
    <section id="chapters" className=" py-20"
    style={{backgroundColor: '#e1e1e1'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Chapters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Be part of prestigious professional organizations to expand your knowledge and network</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2, ease: "easeOut" } // Faster hover with 0.15s duration
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl h-full overflow-hidden"
            >
              <div 
                className="h-[120px] flex items-center justify-center relative"
                style={{ backgroundColor: chapter.color }}
              >
                <motion.div 
                  className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center p-4 shadow-md absolute top-[70px] z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.15, type: "spring", stiffness: 400 } // Faster logo hover with spring physics
                  }}
                >
                  <img src={chapter.logo} alt={chapter.name} className="max-w-[80%] max-h-[80%]" />
                </motion.div>
              </div>
              
              <div className="pt-[70px] px-6 pb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{chapter.name}</h3>
                <p className="text-gray-600 mb-5">{chapter.description}</p>
                
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-indigo-600 mb-1">{chapter.members}</h4>
                    <p className="text-gray-500 text-sm">Members</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-indigo-600 mb-1">{chapter.activities.length}</h4>
                    <p className="text-gray-500 text-sm">Activities</p>
                  </div>
                </div>
                
                <div className="text-left mb-6">
                  <h5 className="text-lg font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100 relative">
                    Key Activities
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                  </h5>
                  <ul className="list-disc pl-5">
                    {chapter.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-600 mb-1">{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentChapters;