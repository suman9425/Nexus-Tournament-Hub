import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NexusLogo from '../components/common/NexusLogo';
import '../index.css'; 

const TournamentDetails = () => {
  // Extracting the tournament ID from the URL (useful for future database connections)
  const { id } = useParams();
  
  // State for handling tabs
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data - this would eventually be fetched from your backend based on the ID
  const tournament = {
    title: id === '2' ? "Winter League" : id === '3' ? "Underlords Series" : id === '4' ? "Rift Rivals" : "Champions Cup",
    game: id === '2' ? "CS2" : id === '3' ? "DOTA 2" : id === '4' ? "LEAGUE" : "VALORANT",
    status: id === '1' || id === '3' ? "LIVE" : "UPCOMING",
    organizer: "Nexus Core Official",
    prizePool: id === '2' ? "$3,200" : id === '3' ? "$8,000" : id === '4' ? "$4,500" : "$5,000",
    entryFee: "Free",
    teamSize: "5v5",
    registered: 84,
    totalSlots: id === '2' ? 64 : id === '3' ? 80 : id === '4' ? 100 : 128,
    date: "August 15, 2026",
    time: "18:00 (NPT)",
    image: id === '2' ? "/Winter League.png" : id === '3' ? "/Underlords Series.png" : id === '4' ? "/Rift Rivals.png" : "/Champions Cup.png",
    description: "Welcome to the ultimate showdown. Gather your squad, warm up, and compete for the grand prize pool. This tournament follows a single-elimination format, so every match counts. Make sure your entire team is registered before the check-in phase ends."
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans overflow-x-hidden">
      
      {/* 🌌 ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move opacity-50"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/10 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[100px] rounded-full animate-float-fast"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar relative z-20">
        <NexusLogo />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tournaments" className="active">Tournaments</Link>
          <a href="#">Games</a>
          <a href="#">Leaderboard</a>
          <a href="#">About</a>
        </div>
        <div className="nav-actions">
          <Link to="/login">
            <button className="btn btn-secondary">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* 🌟 HERO BANNER SECTION */}
      <div className="relative h-[300px] md:h-[450px] w-full bg-gray-900 mt-20 z-10 border-b border-gray-800">
        <img 
          src={tournament.image} 
          alt={tournament.title} 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-purple-600/20">
              {tournament.game}
            </span>
            <span className={`border text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 ${tournament.status === 'LIVE' ? 'bg-green-500/10 text-green-400 border-green-500/50' : 'bg-blue-500/10 text-blue-400 border-blue-500/50'}`}>
              {tournament.status === 'LIVE' && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>}
              {tournament.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-white drop-shadow-lg tracking-tight">
            {tournament.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base flex items-center gap-2">
            <span>Organized by</span>
            <span className="text-purple-400 font-semibold">{tournament.organizer}</span>
          </p>
        </div>
      </div>

      {/* 📊 QUICK STATS BAR */}
      <div className="bg-[#162032]/80 backdrop-blur-md border-b border-gray-800 sticky top-20 z-30 shadow-lg">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-start items-center p-6 gap-x-16 gap-y-6">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Prize Pool</span>
            <span className="text-2xl font-bold text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">{tournament.prizePool}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Entry Fee</span>
            <span className="text-xl font-bold text-white">{tournament.entryFee}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Format</span>
            <span className="text-xl font-bold text-white">{tournament.teamSize}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Registered</span>
            <span className="text-xl font-bold text-white">
              <span className="text-purple-400">{tournament.registered}</span> / {tournament.totalSlots}
            </span>
          </div>
        </div>
      </div>

      {/* 🧩 MAIN CONTENT AREA */}
      <div className="max-w-[1400px] mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Left Side: Tabs & Details */}
        <div className="lg:col-span-2">
          
          <div className="flex border-b border-gray-800 mb-8 gap-8">
            {['overview', 'participants', 'brackets', 'rules'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold text-lg transition-all duration-300 relative capitalize ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-purple-500 rounded-t-md shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px] bg-[#162032]/40 border border-gray-800/50 p-8 rounded-2xl backdrop-blur-sm">
            {activeTab === 'overview' && (
              <div className="animate-fade-in text-gray-300 leading-relaxed space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    About Tournament
                  </h3>
                  <p className="text-gray-400 text-lg">{tournament.description}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Prize Distribution
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#0F172A] p-4 rounded-xl border border-yellow-500/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-yellow-500 font-black text-4xl absolute -right-4 -bottom-4 opacity-10">1</span>
                      <p className="text-gray-400 text-sm font-semibold mb-1">1st Place</p>
                      <p className="text-2xl font-bold text-yellow-400">$2,500</p>
                    </div>
                    <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-400/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-gray-400 font-black text-4xl absolute -right-4 -bottom-4 opacity-10">2</span>
                      <p className="text-gray-400 text-sm font-semibold mb-1">2nd Place</p>
                      <p className="text-2xl font-bold text-gray-300">$1,500</p>
                    </div>
                    <div className="bg-[#0F172A] p-4 rounded-xl border border-amber-600/20 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-amber-600 font-black text-4xl absolute -right-4 -bottom-4 opacity-10">3</span>
                      <p className="text-gray-400 text-sm font-semibold mb-1">3rd Place</p>
                      <p className="text-2xl font-bold text-amber-500">$1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'participants' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Registered Teams ({tournament.registered})</h3>
                  <div className="relative">
                    <input type="text" placeholder="Search teams..." className="bg-[#0F172A] border border-gray-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5" />
                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1,2,3,4,5,6].map((team) => (
                    <div key={team} className="flex items-center gap-4 bg-[#0F172A] p-4 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg shadow-inner">
                        T{team}
                      </div>
                      <div>
                        <p className="font-bold text-white">Team Alpha {team}</p>
                        <p className="text-sm text-gray-500">Registered on Aug 10</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-span-1 md:col-span-2 text-center p-4">
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">Load More Teams ↓</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'brackets' && (
              <div className="animate-fade-in flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-800 flex items-center justify-center text-3xl">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Brackets Not Available Yet</h3>
                <p className="text-gray-400 max-w-md">The tournament brackets will be automatically generated and displayed here once the registration period ends.</p>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="animate-fade-in text-gray-300">
                <h3 className="text-2xl font-bold text-white mb-6">Tournament Rules</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 p-4 bg-[#0F172A] rounded-xl border border-gray-800">
                    <span className="text-purple-500 font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-white block mb-1">Check-in Process</strong>
                      <span className="text-sm text-gray-400">Team captains must check in 60 minutes prior to the tournament start time. Failure to do so will result in disqualification.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 bg-[#0F172A] rounded-xl border border-gray-800">
                    <span className="text-purple-500 font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-white block mb-1">Anti-Cheat Guidelines</strong>
                      <span className="text-sm text-gray-400">All players must have the official anti-cheat running during matches. Any suspicious activity will lead to a permanent ban from the platform.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 bg-[#0F172A] rounded-xl border border-gray-800">
                    <span className="text-purple-500 font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-white block mb-1">Match Reporting</strong>
                      <span className="text-sm text-gray-400">The winning team must submit a screenshot of the final scoreboard within 15 minutes of the match ending.</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sidebar Actions */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-[#162032] to-[#0F172A] border border-gray-700/50 rounded-2xl p-6 sticky top-24 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Registration
            </h3>
            
            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center bg-[#0F172A]/50 p-3 rounded-lg border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-gray-400 text-sm">Starts on</span>
                </div>
                <span className="font-semibold text-white">{tournament.date}</span>
              </div>
              <div className="flex justify-between items-center bg-[#0F172A]/50 p-3 rounded-lg border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  <span className="text-gray-400 text-sm">Time</span>
                </div>
                <span className="font-semibold text-white">{tournament.time}</span>
              </div>
              <div className="flex justify-between items-center bg-[#0F172A]/50 p-3 rounded-lg border border-gray-800/50">
                <div className="flex items-center gap-3">
                  <span className="text-xl">👥</span>
                  <span className="text-gray-400 text-sm">Open Slots</span>
                </div>
                <span className="font-semibold text-green-400">{tournament.totalSlots - tournament.registered} Left</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">
                <span>Registration Fill</span>
                <span>{Math.round((tournament.registered / tournament.totalSlots) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full relative" 
                  style={{ width: `${(tournament.registered / tournament.totalSlots) * 100}%` }}
                >
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:-translate-y-1">
              JOIN TOURNAMENT
            </button>

            <p className="text-center text-xs text-gray-500 mt-5 leading-relaxed">
              By joining, you agree to the Nexus Core <a href="#" className="text-purple-400 hover:underline">terms</a> and <a href="#" className="text-purple-400 hover:underline">tournament rules</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TournamentDetails;