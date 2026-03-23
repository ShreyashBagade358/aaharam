import React from 'react';
import { Link } from 'react-router-dom';

const Story = () => {
    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[716px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-container to-primary pt-20 pb-32">
                <div className="absolute inset-0 pattern-overlay opacity-30"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-primary tracking-tight mb-6">
                        From Tradition to Purity
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-on-primary-container max-w-2xl mx-auto font-light">
                        Bringing back the power of Lakdi Ghani oils – cold-pressed with soul, served with integrity.
                    </p>
                    <div className="mt-12 flex justify-center space-x-4">
                        <Link to="/shop" className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
                            Explore Heritage
                        </Link>
                    </div>
                </div>
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[100px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-surface" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126.2,221.33,113.37,273.67,104.28,310.89,75.92,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Story Section: Split Layout */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-high">
                                <img
                                    alt="Traditional Lakdi Ghani process"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANYyvkVxc0PNH8m4T-sX2NlAEHb6oLnDYGT3V-0OiuLj7Kj8kvW0HrLmm7XSx5Njib7eZTynNvySRiHFMrMKPPjzbhXPv-aadwur3pTrpsbkLdZRjsPuoe6_RgKzq39AnkWQZ_FzSApTgDWJQ1au_mn5zBCcuv4iz-_JWZGzBjsDibygEGHsMjXwho6JxMbLbYN8ex91l80nqGPqX4CY3i3XAB7yxSos3wKoqT87WgPngsie3W6-hrN4scUafPQ3WIMbBUpxnKP9xV"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-fixed-dim rounded-2xl z-[-1] opacity-50"></div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                                The Roots of Aaharam
                            </span>
                            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
                                Authentic Wood-Pressed Goodness
                            </h2>
                            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                                <p>
                                    For generations, the bull-driven wooden ghani (Lakdi Ghani) was the heart of every Indian village, ensuring every drop of oil retained its nutrients, flavor, and life-giving properties.
                                </p>
                                <p>
                                    At Aaharam, we've revived this ancient art. Unlike modern heat-intensive refining, our wood-press method maintains a cool temperature, preserving the essential fatty acids and antioxidants nature intended for your body.
                                </p>
                                <p className="font-bold text-tertiary">
                                    100% Chemical Free. 100% Purity. 100% Heritage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-surface-container-low">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">
                            Our Sacred Process
                        </h2>
                        <p className="text-on-surface-variant">
                            The journey from the earth to your kitchen table.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Progress Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant opacity-30 -translate-y-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6 ring-4 ring-primary/5">
                                    <span className="material-symbols-outlined text-3xl text-primary">eco</span>
                                </div>
                                <h3 className="font-bold text-on-surface mb-2">Seed Selection</h3>
                                <p className="text-sm text-on-surface-variant">
                                    Sourcing only premium, non-GMO seeds from trusted organic farms.
                                </p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6 ring-4 ring-primary/5">
                                    <span className="material-symbols-outlined text-3xl text-primary">agriculture</span>
                                </div>
                                <h3 className="font-bold text-on-surface mb-2">Cold Pressing</h3>
                                <p className="text-sm text-on-surface-variant">
                                    Extracted slowly using Lakdi Ghani at room temperature.
                                </p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6 ring-4 ring-primary/5">
                                    <span className="material-symbols-outlined text-3xl text-primary">water_drop</span>
                                </div>
                                <h3 className="font-bold text-on-surface mb-2">Natural Filtration</h3>
                                <p className="text-sm text-on-surface-variant">
                                    Sedimentation and sun-based natural filtering without heat.
                                </p>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6 ring-4 ring-primary/5">
                                    <span className="material-symbols-outlined text-3xl text-primary">inventory_2</span>
                                </div>
                                <h3 className="font-bold text-on-surface mb-2">Packaging</h3>
                                <p className="text-sm text-on-surface-variant">
                                    Glass bottled to ensure no plastic leaching and zero contamination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-tertiary mb-6 filled">verified_user</span>
                            <h4 className="font-headline text-xl mb-3">100% Purity</h4>
                            <p className="text-on-surface-variant text-sm">
                                No adulteration, no additives, just the honest essence of the seed.
                            </p>
                        </div>
                        <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-tertiary mb-6 filled">sanitizer</span>
                            <h4 className="font-headline text-xl mb-3">Chemical Free</h4>
                            <p className="text-on-surface-variant text-sm">
                                Zero hexane, zero preservatives, and absolutely no artificial colors.
                            </p>
                        </div>
                        <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-tertiary mb-6 filled">history_edu</span>
                            <h4 className="font-headline text-xl mb-3">Traditional Process</h4>
                            <p className="text-on-surface-variant text-sm">
                                Honoring the ancient wisdom of Lakdi Ghani extraction methods.
                            </p>
                        </div>
                        <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-tertiary mb-6 filled">health_and_safety</span>
                            <h4 className="font-headline text-xl mb-3">Health First</h4>
                            <p className="text-on-surface-variant text-sm">
                                Nutrient-rich oils designed to nourish your heart and vitality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-surface-container">
                <div className="container mx-auto px-6">
                    <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch">
                        <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                            <h2 className="font-headline text-4xl text-on-surface mb-8">
                                Why the Aaharam Way?
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1 rounded-full text-lg">check</span>
                                    <div>
                                        <p className="font-bold text-on-surface">Nutrient Retention</p>
                                        <p className="text-sm text-on-surface-variant">
                                            Cold pressing keeps vitamins A, D, E, and K intact.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1 rounded-full text-lg">check</span>
                                    <div>
                                        <p className="font-bold text-on-surface">Superior Flavor & Aroma</p>
                                        <p className="text-sm text-on-surface-variant">
                                            Deep, nutty aromas that transform everyday cooking.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1 rounded-full text-lg">check</span>
                                    <div>
                                        <p className="font-bold text-on-surface">Eco-Friendly Sourcing</p>
                                        <p className="text-sm text-on-surface-variant">
                                            Supporting local farmers and sustainable agriculture.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1 rounded-full text-lg">check</span>
                                    <div>
                                        <p className="font-bold text-on-surface">No Plastic Contact</p>
                                        <p className="text-sm text-on-surface-variant">
                                            Ensuring high quality storage from factory to table.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 min-h-[400px] relative">
                            <img
                                alt="Cooking with premium oil"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG1tNtZpubIbP4DSrid4ZJnATfkZfFM6HRKvTOeG_31sJXzfpx1_rpdetWtSK3zBv1vfFa1x4vCS35nTkYsRY_3tQNfEU8vJGwCXPfaAL9ppyYh-DAajPvvymzdz6xY0sBJ0zS4p6k9XQ2pr0l67w2LgCW1T8yjkh4EXmiklHqt9gr-wXiIT-wOegHoTvUWX3ju7Ft37il17RuheYomO5B3vnm2pqNW3YuDLDJaRilooMEqMsU6JZAtOYz4rHzcc_-v8TJonUlvRcJ"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-12 text-center text-on-primary shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 pattern-overlay opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="font-headline text-4xl md:text-5xl mb-6">
                                Experience Pure Oil Today
                            </h2>
                            <p className="text-on-primary-container text-lg max-w-xl mx-auto mb-10">
                                Join the movement towards a healthier, chemical-free lifestyle. Taste the difference of heritage.
                            </p>
                            <Link to="/shop" className="bg-surface text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all active:scale-95 shadow-lg">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Story;
