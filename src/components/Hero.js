import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/images/extra/1.jpg",
      title: "Welcome to Information Technology Department",
      subtitle: "Shaping the future through technology and innovation",
      btnText: "Explore Programs",
      btnLink: "#about"
    },
    {
      id: 2,
      image: "/images/extra/2.jpg",
      title: "Innovative Learning Environment",
      subtitle: "Experience hands-on projects and real-world challenges",
      btnText: "See Projects",
      btnLink: "#projects"
    },
    {
      id: 3,
      image: "/images/extra/3.jpg",
      title: "Expert Faculty",
      subtitle: "Learn from experienced professors and industry leaders",
      btnText: "Meet Our Team",
      btnLink: "#faculty"
    },
    {
      id: 4,
      image: "/images/extra/4.jpg",
      title: "Cutting-Edge Research",
      subtitle: "Join research groups and contribute to new discoveries",
      btnText: "Research Labs",
      btnLink: "#research"
    },
    {
      id: 5,
      image: "/images/extra/5.jpg",
      title: "Vibrant Student Life",
      subtitle: "Participate in clubs, events, and hackathons",
      btnText: "Student Clubs",
      btnLink: "#student-clubs"
    },
    {
      id: 6,
      image: "/images/extra/6.jpg",
      title: "Global Opportunities",
      subtitle: "Exchange programs and international collaborations",
      btnText: "Go Global",
      btnLink: "#global"
    },
    {
      id: 7,
      image: "/images/extra/7.jpg",
      title: "Modern Infrastructure",
      subtitle: "Smart classrooms, digital library, and more",
      btnText: "Our Campus",
      btnLink: "#infrastructure"
    },
    {
      id: 8,
      image: "/images/extra/8.jpg",
      title: "Industry Partnerships",
      subtitle: "Collaborate with top tech companies and startups",
      btnText: "Our Partners",
      btnLink: "#recruiters"
    },
    {
      id: 9,
      image: "/images/extra/9.jpg",
      title: "Alumni Success Stories",
      subtitle: "Our graduates excel in leading organizations worldwide",
      btnText: "Alumni Network",
      btnLink: "#alumni"
    },
    {
      id: 10,
      image: "/images/extra/10.jpg",
      title: "Join Us Today!",
      subtitle: "Be a part of a thriving and innovative community",
      btnText: "Apply Now",
      btnLink: "#apply"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500); // Match this with transition duration
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div className="h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            </div>
            
            {/* Caption Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                  className="max-w-xl md:max-w-2xl text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-100 mb-8">
                    {slide.subtitle}
                  </p>
                  <a 
                    href={slide.btnLink}
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30"
                  >
                    {slide.btnText}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-transparent border border-white hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Bottom Wave Shape */}
      <div className="absolute -bottom-20 left-0 w-full z-20 line-height-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,96C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Play, Pause, ChevronRight, Star, Users, Award, TrendingUp } from 'lucide-react';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const slides = [
//     {
//       id: 1,
//       image: "/images/extra/1.jpg",
//       category: "Welcome",
//       title: "Information Technology Department",
//       subtitle: "Shaping tomorrow's digital leaders through cutting-edge technology and innovation",
//       btnText: "Explore Programs",
//       btnLink: "#about",
//       stats: { icon: Users, value: "1200+", label: "Students" },
//       accent: "from-blue-500 to-indigo-600"
//     },
//     {
//       id: 2,
//       image: "/images/extra/2.jpg",
//       category: "Innovation",
//       title: "Hands-On Learning Environment",
//       subtitle: "Experience real-world projects with industry-standard tools and methodologies",
//       btnText: "View Projects",
//       btnLink: "#projects",
//       stats: { icon: TrendingUp, value: "150+", label: "Projects" },
//       accent: "from-purple-500 to-violet-600"
//     },
//     {
//       id: 3,
//       image: "/images/extra/3.jpg",
//       category: "Excellence",
//       title: "World-Class Faculty",
//       subtitle: "Learn from distinguished professors and industry veterans with years of expertise",
//       btnText: "Meet Faculty",
//       btnLink: "#faculty",
//       stats: { icon: Award, value: "25+", label: "Experts" },
//       accent: "from-emerald-500 to-teal-600"
//     },
//     {
//       id: 4,
//       image: "/images/extra/4.jpg",
//       category: "Research",
//       title: "Pioneering Research Labs",
//       subtitle: "Contribute to breakthrough discoveries in AI, cybersecurity, and emerging technologies",
//       btnText: "Research Centers",
//       btnLink: "#research",
//       stats: { icon: Star, value: "50+", label: "Publications" },
//       accent: "from-orange-500 to-red-500"
//     },
//     {
//       id: 5,
//       image: "/images/extra/5.jpg",
//       category: "Community",
//       title: "Dynamic Student Life",
//       subtitle: "Join vibrant clubs, compete in hackathons, and build lifelong connections",
//       btnText: "Student Activities",
//       btnLink: "#student-clubs",
//       stats: { icon: Users, value: "20+", label: "Clubs" },
//       accent: "from-pink-500 to-rose-600"
//     },
//     {
//       id: 6,
//       image: "/images/extra/6.jpg",
//       category: "Global",
//       title: "International Opportunities",
//       subtitle: "Expand horizons through exchange programs and global industry partnerships",
//       btnText: "Go Global",
//       btnLink: "#global",
//       stats: { icon: TrendingUp, value: "15+", label: "Partners" },
//       accent: "from-cyan-500 to-blue-600"
//     }
//   ];

