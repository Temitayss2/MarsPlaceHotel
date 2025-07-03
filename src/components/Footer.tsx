import React from 'react';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Mars Place Hotel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mars Place Hotel</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">
              Experience luxury in the heart of Osogbo at our premium hotel, where every stay is a journey of comfort and elegance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-yellow-400" />
                <span>+234 803 727 9737</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-yellow-400" />
                <span>+234 706 053 0407</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-yellow-400" />
                <span>info@marsplacehotel.ng</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={16} className="text-yellow-400 mt-1" />
                <span>
                  Kobongbogboe Area,<br />
                  Osogbo, Osun State,<br />
                  Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Reception Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Clock size={16} className="text-yellow-400" />
                <div>
                  <div>Check-in: 12:00PM </div>
                  <div>Check-out: 12:00PM </div>
                </div>
              </div>
              <div className="text-gray-300">
                <div className="font-semibold text-white">24/7 Reception</div>
                <div>Always available for your needs</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2 text-gray-300">
              <div>• Room Service</div>
              <div>• Restaurant</div>
              <div>• Parking</div>
              <div>• Bar</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">
              © 2024 Mars Place Hotel, Osogbo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
