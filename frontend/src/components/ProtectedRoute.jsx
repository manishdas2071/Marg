import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, message }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for Firebase to restore the session before deciding
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '80px 0' }}>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate
        to="/sign"
        state={{
          redirectMessage: message || 'Sign in to continue.',
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children;
}
