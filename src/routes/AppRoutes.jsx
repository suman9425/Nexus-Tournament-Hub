import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Dummy Pages--will be replaced by real page in the future
const Home = () => <div>Home Page - Open to All</div>;
const Login = () => <div>Login Page</div>;
const PlayerDashboard = () => <div>Player Dashboard</div>;
const OrganizerDashboard = () => <div>Organizer Panel</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Player Only Routes */}
      <Route element={<ProtectedRoute allowedRoles={['player', 'admin']} />}>
        <Route path="/player-dashboard" element={<PlayerDashboard />} />
      </Route>

      {/* Organizer Only Routes */}
      <Route element={<ProtectedRoute allowedRoles={['organizer', 'admin']} />}>
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Route>

      {/* Admin Only Routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;