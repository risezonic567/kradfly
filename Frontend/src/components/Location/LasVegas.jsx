import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'



export default function LasVegas() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎰 Discover Las Vegas with Krad Global Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        Experience the thrill of Las Vegas — the Entertainment Capital of the World! Whether you're visiting for dazzling shows, high-stakes casinos, or legendary nightlife, Krad Global Travel makes it easy to get there and explore with top-rated flight deals and convenient car rental options.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights to Las Vegas</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Affordable Airfare:</b> Score unbeatable deals on nonstop flights from major cities across the U.S.</li>
                        <li><b>Flexible Schedules: </b> Choose from morning, afternoon, or red-eye flights to fit your Vegas plans.</li>
                        <li><b>Last-Minute Deals:</b> Need a quick escape? Krad Global Travel offers spontaneous travel savings to Las Vegas.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals Made Easy</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Wide Vehicle Selection:</b> From luxury sedans to economy cars and SUVs, find the right ride for your Vegas adventure.</li>
                        <li><b>Pickup at McCarran Airport:</b> Land and go — car rentals available right at the Las Vegas airport.</li>
                        <li><b>Daily, Weekly & Weekend Rates:</b> Flexible rental terms to match your stay.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Explore the Best of Las Vegas</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>The Las Vegas Strip – endless entertainment and attractions</li>
                        <li>Fremont Street Experience – vintage Vegas vibes</li>
                        <li>Red Rock Canyon – stunning scenic drives just minutes away</li>
                        <li>Hoover Dam & Grand Canyon day trips with your rental car</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Global Travel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Low fares on flights to Las Vegas</li>
                        <li>🚘 Affordable car rental options from top providers</li>
                        <li>💳 Secure booking with flexible payment options</li>
                        <li>📞 24/7 customer service and travel support</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                       Start your Las Vegas journey with Krad Global Travel — book your flight and car rental today for big savings and unforgettable memories!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}