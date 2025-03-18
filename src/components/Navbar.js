import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../styles/components/navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Navbar 
      expand="lg" 
      className={`modern-navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`} 
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <motion.img
            src="/images/logo.webp"
            alt="Department Logo"
            className="logo-img"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="brand-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          </motion.div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item">
              <span className="nav-text">Home</span>
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              <span className="nav-text">About</span>
            </Nav.Link>
            
            <NavDropdown 
              title={
                <span className="nav-text">
                  Academics <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </span>
              } 
              id="basic-nav-dropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#clubs">Student Clubs</NavDropdown.Item>
              <NavDropdown.Item href="#certifications">Certifications</NavDropdown.Item>
              <NavDropdown.Item href="#chapters">Student Chapters</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#alumni" className="nav-item">
              <span className="nav-text">Alumni</span>
            </Nav.Link>
            <Nav.Link href="#gallery" className="nav-item">
              <span className="nav-text">Gallery</span>
            </Nav.Link>
            <Nav.Link href="#recruiters" className="nav-item">
              <span className="nav-text">Recruiters</span>
            </Nav.Link>
          </Nav>
          
          <div className="navbar-actions d-flex align-items-center">
            <Button href="#contact" className="contact-btn">
              Contact Us
            </Button>
            <div className="theme-toggle ms-3" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;