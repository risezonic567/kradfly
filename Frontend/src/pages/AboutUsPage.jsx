import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Award, Globe } from 'lucide-react';
import AboutServices from './AboutServices';
import Testimonials from '../components/Testimonials';

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50 font-sans md:mt-20 text-slate-900 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.img
          src="/images/7upTravel About banner.jpg.jpeg"
          alt="About Krad Fly"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" /> */}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-blue-400 text-xs md:text-sm font-semibold mb-3 inline-block"
          >
            About Krad Fly
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
              Founded in 2025, <strong className="text-slate-900">Krad Fly LLC</strong> was established with a singular focus: bringing transparency, comfort, and value to global travel planning.
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

