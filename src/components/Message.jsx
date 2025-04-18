// import React from 'react';

// const MessageSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//       {/* Decorative background elements */}
//       {/* <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-6"></div>
//       <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-r from-indigo-500/10 to-orange-400/10 transform skew-y-6"></div> */}
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">Messages from our academic leaders</p>
//         </div>
        
//         <div className="space-y-16">
//           {/* Dean's Message */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group">
//             <div className="flex flex-col lg:flex-row">
//               {/* Image column - left on desktop */}
//               <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 lg:p-10 flex items-center justify-center">
//                 <div className="w-48 h-48 rounded-full border-4 border-white/70 overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
//                   <img 
//                     src="/images/message/dean.webp" 
//                     alt="Dean" 
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/200x200?text=Dean';
//                     }}
//                   />
//                 </div>
//               </div>
              
//               {/* Content column - right on desktop */}
//               <div className="lg:w-2/3 p-6 lg:p-10">
//                 <div className="border-b border-gray-200 pb-4 mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800 flex items-center">
//                     <span className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 mr-3 flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                       </svg>
//                     </span>
//                     Message from Dean's Desk
//                   </h3>
//                 </div>
                
//                 <div className="prose prose-lg max-w-none">
//                   <p className="text-gray-600 leading-relaxed">
//                     Welcome to CSPIT, CHARUSAT! As Dean, I'm thrilled to lead our community of scholars, learners, and innovators. Together, we embrace innovation, diversity, and collaboration. Students, make every opportunity to grow and create a difference. Faculty and dedicated scholars: thank you! Let's strive to make our institute strong. Let's foster an inclusive environment where every voice matters. I invite you to join me as we explore the wonders of inquiry and creativity. The journey is enriching and rewarding.
//                   </p>
                  
//                   <div className="mt-8 flex items-center">
//                     <div className="h-12 w-1 bg-indigo-600 rounded-full mr-4"></div>
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-800">Dr. Mayurdhvajsinh Chudasama</h4>
//                       <p className="text-indigo-600 font-medium">Dean, IT</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Principal's Message */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group">
//             <div className="flex flex-col lg:flex-row-reverse">
//               {/* Image column - right on desktop */}
//               <div className="lg:w-1/3 bg-gradient-to-br from-purple-600 to-orange-500 p-6 lg:p-10 flex items-center justify-center">
//                 <div className="w-48 h-48 rounded-full border-4 border-white/70 overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
//                   <img 
//                     src="/images/message/principal.png" 
//                     alt="Principal" 
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/200x200?text=Principal';
//                     }}
//                   />
//                 </div>
//               </div>
              
//               {/* Content column - left on desktop */}
//               <div className="lg:w-2/3 p-6 lg:p-10">
//                 <div className="border-b border-gray-200 pb-4 mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800 flex items-center">
//                     <span className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 mr-3 flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                       </svg>
//                     </span>
//                     Message from Principal's Desk
//                   </h3>
//                 </div>
                
//                 <div className="prose prose-lg max-w-none">
//                   <p className="text-gray-600 leading-relaxed">
//                     Welcome to CSPIT, where we foster excellence and innovation in engineering education. In our dynamic, inclusive environment, you'll find a vibrant community of learners and educators. Faculty, staff, and students work together to create a learning culture that promotes intellectual growth and personal development. Here, we combine cutting-edge technology with a strong foundation in fundamentals. We establish links to industry, create job opportunities, and encourage innovation. We enable future leaders like yourselves, ready for challenges, work, and play in our modern world of engineering together.
//                   </p>
                  
//                   <div className="mt-8 flex items-center">
//                     <div className="h-12 w-1 bg-purple-600 rounded-full mr-4"></div>
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-800">Dr. Ritesh Patel</h4>
//                       <p className="text-purple-600 font-medium">Principal, CSPIT</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative circles */}
//       <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
//       <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
//     </section>
//   );
// };

// export default MessageSection;



import React, { useState, useEffect } from 'react';

const MessageSection = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  
  useEffect(() => {
    // Simple intersection observer implementation with native browser API
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'dean-message' && entry.isIntersecting) {
          setIsVisible1(true);
        }
        if (entry.target.id === 'principal-message' && entry.isIntersecting) {
          setIsVisible2(true);
        }
      });
    }, { threshold: 0.2 });
    
    // Observe the message elements
    const deanMessage = document.getElementById('dean-message');
    const principalMessage = document.getElementById('principal-message');
    
    if (deanMessage) observer.observe(deanMessage);
    if (principalMessage) observer.observe(principalMessage);
    
    // Cleanup observer on component unmount
    return () => {
      if (deanMessage) observer.unobserve(deanMessage);
      if (principalMessage) observer.unobserve(principalMessage);
    };
  }, []);

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-400 to-orange-400 opacity-90"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-5">
          {/* Dean's Message */}
          <div 
            id="dean-message"
            className={`bg-black/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-800 ease-out ${
              isVisible1 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-3/4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  Message from Dean's Desk
                </h2>
                <div className="text-white/90 space-y-4">
                  <p>Welcome to CSPIT, CHARUSAT! As Dean, I'm thrilled to lead our community of scholars, learners, and innovators. Together, let's embrace excellence, diversity, and collaboration. Students, seize every opportunity to grow and make a difference. Faculty, your dedication shapes futures. Staff, your efforts keep our institute thriving. Let's foster an inclusive environment where every voice matters. As we embark on this journey, let's uphold the values of integrity and empathy. I'm excited to witness our collective achievements.</p>
                  <p className="font-semibold mt-4">Dr. Vijaykumar Chaudhary<br/>Dean, FTE</p>
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
                  <img 
                    src="/images/message/dean.Webp" 
                    alt="Dean" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200?text=Dean';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Principal's Message */}
          <div 
            id="principal-message"
            className={`bg-black/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-800 ease-out ${
              isVisible2 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:order-2 md:w-3/4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  Message from Principal's Desk
                </h2>
                <div className="text-white/90 space-y-4">
                  <p>Welcome to CSPIT, where we foster excellence and innovation in engineering education. To our students: Embrace opportunities, challenge yourself, and cultivate a passion for lifelong learning. Faculty: Your dedication molds future leaders; continue to inspire and innovate. Staff: Your commitment ensures our success; thank you for your invaluable contributions. Together, let's uphold integrity, excellence, and inclusivity. As Principal, I'm excited about the journey ahead. Let's collaborate, learn, and grow as we shape the future of engineering together.</p>
                  <p className="font-semibold mt-4">Dr. Trushit Upadhyaya<br/>Principal, CSPIT</p>
                </div>
              </div>
              <div className="md:order-1 md:w-1/4 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
                  <img 
                    src="/images/message/principal.png" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200?text=Principal';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default MessageSection;