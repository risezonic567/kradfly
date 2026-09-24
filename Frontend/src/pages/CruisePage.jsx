import React, { useState } from 'react'
import HowItWorks from './HowItWorks'
import { Link, useNavigate } from 'react-router-dom'
import LatestNews from './LatestNewsPage'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, ShieldCheck, Clock, Users, Gift, HelpCircle, CheckCircle2, ChevronDown, Anchor } from 'lucide-react'
import Testimonials from '../components/Testimonials'
import Faq from './FaqPage'

export default function CruisePage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: "easeOut"
        }}
        className="mt-16 md:mt-24 px-4 max-w-7xl mx-auto"
      >
        <motion.div
          animate={{
            y: [0, -8, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.005
          }}
          className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-white/20"
        >
          <img
            src="/images/hotelcruise/cr.jpg"
            alt="cruise"
            className="w-full h-[400px] sm:h-[480px] md:h-[580px] object-cover transform hover:scale-105 transition duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent"></div>

          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/25 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white max-w-2xl text-center md:text-left space-y-6"
            >
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs md:text-sm font-semibold tracking-wide uppercase">
                <Anchor size={16} className="text-cyan-400 animate-pulse" />
                Luxury Cruise Expeditions
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.15] tracking-tight">
                Life Is Adventure
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 mt-1">
                  Make The Best Of It
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
                Planning a trip? We will organize the perfect getaway—selecting the best destination within your budget!
              </p>

              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <Link to="tel:+971-542919259">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 15px 35px rgba(34, 211, 238, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-extrabold rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* How It Works Component */}
      <HowItWorks />

      {/* Comprehensive Information Content Section */}
      <section className="py-12 md:py-16 px-4 bg-slate-50/50">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Header Intro Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100/80">
            <div className="flex items-center gap-3 text-cyan-600 mb-3">
              <Compass size={28} />
              <span className="text-xs font-bold uppercase tracking-widest">Seamless Cruise Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Cruise Booking by Our Support Team
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Booking a cruise can be an exciting but sometimes overwhelming experience. With so many destinations, ships, and cabin options available, it’s easy to feel unsure about where to start. That’s why our dedicated support team is here to assist you every step of the way, making your cruise booking seamless and stress-free.
            </p>
          </div>

          {/* Why Choose Us Feature Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Our Support Team for Your Cruise Booking?
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">
                Our support team consists of knowledgeable travel experts who specialize in cruises. They understand the nuances of various cruise lines, itineraries, and onboard experiences, ensuring you get the best possible options tailored to your preferences and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Personalized Assistance', desc: 'Get customized cruise recommendations based on your interests, travel dates, and budget.', icon: Users },
                { title: 'Expert Knowledge', desc: 'Benefit from our in-depth understanding of cruise packages, special offers, and exclusive deals.', icon: Compass },
                { title: 'Time-Saving', desc: 'Avoid endless online searching and confusion—our team does the heavy lifting for you.', icon: Clock },
                { title: '24/7 Support', desc: 'Receive continuous help before, during, and after your booking to ensure a smooth travel experience.', icon: ShieldCheck },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-lg shadow-slate-100/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5-Step Booking Process Timeline */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">The Cruise Booking Process Made Easy</h2>
              <p className="text-slate-400 text-sm sm:text-base mb-8">Here is how our support team helps you book your perfect cruise:</p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 'Step 1', title: 'Consultation', desc: 'Tell us about your travel preferences, destinations, and cruise line choices.' },
                  { step: 'Step 2', title: 'Options', desc: 'We provide a curated list of cruise options that fit your exact criteria.' },
                  { step: 'Step 3', title: 'Booking', desc: 'Once you select your cruise, our team handles all booking details securely.' },
                  { step: 'Step 4', title: 'Docs & Visa', desc: 'We assist with ticket issuance, travel insurance, and visa requirements.' },
                  { step: 'Step 5', title: 'Pre-Departure', desc: 'Receive reminders, packing tips, and last-minute travel advisories.' },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">{item.step}</span>
                    <h4 className="text-base font-bold text-white mt-1 mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100/80">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Benefits of Booking Cruises with Support
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-6">
              Booking your cruise through our support team offers numerous advantages beyond convenience:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Access to Exclusive Deals', desc: 'We have partnerships with cruise lines that allow us to offer special discounts and onboard credits.' },
                { title: 'Flexible Payment Options', desc: 'Choose payment plans that suit your budget, including deposits and installment plans.' },
                { title: 'Group Bookings', desc: 'Planning a family or group cruise? Our team coordinates group discounts and cabin arrangements.' },
                { title: 'Travel Insurance Assistance', desc: 'Get advice and assistance on selecting the right insurance coverage for peace of mind.' },
                { title: 'Customized Excursions', desc: 'We can help you book shore excursions tailored specifically to your interests.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-100">
                  <CheckCircle2 size={22} className="text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion FAQ & Tips Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Quick Interactive FAQ Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-slate-100/80">
              <div className="flex items-center gap-2 text-cyan-600 mb-2">
                <HelpCircle size={22} />
                <span className="text-xs font-bold uppercase tracking-wider">Quick Answers</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Common Questions About Cruise Booking</h3>

              <div className="space-y-3">
                {[
                  { q: 'Can I change or cancel my cruise booking?', a: 'Yes, most cruise lines offer flexible cancellation policies, but conditions vary. Our team explains these terms thoroughly before you book.' },
                  { q: 'How early should I book my cruise?', a: 'Early bookings often secure better prices and cabin choices. However, last-minute deals can also be available depending on season.' },
                  { q: 'Are group discounts available?', a: 'Absolutely! We specialize in coordinating group bookings and ensuring you get the best possible group rates and cabin blocks.' },
                ].map((faq, idx) => (
                  <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 flex items-center justify-between font-bold text-slate-800 text-sm hover:bg-slate-50 transition cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-cyan-600' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-slate-600 text-xs sm:text-sm border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Top Tips Box */}
            <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-300 mb-2">
                  <Gift size={22} />
                  <span className="text-xs font-bold uppercase tracking-wider">Expert Advice</span>
                </div>
                <h3 className="text-xl font-extrabold mb-6 text-white">Top Tips for a Smooth Cruise Booking</h3>

                <ul className="space-y-3">
                  {[
                    'Have your travel documents ready and up to date.',
                    'Be clear about your budget and preferred travel dates.',
                    'Ask about all fees and taxes upfront to avoid surprises.',
                    'Request detailed info on onboard amenities and activities.',
                    'Communicate any special needs or dietary restrictions early.',
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Branding Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300">
                <p className="mb-2">
                  At <Link to="#" className="text-cyan-300 font-bold hover:underline">KRAD GLOBAL TRAVEL LLC,</Link> we strive to make your cruise dreams a reality.
                </p>
                <p className="font-semibold text-cyan-200">
                  Book smart, travel happy — only with <Link to="#" className="text-cyan-300 underline font-bold">KRAD GLOBAL TRAVEL LLC.</Link>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Flight CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-2xl text-center md:text-left space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Your Next Adventure Awaits 🌍
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Book flights, discover dream destinations, and create unforgettable memories with premium travel experiences.
              </p>
            </div>

            <button
              onClick={() => navigate("/flight")}
              className="relative z-10 cursor-pointer bg-white text-slate-950 hover:bg-cyan-300 px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 shadow-2xl flex items-center gap-3 shrink-0 hover:scale-105 active:scale-95"
            >
              <span>Book a Flight</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Embedded Global Components */}
      <Testimonials />
      <Faq />
      <LatestNews />
    </>
  )
}

// import React from 'react'
// import HowItWorks from './HowItWorks'
// import { Link, useNavigate } from 'react-router-dom'
// import LatestNews from './LatestNewsPage'
// import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'
// import Testimonials from '../components/Testimonials'
// import Faq from './FaqPage'


// export default function CruisePage() {
//     const navigate = useNavigate()
//   return (
//     <>
//     <motion.section
//   initial={{ opacity: 0, y: 60 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{
//     duration: 0.9,
//     ease: "easeOut"
//   }}
//   className="mt-20 px-4"
// >
//   <motion.div
//     animate={{
//       y: [0, -10, 0]
//     }}
//     transition={{
//       duration: 5,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//     whileHover={{
//       scale: 1.01
//     }}
//     className="relative max-w-7xl mx-auto rounded-[35px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
//   >

//     <img
//       src="/images/hotelcruise/Explore Luxury Cruise Trips.jpg.jpeg"
//       alt="cruise"
//       className="w-full h-[350px] md:h-[500px] object-cover"
//     />

//     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

//     <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

//     <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-14 py-10">

//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="text-white max-w-2xl text-center md:text-left"
//       >

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
//        Life Is Adventure
//           <span className="block text-cyan-300">
//          Make The Best Of It
//           </span>
//         </h1>

//         <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
//       Planning a trip? We will organize the perfect getaway—selecting the best destination within your budget!
//         </p>

//         <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
//           <Link to="tel:+971-542919259">
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 15px 30px rgba(250,204,21,0.35)"
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="px-7 py-3 bg-yellow-400 text-black font-bold rounded-2xl shadow-xl"
//           >
//             Book Now
//           </motion.button>
//           </Link>
//         </div>
//       </motion.div>

//       <motion.div
//         animate={{
//           y: [0, -12, 0],
//           rotate: [-4, 4, -4]
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         whileHover={{
//           scale: 1.08,
//           rotate: 0
//         }}
//         className="mt-10 md:mt-0"
//       >
//       </motion.div>
//     </div>
//   </motion.div>
// </motion.section>

//       <HowItWorks />

//       <section>
//       <div className='max-w-5xl mx-auto bg-gray-100 rounded-4xl'>
//           <div className='pt-5 px-5 max-w-7xl mx-auto'>
//             <h2 className='text-xl font-bold mb-4'>Cruise Booking by Our Support Team</h2>
//             <p className='font-semibold text-gray-500'>
//             Booking a cruise can be an exciting but sometimes overwhelming experience. With so many destinations, ships, and cabin options available, it’s easy to feel unsure about where to start. That’s why our dedicated support team is here to assist you every step of the way, making your cruise booking seamless and stress-free.
//             </p>

//             <h2 className='text-xl font-bold mb-4 mt-5'>Why Choose Our Support Team for Your Cruise Booking?</h2>
//             <p className='font-semibold text-gray-500'>
//                Our support team consists of knowledgeable travel experts who specialize in cruises. They understand the nuances of various cruise lines, itineraries, and onboard experiences, ensuring you get the best possible options tailored to your preferences and budget.
//             </p>

//             <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
//                 <li><b>Personalized Assistance:</b> Get customized cruise recommendations based on your interests, travel dates, and budget.</li>
//                 <li><b>Expert Knowledge:</b> Benefit from our in-depth understanding of cruise packages, special offers, and exclusive deals.</li>
//                 <li><b>Time-Saving:</b> Avoid endless online searching and confusion—our team does the heavy lifting for you.</li>
//                 <li><b>24/7 Support:</b> Receive continuous help before, during, and after your booking to ensure a smooth travel experience.</li>
//             </ul>

//             <h2 className='text-xl font-bold mb-4 mt-5'>The Cruise Booking Process Made Easy</h2>
//             <p className='text-gray-500'>Here is how our support team helps you book your perfect cruise:</p>

//             <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
//                 <li><b>Step 1: Consultation – </b>Tell us about your travel preferences, such as destinations, duration, and cruise line choices.</li>
//                 <li><b>Step 2: Options Presentation – </b>We provide a curated list of cruise options that fit your criteria.</li>
//                 <li><b>Step 3: Booking Assistance –</b> Once you select your preferred cruise, our team handles all booking details securely.</li>
//                 <li><b>Step 4: Documentation –</b> We assist with ticket issuance, travel insurance, and visa requirements if applicable.</li>
//                 <li><b>Step 5: Pre-Departure Support –</b> Receive reminders, packing tips, and any last-minute travel advisories.</li>
//             </ul>

//              <h2 className='text-xl font-bold mb-4 mt-5'>Benefits of Booking Cruises with Support</h2>
//             <p className='text-gray-500'>Booking your cruise through our support team offers numerous advantages beyond convenience:</p>

//             <ul className='list-disc text-gray-500 pl-10 mt-5 mb-5'>
//                 <li><b>Access to Exclusive Deals: </b> We have partnerships with cruise lines that allow us to offer special discounts and onboard credits.</li>
//                 <li><b>Flexible Payment Options: </b>Choose payment plans that suit your budget, including deposits and installment plans.</li>
//                 <li><b>Group Bookings:</b>Planning a family or group cruise? Our team coordinates group discounts and cabin arrangements.</li>
//                 <li><b>Travel Insurance:</b>  Get advice and assistance on selecting the right insurance coverage for peace of mind.</li>
//                 <li><b>Customized Excursions: </b>  We can help you book shore excursions tailored to your interests.</li>
//             </ul>

//             <h2 className='text-xl font-bold mb-4 mt-4'>Common Questions About Cruise Booking</h2>
//             <h4 className='text-md font-semibold text-gray-500'>Q: Can I change or cancel my cruise booking?</h4>
//             <p className='text-gray-500 mt-5 mb-4'>
//                 A: Yes, most cruise lines offer flexible cancellation policies, but conditions vary. Our team explains these terms before you book.
//             </p>
//             <h4 className='text-gray-500 font-semibold text-md mb-4 mt-4'>Q: How early should I book my cruise?</h4>
//             <p className='text-gray-500'>A: Early bookings often secure better prices and cabin choices. However, last-minute deals can also be available.</p>
        
//         <h4 className='text-gray-500 font-semibold text-md mb-4 mt-4'>Q: Are group discounts available?</h4>
//             <p className='text-gray-500 font-md'>A: Absolutely! We specialize in coordinating group bookings and ensuring you get the best possible rates.</p>
        
//             <h2 className='text-xl font-bold mt-5 mb-5'>Top Tips for a Smooth Cruise Booking Experience</h2>
            
//             <ul className='list-disc pl-10 text-gray-500 font-md'>
//                 <li>Have your travel documents ready and up to date.</li>
//                 <li>Be clear about your budget and preferred travel dates.</li>
//                 <li>Ask about all fees and taxes to avoid surprises.</li>
//                 <li>Request information on onboard amenities and activities.</li>
//                 <li>Communicate any special needs or dietary restrictions early.</li>
//             </ul>

//                 <h2 className='text-lg font-bold mt-5 mb-5'>Why Book Your Cruise with Krad Global Travel?</h2>
//                 <p className='text-gray-500'>
//                     At <Link className='text-blue-600'>KRAD GLOBAL TRAVEL LLC,</Link> we strive to make your cruise dreams a reality. Our expert support team ensures personalized service, competitive pricing, and a hassle-free booking process from start to finish.
//                 </p>

//                 <p className='text-gray-500 mt- mb-5'>
//                     Ready to embark on your next ocean adventure? Contact our support team today and let us guide you to the perfect cruise experience.
//                 </p>
//                 <p className='text-gray-500 font-bold'>
//                     Book smart, travel happy — only with <Link className='text-blue-500'>KRAD GLOBAL TRAVEL LLC.</Link>
//                 </p>

           
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mb-10 mt-10 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
//                 >

//                     <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

//                     <div className="relative z-10 max-w-2xl text-center md:text-left">
//                         <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
//                             Your Next Adventure Awaits 🌍
//                         </h2>

//                         <p className="mt-5 text-slate-300 text-lg leading-relaxed">
//                             Book flights, discover dream destinations, and create unforgettable memories with premium travel experiences.
//                         </p>
//                     </div>

//                     <button
//                         onClick={() => navigate("/flight")}
//                         className="relative z-10 cursor-pointer bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-slate-100 transition-all duration-300 shadow-xl flex items-center gap-3"
//                     >
//                         Book a Flight
//                         <ArrowRight size={20} />
//                     </button>
//                 </motion.div>
//         </div>
//       </div>
//       </section>
//       <Testimonials/>
//       <Faq/>
//       <LatestNews/>
//     </>
//   )
// }