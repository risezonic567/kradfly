import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'



export default function Maldives() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏝️ Featured Hotels in the Maldives</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                    The Maldives is a dream destination known for its turquoise waters, overwater bungalows, and breathtaking marine life. Whether you're planning a honeymoon, a family retreat, or a solo getaway, Krad Fly offers everything you need — luxury resorts, flight deals, and car transfers — for a seamless and unforgettable trip.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌊 Overwater Villa Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Baros Maldives:</b> Elegant villas surrounded by coral reefs, ideal for romantic getaways and snorkeling.</li>
                        <li><b>Soneva Jani:</b>  Luxurious water villas with private slides, retractable roofs, and personalized service.</li>
                        <li><b>COMO Cocoa Island:</b> Intimate resort with Dhoni boat-inspired overwater suites and holistic wellness.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>👨‍👩‍👧 Family-Friendly Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Sun Siyam Iru Fushi:</b> Spacious villas, kids' club, and a wide range of dining and activities.</li>
                        <li><b>Constance Halaveli: </b>  Family-friendly overwater and beach villas with a safe, fun environment.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Affordable Luxury</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Reethi Beach Resort: </b> Eco-friendly resort offering value-for-money villas and vibrant house reefs.</li>
                        <li><b>Embudu Village:</b> Simple yet charming beachfront bungalows with direct access to the ocean.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🛎️ Ultimate 5-Star Experiences</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>One&Only Reethi Rah: </b>  Iconic ultra-luxury resort with grand villas and Michelin-level dining.</li>
                        <li><b>Velaa Private Island: </b>Exclusive, private, and impeccably designed for high-end travelers.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Top Experiences in the Maldives</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Snorkeling and scuba diving</li>
                        <li>Underwater dining and spa experiences</li>
                        <li>Sunset cruises and dolphin watching</li>
                        <li>Private sandbank picnics</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Transfers with Krad Fly</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Find the best flight deals to Malé International Airport</li>
                        <li>🚤 Book seamless speedboat or seaplane transfers to your resort</li>
                        <li>🚗 Island car rentals available on local islands</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Fly?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Handpicked island resorts and exclusive offers</li>
                        <li>🌐 Compare hotels, flights, and transfers in one place</li>
                        <li>💬 24/7 expert support and customized travel planning</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                      Paradise awaits! Book your Maldives escape today with Krad Fly and dive into luxury, tranquility, and unforgettable memories.
                      </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}