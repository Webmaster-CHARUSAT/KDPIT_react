import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Get in touch with us for any inquiries or information</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-8 pb-4 relative">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            
            <div className="flex mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-5">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Location</h4>
                <p className="text-gray-600 mb-1">Department of Information Technology</p>
                <p className="text-gray-600 mb-1">CSPIT, CHARUSAT Campus</p>
                <p className="text-gray-600">Changa, Anand - 388421, Gujarat</p>
              </div>
            </div>
            
            <div className="flex mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-5">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-600 mb-1">+91 2697 265011</p>
                <p className="text-gray-600">+91 2697 265021</p>
              </div>
            </div>
            
            <div className="flex mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg shrink-0 mr-5">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                <p className="text-gray-600 mb-1">info.it@charusat.ac.in</p>
                <p className="text-gray-600">hod.it@charusat.ac.in</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-10">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-8 pb-4 relative">
              Send us a Message
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            </h3>
            
            {showAlert && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                <span className="block sm:inline">Your message has been sent successfully!</span>
                <button 
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setShowAlert(false)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="mb-5">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="mb-5">
                <textarea 
                  name="message" 
                  rows={5} 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1461558974!2d72.81814731496287!3d22.59923698517298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c30bd44029%3A0xcb37ad8a1a352aa5!2sCHARUSAT!5e0!3m2!1sen!2sin!4v1647419892548!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="CHARUSAT Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;