//   // Auto-slide with progress tracking
//   useEffect(() => {
//     let interval;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         setProgress((prev) => {
//           if (prev >= 100) {
//             goToNextSlide();
//             return 0;
//           }
//           return prev + 2;
//         });
//       }, 100);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, currentSlide]);

//   // Mouse movement tracking for parallax
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     setProgress(0);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     setProgress(0);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setProgress(0);
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-10 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
//         <motion.div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
//           }}
//           animate={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
//           }}
//           transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
//         />
//       </div>

//       {/* Main Slides Container */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 h-full w-full"
//         >
//           {/* Background Image with Parallax */}
//           <motion.div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{ 
//               backgroundImage: `url(${slides[currentSlide].image})`,
//               transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Content Overlay */}
//       <div className="absolute inset-0 flex items-center z-20">
//         <div className="container mx-auto px-6 md:px-8">
//           <div className="max-w-4xl">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, y: 50, x: -30 }}
//                 animate={{ opacity: 1, y: 0, x: 0 }}
//                 exit={{ opacity: 0, y: -30, x: 30 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="text-white"
//               >
//                 {/* Category Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.4 }}
//                   className="inline-flex items-center gap-2 mb-6"
//                 >
//                   <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${slides[currentSlide].accent} backdrop-blur-sm`}>
//                     <span className="text-sm font-semibold uppercase tracking-wider">
//                       {slides[currentSlide].category}
//                     </span>
//                   </div>
//                   <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
//                 </motion.div>

//                 {/* Main Title */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                   className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-none"
//                 >
//                   <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
//                     {slides[currentSlide].title}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5, duration: 0.6 }}
//                   className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed"
//                 >
//                   {slides[currentSlide].subtitle}
//                 </motion.p>

//                 {/* Stats and CTA Container */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.7, duration: 0.6 }}
//                   className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
//                 >
//                   {/* Stat Card */}
//                   <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
//                     <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${slides[currentSlide].accent} flex items-center justify-center`}>
//                       {(() => {
//                         const Icon = slides[currentSlide].stats.icon;
//                         return <Icon className="w-6 h-6 text-white" />;
//                       })()}
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-white">
//                         {slides[currentSlide].stats.value}
//                       </div>
//                       <div className="text-sm text-gray-300">
//                         {slides[currentSlide].stats.label}
//                       </div>
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <motion.a 
//                     href={slides[currentSlide].btnLink}
//                     className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${slides[currentSlide].accent} text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span>{slides[currentSlide].btnText}</span>
//                     <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                     <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
      
//       {/* Enhanced Navigation Controls */}
//       <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-8 z-30">
//         <motion.button 
//           onClick={goToPrevSlide}
//           className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </motion.button>
//       </div>

//       <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-8 z-30">
//         <motion.button 
//           onClick={goToNextSlide}
//           className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </motion.button>
//       </div>
      
//       {/* Enhanced Bottom Controls */}
//       <div className="absolute bottom-8 left-0 right-0 z-30 px-6 md:px-8">
//         <div className="flex items-center justify-between max-w-6xl mx-auto">
//           {/* Play/Pause Control */}
//           <motion.button
//             onClick={togglePlayPause}
//             className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/30"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//           >
//             {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//           </motion.button>

//           {/* Enhanced Indicators */}
//           <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
//             {slides.map((_, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className="relative group"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label={`Go to slide ${index + 1}`}
//               >
//                 <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentSlide 
//                     ? 'bg-white scale-125' 
//                     : 'bg-white/40 hover:bg-white/70'
//                 }`}></div>
//                 {index === currentSlide && (
//                   <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
//                 )}
//               </motion.button>
//             ))}
//           </div>

//           {/* Progress Bar */}
//           <div className="flex items-center gap-3 text-white text-sm">
//             <span>{String(currentSlide + 1).padStart(2, '0')}</span>
//             <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-white rounded-full"
//                 style={{ width: `${progress}%` }}
//                 transition={{ duration: 0.1 }}
//               ></motion.div>
//             </div>
//             <span>{String(slides.length).padStart(2, '0')}</span>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <motion.div
//         className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full"
//         animate={{
//           y: [0, -20, 0],
//           opacity: [0.3, 1, 0.3],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full"
//         animate={{
//           y: [0, -15, 0],
//           x: [0, 10, 0],
//           opacity: [0.4, 1, 0.4],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
      
//       {/* Modern Wave Separator */}
//       <div className="absolute -bottom-px left-0 w-full z-20">
//         <svg 
//           className="w-full h-24 md:h-32" 
//           viewBox="0 0 1440 320" 
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path 
//             d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
//             fill="white"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;