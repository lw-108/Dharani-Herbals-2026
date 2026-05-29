import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingOverlay.css';

const LoadingOverlay: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // minimum display
    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <img src="/Tom&JerryLoading.gif" alt="Loading" className="loading-gif" />
        <div className="spinner" />
      </div>
      <div className="app-name">Dharani Herbbals</div>
    </div>
  );
};

export default LoadingOverlay;
