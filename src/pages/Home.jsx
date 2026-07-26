import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 
import NexusLogo from '../components/common/NexusLogo';

// photos of slider & Popular Games
const sliderImages = [
  "/Volarant.jpeg", 
  "/CS2.jpeg", 
  "/league.jpg",
  "/fortnite.jpg",
  "/dota2.jpg",
  "/apex.jpg",
  "/coc.jpg" 
];

const popularGames = [
  { name: "Valorant", image: "/Volarant.jpeg", color1: '#7C3AED', color2: '#0F172A' },
  { name: "CS2", image: "/CS2.jpeg", color1: '#F59E0B', color2: '#0F172A' },
  { name: "League", image: "/league.jpg", color1: '#3B82F6', color2: '#0F172A' },
  { name: "Dota 2", image: "/dota2.jpg", color1: '#EF4444', color2: '#0F172A' },
  { name: "Fortnite", image: "/fortnite.jpg", color1: '#22C55E', color2: '#0F172A' },
  { name: "Apex", image: "/apex.jpg", color1: '#94A3B8', color2: '#0F172A' }
];

// data of Featured Tournaments
const featuredTournamentsData = [
  {
    id: 1,
    title: "Champions Cup",
    game: "VALORANT",
    image: "/Champions Cup.png", 
    prize: "$5,000",
    players: "128/128",
    status: "LIVE",
    format: "5v5",
    entry: "Free",
    date: "Today, 18:00",
    description: "The ultimate Valorant showdown. Gather your squad and compete for the massive prize pool in this high-stakes tournament."
  },
  {
    id: 2,
    title: "Winter League",
    game: "CS2",
    image: "/Winter League.png",
    prize: "$3,200",
    players: "44/64",
    status: "UPCOMING",
    format: "5v5",
    entry: "$10/Team",
    date: "Aug 15, 2026",
    description: "Gear up for the Winter League. Show off your precise aim and tactical execution in CS2."
  },
  {
    id: 3,
    title: "Underlords Series",
    game: "DOTA 2",
    image: "/Underlords Series.png", 
    prize: "$8,000",
    players: "80/80",
    status: "LIVE",
    format: "5v5",
    entry: "Invite Only",
    date: "Ongoing",
    description: "Top tier Dota 2 action featuring the best teams from around the region battling for supremacy."
  },
  {
    id: 4,
    title: "Rift Rivals",
    game: "LEAGUE",
    image: "/Rift Rivals.png",
    prize: "$4,500",
    players: "96/100",
    status: "UPCOMING",
    format: "5v5",
    entry: "Free",
    date: "Aug 20, 2026",
    description: "Enter the Summoner's Rift and prove your dominance. Only the strongest will survive the Rift Rivals."
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); 
    return () => clearInterval(interval);
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
      <nav className="navbar relative z-10">
        <NexusLogo />

        <div className="nav-links">
          <Link className="active" to="/">Home</Link>
          <Link to="/tournaments">Tournaments</Link>
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

      {/* LIVE TICKER */}
      <div className="ticker relative z-10">
        <span className="pulse"></span>
        <span><b>Valorant Champions Cup</b> — Round 3 live now &nbsp;•&nbsp; <b>128</b> players competing &nbsp;•&nbsp; Next match starts in 14:02</span>
      </div>

      {/* HERO SECTION */}
      <section className="hero relative z-10" style={{ display: 'flex', alignItems: 'center', padding: '4rem 5%', minHeight: '80vh' }}>
        
        <div className="hero-grid"></div>
        
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="hero-content" style={{ flex: 1, margin: 0, textAlign: 'left', alignItems: 'flex-start' }}>
            <div className="eyebrow">🏆 #1 Esports Tournament Platform</div>
            <h1 style={{ textAlign: 'left' }}>Compete. Conquer.<br />Become <span>Legendary</span>.</h1>
            <p style={{ textAlign: 'left', maxWidth: '600px' }}>Join thousands of players across your favorite games. Build your team, climb the ranks, and prove you belong at the top.</p>
            
            <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
              <Link to="/tournaments">
                <button className="btn btn-primary btn-lg">Browse Tournaments</button>
              </Link>
              <button className="btn btn-secondary btn-lg">How It Works</button>
            </div>
            
            <div className="hero-stats" style={{ justifyContent: 'flex-start' }}>
              <div className="hero-stat"><b>12,400+</b><span>Active Players</span></div>
              <div className="hero-stat"><b>860</b><span>Tournaments Hosted</span></div>
              <div className="hero-stat"><b>$1.2M</b><span>Prizes Awarded</span></div>
            </div>
          </div>

          <div className="flex-1 w-full relative h-[400px] md:h-[550px] flex items-center justify-center mt-10 lg:mt-0">
            <div 
              className="relative w-full h-full max-w-2xl overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskComposite: 'destination-in',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskComposite: 'intersect'
              }}
            >
              {sliderImages.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`Gaming Slide ${idx}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* FEATURED TOURNAMENTS */}
      <section className="section relative z-10">
        <div className="section-head">
          <div>
            <span className="label">Don't miss out</span>
            <h2>Featured Tournaments</h2>
          </div>
          <Link className="see-all" to="/tournaments">View all →</Link>
        </div>
        
        <div className="card-grid">
          {featuredTournamentsData.map((tourney) => (
            <div key={tourney.id} className="t-card">
              
              <div className="t-card-banner relative overflow-hidden flex justify-between items-start bg-gray-800">
                <img 
                  src={tourney.image} 
                  alt={tourney.game} 
                  className="absolute inset-0 w-full h-full object-cover object-top z-0" 
                />
              
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0 h-16 pointer-events-none"></div>

                <div className="relative z-10 w-full flex justify-between">
                  <span className={`status-badge ${tourney.status === 'LIVE' ? 'status-live' : 'status-upcoming'}`}>
                    <span className="sdot"></span>{tourney.status}
                  </span>
                  <span className="game-tag">{tourney.game}</span>
                </div>
              </div>

              <div className="t-card-body">
                <h4>{tourney.title}</h4>
                <div className="t-card-meta">
                  <div>Prize<b>{tourney.prize}</b></div>
                  <div>Players<b>{tourney.players}</b></div>
                </div>
                {/* 🔗 This links to the standalone TournamentDetails page */}
                <Link to={`/tournaments/${tourney.id}`} className="w-full block">
                  <button className="btn btn-primary" style={{ width: '100%' }}>View Tournament</button>
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR GAMES */}
      <section className="section relative z-10" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div><span className="label">Choose your battlefield</span><h2>Popular Games</h2></div>
        </div>
        <div className="games-grid">
          {popularGames.map((game, index) => (
            <div 
              key={index}
              className="game-tile"
              style={{ 
                '--g1': game.color1, 
                '--g2': game.color2,
                backgroundImage: `url(${game.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%)',
                  transition: 'all 0.3s ease',
                }}
                className="game-overlay"
              ></div>
              
              <span 
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.3)',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  width: '100%',
                  padding: '0 15px',
                  fontFamily: 'inherit',
                }}
              >
                {game.name}
              </span>

              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${game.color1}40, ${game.color2}50)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 1,
                }}
                className="game-hover-overlay"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.parentElement.style.transform = 'scale(1.05)';
                  e.currentTarget.parentElement.style.boxShadow = '0 8px 40px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                  e.currentTarget.parentElement.style.transform = 'scale(1)';
                  e.currentTarget.parentElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚔️ MATCHES & LEADERBOARD */}
      <section className="section relative z-10" style={{ paddingTop: 0 }}>
        <div className="two-col">
          <div className="panel">
            <h3>Upcoming Matches</h3>
            <div className="match-row">
              <div className="match-teams"><span className="team-avatar"></span>Phantom Five <span className="vs">VS</span> Nova Squad<span className="team-avatar"></span></div>
              <div className="match-time"><b>Today, 18:00</b>Champions Cup</div>
            </div>
            <div className="match-row">
              <div className="match-teams"><span className="team-avatar"></span>Iron Wolves <span className="vs">VS</span> Blaze Core<span className="team-avatar"></span></div>
              <div className="match-time"><b>Today, 20:30</b>Winter League</div>
            </div>
            <div className="match-row">
              <div className="match-teams"><span className="team-avatar"></span>Vortex GC <span className="vs">VS</span> Echo Team<span className="team-avatar"></span></div>
              <div className="match-time"><b>Tomorrow, 15:00</b>Underlords Series</div>
            </div>
          </div>

          <div className="panel">
            <h3>Top Players</h3>
            <div className="lb-row"><span className="lb-rank">01</span><span className="lb-avatar"></span><div className="lb-name">ShadowByte<span>Phantom Five</span></div><span className="lb-points">2,840</span></div>
            <div className="lb-row"><span className="lb-rank">02</span><span className="lb-avatar"></span><div className="lb-name">Kaelis<span>Nova Squad</span></div><span className="lb-points">2,710</span></div>
            <div className="lb-row"><span className="lb-rank">03</span><span className="lb-avatar"></span><div className="lb-name">Rin_<span>Blaze Core</span></div><span className="lb-points">2,655</span></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="h-24 flex items-center justify-center md:justify-start md:px-6 border-b border-gray-800/50">
                <NexusLogo />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '13px', maxWidth: '220px', lineHeight: 1.6 }}>The competitive platform for players who want more than just a match.</p>
          </div>
          <div className="footer-col"><h5>Platform</h5><a href="#">Tournaments</a><a href="#">Leaderboard</a><a href="#">Teams</a></div>
          <div className="footer-col"><h5>Support</h5><a href="#">Help Center</a><a href="#">Contact</a><a href="#">Rules</a></div>
          <div className="footer-col"><h5>Legal</h5><a href="#">Terms</a><a href="#">Privacy</a></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nexus Core. All rights reserved.</span>
          <span>Built for competitors.</span>
        </div>
      </footer>
    </>
  );
}

export default Home;