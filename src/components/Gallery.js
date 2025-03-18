import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Card, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/gallery.css';

const Gallery = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeKey, setActiveKey] = useState('gallery');

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
      date: '2023-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description: 'A day-long event featuring technical paper presentations, project exhibitions, and expert talks.',
      image: '/images/gallery/event1.jpg'
    },
    {
      id: 2,
      title: 'Hackathon 2023',
      date: '2023-04-22',
      time: '10:00 AM - 6:00 PM',
      location: 'IT Labs',
      description: '24-hour coding competition to solve real-world problems using technology.',
      image: '/images/gallery/event2.jpg'
    },
    {
      id: 3,
      title: 'Industry Expert Talk Series',
      date: '2023-05-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall',
      description: 'Leading industry experts share insights on emerging technologies and career opportunities.',
      image: '/images/gallery/event3.jpg'
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Workshop on AI & Machine Learning',
      date: '2023-03-10',
      description: 'A hands-on workshop conducted by industry experts on the latest AI technologies.',
      image: '/images/gallery/past1.jpg'
    },
    {
      id: 2,
      title: 'Industry Visit to Tech Park',
      date: '2023-02-25',
      description: 'Students visited leading tech companies to understand industry operations.',
      image: '/images/gallery/past2.jpg'
    },
    {
      id: 3,
      title: 'Annual Cultural Fest',
      date: '2023-01-15',
      description: 'A celebration of art, culture, and talent with various performances and competitions.',
      image: '/images/gallery/past3.jpg'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="gallery" className="gallery-section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Gallery & Events</h2>
          <div className="title-underline"></div>
        </div>
        
        <Tabs
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}
          className="gallery-tabs"
          id="gallery-tabs"
        >
          <Tab eventKey="gallery" title="Gallery">
            <div className="gallery-filter" data-aos="fade-up">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Campus</button>
              <button className="filter-btn">Events</button>
              <button className="filter-btn">Academic</button>
              <button className="filter-btn">Cultural</button>
            </div>
            
            <Row className="gallery-container">
              <AnimatePresence>
                {galleryImages.map((image) => (
                  <Col lg={4} md={6} className="mb-4" key={image.id}>
                    <motion.div 
                      className="gallery-item"
                      data-aos="zoom-in"
                      data-aos-delay={image.id * 50}
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.3 }
                      }}
                      onClick={() => handleImageClick(image)}
                    >
                      <img src={image.src} alt={image.title} />
                      <div className="gallery-overlay">
                        <h5>{image.title}</h5>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Tab>
          
          <Tab eventKey="upcoming" title="Upcoming Events">
            <Row className="events-container">
              {upcomingEvents.map((event) => (
                <Col lg={4} md={6} className="mb-4" key={event.id} data-aos="fade-up" data-aos-delay={event.id * 100}>
                  <Card className="event-card">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-date">
                        <span className="day">{formatDate(event.date).split(' ')[1].replace(',', '')}</span>
                        <span className="month">{formatDate(event.date).split(' ')[0].substring(0, 3)}</span>
                      </div>
                    </div>
                    <Card.Body>
                      <h3>{event.title}</h3>
                      <div className="event-details">
                        <p><i className="far fa-clock"></i> {event.time}</p>
                        <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <a href="#register" className="register-btn">Register Now</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          
          <Tab eventKey="past" title="Past Events">
            <Row className="events-container">
              {pastEvents.map((event) => (
                <Col lg={4} md={6} className="mb-4" key={event.id} data-aos="fade-up" data-aos-delay={event.id * 100}>
                  <Card className="past-event-card">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-date past">
                        <span>{formatDate(event.date)}</span>
                      </div>
                    </div>
                    <Card.Body>
                      <h3>{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <a href="#gallery" className="gallery-link">View Photos</a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
      
      {/* Image Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage.src} alt={selectedImage.title} className="img-fluid" />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;