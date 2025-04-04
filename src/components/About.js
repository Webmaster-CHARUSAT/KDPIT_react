import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { id: 1, number: 25, suffix: '+', text: 'Faculty Members' },
    { id: 2, number: 1200, suffix: '+', text: 'Students' },
    { id: 3, number: 98, suffix: '%', text: 'Placement Rate' },
    { id: 4, number: 50, suffix: '+', text: 'Research Papers' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              {/* Main Image */}
              <img 
                src="/images/about/department.webp" 
                alt="Department Building" 
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
              
              {/* Department Highlight Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                <div className="text-sm font-medium uppercase tracking-wider">Excellence in Technology Education</div>
                <div className="text-xs mt-1 opacity-80">Established 2000</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 -top-10 -left-10"></div>
            <div className="absolute -z-10 w-48 h-48 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 -bottom-5 -right-5"></div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">Department of Information Technology</h3>
            <p className="text-gray-600 mb-6">
              Established in 2000, the Department of Information Technology at CSPIT has been at the forefront of technological education and research. We offer undergraduate and postgraduate programs designed to produce industry-ready professionals with strong technical foundations.
            </p>
            <p className="text-gray-600 mb-8">
              Our curriculum is regularly updated to reflect the latest technological trends and industry requirements. The department has well-equipped laboratories, experienced faculty, and strong industry connections that help our students excel in their careers.
            </p>
            
            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h4 className="text-lg font-semibold text-indigo-600 mb-3 pb-3 border-b border-indigo-100 relative">
                  Vision
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                </h4>
                <p className="text-gray-600 text-sm">
                  To develop IT professionals with ethical and human values through learner-centric education and research.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h4 className="text-lg font-semibold text-indigo-600 mb-3 pb-3 border-b border-indigo-100 relative">
                  Mission
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                </h4>
                <p className="text-gray-600 text-sm">
                  To impart quality education through innovative teaching-learning processes and state-of-the-art technologies in IT.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map(stat => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <CountUp end={stat.number} duration={2.5} />
                <span>{stat.suffix}</span>
              </h2>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;