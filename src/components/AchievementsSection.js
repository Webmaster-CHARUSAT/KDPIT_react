import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faCertificate, faAward, faGraduationCap, 
         faLaptopCode, faFlask, faUsers, faChalkboardTeacher, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/achievements.css';
import Wave from './wave';

const AchievementsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample achievement data
  const achievements = [
    {
      id: 1,
      title: "First Prize in National Hackathon",
      description: "Team of 4 students won first prize in the National Coding Hackathon organized by Microsoft.",
      date: "March 15, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faTrophy,
      iconColor: "#FFD700",
      participants: ["Rahul Sharma", "Priya Patel", "Amit Kumar", "Neha Singh"],
      details: "The 48-hour hackathon focused on developing solutions for sustainable development goals. Our students created an AI-powered application that helps optimize water usage in agriculture, earning them the top prize of ₹1,00,000 and internship opportunities at Microsoft."
    },
    {
      id: 2,
      title: "Research Paper Published in IEEE Journal",
      description: "Dr. Rajesh Verma published a paper on 'Advanced Machine Learning Algorithms for Healthcare' in the IEEE Journal.",
      date: "January 10, 2023",
      category: "faculty",
      type: "publication",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faNewspaper,
      iconColor: "#4e54c8",
      participants: ["Dr. Rajesh Verma"],
      details: "The research paper explores novel machine learning approaches for early disease detection and has been cited by researchers from top universities worldwide. This publication has positioned our department as a leader in healthcare AI research."
    },
    {
      id: 3,
      title: "Google Summer of Code Selection",
      description: "Three students selected for Google Summer of Code program with stipends of $3000 each.",
      date: "April 20, 2023",
      category: "student",
      type: "program",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faLaptopCode,
      iconColor: "#4285F4",
      participants: ["Vikram Mehta", "Sanya Kapoor", "Arjun Nair"],
      details: "The students will be contributing to open-source projects over the summer. Vikram will work on TensorFlow, Sanya on Kubernetes, and Arjun on Flutter. This is the highest number of selections from our college in a single year."
    },
    {
      id: 4,
      title: "Best Teacher Award",
      description: "Prof. Anita Desai received the Best Teacher Award from the State Education Department.",
      date: "September 5, 2022",
      category: "faculty",
      type: "award",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faChalkboardTeacher,
      iconColor: "#E91E63",
      participants: ["Prof. Anita Desai"],
      details: "The award recognizes her innovative teaching methodologies and dedication to student mentorship. Prof. Desai has developed a unique project-based learning approach that has significantly improved student engagement and learning outcomes."
    },
    {
      id: 5,
      title: "Smart India Hackathon Runners-up",
      description: "Team of 6 students secured second place in Smart India Hackathon 2023.",
      date: "February 28, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faMedal,
      iconColor: "#C0C0C0",
      participants: ["Karan Malhotra", "Deepika Reddy", "Farhan Khan", "Meera Joshi", "Rohan Singhania", "Tanvi Gupta"],
      details: "The team developed a blockchain-based solution for supply chain transparency in the agriculture sector. Their project was commended for its practical implementation and scalability potential."
    },
    {
      id: 6,
      title: "Research Grant of ₹50 Lakhs",
      description: "Dr. Sunil Mehta and team secured a research grant from the Department of Science and Technology.",
      date: "June 15, 2022",
      category: "faculty",
      type: "grant",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faFlask,
      iconColor: "#9C27B0",
      participants: ["Dr. Sunil Mehta", "Dr. Priya Sharma", "Dr. Anil Kumar"],
      details: "The grant will fund research on quantum computing applications in cryptography. The project aims to develop quantum-resistant encryption algorithms that can withstand attacks from future quantum computers."
    },
    {
      id: 7,
      title: "ACM ICPC Regional Finalists",
      description: "Three teams qualified for the ACM ICPC Asia Regional Finals.",
      date: "November 12, 2022",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faLaptopCode,
      iconColor: "#FF5722",
      participants: ["Team Alpha", "Team Beta", "Team Gamma"],
      details: "This is the first time our college has had three teams qualifying for the regional finals. The teams underwent rigorous training for six months under the guidance of our algorithmic programming club mentors."
    },
    {
      id: 8,
      title: "Patent Granted for IoT Innovation",
      description: "Prof. Ramesh Kumar and two students granted patent for their IoT-based water quality monitoring system.",
      date: "July 7, 2022",
      category: "faculty",
      type: "patent",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faCertificate,
      iconColor: "#4CAF50",
      participants: ["Prof. Ramesh Kumar", "Aditya Sharma", "Ishita Patel"],
      details: "The patented system uses low-cost sensors and machine learning algorithms to detect water contaminants in real-time. The technology has been adopted by the local municipal corporation for monitoring water quality in three districts."
    },
    {
      id: 9,
      title: "Microsoft Imagine Cup National Winners",
      description: "Team 'TechNova' won the national round of Microsoft Imagine Cup and will represent India in the world finals.",
      date: "March 30, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faTrophy,
      iconColor: "#2196F3",
      participants: ["Shreya Desai", "Varun Kapoor", "Zoya Khan", "Dhruv Patel"],
      details: "Their project 'EcoScan' is an AI-powered mobile app that identifies plant diseases and suggests organic remedies. The team will now compete in the world finals in Seattle with a chance to win $100,000."
    },
    {
      id: 10,
      title: "National Teaching Innovation Award",
      description: "Dr. Meenakshi Singh received the National Award for Innovation in Teaching Methodology.",
      date: "October 5, 2022",
      category: "faculty",
      type: "award",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faAward,
      iconColor: "#FFC107",
      participants: ["Dr. Meenakshi Singh"],
      details: "Dr. Singh was recognized for developing the 'Flip-Blend-Assess' teaching model that combines flipped classroom, blended learning, and continuous assessment techniques. The model has been adopted by several universities across the country."
    },
    {
      id: 11,
      title: "International Robotics Competition Winners",
      description: "Robotics team won first place at the International Robotics Challenge held in Singapore.",
      date: "May 18, 2023",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faTrophy,
      iconColor: "#FFD700",
      participants: ["Robotics Club Team"],
      details: "The team designed an autonomous rescue robot that can navigate disaster zones and identify survivors. Their innovation stood out for its advanced sensor integration and efficient path-finding algorithms."
    },
    {
      id: 12,
      title: "Fulbright Scholarship",
      description: "Prof. Anand Sharma awarded prestigious Fulbright Scholarship for research at MIT.",
      date: "April 3, 2023",
      category: "faculty",
      type: "scholarship",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faGraduationCap,
      iconColor: "#3F51B5",
      participants: ["Prof. Anand Sharma"],
      details: "The scholarship will allow Prof. Sharma to conduct research on advanced neural networks at MIT for six months. This collaboration is expected to establish long-term research partnerships between our institution and MIT."
    },
    {
      id: 13,
      title: "Gold Medal at International Olympiad",
      description: "Riya Patel won gold medal at International Informatics Olympiad.",
      date: "August 22, 2022",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faMedal,
      iconColor: "#FFD700",
      participants: ["Riya Patel"],
      details: "Riya competed against participants from 89 countries and secured the top position with a perfect score in the algorithmic round. She is the first student from our college to achieve this distinction."
    },
    {
      id: 14,
      title: "Industry Collaboration Grant",
      description: "Department secured ₹75 Lakhs industry collaboration grant with Infosys for AI research.",
      date: "February 10, 2023",
      category: "faculty",
      type: "grant",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faUsers,
      iconColor: "#607D8B",
      participants: ["Dr. Ramesh Kumar", "Dr. Sunita Verma", "Infosys Research Team"],
      details: "The collaboration focuses on developing AI solutions for healthcare diagnostics. The project will provide internship and research opportunities for 15 students annually over the next three years."
    },
    {
      id: 15,
      title: "NASA Space Apps Challenge Global Finalists",
      description: "Team 'Cosmic Coders' selected as global finalists in NASA Space Apps Challenge.",
      date: "October 15, 2022",
      category: "student",
      type: "competition",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      icon: faLaptopCode,
      iconColor: "#1565C0",
      participants: ["Aryan Mehta", "Nisha Sharma", "Karthik Iyer", "Leela Menon"],
      details: "The team developed a mobile application that uses NASA satellite data to predict and visualize climate change impacts on local ecosystems. They were among the top 10 teams selected globally from over 2,000 submissions."
    }
  ];

  // Filter achievements based on category and search term
  const filteredAchievements = achievements
    .filter(achievement => {
      if (filter === 'all') return true;
      return achievement.category === filter;
    })
    .filter(achievement => {
      if (!searchTerm) return true;
      return (
        achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        achievement.participants.some(participant => 
          participant.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

  // Visible achievements based on current count
  const visibleAchievements = filteredAchievements.slice(0, visibleCount);

  // Handle "View More" button click
  const handleViewMore = () => {
    if (visibleCount + 6 >= filteredAchievements.length) {
      setVisibleCount(filteredAchievements.length);
    } else {
      setVisibleCount(visibleCount + 4);
    }
  };

  // Handle achievement card click to show details
  const handleCardClick = (achievement) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(4);
  }, [filter, searchTerm]);

  // Get icon based on achievement type
  const getTypeIcon = (type) => {
    switch(type) {
      case 'competition': return faTrophy;
      case 'publication': return faNewspaper;
      case 'award': return faAward;
      case 'grant': return faFlask;
      case 'patent': return faCertificate;
      case 'program': return faLaptopCode;
      case 'scholarship': return faGraduationCap;
      default: return faAward;
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Achievements</h2>
          <div className="title-underline"></div>
          <p>Celebrating excellence and innovation in our academic community</p>
        </div>

        <div className="achievements-filter" data-aos="fade-up">
          <div className="filter-buttons">
            <Button 
              variant={filter === 'all' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('all')}
              className="filter-btn"
            >
              All
            </Button>
            <Button 
              variant={filter === 'student' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('student')}
              className="filter-btn"
            >
              Student Achievements
            </Button>
            <Button 
              variant={filter === 'faculty' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('faculty')}
              className="filter-btn"
            >
              Faculty Achievements
            </Button>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search achievements..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <Row className="achievements-container">
          {visibleAchievements.length > 0 ? (
            visibleAchievements.map((achievement) => (
              <Col lg={3} md={6} className="mb-4" key={achievement.id}>
                <motion.div 
                  className="achievement-card"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  data-aos="fade-up"
                  data-aos-delay={(achievement.id % 3) * 100}
                  onClick={() => handleCardClick(achievement)}
                >
                  <div 
                    className="achievement-image" 
                    style={{ backgroundImage: `url(${achievement.image})` }}
                  >
                    <div className="achievement-overlay"></div>
                    <div className="achievement-icon" style={{ backgroundColor: achievement.iconColor }}>
                      <FontAwesomeIcon icon={achievement.icon} />
                    </div>
                    <Badge 
                      bg={achievement.category === 'student' ? 'info' : 'success'} 
                      className="category-badge"
                    >
                      {achievement.category === 'student' ? 'Student' : 'Faculty'}
                    </Badge>
                  </div>
                  <div className="achievement-content">
                    <Badge bg="secondary" className="type-badge">
                      <FontAwesomeIcon icon={getTypeIcon(achievement.type)} className="me-1" />
                      {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </Badge>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                    <div className="achievement-footer">
                      <span className="date">{achievement.date}</span>
                      <span className="view-details">View Details</span>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faAward} size="3x" className="mb-3" />
              <h3>No achievements found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </Row>

        {visibleCount < filteredAchievements.length && (
          <div className="text-center mt-4" data-aos="fade-up">
            <Button 
              variant="outline-primary" 
              className="view-more-btn"
              onClick={handleViewMore}
            >
              View More <i className="fas fa-chevron-down ms-2"></i>
            </Button>
          </div>
        )}

        {/* Achievement Detail Modal */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          size="lg" 
          centered
          className="achievement-modal"
        >
          {selectedAchievement && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>
                  <FontAwesomeIcon 
                    icon={selectedAchievement.icon} 
                    style={{ color: selectedAchievement.iconColor }}
                    className="me-2" 
                  />
                  {selectedAchievement.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-image-container">
                  <img 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title} 
                    className="modal-image" 
                  />
                  <Badge 
                    bg={selectedAchievement.category === 'student' ? 'info' : 'success'} 
                    className="modal-category-badge"
                  >
                    {selectedAchievement.category === 'student' ? 'Student Achievement' : 'Faculty Achievement'}
                  </Badge>
                </div>
                
                <div className="achievement-details">
                  <div className="detail-row">
                    <h5>Date:</h5>
                    <p>{selectedAchievement.date}</p>
                  </div>
                  
                  <div className="detail-row">
                    <h5>Category:</h5>
                    <Badge bg="secondary">
                      {selectedAchievement.type.charAt(0).toUpperCase() + selectedAchievement.type.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="detail-row">
                    <h5>Participants:</h5>
                    <div className="participants-list">
                      {selectedAchievement.participants.map((participant, index) => (
                        <Badge bg="light" text="dark" key={index} className="participant-badge">
                          {participant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-row description-row">
                    <h5>Description:</h5>
                    <p>{selectedAchievement.details || selectedAchievement.description}</p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary">
                  Share Achievement
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
      {/* <Wave/>  */}

      <div className="achievements-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};
export default AchievementsSection;