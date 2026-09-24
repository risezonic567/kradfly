import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { ArrowUpRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function ExploreNearby() {
  const places = [
    {
      id: 1,
      name: "San Francisco",
      img: "/images/sn.jpg",
      path: "/san-francisco",
    },
    {
      id: 2,
      name: "Los Angeles",
      img: "/images/lo.jpg",
      path: "/los-angeles",
    },
    {
      id: 3,
      name: "Miami",
      img: "/images/mi.jpg",
      path: "/miami",
    },
    {
      id: 4,
      name: "Switzerland",
      img: "/images/sz.jpg",
      path: "/switzerland",
    },
    {
      id: 5,
      name: "Thailand",
      img: "/images/th.jpg",
      path: "/thailand",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50/70 relative font-sans">
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header with Custom Swiper Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-1">
              <MapPin size={14} />
              <span>Trending Destinations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Nearby
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              id="explore-prev-btn"
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-xs flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              id="explore-next-btn"
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-xs flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[FreeMode, Navigation, Autoplay]}
          freeMode={true}
          navigation={{
            prevEl: "#explore-prev-btn",
            nextEl: "#explore-next-btn",
          }}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
          className="pb-4"
        >
          {places.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <Link to={item.path} className="group block h-full">
                <div className="flex flex-col h-full bg-white rounded-2xl p-3 border border-slate-200/70 shadow-xs hover:shadow-md transition-all duration-300">

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      Popular
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="pt-4 pb-1 px-1 flex justify-between items-center mt-auto">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Explore exclusive deals
                      </p>
                    </div>

                    {/* Action Arrow Icon */}
                    <div className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                      <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";

// import { FreeMode, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";

// export default function ExploreNearby() {
//   const places = [
//     {
//       id: 1,
//       name: "San Francisco",
//       img: "/images/sn.jpg",
//       path: "/san-francisco",
//     },
//     {
//       id: 2,
//       name: "Los Angeles",
//       img: "/images/lo.jpg",
//       path: "/los-angeles",
//     },
//     {
//       id: 3,
//       name: "Miami",
//       img: "/images/mi.jpg",
//       path: "/miami",
//     },
//      {
//       id: 4,
//       name: "Switzerland",
//       img: "/images/sz.jpg",
//       path: "/switzerland",
//     },
//      {
//       id: 5,
//       name: "Thailand",
//       img: "/images/th.jpg",
//       path: "/thailand",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50/50">
//       <div className="max-w-7xl mx-auto w-full overflow-hidden">

//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">
//           Explore Nearby
//         </h2>

//         <Swiper
//           modules={[FreeMode, Navigation, Autoplay]}
//           freeMode={true}
//           navigation={true}
//           grabCursor={true}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           spaceBetween={24}
//           slidesPerView={1.2}
//           // className="!overflow-visible"
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 2.5,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {places.map((item) => (
//             <SwiperSlide key={item.id} className="h-auto">
//               <Link to={item.path} className="group block h-full">
//                 <div className="flex flex-col h-full">

//                   <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>

//                   <div className="mt-5 flex justify-between items-center">
//                     <div>
//                       <p className="text-xl font-bold text-gray-800 group-hover:text-[#3aa0c9] transition-colors">
//                         {item.name}
//                       </p>

//                       <p className="text-sm text-gray-500 font-medium">
//                         Explore Deals
//                       </p>
//                     </div>

//                     <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#3aa0c9] group-hover:text-white group-hover:border-[#3aa0c9] transition-all">
//                       →
//                     </div>
//                   </div>

//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }