import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;