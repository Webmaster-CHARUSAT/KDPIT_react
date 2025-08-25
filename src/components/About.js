// import React from 'react';
// import CountUp from 'react-countup';
// import { motion } from 'framer-motion';

// const About = () => {
//   const stats = [
//     { id: 1, number: 25, suffix: '+', text: 'Faculty Members' },
//     { id: 2, number: 1200, suffix: '+', text: 'Students' },
//     { id: 3, number: 98, suffix: '%', text: 'Placement Rate' },
//     { id: 4, number: 50, suffix: '+', text: 'Research Papers' }
//   ];

//   return (
//   <section id="about" className="py-20 bg-white/70">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image Column */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-lg shadow-xl">
//               {/* Main Image */}
//               <img 
//                 src="/images/about/department.webp" 
//                 alt="Department Building" 
//                 className="w-full h-auto object-cover rounded-lg"
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
              
//               {/* Department Highlight Badge */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
//                 <div className="text-sm font-medium uppercase tracking-wider">Excellence in Technology Education</div>
//                 <div className="text-xs mt-1 opacity-80">Established 2000</div>
//               </div>
//             </div>
            
//             {/* Decorative Elements */}
//             <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 -top-10 -left-10"></div>
//             <div className="absolute -z-10 w-48 h-48 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 -bottom-5 -right-5"></div>
//           </motion.div>
          
//           {/* Content Column */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">Department of Information Technology</h3>
//             <p className="text-gray-600 mb-6">
//               Established in 2000, the Department of Information Technology at CSPIT has been at the forefront of technological education and research. We offer undergraduate and postgraduate programs designed to produce industry-ready professionals with strong technical foundations.
//             </p>
//             <p className="text-gray-600 mb-8">
//               Our curriculum is regularly updated to reflect the latest technological trends and industry requirements. The department has well-equipped laboratories, experienced faculty, and strong industry connections that help our students excel in their careers.
//             </p>
            
//             {/* Vision & Mission Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//                 <h4 className="text-lg font-semibold text-indigo-600 mb-3 pb-3 border-b border-indigo-100 relative">
//                   Vision
//                   <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   To develop IT professionals with ethical and human values through learner-centric education and research.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//                 <h4 className="text-lg font-semibold text-indigo-600 mb-3 pb-3 border-b border-indigo-100 relative">
//                   Mission
//                   <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   To impart quality education through innovative teaching-learning processes and state-of-the-art technologies in IT.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Stats Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//           {stats.map(stat => (
//             <motion.div 
//               key={stat.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: stat.id * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
//             >
//               <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 <CountUp end={stat.number} duration={2.5} />
//                 <span>{stat.suffix}</span>
//               </h2>
//               <p className="text-gray-600">{stat.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp, Eye, Target, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  const stats = [
    { id: 1, number: 25, suffix: '+', text: 'Expert Faculty', icon: Users, color: 'from-blue-500 to-indigo-600' },
    { id: 2, number: 1200, suffix: '+', text: 'Active Students', icon: BookOpen, color: 'from-purple-500 to-violet-600' },
    { id: 3, number: 98, suffix: '%', text: 'Placement Success', icon: Award, color: 'from-emerald-500 to-teal-600' },
    { id: 4, number: 50, suffix: '+', text: 'Research Papers', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Cutting-edge research facilities and innovation labs fostering creative problem-solving.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Curriculum aligned with international standards and industry best practices.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Experienced faculty with industry expertise providing personalized guidance.'
    }
  ];

  const tabContent = {
    vision: {
      icon: Eye,
      title: 'Our Vision',
      content: 'To be a globally recognized center of excellence in Information Technology education, developing ethical leaders and innovators who drive technological advancement and societal progress through cutting-edge research and industry collaboration.'
    },
    mission: {
      icon: Target,
      title: 'Our Mission',
      content: 'To provide world-class IT education through innovative pedagogy, state-of-the-art infrastructure, and industry partnerships. We nurture critical thinking, creativity, and ethical values while preparing students for global technological challenges.'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const CountUpAnimation = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    
    React.useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = end / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [end]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background Elements
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div> */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">About Our Department</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 bg-clip-text text-transparent">
              Shaping the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image & Features */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Image Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/images/about/department.webp" 
                    alt="Department Building" 
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-slate-800 text-base">Excellence in IT Education</h4>
                          <p className="text-sm text-slate-600">Since 2000 • 24+ Years of Innovation</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid - Horizontal Layout */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-white/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Department Header */}
            <div>
              <h3 className="text-2xl xl:text-3xl font-bold mb-4">
                <span className="text-slate-800">Department of </span>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Information Technology
                </span>
              </h3>
              <div className="text-slate-600 space-y-3 leading-relaxed">
                <p>
                  Since our establishment in 2000, we have been pioneering excellence in technology education at CSPIT. Our commitment to innovation, research, and industry collaboration has made us a leading destination for aspiring IT professionals.
                </p>
                <p>
                  We offer comprehensive undergraduate and postgraduate programs that blend theoretical knowledge with practical expertise. Our curriculum is continuously evolved to meet emerging industry demands and global technological trends.
                </p>
              </div>
            </div>

            {/* Vision & Mission Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(tabContent).map(([key, content]) => {
                const IconComponent = content.icon;
                return (
                  <div 
                    key={key}
                    className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5" />
                        <h4 className="font-semibold">{content.title}</h4>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {content.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(stat => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/50 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <h3 className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <CountUpAnimation end={stat.number} suffix={stat.suffix} />
                  </h3>
                  
                  {/* Label */}
                  <p className="text-slate-600 font-medium">{stat.text}</p>
                  
                  {/* Decorative Line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 rounded-full group-hover:w-20 transition-all duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Custom CSS for grid pattern */}
      {/* <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style> */}
    </section>
  );
};

export default About;