import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Eye, EyeOff, LogIn } from 'lucide-react';
import NexusLogo from '../../components/common/NexusLogo';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex flex-col relative overflow-hidden font-['Inter']">
      
      {/* LIVE ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/20 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/15 blur-[100px] rounded-full animate-float-fast"></div>
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* HEADER */}
      <header className="relative z-10 w-full flex justify-between items-center p-6 md:px-12">
        <NexusLogo className="scale-90 md:scale-100 origin-left" />
        <div className="relative group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A]/80 border border-gray-700/50 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-colors">
          <Globe size={16} className="text-gray-400" />
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-sm font-medium text-gray-200 outline-none cursor-pointer appearance-none pr-4"
          >
            <option value="English" className="bg-[#0F172A]">English</option>
            <option value="Nepali" className="bg-[#0F172A]">Nepali</option>
            <option value="Spanish" className="bg-[#0F172A]">Spanish</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
        </div>
      </header>

      {/* MAIN LOGIN CARD */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10 w-full">
        <div className="w-full max-w-[460px] p-8 md:p-10 rounded-[28px] bg-[#0F172A]/80 backdrop-blur-xl border border-gray-700/50 shadow-[0_0_50px_rgba(124,58,237,0.15)] flex flex-col items-center">
          
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="w-14 h-14 mx-auto bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 mb-5 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <LogIn size={28} />
            </div>
            <h1 className="text-3xl font-bold font-['Poppins'] text-white">Welcome Back</h1>
            <p className="text-gray-400 text-sm mt-2">Log in to your Nexus Core account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 w-full px-6">
            
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wider">EMAIL ADDRESS *</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="player@team.com"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-[#0B1120]/80 border border-gray-700 text-white text-base placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all box-border"
              />
            </div>

            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-gray-400 tracking-wider">PASSWORD *</label>
                <a href="#" className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</a>
              </div>
              <div className="relative w-full">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0B1120]/80 border border-gray-700 text-white text-base placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all pr-12 box-border"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black text-base tracking-widest uppercase shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1 box-border"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center gap-4 my-8 w-full px-6">
            <div className="flex-1 h-px bg-gray-700/50"></div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Or continue with</span>
            <div className="flex-1 h-px bg-gray-700/50"></div>
          </div>

          <div className="grid grid-cols-2 gap-3.5 w-full px-6">
            <a href="https://accounts.google.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> Google
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5" fill="#c3c3c3" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> Discord
            </a>
            <a href="https://apple.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5" fill="#c3c3c3" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg> Apple
            </a>
            <a href="https://steampowered.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5" fill="#c3c3c3" viewBox="0 0 24 24"><path d="M12.001 0a12 12 0 1 0 0 24A12.002 12.002 0 0 0 12 0zm5.187 11.233c.01.127.014.256.014.385 0 2.28-1.55 4.195-3.666 4.673a3.626 3.626 0 0 1-2.02-.033l-3.23 4.629c-.198.283-.58.337-.84.116-.94-.8-1.5-1.957-1.5-3.243 0-.69.172-1.344.47-1.928l2.92-4.183c-.015-.175-.022-.35-.022-.527 0-2.613 2.115-4.73 4.723-4.73s4.724 2.117 4.724 4.73l-.007.03-1.564 1.082zm-2.046-1.89a2.76 2.76 0 0 0-3.864-.812 2.76 2.76 0 0 0-1.077 3.738l-1.92 2.748c.17.067.348.12.533.15l2.45-3.51a1.867 1.867 0 1 1 3.208-1.916l.67-.457z"/></svg> Steam
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold text-gray-300">
              <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X.com
            </a>
          </div>
          

          <p className="text-center text-sm text-gray-400 mt-8 w-full">
            Don't have an account? {' '}
            <Link to="/signup" className="text-white font-bold hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </main>

      <footer className="relative z-10 w-full py-6 flex flex-col items-center justify-center gap-2">
        <div className="flex gap-6 text-sm font-semibold text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <p className="text-xs text-gray-600 font-medium tracking-wide">© 2026 Nexus Core, Inc.</p>
      </footer>
    </div>
  );
};

export default Login;