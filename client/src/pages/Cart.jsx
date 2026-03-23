import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-surface px-8 text-center">
                <span className="material-symbols-outlined text-6xl text-outline mb-4">shopping_cart_checkout</span>
                <h2 className="font-headline text-3xl text-on-surface mb-4">Your cart is empty</h2>
                <p className="text-on-surface-variant mb-8">Looks like you haven't added any premium oils to your cart yet.</p>
                <Link to="/shop" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:bg-primary-container transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-surface min-h-screen py-16 px-4 md:px-8">
            {/* Progress Steps */}
            <div className="mb-12 flex items-center justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <span className="text-primary font-bold hidden sm:inline">Cart</span>
                </div>
                <div className="w-8 sm:w-12 h-0.5 bg-outline"></div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-outline text-white flex items-center justify-center font-bold">2</div>
                    <span className="text-on-surface-variant font-medium hidden sm:inline">Shipping</span>
                </div>
                <div className="w-8 sm:w-12 h-0.5 bg-outline"></div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-outline text-white flex items-center justify-center font-bold">3</div>
                    <span className="text-on-surface-variant font-medium hidden sm:inline">Payment</span>
                </div>
                <div className="w-8 sm:w-12 h-0.5 bg-outline"></div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-outline text-white flex items-center justify-center font-bold">4</div>
                    <span className="text-on-surface-variant font-medium hidden sm:inline">Confirmation</span>
                </div>
            </div>

            <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    <h1 className="font-headline text-4xl text-on-surface mb-8">Shopping Cart</h1>
                    {cartItems.map(item => (
                        <div key={item._id} className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-outline-variant/30">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-surface-variant" />
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-headline text-xl text-on-surface mb-1">{item.name}</h3>
                                <p className="text-sm text-on-surface-variant mb-2">{item.size}</p>
                                <p className="font-bold text-lg text-primary">₹{item.price}</p>
                            </div>
                            <div className="flex items-center gap-4 bg-surface-container py-2 px-4 rounded-full">
                                <button
                                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-outline-variant/30"
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>remove</span>
                                </button>
                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-outline-variant/30 text-primary"
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="w-10 h-10 flex items-center justify-center rounded-full text-error hover:bg-error-container transition-colors"
                                title="Remove Item"
                            >
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-surface-container-high p-8 rounded-3xl sticky top-32 shadow-md">
                        <h2 className="font-headline text-2xl text-on-surface mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 text-on-surface-variant">
                            <div className="flex justify-between">
                                <span>Subtotal ({cartItems.length} items)</span>
                                <span className="font-medium text-on-surface">₹{getCartTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-secondary font-medium">Free</span>
                            </div>
                        </div>
                        <div className="border-t border-outline-variant pt-6 mb-8 flex justify-between items-end">
                            <span className="font-headline text-xl text-on-surface">Total</span>
                            <span className="font-headline text-3xl font-bold text-primary">₹{getCartTotal().toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => navigate('/checkout')}
                            className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg hover:bg-primary-container shadow-lg transition-transform hover:-translate-y-1"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
