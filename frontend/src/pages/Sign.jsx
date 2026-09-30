import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faCircleExclamation, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

// Turn Firebase error codes into friendly messages
const friendlyError = (code) => {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Invalid email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again in a few minutes.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.';
    default:
      return 'Something went wrong. Please try again.';
  }
};

export default function Sign() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); 
  const location = useLocation();
  const redirectMessage = location.state?.redirectMessage;
  const redirectTo = location.state?.from || '/';
  
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const [inlineError, setInlineError] = useState('');
  const [popup, setPopup] = useState({ message: '', type: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (inlineError) setInlineError('');
  };

  const clearFormsAndErrors = () => {
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setInlineError('');
    setPopup({ message: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInlineError('');
    setPopup({ message: '', type: '' });

    if (isLogin) {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        navigate(redirectTo, { replace: true });
      } catch (error) {
        setInlineError(friendlyError(error.code));
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setInlineError('Passwords do not match!');
        return;
      }

      try {
        const cred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(cred.user, { displayName: formData.name });
        navigate(redirectTo, { replace: true });
      } catch (error) {
        setInlineError(friendlyError(error.code));
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      console.error('Firebase Error:', error);
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') return;
      setPopup({ message: 'Could not complete Google Sign In. Please try again.', type: 'error' });
    }
  };

  const handleForgotRequest = async (e) => {
    e.preventDefault();
    setInlineError('');
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setPopup({
        message: 'If an account exists for this email, a password reset link has been sent. Please check your inbox (and spam folder).',
        type: 'success',
      });
      setIsForgotPassword(false);
      setResetEmail('');
    } catch (error) {
      setInlineError(friendlyError(error.code));
    }
  };

  return (
    <div className="sign-page-container">
      
      {/* Custom Dynamic Popup Component */}
      {popup.message && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-box">
            {popup.type === 'success' ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} className="popup-icon-success" />
                <h3 style={{ color: '#004d40' }}>Success!</h3>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircleExclamation} className="popup-icon-error" />
                <h3>Oops! Something went wrong.</h3>
              </>
            )}
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ message: '', type: '' })} className="popup-close-btn">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="auth-card">
        <div className="auth-branding">
          {redirectMessage && (
            <div className="redirect-alert">
              {redirectMessage}
            </div>
          )}
          <h2>{isLogin ? 'Welcome Back!' : 'Join Marg'}</h2>
          <p>
            {isLogin 
              ? 'Sign in to continue mapping your unique career trajectory and accessing your personalized dashboard.'
              : 'Create an account to take our precision-based assessment and build a definitive roadmap for your future.'}
          </p>
          <button 
            type="button"
            className="toggle-mode-btn" 
            onClick={() => {
              setIsLogin(!isLogin);
              setIsForgotPassword(false); 
              clearFormsAndErrors();
            }}
          >
            {isLogin ? "Create an Account" : "I already have an account"}
          </button>
        </div>

        <div className="auth-form-section">
          
          {isForgotPassword ? (
            <div className="auth-form">
              <h2>Reset Password</h2>
              <p style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
                Enter your email address and we will send you a link to reset your password.
              </p>

              <form onSubmit={handleForgotRequest}>
                <div className="input-group">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>
                {inlineError && (
                  <div className="inline-error-message">
                    <FontAwesomeIcon icon={faCircleExclamation} style={{ marginRight: '8px' }} />
                    {inlineError}
                  </div>
                )}
                <button type="submit" className="auth-submit-btn">Send Reset Link</button>
              </form>

              <div className="auth-switch" style={{ marginTop: '20px', textAlign: 'center' }}>
                <button 
                  type="button" 
                  className="switch-btn" 
                  onClick={() => { setIsForgotPassword(false); setInlineError(''); }}
                  style={{ background: 'none', border: 'none', color: '#004d40', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}
                >
                  Back to Sign In
                </button>
              </div>
            </div>
          ) : (

          <>
            <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>
            
            <button type="button" className="google-auth-btn" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              Continue with Google
            </button>

            <div className="auth-divider">
              <span>or continue with email</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              
              {!isLogin && (
                <div className="input-group">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              )}

              <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>

              {!isLogin && (
                <div className="input-group">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required 
                  />
                </div>
              )}

              {inlineError && (
                <div className="inline-error-message">
                  <FontAwesomeIcon icon={faCircleExclamation} style={{ marginRight: '8px' }} />
                  {inlineError}
                </div>
              )}

              {isLogin && (
                <div className="forgot-password" style={{ textAlign: 'right', marginBottom: '10px' }}>
                  <button 
                    type="button" 
                    onClick={() => { setIsForgotPassword(true); setInlineError(''); }}
                    style={{ background: 'none', border: 'none', color: '#004d40', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.85rem' }}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
          </>
          )}

        </div>
      </div>
    </div>
  );
}