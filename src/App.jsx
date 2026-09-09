import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Player/Dashboard';
import CreateAccount from './pages/Auth/CreateAccount';
import Tournaments from './pages/Tournaments';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import TournamentDetails from './pages/TournamentDetails';
import Games from './pages/Games';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/tournaments/:id" element={<TournamentDetails />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;