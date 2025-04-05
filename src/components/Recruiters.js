import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Recruiters = () => {
  const recruiters = [
    { 
      id: 1, 
      name: 'Google', 
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    { 
      id: 2, 
      name: 'Microsoft', 
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
    },
    { 
      id: 3, 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
    },
    { 
      id: 4, 
      name: 'IBM', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png'
    },
    { 
      id: 5, 
      name: 'TCS', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png'
    },
    { 
      id: 6, 
      name: 'Infosys', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png'
    },
    { 
      id: 7, 
      name: 'Wipro', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png'
    },
    { 
      id: 8, 
      name: 'Accenture', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png'
    },
    { 
      id: 9, 
      name: 'Oracle', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png'
    },
    { 
      id: 10, 
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png'
    },
    { 
      id: 11, 
      name: 'Cisco', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png'
    },
  ];

  const placementStats = [
    { id: 1, value: 98, suffix: '%', title: 'Placement Rate' },
    { id: 2, value: 8.5, suffix: ' LPA', title: 'Average Package' },
    { id: 3, value: 24, suffix: ' LPA', title: 'Highest Package' },
    { id: 4, value: 120, suffix: '+', title: 'Companies Visited' }
  ];

  return (
    <section id="recruiters" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Major Recruiters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our students are placed in top companies across the globe</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12" data-aos="fade-up">
          {recruiters.map((recruiter) => (
            <motion.div 
              key={recruiter.id}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="h-[100px] w-[150px] sm:w-[calc(33.333%-32px)] md:w-[calc(25%-32px)] lg:w-[calc(20%-32px)] xl:w-[calc(16.666%-32px)] bg-gray-50 rounded-lg shadow-md flex items-center justify-center p-3 overflow-hidden"
            >
              <img 
                src={recruiter.logo} 
                alt={recruiter.name} 
                className="max-w-[80%] max-h-[80px] object-contain transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={stat.id * 100}
            >
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
                <span className="text-3xl">{stat.suffix}</span>
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;