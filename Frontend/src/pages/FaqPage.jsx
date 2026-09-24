import React, { useState, useMemo } from "react";
import { faqdata } from "../data/faq";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Plus, 
  X, 
  Calendar, 
  CreditCard, 
  RefreshCw, 
  Clock, 
  Plane, 
  Building2, 
  Car, 
  Ship, 
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Mail
} from "lucide-react";

const TABS = [
  { label: "Booking", key: "booking_services", icon: Calendar },
  { label: "Payment", key: "payment_pricing", icon: CreditCard },
  { label: "Cancellation", key: "cancellation_refund", icon: RefreshCw },
  { label: "Changes", key: "changes_rescheduling", icon: Clock },
  { label: "Flights", key: "flight_services", icon: Plane },
  { label: "Hotels", key: "hotel_services", icon: Building2 },
  { label: "Car Rental", key: "car_rental", icon: Car },
  { label: "Cruises", key: "cruise_services", icon: Ship },
  { label: "Delays", key: "delays_cancellations", icon: AlertCircle },
];

export default function Faq() {
  const [tab, setTab] = useState("booking_services");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const activeTabData = faqdata[tab] || [];

  // Filter FAQs based on search term
  const filteredData = useMemo(() => {
    if (!search.trim()) return activeTabData;
    const query = search.toLowerCase();
    return activeTabData.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [activeTabData, search]);

  const handleTabChange = (key) => {
    setTab(key);
    setOpenIndex(null);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 md:py-28 px-4 sm:px-6">
        {/* Ambient Radial Overlay */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto text-center z-10"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            <HelpCircle size={14} /> Support Center
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            How Can We Help <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
              You Today?
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
            Find quick answers for bookings, cancellations, payments, refunds, hotels, flights, and more with our premium support.
          </p>

          {/* Floating Search Input */}
          <div className="max-w-2xl mx-auto mt-8 sm:mt-10 relative">
            <div className="relative flex items-center">
              <Search className="absolute left-5 text-slate-400 pointer-events-none" size={20} />
              <input
                type="text"
                value={search}
                placeholder="Search your question..."
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 pl-14 pr-12 text-white placeholder-slate-400 outline-none shadow-2xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 transition text-sm sm:text-base"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 text-slate-400 hover:text-white p-1 rounded-full transition"
                  aria-label="Clear search query"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modern Animated Tab Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 sm:p-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
          <div className="flex items-center gap-1 sm:gap-2 min-w-max md:justify-center">
            {TABS.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === tab;

              return (
                <button
                  key={item.key}
                  onClick={() => handleTabChange(item.key)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900 cursor-pointer"
                  }`}
                >
                  {/* Butter-Smooth Sliding Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon & Label */}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} className={isActive ? "text-white" : "text-slate-400"} />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Active Section Info Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {TABS.find((t) => t.key === tab)?.label} FAQs
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Frequently asked questions and detailed answers.
            </p>
          </div>

          <div className="self-start sm:self-auto bg-blue-50 text-blue-700 border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-semibold">
            {filteredData.length} {filteredData.length === 1 ? "Question" : "Questions"}
          </div>
        </div>

        {/* Dynamic Animated Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab + search}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {filteredData.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-dashed border-slate-300 p-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Search size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">No questions found</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto">
                  We couldn't find any questions matching "{search}".
                </p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                >
                  Clear Search Filter
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredData.map((item, id) => {
                  const isOpen = openIndex === id;

                  return (
                    <div
                      key={id}
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-500 shadow-md ring-1 ring-blue-500/20"
                          : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                      }`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                        onClick={() => toggleAccordion(id)}
                      >
                        <h3
                          className={`font-semibold text-base sm:text-lg transition-colors duration-200 pr-4 ${
                            isOpen ? "text-blue-600" : "text-slate-800"
                          }`}
                        >
                          {item.question}
                        </h3>

                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                            isOpen
                              ? "bg-blue-600 text-white rotate-45"
                              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                          }`}
                        >
                          <Plus size={14} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contact Support Banner */}
       
      </section>
    </div>
  );
}

// import React, { useState } from "react";
// import { faqdata } from "../data/faq";
// import { FaPlus } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Faq() {

//   const tabs = [
//     { label: "Booking", key: "booking_services" },
//     { label: "Payment", key: "payment_pricing" },
//     { label: "Cancellation", key: "cancellation_refund" },
//     { label: "Changes", key: "changes_rescheduling" },
//     { label: "Flights", key: "flight_services" },
//     { label: "Hotels", key: "hotel_services" },
//     { label: "Car Rental", key: "car_rental" },
//     { label: "Cruises", key: "cruise_services" },
//     { label: "Delays", key: "delays_cancellations" },
//   ];

//   const [tab, setTab] = useState("booking_services");
//   const [open, setOpen] = useState(null);
//   const [search, setSearch] = useState("");

//   const Selectedfaqdata = faqdata[tab] || [];

//   const filterdata = Selectedfaqdata.filter((item) =>
//     item.question.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-[#f8fafc] min-h-screen">

//       <section className="relative overflow-hidden py-24">

//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="relative max-w-5xl mx-auto px-6 text-center"
//         >

//           <p className="uppercase tracking-[4px] text-blue-600 text-md  font-medium mb-4">
//             Support Center
//           </p>

//           <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
//             How Can We Help <br /> <span className="text-blue-400">You Today?</span>
//           </h2>

//           <p className="max-w-2xl mx-auto text-black-100 mt-6 leading-relaxed text-lg">
//             Find quick answers for bookings, cancellations, payments,
//             refunds, hotels, flights, and more with our premium support.
//           </p>

//           <div className="max-w-2xl mx-auto mt-10">
//             <input
//               type="text"
//               placeholder="Search your question..."
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl p-5 px-6 outline-none text-slate-700 shadow-2xl focus:ring-4 focus:ring-blue-200 transition"
//             />
//           </div>
//         </motion.div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">

//         <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 flex flex-wrap justify-center gap-3">

//           {tabs.map((item, id) => (

//             <button
//               key={id}
//               onClick={() => {
//                 setTab(item.key);
//                 setOpen(null);
//               }}
//               className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
//                 item.key === tab
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </section>

//       <section className="max-w-4xl mx-auto px-4 py-20">

//         <div className="flex items-center justify-between mb-10">

//           <div>
//             <h2 className="text-3xl font-bold text-slate-800">
//               {tabs.find((t) => t.key === tab)?.label} FAQs
//             </h2>

//             <p className="text-slate-500 mt-2">
//               Frequently asked questions and answers.
//             </p>
//           </div>

//           <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-semibold">
//             {filterdata.length} Questions
//           </div>
//         </div>

//         {filterdata.length === 0 ? (

//           <div className="text-center py-20 bg-white rounded-3xl shadow-md border border-dashed border-slate-300">
//             <p className="text-slate-500 text-lg">
//               No results found for "{search}"
//             </p>
//           </div>

//         ) : (

//           <div className="space-y-5">

//             {filterdata.map((item, id) => {

//               const isOpen = open === id;

//               return (
//                 <motion.div
//                   key={id}

//                   initial={{ opacity: 0, y: 70 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: id * 0.1,
//                   }}

//                   viewport={{ once: true }}

//                   className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
//                     isOpen
//                       ? "border-blue-300 shadow-xl"
//                       : "border-slate-200 hover:border-blue-200 hover:shadow-lg"
//                   }`}
//                 >

//                   <button
//                     className="w-full flex items-center justify-between p-6 text-left"
//                     onClick={() => setOpen(isOpen ? null : id)}
//                   >

//                     <h3
//                       className={`font-semibold text-lg transition ${
//                         isOpen
//                           ? "text-blue-600"
//                           : "text-slate-800"
//                       }`}
//                     >
//                       {item.question}
//                     </h3>

//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
//                         isOpen
//                           ? "bg-blue-600 text-white rotate-45"
//                           : "bg-slate-100 text-slate-500"
//                       }`}
//                     >
//                       <FaPlus size={12} />
//                     </div>
//                   </button>

//                   <div
//                     className={`transition-all duration-500 overflow-hidden ${
//                       isOpen
//                         ? "max-h-[400px] opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="px-6 pb-7 text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
//                       {item.answer}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }