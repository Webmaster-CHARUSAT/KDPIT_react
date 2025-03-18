import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import '../styles/components/about.css';

const About = () => {
  const stats = [
    { id: 1, number: 25, suffix: '+', text: 'Faculty Members' },
    { id: 2, number: 1200, suffix: '+', text: 'Students' },
    { id: 3, number: 98, suffix: '%', text: 'Placement Rate' },
    { id: 4, number: 50, suffix: '+', text: 'Research Papers' }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <div className="title-underline"></div>
        </div>
        
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <div className="about-image">
              <img 
                src="/images/about/department.jpg" 
                alt="Department Building" 
                className="img-fluid main-img"
              />
              <motion.div 
                className="floating-img-1"
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3
                }}
              >
                <img src="/images/about/floating1.jpg" alt="Lab" />
              </motion.div>
              <motion.div 
                className="floating-img-2"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4
                }}
              >
                <img src="/images/about/floating2.jpg" alt="Students" />
              </motion.div>
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left">
            <div className="about-content">
              <h3>Department of Information Technology</h3>
              <p>
                Established in 2000, the Department of Information Technology at CSPIT has been at the forefront of technological education and research. We offer undergraduate and postgraduate programs designed to produce industry-ready professionals with strong technical foundations.
              </p>
              <p>
                Our curriculum is regularly updated to reflect the latest technological trends and industry requirements. The department has well-equipped laboratories, experienced faculty, and strong industry connections that help our students excel in their careers.
              </p>
              
              <div className="vision-mission">
                <div className="vision">
                  <h4>Vision</h4>
                  <p>To develop IT professionals with ethical and human values through learner-centric education and research.</p>
                </div>
                <div className="mission">
                  <h4>Mission</h4>
                  <p>To impart quality education through innovative teaching-learning processes and state-of-the-art technologies in IT.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="stats-row">
          {stats.map(stat => (
            <Col md={6} lg={3} key={stat.id}>
              <Card className="stat-card" data-aos="zoom-in" data-aos-delay={stat.id * 100}>
                <Card.Body>
                  <h2>
                    <CountUp end={stat.number} duration={2.5} />
                    <span>{stat.suffix}</span>
                  </h2>
                  <p>{stat.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;