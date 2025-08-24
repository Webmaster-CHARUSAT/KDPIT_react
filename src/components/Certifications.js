import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faExternalLinkAlt, 
  faGraduationCap, 
  faAward,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      logo: 'images/certifications/AWS_Academy_logo.webp',
      description: 'Learn to design distributed systems on AWS. This certification validates your expertise in designing and deploying scalable systems on AWS.',
      duration: '4 months',
      level: 'Advanced',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Networking'],
      officialLink: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
    },
    {
      id: 2,
      name: 'EC Council',
      provider: 'EC Council',
      logo: '/images/certifications/ec-council.webp',
      description: 'Gain expertise in ethical hacking and security. EC Council certifications are globally recognized for information security skills.',
      duration: '2 months',
      level: 'Beginner',
      skills: ['Ethical Hacking', 'Cybersecurity', 'Penetration Testing', 'Security Analysis'],
      officialLink: 'https://www.eccouncil.org/programs/'
    },
    {
      id: 3,
      name: 'Cisco Certified Network Associate',
      provider: 'Cisco',
      logo: 'images/certifications/Cisco_Networking_Academy.webp',
      description: 'Develop skills for implementing and supporting networks in small to medium-sized businesses and enterprises.',
      duration: '6 months',
      level: 'Intermediate',
      skills: ['Network Fundamentals', 'IP Connectivity', 'Security', 'Automation'],
      officialLink: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html'
    },
    {
      id: 4,
      name: 'Comptia Academy Partner',
      provider: 'Comptia',
      logo: 'images/certifications/comptia_partner.webp',
      description: 'Access industry-standard certifications in IT fundamentals, security, networking, and cloud technologies through CompTIA.',
      duration: '3 months',
      level: 'Advanced',
      skills: ['IT Fundamentals', 'Security+', 'Network+', 'Cloud+'],
      officialLink: 'https://www.comptia.org/certifications'
    },
    {
      id: 5,
      name: 'Oracle Academy',
      provider: 'Oracle',
      logo: 'images/certifications/oracle.webp',
      description: 'Validate your understanding of Java fundamentals, object-oriented concepts, database management, and core Oracle technologies.',
      duration: '5 months',
      level: 'Intermediate',
      skills: ['Java Programming', 'OOP', 'Database Management', 'SQL'],
      officialLink: 'https://academy.oracle.com/'
    },
    {
      id: 6,
      name: 'NPTEL',
      provider: 'NPTEL',
      logo: 'images/certifications/NPTEL-Logo.webp',
      description: 'Access high-quality courses from IITs and IISc covering engineering, sciences, management and humanities with certification options.',
      duration: '6 months',
      level: 'Advanced',
      skills: ['Engineering', 'Computer Science', 'Electronics', 'Data Science'],
      officialLink: 'https://nptel.ac.in/'
    },
    {
      id: 7,
      name: 'Red Hat Academy',
      provider: 'Red Hat',
      logo: 'images/certifications/redhat.webp',
      description: 'Build expertise in Linux, containers, Kubernetes, automation, and cloud technologies with hands-on Red Hat certifications.',
      duration: '6 months',
      level: 'Advanced',
      skills: ['Linux', 'Containers', 'Kubernetes', 'Automation'],
      officialLink: 'https://www.redhat.com/en/services/training/red-hat-academy'
    }
  ];

  const getBadgeColor = (level) => {
    switch(level) {
      case 'Beginner':
        return 'from-green-400 to-green-500';
      case 'Intermediate':
        return 'from-blue-400 to-blue-500';
      case 'Advanced':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-indigo-500 to-indigo-600';
    }
  };

  const getBadgeIcon = (level) => {
    switch(level) {
      case 'Beginner':
        return faGraduationCap;
      case 'Intermediate':
        return faAward;
      case 'Advanced':
        return faAward;
      default:
        return faAward;
    }
  };

  return (
    <section id="certifications" className="bg-white/70 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industry Recognized Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Enhance your skills and employability with our industry-partnered certification programs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full hover:-translate-y-2 transform cursor-pointer"
              aria-label={`Learn more about ${cert.name}`}
            >
              {/* Card Header with Logo */}
              <div className="relative h-[120px] flex items-center justify-center p-5 bg-gray-50 overflow-hidden border-b border-gray-100">
                <img 
                  src={cert.logo} 
                  alt={cert.provider} 
                  className="max-h-[80px] max-w-full transition-transform duration-300 hover:scale-110"
                />
                
                {/* Level Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${getBadgeColor(cert.level)} text-white text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-sm`}>
                  <FontAwesomeIcon icon={getBadgeIcon(cert.level)} className="mr-1" />
                  <span>{cert.level}</span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 hover:text-indigo-600 transition-colors">{cert.name}</h3>
                <p className="text-gray-500 text-sm mb-3 flex items-center">
                  <span>by {cert.provider}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="mr-1 text-gray-400" />
                    {cert.duration}
                  </span>
                </p>
                
                <p className="text-gray-600 mb-6">{cert.description}</p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;