import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------- Alumni Section to showcase alumni achievements and stories -----------------

const Alumni = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const alumni = [
    {
      id: 1,
      name: 'Ashish Sharma',
      image: '/images/alumni/ashish.jpg',
      position: 'Deputy Manager (Audit & Assurance)',
      company: 'Deloitte',
      linkedin: 'https://linkedin.com/in/ashish-sharma'
    },
    {
      id: 2,
      name: 'Yash Deshmukh',
      image: '/images/alumni/yash.jpg',
      position: 'Deputy Manager Application Engineering',
      company: 'Schneider Electric',
      linkedin: 'https://linkedin.com/in/yash-deshmukh'
    },
    {
      id: 3,
      name: 'Malay Tanna',
      image: '/images/alumni/malay.jpg',
      position: 'Business Manager',
      company: 'Gateway Group',
      linkedin: 'https://linkedin.com/in/malay-tanna'
    },
    {
      id: 4,
      name: 'Dhavat Dabhi',
      image: '/images/alumni/dhavat.jpg',
      position: 'Senior Engineer L&T',
      company: 'Technology Services',
      linkedin: 'https://linkedin.com/in/dhavat-dabhi'
    },
    {
      id: 5,
      name: 'Abhishek Singh',
      image: '/images/alumni/abhishek.jpg',
      position: 'Executive - Commissioning Engineer',
      company: 'SIEMENS ENERGY',
      linkedin: 'https://linkedin.com/in/abhishek-singh'
    },
    {
      id: 6,
      name: 'Riya Patel',
      image: '/images/alumni/riya.jpg',
      position: 'Systems Engineer',
      company: 'Tata Consultancy Services',
      linkedin: 'https://linkedin.com/in/riya-patel'
    },
    {
      id: 7,
      name: 'Mayank Patel',
      image: '/images/alumni/mayank.jpg',
      position: 'Service Delivery Manager - DG Gujarat Region',
      company: 'Tata Consultancy Services',
      linkedin: 'https://linkedin.com/in/mayank-patel'
    },
    {
      id: 8,
      name: 'Mr. Parthav Pankaj Vyas',
      image: '/images/alumni/parthav.jpg',
      position: 'Director of Engineering',
      company: 'Scalebridge Technology, Ahmedabad',
      linkedin: 'https://linkedin.com/in/parthav-vyas'
    },
    {
      id: 9,
      name: 'Nilesh Ranpura',
      image: '/images/alumni/nilesh.jpg',
      position: 'Director of Engineering',
      company: 'eInfochips- An Arrow company',
      linkedin: 'https://linkedin.com/in/nilesh-ranpura'
    },
    {
      id: 10,
      name: 'Harshita Joshi',
      image: '/images/alumni/harshita.jpg',
      position: 'Senior Staff Engineer',
      company: 'Infineon Technologies AG, Munich-Germany',
      linkedin: 'https://linkedin.com/in/harshita-joshi'
    },
    {
      id: 11,
      name: 'Kishankumar Patel',
      image: '/images/alumni/kishan.jpg',
      position: 'Senior UI Engineer',
      company: 'NVIDIA Inc.',
      linkedin: 'https://linkedin.com/in/kishan-patel'
    },
    {
      id: 12,
      name: 'Mr Sashin Patel',
      image: '/images/alumni/sashin.jpg',
      position: 'Sr. Manager Cloud Native Development',
      company: 'Toyota, USA',
      linkedin: 'https://linkedin.com/in/sashin-patel'
    },
    {
      id: 13,
      name: 'Priya Mehta',
      image: '/images/alumni/priya.jpg',
      position: 'Senior Data Scientist',
      company: 'Microsoft',
      linkedin: 'https://linkedin.com/in/priya-mehta'
    }
  ];

  const itemsPerSlide = 12;
  const totalSlides = Math.ceil(alumni.length / itemsPerSlide);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="alumni" className="py-20 bg-white/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Notable Alumni</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our graduates have gone on to achieve remarkable success in their careers</p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -1000 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {alumni
                .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
                .map((alum, index) => (
                  <motion.div
                    key={alum.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={alum.image}
                          alt={alum.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${alum.name}&background=6366f1&color=fff&size=128`;
                          }}
                        />
                      </div>
                      <a
                        href={alum.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-indigo-50 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{alum.name}</h3>
                    <p className="text-xs text-indigo-600 mb-1">{alum.position}</p>
                    <p className="text-xs text-gray-500">{alum.company}</p>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={handlePrevSlide}
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-indigo-600 w-6' : 'bg-indigo-200'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={toggleAutoPlay}
              className={`p-2 rounded-full ${isAutoPlaying ? 'bg-indigo-600' : 'bg-gray-400'
                } text-white hover:bg-indigo-700 transition-colors duration-300`}
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isAutoPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;