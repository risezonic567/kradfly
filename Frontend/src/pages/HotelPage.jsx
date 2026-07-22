import React from 'react'
import { motion } from 'framer-motion'
import PromoSection from './PromotionPage'
import { BiHeadphone } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import HotelAboutPage from './HotelAboutPage'
import HotelDestination from './Destination/HotelDestination'
import Testimonials from '../components/Testimonials'
import Faq from './FaqPage'

export default function HotelPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden md:mt-0 mt-10">

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-14">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 space-y-8 z-10"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold"
            >
              ✨ Luxury Hotel Booking
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Find the top
              <br />

              <span className="text-purple-600 relative inline-block">
                Hotels nearby.

                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-purple-300"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-xl"
            >
              We offer more than just a place to stay — we create luxury
              experiences that fit your budget.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200 max-w-2xl"
            >

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-600">
                    Destination
                  </label>

                  <input
                    type="text"
                    placeholder="Search hotels..."
                    className="w-full mt-2 px-4 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-600">
                    Check In
                  </label>

                  <input
                    type="date"
                    className="w-full mt-2 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-600">
                    Guests
                  </label>

                  <select className="w-full mt-2 px-4 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0px 15px 35px rgba(147,51,234,0.35)'
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-5 h-14 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg"
              >
                Search Hotels
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-10 pt-6"
            >

              {[
                { number: '15K+', text: 'Luxury Hotels' },
                { number: '98%', text: 'Happy Customers' },
                { number: '100+', text: 'Destinations' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                >
                  <h2 className="text-3xl font-bold text-blue-600">
                    {item.number}
                  </h2>

                  <p className="text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative w-full lg:w-1/2 flex justify-center"
          >

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-[420px] md:w-[520px] h-[650px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            >

              <img
                src="/images/hotel homepage.jpg.jpeg"
                alt="Luxury Hotel"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

              <Link to="tel:+1-888-716-0404">

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 2
                  }}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-5 text-white shadow-xl cursor-pointer"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-3">
                    <BiHeadphone size={28} className="text-purple-600" />
                  </div>

                  <h3 className="font-bold text-2xl">
                    24/7
                  </h3>

                  <p className="text-sm text-white/80 tracking-wide">
                    Customer Support
                  </p>
                </motion.div>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5 }}
                className="absolute bottom-6 left-6 bg-white rounded-3xl p-5 shadow-2xl w-64"
              >

                <p className="text-slate-500 text-sm">
                  Starting From
                </p>

                <div className="flex items-center justify-between mt-2">

                  <h2 className="text-3xl font-bold text-slate-900">
                    $120
                  </h2>

                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    Best Deal
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 w-full h-11 rounded-2xl bg-slate-900 text-white hover:bg-purple-600 transition-all duration-300"
                >
                  Book Now
                </motion.button>
              </motion.div>
            </motion.div>

            {/* FLOATING IMAGES */}
            <div className="absolute left-0 top-20 hidden lg:flex flex-col gap-5">

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
                className="w-28 h-28 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl rotate-[-8deg]"
              >
                <img
                  src="/images/hote homepage circle 1.jpg.jpeg"
                  alt="Hotel"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
                className="w-32 h-32 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl rotate-[8deg] ml-10"
              >
                <img
                  src="/images/hote homepage circle 2.jpg.jpeg"
                  alt="Hotel"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      <PromoSection />
      <HotelAboutPage />
      <HotelDestination />
      <Faq />
      <Testimonials />
    </>
  )
}