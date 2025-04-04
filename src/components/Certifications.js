import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      logo: '/images/certifications/aws.png',
      description: 'Learn to design distributed systems on AWS. This certification validates your expertise in designing and deploying scalable systems on AWS.',
      duration: '4 months',
      level: 'Advanced',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Networking']
    },
    {
      id: 2,
      name: 'Microsoft Azure Fundamentals',
      provider: 'Microsoft',
      logo: '/images/certifications/azure.png',
      description: 'A foundational understanding of cloud concepts and Microsoft Azure services, workloads, security, privacy, pricing, and support.',
      duration: '2 months',
      level: 'Beginner',
      skills: ['Cloud Basics', 'Azure Services', 'Security', 'Pricing Models']
    },
    {
      id: 3,
      name: 'Cisco Certified Network Associate',
      provider: 'Cisco',
      logo: '/images/certifications/cisco.png',
      description: 'Develop skills for implementing and supporting networks in small to medium-sized businesses and enterprises.',
      duration: '6 months',
      level: 'Intermediate',
      skills: ['Network Fundamentals', 'IP Connectivity', 'Security', 'Automation']
    },
    {
      id: 4,
      name: 'Google Cloud Professional',
      provider: 'Google',
      logo: '/images/certifications/google.png',
      description: 'Demonstrate your expertise in setting up, configuring, and managing production solutions on Google Cloud.',
      duration: '3 months',
      level: 'Advanced',
      skills: ['Cloud Infrastructure', 'GCP Services', 'Security', 'Scalability']
    },
    {
      id: 5,
      name: 'Oracle Certified Professional Java Developer',
      provider: 'Oracle',
      logo: '/images/certifications/oracle.png',
      description: 'Validate your understanding of Java fundamentals, object-oriented concepts, and core APIs for application development.',
      duration: '5 months',
      level: 'Intermediate',
      skills: ['Java Programming', 'OOP', 'API Design', 'Database Connectivity']
    },
    {
      id: 6,
      name: 'IBM Data Science Professional',
      provider: 'IBM',
      logo: '/images/certifications/ibm.png',
      description: 'Master the skills required in data science, including open source tools, Python, databases, SQL, data visualization, and machine learning.',
      duration: '6 months',
      level: 'Advanced',
      skills: ['Python', 'Machine Learning', 'Data Visualization', 'Statistical Analysis']
    }
  ];

  const handleShowDetails = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const getBadgeColor = (level) => {
    switch(level) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Advanced':
        return 'bg-purple-600';
      default:
        return 'bg-indigo-600';
    }
  };

  return (
    <section id="certifications" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industry Recognized Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Enhance your skills and employability with our industry-partnered certification programs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" } // Faster hover with 0.15s duration
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl h-full group"
              
            >
              <div className="h-[120px] flex items-center justify-center p-5 bg-gray-50 overflow-hidden">
                <img 
                  src={cert.logo} 
                  alt={cert.provider} 
                  className="max-h-[80px] max-w-full transition-transform duration-200 group-hover:scale-110" // Faster image scaling
                />
              </div>
              <div className="p-6 relative">
                <span className={`absolute -top-4 right-6 ${getBadgeColor(cert.level)} text-white text-xs font-medium px-4 py-1 rounded-full`}>
                  {cert.level}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-sm mb-4">by {cert.provider}</p>
                <p className="text-gray-600 mb-6 min-h-[80px]">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>

            {/* Modal panel */}
            {/* <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              {selectedCert && (
                <>
                  <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-indigo-600">{selectedCert.name}</h3>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close</span>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  
                  <div className="px-6 py-4">
                    <div className="flex items-center mb-6">
                      <img 
                        src={selectedCert.logo} 
                        alt={selectedCert.provider} 
                        className="h-16 mr-5"
                      />
                      <div>
                        <h5 className="text-lg font-medium text-gray-800 mb-1">{selectedCert.provider}</h5>
                        <div className="flex items-center">
                          <span className={`${getBadgeColor(selectedCert.level)} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                            {selectedCert.level}
                          </span>
                          <span className="ml-3 text-gray-500 text-sm">
                            <FontAwesomeIcon icon={faClock} className="mr-1" /> 
                            {selectedCert.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <h5 className="text-lg font-medium text-gray-800 mb-2">Description</h5>
                    <p className="text-gray-600 mb-6">{selectedCert.description}</p>
                    
                    <h5 className="text-lg font-medium text-gray-800 mb-3">Skills You'll Gain</h5>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedCert.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <h5 className="text-lg font-medium text-gray-800 mb-3">Certification Process</h5>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li className="mb-1">Complete the required coursework</li>
                      <li className="mb-1">Pass practice assessments</li>
                      <li className="mb-1">Schedule and take the certification exam</li>
                      <li>Receive digital badge upon successful completion</li>
                    </ul>
                  </div>
                  
                  <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
                    <button 
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </>
              )}
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;