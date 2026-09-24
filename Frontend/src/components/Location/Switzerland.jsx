import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'




export default function Switzerland() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏔️ Featured Hotels in Switzerland</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                   Switzerland is where alpine beauty meets luxury hospitality. From snow-capped peaks to serene lakes and vibrant cities, Switzerland offers unforgettable stays in every season. Whether you're skiing in Zermatt, exploring Zurich, or cruising Lake Geneva, Krad Global Travel helps you book hotels, flights, and even car rentals for a seamless Swiss escape.
                   </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>⛷️ Luxury Alpine Resorts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Badrutt’s Palace Hotel, St. Moritz:</b>Iconic resort offering glamour, gourmet dining, and ski-in/ski-out access.</li>
                        <li><b>The Chedi Andermatt:</b>  Modern luxury in a charming alpine village, blending Asian and Swiss influences.</li>
                        <li><b>Kulm Hotel, St. Moritz:</b> Historic elegance with breathtaking mountain views and world-class service.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 City Comforts</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Schweizerhof Zurich</b>Boutique hotel opposite the main station with refined rooms and top service.</li>
                        <li><b>Hotel Beau-Rivage Geneva: </b>  Overlooking Lake Geneva, known for timeless luxury and diplomatic history.</li>
                        <li><b>Art Deco Hotel Montana, Lucerne:</b>  Stunning lake views, creative cuisine, and easy access to Old Town sights.</li>
                    
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Mid-Range & Boutique Gems</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Bristol, Bern: </b> A stylish and affordable option in the heart of the Swiss capital.</li>
                        <li><b>Hotel Edelweiss, Geneva:</b> Swiss-themed boutique hotel with charming décor and modern comfort.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏞️ Nature & Lakeside Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hotel Villa Honegg, Ennetbürgen:</b> Famous for its infinity pool overlooking Lake Lucerne.</li>
                        <li><b>Grand Hotel Zermatterhof:</b>Nestled in Zermatt with views of the Matterhorn and traditional Alpine ambiance.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Must-Visit Swiss Destinations</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Zermatt – Home of the Matterhorn</li>
                        <li>Lucerne – Lakeside charm & medieval bridges</li>
                        <li>Interlaken – Adventure capital of Switzerland</li>
                        <li>Zurich – Financial hub with artistic flair</li>
                        <li>Geneva – Culture, diplomacy, and luxury</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Flights & 🚗 Car Rentals with Krad Global Travel</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✈️ Book flights to Zurich, Geneva, and Bern at great rates</li>
                        <li>🚗 Rent a car for scenic road trips through the Alps and countryside</li>
                        <li>🚆 Combine rail and drive options for flexible travel</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Global Travel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best rates on Swiss luxury & boutique hotels</li>
                        <li>💳 Safe and secure payment process</li>
                        <li>🕘 24/7 travel assistance for hotels, flights, and car rentals</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                     Discover Switzerland’s natural beauty and refined living — book your alpine escape today with Krad Global Travel.
                     </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}