import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NexusLogo from '../../components/common/NexusLogo';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    console.log('Account Created:', { fullName, email, password });
    navigate('/dashboard');
  };

  // Input ko lagi common inline style (left-right padding ko lagi)
  const inputStyle = {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '10px',
    paddingBottom: '10px',
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex flex-col relative overflow-hidden font-['Inter']">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/20 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/15 blur-[100px] rounded-full animate-float-fast"></div>
      </div>

      <header className="relative z-10 w-full flex justify-between items-center p-6 md:px-12">
        <NexusLogo className="scale-90" />
      </header>

      <main className="flex-1 flex items-center justify-center px-8 md:px-16 relative z-10 w-full">
        
        <div className="w-full max-w-[460px] p-10 rounded-[28px] bg-[#0F172A]/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl flex flex-col items-center">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white">Create an Account</h1>
            <p className="text-gray-400 text-sm mt-3">Join Nexus Core to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7 w-full">
            
            {/* Full Name */}
            <div className="w-full flex flex-col">
              <label className="block text-xs font-bold text-gray-400 mb-2.5">FULL NAME *</label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={inputStyle}
                className="w-full rounded-xl bg-[#0B1120] border border-gray-700 text-sm text-white placeholder:text-sm placeholder:text-gray-500 focus:border-purple-500 outline-none transition-all box-border"
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col">
              <label className="block text-xs font-bold text-gray-400 mb-2.5">EMAIL ADDRESS *</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                className="w-full rounded-xl bg-[#0B1120] border border-gray-700 text-sm text-white placeholder:text-sm placeholder:text-gray-500 focus:border-purple-500 outline-none transition-all box-border"
              />
            </div>

            {/* Password */}
            <div className="w-full flex flex-col">
              <label className="block text-xs font-bold text-gray-400 mb-2.5">PASSWORD *</label>
              <input 
                type="password" 
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
                className="w-full rounded-xl bg-[#0B1120] border border-gray-700 text-sm text-white placeholder:text-sm placeholder:text-gray-500 focus:border-purple-500 outline-none transition-all box-border"
              />
            </div>

            {/* Confirm Password */}
            <div className="w-full flex flex-col">
              <label className="block text-xs font-bold text-gray-400 mb-2.5">CONFIRM PASSWORD *</label>
              <input 
                type="password" 
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={inputStyle}
                className="w-full rounded-xl bg-[#0B1120] border border-gray-700 text-sm text-white placeholder:text-sm placeholder:text-gray-500 focus:border-purple-500 outline-none transition-all box-border"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="text-red-500 text-xs font-semibold text-center">
                {error}
              </div>
            )}

            {/* Button */}
            <button 
              type="submit" 
              className="w-full !py-2.5 mt-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-8">
            Already have an account? <Link to="/login" className="text-purple-400 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </main>

      <footer className="relative z-10 w-full py-6 text-center text-xs text-gray-600">
        Terms of Service • Privacy Policy
      </footer>
    </div>
  );
};

export default CreateAccount;