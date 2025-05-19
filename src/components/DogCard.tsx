import React from 'react';

interface DogCardProps {
  name: string;
  image: string;
  gender?: string;
  birthDate?: string;
  titles?: string[];
  onClick?: () => void;
}

const DogCard: React.FC<DogCardProps> = ({
  name,
  image,
  gender,
  birthDate,
  titles,
  onClick
}) => {
  return (
    <div 
      className="card hover-zoom cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-contain bg-gray-100"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        {birthDate && (
          <p className="text-gray-600 mb-3">
            <span className="font-medium">Nascimento:</span> {birthDate}
          </p>
        )}
        {titles && titles.length > 0 && (
          <div className="mt-3">
            <h4 className="font-medium text-sm text-gray-700 mb-1">Títulos:</h4>
            <div className="flex flex-wrap gap-2">
              {titles.map((title, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DogCard;