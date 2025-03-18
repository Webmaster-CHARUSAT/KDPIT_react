import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "The IT department provided me with excellent technical knowledge and soft skills that helped me secure a position at Google. The faculty's guidance was invaluable throughout my journey.",
      name: "Ananya Singh",
      position: "Software Engineer at Google",
      batch: "Batch of 2020",
      image: "/images/testimonials/testimonial1.jpg"
    },
    {
      id: 2,
      content: "The practical exposure through industry projects and internships helped me understand real-world challenges. The department's industry connections are its biggest strength.",
      name: "Vikas Mehta",
      position: "Product Manager at Amazon",
      batch: "Batch of 2019",
      image: "/images/testimonials/testimonial2.jpg"
    },
    {
      id: 3,
      content: "The entrepreneurship cell and innovation lab at the department encouraged me to think outside the box. Today, I run my own successful startup thanks to the foundation laid here.",
      name: "Neha Kapoor",
      position: "Founder & CEO at TechSolutions",
      batch: "Batch of 2018",
      image: "/images/testimonials/testimonial3.jpg"
    },
    {
      id: 4,
      content: "The diverse curriculum and emphasis on emerging technologies gave me a competitive edge. I was able to adapt quickly to the fast-paced work environment at my company.",
      name: "Rahul Sharma",
      position: "Data Scientist at IBM",
      batch: "Batch of 2021",
      image: "/images/testimonials/testimonial4.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <div className="title-underline"></div>
          <p>What our students and alumni say about us</p>
        </div>
        
        <div className="testimonials-container" data-aos="fade-up">
          <Row className="align-items-center position-relative">
            {/* Left Arrow Button */}
            <button className="control-btn prev-btn" onClick={prevTestimonial}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <Col lg={5} className="testimonial-image-col">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="testimonial-image"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                  <div className="image-shape"></div>
                </motion.div>
              </AnimatePresence>
            </Col>
            
            <Col lg={7}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="testimonial-content"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="quote-icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                  <p>{testimonials[activeIndex].content}</p>
                  <div className="testimonial-author">
                    <h4>{testimonials[activeIndex].name}</h4>
                    <p className="position">{testimonials[activeIndex].position}</p>
                    <p className="batch">{testimonials[activeIndex].batch}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Col>
            
            {/* Right Arrow Button */}
            <button className="control-btn next-btn" onClick={nextTestimonial}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Row>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </Container>
      
      <div className="testimonials-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;