import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import NexusLogo from '../components/common/NexusLogo';

// --- MOCK DATA FOR GAMES ---
// 🖼️ 'image' मा अहिले खाली ("") छ। पछि यहाँ आफ्नो तस्बिरको लिंक वा लोकल पाथ हाल्नुहोस्।
const gamesList = [
  { 
    id: 1, 
    name: "Clash of Clans", 
    genre: "Strategy", 
    developer: "Supercell",
    image: "", 
    description: "Build your village, raise a clan, and compete in epic Clan Wars!"
  },
  { 
    id: 2, 
    name: "PUBG Mobile", 
    genre: "Battle Royale", 
    developer: "Krafton",
    image: "", 
    description: "Drop in, gear up, and compete to be the last one standing in intense battlegrounds."
  },
  { 
    id: 3, 
    name: "Mobile Legends", 
    genre: "MOBA", 
    developer: "Moonton",
    image: "", 
    description: "Join your friends in a brand new 5v5 MOBA showdown against real human opponents."
  },
  { 
    id: 4, 
    name: "Free Fire", 
    genre: "Battle Royale", 
    developer: "Garena",
    image: "", 
    description: "Fast-paced survival shooter game available on mobile. 50 players, 10 minutes, 1 survivor."
  },
  { 
    id: 5, 
    name: "Valorant", 
    genre: "Tactical Shooter", 
    developer: "Riot Games",
    image: "", 
    description: "Blend your style and experience on a global, competitive stage. Defy the limits."
  },
  { 
    id: 6, 
    name: "EA SPORTS FC", 
    genre: "Sports", 
    developer: "EA Sports",
    image: "", 
    description: "Experience the ultimate football simulation with unparalleled realism and authenticity."
  }
];

const Games = () => {
  return (
    <>
      {/* ANIMATED BACKGROUND EFFECTS (Tournaments पेज जस्तै) */}
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
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/games" className="active">Games</Link>
          <a href="#">Leaderboard</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* GAMES SECTION */}
      <section className="section relative z-10">
        <div className="section-head">
          <div>
            <span className="label">Explore supported titles</span>
            <h2>Supported Games</h2>
          </div>
        </div>

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {gamesList.map((game) => (
            <div key={game.id} className="t-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* 🖼️ IMAGE BANNER SECTION */}
              <div className="relative overflow-hidden bg-gray-800" style={{ height: '200px', borderRadius: '12px 12px 0 0' }}>
                
                {game.image ? (
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  /* IMAGE PLACEHOLDER - जबसम्म इमेज हालिदैन, यो देखिन्छ */
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center border-2 border-dashed border-gray-600 bg-gray-900/50">
                    <span className="text-gray-400 text-sm">Image Placeholder<br/>(Add image URL in code)</span>
                  </div>
                )}
                
                {/* Genre Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-indigo-600/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* GAME INFO BODY */}
              <div className="t-card-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ marginBottom: '5px', fontSize: '1.25rem' }}>{game.name}</h4>
                <p className="text-gray-400 text-sm mb-4">By {game.developer}</p>
                
                <p className="text-gray-300 text-sm mb-6" style={{ flexGrow: 1 }}>
                  {game.description}
                </p>
                
                <Link to="/tournaments" className="block w-full">
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    Find Tournaments
                  </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Games;