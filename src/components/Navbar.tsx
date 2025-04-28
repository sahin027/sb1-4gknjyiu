import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar: React.FC<{ cartItems: number; toggleCart: () => void }> = ({ 
  cartItems, 
  toggleCart 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Ana Sayfa</a>
            <a href="#products" className="text-green-800 hover:text-green-600 transition-colors">Ürünlerimiz</a>
            <a href="#about" className="text-green-800 hover:text-green-600 transition-colors">Hakkımızda</a>
            <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">İletişim</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-green-800 hover:text-green-600 transition-colors">
              <User size={20} />
            </button>
            <button 
              className="relative text-green-800 hover:text-green-600 transition-colors"
              onClick={toggleCart}
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-green-100 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-green-800 hover:text-green-600 transition-colors">Ana Sayfa</a>
              <a href="#products" className="text-green-800 hover:text-green-600 transition-colors">Ürünlerimiz</a>
              <a href="#about" className="text-green-800 hover:text-green-600 transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">İletişim</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;