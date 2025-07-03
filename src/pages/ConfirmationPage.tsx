import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { CheckCircle, Home, Calendar, Users, MapPin, Star } from 'lucide-react';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookingData } = useBooking();

  if (!bookingData.roomType) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 mb-4">
            <img 
              src="/logo.png" 
              alt="Mars Place Hotel Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-green-500/20 rounded-full p-4 border-2 border-green-400">
            <CheckCircle className="text-green-400 w-16 h-16" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
        <p className="text-xl text-gray-300 mb-8">
          Thank you for choosing Mars Place Hotel in Osogbo. Your reservation has been successfully confirmed.
        </p>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center justify-center gap-2">
            <Star className="text-yellow-400" />
            Booking Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <MapPin className="text-yellow-400" size={20} />
                <div>
                  <p className="text-gray-300">Room Type</p>
                  <p className="text-white font-semibold">{bookingData.roomType}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <Calendar className="text-yellow-400" size={20} />
                <div>
                  <p className="text-gray-300">Check-in</p>
                  <p className="text-white font-semibold">{new Date(bookingData.checkInDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <Users className="text-yellow-400" size={20} />
                <div>
                  <p className="text-gray-300">Guests</p>
                  <p className="text-white font-semibold">{bookingData.guests}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <Calendar className="text-yellow-400" size={20} />
                <div>
                  <p className="text-gray-300">Check-out</p>
                  <p className="text-white font-semibold">{new Date(bookingData.checkOutDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-yellow-400">Total Paid:</span>
              <span className="text-3xl font-bold text-white">₦{bookingData.totalCost.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 mb-8">
          <h3 className="text-lg font-semibold text-blue-400 mb-2">What's Next?</h3>
          <p className="text-gray-300">
            A confirmation email has been sent to your email address. Please arrive at the hotel by 2:00 PM on your check-in date. Welcome to Osogbo!
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
        >
          <Home size={20} />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;