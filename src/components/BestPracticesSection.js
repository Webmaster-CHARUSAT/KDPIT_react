import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faCertificate, faChalkboardTeacher, faFlask, 
  faBriefcase, faPuzzlePiece, faUserFriends, faUsers, 
  faUserCheck, faLaptop 
} from '@fortawesome/free-solid-svg-icons';
import Wave from './wave';
import '../styles/components/bestpractices.css';

const BestPracticesSection = () => {
  // Best practices data with exactly your content
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
    <section id="best-practices" className="best-practices-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Best Practices</h2>
          <div className="title-underline"></div>
          <p>Our commitment to excellence through innovative educational approaches</p>
        </div>

        <div className="modern-practices-grid" data-aos="fade-up">
          {bestPractices.map((practice) => (
            <motion.div 
              className="modern-practice-card"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              key={practice.id}
            >
              <div className="card-left" style={{ backgroundColor: `${practice.color}15` }}>
                <div className="practice-icon" style={{ color: practice.color }}>
                  <FontAwesomeIcon icon={practice.icon} />
                </div>
              </div>
              <div className="card-right">
                <h3>{practice.title}</h3>
                {practice.description && <p>{practice.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      
      <div className="bestprac-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#dbdada" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default BestPracticesSection;