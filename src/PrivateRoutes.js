// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ element: Component, roles, currentUser }) => {
  // Check if the user is authenticated and authorized
  const isAuthenticated = !!currentUser;
  const isAuthorized = roles ? roles.includes(currentUser?.role) : true;

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  if (!isAuthorized) {
    // Redirect to a default unauthorized page or show an error message
    return <div>Unauthorized Access!</div>;
  }

  // Render the component if the user is authenticated and authorized
  return <Route element={<Component />} />;
};

export default PrivateRoutes;
