import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Star, Wifi, Car, Coffee, Tv, Wind, Bath, Utensils } from 'lucide-react';

const RoomDetails: React.FC = () => {
  const { rooms } = useBooking();

  const roomImages = {
    VIP: '/public/mars1.png',
    Regular: '/public/mars.png'
  };

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Parking' },
    { icon: Coffee, name: 'Coffee/Tea' },
    { icon: Tv, name: 'Smart TV' },
    { icon: Wind, name: 'AC' },
    { icon: Bath, name: 'Luxury Bath' },
    { icon: Utensils, name: 'Room Service' },
  ];

  return (
    <section id="rooms" className="py-20 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Signature Rooms</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience comfort and luxury in our carefully designed rooms in the heart of Osogbo, each offering unique amenities and stunning views
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={roomImages[room.name as keyof typeof roomImages]} 
                  alt={`${room.name} room`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  {room.name}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{room.name} Room</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-400">₦{room.price.toLocaleString()}</div>
                    <div className="text-gray-300 text-sm">per night</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenities.slice(0, room.name === 'VIP' ? 7 : 5).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <amenity.icon size={16} className="text-yellow-400" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-300">
                      {room.name === 'VIP' ? 'Premium Features' : 'Standard Features'}
                    </div>
                    <a 
                      href="#booking" 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
