import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Modal, Button } from 'react-bootstrap';
import '../styles/components/certifications.css';

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

  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Industry Recognized Certifications</h2>
          <div className="title-underline"></div>
          <p>Enhance your skills and employability with our industry-partnered certification programs</p>
        </div>
        
        <Row>
          {certifications.map((cert) => (
            <Col lg={4} md={6} className="mb-4" key={cert.id} data-aos="fade-up" data-aos-delay={cert.id * 100}>
              <Card className="cert-card">
                <div className="cert-logo">
                  <img src={cert.logo} alt={cert.provider} />
                </div>
                <Card.Body>
                  <Badge bg="primary" className="level-badge">{cert.level}</Badge>
                  <h3>{cert.name}</h3>
                  <p className="provider">by {cert.provider}</p>
                  <p className="description">{cert.description.substring(0, 100)}...</p>
                  <div className="cert-footer">
                    <span className="duration"><i className="far fa-clock"></i> {cert.duration}</span>
                    <Button 
                      variant="outline-primary" 
                      className="details-btn"
                      onClick={() => handleShowDetails(cert)}
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Certification Details Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        className="cert-modal"
        size="lg"
      >
        {selectedCert && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCert.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-cert-header d-flex align-items-center mb-4">
                <img src={selectedCert.logo} alt={selectedCert.provider} className="modal-logo" />
                <div>
                  <h5>{selectedCert.provider}</h5>
                  <Badge bg="primary">{selectedCert.level}</Badge>
                  <span className="ms-2"><i className="far fa-clock"></i> {selectedCert.duration}</span>
                </div>
              </div>
              
              <h5>Description</h5>
              <p>{selectedCert.description}</p>
              
              <h5>Skills You'll Gain</h5>
              <div className="skills-container">
                {selectedCert.skills.map((skill, index) => (
                  <Badge bg="secondary" key={index} className="skill-badge">{skill}</Badge>
                ))}
              </div>
              
              <h5 className="mt-4">Certification Process</h5>
              <ul className="process-list">
                <li>Complete the required coursework</li>
                <li>Pass practice assessments</li>
                <li>Schedule and take the certification exam</li>
                <li>Receive digital badge upon successful completion</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary">
                Enroll Now
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;