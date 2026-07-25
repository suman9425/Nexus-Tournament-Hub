import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Users, Trophy, Trash2, LogOut, Activity } from 'lucide-react';
import NexusLogo from '../../components/common/NexusLogo';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [allTournaments, setAllTournaments] = useState([]);

  useEffect(() => {
    // security check, admn or not
    const isAdmin = localStorage.getItem('nexus_super_admin');
    if (!isAdmin) {
      navigate('/admin/login');
    }

    // fetching the tournaments availabe on site
    const savedTournaments = JSON.parse(localStorage.getItem('nexus_tournaments')) || [];
    setAllTournaments(savedTournaments);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('nexus_super_admin');
    navigate('/admin/login');
  };

  // delete for super admin
  const forceDeleteTournament = (id, name) => {
    if (window.confirm(`⚠️ WARNING: Are you sure you want to permanently delete "${name}"?`)) {
      const remaining = allTournaments.filter(t => t.id !== id);
      setAllTournaments(remaining);
      localStorage.setItem('nexus_tournaments', JSON.stringify(remaining));
    }
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex font-['Inter']">
      
      {/* ADMIN SIDEBAR */}
      <aside className="w-64 border-r border-red-900/30 bg-[#0F172A] flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-red-900/30">
          <NexusLogo />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="px-4 py-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">System Control</div>
          
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border-l-2 border-red-500 text-red-400">
            <Activity size={18} /> Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white">
            <Users size={18} /> Manage Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white">
            <Trophy size={18} /> All Tournaments
          </a>
        </nav>
        <div className="p-4 border-t border-red-900/30">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-all">
            <LogOut size={18} /> System Logout
          </button>
        </div>
      </aside>

      {/* MAIN ADMIN AREA */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="flex items-center gap-2 text-red-400 mb-1">
                <ShieldCheck size={20} /> <span className="font-bold tracking-widest uppercase text-sm">Super Admin</span>
              </div>
              <h1 className="text-3xl font-black text-white">Central Dashboard</h1>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-gray-800 flex flex-col">
              <span className="text-gray-400 text-sm font-bold uppercase mb-2">Total Tournaments</span>
              <span className="text-4xl font-black text-white">{allTournaments.length}</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-gray-800 flex flex-col">
              <span className="text-gray-400 text-sm font-bold uppercase mb-2">Active Users</span>
              <span className="text-4xl font-black text-white">1,204</span>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/40 to-[#0F172A] border border-red-500/20 flex flex-col">
              <span className="text-red-400 text-sm font-bold uppercase mb-2">Server Status</span>
              <span className="text-2xl font-black text-green-400 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span> ONLINE
              </span>
            </div>
          </div>

          {/* ALL TOURNAMENTS LIST (Master Control) */}
          <div className="bg-[#0F172A] rounded-2xl border border-gray-800 overflow-hidden">
            <div className="p-5 border-b border-gray-800 bg-black/20">
              <h2 className="text-lg font-bold text-white">Tournament Database (Global)</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-black/40 text-xs uppercase text-gray-500 font-bold tracking-wider">
                  <tr>
                    <th className="p-4">Tournament Name</th>
                    <th className="p-4">Game</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Admin Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {allTournaments.length === 0 ? (
                    <tr><td colSpan="4" className="p-8 text-center text-gray-500">No tournaments found in system.</td></tr>
                  ) : (
                    allTournaments.map(t => (
                      <tr key={t.id} className="hover:bg-white/5">
                        <td className="p-4 font-bold text-white">{t.name}</td>
                        <td className="p-4 text-gray-400">{t.game}</td>
                        <td className="p-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">{t.status}</span></td>
                        <td className="p-4 text-right">
                          {/* Super Admin Delete Button */}
                          <button onClick={() => forceDeleteTournament(t.id, t.name)} className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded transition-colors text-xs font-bold inline-flex items-center gap-1">
                            <Trash2 size={14} /> Force Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;