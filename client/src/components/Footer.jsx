import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-stone-100 w-full relative bottom-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-screen-2xl mx-auto">
                <div className="col-span-1 md:col-span-1">
                    <div className="text-3xl font-serif italic text-red-900 mb-4">Aaharam</div>
                    <p className="font-body text-stone-600 text-base">Nagpur's premium cold pressed oil destination. Tradition in every drop.</p>
                </div>
                <div>
                    <h4 className="font-headline text-xl text-red-900 mb-6">Explore</h4>
                    <ul className="space-y-4 font-body text-base">
                        <li><Link to="/story" className="text-stone-600 hover:text-red-800 transition-colors">Our Story</Link></li>
                        <li><Link to="/pricing" className="text-stone-600 hover:text-red-800 transition-colors">Pricing</Link></li>
                        <li><a href="#" className="text-stone-600 hover:text-red-800 transition-colors">Shipping Policy</a></li>
                        <li><a href="#" className="text-stone-600 hover:text-red-800 transition-colors">Lab Reports</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-headline text-xl text-red-900 mb-6">Our Oils</h4>
                    <ul className="space-y-4 font-body text-base">
                        <li><Link to="/shop" className="text-stone-600 hover:text-red-800 transition-colors">Groundnut Oil</Link></li>
                        <li><Link to="/shop" className="text-stone-600 hover:text-red-800 transition-colors">Mustard Oil</Link></li>
                        <li><Link to="/shop" className="text-stone-600 hover:text-red-800 transition-colors">Sesame Oil</Link></li>
                        <li><Link to="/shop" className="text-stone-600 hover:text-red-800 transition-colors">Coconut Oil</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-headline text-xl text-red-900 mb-6">Contact</h4>
                    <ul className="space-y-4 font-body text-base text-stone-600">
                        <li>+91 91308 09064</li>
                        <li>Nagpur, Maharashtra</li>
                        <li>hello@aaharamagro.com</li>
                    </ul>
                </div>
            </div>
            <div className="px-12 py-8 border-t border-stone-200 text-center text-stone-600 font-body text-sm">
                © 2024 Aaharam Agro. Crafted in Nagpur.
            </div>
        </footer>
    );
};

export default Footer;
