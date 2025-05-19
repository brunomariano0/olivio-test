import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  location, 
  text, 
  image,
  rating
}) => {
  return (
    <div className="card h-full">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            {image ? (
              <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-4">
                {name.charAt(0)}
              </div>
            )}
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={16}
                className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-600 italic">"{text}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;