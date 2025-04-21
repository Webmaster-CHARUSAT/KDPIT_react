import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clubs from './components/Clubs';
import Certifications from './components/Certifications';
import StudentChapters from './components/StudentChapters';
import Alumni from './components/Alumni';
import Gallery from './components/Gallery';
import Recruiters from './components/Recruiters';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';
import Wave from './components/wave';
import BestPracticesSection from './components/BestPracticesSection';
import FacultyDirectory from './components/Faculty';
import ProjectsPage from './components/projects';
import MessageSection from './components/Message';
import AnnouncementBar from './components/Annoucement';
import ApplyNowButton from './components/ApplyNowButton';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <AchievementsSection />
              <BestPracticesSection />
              {/* <Wave /> */}
              <Clubs />
              <Certifications />
              <StudentChapters />
              <Alumni />
              <Gallery />
              <Recruiters />
              <MessageSection />
              <Testimonials />
              <Contact />
              <AnnouncementBar />
              <ApplyNowButton />
            </>
          } />

          {/* Faculty Directory Page Route */}
          <Route path="/faculty" element={<FacultyDirectory />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add more routes for other standalone pages if needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;