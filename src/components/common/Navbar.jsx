import React from 'react';
import Button from './Button';
import { Gamepad2, Menu } from 'lucide-react'; // आइकनहरू

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0B0E14]/90 backdrop-blur-md border-b border-gray-800 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Gamepad2 className="text-[#6C63FF] w-8 h-8" />
            <span className="text-2xl font-bold tracking-wider text-white uppercase font-['Orbitron']">
              Nepal<span className="text-[#6C63FF]">Esports</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Tournaments</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Leaderboard</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Teams</a>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <Menu className="text-white w-7 h-7 cursor-pointer" />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;