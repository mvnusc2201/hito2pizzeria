import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user?.token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
