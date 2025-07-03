import React from 'react';
import { Star, Award, Users, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Luxury hotel interior" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Experience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Luxury </span>
            in Osogbo
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover unparalleled comfort and elegance at Mars Place Hotel in the heart of Osun State. 
            Where every stay is an extraordinary journey of Nigerian hospitality.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Star className="text-yellow-400" size={20} />
              <span className="text-white font-semibold">5-Star Luxury</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Award className="text-yellow-400" size={20} />
              <span className="text-white font-semibold">Award Winning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Users className="text-yellow-400" size={20} />
              <span className="text-white font-semibold">Premium Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <MapPin className="text-yellow-400" size={20} />
              <span className="text-white font-semibold">Prime Location</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="#booking" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Stay
            </a>
            <a 
              href="#rooms" 
              className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;