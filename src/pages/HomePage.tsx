import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import RoomDetails from '../components/RoomDetails';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BookingForm />
      <RoomDetails />
      <Footer />
    </div>
  );
};

export default HomePage;