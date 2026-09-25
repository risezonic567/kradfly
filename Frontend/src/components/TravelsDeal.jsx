import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LatestNews from '../pages/LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


export default function TravelsDeal() {
    const navigate =useNavigate()
  return (
    <>
       <section className="mt-24 px-4">
        
        <div className="relative max-w-7xl mx-auto rounded-[30px] overflow-hidden">
          
          <img
            src="/images/hotelcruise/Explore Luxury Cruise Trips.jpg.jpeg"
            alt="cruise"
            className="w-full h-[350px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

            <div className="text-white max-w-xl text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                Travel Deals & Limited-Time Offers
              </h1>

              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                Take your travel experience to the next level with our handpicked promotions!
              </p>

              {/* <button className="mt-4 md:mt-6 px-5 py-2 md:px-6 md:py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition">
                Book Now
              </button> */}
            </div>

            {/* <div className="mt-6 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19"
                alt="cruise ship"
                className="w-[140px] h-[120px]  object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div> */}

          </div>
        </div>

      </section>
    {/* content section start */}

    <section>
      <div className='max-w-7xl mx-auto bg-gray-50'>
          <div className='pt-5 px-5 max-w-7xl mx-auto mt-20'>
            <h2 className='text-xl font-bold mb-4'>Travel Deals & Limited-Time Offers</h2>
            <p className='font-semibold text-gray-500'>
           Take your travel experience to the next level with our handpicked promotions! Whether you’re planning a solo adventure, a family holiday, or a romantic getaway, our exclusive offers help you save more while enjoying top-tier comfort. Check out the hottest deals available right now:
           </p>

            <h2 className='text-xl font-bold mb-4 mt-5'>Daily 10 Lucky Winners Get a Free Stay</h2>
            <p className='font-semibold text-gray-500'>
                Offer Valid Until: 15 November
            </p>

            <p className='text-gray-500 mb-4 mt-4'>
                Every day, we reward 10 lucky travelers with a completely free hotel stay at selected partner properties. You don’t need to enter separately—just book any hotel through Krad Fly LLC, and you’re automatically in the draw.
            </p>
            
            <h4 className='text-gray-500 font-semibold'>How to Qualify:</h4>
            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li>Book a hotel stay during the promotional period</li>
                <li>Be among the 10 randomly selected winners each day</li>
                <li>Receive a confirmation email if you win, with instructions to claim your free stay</li>
            </ul>

             <h4 className='text-gray-500 font-semibold'>Why You’ll Love It:</h4>
            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li>No additional registration required</li>
                <li>Available for all types of travelers</li>
                <li>Free stay is redeemable at selected premium properties</li>
            </ul>
            <p className='text-gray-500'>Note: Winners must use their free stay within 30 days of winning. T&Cs apply.</p>



            <h2 className='text-xl font-bold mb-4 mt-5'>Up to 10% OFF on Hotel Bookings</h2>
            <p className='text-gray-500'>
                Travel smarter with massive discounts of up to 10% on a wide range of hotels worldwide. Whether you're booking a beachfront resort or a city-center boutique hotel, now is the perfect time to save big on your accommodations.
            </p>
            
            <h3 className='text-gray-500 font-semibold'>Benefits of This Offer:</h3>
            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li>Huge savings on both local and international hotels</li>
                <li>Wide selection of properties and destinations</li>
                <li>Ideal for last-minute trips or long vacations</li>
            </ul>


            <h4 className='text-gray-500 font-semibold'>How to Get the Deal:</h4>
            <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
                <li>Search your destination using our booking engine</li>
                <li>Select hotels marked with the “Up to 10% OFF” tag</li>
                <li>Complete your booking and enjoy instant savings</li>
            </ul>

            <h2 className='text-xl font-bold mb-4 mt-4'>🛌 Book & Enjoy – 20% OFF Room Rates</h2>
            <p className='text-gray-500 mt-5 mb-4'>
                Enjoy 20% off the best available rate when you book your stay directly through Krad Fly LLC. This offer is perfect for travelers who want to combine value with comfort.
            </p>
            <h4 className='text-gray-500 font-semibold mt-5 mb-5'>Offer Highlights:</h4>
            
            <ul className='list-disc pl-10 text-gray-500 mt-5 mb-5 font-md'>
                <li>Valid on a wide range of hotels and resorts</li>
                <li>Flexible booking options</li>
                <li>Great for both short and long stays</li>
            </ul>

                <p className='text-gray-500'>
                    <b>Booking Tip:</b> Look for this deal on properties labeled “Book & Enjoy 20% Off” during checkout.
                </p>
           <h2 className='text-xl font-bold mb-4 mt-4'>🌞 Hot Summer Nights – Get Up to 2 Nights Free!</h2>
           <p className='text-gray-500'>
            Plan your summer escape with our Hot Summer Nights promotion and receive up to 2 nights free at participating hotels. The longer you stay, the more you save!
           </p>
           <h4 className='text-gray-500 font-semibold mb-5 mt-5'>How It Works:</h4>
           <ul className='pl-10 mt-5 mt-5 text-gray-500 list-disc'>
            <li>Book a stay of 2 nights or more at a participating hotel</li>
            <li>Depending on the property, you can receive 1, or even 2 nights free</li>
            <li>Offer applies automatically at checkout</li>
           </ul>
           
            <h4 className='text-gray-500 font-semibold mb-5 mt-5'>Perfect For:</h4>
           <ul className='pl-10 mt-5 mt-5 text-gray-500 list-disc'>
            <li>Summer family holidays</li>
            <li>Beach vacations</li>
            <li>Romantic getaways</li>
            <li>Exploring new cities</li>
           </ul>
           <p className='text-gray-500'><b>Hurry —</b> limited availability on select dates!</p>
           
           <h2 className='text-xl font-bold mt-5 mb-5'>🌟 Why Book With Krad Fly LLC?</h2>
           <ul className='text-gray-500 pl-10 mb-5 mt-5'>
            <li>✅ Best Price Guarantee – Find a lower price elsewhere? We’ll match it.</li>
            <li>🏨 Trusted Hotels – We partner only with verified, quality hotels.</li>
            <li>💬 24/7 Customer Support – Help when you need it, day or night.</li>
            <li>💳 Secure Payments – Fully encrypted and trusted transactions.</li>
           </ul>
           <p className='text-md font-bold text-gray-500'>🚀 Ready to Travel?</p>
           <p className='text-gray-500 mt-5 mb-5'>Take advantage of these limited-time deals and start planning your next adventure today. Great savings, incredible experiences, and trusted service — only at <b>Krad Fly LLC.</b></p>
           
           
            {/* <div className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            It's time to discover ✈️
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            From insider guidance to seamless booking, we'll be with you every step of the way.
          </p>
        </div>

        <button onClick={()=>navigate("/flight")} className="bg-black cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto">
          Book a Flight
        </button>

      </div> */}

        <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
                >

                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h2 className="text-4xl md:text-4xl font-extrabold text-white leading-tight">
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

        </div>
      </div>
      </section>
    <LatestNews/>

    </>
  )
}
