import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuthRedirect(redirect=true) {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsSignedIn(false);
      if(redirect) navigate('/signIn');
    } else {
      setIsSignedIn(true);
    }
  }, [navigate]);

  return isSignedIn;
}

export default useAuthRedirect;