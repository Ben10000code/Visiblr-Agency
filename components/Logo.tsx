import React from 'react';

interface LogoProps {
  className?: string;
  circleColor?: string;
  iconColor?: string;
  textColor?: string;
  dotColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  circleColor = "bg-white", 
  iconColor = "text-brand-primary",
  textColor = "text-white",
  dotColor = "text-white"
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-10 h-10 ${circleColor} ${iconColor} flex items-center justify-center rounded-full shadow-sm`}>
        {/* Stylized Pin with V cutout */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
           <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58 2 4 5.58 4 10c0 4.42 8 14 8 14s8-9.58 8-14c0-4.42-3.58-8-8-8zm0 12L8.5 7h7L12 14z" />
        </svg>
      </div>
      <span className={`font-black text-2xl tracking-tight ${textColor}`}>
        Visiblr<span className={`${dotColor}`}>.</span>
      </span>
    </div>
  );
};