import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, Globe } from 'lucide-react';
import AboutServices from './AboutServices';
import Testimonials from '../components/Testimonials';

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.img
          src="/images/7upTravel About banner.jpg.jpeg"
          alt="About Krad Global Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-blue-400 text-xs md:text-sm font-semibold mb-3 inline-block"
          >
            About Krad Global Travel
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Redefining Global Travel Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal"
          >
            Delivering seamless corporate and leisure travel solutions, unpublished fares, and dedicated end-to-end concierge support.
          </motion.p>
        </div>
      </section>

      {/* Our Story / Corporate Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Excellence in Every Booking, Discretion in Every Detail
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              Founded in 2025, <strong className="text-slate-900">Krad Global Travel LLC</strong> was established with a singular focus: bringing transparency, comfort, and value to global travel planning.
            </p>
          </div>

          {/* Right Column: Detailed Story */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200/80 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Travel should be an effortless extension of your lifestyle or business goals. From securing exclusive unpublished flight tariffs and premium accommodations to coordinating seamless vehicle rentals, we curate each step with precision.
            </p>
            <p>
              Operating across key global destinations, our team manages round-the-clock itineraries with proactive monitoring—ensuring early arrivals, tight connections, and customized schedules are handled flawlessly.
            </p>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl text-slate-800 text-sm font-medium">
              "Our pledge is simple: uncompromising quality, optimized pricing, and total peace of mind wherever your journey leads."
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles / Stats Grid */}
      <section className="bg-white border-y border-slate-200/80 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Tailored Solutions</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Every itinerary is customized to match your exact schedule, budget, and travel preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">End-to-End Support</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  24/7 assistance guaranteeing rapid solutions for schedule adjustments or unexpected delays.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Global Coverage</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Direct access to unpublished deals, luxury stays, and premier transport worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Sub-component */}
      <AboutServices />

      {/* Testimonials Sub-component */}
      <Testimonials />

    </div>
  );
}

// import React from 'react'
// import AboutServices from './AboutServices'
// import { motion } from "framer-motion"
// import Testimonials from '../components/Testimonials'

// export default function AboutUsPage() {
//   return (
//     <div className="bg-slate-50 font-sans text-gray-900 overflow">

//       <section className="relative  h-[70vh] md:h-[95vh] overflow-hidden">

//         <motion.img
//           src="/images/7upTravel About banner.jpg.jpeg"
//           alt="Travel Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//         />

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

//           <div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="uppercase tracking-[6px] text-blue-200 text-sm md:text-base font-semibold mb-5"
//             >
//               About Krad Global Travel
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight max-w-5xl"
//             >
//               Discover the World—We’ll <br />
//               Guide You Every Step 
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="text-slate-200 text-base md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
//             >
//             Customized travel plans, safety guidance, and unwavering support turn dreams into reality.
//             </motion.p>

//           </div>
//         </div>
//       </section>

//       <section className="relative max-w-5xl mx-auto px-6 py-20 my-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">

//         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//           </svg>
//         </div>

//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
//             Our Story
//           </h2>

//           <div className="h-1 w-12 bg-indigo-600 mx-auto mt-4 rounded-full" />
//         </div>

//        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-600 text-base leading-relaxed text-justify">

//   <div className="space-y-6">

//     <p className="text-lg font-medium text-slate-800 border-l-4 border-indigo-500 pl-4 italic">
//       Founded in 2025,
//       <span className="font-bold tracking-wider text-indigo-600 uppercase">
//         {" "}Krad Global Travel LLC
//       </span>
//       {" "}began as a spark in the minds of wanderers—those who longed not merely to travel, but to arrive in style.
//     </p>

//     <p>
//       Every detail—a car here, a flight there, the perfect hotel—was placed
//       with care, like a painter balancing the hues of a grand journey.
//       It was never simply about getting from A to B, but about the story that unfolded.
//     </p>

//     <p>
//       Guided by the unspoken wish to “make it easy, make it delightful,”
//       we gather preferences and lead hearts kindly. We anticipate early flights
//       and late arrivals, smoothing every step of your journey.
//     </p>

//   </div>

//   <div className="space-y-6 md:mt-2">

//     <p>
//     Bookings unfold as gently as a path through rolling hills, and confirmations arrive like whispers on the breeze.

// Rooms are chosen not just for sleep, but for serenity.
//     </p>

//     <p>
//     Cars are selected not merely for transit, but to match pace and purpose. Flights are booked not only for convenience, but in harmony with your rhythm and schedule. Dashwood might have called it excessive—we call it travel done properly.
//     </p>

//     <p className="font-medium text-slate-800 bg-slate-50 p-5 rounded-2xl border border-slate-100">
//      With discretion in service and admiration in detail, we fit even the smallest purse without ever compromising on charm. It is our pleasure to be entrusted with your travels. The stories that follow—many doors opened, many miles traveled—are made seamless by our simple promise. Wherever you go, we’ll ensure the journey feels just right.
//     </p>

//   </div>
// </div>
//       </section>

//       <AboutServices />

//      <Testimonials/>

//     </div>
//   )
// }