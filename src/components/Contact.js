import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <div className="title-underline"></div>
          <p>Get in touch with us for any inquiries or information</p>
        </div>
        
        <Row className="contact-container">
          <Col lg={5} className="contact-info" data-aos="fade-right">
            <h3>Get in Touch</h3>
            
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>Department of Information Technology<br />CSPIT, CHARUSAT Campus<br />Changa, Anand - 388421, Gujarat</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>+91 2697 265011</p>
                <p>+91 2697 265021</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="content">
                <h4>Email</h4>
                <p>info.it@charusat.ac.in</p>
                <p>hod.it@charusat.ac.in</p>
              </div>
            </div>
            
            <div className="social-links">
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
            </div>
          </Col>
          
          <Col lg={7} className="contact-form" data-aos="fade-left">
            <h3>Send us a Message</h3>
            
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Your message has been sent successfully!
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="form-group">
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Col>
                <Col md={6} className="form-group">
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </Col>
              </Row>
              <div className="form-group">
                <Form.Control 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <Form.Control 
                  as="textarea" 
                  name="message" 
                  rows={5} 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </div>
              <Button type="submit" className="submit-btn">Send Message</Button>
            </Form>
          </Col>
        </Row>
        
        <div className="map-container" data-aos="zoom-in">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1461558974!2d72.81814731496287!3d22.59923698517298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c30bd44029%3A0xcb37ad8a1a352aa5!2sCHARUSAT!5e0!3m2!1sen!2sin!4v1647419892548!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="CHARUSAT Location"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contact;