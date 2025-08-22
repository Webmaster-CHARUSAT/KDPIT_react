import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// ---------------- Testimonials Section with video and image testimonials -----------------

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const autoAdvanceTimerRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      type: 'text',
      content: "IT Department provides perfect platform for the students to scan, search and work over their ideas with the best support and guidance provided by the faculty members. Students are also acknowledged with all the upcoming technologies used and are also taught to use them which trains them for their challenging and bright future.",
      name: "Meet Shah",
      position: "Student",
      image: "/images/testimonials/testimonial-2.webp"
    },
    {
      id: 2,
      type: 'text',
      content: "It was a great experience interacting with faculty members. I have learned so much during my bachelor's studies at CSPIT that it was an honor for me to be able to contribute as an alumnus.",
      name: "Jimmy Dani",
      position: "Alumnus",
      image: "/images/testimonials/testimonial-5.webp"
    },
    {
      id: 3,
      type: 'text',
      content: "Charusat by providing various facilities to the students has proved that it is not only being study oriented university. The counselling batches assigned to the respective faculties has been an initiative that has helped the students at various points in their college life. Along with the platforms that it provides to enhance the co-curricular skills is pretty good.",
      name: "Ila Poker",
      position: "Student",
      image: "/images/testimonials/testimonial-1.webp"
    },
    {
      id: 4,
      type: 'text',
      content: "I had joined a very early batch of BEIT program in 2002, still in the nascent stage worrying about how this new institute will fare among all other older and experienced ones. Surprisingly, with well equipped Computer workshops and very young and dynamic teaching staff, we were at par and sometimes better than most of the well established institutions in Gujarat.",
      name: "Thomas Mathews",
      position: "Alumnus",
      image: "/images/testimonials/testimonial-4.webp"
    },
    {
      id: 5,
      type: 'text',
      content: "Parents always search for college that is capable of providing safe environment, first-rate academic experience as well as friendly environment in which their child can flourish in best possible way. The IT department has provided my child all the facilities that I want for her. As well as the faculties has also encouraged my child in every possible situation.",
      name: "Chetna Patel",
      position: "Parent",
      image: "/images/testimonials/testimonial-3.webp"
    },
    {
      id: 6,
      type: 'text',
      content: "I would say choosing the IT department was the best decision of my life. My bachelor in Information Technology provided me the platform to gain a plethora of knowledge and also groomed me for a better future as well as opportunities.",
      name: "Drupa Patel",
      position: "Student",
      image: "/images/testimonials/testimonial-6.webp"
    },
    {
      id: 7,
      type: 'text',
      content: "The friendly environment of the IT department provides a great opportunity for the student to think and grow as an engineer. I especially like the flexibility of the department. As and when the department gets any of the suggestions from industry, alumni, and students, the implementation starts as soon as possible. Department of IT, CSPIT is one of the great choices to grow as a good engineer.",
      name: "Milan Sonagra",
      position: "Student",
      image: "/images/testimonials/testimonial-7.webp"
    },
    {
      id: 8,
      type: 'text',
      content: "Being a part of the CSPIT-IT department has been an amazing experience of my life. The department faculties support me in every possible direction I tried to explore. Being a Data science enthusiast I got to work with cutting-edge state-of-the-art technologies like Nvidia Jetson TX2 and Nvidia Titan X at the department. I got exposure to nourish my management skills being a department representative for the Executive Central Council. I also got an opportunity to lead a project for preparing a video representation of the department. Department also supported for multiple cross-country hackathons. Apart from this, I got exposure to be part of amazing projects in terms of working with AWS cloud, Novel IoT hardware projects, Opportunities to host multiple events like debate, volunteer for workshops and more. All of these were possible by the guidance of the counselor assigned to small batches of students to micro monitor and guide every student.",
      name: "Sarthak Thakkar",
      position: "Student",
      image: "/images/testimonials/testimonial-8.webp"
    },
    {
      id: 9,
      type: 'text',
      content: "Never thought my IT journey will be this much smooth at the beginning, all thanks to the faculties of the IT department who always come up with industry-level projects to work on, workshops for specific domains, so the students can decide in which sector they want to pursue their career. With all the required resources and skilled facilities, all you need to do is just follow their guidelines and you'll achieve more than you imagined.",
      name: "Hitesh Dholakiya",
      position: "Student",
      image: "/images/testimonials/testimonial-9.webp"
    },
    {
      id: 10,
      type: 'text',
      content: "Excellent academic curriculum and innovative departmental practices at our department have always impressed me. It instilled in me many new skills and provided me with opportunities to enhance my knowledge as well as to express it in a much efficient way, making me an excellent fit for the professional world and overall a better person. Here, I got ample time to explore, some being my academic explorations, research projects, leadership opportunities, management skills, event handling opportunities and above all the freedom to innovate and experiment my ideas under the guidance of expert faculty members. It always felt like home because of parentlike and always-available-to-help mentors. To all the new-comers, I would advise you to grab every opportunity you get and explore every innovative idea that crosses your way. Never to settle for second-best is what this department and university has taught me!",
      name: "Arjun Rupavatiya",
      position: "Alumnus",
      image: "/images/testimonials/testimonial-18.webp"
    },
    {
      id: 11,
      type: 'text',
      content: "Department is a family to me. Always backed me and guided me on the right paths, providing all the great opportunities. The perfect environment to learn and explore ourselves. Along with academics, a lot of different activities on campus allowed me to polish my talents and have an overall development. There are various committees that allow me the opportunity to connect with people and have good work experience. I have learnt not just to become a good engineer but a good person.",
      name: "Manush Parikh",
      position: "Student",
      image: "/images/testimonials/testimonial-17.webp"
    },
    {
      id: 12,
      type: 'text',
      content: "Very Open environment in college, perfect for the overall holistic development of a student. Starting from academics through sports and extracurricular activities, all parts are readily conducted and managed efficiently. Faculties are very friendly and performance centered. Department constantly tries to enhance your current abilities by conducting necessary competitions and activities, making you get out of your comfort zone for good. Great learning environment and infrastructure to carry out the work desired by students. Festivals here are a blast and unforgettable. Overall this organization emphasizes the phrase 'In order to dive deep, one must leave the shore!'",
      name: "Rohan Modi",
      position: "Student",
      image: "/images/testimonials/testimonial-16.webp"
    },
    {
      id: 13,
      type: 'text',
      content: "Being a part of Charusat University was a brilliant experience. Aside from Charusat University, I'd like to point out that selecting the IT department was the finest option I made. Because the IT department's staff is incredibly helpful and treats all students equally. They also provided us with good advice on even small issues. I'd also want to point out that faculties offer assistance and guidance as part of the project or in the situation of any issues. The department provides knowledge of each new technology to its student in order to keep updated with new technologies. It was truly an honor for me to be able to contribute as an alumnus.",
      name: "Mr. Arpit Goth",
      position: "Alumnus",
      image: "/images/testimonials/testimonial-10.webp"
    },
    {
      id: 14,
      type: 'text',
      content: "It was a great experience to study in the IT branch of Charusat University. The faculty member was also encouraged and help the student to implement their ideas in the projects. The advanced level of subjects and upcoming technology was also covered to guide the students for their further study. I'd like to say that if you want to study in the IT branch then study at Charusat University.",
      name: "Akshar Gothi",
      position: "Student",
      image: "/images/testimonials/testimonial-11.webp"
    },
    {
      id: 15,
      type: 'text',
      content: "A department that feels like a second home. Starting from being helpful, all the teachers have given priority to building our personalities as a whole. My experience with the IT department is and will be the most cheerful one, from academics to sports, co-curricular activities and events that helped us shape our tomorrow. I have not only been limited to college facilities, but the industrial visits and the number of internships offered gave me a better understanding of the real picture of the industry. Apart from the academics and the opportunities, I would love to highlight the strength of the department that stands up during tech and non-tech fests. The teachers, students, HoD sir, and everyone involved with us worked as a joint unit to make us feel home. College will always remain a home away from home. To all the freshers of this year, you are going to have the best roller coaster ride, some experiences might shine a light and others might not, but there is one thing that you have you remember, you are stronger than you think.",
      name: "Namrata",
      position: "Student",
      image: "/images/testimonials/testimonial-15.webp"
    },
    {
      id: 16,
      type: 'text',
      content: "It was a great experience studying at Charusat University, a memory to cherish for a lifetime. My experience at the IT department was full of learning and grooming. Being a global University it gave me an opportunity to meet different kinds of people from around the world and learnt many things from them. I was always cheered to learn something new and experiment my ideas and innovations. Faculties were always available to help me out with any difficulties at academic or individual level. Department has provided all the resources which helped me grow professionally and personally. Apart from that the green peaceful environment at University always helped me think over my ideas and made me feel relaxed. I am thankful to all the faculties, mentors and entire department for providing us with quality education. I am also grateful to TNP cell for organizing placements in this pandemic and helping me get placed in a reputed organization. Overall it was a great experience to be a part of this wonderful department.",
      name: "Anushree",
      position: "Student",
      image: "/images/testimonials/testimonial-19.webp"
    },
    {
      id: 17,
      type: 'text',
      content: "I am having great experience with our department. All the faculties are very supportive and we are having great opportunities to explore our knowledge with your guidance. I have groomed myself in these 3 years so well by following all the academic and curriculum activities.",
      name: "Dhara",
      position: "Student",
      image: "/images/testimonials/testimonial-20.webp"
    },
    {
      id: 18,
      type: 'text',
      content: "The KDPIT is a department where I found my dream, supportive faculties, an environment that motivated me to achieve my goals and the best quality of education. I have spent some amazing years of my life in this department that taught me almost everything that I will be facing ahead in my life. The faculty members are always there and they supported me as my backbone. The resources, courses, computer labs, classrooms are the best which is one of the major parts in students development and academics. During this pandemic, our faculties worked very hard and took care of each and every student that he/she is understanding topics that are taught in daily online classes. Though we were studying and attending lectures from our home, our teachers always taught the same as they normally teach in the classroom. It was a great chance for me to be part of this wonderful department and share the important years of my life with such people who have always helped me with my difficulties whether it's Teachers, students or seniors.",
      name: "Parthiv",
      position: "Student",
      image: "/images/testimonials/testimonial-21.webp"
    },
    {
      id: 19,
      type: 'text',
      content: "Charusat provides the students with ample opportunities both in terms of research and industry. A lot of effort has been put in by the authorities and the course curriculum has been structured very well. The curriculum coupled with the amazing faculty and infrastructure, provide a fantastic environment for the academic development of a student. The wide range of extra-curricular clubs also plays a huge role in shaping one's personality. In a nutshell, it indeed teaches us 'How to learn and develop sincerity in a holistic manner.'",
      name: "SHREYANSHI SHAH",
      position: "Student",
      image: "/images/testimonials/testimonial-12.webp"
    },
    {
      id: 20,
      type: 'text',
      content: "IT department gives a friendly environment and also faculties are very friendly they are always ready to help. Department is not always focusing on theory learning they are giving practical knowledge as well. There is not the only study in the department there are so many activities as well from that students can learn so many things. Being a part of the IT department it's a very great experience.",
      name: "Harsh Viradia",
      position: "Student",
      image: "/images/testimonials/testimonial-14.webp"
    },
    {
      id: 21,
      type: 'text',
      content: "My Experience with CSPIT - IT Department is nice as faculty members are very supportive as well as collaborative, they help us to improve ourselves and guide us to enhance our academic skills. They also suggest ways to improve upon our drawbacks.",
      name: "Dhruv Patel",
      position: "Student",
      image: "/images/testimonials/testimonial-24.webp"
    },
    {
      id: 22,
      type: 'text',
      content: "It is a great experience that we are experiencing till today. To learn with our faculties of IT department is so good. Our faculty members are so supportive in every situation not only learning about the subjects but also in every manner. I'm honoured to be part of it.",
      name: "Angle Parmar",
      position: "Student",
      image: "/images/testimonials/testimonial-13.webp"
    },
    {
      id: 23,
      type: 'text',
      content: "My experience in the IT department is great and memorable. Faculty are very helpful and help me to improve my academic and interpersonal skills.",
      name: "Manan Patel",
      position: "Student",
      image: "/images/testimonials/testimonial-22.webp"
    },
    {
      id: 24,
      type: 'text',
      content: "My experience with CSPIT (IT) Department is wonderful and all the faculty members are friendly and very helpful. Seniors are also helping out. Choosing this department is the best decision of my life.",
      name: "Charmi Patel",
      position: "Student",
      image: "/images/testimonials/testimonial-23.webp"
    },
    {
      id: 25,
      type: 'text',
      content: "The IT department assuages the process of learning through their teaching methodologies and friendly behaviour. The faculties expose students to all the upcoming technologies, events and opportunities of the real world which enormously helps the students and keeps them aware. It is my sheer honour to be a part of this department and learn new skills everyday.",
      name: "Khushi Parikh",
      position: "Student",
      image: "/images/testimonials/testimonial-25.webp"
    },
    {
      id: 26,
      type: 'video',
      videoUrl: "/videos/testimonial-video1.mp4", 
      name: "Raj Patel",
      position: "Senior Developer at Microsoft",
      batch: "Batch of 2019",
      thumbnail: "/images/testimonials/testimonial-1.webp"
    },
  ];

  const currentTestimonial = testimonials[activeIndex];
  const isVideo = currentTestimonial.type === 'video';

  // Stop video and reset when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    
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
  }, [activeIndex]);

  // Handle video end event
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const handleVideoEnd = () => {
        nextTestimonial();
      };
      
      videoRef.current.addEventListener('ended', handleVideoEnd);
      
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

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute when playing
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error("Video play failed:", error));
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
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
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md group">
                        {/* Always render video element but control visibility */}
                        <video
                          ref={videoRef}
                          src={currentTestimonial.videoUrl}
                          className={`absolute inset-0 w-full h-full object-cover ${
                            isPlaying ? 'opacity-100' : 'opacity-0'
                          }`}
                          playsInline
                          muted={!isPlaying}
                        />
                        
                        {/* Thumbnail Image Background - only show when not playing */}
                        {!isPlaying && (
                          <img
                            src={currentTestimonial.thumbnail}
                            alt={currentTestimonial.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        
                        {/* Video Controls Overlay - Play Button */}
                        {!isPlaying && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <button
                              onClick={handlePlayVideo}
                              className="w-20 h-20 rounded-full bg-indigo-600 bg-opacity-90 flex items-center justify-center text-white hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg"
                              aria-label="Play video"
                            >
                              <FontAwesomeIcon icon={faPlay} className="text-2xl ml-1" />
                            </button>
                          </div>
                        )}
                        
                        {/* Pause button when playing - only visible on hover */}
                        {isPlaying && (
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button
                              onClick={handlePauseVideo}
                              className="w-20 h-20 rounded-full bg-black bg-opacity-70 flex items-center justify-center text-white hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 shadow-lg"
                              aria-label="Pause video"
                            >
                              <FontAwesomeIcon icon={faPause} className="text-2xl" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="md:w-5/12 flex flex-col justify-center">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{currentTestimonial.name}</h4>
                        <p className="text-indigo-600 font-medium mb-2">{currentTestimonial.position}</p>
                        <p className="text-gray-500 text-sm mb-4">{currentTestimonial.batch}</p>
                        <div className="text-sm text-gray-600">
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
      <div className="absolute -bottom-20 left-0 w-full leading-[0] z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e1e1e1" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;