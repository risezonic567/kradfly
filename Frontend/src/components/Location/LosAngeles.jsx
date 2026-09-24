import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'



export default function LosAngeles() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏨 Featured Hotels in Los Angeles</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                       Discover our handpicked selection of top-rated hotels in Los Angeles — perfect for every kind of traveler, whether you're here for business, leisure, or a bit of both. These properties offer excellent amenities, convenient locations, and unbeatable comfort.
                    </p>
                    <hr />

                    <ul className='text-gray-500 list-disc mt-5 mb-5 pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>The Beverly Hills Hotel –</b> Iconic luxury with celebrity charm, nestled in the heart of Beverly Hills.</li>
                        <li><b>Hotel Figueroa –</b> Stylish downtown hotel with rooftop pool and close access to LA Live and the Convention Center.</li>
                        <li><b>Loews Hollywood Hotel –</b> Perfect for movie buffs, located steps from the Walk of Fame and Dolby Theatre.</li>
                        <li><b>Shutters on the Beach –</b> Upscale beachfront retreat in Santa Monica offering ocean views and spa services.</li>
                        <li><b>Freehand Los Angeles –</b> Trendy, affordable stay with a rooftop pool bar and communal vibe in the heart of downtown.</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                      ✨ Tip: Use filters on KRAD GLOBAL TRAVEL LLC to find the best deals, real guest reviews, and exclusive offers on these hotels and more in Los Angeles.
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}