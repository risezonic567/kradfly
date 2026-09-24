import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


export default function Thailand() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌴 Featured Destinations with Krad Global Travel</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                      Explore our curated selection of top destinations worldwide. Whether you're planning a beach getaway, cultural adventure, or city escape, find the perfect accommodations to make your trip memorable.
                      </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏖️ Top Beachfront Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Hawaiian Paradise Resort:</b> Luxury beachfront retreat with stunning ocean views and private cabanas.</li>
                        <li><b>Maldives Hideaway:</b> Overwater villas and pristine beaches for the ultimate tropical experience.</li>
                        <li><b>Bali Beach Resort:</b>Balinese-style villas surrounded by lush gardens and azure waters.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Luxury Stays in Major Cities</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>New York City Elegance:</b> Iconic hotels with skyline views and top-rated dining experiences.</li>
                        <li><b>Parisian Chic Retreat: </b>  Boutique hotels in historic neighborhoods with classic French charm.</li>
                        <li><b>Tokyo Urban Oasis:</b> Modern comforts and traditional Japanese hospitality in the heart of Tokyo.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌄 Cultural Experiences Around the World</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Rome Historical Gems:</b> Elegant hotels near ancient landmarks and vibrant piazzas.</li>
                        <li><b>Cairo Ancient Wonders:</b> Nile River views and proximity to pyramids and museums.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💰 Budget-Friendly Options</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Bangkok Affordable Comforts:</b> Convenient hotels near shopping and cultural sites.</li>
                        <li><b>Buenos Aires Hidden Gems:</b>Quaint hotels in charming neighborhoods with local flair.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>📍 Popular Travel Destinations</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>New York City – The city that never sleeps</li>
                        <li>Paris – Romantic capital of the world</li>
                        <li>Tokyo – Blend of tradition and modernity</li>
                        <li>Rome – Eternal city of history and culture</li>
                        <li>Bangkok – Bustling metropolis of Southeast Asia</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀 Book with Krad Global Travel</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best price guarantee on flights and car rentals</li>
                        <li>🌐 Wide selection of accommodations worldwide</li>
                        <li>📞 24/7 support for every booking</li>
                    </ul>


                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Let Krad Global Travel inspire your next journey. Book your ideal stay and transportation with us and embark on your unforgettable adventure today!
                    </p>
                 </div>

                 <LatestNews/>
            </div>
        </>
    )
}