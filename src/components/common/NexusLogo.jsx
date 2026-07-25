import React from 'react';

// यदि तपाईंले आफ्नो लोगो src/assets/ फोल्डरमा राख्नुभएको छ भने यसरी इम्पार्ट गर्न सक्नुहुन्छ:
// import myCustomLogo from '../../assets/my-logo.png';

const NexusLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      
      {/* 🖼️ तपाईंको आफ्नै लोगो यहाँ राखिएको छ */}
      {/* यदि लोगो public फोल्डरमा छ भने सिधै src="/logo.png" लेख्न मिल्छ */}
      <img 
        src="/logo.png" 
        alt="Nexus Custom Logo" 
        className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" 
      />
      {/* नोट: w-8 h-8 ले साइज कन्ट्रोल गर्छ। सानो/ठूलो बनाउन w-6/w-12 जस्ता क्लास राख्न सक्नुहुन्छ */}
      
      {/* Vibrant Text (पुरानै कोड) */}
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