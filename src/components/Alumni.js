import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: 'Rahul Sharma',
      image: '/images/alumni/alumni1.jpg',
      position: 'Senior Software Engineer',
      company: 'Google',
      batch: '2015',
      quote: 'The foundation I received at the IT department helped me achieve my dreams.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 2,
      name: 'Priya Patel',
      image: '/images/alumni/alumni2.jpg',
      position: 'CTO',
      company: 'Tech Innovators',
      batch: '2012',
      quote: 'The practical exposure and industry connections were invaluable for my career.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      image: '/images/alumni/alumni3.jpg',
      position: 'Founder & CEO',
      company: 'CloudSecure',
      batch: '2010',
      quote: 'The entrepreneurial spirit fostered by the department gave me the confidence to start my own venture.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 4,
      name: 'Neha Kapoor',
      image: '/images/alumni/alumni4.jpg',
      position: 'Product Manager',
      company: 'Microsoft',
      batch: '2016',
      quote: 'The holistic education I received prepared me not just for technical roles but for leadership positions.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 5,
      name: 'Rajesh Verma',
      image: '/images/alumni/alumni5.jpg',
      position: 'AI Research Scientist',
      company: 'DeepMind',
      batch: '2014',
      quote: 'The research opportunities during my time at the department laid the foundation for my career in AI.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      id: 6,
      name: 'Ananya Singh',
      image: '/images/alumni/alumni6.jpg',
      position: 'VP Engineering',
      company: 'Fintech Solutions',
      batch: '2011',
      quote: 'The diverse project experiences and industry exposure helped me grow as a technical leader.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  ];

  return (
    <section id="alumni" className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Notable Alumni</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Our graduates have gone on to achieve remarkable success in their careers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum) => (
            <div key={alum.id} className="h-full">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                <div className="h-[250px] relative overflow-hidden">
                  <img 
                    src={alum.image} 
                    alt={alum.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 right-5 flex flex-col gap-2.5">
                    <a 
                      href={alum.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/80 rounded-full flex items-center justify-center text-indigo-600"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a 
                      href={alum.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/80 rounded-full flex items-center justify-center text-indigo-600"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{alum.name}</h3>
                  <p className="text-indigo-600 font-medium mb-1">{alum.position} at {alum.company}</p>
                  <p className="text-gray-500 text-sm mb-4">Batch of {alum.batch}</p>
                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <span className="absolute top-0 left-2.5 text-5xl leading-none text-indigo-600/20 font-serif">"</span>
                    <p className="text-gray-600 italic pl-5 relative z-10">{alum.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 -bottom-[30px] left-0 w-full leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#dbdada" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Alumni;