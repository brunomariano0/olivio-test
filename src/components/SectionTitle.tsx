import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = true,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-4"></div>
    </div>
  );
};

export default SectionTitle;