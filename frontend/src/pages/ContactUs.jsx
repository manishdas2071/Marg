import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about your career trajectory or our counseling services? We are here to help.</p>
      </div>

      <div className="contact-content-grid">
        
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>

          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 93945 17371</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>marg.supports@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
            <div>
              <h3>Office</h3>
              <p>Assam, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Narendra Modi"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="modi@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}