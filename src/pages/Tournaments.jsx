import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import NexusLogo from '../components/common/NexusLogo'; 

// --- MOCK DATA ---
const mockTournaments = [
  { id: 1, name: "Valorant Masters 2026", game: "VALORANT", prize: "$5,000", participants: "16/32", status: "Upcoming", bg: "linear-gradient(135deg,#3B82F6,#22C55E)" },
  { id: 2, name: "CS2 Championship", game: "CS2", prize: "$2,500", participants: "8/16", status: "Registration Open", bg: "linear-gradient(135deg,#F59E0B,#3B82F6)" },
  { id: 3, name: "Dota 2 Weekly Clash", game: "DOTA 2", prize: "$1,000", participants: "32/32", status: "Ongoing", bg: "linear-gradient(135deg,#EF4444,#7C3AED)" },
];

const Tournaments = () => {
  const [displayTournaments, setDisplayTournaments] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('nexus_tournaments')) || [];
    setDisplayTournaments([...saved, ...mockTournaments]);
  }, []);

  return (
    <>
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/20 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/15 blur-[100px] rounded-full animate-float-fast"></div>
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
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
      </nav>

      {/* TOURNAMENTS SECTION */}
      <section className="section relative z-10">
        <div className="section-head">
          <div>
            <span className="label">Join ongoing battles or host your own</span>
            <h2>Tournaments</h2>
          </div>
        </div>

        <div className="card-grid">
          {displayTournaments.map((tournament) => (
            <div key={tournament.id} className="t-card">
              <div className="t-card-banner" style={{ background: tournament.bg }}>
                <span className={`status-badge ${tournament.status === 'Ongoing' ? 'status-live' : 'status-upcoming'}`}>
                  <span className="sdot"></span>{tournament.status.toUpperCase()}
                </span>
                <span className="game-tag">{tournament.game}</span>
              </div>
              <div className="t-card-body">
                <h4>{tournament.name}</h4>
                <div className="t-card-meta">
                  <div>Prize<b>{tournament.prize}</b></div>
                  <div>Players<b>{tournament.participants}</b></div>
                </div>
                <button className="btn btn-secondary" style={{ width: '100%', marginTop: '15px' }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tournaments;