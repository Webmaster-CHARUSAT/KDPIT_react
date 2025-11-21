import React from 'react';

const StudentChapters = () => {
  const chapters = [
    {
      id: 'IEEE',
      name: 'IEEE Student Branch',
      logo: '/images/chapters/ieee.webp',
      description: 'Promoting technological innovation and excellence for the benefit of humanity.',
      members: '85+',
      activities: '15+',
      color: "#FF9900",
      gradient: "from-orange-400 to-orange-600",
      link: ''
    },
    {
      id: 'ACM',
      name: 'ACM Student Chapter',
      logo: '/images/chapters/acm.webp',
      description: 'Advancing computing as a science and profession through leadership, education, and knowledge sharing.',
      members: '72+',
      activities: '20+',
      color: "#4285F4", 
      gradient: "from-blue-400 to-blue-600",
      link: ''
    },
    {
      id: 'CSI',
      name: 'CSI Student Chapter',
      logo: '/images/chapters/csi.webp',
      description: 'Computer Society of India student branch focused on facilitating research, knowledge sharing, and career enhancement.',
      members: '68+',
      activities: '18+',
      color: "#34A853", 
      gradient: "from-green-400 to-green-600",
      link: ''
    },
    {
      id: 'NPTEL',
      name: 'NPTEL Student Chapter',
      logo: '/images/chapters/nptel.webp',
      description: 'NPTEL student chapter provides online courses from IITs and IISc to enhance learning and skills.',
      members: '68+',
      activities: '18+',
      color: "#9C27B0", 
      gradient: "from-purple-400 to-purple-600",
      link: ''
    }
  ];

  return (
    <section 
      id="chapters" 
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex items-center py-20 overflow-hidden"
      style={{
        // backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        backgroundImage: "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('/images/extra/aws7.webp')"
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Student Chapters
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of prestigious professional organizations to expand your knowledge and network
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {chapters.map((chapter, index) => {
            const clickable = !!chapter.link;
            return (
              <div
                key={chapter.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'slideInUp 0.8s ease-out forwards',
                  cursor: clickable ? 'pointer' : 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = chapter.color + '15';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '';
                }}
                onClick={clickable ? () => window.open(chapter.link, '_blank', 'noopener,noreferrer') : undefined}
                tabIndex={clickable ? 0 : -1}
                role={clickable ? 'button' : undefined}
                aria-label={clickable ? `Visit ${chapter.name} website` : undefined}
              >
                {/* Logo Container */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div className="w-36 h-36 bg-white rounded-3xl p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                    <img 
                      src={chapter.logo} 
                      alt={chapter.name}
                      className="w-full h-full object-contain rounded-3xl p-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gray-200 rounded-lg items-center justify-center text-gray-500 text-sm hidden font-bold"
                    >
                      {chapter.id}
                    </div>
                  </div>
                </div>

                {/* Chapter Name */}
                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {chapter.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center text-sm mb-6 leading-relaxed">
                  {chapter.description}
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-8 mt-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{chapter.members}</div>
                    <div className="text-gray-300 text-xs">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{chapter.activities}</div>
                    <div className="text-gray-300 text-xs">Events</div>
                  </div>
                </div>

                {/* Decorative element */}
                <div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: chapter.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default StudentChapters;