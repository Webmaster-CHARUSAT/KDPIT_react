import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <AchievementsSection/>
      <BestPracticesSection/>
      {/* <Wave /> */}
      <Clubs />
      <Certifications />
      <StudentChapters />
      <Alumni />
      <Gallery />
      <Recruiters />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;