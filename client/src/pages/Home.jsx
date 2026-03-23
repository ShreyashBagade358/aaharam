import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[921px] flex items-center overflow-hidden saree-gradient">
                <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="z-10 order-2 md:order-1 text-center md:text-left">
                        <h1 className="font-headline text-5xl md:text-8xl font-bold text-on-primary tracking-tight leading-none mb-6">
                            100% PURITY
                        </h1>
                        <p className="font-body text-xl md:text-2xl text-on-primary/90 mb-10 max-w-lg mx-auto md:mx-0">
                            Cold Pressed Natural Oils for Healthy Living. Traditional wisdom meet modern health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/shop" className="inline-block text-center bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-bright transition-all transform hover:scale-105">
                                Shop Now
                            </Link>
                            <Link to="/shop" className="inline-block text-center border-2 border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                Explore Oils
                            </Link>
                        </div>
                    </div>
                    {/* Image Content */}
                    <div className="relative z-10 order-1 md:order-2 flex justify-center items-end h-full">
                        <img
                            alt="Aaharam Agro Premium Cold Pressed Oils"
                            className="w-full max-w-lg object-contain drop-shadow-2xl"
                            src="/hero-image.jpg"
                        />
                    </div>
                </div>
                {/* Decorative Grain/Texture */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEzgO_ItmQPouiOwVBlHVwhIiI3_S0fnp5pr0FGybrqZOHyAGZ_BdesuOm31gHreY55QrsaMvH7F-z__WFns1YQ56c7VsUNY2inmdBm5cAZGaC8m0L4dFd_iWNosvyhsWmp-Grwp2To-4eS0k-DAMBkYh4zWfKuFyOMjPW9q0mJjiWXAtZxXYpy7i_vty4UWh_UWAa6rqgc68XDQi4ogbZp__kjBtu_rDNA6quHCbLJt2PagsnKHYBf4fWs0IuXuz-t8RwhFNRiKCU')" }}
                ></div>
            </section>

            {/* Storytelling Section */}
            <section className="py-24 bg-surface-container">
                <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="rounded-xl overflow-hidden bg-surface-container-lowest p-8 shadow-sm">
                        <img
                            alt="Traditional Lakdi Ghani"
                            className="w-full h-[500px] object-cover rounded-xl"
                            src="/banner.jpeg"
                        />
                    </div>
                    <div className="space-y-8">
                        <span className="text-secondary font-bold tracking-widest text-sm">THE HERITAGE PROCESS</span>
                        <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                            Chemical-Free, Cold-Pressed, Truly Indian.
                        </h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            At Aaharam, we return to the roots. Our 'Lakdi Ghani' method uses a wooden extractor that rotates slowly, ensuring the temperature never rises above room level. This preservation of heat-sensitive nutrients makes our oils a powerhouse of antioxidants and natural flavors.
                        </p>
                        <div className="flex gap-4 items-center p-6 bg-surface-container-high rounded-xl">
                            <span className="material-symbols-outlined text-4xl text-primary select-none">temp_preferences_custom</span>
                            <div>
                                <p className="font-bold text-on-surface">Zero Heat Extraction</p>
                                <p className="text-sm text-on-surface-variant">Retaining 100% of the natural nutrients and aroma.</p>
                            </div>
                        </div>
                        <Link to="/story" className="inline-block mt-4 text-primary font-bold hover:underline transition-all">Read Our Story →</Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-surface">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-4xl text-on-surface mb-4">Why Choose Aaharam?</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto">Straight from the fertile lands to your kitchen, with no compromises in between.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-tertiary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            <h3 className="font-headline text-xl mb-3">100% Pure</h3>
                            <p className="text-on-surface-variant text-sm">No adulterants, no fillers. Just pure oil from hand-picked seeds.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
                            <h3 className="font-headline text-xl mb-3">Cold Pressed</h3>
                            <p className="text-on-surface-variant text-sm">Slow mechanical pressing at low temperatures for maximum health.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                            <h3 className="font-headline text-xl mb-3">No Chemicals</h3>
                            <p className="text-on-surface-variant text-sm">Free from hexane, argemone, or synthetic preservatives.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-tertiary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>vital_signs</span>
                            <h3 className="font-headline text-xl mb-3">Rich in Nutrients</h3>
                            <p className="text-on-surface-variant text-sm">Packed with Vitamin E, Omega fats, and natural antioxidants.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                            <h3 className="font-headline text-xl mb-3">Traditional Process</h3>
                            <p className="text-on-surface-variant text-sm">Honoring the ancient Lakdi Ghani heritage of extraction.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-shadow group">
                            <span className="material-symbols-outlined text-5xl text-secondary mb-6 block group-hover:scale-110 transition-transform select-none" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            <h3 className="font-headline text-xl mb-3">Healthy Lifestyle</h3>
                            <p className="text-on-surface-variant text-sm">A simple switch in your cooking oil leads to long-term wellness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact & Location Section */}
            <section className="py-24 bg-surface-container">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-4xl text-on-surface mb-4">Get In Touch</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto">Have questions or want to place a bulk order? We're here to help!</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="ghost-border py-2">
                                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline"
                                        placeholder="Arjun Sharma"
                                        required
                                    />
                                </div>
                                <div className="ghost-border py-2">
                                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline"
                                        placeholder="arjun@example.com"
                                        required
                                    />
                                </div>
                                <div className="ghost-border py-2">
                                    <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-1">Message</label>
                                    <textarea
                                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline resize-none"
                                        placeholder="How can we help you today?"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg hover:bg-primary-container shadow-lg transition-transform hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </form>

                            {/* Quick Contact Actions */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-outline-variant/30">
                                <a
                                    href="https://wa.me/919130809064"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-medium hover:bg-[#128C7E] transition-colors"
                                >
                                    <span className="material-symbols-outlined select-none" style={{ fontSize: '20px' }}>chat</span>
                                    WhatsApp
                                </a>
                                <a
                                    href="tel:+919130809064"
                                    className="flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-full font-medium hover:bg-primary-container transition-colors"
                                >
                                    <span className="material-symbols-outlined select-none" style={{ fontSize: '20px' }}>call</span>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* Location & Store Info */}
                        <div className="space-y-8">
                            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary select-none" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                    <div>
                                        <h3 className="font-headline text-2xl text-on-surface mb-3">Visit Our Store</h3>
                                        <p className="text-on-surface-variant text-lg leading-relaxed">
                                            Shop No. 2, Trivedi Building,<br />
                                            LIT Road, Nagpur, Maharashtra
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Trivedi+Building+LIT+Road+Nagpur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-4"
                                >
                                    <span className="material-symbols-outlined select-none" style={{ fontSize: '20px' }}>pin_drop</span>
                                    Find us in Nagpur
                                </a>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 h-[300px] relative group">
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-variant/50 backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-6xl text-outline mb-4 select-none">map</span>
                                    <p className="text-on-surface-variant font-medium">Interactive Map</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Trivedi+Building+LIT+Road+Nagpur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-container transition-colors"
                                    >
                                        Open in Google Maps
                                    </a>
                                </div>
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                        </pattern>
                                        <rect width="100" height="100" fill="url(#grid)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
