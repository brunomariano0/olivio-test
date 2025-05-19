import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="font-heading font-bold text-xl text-primary leading-none">
          <img src="../src/img/logo.png" alt="logo" className="h-28 w-auto"/>
        </div>
        
      </div>
    </div>
  );
};

export default Logo;