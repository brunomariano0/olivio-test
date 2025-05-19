import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  link
}) => {
  return (
    <div className="card h-full">
      <div className="p-8">
        <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {link && (
          <a 
            href={link}
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Saiba mais
            <ArrowRight size={16} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;