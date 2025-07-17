import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className=" py-0"
    style={{backgroundColor: '#e1e1e1'}}>
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">Get in touch with us for any inquiries or information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {/* Contact Info - 1/3 of the grid */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
            <h3 className="text-lg font-semibold text-indigo-600 mb-4 pb-2 relative">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>

            <div className="flex mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-800 mb-1">Location</h4>
                <p className="text-gray-600 text-sm mb-0">Department of Information Technology</p>
                <p className="text-gray-600 text-sm mb-0">CSPIT, CHARUSAT Campus</p>
                <p className="text-gray-600 text-sm mb-0">Changa, Anand - 388421, Gujarat</p>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-4">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-800 mb-1">Phone</h4>
                <a href="tel:+912697265131" className="hover:text-green-400 transition-colors duration-300">
                    +91-2697-265131
                  </a>
                
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-800 mb-1">Email</h4>
                <a href="mailto:hod.it@charusat.ac.in" className="hover:text-green-400 transition-colors duration-300">
                    hod.it@charusat.ac.in
                  </a>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          {/* Map - 2/3 of the grid */}
          <div className="rounded-xl overflow-hidden shadow-md lg:col-span-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1461558974!2d72.81814731496287!3d22.59923698517298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c30bd44029%3A0xcb37ad8a1a352aa5!2sCHARUSAT!5e0!3m2!1sen!2sin!4v1647419892548!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '300px' }} 
              allowFullScreen="" 
              loading="lazy" 
              title="CHARUSAT Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;