import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from '../img/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <img src={Logo} alt="Logo" className="h-20 w-auto mb-4" />
            <p className="mb-4 text-gray-300">
              Especialistas em criação da raça Rottweiler desde 2002, com foco em qualidade, saúde e temperamento equilibrado.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/reginaldovonolivio/" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-accent transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="/dogs" className="text-gray-300 hover:text-accent transition-colors">Nosso Plantel</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Serviços</Link></li>
              <li><Link to="/litters" className="text-gray-300 hover:text-accent transition-colors">Ninhadas Disponíveis</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-accent" />
                <div>
                  <p>+55 (11) 99442-4033</p>
                  <p>+55 (11) 4479-0700</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-accent" />
                <span>contato@canilvonolivio.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-accent" />
                <span>Santo André, SP - Brasil</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-accent" />
                <div>
                  <p>Segunda - Sexta: 07:00 - 17:00</p>
                  <p>Sábado: 07:00 - 17:00</p>
                  <p>Domingo: 07:00 - 17:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-black/30 py-4">
        <div className="container text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Canil Von Olivio. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido por{' '}
            <a 
              href="https://brunomarianodev.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Bruno Mariano
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;