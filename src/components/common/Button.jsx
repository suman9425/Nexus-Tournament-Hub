import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  // बटनको प्रकार अनुसार रङ फेरिने लजिक
  const baseStyle = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#6C63FF] hover:bg-[#5548e5] text-white shadow-[0_0_15px_rgba(108,99,255,0.4)]",
    secondary: "bg-[#1A1D24] hover:bg-[#252a34] text-white border border-gray-700",
    outline: "bg-transparent hover:bg-gray-800 text-[#6C63FF] border border-[#6C63FF]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;