import React from 'react'
import FlightSearchSection from '../FlightSearchSection'
import HowItWorks from '../../pages/HowItWorks'
import { useNavigate } from 'react-router-dom'
import LatestNews from '../../pages/LatestNewsPage'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'


export default function California() {
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
                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌴Featured Hotels in California</h2>
                    <p className='text-gray-500 mb-5 text-sm sm:text-base leading-relaxed'>
                        From the golden beaches of Southern California to the towering redwoods of the north, California offers something for every type of traveler. Whether you're chasing sunshine in Los Angeles, soaking up culture in San Francisco, or relaxing in a vineyard in Napa Valley — we’ve selected the best hotels to make your California dream a reality.
                    </p>
                    <hr />

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🏖️ Top Beachside Hotels</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Shutters on the Beach – Santa Monica:</b> A luxury beachfront resort with elegant coastal decor, gourmet dining, and direct access to the boardwalk.</li>
                        <li><b>Hotel del Coronado – San Diego:</b> Historic charm meets modern luxury in this iconic oceanfront resort with beautiful Victorian architecture.</li>
                        <li><b>Dream Inn – Santa Cruz:</b> Bright, retro-chic hotel overlooking the Santa Cruz Beach Boardwalk and Monterey Bay.</li>
                        <li><b>Malibu Beach Inn – Malibu:</b> Sophisticated boutique stay with private balconies over the Pacific Ocean and a serene spa.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌆 Urban Retreats in Major Cities</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Fairmont San Francisco:</b> Elegant hotel atop Nob Hill offering panoramic views, a historic ballroom, and proximity to cable cars.</li>
                        <li><b>The LINE LA – Los Angeles:</b>  Hip and modern stay in Koreatown with industrial aesthetics, a rooftop pool, and local flair.</li>
                        <li><b>Omni San Diego Hotel:</b> Steps from Petco Park and the Gaslamp Quarter, ideal for baseball fans and nightlife lovers.</li>
                        <li><b>InterContinental Los Angeles Downtown:</b> Skyscraper luxury with sweeping city views and rooftop dining at the tallest building west of the Mississippi.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🍷Wine Country Escapes</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Auberge du Soleil – Napa Valley:</b> Romantic resort surrounded by vineyards, offering fine dining, a world-class spa, and Mediterranean-inspired rooms.</li>
                        <li><b>Carneros Resort and Spa – Napa:</b>  Rustic luxury with private cottages, vineyard views, and farm-to-table dining experiences.</li>
                        <li><b>Hotel Healdsburg – Sonoma</b> Contemporary sophistication with a pool, spa, and access to some of Sonoma's top tasting rooms.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🌲 Mountain & Nature Getaways</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Tenaya Lodge at Yosemite:</b> Gateway to Yosemite National Park with family-friendly amenities, guided hikes, and cabin options.</li>
                        <li><b>Lake Tahoe Resort Hotel:</b> Spacious suites steps from the Heavenly Gondola and Lake Tahoe's stunning shores.</li>
                        <li><b>Post Ranch Inn – Big Sur:</b> Exclusive adults-only eco-resort with cliffside views, wood-and-glass architecture, and serenity beyond compare.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎡 Family-Friendly Stays</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>Disneyland Hotel – Anaheim</b> The magic starts at check-in with themed rooms, monorail waterslides, and early park entry.</li>
                        <li><b>LEGOLAND Hotel – Carlsbad:</b>  Immersive LEGO-themed rooms and direct access to the park — a kid’s dream come true.</li>
                        <li><b>Hyatt Regency – Huntington Beach:</b> Family-favorite beach resort with waterslides, campfires, and surf school.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>💼For Business Travelers</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li><b>L.A. Grand Hotel Downtown: </b> Centralized for business in DTLA with easy freeway access and modern conference facilities.</li>
                        <li><b>JW Marriott – San Francisco Union Square:</b> Sleek and professional with event space, fast Wi-Fi, and fine dining options.</li>
                        <li><b>Anaheim Marriott:</b> Steps from the Anaheim Convention Center with large meeting rooms and tech-enabled guest rooms.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🧳 Why Book with Krad Fly LLC?</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>✅ Best Rate Guarantee – We’ll match any lower rate you find.</li>
                        <li>🚗Huge Selection – From budget to boutique to 5-star luxury.</li>
                        <li>💳Easy, Secure Booking – Encrypted checkout and instant confirmations.</li>
                        <li>🌟Verified Reviews – Real guests. Real stays. Real feedback.</li>
                        <li>💬 24/7 Support – Talk to a travel expert any time of day.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🎯 Booking Tips</h2>
                    <ul className='text-gray-500 list-disc pl-5 sm:pl-10'>
                        <li>Traveling during summer? Book beachside and mountain stays at least 2 months in advance.</li>
                        <li>Look for labels like “Up to 60% OFF” or “Book & Enjoy 20%” during checkout for extra savings.</li>
                        <li>California’s wine country is best visited in fall – September and October are harvest months.</li>
                        <li>For Yosemite and Big Sur, opt for weekday stays to avoid crowds and surge pricing.</li>
                    </ul>

                    <h2 className='text-lg sm:text-xl font-bold mt-5 mb-5'>🚀Ready to Explore California?</h2>
                    <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
                        Whether you're dreaming of the Pacific Coast Highway, the thrills of Hollywood, or the serenity of Sequoia forests, California has it all — and <b>Krad Fly LLC</b> is your ticket to explore it affordably and in style.
                    </p>

                    <p className='font-semibold text-gray-500 mt-5 mb-5 text-sm sm:text-base'>
                        Book now and enjoy exclusive California hotel deals curated just for you.
                    </p>
                </div>

                <LatestNews />
            </div>
        </>
    )
}