import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // if user is not logged in then redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // if user role is not incorrect then redirect to home page or unauthorised 
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // if everything is ok then show the outlet
  return <Outlet />;
};

export default ProtectedRoute;