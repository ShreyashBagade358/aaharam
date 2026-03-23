import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-500 border-b border-surface-container-high">
            <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                <Link to="/" className="flex items-center">
                    <img 
                        src="/logo.png" 
                        alt="Aaharam Agro" 
                        className="h-12"
                    />
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <Link 
                        to="/" 
                        className={`transition-all text-sm tracking-wide font-medium ${
                            isActive('/') 
                                ? 'text-red-900 font-bold border-b-2 border-red-900 pb-1' 
                                : 'text-stone-600 hover:text-red-900'
                        }`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/shop" 
                        className={`transition-all text-sm tracking-wide font-medium ${
                            isActive('/shop') 
                                ? 'text-red-900 font-bold border-b-2 border-red-900 pb-1' 
                                : 'text-stone-600 hover:text-red-900'
                        }`}
                    >
                        Shop
                    </Link>
                    <Link 
                        to="/story" 
                        className={`transition-all text-sm tracking-wide font-medium ${
                            isActive('/story') 
                                ? 'text-red-900 font-bold border-b-2 border-red-900 pb-1' 
                                : 'text-stone-600 hover:text-red-900'
                        }`}
                    >
                        Story
                    </Link>
                    <Link 
                        to="/pricing" 
                        className={`transition-all text-sm tracking-wide font-medium ${
                            isActive('/pricing') 
                                ? 'text-red-900 font-bold border-b-2 border-red-900 pb-1' 
                                : 'text-stone-600 hover:text-red-900'
                        }`}
                    >
                        Pricing
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/cart" className="relative text-stone-600 hover:text-red-900 transition-all">
                        <span className="material-symbols-outlined select-none" style={{ fontSize: '28px' }}>shopping_cart</span>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-primary text-on-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined text-red-900 select-none" style={{ fontSize: '28px' }}>menu</span>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-surface absolute top-full left-0 w-full shadow-lg flex flex-col items-center py-4 space-y-4 border-t border-surface-container-high">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Home</Link>
                    <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Shop</Link>
                    <Link to="/story" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Story</Link>
                    <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="text-stone-800 font-medium">Pricing</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
