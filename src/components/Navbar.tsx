import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Instagram, ChevronDown, ShoppingCart } from 'lucide-react';
import Logo from '../img/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky-nav w-full transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span className="text-sm">+55 (11) 99442-4033 | +55 (11) 4479-0700</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-accent transition">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/reginaldovonolivio/" aria-label="Instagram" className="hover:text-accent transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Award Banner */}
      <div className="bg-accent text-secondary font-medium text-center py-1 px-4">
        <p>MELHOR CRIADOR DA RAÇA ROTTWEILER - 2002 A 2025</p>
      </div>
      
      {/* Main Navigation */}
      <nav className="container py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-32 w-auto" />
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="font-medium hover:text-primary transition-colors">Home</NavLink>
            <NavLink to="/about" className="font-medium hover:text-primary transition-colors">Sobre</NavLink>
            <NavLink to="/dogs" className="font-medium hover:text-primary transition-colors">Plantel</NavLink>
            <NavLink to="/services" className="font-medium hover:text-primary transition-colors">Serviços</NavLink>
            <NavLink to="/litters" className="font-medium hover:text-primary transition-colors">Ninhadas</NavLink>
            <NavLink to="/contact" className="font-medium hover:text-primary transition-colors">Contato</NavLink>
            <a href="/store" className="btn btn-primary flex items-center justify-center">
              <ShoppingCart size={18} className="mr-2" />
              <span>Em Breve</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-secondary focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4 py-4">
            <NavLink to="/" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Sobre</NavLink>
            <NavLink to="/dogs" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Plantel</NavLink>
            <NavLink to="/services" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Serviços</NavLink>
            <NavLink to="/litters" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Ninhadas</NavLink>
            <NavLink to="/contact" className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100" onClick={toggleMenu}>Contato</NavLink>
            <a href="/store" className="btn btn-primary flex items-center justify-center gap-2" onClick={toggleMenu}>
              <ShoppingCart size={18} />
              <span>Store</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;