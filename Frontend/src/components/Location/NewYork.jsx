import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'



export default function NewYork() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏙️ Explore New York City with Krad Global Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        New York City — “The City That Never Sleeps” — is calling! Whether you're headed there for business, Broadway, shopping, or sightseeing, Krad Global Travel has you covered with seamless flight bookings and flexible car rental options so you can experience the city your way.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>✈️ Fly into the Heart of NYC</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Multiple Airports:</b> Choose from JFK, LaGuardia (LGA), or Newark (EWR) for convenient flight options.</li>
                        <li><b>Real-Time Fare Alerts:</b> Never miss a deal — we’ll notify you when prices drop on NYC flights.</li>
                        <li><b>Flexible Booking:</b> Modify or cancel select tickets with ease if plans change.</li>
                        <li><b>Major Carriers:</b> Book with trusted airlines like Delta, JetBlue, United, and more.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚗 Car Rentals to Get Around the Big Apple</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li><b>Pick Up at Airport:</b> Rent a car right after landing at JFK, LGA, or EWR.</li>
                        <li><b>All Vehicle Types:</b> Compact cars for city parking or SUVs for family trips — we’ve got it.</li>
                        <li><b>Explore Beyond Manhattan:</b> Visit Brooklyn, Queens, and upstate NY on your schedule.</li>
                        <li><b>No Hidden Fees:</b> Transparent pricing with optional insurance and extras.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 NYC Highlights You Won’t Want to Miss</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>Central Park & Fifth Avenue shopping</li>
                        <li>Statue of Liberty and Ellis Island tours</li>
                        <li>Broadway shows in Times Square</li>
                        <li>Museums like the Met and MoMA</li>
                        <li>Views from the Empire State Building or One World Observatory</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Why Book with Krad Global Travel?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>✅ Flights + Cars — one-stop travel booking</li>
                        <li>🔐 Secure checkout and encrypted payments</li>
                        <li>📞 24/7 customer support from real travel experts</li>
                        <li>💰 Competitive pricing with no surprise charges</li>
                        <li>📱 Mobile-friendly bookings and itinerary access</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💡 Travel Tips for NYC</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10 text-sm sm:text-base'>
                        <li>Skip the rental if you're staying in Manhattan — subways are fast and affordable.</li>
                        <li>Travel during shoulder seasons (late Jan–Mar or Aug–Sep) for cheaper flights.</li>
                        <li>Book attraction passes in advance to save time and money.</li>
                        <li>For day trips, drive out to Long Island beaches or the Hudson Valley.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📦 Bundle & Save</h2>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Get more value when you book your flight and car rental together with Krad Global Travel. Whether you're cruising through Times Square or exploring Brooklyn’s culture, we help you do NYC right.
                    </p>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Start your New York City journey now — book your flight and car with Krad Global Travel today!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}