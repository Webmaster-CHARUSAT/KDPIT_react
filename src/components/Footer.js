import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faChevronRight,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Area */}
      <div className="pt-10 pb-10">
        <Container>
          <Row className="justify-content-between">
            {/* Column 1: Contact Information */}
            <Col lg={4} md={6} className="mb-8 mb-lg-0">
              <div className="mb-4">
                <img 
                  src="/images/logo.webp" 
                  alt="CHARUSAT Logo" 
                  className="h-16"
                />
              </div>
              
              {/* <h3 className="text-xl font-bold mb-4 pb-2 relative">
                Contact Information
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-green-500 rounded-full"></span>
              </h3> */}
              
              <ul className="space-y-3 pl-0">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Smt. Kundanben Dinsha Patel Department of Information Technology</p>
                    <p className="text-gray-400">CHARUSAT Campus, Changa</p>
                    <p className="text-gray-400">Taluka: Petlad, Dist: Anand</p>
                    <p className="text-gray-400">Gujarat (India) 388 421</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-green-400 mr-3 flex-shrink-0" />
                  <a href="tel:+912697265131" className="hover:text-green-400 transition-colors duration-300">
                    +91-2697-265131
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-400 mr-3 flex-shrink-0" />
                  <a href="mailto:hod.it@charusat.ac.in" className="hover:text-green-400 transition-colors duration-300">
                    hod.it@charusat.ac.in
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider mb-3 text-gray-400">Connect With Us</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://twitter.com/charusat_edu" 
                    className="w-9 h-9 bg-gray-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a 
                    href="https://facebook.com/charusat.edu.in" 
                    className="w-9 h-9 bg-gray-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a 
                    href="https://instagram.com/charusat_university" 
                    className="w-9 h-9 bg-gray-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a 
                    href="https://linkedin.com/school/charusat-university" 
                    className="w-9 h-9 bg-gray-800 hover:bg-green-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </Col>
            
            {/* Column 2: Student Resources */}
            <Col lg={4} md={6} className="mb-8 mb-lg-0">
              <h3 className="text-xl font-bold mb-4 pb-2 relative">
                Student Resources
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-green-500 rounded-full"></span>
              </h3>
              
              <ul className="mt-5 grid grid-cols-1 gap-2">
                <li>
                  <a href="/exam-results" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Exam Results
                  </a>
                </li>
                <li>
                  <a href="/e-governance" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    E-Governance
                  </a>
                </li>
                <li>
                  <a href="/fees-payment" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Online Fees Payment
                  </a>
                </li>
                <li>
                  <a href="/library" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Library
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="/statutes" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    The Act & First Statutes
                  </a>
                </li>
                <li>
                  <a href="/academic-calendar" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a href="/scholarships" className="text-gray-300 hover:text-green-400 flex items-center transition-all duration-300 hover:translate-x-1 py-1">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-green-400 text-xs" />
                    Scholarships
                  </a>
                </li>
              </ul>
            </Col>
            
            {/* Column 3: Developed By */}
            <Col lg={4} md={12}>
              <h3 className="text-xl font-bold mb-4 pb-2 relative">
                Developed By
                <span className="absolute left-0 bottom-0 w-16 h-1 bg-green-500 rounded-full"></span>
              </h3>
              
              <div className="mt-5 flex flex-col items-center">
                <div className="mb-4 w-36 h-36 rounded-full overflow-hidden border-2 border-green-500">
                  <img 
                    src="C:/Users/motat/Downloads/Kabir[22IT078]_Image.jpg" 
                    alt="Lead Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-green-400 font-medium text-xl">Kabir Mota</h4>
                <p className="text-gray-400 mt-2">Lead Developer</p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Bottom Footer Area */}
      <div className="bg-black py-4 border-t border-gray-800">
        <Container>
          <Row className="items-center">
            <Col md={7} className="text-center text-md-start mb-3 mb-md-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} CHARUSAT University. All Rights Reserved.
                <span className="mx-2">|</span>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Use</a>
              </p>
            </Col>
            <Col md={5} className="text-center text-md-end">
              <p className="text-gray-400 text-sm">
                Smt. Kundanben Dinsha Patel Department of Information Technology
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Back to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 z-50"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </footer>
  );
};

export default Footer;