import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../styles/components/alumni.css';

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: 'Rahul Sharma',
      image: '/images/alumni/alumni1.jpg',
      position: 'Senior Software Engineer',
      company: 'Google',
      batch: '2015',
      quote: 'The foundation I received at the IT department helped me achieve my dreams.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 2,
      name: 'Priya Patel',
      image: '/images/alumni/alumni2.jpg',
      position: 'CTO',
      company: 'Tech Innovators',
      batch: '2012',
      quote: 'The practical exposure and industry connections were invaluable for my career.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      image: '/images/alumni/alumni3.jpg',
      position: 'Founder & CEO',
      company: 'CloudSecure',
      batch: '2010',
      quote: 'The entrepreneurial spirit fostered by the department gave me the confidence to start my own venture.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 4,
      name: 'Neha Kapoor',
      image: '/images/alumni/alumni4.jpg',
      position: 'Product Manager',
      company: 'Microsoft',
      batch: '2016',
      quote: 'The holistic education I received prepared me not just for technical roles but for leadership positions.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 5,
      name: 'Rajesh Verma',
      image: '/images/alumni/alumni5.jpg',
      position: 'AI Research Scientist',
      company: 'DeepMind',
      batch: '2014',
      quote: 'The research opportunities during my time at the department laid the foundation for my career in AI.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 6,
      name: 'Ananya Singh',
      image: '/images/alumni/alumni6.jpg',
      position: 'VP Engineering',
      company: 'Fintech Solutions',
      batch: '2011',
      quote: 'The diverse project experiences and industry exposure helped me grow as a technical leader.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  ];

  return (
    <section id="alumni" className="alumni-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Notable Alumni</h2>
          <div className="title-underline"></div>
          <p>Our graduates have gone on to achieve remarkable success in their careers</p>
        </div>
        
        <Row>
          {alumni.map((alum) => (
            <Col lg={4} md={6} className="mb-4" key={alum.id} data-aos="fade-up" data-aos-delay={alum.id * 100}>
              <motion.div 
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="alumni-card">
                  <div className="alumni-image">
                    <img src={alum.image} alt={alum.name} />
                    <div className="alumni-social">
                      <a href={alum.linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a href={alum.twitter} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                  </div>
                  <Card.Body>
                    <h3>{alum.name}</h3>
                    <p className="position">{alum.position} at {alum.company}</p>
                    <p className="batch">Batch of {alum.batch}</p>
                    <div className="quote">
                      <p>"{alum.quote}"</p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        {/* <div className="text-center mt-5" data-aos="fade-up">
          <a href="#alumni-network" className="alumni-network-btn">Join Our Alumni Network</a>
        </div> */}
      </Container>
      
      <div className="alumni-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#dbdada" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Alumni;