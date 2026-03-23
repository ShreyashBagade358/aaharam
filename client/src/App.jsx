import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Story from './pages/Story';
import Pricing from './pages/Pricing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Billing from './pages/Billing';
import OrderConfirmation from './pages/OrderConfirmation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const isOrderConfirmation = location.pathname === '/order-confirmation';

  return (
    <div className="flex flex-col min-h-screen">
      {!isOrderConfirmation && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      {!isOrderConfirmation && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
