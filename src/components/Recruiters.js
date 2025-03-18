import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import '../styles/components/recruiters.css';

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
    <section id="recruiters" className="recruiters-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Major Recruiters</h2>
          <div className="title-underline"></div>
          <p>Our students are placed in top companies across the globe</p>
        </div>
        
        <div className="recruiters-container" data-aos="fade-up">
          {recruiters.map((recruiter) => (
            <motion.div 
              className="recruiter-logo" 
              key={recruiter.id}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <img src={recruiter.logo} alt={recruiter.name} />
            </motion.div>
          ))}
        </div>
        
        <Row className="placement-stats">
          {placementStats.map((stat) => (
            <Col md={6} lg={3} key={stat.id}>
              <Card className="stat-card" data-aos="zoom-in" data-aos-delay={stat.id * 100}>
                <Card.Body>
                  <h3>
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                    <span>{stat.suffix}</span>
                  </h3>
                  <p>{stat.title}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Recruiters;