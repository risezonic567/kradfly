import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Ship,
  MapPin,
  Car,
  Headphones,
  ArrowRight,
  Compass,
} from "lucide-react";

const SERVICES = [
  {
    title: "Cheap Domestic & International Flights",
    description:
      "Get all your flight bookings done easily through us. Enjoy competitive fares, flexible seats, and instant booking confirmation.",
    icon: Plane,
    iconColor: "text-sky-600",
    bgColor: "bg-sky-50",
    hoverBorder: "hover:border-sky-300",
  },
  {
    title: "Hotel Bookings & Accommodations",
    description:
      "Search and reserve top-rated accommodations worldwide. Access exclusive deals on luxury resorts, boutique stays, and budget-friendly options.",
    icon: Building2,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    hoverBorder: "hover:border-rose-300",
  },
  {
    title: "Luxury Cruise Tours & Trips",
    description:
      "Book unforgettable cruise voyages equipped with state-of-the-art amenities, world-class dining, and tailored shore excursions.",
    icon: Ship,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    hoverBorder: "hover:border-cyan-300",
  },
  {
    title: "Expert Local Tour Guides",
    description:
      "Connect with vetted local tour guides for authentic, curated travel experiences and insider insights into destination hidden gems.",
    icon: MapPin,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    title: "Dependable Car Rentals",
    description:
      "Reserve high-quality rental vehicles with unlimited mileage options to explore cities, scenic drives, and landscapes at your own pace.",
    icon: Car,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    hoverBorder: "hover:border-amber-300",
  },
  {
    title: "24/7 Dedicated Travel Support",
    description:
      "Access round-the-clock live agent assistance for seamless real-time rebookings, itinerary edits, emergency travel assistance, and questions.",
    icon: Headphones,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function OurServices() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} /> Our Travel Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Travel Services Designed For You
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From seamless flights and hotels to custom local tours and round-the-clock assistance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm transition-all duration-300 ${service.hoverBorder} hover:shadow-xl flex flex-col justify-between`}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor} mb-6 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={24} className={service.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 transition-colors group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight
                    size={14}
                    className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// import { icons } from "lucide-react";
// import React from "react";
// import { motion } from "framer-motion";

// export default function OurServices() {

//   const services = [
//     {
//       title: "Cheap Domestic & International Flight Bookings",
//       description:
//         "Get all your flight booking done easily through us. You have a variety of options to choose from including easy and quick confirmation.",
//       icon: "Plane",
//       color: "text-sky-500",
//       bg: "bg-sky-100",
//     },
//     {
//       title: "Hotel Bookings – Affordable Accommodations Globally",
//       description:
//         "Search and reserve the best rated and most economical hotels around the world. Have access to great offers on hotel reservations from affordable hotels to luxury hotels and everything in between.",
//       icon: "Hotel",
//       color: "text-rose-500",
//       bg: "bg-rose-100",
//     },
//     {
//       title: "Cruise Bookings – Luxury Cruise Tours",
//       description:
//         "Book yourself into luxurious cruise tours with state-of-the-art amenities and services for the ultimate relaxation experience. Discover new places and make memories on a cruise of your life!",
//       icon: "Ship",
//       color: "text-cyan-500",
//       bg: "bg-cyan-100",
//     },
//     {
//       title: "Tour Guides – Expert Local Tour Guides",
//       description:
//         "Get local expertise on your next travel destination by booking expert local tour guides who will provide you with unique travel experiences and information.",
//       icon: "Map",
//       color: "text-green-500",
//       bg: "bg-green-100",
//     },
//     {
//       title: "Car Rentals – Dependable and Affordable Car Rentals",
//       description:
//         "Book a car for yourself while you are on a vacation to explore cities at your own pace. Enjoy a hassle-free travel experience.",
//       icon: "Car",
//       color: "text-yellow-500",
//       bg: "bg-yellow-100",
//     },
//     {
//       title: "24/7 Support – 24/7 Travel Help",
//       description:
//         "Have access to our round-the-clock customer care help center where you can easily contact us for any questions or concerns about your travels.",
//       icon: "Headphones",
//       color: "text-red-500",
//       bg: "bg-red-100",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20">

//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-center mb-14"
//       >
//         <p className="text-blue-600 font-medium tracking-wide uppercase mb-2">
//           Our Travel Services
//         </p>

//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Travel Services Designed For You
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

//         {services.map((item, id) => {

//           const Icon = icons[item.icon];

//           return (
//             <motion.div
//               key={id}

//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}

//               transition={{
//                 duration: 0.6,
//                 delay: id * 0.15,
//               }}

//               viewport={{ once: true }}

//               className="group bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
//             >

//               <div
//                 className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} mb-5 group-hover:scale-110 transition`}
//               >
//                 <Icon className={item.color} size={28} />
//               </div>

//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {item.title}
//               </h3>

//               <p className="text-gray-500 text-sm font-semibold leading-relaxed">
//                 {item.description}
//               </p>

//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }