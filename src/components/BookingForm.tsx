import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Calendar, Users, MapPin, CreditCard } from 'lucide-react';

const BookingForm: React.FC = () => {
  const navigate = useNavigate();
  const { bookingData, setBookingData, rooms } = useBooking();
  const [formData, setFormData] = useState({
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });
  const [totalCost, setTotalCost] = useState(0);
  const [showCost, setShowCost] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
    setShowCost(false);
  };

  const validateDates = () => {
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      alert('Check-in date cannot be in the past');
      return false;
    }

    if (checkOut <= checkIn) {
      alert('Check-out date must be after check-in date');
      return false;
    }

    return true;
  };

  const calculateCost = () => {
    if (!formData.roomType || !formData.checkInDate || !formData.checkOutDate) {
      alert('Please fill in all fields');
      return;
    }

    if (!validateDates()) return;

    const room = rooms.find(r => r.name === formData.roomType);
    if (!room) return;

    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const cost = room.price * nights;

    setTotalCost(cost);
    setShowCost(true);
  };

  const handleBookNow = () => {
    if (!showCost) {
      alert('Please check availability first');
      return;
    }

    if (formData.guests < 1) {
      alert('Number of guests must be at least 1');
      return;
    }

    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));

    setBookingData({
      ...formData,
      totalCost,
      nights,
    });

    navigate('/payment');
  };

  return (
    <section id="booking" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reserve Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Cosmic Stay</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose your preferred room and dates for an unforgettable experience in Osogbo
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                >
                  <option value="">Select Room</option>
                  {rooms.map(room => (
                    <option key={room.id} value={room.name} className="bg-slate-800">
                      {room.name} - ₦{room.price.toLocaleString()}/night
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num} className="bg-slate-800">
                      {num} Guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={calculateCost}
                className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Calendar size={20} />
                Check Availability
              </button>

              {showCost && (
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl p-4 border border-yellow-400/30">
                    <p className="text-yellow-400 font-semibold">Total Cost: ₦{totalCost.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <CreditCard size={20} />
                    Book Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;