import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NexusLogo from '../../components/common/NexusLogo';
import { getNames } from 'country-list';

const Signup = () => {
  const [country, setCountry] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const countries = getNames();

  const handleContinue = (e) => {
    e.preventDefault();

    if (!country || !month || !day || !year) {
      setError('Please fill out all fields before continuing.');
      return;
    }

    setError('');
    navigate('/create-account');
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex flex-col relative overflow-hidden font-['Inter']">
      
      {/* LIVE ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/20 blur-[120px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/15 blur-[100px] rounded-full animate-float-fast"></div>
      </div>

      <header className="relative z-10 w-full flex justify-between items-center p-6 md:px-12">
        <NexusLogo className="scale-90" />
      </header>

      <main className="flex-1 flex items-center justify-center p-4 relative z-10 w-full">
        <div className="w-full max-w-[460px] p-10 rounded-[28px] bg-[#0F172A]/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl flex flex-col items-center">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome to Nexus Core</h1>
            <p className="text-gray-400 text-sm mt-2">Before we begin, please select your country of residence</p>
          </div>

          <form onSubmit={handleContinue} className="flex flex-col gap-6 w-full px-6">
            
            {/* Country Selection */}
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-400 mb-2">COUNTRY OF RESIDENCE *</label>
              <select 
                className="w-full px-4 py-3.5 rounded-xl bg-[#0B1120] border border-gray-700 text-white focus:border-purple-500 outline-none transition-all"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                <option value="">Select a country</option>
                {countries.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            {/* Date of Birth Selection */}
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-400 mb-2">DATE OF BIRTH *</label>
              <div className="grid grid-cols-3 gap-3">
                <select 
                  className="px-2 py-3.5 rounded-xl bg-[#0B1120] border border-gray-700 text-white text-center outline-none focus:border-purple-500"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <input 
                  type="number" 
                  placeholder="Day" 
                  min="1" 
                  max="31" 
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-[#0B1120] border border-gray-700 text-white text-center outline-none focus:border-purple-500" 
                />
                <input 
                  type="number" 
                  placeholder="Year" 
                  min="1900" 
                  max="2026" 
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-[#0B1120] border border-gray-700 text-white text-center outline-none focus:border-purple-500" 
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm font-semibold text-center mt-[-10px]">
                {error}
              </div>
            )}

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]">
              Continue
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

export default Signup;