import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareXTwitter, faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section brand-section">
          <h2 className="footer-logo">Marg.</h2>
          <p className="footer-tagline">
            Clarity precedes success. Discover your exact career trajectory and build a definitive roadmap for your future.
          </p>
          <div className="social-links">
            <a href="#linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#twitter" aria-label="Twitter"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
            <a href="#instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          </div>
        </div>

        
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/job">Jobs</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>

        
        <div className="footer-section contact-section">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:marg.supports@gmail.com">marg.supports@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+91 93945 17371</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <span>Assam, India</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Marg. All rights reserved.</p>
      </div>
    </footer>
  );
}