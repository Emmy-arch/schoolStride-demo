import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles = [] }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);

  // While Auth is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not authenticated redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  //   Role specific check. Check is user has atleast one allowed role
  if (roles.length > 0) {
    const hasAccess = user?.roles?.some((role) => roles.includes(role));
    if (!hasAccess) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // If authenticated and has access, render children
  return children;
};

export default ProtectedRoute;
