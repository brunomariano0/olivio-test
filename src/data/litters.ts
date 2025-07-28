import Jester from '../img/Jester.jpg';
import Amy from '../img/Amy.jpg';
import Quex from '../img/Quex.jpg';
import Kanto from '../img/Kanto.jpg';
import Xirra from '../img/XIRRA WIZARD VON BR OLIVIO.jpg';
import Bronx from '../img/Bronx.jpg';

export interface Litter {
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
  whatsapp: string;
  email: string;
}

export const currentLitters: Litter[] = [
  {
    id: '1',
    name: 'Ninhada KANTO x XIRRA',
    parents: {
      father: '-',
      mother: '-'
    },
    birthDate: '15/12/2024',    
    status: 'available',
    images: [Kanto, Xirra],
    description: 'Filhotes de excelente linhagem, com genética comprovada e temperamento equilibrado.',
    whatsapp: 'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ninhada KANTO x XIRRA',
    email: 'contato@olivio.com.br'
  },
  {
    id: '2',
    name: 'Ninhada BRONX x AMMY',
    parents: {
      father: '-',
      mother: '-'
    },
    birthDate: '20/01/2025',   
    status: 'available',
    images: [Bronx, Amy],
    description: 'Ninhada reservada com filhotes de alta qualidade genética.',
    whatsapp: 'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a ninhada BRONX x AMMY',
    email: 'contato@olivio.com.br'
  }
];

export const getAvailableLitters = (): Litter[] => {
  return currentLitters.filter(litter => litter.status === 'available');
};

export const getLatestLitter = (): Litter | null => {
  const available = getAvailableLitters();
  return available.length > 0 ? available[0] : null;
}; 