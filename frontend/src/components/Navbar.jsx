import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCaretDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();
  const userName = user ? (user.displayName || user.email) : null;
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [prevLocation, setPrevLocation] = useState(location.pathname);

  if (location.pathname !== prevLocation) {
    setPrevLocation(location.pathname);
    setIsDropdownOpen(false);
  }

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav>
      <div className='logo'><Link to='/'>Marg.</Link></div>
      
      <div className='divert'>
        <Link to='/'>Home</Link>
        <Link to='/career'>Careers</Link>
        {/* <Link to='/blog'>Our Blog</Link> */}
        <Link to='/aboutus'>About Us</Link>
        <Link to='/job'>Jobs</Link>
        <Link to='/contactus'>Contact Us</Link>
      </div>

      <div className='sign'>
        {userName ? (
          <div className="user-profile-container">
            <button 
              className="profile-btn" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FontAwesomeIcon icon={faCircleUser} className="profile-icon" />
              <span className="profile-name">{userName}</span>
              <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
            </button>

            {isDropdownOpen && (
              <div className="profile-dropdown">
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/sign'><span className='in'>Sign in</span></Link>
        )}
      </div>
    </nav>
  );
}