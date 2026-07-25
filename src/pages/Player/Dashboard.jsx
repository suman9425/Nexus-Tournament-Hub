import React, { useState, useEffect } from 'react';
import { Users, Swords, Trophy, Calendar, Bell, Target, Award, Flame, LogOut, Zap, ChevronRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import NexusLogo from '../../components/common/NexusLogo';

const Dashboard = () => {
  // state for fetching data from local storage
  const [myTournaments, setMyTournaments] = useState([]);
  
  // states for Modal & Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tName, setTName] = useState("");
  const [tGame, setTGame] = useState("VALORANT");
  const [tTeams, setTTeams] = useState("");
  const [tPrize, setTPrize] = useState("");

  useEffect(() => {
    //during fetching the recently created tournaments when loading the page
    const savedTournaments = JSON.parse(localStorage.getItem('nexus_tournaments')) || [];
    setMyTournaments(savedTournaments);
  }, []);

  // the function run when submit button is pressed
  const handleLaunch = (e) => {
    e.preventDefault(); 

    let bgGradient = "linear-gradient(135deg,#3B82F6,#22C55E)";
    if (tGame === 'CS2') bgGradient = "linear-gradient(135deg,#F59E0B,#3B82F6)";
    if (tGame === 'DOTA 2') bgGradient = "linear-gradient(135deg,#EF4444,#7C3AED)";

    const newTournament = {
      id: Date.now(),
      name: tName || "Nexus Custom Cup",
      game: tGame,
      prize: tPrize || "TBD",
      participants: `0/${tTeams || 32}`,
      date: new Date().toLocaleDateString(), 
      status: "Registration Open",
      roles: "Organizer",
      bg: bgGradient
    };

    const existing = JSON.parse(localStorage.getItem('nexus_tournaments')) || [];
    localStorage.setItem('nexus_tournaments', JSON.stringify([newTournament, ...existing]));

    setMyTournaments([newTournament, ...myTournaments]);

    alert("Tournament Successfully Launched! 🚀");
    setIsModalOpen(false); 

    setTName("");
    setTGame("VALORANT");
    setTTeams("");
    setTPrize("");
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden relative font-['Inter']">
      
      {/* 🌟 Animated Background Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex h-screen w-full backdrop-blur-3xl relative z-10">
        
        {/* 🎮 SIDEBAR (Glassmorphism) */}
        <aside className="w-20 md:w-64 border-r border-gray-800/50 bg-[#0F172A]/80 backdrop-blur-xl flex flex-col transition-all duration-300">
          <div className="h-20 flex items-center justify-center md:justify-start md:px-6 border-b border-gray-800/50">
            <NexusLogo /> 
          </div>
          
          <nav className="flex-1 px-3 py-6 space-y-3">
            <a href="#" className="group flex items-center gap-4 px-3 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-transparent border-l-2 border-purple-500 text-purple-300 transition-all">
              <Users size={20} className="drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]" /> 
              <span className="font-semibold hidden md:block">My Team</span>
            </a>
            <a href="#" className="group flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Swords size={20} className="group-hover:text-blue-400 transition-colors" /> 
              <span className="font-medium hidden md:block">My Matches</span>
            </a>
            <a href="#" className="group flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Trophy size={20} className="group-hover:text-yellow-400 transition-colors" /> 
              <span className="font-medium hidden md:block">Leaderboard</span>
            </a>
            <Link to="/tournaments" className="group flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <Calendar size={20} className="group-hover:text-green-400 transition-colors" /> 
              <span className="font-medium hidden md:block">Tournaments</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-gray-800/50">
             <Link to="/" className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all">
               <LogOut size={20} /> <span className="font-medium hidden md:block">Logout</span>
             </Link>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header / Banner */}
            <div className="relative w-full h-48 md:h-56 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl flex items-end p-6 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 z-0"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent z-10"></div>
              
              <div className="relative z-20 w-full flex justify-between items-end">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Karuna&backgroundColor=transparent" alt="Avatar" className="w-full h-full rounded-xl bg-[#0F172A]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 uppercase">Pro Player</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black font-['Poppins'] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Welcome Suman</h1>
                  </div>
                </div>
                
                {/* Notifications & Create Button in Banner */}
                <div className="flex items-center gap-4 hidden md:flex">
                  <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all">
                    <Plus size={18} /> Create Tournament
                  </button>
                  <button className="relative p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all">
                    <Bell size={22} className="text-gray-300" />
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#0B1120]"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* STATS ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Wins */}
              <div className="relative p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 hover:border-green-500/50 transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <p className="text-gray-400 font-medium tracking-wide text-sm">Total Wins</p>
                  <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]"><Trophy size={20} /></div>
                </div>
                <h2 className="text-5xl font-black font-['Poppins'] text-white relative z-10">15<span className="text-xl text-green-400 ml-2 font-bold">+2</span></h2>
              </div>
              {/* Losses */}
              <div className="relative p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 hover:border-red-500/50 transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all"></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <p className="text-gray-400 font-medium tracking-wide text-sm">Total Losses</p>
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]"><Target size={20} /></div>
                </div>
                <h2 className="text-5xl font-black font-['Poppins'] text-white relative z-10">5</h2>
              </div>
              {/* Rank */}
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#1E1B4B]/80 to-[#0F172A]/80 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 transition-all group overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <p className="text-purple-300 font-medium tracking-wide text-sm">Global Rank</p>
                  <div className="p-2.5 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]"><Flame size={20} className="animate-pulse" /></div>
                </div>
                <h2 className="text-5xl font-black font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white relative z-10">#8</h2>
              </div>
            </div>

            {/* 💎 4 MAIN CARDS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 1. My Team */}
              <div className="p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 flex flex-col relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-purple-500/5 group-hover:scale-110 transition-transform"><Users size={120} /></div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <h3 className="text-xl font-bold font-['Poppins'] flex items-center gap-2"><Zap size={20} className="text-purple-400" /> My Team</h3>
                  <button className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-1">Manage <ChevronRight size={14}/></button>
                </div>
                <div className="mt-auto p-5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between relative z-10 backdrop-blur-md">
                  <div>
                    <h4 className="font-bold text-white text-xl tracking-wide">Vortex GC</h4>
                    <p className="text-sm text-purple-300 font-medium mt-1">Captain Role</p>
                  </div>
                  <div className="flex -space-x-4">
                    <img className="w-12 h-12 rounded-full border-2 border-[#0B1120] z-30" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Karuna" alt="User 1"/>
                    <img className="w-12 h-12 rounded-full border-2 border-[#0B1120] z-20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="User 2"/>
                    <img className="w-12 h-12 rounded-full border-2 border-[#0B1120] z-10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sam" alt="User 3"/>
                    <div className="w-12 h-12 rounded-full border-2 border-[#0B1120] bg-gray-800 flex items-center justify-center text-xs font-bold">+1</div>
                  </div>
                </div>
              </div>

              {/* 2. Joined Tournament */}
              <div className="p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold font-['Poppins'] flex items-center gap-2"><Trophy size={20} className="text-blue-400" /> Joined Tournament</h3>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
                  </div>
                </div>
                <div className="mt-auto p-5 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 blur-3xl"></div>
                  <h4 className="font-bold text-white text-lg mb-1 relative z-10">Valorant Champions Cup</h4>
                  <p className="text-sm text-gray-400 mb-5 relative z-10">Round 3 • Prize: <span className="text-green-400 font-bold">$5,000</span></p>
                  <div className="w-full bg-gray-900 rounded-full h-3 mb-2 border border-gray-800 shadow-inner relative z-10">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full relative overflow-hidden" style={{ width: '65%' }}>
                       <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-gray-500 relative z-10">
                    <span>Round 1</span>
                    <span className="text-purple-300">65% Completed</span>
                    <span>Finals</span>
                  </div>
                </div>
              </div>

              {/* 3. Upcoming Match */}
              <div className="p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold font-['Poppins'] flex items-center gap-2"><Swords size={20} className="text-orange-400" /> Upcoming Match</h3>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors underline">View Bracket</button>
                </div>
                <div className="mt-auto relative rounded-2xl bg-[#0B1120] border border-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20"></div>
                  <div className="flex items-center justify-between p-6 relative z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.4)] flex items-center justify-center text-xl font-bold font-['Poppins']">VG</div>
                      <span className="font-bold text-sm text-gray-200">Vortex GC</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-sm font-black italic text-gray-400 shadow-xl z-20">VS</div>
                      <span className="mt-2 text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300 tracking-widest border border-white/5">BO3</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.4)] flex items-center justify-center text-xl font-bold font-['Poppins']">ET</div>
                      <span className="font-bold text-sm text-gray-200">Echo Team</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-2.5 text-center border-t border-gray-800">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Match Starts In:</span>
                    <span className="text-sm font-bold text-white tracking-widest ml-2 font-['Poppins']">02:14:05</span>
                  </div>
                </div>
              </div>

              {/* 4. Notifications */}
              <div className="p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold font-['Poppins'] flex items-center gap-2"><Bell size={20} className="text-pink-400" /> Notifications</h3>
                  <button className="text-xs text-purple-400 hover:text-purple-300">Mark all read</button>
                </div>
                <div className="space-y-4 mt-auto">
                  <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
                    <div className="mt-1 p-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]"><Calendar size={14} /></div>
                    <div>
                      <p className="text-sm text-gray-200 font-medium">Match schedule updated for Round 3.</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10 opacity-70 hover:opacity-100">
                    <div className="mt-1 p-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/20"><Award size={14} /></div>
                    <div>
                      <p className="text-sm text-gray-400"><span className="text-white font-medium">You earned 50 Points</span> from last match.</p>
                      <p className="text-xs text-gray-500 mt-1">Yesterday at 20:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🎯 NAYA SECTION: MY MANAGED TOURNAMENTS */}
            <div className="mt-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold font-['Poppins'] flex items-center gap-2">
                  <Award size={24} className="text-purple-400" /> My Managed Tournaments
                </h3>
                {/* this button also opens Modal */}
                <button onClick={() => setIsModalOpen(true)} className="text-sm px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/40 transition-colors flex items-center gap-2 font-bold md:hidden">
                  <Plus size={14} /> Create
                </button>
              </div>
              
              {myTournaments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {myTournaments.map((tourney) => (
                    <div key={tourney.id} className="p-6 rounded-3xl bg-[#0F172A]/60 backdrop-blur-lg border border-gray-700/50 flex flex-col gap-4 group hover:border-purple-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{tourney.name}</h4>
                          <span className="text-sm text-gray-400">{tourney.game} • {tourney.participants}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold tracking-wider uppercase">
                          {tourney.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2 border-t border-gray-700/50 pt-4">
                        <div>
                          <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Prize Pool</div>
                          <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">{tourney.prize}</div>
                        </div>
                        <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all hover:scale-105">
                          Manage Dashboard
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* this will appear when there is no tournament */
                <div className="p-10 rounded-3xl bg-[#0F172A]/40 backdrop-blur-lg border border-dashed border-gray-700/50 flex flex-col items-center justify-center text-center gap-4">
                  <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 mb-2">
                    <Trophy size={40} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">No Tournaments Yet</h4>
                    <p className="text-gray-400 mt-2 max-w-md">You haven't created any tournaments. Host your own custom tournament and manage it right from here.</p>
                  </div>
                  <button onClick={() => setIsModalOpen(true)} className="mt-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold transition-all flex items-center gap-2">
                    <Plus size={18} /> Create Your First Tournament
                  </button>
                </div>
              )}
            </div>

          </div>
        </main>
      </div>

      {/* CREATE TOURNAMENT MODAL (Clear Text + Blurred Background) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[4px]">
          
          <div className="w-full max-w-lg relative flex flex-col p-8 font-['Inter'] text-white">
            
            {/* 🎨 BACKGROUND LAYER: Effect here */}
            <div 
              className="absolute inset-0 rounded-[28px] bg-[#050B14]/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, black 80%, transparent 100%)',
                maskImage: 'radial-gradient(circle at center, black 80%, transparent 100%)',
                backdropFilter: 'blur(15px)' 
              }}
            ></div>

            {/* CONTENT LAYER: Clear text above the background */}
            <div className="relative z-10">
              <button onClick={() => setIsModalOpen(false)} className="absolute -top-2 -right-2 text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <h2 className="text-2xl font-bold mb-6">Create New Tournament</h2>
              
              <form onSubmit={handleLaunch} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tournament Name</label>
                  <input 
                    type="text" 
                    value={tName} 
                    onChange={(e) => setTName(e.target.value)} 
                    required
                    placeholder="e.g. Nexus Summer Cup" 
                    className="w-full px-4 py-3 bg-[#050B14]/80 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-600" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Game</label>
                    <select 
                      value={tGame} 
                      onChange={(e) => setTGame(e.target.value)}
                      className="w-full px-4 py-3 bg-[#050B14]/80 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white"
                    >
                      <option>VALORANT</option>
                      <option>CS2</option>
                      <option>DOTA 2</option>
                      <option>PUBG Mobile</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Teams</label>
                    <input 
                      type="number" 
                      value={tTeams} 
                      onChange={(e) => setTTeams(e.target.value)}
                      placeholder="e.g. 32" 
                      className="w-full px-4 py-3 bg-[#050B14]/80 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-600" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prize Pool</label>
                  <input 
                    type="text" 
                    value={tPrize} 
                    onChange={(e) => setTPrize(e.target.value)}
                    required
                    placeholder="e.g. $1000 or 10,000 NRs" 
                    className="w-full px-4 py-3 bg-[#050B14]/80 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 text-white placeholder-gray-600" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="px-6 py-4 mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all w-full"
                >
                  Launch Tournament
                </button>
              </form>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;