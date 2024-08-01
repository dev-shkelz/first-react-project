import React, { useContext, UserContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { loggedUser } = useContext(UserContext);
  // ??

  if (true) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
