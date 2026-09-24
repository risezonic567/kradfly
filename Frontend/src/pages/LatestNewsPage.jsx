import React from 'react';
import { motion } from 'framer-motion';

export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title: "10 Ways on How to Improve your Hotel Stay",
      image: "/images/hotelcruise/10 Ways on How to Improve your Hotel Stay.jpg.jpeg",
      size: "medium", 
    },
    {
      id: 2,
      title: "Dive into our newest water-park adventure",
      image: "/images/hotelcruise/Dive into our newest water-park adventure.jpg.jpeg",
      size: "small",
    },
    {
      id: 3,
      title: "How Hotel Technology Can Help Small Businesses",
      image: "/images/hotelcruise/How Hotel Technology Can Help Small Businesses.jpg.jpeg",
      size: "small",
    },
   {
  id: 4,
  title: "Hotel Service - Become a Guide for Your Guests",
  image: "/images/hotelcruise/Hotel Service - Become a Guide for Your Guests.jpg.jpeg",
  size: "small",
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div></div>
    // <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
    //   <motion.h2 
    //     initial={{ opacity: 0, x: -20 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     className="text-4xl font-bold mb-10 text-gray-900 border-l-4 border-blue-600 pl-4"
    //   >
    //     Latest News
    //   </motion.h2>

    //   <motion.div 
    //     variants={containerVariants}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true }}
    //     className="grid grid-cols-1 md:grid-cols-12 gap-6"
    //   >
    //     <motion.div 
    //       variants={cardVariants}
    //       className="md:col-span-7 group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
    //     >
    //       <motion.img 
    //         whileHover={{ scale: 1.05 }}
    //         transition={{ duration: 0.4 }}
    //         src={newsItems[0].image} 
    //         alt={newsItems[0].title}
    //         className="w-full h-full object-cover"
    //       />
    //       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
    //         <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
    //           {newsItems[0].title}
    //         </h3>
    //       </div>
    //     </motion.div>

    //     <div className="md:col-span-5 flex flex-col gap-8">
    //       {newsItems.slice(1).map((item) => (
    //         <motion.div 
    //           key={item.id}
    //           variants={cardVariants}
    //           whileHover={{ x: 10 }}
    //           className="flex gap-4 items-center group cursor-pointer bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
    //         >
    //           <div className="w-40 h-35 overflow-hidden rounded-lg flex-shrink-0">
    //             <motion.img 
    //               whileHover={{ scale: 1.1 }}
    //               src={item.image} 
    //               className="w-full h-full object-cover transition-transform duration-300"
    //             />
    //           </div>
    //           <div className="flex-1">
    //             <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
    //               {item.title}
    //             </h4>

    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </motion.div>
    // </section>
  );
};
