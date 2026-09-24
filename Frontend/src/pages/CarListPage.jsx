import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, Settings, Zap, Filter, MapPin, Calendar, X, ChevronRight, RotateCcw, Check, Car } from 'lucide-react';
import CarModal from '../components/CarModal';

const CarlistPage = () => {

  const [cars, setCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isSticky, setIsSticky] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const [typeFilter, setTypeFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  const [showFilter, setShowFilter] = useState(false);

  const carSectionRef = useRef(null);

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const [pickUpDate, setPickUpDate] = useState(getTodayDate());
  const [dropeDate, setDropeDate] = useState(getTodayDate());

  useEffect(() => {
    const dummy = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: i % 2 === 0 ? "Nissan Versa" : i % 3 === 0 ? "Toyota Corolla" : "Kia Rio",
      price: (12 + i).toFixed(2),
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500",
      type: i % 4 === 0 ? "SUV" : "Economy",
      transmission: "Automatic",
      kmLimit: "160 km",
    }));
    setCars(dummy);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!carSectionRef.current) return;

      const top = carSectionRef.current.getBoundingClientRect().top;

      if (top <= 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCars = cars.filter((car) => {
    const typeMatch = typeFilter === "All" || car.type === typeFilter;

    const priceMatch =
      priceFilter === "All" ||
      (priceFilter === "low" && car.price < 25) ||
      (priceFilter === "high" && car.price >= 25);

    return typeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 font-sans">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full inline-block mb-3">
          Available Fleet
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Premium Vehicles
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mt-2">
          Choose from our modern, fully-maintained fleet guaranteed to make your journey comfortable and memorable.
        </p>
      </div>

      {/* Interactive Sticky Search & Filter Control Bar */}
      <div className={`z-40 transition-all duration-300 ${isSticky
        ? 'fixed top-[70px] right-0 left-0 max-w-7xl mx-auto px-4 sm:px-6'
        : 'max-w-7xl mx-auto px-4 sm:px-6'
        }`}>

        <div className="bg-slate-900 shadow-xl shadow-slate-900/10 p-4 sm:p-5 rounded-2xl border border-slate-800 text-white flex flex-col lg:flex-row gap-4 items-center justify-between transition-all">

          {/* Location & Date Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto">

            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" /> Pickup
              </label>
              <input
                type="text"
                placeholder="Pickup Location"
                className="px-3.5 py-2.5 rounded-xl text-xs text-slate-900 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" /> Drop
              </label>
              <input
                type="text"
                placeholder="Drop Location"
                className="px-3.5 py-2.5 rounded-xl text-xs text-slate-900 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar size={12} className="text-emerald-400" /> Pickup Date
              </label>
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl text-xs text-slate-900 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar size={12} className="text-emerald-400" /> Drop Date
              </label>
              <input
                type="date"
                value={dropeDate}
                onChange={(e) => setDropeDate(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl text-xs text-slate-900 bg-slate-50 outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition"
              />
            </div>

          </div>

          {/* Filter Modal Toggle Button */}
          <div className="w-full lg:w-auto flex justify-end">
            <button
              onClick={() => setShowFilter(prev => !prev)}
              className="w-full lg:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 active:scale-98 cursor-pointer"
            >
              <Filter size={16} /> Filters
            </button>
          </div>

        </div>

        {/* Modal Overlay Filter Box */}
        <AnimatePresence>
          {showFilter && (
            <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200"
              >

                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <Filter size={18} className="text-emerald-600" />
                    Filter Vehicles
                  </h2>
                  <button 
                    onClick={() => setShowFilter(false)} 
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Vehicle Type</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {["Economy", "Standard", "SUV", "Luxury", "Van"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTypeFilter(typeFilter === item ? "All" : item)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                          typeFilter === item 
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed Filters Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-2 border-y border-slate-100 text-xs">

                  <div>
                    <p className="font-bold text-slate-800 mb-3 uppercase tracking-wider text-[11px]">Gearbox</p>
                    <div className="space-y-2 text-slate-600">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Automatic</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Manual</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-3 uppercase tracking-wider text-[11px]">Deposit</p>
                    <div className="space-y-2 text-slate-600">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>No deposit</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Credit card</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-3 uppercase tracking-wider text-[11px]">Payment</p>
                    <div className="space-y-2 text-slate-600">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Cash</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Card</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-3 uppercase tracking-wider text-[11px]">Insurance</p>
                    <div className="space-y-2 text-slate-600">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Basic</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600" />
                        <span>Full</span>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Filter Actions */}
                <div className="pt-6 flex justify-between items-center">
                  <button 
                    onClick={() => {
                      setTypeFilter("All");
                      setPriceFilter("All");
                    }} 
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition"
                  >
                    <RotateCcw size={13} /> Reset all filters
                  </button>

                  <button
                    onClick={() => setShowFilter(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition shadow-md shadow-emerald-600/20 cursor-pointer"
                  >
                    View Cars
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {isSticky && <div className="h-[80px]" />}

      {/* Main Car Cards Section Grid */}
      <div ref={carSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredCars.slice(0, visibleCount).map((car, index) => (

            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >

              {/* Card Image Display */}
              <div className="relative p-5 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center min-h-[160px]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-32 object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                <span className="absolute top-3 left-3 bg-amber-50 border border-amber-200/80 text-amber-700 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
                  <Zap size={11} className="fill-amber-500 text-amber-500" /> Instant
                </span>
              </div>

              {/* Card Content & Features */}
              <div className="p-5 pt-2 flex flex-col justify-between flex-grow border-t border-slate-100">

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {car.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {car.name}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-3 pt-2 border-t border-slate-50">
                    <span className="flex items-center gap-1 text-slate-600 font-medium">
                      <Settings size={13} className="text-slate-400" /> {car.transmission}
                    </span>
                    <span className="flex items-center gap-1 text-slate-600 font-medium">
                      <Fuel size={13} className="text-slate-400" /> {car.kmLimit}
                    </span>
                  </div>
                </div>

                {/* Card Price & View Details CTA */}
                <div className="flex justify-between items-center mt-5 pt-3 border-t border-slate-100">

                  <div>
                    <span className="text-xs text-slate-400 block font-medium">From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900">${car.price}</span>
                      <span className="text-[11px] text-slate-500 font-medium">/ day</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsOpen(true);
                      setModalType('carModal');
                    }} 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm shadow-emerald-600/20 active:scale-95 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View</span>
                    <ChevronRight size={13} />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Load More Button */}
        {visibleCount < filteredCars.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="bg-white border border-slate-300 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 px-8 py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              Load More Vehicles
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default CarlistPage;


