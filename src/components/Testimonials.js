import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
    <section id="testimonials" className="relative bg-gray-50 py-20 pb-[150px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">What our students and alumni say about us</p>
        </div>
        
        <div className="max-w-[1000px] mx-auto py-8 pb-[70px] relative">
          <div className="flex flex-col lg:flex-row items-center relative">
            {/* Left Arrow Button */}
            <button 
              className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300 absolute top-1/2 -translate-y-1/2 z-10 lg:-left-[25px] left-0 xl:-left-[25px]"
              onClick={prevTestimonial}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>
            
            {/* Testimonial Image */}
            <div className="lg:w-5/12 mb-8 lg:mb-0">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mx-auto rounded-[20px] overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-[20px] -left-[20px] w-[100px] h-[100px] rounded-[20px] bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10 -z-10"></div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Testimonial Content */}
            <div className="lg:w-7/12">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="bg-white p-6 md:p-10 rounded-[20px] shadow-md relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-5 left-5 text-5xl text-indigo-600 opacity-10">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5 pl-8">
                    {testimonials[activeIndex].content}
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">{testimonials[activeIndex].name}</h4>
                    <p className="text-indigo-600 font-medium mb-1">{testimonials[activeIndex].position}</p>
                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].batch}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right Arrow Button */}
            <button 
              className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300 absolute top-1/2 -translate-y-1/2 z-10 lg:-right-[25px] right-0 xl:-right-[25px]"
              onClick={nextTestimonial}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8 relative z-10">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-gray-400 hover:bg-indigo-400 hover:scale-110'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;