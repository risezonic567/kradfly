import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Search, Car, CheckCircle2, ShieldCheck } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";
import CarlistPage from "./CarListPage";
import FAQPage from "./FaqPage";
import Testimonials from "../components/Testimonials";
import Features from "./HowItWorks";

export default function CabBookingSection() {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    differentDropoff: true,
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: "",
    ageGroup: true,
  });

  const handleChange = (e) => {
    const { id, type, checked, value, placeholder } = e.target;
    const fieldName = id || placeholder?.replace(/\s+/g, "");

    setFormData((prev) => ({
      ...prev,
      [fieldName]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearch = () => {
    console.log("Cab Search Requested Data:", formData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <section className="bg-slate-900/5 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <main className="relative flex flex-col md:flex-row items-center justify-center min-h-[75vh] py-6">

            {/* Left Column: Interactive Form Card */}
            <div className="z-30 w-full md:w-[440px] lg:w-[480px] order-2 md:order-1 mt-6 md:mt-0 md:absolute md:left-4 lg:left-8 md:top-1/2 md:-translate-y-1/2">
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden"
                  >
                    {/* Form Card Header */}
                    <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                          <Car size={14} />
                          <span>Premium Travel</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          Book Your Ride
                        </h2>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1 bg-white/10 text-slate-200 text-xs px-2.5 py-1 rounded-full border border-white/10">
                        <ShieldCheck size={13} className="text-emerald-400" />
                        Best Rates
                      </span>
                    </div>

                    {/* Form Input Fields Container */}
                    <div className="p-6 bg-slate-50/50 space-y-4">
                      
                      {/* Pick-Up Location */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                          <MapPin size={13} className="text-blue-600" />
                          Pick-Up Location
                        </label>
                        <input
                          type="text"
                          placeholder="Enter pick-up location"
                          value={formData["Enterpick-uplocation"]}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 placeholder:text-slate-400 shadow-2xs hover:border-slate-300"
                        />
                      </div>

                      {/* Different Dropoff Checkbox */}
                      <div className="flex items-center space-x-2 py-0.5 select-none">
                        <input
                          type="checkbox"
                          id="differentDropoff"
                          checked={formData.differentDropoff}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition cursor-pointer accent-blue-600"
                        />
                        <label 
                          htmlFor="differentDropoff" 
                          className="text-xs font-semibold text-slate-700 cursor-pointer hover:text-slate-900 transition"
                        >
                          Drop car off at different location
                        </label>
                      </div>

                      {/* Drop-Off Location */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                          <MapPin size={13} className="text-emerald-600" />
                          Drop-Off Location
                        </label>
                        <input
                          type="text"
                          placeholder="Enter drop-off location"
                          value={formData["Enterdrop-offlocation"]}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 placeholder:text-slate-400 shadow-2xs hover:border-slate-300"
                        />
                      </div>

                      {/* Date & Time Grid */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            <Calendar size={12} className="text-slate-400" />
                            Pickup Date
                          </label>
                          <input 
                            type="date" 
                            id="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="w-full h-10 px-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            <Clock size={12} className="text-slate-400" />
                            Pickup Time
                          </label>
                          <input 
                            type="time" 
                            id="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            className="w-full h-10 px-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            <Calendar size={12} className="text-slate-400" />
                            Dropoff Date
                          </label>
                          <input 
                            type="date" 
                            id="dropoffDate"
                            value={formData.dropoffDate}
                            onChange={handleChange}
                            className="w-full h-10 px-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                            <Clock size={12} className="text-slate-400" />
                            Dropoff Time
                          </label>
                          <input 
                            type="time" 
                            id="dropoffTime"
                            value={formData.dropoffTime}
                            onChange={handleChange}
                            className="w-full h-10 px-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 transition" 
                          />
                        </div>
                      </div>

                      {/* Age Group Checkbox */}
                      <div className="flex items-center space-x-2 pt-1 select-none">
                        <input
                          type="checkbox"
                          id="ageGroup"
                          checked={formData.ageGroup}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition cursor-pointer accent-blue-600"
                        />
                        <label 
                          htmlFor="ageGroup"
                          className="text-xs font-semibold text-slate-700 cursor-pointer hover:text-slate-900 transition"
                        >
                          Driver age between 30-65
                        </label>
                      </div>

                      {/* Interactive Search Button */}
                      <motion.button
                        type="button"
                        onClick={handleSearch}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-12 mt-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm tracking-wide rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Search size={16} />
                        <span>SEARCH CABS</span>
                      </motion.button>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Hero Visual Banner */}
            <div className="w-full md:w-11/12 lg:w-4/5 relative md:ml-auto h-full flex items-center justify-center order-1 md:order-2">
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9 }}
                className="w-full h-[320px] sm:h-[420px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl relative border border-slate-800/20"
              >
                <img
                  src="/images/Car Home Page.jpg.jpeg"
                  alt="Taxi"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                />

                {/* Professional Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

                {/* Dynamic Floating Title */}
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={
                    showForm
                      ? {
                          y: isMobile ? 0 : -140,
                          opacity: 0.9,
                          scale: isMobile ? 1 : 0.85,
                        }
                      : { y: 0 }
                  }
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/30 mb-3 shadow-lg">
                    Reliable & Comfortable Rides
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-xl leading-none">
                    BOOK YOUR <span className="text-amber-400 underline decoration-blue-500 decoration-4 underline-offset-8">CAB</span>
                  </h1>
                </motion.div>
              </motion.div>
            </div>

          </main>
        </div>
      </section>

      {/* Sub-components maintained in original order */}
      <Features />
      <WhyChooseUs />
      <div id="sticky-trigger"></div>
      <CarlistPage />

      <FAQPage />
      <Testimonials />
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import WhyChooseUs from "./WhyChooseUs";
// import CarlistPage from "./CarListPage";
// import FAQPage from "./FaqPage";
// import Testimonials from "../components/Testimonials";
// import Features from "./HowItWorks";

// export default function CabBookingSection() {
//   const [showForm, setShowForm] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [formData, setFormData] = useState({
//     pickupLocation: "",
//     differentDropoff: true,
//     dropoffLocation: "",
//     pickupDate: "",
//     pickupTime: "",
//     dropoffDate: "",
//     dropoffTime: "",
//     ageGroup: true,
//   });

//   const handleChange = (e) => {
//     const { id, type, checked, value, placeholder } = e.target;
//     const fieldName = id || placeholder?.replace(/\s+/g, "");

//     setFormData((prev) => ({
//       ...prev,
//       [fieldName]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSearch = () => {
//     console.log("Cab Search Requested Data:", formData);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowForm(true);
//     }, 2000)

//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   return (
//     <>
//       <section>
//         <div className="min-h-screen mt-20 font-sans overflow-hidden">
//           <main className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 lg:px-20 py-10">

//             <div className="z-20 w-full md:w-[420px] lg:w-[450px] order-2 md:order-1 mt-[-80px] md:mt-0 md:absolute md:left-20 md:top-1/2 md:-translate-y-1/2 block">
//               <AnimatePresence>
//                 {showForm && (
//                   <motion.div
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
//                   >
//                     <div className="p-6 pb-2">
//                       <h2 className="text-2xl font-bold text-gray-800">
//                         Book Your Online Cab
//                       </h2>
//                     </div>

//                     <div className="bg-[#9b8632] p-6 space-y-4">
//                       <input
//                         type="text"
//                         placeholder="Enter pick-up location"
//                         value={formData["Enterpick-uplocation"]}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none text-gray-800"
//                       />

//                       <div className="flex items-center space-x-2 text-sm font-semibold">
//                         <input
//                           type="checkbox"
//                           id="differentDropoff"
//                           checked={formData.differentDropoff}
//                           onChange={handleChange}
//                           className="w-4 h-4 accent-blue-600"
//                         />
//                         <label htmlFor="differentDropoff">
//                           Drop car off at different location
//                         </label>
//                       </div>

//                       <input
//                         type="text"
//                         placeholder="Enter drop-off location"
//                         value={formData["Enterdrop-offlocation"]}
//                         onChange={handleChange}
//                         className="w-full p-3 rounded-lg bg-gray-50 outline-none text-gray-800"
//                       />

//                       <div className="grid grid-cols-2 gap-3">
//                         <input 
//                           type="date" 
//                           id="pickupDate"
//                           value={formData.pickupDate}
//                           onChange={handleChange}
//                           className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
//                         />
//                         <input 
//                           type="time" 
//                           id="pickupTime"
//                           value={formData.pickupTime}
//                           onChange={handleChange}
//                           className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
//                         />
//                         <input 
//                           type="date" 
//                           id="dropoffDate"
//                           value={formData.dropoffDate}
//                           onChange={handleChange}
//                           className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
//                         />
//                         <input 
//                           type="time" 
//                           id="dropoffTime"
//                           value={formData.dropoffTime}
//                           onChange={handleChange}
//                           className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800" 
//                         />
//                       </div>

//                       <div className="flex items-center space-x-2 text-sm font-semibold">
//                         <input
//                           type="checkbox"
//                           id="ageGroup"
//                           checked={formData.ageGroup}
//                           onChange={handleChange}
//                           className="w-4 h-4 accent-blue-600"
//                         />
//                         <label htmlFor="ageGroup">
//                           Drivers age between 30-65
//                         </label>
//                       </div>

//                       <motion.button
//                         onClick={handleSearch}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="w-full py-4 bg-[#33A1DE] text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition"
//                       >
//                         SEARCH
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <div className="w-full md:w-3/4 relative md:ml-auto h-full flex items-center justify-center order-1 md:order-2">
//               <motion.div
//                 initial={{ scale: 1.1, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1.2 }}
//                 className="w-full h-[300px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl relative"
//               >
//                 <img
//                   src="/images/Car Home Page.jpg.jpeg"
//                   alt="Taxi"
//                   className="w-full h-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/30"></div>

//                 <motion.div
//                   initial={{ opacity: 1, y: 0 }}
//                   animate={
//                     showForm
//                       ? {
//                           y: isMobile ? 0 : -150,
//                           opacity: 0.8,
//                           scale: isMobile ? 1 : 0.8,
//                         }
//                       : { y: 0 }
//                   }
//                   transition={{ duration: 0.8 }}
//                   className="absolute inset-0 flex items-center justify-center"
//                 >
//                   <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-2xl text-center">
//                     BOOK YOUR <span className="text-[#FFCC00]">CAB</span>
//                   </h1>
//                 </motion.div>
//               </motion.div>
//             </div>

//           </main>
//         </div>
//       </section>
      
//       <Features/>
//       <WhyChooseUs/>
//       <div id="sticky-trigger"></div>
//       <CarlistPage />

//       <FAQPage/>
//       <Testimonials/>
//     </>
//   );
// }