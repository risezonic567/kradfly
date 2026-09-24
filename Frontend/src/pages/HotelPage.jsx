import React from 'react'
import { motion } from 'framer-motion'
import PromoSection from './PromotionPage'
import { BiHeadphone } from 'react-icons/bi'
import { FiSearch, FiCalendar, FiUsers, FiMapPin, FiArrowRight } from 'react-icons/fi'
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
      <div className="min-h-screen bg-slate-950/2 text-slate-800 overflow-hidden md:mt-0 mt-6 relative font-sans">
        
        {/* Ambient Decorative Background Glows */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Hero Content & Search Widget */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 space-y-8 z-10"
          >

            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs"
            >
              <FiMapPin className="text-purple-600 animate-pulse" />
              Luxury Hotel Booking
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight text-slate-900"
            >
              Find the top
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 relative inline-block">
                Hotels nearby.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-purple-400/80"
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium"
            >
              We offer more than just a place to stay — we create luxury
              experiences that fit your budget.
            </motion.p>

            {/* Interactive Search Card Widget */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-2xl shadow-purple-900/10 border border-white/60 max-w-2xl transition-all"
            >

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

                <div className="md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                    <FiMapPin className="text-purple-600" /> Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Search hotels..."
                    className="w-full px-4 h-11 text-xs sm:text-sm font-medium rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                    <FiCalendar className="text-purple-600" /> Check In
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 h-11 text-xs sm:text-sm font-medium rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:bg-white transition text-slate-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                    <FiUsers className="text-purple-600" /> Guests
                  </label>
                  <select className="w-full px-3 h-11 text-xs sm:text-sm font-medium rounded-xl bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:bg-white transition text-slate-700">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.01,
                  boxShadow: '0px 15px 30px rgba(147, 51, 234, 0.35)'
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 h-12 sm:h-13 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-white font-bold text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <FiSearch size={18} />
                <span>Search Hotels</span>
              </motion.button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-4 border-t border-slate-200/60"
            >
              {[
                { number: '15K+', text: 'Luxury Hotels' },
                { number: '98%', text: 'Happy Customers' },
                { number: '100+', text: 'Destinations' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer"
                >
                  <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    {item.number}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Visual Stack & Support Link */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative w-full lg:w-1/2 flex justify-center"
          >

            {/* Main Showcase Image Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-full max-w-[440px] lg:max-w-[500px] h-[520px] sm:h-[600px] rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.22)] border-4 border-white/80"
            >

              <img
                src="/images/hotel homepage.jpg.jpeg"
                alt="Luxury Hotel"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              {/* Support Floating Tag */}
              <Link to="tel:+971-542919259">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 1
                  }}
                  className="absolute top-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white shadow-2xl cursor-pointer hover:bg-white/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-2 shadow-sm">
                    <BiHeadphone size={24} className="text-purple-600" />
                  </div>

                  <h3 className="font-extrabold text-xl leading-none">
                    24/7
                  </h3>

                  <p className="text-[11px] font-medium text-white/90 tracking-wider uppercase mt-1">
                    Customer Support
                  </p>
                </motion.div>
              </Link>

              {/* Pricing Box Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -4 }}
                className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/50 min-w-[240px]"
              >
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Starting From
                </p>

                <div className="flex items-center justify-between mt-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    $120
                  </h2>

                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
                    Best Deal
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 w-full h-10 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-600 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Book Now</span>
                  <FiArrowRight size={14} />
                </motion.button>
              </motion.div>

            </motion.div>

            {/* Floating Thumbnail Circle Visuals */}
            <div className="absolute -left-4 top-16 hidden lg:flex flex-col gap-6 pointer-events-none">

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-[-8deg] pointer-events-auto hover:scale-110 transition duration-300"
              >
                <img
                  src="/images/hote homepage circle 1.jpg.jpeg"
                  alt="Hotel Preview 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-[8deg] ml-8 pointer-events-auto hover:scale-110 transition duration-300"
              >
                <img
                  src="/images/hote homepage circle 2.jpg.jpeg"
                  alt="Hotel Preview 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>

          </motion.div>

        </section>

      </div>

      {/* Embedded Sub-Components */}
      <PromoSection />
      <HotelAboutPage />
      <HotelDestination />
      <Faq />
      <Testimonials />
    </>
  )
}



// import React from 'react'
// import { motion } from 'framer-motion'
// import PromoSection from './PromotionPage'
// import { BiHeadphone } from 'react-icons/bi'
// import { Link } from 'react-router-dom'
// import HotelAboutPage from './HotelAboutPage'
// import HotelDestination from './Destination/HotelDestination'
// import Testimonials from '../components/Testimonials'
// import Faq from './FaqPage'

// export default function HotelPage() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut'
//       }
//     }
//   }

//   const fadeLeft = {
//     hidden: { opacity: 0, x: -80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut'
//       }
//     }
//   }

//   const fadeRight = {
//     hidden: { opacity: 0, x: 80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut'
//       }
//     }
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden md:mt-0 mt-10">

//         <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-14">

//           <motion.div
//             variants={fadeLeft}
//             initial="hidden"
//             animate="visible"
//             className="w-full lg:w-1/2 space-y-8 z-10"
//           >

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold"
//             >
//               ✨ Luxury Hotel Booking
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-5xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
//             >
//               Find the top
//               <br />

//               <span className="text-purple-600 relative inline-block">
//                 Hotels nearby.

//                 <svg
//                   className="absolute -bottom-2 left-0 w-full h-3 text-purple-300"
//                   viewBox="0 0 100 10"
//                   preserveAspectRatio="none"
//                 >
//                   <path
//                     d="M0 5 Q 25 0, 50 5 T 100 5"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-slate-500 text-lg leading-relaxed max-w-xl"
//             >
//               We offer more than just a place to stay — we create luxury
//               experiences that fit your budget.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: 0.6 }}
//               whileHover={{ y: -5 }}
//               className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200 max-w-2xl"
//             >

//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//                 <div className="md:col-span-2">
//                   <label className="text-sm font-semibold text-slate-600">
//                     Destination
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Search hotels..."
//                     className="w-full mt-2 px-4 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-slate-600">
//                     Check In
//                   </label>

//                   <input
//                     type="date"
//                     className="w-full mt-2 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-slate-600">
//                     Guests
//                   </label>

//                   <select className="w-full mt-2 px-4 h-12 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-purple-400">
//                     <option>1 Guest</option>
//                     <option>2 Guests</option>
//                     <option>3 Guests</option>
//                     <option>4+ Guests</option>
//                   </select>
//                 </div>
//               </div>

//               <motion.button
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: '0px 15px 35px rgba(147,51,234,0.35)'
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full mt-5 h-14 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg"
//               >
//                 Search Hotels
//               </motion.button>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: 0.8 }}
//               className="flex flex-wrap gap-10 pt-6"
//             >

//               {[
//                 { number: '15K+', text: 'Luxury Hotels' },
//                 { number: '98%', text: 'Happy Customers' },
//                 { number: '100+', text: 'Destinations' }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="cursor-pointer"
//                 >
//                   <h2 className="text-3xl font-bold text-blue-600">
//                     {item.number}
//                   </h2>

//                   <p className="text-slate-500">
//                     {item.text}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             variants={fadeRight}
//             initial="hidden"
//             animate="visible"
//             className="relative w-full lg:w-1/2 flex justify-center"
//           >

//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: 'easeInOut'
//               }}
//               className="relative w-[420px] md:w-[520px] h-[650px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
//             >

//               <img
//                 src="/images/hotel homepage.jpg.jpeg"
//                 alt="Luxury Hotel"
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

//               <Link to="tel:+971-542919259">

//                 <motion.div
//                   whileHover={{
//                     scale: 1.05,
//                     rotate: 2
//                   }}
//                   className="absolute top-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-5 text-white shadow-xl cursor-pointer"
//                 >

//                   <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-3">
//                     <BiHeadphone size={28} className="text-purple-600" />
//                   </div>

//                   <h3 className="font-bold text-2xl">
//                     24/7
//                   </h3>

//                   <p className="text-sm text-white/80 tracking-wide">
//                     Customer Support
//                   </p>
//                 </motion.div>
//               </Link>

//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 whileHover={{ y: -5 }}
//                 className="absolute bottom-6 left-6 bg-white rounded-3xl p-5 shadow-2xl w-64"
//               >

//                 <p className="text-slate-500 text-sm">
//                   Starting From
//                 </p>

//                 <div className="flex items-center justify-between mt-2">

//                   <h2 className="text-3xl font-bold text-slate-900">
//                     $120
//                   </h2>

//                   <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
//                     Best Deal
//                   </span>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="mt-4 w-full h-11 rounded-2xl bg-slate-900 text-white hover:bg-purple-600 transition-all duration-300"
//                 >
//                   Book Now
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* FLOATING IMAGES */}
//             <div className="absolute left-0 top-20 hidden lg:flex flex-col gap-5">

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity
//                 }}
//                 className="w-28 h-28 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl rotate-[-8deg]"
//               >
//                 <img
//                   src="/images/hote homepage circle 1.jpg.jpeg"
//                   alt="Hotel"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity
//                 }}
//                 className="w-32 h-32 rounded-[30px] overflow-hidden border-4 border-white shadow-2xl rotate-[8deg] ml-10"
//               >
//                 <img
//                   src="/images/hote homepage circle 2.jpg.jpeg"
//                   alt="Hotel"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </section>
//       </div>

//       <PromoSection />
//       <HotelAboutPage />
//       <HotelDestination />
//       <Faq />
//       <Testimonials />
//     </>
//   )
// }