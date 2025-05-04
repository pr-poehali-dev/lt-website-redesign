
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Icon from '@/components/ui/icon';

const SakuraLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20C45 35 30 40 20 37C25 45 25 60 20 70C35 65 45 65 50 80C55 65 65 65 80 70C75 60 75 45 80 37C70 40 55 35 50 20Z" fill="#FFB6C1" />
    <circle cx="50" cy="50" r="10" fill="#F08080" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary-light shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <SakuraLogo />
            <span className="text-2xl font-rounded font-bold text-primary-dark">LT</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/books" className="font-rounded font-medium text-foreground hover:text-primary-dark transition-colors">
              Книги
            </Link>
            <Link to="/about" className="font-rounded font-medium text-foreground hover:text-primary-dark transition-colors">
              Об авторе
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 font-rounded font-medium text-foreground hover:text-primary-dark transition-colors">
              <Icon name="ShoppingCart" size={20} />
              <span>Корзина</span>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/books" 
              className="block font-rounded font-medium text-foreground hover:text-primary-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Книги
            </Link>
            <Link 
              to="/about" 
              className="block font-rounded font-medium text-foreground hover:text-primary-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Об авторе
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center space-x-1 font-rounded font-medium text-foreground hover:text-primary-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Icon name="ShoppingCart" size={20} />
              <span>Корзина</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
