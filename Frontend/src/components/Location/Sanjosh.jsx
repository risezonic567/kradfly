import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import LatestNews from '../../pages/LatestNewsPage'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'




export default function Sanjosh() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Travel to San Jose with Krad Global Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                      Explore San Jose, the innovative heart of Silicon Valley. Whether you're heading here for tech conferences, business meetings, or a relaxing California escape, Krad Global Travel helps you get there with affordable flights and flexible car rental options to match your itinerary.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights to San Jose</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Best Fare Alerts:</b> Get notified when prices drop on flights to San Jose International Airport (SJC).</li>
                        <li><b>Major Airlines:</b> Book with trusted carriers like Delta, American, and Southwest.</li>
                        <li><b>Flexible Booking:</b> Modify or cancel your trip easily with select flexible fare options.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals in San Jose</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Airport Pickup:</b> Choose from a wide selection of vehicles right at SJC.</li>
                        <li><b>Economy to Luxury:</b> Find everything from fuel-efficient compacts to executive sedans.</li>
                        <li><b>Drive Silicon Valley:</b> Enjoy scenic drives and easy access to Cupertino, Palo Alto, and more.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Attractions to Explore</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>SAP Center – concerts, events, and Sharks hockey</li>
                        <li>Tech Interactive – hands-on science and innovation museum</li>
                        <li>Santana Row – luxury shopping and dining district</li>
                        <li>Winchester Mystery House – a historic and mysterious mansion tour</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Global Travel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>✅ Competitive flight and rental car deals</li>
                        <li>🔐 Secure and fast online booking</li>
                        <li>📞 24/7 customer assistance</li>
                        <li>🧳 Easy trip management and modifications</li>
                    </ul>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Plan your San Jose trip now with Krad Global Travel — book your flight and car rental today for convenience, value, and flexibility!
                    </p>
                </div>

                <LatestNews />
            </div>
        </>
    )
}