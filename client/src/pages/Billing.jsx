import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { api } from '../utils/api';

const Billing = () => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();
    const shippingDetails = location.state?.shippingDetails;

    const [paymentMethod, setPaymentMethod] = useState('online');
    const [loading, setLoading] = useState(false);

    // Redirect if no cart items or shipping details
    if (!cartItems.length || !shippingDetails) {
        navigate('/cart');
        return null;
    }

    const deliveryCharge = getCartTotal() >= 1000 ? 0 : 50;
    const tax = (getCartTotal() * 0.05).toFixed(2); // 5% GST
    const finalTotal = (parseFloat(getCartTotal()) + parseFloat(deliveryCharge) + parseFloat(tax)).toFixed(2);

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        const orderPayload = {
            user: shippingDetails,
            products: cartItems.map(item => ({
                product: { name: item.name, image: item.image },
                quantity: item.quantity,
                price: item.price
            })),
            subtotal: getCartTotal(),
            deliveryCharge: deliveryCharge,
            tax: tax,
            totalAmount: finalTotal,
            paymentMethod: paymentMethod
        };

        try {
            // Save order to backend
            await api.post('/api/orders', orderPayload);
        } catch (err) {
            console.log('Order save error (continuing anyway):', err);
        }

        // Open WhatsApp for whatsapp or cod payment methods
        if (paymentMethod === 'whatsapp' || paymentMethod === 'cod') {
            const businessPhone = "919130809064";
            let message = `🛒 *Order Confirmation Request – Aaharam Agro*\n\n`;
            message += `Hello,\n\n`;
            message += `I would like to confirm my order. Please find the details below:\n\n`;
            message += `👤 *Customer Details*\n`;
            message += `• Name: ${shippingDetails.name}\n`;
            message += `• Phone: ${shippingDetails.phone}\n`;
            message += `• Email: ${shippingDetails.email || 'Not provided'}\n`;
            message += `• Address: ${shippingDetails.address}\n\n`;
            message += `🛍️ *Order Items*\n`;
            cartItems.forEach((item) => {
                message += `• ${item.name} (${item.size}) × ${item.quantity} = ₹${item.price * item.quantity}\n`;
            });
            message += `\n💳 *Bill Summary*\n`;
            message += `• Subtotal: ₹${getCartTotal()}\n`;
            message += `• Delivery Charges: ₹${deliveryCharge}\n`;
            message += `• GST (5%): ₹${tax}\n`;
            message += `➡️ *Total Amount: ₹${finalTotal}*\n\n`;
            message += `💰 *Payment Method:* ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'WhatsApp Order'}\n\n`;
            message += `Kindly confirm my order at your earliest convenience.\n\n`;
            message += `Thank you! 🙏`;

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
        }

        // Navigate to order confirmation - ALWAYS
        clearCart();
        navigate('/order-confirmation', { state: { orderDetails: orderPayload, finalTotal } });
    };

    return (
        <div className="bg-surface min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto">
                {/* Progress Steps */}
                <div className="mb-12 flex items-center justify-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold">✓</div>
                        <span className="text-on-surface font-medium hidden sm:inline">Cart</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-tertiary"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold">✓</div>
                        <span className="text-on-surface font-medium hidden sm:inline">Shipping</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                        <span className="text-primary font-bold hidden sm:inline">Payment</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-outline"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-outline text-white flex items-center justify-center font-bold">4</div>
                        <span className="text-on-surface-variant font-medium hidden sm:inline">Confirmation</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Methods */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
                            <h1 className="font-headline text-3xl text-on-surface mb-8">Payment Method</h1>
                            
                            <form onSubmit={handlePayment} className="space-y-4">
                                {/* Online Payment */}
                                <label className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'online' ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant hover:border-primary/50'}`}>
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="online"
                                            checked={paymentMethod === 'online'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mt-1"
                                        />
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="material-symbols-outlined text-primary">credit_card</span>
                                                <h3 className="font-bold text-on-surface text-lg">Online Payment</h3>
                                            </div>
                                            <p className="text-sm text-on-surface-variant">Pay securely using UPI, Credit/Debit Card, or Net Banking</p>
                                            <div className="flex gap-2 mt-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-6" />
                                                <span className="text-xs text-on-surface-variant">Visa • Mastercard • RuPay</span>
                                            </div>
                                        </div>
                                    </div>
                                </label>

                                {/* Cash on Delivery */}
                                <label className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant hover:border-primary/50'}`}>
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mt-1"
                                        />
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="material-symbols-outlined text-secondary">payments</span>
                                                <h3 className="font-bold text-on-surface text-lg">Cash on Delivery</h3>
                                            </div>
                                            <p className="text-sm text-on-surface-variant">Pay with cash when your order is delivered</p>
                                        </div>
                                    </div>
                                </label>

                                {/* WhatsApp Order */}
                                <label className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'whatsapp' ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant hover:border-primary/50'}`}>
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="whatsapp"
                                            checked={paymentMethod === 'whatsapp'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="mt-1"
                                        />
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="material-symbols-outlined text-[#25D366]">chat</span>
                                                <h3 className="font-bold text-on-surface text-lg">WhatsApp Order</h3>
                                            </div>
                                            <p className="text-sm text-on-surface-variant">Place order via WhatsApp and pay later</p>
                                        </div>
                                    </div>
                                </label>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-8 bg-primary text-on-primary py-4 rounded-full font-bold text-lg hover:bg-primary-container shadow-lg transition-transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                                >
                                    {loading ? 'Processing...' : `Pay ₹${finalTotal}`}
                                </button>
                            </form>
                        </div>

                        {/* Shipping Details Review */}
                        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/30">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-headline text-xl text-on-surface">Shipping Details</h2>
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="text-primary text-sm font-bold hover:underline"
                                >
                                    Edit
                                </button>
                            </div>
                            <div className="space-y-3 text-on-surface-variant">
                                <p><span className="font-medium text-on-surface">Name:</span> {shippingDetails.name}</p>
                                <p><span className="font-medium text-on-surface">Phone:</span> {shippingDetails.phone}</p>
                                {shippingDetails.email && <p><span className="font-medium text-on-surface">Email:</span> {shippingDetails.email}</p>}
                                <p><span className="font-medium text-on-surface">Address:</span> {shippingDetails.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-surface-container-high p-8 rounded-3xl sticky top-32 shadow-md">
                            <h2 className="font-headline text-2xl text-on-surface mb-6">Bill Summary</h2>
                            
                            {/* Cart Items */}
                            <div className="space-y-3 max-h-[250px] overflow-y-auto mb-6 pr-2">
                                {cartItems.map(item => (
                                    <div key={item._id} className="flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                                        <div className="flex-grow min-w-0">
                                            <h4 className="font-medium text-on-surface text-sm truncate">{item.name}</h4>
                                            <p className="text-xs text-on-surface-variant">Qty: {item.quantity} × ₹{item.price}</p>
                                        </div>
                                        <div className="font-bold text-on-surface text-sm">₹{item.price * item.quantity}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6 text-on-surface-variant border-t border-outline-variant pt-6">
                                <div className="flex justify-between">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span className="font-medium text-on-surface">₹{getCartTotal()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Charges</span>
                                    {deliveryCharge === 0 ? (
                                        <span className="text-tertiary font-medium">FREE</span>
                                    ) : (
                                        <span className="font-medium text-on-surface">₹{deliveryCharge}</span>
                                    )}
                                </div>
                                <div className="flex justify-between">
                                    <span>GST (5%)</span>
                                    <span className="font-medium text-on-surface">₹{tax}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="border-t-2 border-outline-variant pt-4 flex justify-between items-end">
                                <span className="font-headline text-xl text-on-surface">Total</span>
                                <span className="font-headline text-3xl font-bold text-primary">₹{finalTotal}</span>
                            </div>

                            {deliveryCharge === 0 && (
                                <div className="mt-4 p-3 bg-tertiary-fixed rounded-xl">
                                    <p className="text-xs text-on-tertiary-fixed text-center">
                                        Free delivery applied!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
