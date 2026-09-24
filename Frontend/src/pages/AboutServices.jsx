import React from 'react';
import { Hotel, Plane, Globe, Car } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Hotel Booking",
      desc: "Curated luxury and boutique accommodations worldwide with exclusive negotiated rates.",
      icon: Hotel,
      badge: "Accommodations"
    },
    {
      title: "Flight Booking",
      desc: "Domestic and international itineraries featuring unpublished fares and flexible travel options.",
      icon: Plane,
      badge: "Aviation"
    },
    {
      title: "Tour Packages",
      desc: "Tailored guided experiences, private itineraries, and local concierge assistance.",
      icon: Globe,
      badge: "Experiences"
    },
    {
      title: "Chauffeur & Rentals",
      desc: "Premium vehicle rentals and private airport transfers for seamless ground travel.",
      icon: Car,
      badge: "Transportation"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Our Services
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
          Comprehensive Travel Solutions
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          End-to-end management designed for ultimate convenience and exceptional value.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300 mb-5">
                  <IconComponent size={22} />
                </div>

                {/* Content */}
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {service.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mt-2">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-0.5 w-8 bg-slate-200 group-hover:w-full group-hover:bg-blue-600 mt-6 transition-all duration-300 rounded-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;

// import React from 'react';
// import { Hotel, Plane, Globe, Car } from 'lucide-react';

// const ServicesSection = () => {
//   const services = [
//     {
//       title: "Hotel Booking",
//       desc: "Book top-rated hotels easily and enjoy a comfortable stay wherever you travel.",
//       icon: <Hotel className="text-orange-500 w-6 h-6" />,
//       bgColor: "bg-orange-50"
//     },
//     {
//       title: "Flight Booking",
//       desc: "Book domestic and international flights with ease — fast, secure, and hassle-free.",
//       icon: <Plane className="text-teal-500 w-6 h-6" />,
//       bgColor: "bg-teal-50"
//     },
//     {
//       title: "Tour Booking",
//       desc: "Easily book guided tours and explore top destinations with trusted local experts.",
//       icon: <Globe className="text-blue-500 w-6 h-6" />,
//       bgColor: "bg-blue-50"
//     },
//     {
//       title: "Cab Booking",
//       desc: "Easily book reliable cabs anytime for a comfortable, hassle-free journey.",
//       icon: <Car className="text-cyan-500 w-6 h-6" />,
//       bgColor: "bg-cyan-50"
//     }
//   ];

//   return (
//     <section className="py-20 px-6 max-w-7xl mx-auto">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//     {services.map((service, index) => (
//       <div
//         key={index}
//         className="group relative p-6 cursor-pointer rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//       >
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>

//         <div
//           className={`${service.bgColor} w-14 h-14 flex items-center justify-center rounded-xl text-white text-xl shadow-lg transform group-hover:scale-110 transition duration-300`}
//         >
//           {service.icon}
//         </div>

//         <h3 className="text-xl font-bold text-gray-900 mt-5 group-hover:text-blue-600 transition">
//           {service.title}
//         </h3>

//         <p className="text-gray-600 leading-relaxed text-sm mt-2">
//           {service.desc}
//         </p>

//         <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>
//       </div>
//     ))}
//   </div>
// </section>
//   );
// };

// export default ServicesSection;