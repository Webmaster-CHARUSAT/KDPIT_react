import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers, faAward, faTrophy, faArrowRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Recruiters = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const recruiters = [
    { id: 1, name: 'Google', logo: '/images/recruiters/1.webp', category: 'Tech Giants' },
    { id: 2, name: 'Microsoft', logo: '/images/recruiters/2.webp', category: 'Tech Giants' },
    { id: 3, name: 'Amazon', logo: '/images/recruiters/3.webp', category: 'E-commerce' },
    { id: 4, name: 'Apple', logo: '/images/recruiters/4.webp', category: 'Tech Giants' },
    { id: 5, name: 'Meta', logo: '/images/recruiters/5.webp', category: 'Social Media' },
    { id: 6, name: 'Netflix', logo: '/images/recruiters/6.webp', category: 'Entertainment' },
    { id: 7, name: 'Tesla', logo: '/images/recruiters/7.webp', category: 'Automotive' },
    { id: 8, name: 'Adobe', logo: '/images/recruiters/8.webp', category: 'Software' },
    { id: 9, name: 'Salesforce', logo: '/images/recruiters/9.webp', category: 'CRM' },
    { id: 10, name: 'Oracle', logo: '/images/recruiters/10.webp', category: 'Database' },
    { id: 11, name: 'IBM', logo: '/images/recruiters/11.webp', category: 'Enterprise' },
    { id: 12, name: 'Spotify', logo: '/images/recruiters/12.webp', category: 'Music' },
    { id: 13, name: 'Uber', logo: '/images/recruiters/13.webp', category: 'Transportation' },
    { id: 14, name: 'Airbnb', logo: '/images/recruiters/14.webp', category: 'Travel' },
    { id: 15, name: 'LinkedIn', logo: '/images/recruiters/15.webp', category: 'Professional' },
    { id: 16, name: 'Slack', logo: '/images/recruiters/16.webp', category: 'Communication' },
    { id: 17, name: 'Zoom', logo: '/images/recruiters/17.webp', category: 'Video Conferencing' },
    { id: 18, name: 'Shopify', logo: '/images/recruiters/18.webp', category: 'E-commerce' },
    { id: 19, name: 'Stripe', logo: '/images/recruiters/19.webp', category: 'Fintech' }
  ];

  const placementStats = [
    { 
      id: 1, 
      value: 98, 
      suffix: '%', 
      title: 'Placement Rate',
      subtitle: 'Students Successfully Placed',
      icon: faUsers,
      color: 'from-emerald-500 to-teal-600'
    },
    { 
      id: 2, 
      value: 8.5, 
      suffix: ' LPA', 
      title: 'Average Package',
      subtitle: 'Annual Salary',
      icon: faAward,
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      id: 3, 
      value: 24, 
      suffix: ' LPA', 
      title: 'Highest Package',
      subtitle: 'Record Achievement',
      icon: faTrophy,
      color: 'from-amber-500 to-orange-600'
    },
    { 
      id: 4, 
      value: 120, 
      suffix: '+', 
      title: 'Companies Visited',
      subtitle: 'Recruitment Partners',
      icon: faBuilding,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    
    if (scrollWidth <= clientWidth) return;

    const scrollStep = 1;
    const scrollDelay = 30;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollWidth - clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    };

    const intervalId = setInterval(scroll, scrollDelay);
    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  // Duplicate recruiters for seamless scrolling
  const duplicatedRecruiters = [...recruiters, ...recruiters];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="recruiters" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faBuilding} className="text-white text-2xl" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Prestigious Recruiters
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our graduates are sought after by industry leaders worldwide. Join the legacy of excellence and innovation.
          </p>
        </motion.div>

        {/* Placement Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          {placementStats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="p-8 text-center relative z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                </motion.div>
                
                <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {isStatsInView && (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  )}
                  <span className="text-3xl">{stat.suffix}</span>
                </h3>
                <p className="text-gray-800 font-semibold text-lg mb-1">{stat.title}</p>
                <p className="text-gray-500 text-sm">{stat.subtitle}</p>
              </div>
              
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recruiters Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Industry Leaders Who Trust Us
              </h3>
              <p className="text-gray-600">Top companies that recruit our talented graduates</p>
            </div>
            
            {/* Auto-scroll control */}
            <motion.button
              onClick={toggleAutoScroll}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon 
                icon={isAutoScrolling ? faPause : faPlay} 
                className="text-indigo-600 text-sm" 
              />
              <span className="text-sm font-medium text-gray-700">
                {isAutoScrolling ? 'Pause' : 'Play'}
              </span>
            </motion.button>
          </div>

          {/* Recruiters Carousel */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              {duplicatedRecruiters.map((recruiter, index) => (
                <motion.div
                  key={`${recruiter.id}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-48 h-32 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <img 
                      src={recruiter.logo} 
                      alt={recruiter.name} 
                      className="max-w-full max-h-20 object-contain transition-all duration-300 group-hover:scale-110 relative z-10"
                    />
                    
                    {/* Company name tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {recruiter.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Placement Records</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Recruiters;