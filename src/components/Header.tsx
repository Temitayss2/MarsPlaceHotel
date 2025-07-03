import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Mars Place Hotel Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Mars Place Hotel</h1>
              <p className="text-gray-300 text-sm">Your Gateway to Luxury in Osogbo</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
            <a href="#rooms" className="text-gray-300 hover:text-yellow-400 transition-colors">Rooms</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} />
              <span>+234 803 727 9737</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <span>info@marsplacehotel.ng</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
