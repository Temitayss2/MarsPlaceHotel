import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Room {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface BookingData {
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalCost: number;
  nights: number;
}

interface BookingContextType {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  rooms: Room[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const rooms: Room[] = [
  { id: 1, name: 'VIP', price: 20000, description: 'Luxurious room with premium amenities and scenic views of Osogbo.' },
  { id: 2, name: 'Regular', price: 15000, description: 'Comfortable room with modern facilities for a cozy stay in the heart of Osun.' },
];

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookingData, setBookingData] = useState<BookingData>({
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    totalCost: 0,
    nights: 0,
  });

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, rooms }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};