import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'


export default function Hongkong() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Featured Hotels in Hong Kong</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                     Hong Kong is a dazzling fusion of East and West — where skyscrapers meet serene temples, and street food shares the spotlight with Michelin-starred cuisine. Whether you're here for business, shopping, or sightseeing, Krad Global Travel helps you book the perfect hotel, flight, and car rental for a seamless stay.
                     </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏨 Luxury Hotels with Skyline Views</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>The Ritz-Carlton, Hong Kong:</b> One of the world’s highest hotels with breathtaking views and fine dining at Ozone.</li>
                        <li><b>Four Seasons Hotel Hong Kong: </b> Offers Victoria Harbour views, world-class spa, and award-winning restaurants.</li>
                        <li><b>Island Shangri-La:</b> Elegant, centrally located with sweeping city views and renowned hospitality.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💼 Business-Friendly Stays</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>JW Marriott Hotel Hong Kong:</b> Located above Pacific Place mall, ideal for business travelers.</li>
                        <li><b>Hyatt Regency Tsim Sha Tsui:  </b>  Offers modern rooms, great transport links, and event spaces.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🛌 Boutique & Mid-Range Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel ICON:</b> A design-led hotel created by Hong Kong Polytechnic University with artistic flair and top-notch service.</li>
                        <li><b>The Fleming:</b>  A stylish boutique hotel in Wan Chai inspired by Hong Kong’s maritime heritage.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Budget-Friendly Options</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Mini Hotel Central: </b> Compact, clean rooms in the heart of the city at great value.</li>
                        <li><b>YHA Mei Ho House Hostel: </b>Affordable and modern with a touch of local culture and history.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Attractions Nearby</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Victoria Peak</li>
                        <li>Tsim Sha Tsui Promenade</li>
                        <li>Mong Kok Street Markets</li>
                        <li>Disneyland Hong Kong</li>
                        <li>Ngong Ping 360 & Big Buddha</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Car Rentals with Krad Global Travel</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Find great flight deals to and from Hong Kong</li>
                        <li>🚗 Book trusted car rentals for airport pickups or local exploring</li>
                        <li>🔒 One-stop booking with instant confirmations</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Global Travel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Exclusive hotel, flight & car rental deals</li>
                        <li>💳 Secure and instant bookings</li>
                        <li>📞 24/7 multilingual customer support</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                       From harbor views to hidden gems, book your hotel, flight, and car rental with Krad Global Travel today and experience Hong Kong in complete comfort and style!
                       </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}