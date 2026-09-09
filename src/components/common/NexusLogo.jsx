import React from 'react';

// import myCustomLogo from '../../assets/my-logo.png';

const NexusLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      
      <img 
        src="/logo.png" 
        alt="Nexus Custom Logo" 
        className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" 
      />
      <div className="flex items-baseline gap-1.5 ml-1">
        <span className="text-2xl md:text-3xl font-black tracking-wider font-['Poppins'] neon-text-nexus">
          NEXUS
        </span>
        <span className="text-sm md:text-base font-bold tracking-widest uppercase neon-text-core">
          Core
        </span>
      </div>
      
    </div>
  );
};

export default NexusLogo;