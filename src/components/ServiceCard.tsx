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
    <div className="card h-full bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group">
      <div className="p-8 flex flex-col items-center text-center">
        <div className="w-20 h-20 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 shadow group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 font-medium">{description}</p>
        {link && (
          <a 
            href={link}
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
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