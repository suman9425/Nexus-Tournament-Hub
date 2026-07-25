import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Lock } from 'lucide-react';
import NexusLogo from '../../components/common/NexusLogo';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // dommy login check, will be done by backend later
    if (email === 'admin@nexus.com' && password === 'admin123') {
      localStorage.setItem('nexus_super_admin', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('❌ Invalid Admin Credentials!');
    }
  };

  return (
    <div className="min-h-screen bg-[#050B14] flex flex-col items-center justify-center relative font-['Inter']">
      {/* Red Glowing Effect for Admin Vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-[#0F172A]/80 backdrop-blur-xl border border-red-500/20 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
        <div className="flex flex-col items-center mb-8">
          <NexusLogo />
          <div className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase">
            <ShieldAlert size={14} /> Super Admin Area
          </div>
        </div>

        <form onSubmit={handleAdminLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Admin Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 text-white" 
              placeholder="admin@nexus.com" required 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Security Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-red-500 text-white" 
              placeholder="••••••••" required 
            />
          </div>
          <button type="submit" className="mt-2 flex justify-center items-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all">
            <Lock size={18} /> Authenticate System
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;