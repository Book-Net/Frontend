import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AppContext";

const PrivateRoute = ({ element: Component }) => {
  // Renamed 'component' prop to 'Component'
  const { user } = useAuth();

  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
