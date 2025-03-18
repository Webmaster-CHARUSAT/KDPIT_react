import React, { useState, useEffect } from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/components/hero.css';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      id: 1,
      image: "/images/slides/slide1.jpg",
      title: "Welcome to Information Technology Department",
      subtitle: "Shaping the future through technology and innovation",
      btnText: "Explore Programs",
      btnLink: "#about"
    },
    {
      id: 2,
      image: "/images/slides/slide2.jpg",
      title: "State-of-the-Art Facilities",
      subtitle: "Modern labs equipped with the latest technology",
      btnText: "View Facilities",
      btnLink: "#about"
    },
    {
      id: 3,
      image: "/images/slides/slide3.jpg",
      title: "Building Successful Careers",
      subtitle: "Our graduates are working in top companies worldwide",
      btnText: "Our Recruiters",
      btnLink: "#recruiters"
    }
  ];

  return (
    <section id="home" className="hero-section">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        className="hero-carousel"
        indicators={true}
        controls={true}
        interval={5000}
        fade
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="carousel-item">
            <div 
              className="carousel-image" 
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <Carousel.Caption className="carousel-caption">
              <Container>
                <motion.div 
                  className="caption-content"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  <Button 
                    href={slide.btnLink} 
                    className="hero-btn"
                  >
                    {slide.btnText}
                  </Button>
                </motion.div>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,96C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;