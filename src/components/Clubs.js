import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faShieldAlt, faMobileAlt, faGamepad, faCloud } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/clubs.css';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: 'Coding Club',
      description: 'A community of coding enthusiasts who participate in competitive programming and hackathons.',
      icon: faCode,
      color: '#4e54c8',
      members: 120
    },
    {
      id: 2,
      name: 'AI & ML Club',
      description: 'Exploring the frontiers of artificial intelligence and machine learning through projects and workshops.',
      icon: faRobot,
      color: '#f83600',
      members: 85
    },
    {
      id: 3,
      name: 'Cybersecurity Club',
      description: 'Learning about network security, ethical hacking, and cyber defense strategies.',
      icon: faShieldAlt,
      color: '#1CB5E0',
      members: 65
    },
    {
      id: 4,
      name: 'App Development Club',
      description: 'Designing and developing mobile applications for various platforms and purposes.',
      icon: faMobileAlt,
      color: '#00b09b',
      members: 90
    },
    {
      id: 5,
      name: 'Gaming Club',
      description: 'Creating interactive games and understanding game development engines and principles.',
      icon: faGamepad,
      color: '#8E2DE2',
      members: 70
    },
    {
      id: 6,
      name: 'Cloud Computing Club',
      description: 'Exploring cloud technologies, serverless architectures, and distributed systems.',
      icon: faCloud,
      color: '#F37335',
      members: 55
    }
  ];

  return (
    <section id="clubs" className="clubs-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Student Clubs</h2>
          <div className="title-underline"></div>
          <p>Join our vibrant student communities to enhance your skills and network with like-minded peers</p>
        </div>
        
        <Row className="clubs-row">
          {clubs.map((club) => (
            <Col lg={4} md={6} className="mb-4" key={club.id} data-aos="fade-up" data-aos-delay={club.id * 100}>
              <Card className="club-card">
                <Card.Body>
                  <div className="club-icon" style={{ backgroundColor: club.color }}>
                    <FontAwesomeIcon icon={club.icon} />
                  </div>
                  <h3>{club.name}</h3>
                  <p>{club.description}</p>
                  <div className="club-footer">
                    <span className="members">{club.members} Members</span>
                    <a href="#join" className="join-link">Join Club</a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <div className="clubs-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Clubs;