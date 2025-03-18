import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-5 mb-lg-0">
              <div className="footer-info">
                <div className="footer-logo">
                  <img src="/images/logo.webp" alt="Department Logo" />
                  {/* <div className="logo-text">
                    <h3>Department of Information Technology</h3>
                    <p>CSPIT, CHARUSAT University</p>
                  </div> */}
                </div>
                <p className="mt-3">
                  Shaping the future through technology and innovation. We strive to provide quality education and produce industry-ready professionals.
                </p>
                <div className="social-links mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </Col>
            
            <Col lg={2} md={6} className="mb-5 mb-lg-0">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#clubs">Student Clubs</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#certifications">Certifications</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#chapters">Student Chapters</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-5 mb-lg-0">
              <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#student-portal">Student Portal</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#e-learning">E-Learning Platform</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#library">Digital Library</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#research">Research Publications</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#careers">Career Opportunities</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} className="link-icon" />
                    <a href="#alumni-portal">Alumni Portal</a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <div className="footer-newsletter">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter to get the latest updates</p>
                <Form className="newsletter-form">
                  <Form.Control type="email" placeholder="Your Email" required />
                  <Button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <div className="copyright">
            <p>&copy; {currentYear} <strong>Department of Information Technology, CSPIT</strong>. All Rights Reserved.</p>
          </div>
          <div className="credits">
            <p>Designed with <span className="heart">❤</span> by IT Students</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;