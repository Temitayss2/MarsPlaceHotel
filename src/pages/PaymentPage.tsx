import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { ArrowLeft, CreditCard, Calendar, Users, MapPin } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookingData } = useBooking();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
      alert('Please fill in all payment details');
      return;
    }
    navigate('/confirmation');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  if (!bookingData.roomType) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <div className="w-8 h-8">
            <img 
              src="/logo.png" 
              alt="Mars Place Hotel Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white font-semibold">Mars Place Hotel</span>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <MapPin className="text-yellow-400" />
              Booking Summary
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Room Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Room Type:</span>
                    <span className="text-white font-semibold">{bookingData.roomType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price per night:</span>
                    <span className="text-white">₦{(bookingData.totalCost / bookingData.nights).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Number of nights:</span>
                    <span className="text-white">{bookingData.nights}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Stay Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center gap-2">
                      <Calendar size={16} />
                      Check-in:
                    </span>
                    <span className="text-white">{new Date(bookingData.checkInDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center gap-2">
                      <Calendar size={16} />
                      Check-out:
                    </span>
                    <span className="text-white">{new Date(bookingData.checkOutDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 flex items-center gap-2">
                      <Users size={16} />
                      Guests:
                    </span>
                    <span className="text-white">{bookingData.guests}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-400/30">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-yellow-400">Total Cost:</span>
                  <span className="text-3xl font-bold text-white">₦{bookingData.totalCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <CreditCard className="text-yellow-400" />
              Payment Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                  placeholder="Enter full name on card"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;