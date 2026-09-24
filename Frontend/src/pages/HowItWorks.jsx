
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Headset, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Guaranteed Best Price",
    desc: "Our prices guarantee the best deals in the industry, giving you complete confidence that your trip stays within budget.",
    icon: Zap,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "hover:border-amber-200",
  },
  {
    title: "Safe Transactions",
    desc: "Your payments are protected with enterprise-grade encryption and security measures to keep your data completely safe.",
    icon: ShieldCheck,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "hover:border-blue-200",
  },
  {
    title: "Worldwide Destinations",
    desc: "Access over 630 global destinations through our comprehensive flight, hotel, and curated vacation packages.",
    icon: Globe,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "hover:border-emerald-200",
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our travel experts provide round-the-clock customer support to assist you anytime, anywhere during your journey.",
    icon: Headset,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "hover:border-rose-200",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Features() {
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
            <Sparkles size={14} /> Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Book With{" "}
            <span className="text-blue-600">
              KRAD GLOBAL TRAVEL?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Your trusted gateway to world-class travel experiences, exceptional value, and dedicated round-the-clock support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group bg-white border border-slate-200/80 ${feature.borderColor} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center`}
              >
                {/* Icon Box */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bgColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={26} className={feature.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Zap, Globe, Headset } from 'lucide-react';

// const Features = () => {
//   const features = [
//     {
//       title: "Guaranteed Best Price",
//       desc: "Our prices guarantee the best deals in the industry and give our clients the assurance that their travels will not be too costly.",
//       icon: <Zap className="w-8 h-8 text-amber-500" />,
//       color: "from-amber-500/10 to-orange-500/10"
//     },
//     {
//       title: "Safe Transaction",
//       desc: "Our transaction process is guaranteed safe with all security measures put in place to keep your information completely secure.",
//       icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
//       color: "from-blue-500/10 to-cyan-500/10"
//     },
//     {
//       title: "Worldwide Destination",
//       desc: "Access over 630 worldwide destinations through our various travel services including booking services.",
//       icon: <Globe className="w-8 h-8 text-emerald-500" />,
//       color: "from-emerald-500/10 to-teal-500/10"
//     },
//     {
//       title: "24/7 Support",
//       desc: "We offer round the clock customer service support to serve your needs at any point of the day or night.",
//       icon: <Headset className="w-8 h-8 text-rose-500" />,
//       color: "from-rose-500/10 to-pink-500/10"
//     }
//   ];

//   return (
//     <section className="py-24 bg-[#FCFCFD]/40">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Heading */}
//         <div className="text-center mb-20 relative">
//           <motion.h2 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-4 tracking-tighter"
//           >
//             Why Book With <span className="text-blue-600">KRAD GLOBAL TRAVEL?</span>
//           </motion.h2>

//           <motion.p 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, delay: 0.1 }}
//             className="text-gray-600 font-medium max-w-xl mx-auto leading-relaxed"
//           >
//             Your ultimate gateway to world-class travel experiences, exceptional value, and dedicated support.
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 delay: index * 0.1, 
//                 duration: 0.5, 
//                 ease: "easeOut" 
//               }}
//               whileHover={{ 
//                 y: -12, 
//                 scale: 1.02, 
//                 transition: { duration: 0.2, ease: "easeInOut" }
//               }}
//               className="p-10 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center text-center group transition-shadow duration-300 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-300/60"
//             >
//               <div className={`relative w-20 h-15 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8`}>
//                 <motion.div 
//                   className="absolute inset-0 flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {feature.icon}
//                 </motion.div>

//                 <div className="absolute inset-0 rounded-3xl group-hover:bg-current group-hover:opacity-10 group-hover:blur-sm transition-opacity opacity-0"></div>
//               </div>

//               <h3 className="text-2xl font-extrabold text-gray-950 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-600 text-base leading-relaxed font-semibold">
//                 {feature.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;