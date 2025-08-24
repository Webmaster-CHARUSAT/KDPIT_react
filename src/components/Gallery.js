import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt, 
  faTimes, 
  faChevronLeft, 
  faChevronRight,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: '/images/gallery/gallery1.jpg', title: 'Campus Life', category: 'campus' },
    { id: 2, src: '/images/gallery/gallery2.jpg', title: 'Technical Fest', category: 'events' },
    { id: 3, src: '/images/gallery/gallery3.jpg', title: 'Workshop Session', category: 'workshops' },
    { id: 4, src: '/images/gallery/gallery4.jpg', title: 'Hackathon', category: 'events' },
    { id: 5, src: '/images/gallery/gallery5.jpg', title: 'Cultural Event', category: 'cultural' },
    { id: 6, src: '/images/gallery/gallery6.jpg', title: 'Sports Day', category: 'sports' },
    { id: 7, src: '/images/gallery/gallery7.jpg', title: 'Lab Session', category: 'academic' },
    { id: 8, src: '/images/gallery/gallery8.jpg', title: 'Guest Lecture', category: 'academic' },
    { id: 9, src: '/images/gallery/gallery9.jpg', title: 'Award Ceremony', category: 'events' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Technical Symposium',
      date: '2024-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description: 'A day-long event featuring technical paper presentations, project exhibitions, and expert talks.',
      image: '/images/gallery/event1.jpg',
      category: 'technical'
    },
    {
      id: 2,
      title: 'Hackathon 2024',
      date: '2024-04-22',
      time: '10:00 AM - 6:00 PM',
      location: 'IT Labs',
      description: '24-hour coding competition to solve real-world problems using technology.',
      image: '/images/gallery/event2.jpg',
      category: 'competition'
    },
    {
      id: 3,
      title: 'Industry Expert Talk Series',
      date: '2024-05-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall',
      description: 'Leading industry experts share insights on emerging technologies and career opportunities.',
      image: '/images/gallery/event3.jpg',
      category: 'workshop'
    }
  ];

  const filters = [
    { key: 'all', label: 'All', icon: faFilter },
    { key: 'campus', label: 'Campus', icon: faMapMarkerAlt },
    { key: 'events', label: 'Events', icon: faCalendarAlt },
    { key: 'academic', label: 'Academic', icon: faClock },
    { key: 'cultural', label: 'Cultural', icon: faCalendarAlt },
    { key: 'sports', label: 'Sports', icon: faCalendarAlt },
    { key: 'workshops', label: 'Workshops', icon: faClock }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="gallery" className="py-20 "
    style={{backgroundColor: '#e1e1e1'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery & Events
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our vibrant campus life through memorable moments and exciting upcoming events
          </motion.p>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 lg:mb-0">
              Photo Gallery
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-md'
                  }`}
                >
                  <FontAwesomeIcon icon={filter.icon} className="w-3 h-3" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="aspect-square">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                      <p className="text-white/80 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h3>
            <p className="text-gray-600">
              Don't miss out on these exciting events and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      {formatDate(event.date).split(' ')[1].replace(',', '')}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(event.date).split(' ')[0].substring(0, 3)}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2 text-indigo-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 text-indigo-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6 bg-white/70">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 capitalize">
                  Category: {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;