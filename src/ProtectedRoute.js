import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './context/authContext';

const ProtectedRoute = ({ element }) => {
  const { authToken } = useContext(authContext);

  // If not authenticated, redirect to login page
  if (authToken === null) {
    return <Navigate to="/connect-strava" />;
  }

  // Otherwise, render the component passed as `element`
  return element;
};

export default ProtectedRoute;
