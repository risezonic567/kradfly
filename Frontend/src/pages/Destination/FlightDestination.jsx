import React from "react";
import { Info, Star, ArrowRight, Compass } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Thailand",
    rating: "4.8",
    description: "Temples, nightlife & tropical beaches.",
    image: "/images/th.jpg",
    path: "/thailand",
  },
  {
    id: 2,
    name: "Hong Kong",
    rating: "4.7",
    description: "Modern skyline & vibrant culture.",
    image: "/images/hn.jpg",
    path: "/hong-kong",
  },
  {
    id: 3,
    name: "Maldives",
    rating: "4.9",
    description: "Luxury villas & crystal clear waters.",
    image: "/images/ml.jpg",
    path: "/maldives",
  },
  {
    id: 4,
    name: "Switzerland",
    rating: "4.8",
    description: "Snowy mountains & scenic landscapes.",
    image: "/images/sz.jpg",
    path: "/switzerland",
  },
];

export default function FlightDestination() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 sm:py-24 bg-slate-50 text-slate-800 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Compass size={14} /> Explore The World
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Popular Destinations ✈️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Discover breathtaking places around the globe with unforgettable experiences and seamless travel planning.
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
            >
              <Link to={dest.path} className="block group h-full">
                <div className="h-full flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-slate-300">
                  
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-slate-100">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Rating Pill Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white flex items-center gap-1.5 text-xs font-semibold">
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                      <span>{dest.rating}</span>
                    </div>

                    {/* Info Icon */}
                    <div className="absolute top-4 right-4 bg-slate-900/40 backdrop-blur-md p-2 rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300">
                      <Info size={16} />
                    </div>

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-5 text-white">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-300 transition-colors">
                        {dest.name}
                      </h3>

                      <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                        {dest.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                      Explore Destination
                    </span>

                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl text-white"
        >
          {/* Ambient Decorator */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Your Next Adventure Awaits 🌍
            </h2>

            <p className="mt-3 text-blue-100 text-sm sm:text-base leading-relaxed">
              Book flights, discover dream destinations, and create unforgettable memories with premium travel experiences.
            </p>
          </div>

          <button
            onClick={() => navigate("/flight")}
            className="relative z-10 shrink-0 cursor-pointer bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-blue-50 hover:shadow-lg transition-all duration-300 flex items-center gap-2.5 active:scale-95"
          >
            <span>Book a Flight</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 


// import React from 'react';
// import { Info, Star, ArrowRight } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const destinations = [
//   {
//     id: 1,
//     name: 'Thailand',
//     rating: '4.8',
//     description: 'Temples, nightlife & tropical beaches.',
//     image: '/images/Thailand.jpg.jpeg',
//     path: "/thailand",
//   },
//   {
//     id: 2,
//     name: 'Hong Kong',
//     rating: '4.7',
//     description: 'Modern skyline & vibrant culture.',
//     image: '/images/Hong Kong.jpg.jpeg',
//     path: "/hong-kong",
//   },
//   {
//     id: 3,
//     name: 'Maldives',
//     rating: '4.9',
//     description: 'Luxury villas & crystal clear waters.',
//     image: '/images/Maldives.jpg.jpeg',
//     path: "/maldives",
//   },
//   {
//     id: 4,
//     name: 'Switzerland',
//     rating: '4.8',
//     description: 'Snowy mountains & scenic landscapes.',
//     image: '/images/Switzerland.jpg.jpeg',
//     path: "/switzerland",
//   },
// ];

// export default function FlightDestination() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-b from-white to-slate-100">
      
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         <div className="text-center mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-blue-600 font-semibold tracking-widest uppercase mb-3"
//           >
//             Explore The World
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
//           >
//             Popular Destinations ✈️
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="max-w-2xl mx-auto mt-6 text-slate-500 text-lg leading-relaxed"
//           >
//             Discover breathtaking places around the globe with unforgettable experiences and seamless travel planning.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {destinations.map((dest, index) => (
//             <motion.div
//               key={dest.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Link to={dest.path}>
//                 <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  
//                   <div className="relative h-[420px] overflow-hidden">
//                     <img
//                       src={dest.image}
//                       alt={dest.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

//                     <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
//                       <Info size={18} />
//                     </div>

//                     <div className="absolute bottom-0 left-0 p-6 text-white">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Star size={16} fill="#FFC107" stroke="#FFC107" />
//                         <span className="font-semibold">{dest.rating}</span>
//                       </div>

//                       <h3 className="text-3xl font-extrabold mb-2 group-hover:text-blue-300 transition-colors">
//                         {dest.name}
//                       </h3>

//                       <p className="text-sm text-slate-200 leading-relaxed">
//                         {dest.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between px-6 py-5">
//                     <span className="font-semibold text-slate-700">
//                       Explore Destination
//                     </span>

//                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
//                       <ArrowRight size={18} />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-28 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
//         >
          
//           <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

//           <div className="relative z-10 max-w-2xl text-center md:text-left">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
//               Your Next Adventure Awaits 🌍
//             </h2>

//             <p className="mt-5 text-slate-300 text-lg leading-relaxed">
//               Book flights, discover dream destinations, and create unforgettable memories with premium travel experiences.
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/flight")}
//             className="relative z-10 cursor-pointer bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-slate-100 transition-all duration-300 shadow-xl flex items-center gap-3"
//           >
//             Book a Flight
//             <ArrowRight size={20} />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }