import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [loading, setLoading] = useState(false);

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const proceedToBilling = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate form
        if (!formData.name || !formData.phone || !formData.address) {
            alert('Please fill in all required fields');
            setLoading(false);
            return;
        }

        // Navigate to billing page with shipping details
        navigate('/billing', { 
            state: { 
                shippingDetails: formData 
            } 
        });
    };

    return (
        <div className="bg-surface min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Progress Steps */}
                <div className="mb-12 flex items-center justify-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold">✓</div>
                        <span className="text-on-surface font-medium hidden sm:inline">Cart</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-tertiary"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                        <span className="text-primary font-bold hidden sm:inline">Shipping</span>
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
                    <h1 className="font-headline text-3xl text-on-surface mb-8">Shipping Details</h1>
                    <form onSubmit={proceedToBilling} className="space-y-6">
                        <div className="ghost-border py-2">
                            <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Full Name</label>
                            <input
                                name="name" value={formData.name} onChange={handleInputChange} required
                                className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline"
                                placeholder="Arjun Sharma" type="text"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="ghost-border py-2">
                                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Phone Number</label>
                                <input
                                    name="phone" value={formData.phone} onChange={handleInputChange} required
                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline"
                                    placeholder="+91 98765 43210" type="tel"
                                />
                            </div>
                            <div className="ghost-border py-2">
                                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Email (Optional)</label>
                                <input
                                    name="email" value={formData.email} onChange={handleInputChange}
                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline"
                                    placeholder="arjun@example.com" type="email"
                                />
                            </div>
                        </div>
                        <div className="ghost-border py-2">
                            <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Detailed Address</label>
                            <textarea
                                name="address" value={formData.address} onChange={handleInputChange} required
                                className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline resize-none"
                                placeholder="House No, Street, Landmark, City, Pincode" rows="3"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-8 bg-primary text-on-primary py-4 rounded-full font-bold text-lg hover:bg-primary-container flex items-center justify-center gap-3 shadow-lg transition-transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                            {loading ? 'Processing...' : 'Proceed to Payment →'}
                        </button>
                    </form>
                </div>

                {/* Mini Cart Summary */}
                <div className="bg-surface-container-high p-8 rounded-3xl h-fit sticky top-32">
                    <h2 className="font-headline text-2xl text-on-surface mb-6">Order Summary</h2>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
                        {cartItems.map(item => (
                            <div key={item._id} className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-on-surface text-sm line-clamp-1">{item.name}</h4>
                                    <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                                </div>
                                <div className="font-bold text-primary">₹{item.price * item.quantity}</div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-outline-variant pt-4 flex justify-between items-end">
                        <span className="font-bold text-lg text-on-surface">Total to Pay</span>
                        <span className="font-headline text-3xl font-bold text-primary">₹{getCartTotal().toFixed(2)}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
