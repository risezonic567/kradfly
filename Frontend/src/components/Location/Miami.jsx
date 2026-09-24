import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


export default function Miami() {
    const navigate = useNavigate()
    return (
        <>
            <FlightSearchSection />
            <HowItWorks />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
                >

                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Your Next Adventure Awaits 🌍
                        </h2>

                        <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                            Book flights, discover dream destinations, and create unforgettable memories with premium travel experiences.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/flight")}
                        className="relative z-10 cursor-pointer bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-slate-100 transition-all duration-300 shadow-xl flex items-center gap-3"
                    >
                        Book a Flight
                        <ArrowRight size={20} />
                    </button>
                </motion.div>

                <div className='max-w-5xl py-10 rounded-3xl bg-gray-100 p-5 mx-auto'>
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌴 Explore Miami with Krad Global Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        Welcome to Miami — where sun, style, and vibrant city life meet the ocean breeze. Whether you're heading to the beach, nightlife, or a cultural escape, Krad Global Travel helps you get there with the best flight deals and reliable car rental options.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🛫 Popular Flights to Miami</h2>
                    <ul className='text-gray-500 list-disc mb-5 pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>New York (JFK) ➝ Miami (MIA):</b> Frequent nonstop service from major carriers.</li>
                        <li><b>Chicago (ORD) ➝ Miami (MIA):</b> Great for winter escapes and quick weekend trips.</li>
                        <li><b>Atlanta (ATL) ➝ Miami (MIA):</b> Short and affordable flights year-round.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals for Every Traveler</h2>
                    <ul className='text-gray-500 list-disc mb-5 pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Compact & Economy Cars:</b> Ideal for cruising South Beach or city sightseeing.</li>
                        <li><b>Convertibles & Luxury Rides:</b> Drive in style along Ocean Drive or to the Keys.</li>
                        <li><b>SUVs & Vans:</b> Great for families or groups heading to the Everglades or beyond.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Convenient Pick-Up Spots</h2>
                    <ul className='pl-5 sm:pl-10 list-disc mb-5 text-gray-500 text-sm sm:text-base'>
                        <li>Miami International Airport (MIA)</li>
                        <li>Downtown Miami & Brickell</li>
                        <li>South Beach</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎯 Why Choose Krad Global Travel?</h2>
                    <ul className='pl-5 sm:pl-10 list-disc mb-5 text-gray-500 text-sm sm:text-base'>
                        <li>✅ Exclusive flight and rental deals</li>
                        <li>🧳 Bundle & save on airfare and car bookings</li>
                        <li>💳 Fast & secure checkout process</li>
                        <li>📞 24/7 customer support from booking to arrival</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Ready to discover Miami? Book your flight and car rental with Krad Global Travel and travel smart from takeoff to touchdown!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}