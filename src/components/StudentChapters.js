import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/components/studentchapters.css';

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
    <section id="chapters" className="chapters-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Student Chapters</h2>
          <div className="title-underline"></div>
          <p>Be part of prestigious professional organizations to expand your knowledge and network</p>
        </div>
        
        <Row className="justify-content-center">
          {chapters.map((chapter, index) => (
            <Col lg={4} md={6} className="mb-4" key={chapter.id} data-aos="fade-up" data-aos-delay={chapter.id * 100}>
              <Card className="chapter-card">
                <div className="chapter-header" style={{ backgroundColor: chapter.color }}>
                  <motion.div 
                    className="chapter-logo"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img src={chapter.logo} alt={chapter.name} />
                  </motion.div>
                </div>
                <Card.Body>
                  <h3>{chapter.name}</h3>
                  <p>{chapter.description}</p>
                  <div className="chapter-stats">
                    <div className="stat">
                      <h4>{chapter.members}</h4>
                      <p>Members</p>
                    </div>
                    <div className="stat">
                      <h4>{chapter.activities.length}</h4>
                      <p>Activities</p>
                    </div>
                  </div>
                  <div className="chapter-activities">
                    <h5>Key Activities</h5>
                    <ul>
                      {chapter.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="chapter-footer">
                    <a href="#join" className="join-btn">Join Chapter</a>
                    <a href="#learn" className="learn-more-btn">Learn More</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StudentChapters;