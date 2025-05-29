
import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Home';

// Simply redirect to our Home component
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
