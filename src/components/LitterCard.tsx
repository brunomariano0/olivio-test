import React from 'react';
import { Calendar, Users, Phone } from 'lucide-react';

interface Litter {
  id: string;
  name: string;
  parents: {
    father: string;
    mother: string;
  };
  birthDate: string; 
  status: 'available' | 'reserved' | 'sold';
  images: string[];
  description: string;
}

interface LitterCardProps {
  litter: Litter;
}

const LitterCard: React.FC<LitterCardProps> = ({ litter }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-green-600 bg-green-100';
      case 'reserved':
        return 'text-yellow-600 bg-yellow-100';
      case 'sold':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Disponível';
      case 'reserved':
        return 'Reservado';
      case 'sold':
        return 'Vendido';
      default:
        return 'Indisponível';
    }
  };

  return (
    <div className="bg-white/95 p-8 rounded-xl max-w-3xl mx-auto mb-8 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-primary">{litter.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(litter.status)}`}>
                {getStatusText(litter.status)}
              </span>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" size={20} />
              <p className="text-gray-700">Nascimento: {litter.birthDate}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Para maiores informações:</p>
            <p className="text-xl font-bold text-primary flex items-center justify-center gap-2">
              <Phone size={20} />
              11-99442-4033 (REGINALDO)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {litter.images.slice(0, 2).map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Filhote ${index + 1}`}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
          {litter.images.length < 2 && (
            <>
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Foto em breve</span>
              </div>
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Foto em breve</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LitterCard; 