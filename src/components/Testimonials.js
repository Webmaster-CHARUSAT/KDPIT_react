import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const autoAdvanceTimerRef = useRef(null);
  
  // Enhanced testimonial data with both video and image+text formats
  const testimonials = [
    {
      id: 1,
      type: 'text',
      content: "The IT department provided me with excellent technical knowledge and soft skills that helped me secure a position at Google. The faculty's guidance was invaluable throughout my journey.",
      name: "Ananya Singh",
      position: "Software Engineer at Google",
      batch: "Batch of 2020",
      image: "/images/testimonials/testimonial1.jpg"
    },
    {
      id: 2,
      type: 'video',
      videoUrl: "/videos/testimonial-video1.mp4", // Replace with actual video path
      name: "Raj Patel",
      position: "Senior Developer at Microsoft",
      batch: "Batch of 2019",
      thumbnail: "/images/testimonials/video-thumbnail1.jpg" // For fallback/preview
    },
    {
      id: 3,
      type: 'text',
      content: "The practical exposure through industry projects and internships helped me understand real-world challenges. The department's industry connections are its biggest strength.",
      name: "Vikas Mehta",
      position: "Product Manager at Amazon",
      batch: "Batch of 2019",
      image: "/images/testimonials/testimonial2.jpg"
    },
    {
      id: 4,
      type: 'video',
      videoUrl: "/videos/testimonial-video2.mp4", // Replace with actual video path
      name: "Priya Sharma",
      position: "UX Designer at Adobe",
      batch: "Batch of 2020",
      thumbnail: "/images/testimonials/video-thumbnail2.jpg" // For fallback/preview
    },
    {
      id: 5,
      type: 'text',
      content: "The entrepreneurship cell and innovation lab at the department encouraged me to think outside the box. Today, I run my own successful startup thanks to the foundation laid here.",
      name: "Neha Kapoor",
      position: "Founder & CEO at TechSolutions",
      batch: "Batch of 2018",
      image: "/images/testimonials/testimonial3.jpg"
    },
    {
      id: 6,
      type: 'text',
      content: "The diverse curriculum and emphasis on emerging technologies gave me a competitive edge. I was able to adapt quickly to the fast-paced work environment at my company.",
      name: "Rahul Sharma",
      position: "Data Scientist at IBM",
      batch: "Batch of 2021",
      image: "/images/testimonials/testimonial4.jpg"
    }
  ];

  const currentTestimonial = testimonials[activeIndex];
  const isVideo = currentTestimonial.type === 'video';

  // Set up auto-rotation for text testimonials
  useEffect(() => {
    // Clear any existing timers
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }
    
    // Only set auto-advance timer for text testimonials
    if (!isVideo) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        nextTestimonial();
      }, 6000);
    }
    
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [activeIndex, isVideo]);

  // Handle video-specific logic
  useEffect(() => {
    if (isVideo && videoRef.current) {
      // Reset video when testimonial changes
      videoRef.current.currentTime = 0;
      
      // Set up event listener for video end
      const handleVideoEnd = () => {
        nextTestimonial();
      };
      
      videoRef.current.addEventListener('ended', handleVideoEnd);
      
      // Auto-play the video if it's a video testimonial
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Video play failed:", error));
      }
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [activeIndex, isVideo]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Video play failed:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="testimonials" className="relative bg-gray-50 py-20 pb-[150px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">What our students and alumni say about us</p>
        </div>
        
        {/* Testimonials Container with Fixed Height */}
        <div className="max-w-[1000px] mx-auto py-8 pb-[70px] relative">
          {/* Left Arrow Button */}
          <button 
            className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center text-indigo-500 hover:bg-indigo-600 hover:text-indigo-800 hover:scale-110 transition-all duration-300 absolute top-1/2 -translate-y-1/2 z-10 lg:-left-[25px] left-0 xl:-left-[25px]"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>
          
          {/* Fixed Height Container */}
          <div className="min-h-[450px] md:min-h-[400px] lg:min-h-[350px] flex items-center justify-center">
            {/* Conditional Rendering based on testimonial type */}
            <AnimatePresence mode="wait">
              {isVideo ? (
                // Video Testimonial
                <motion.div
                  key={`video-${activeIndex}`}
                  className="bg-white p-6 rounded-[20px] shadow-lg overflow-hidden w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Video */}
                    <div className="md:w-7/12">
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-md">
                        <video
                          ref={videoRef}
                          src={currentTestimonial.videoUrl}
                          poster={currentTestimonial.thumbnail}
                          className="w-full h-full object-cover"
                          playsInline
                        />
                        
                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={togglePlayPause}
                            className="w-16 h-16 rounded-full bg-indigo-600 bg-opacity-80 flex items-center justify-center text-white hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                          >
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="md:w-5/12 flex flex-col justify-center">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{currentTestimonial.name}</h4>
                        <p className="text-indigo-600 font-medium mb-2">{currentTestimonial.position}</p>
                        <p className="text-gray-500 text-sm">{currentTestimonial.batch}</p>
                        <div className="mt-4 text-sm text-gray-600">
                          <p>Watch the video testimonial to learn about {currentTestimonial.name.split(' ')[0]}'s experience at our department.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Text+Image Testimonial
                <motion.div 
                key={`text-${activeIndex}`}
                className="flex flex-col lg:flex-row items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Testimonial Image */}
                <div className="lg:w-5/12 mb-8 lg:mb-0">
                  <motion.div 
                    className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mx-auto rounded-[20px] overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-[20px] -left-[20px] w-[100px] h-[100px] rounded-[20px] bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10 -z-10"></div>
                  </motion.div>
                </div>
                
                {/* Testimonial Content */}
                <div className="lg:w-7/12">
                  <motion.div 
                    className="bg-white p-6 md:p-10 rounded-[20px] shadow-md relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-5 left-5 text-5xl text-indigo-600 opacity-40">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5 pl-8">
                      {currentTestimonial.content}
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">{currentTestimonial.name}</h4>
                      <p className="text-indigo-600 font-medium mb-1">{currentTestimonial.position}</p>
                      <p className="text-gray-500 text-sm">{currentTestimonial.batch}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Right Arrow Button */}
          <button 
            className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center text-indigo-500 hover:bg-indigo-600 hover:text-indigo-800 hover:scale-110 transition-all duration-300 absolute top-1/2 -translate-y-1/2 z-10 lg:-right-[25px] right-0 xl:-right-[25px]"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
          </button>
          
          {/* Dots/Indicators */}
          <div className="flex justify-center gap-2.5 mt-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <button 
                key={testimonial.id} 
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'scale-125' 
                    : 'hover:scale-110'
                } ${
                  testimonial.type === 'video'
                    ? index === activeIndex 
                      ? 'bg-indigo-600 w-8 h-3 rounded-full' 
                      : 'bg-gray-400 hover:bg-indigo-400 w-3 h-3 rounded-full'
                    : index === activeIndex 
                      ? 'bg-indigo-600 w-3 h-3 rounded-full' 
                      : 'bg-gray-400 hover:bg-indigo-400 w-3 h-3 rounded-full'
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