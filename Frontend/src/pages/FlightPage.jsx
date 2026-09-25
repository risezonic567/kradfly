
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import HowItWorks from './HowItWorks';
import { MdClose } from "react-icons/md";
import { Calendar, PlaneLanding, PlaneTakeoff, Users, X, Search, ChevronDown, Plus, Minus } from 'lucide-react';
import FlightDestination from './Destination/FlightDestination';
import ExploreNearby from './ExploreNearby';
import FAQPage from './FaqPage';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import OurServices from '../components/OurServices';

export default function FlightPage() {
  const [roundedEnable, setRoundedEnable] = useState(false);
  const [returnDate, setReturnDate] = useState("");

  const [originQuery, setOriginQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");

  const [originAirports, setOriginAirports] = useState([]);
  const [destinationAirports, setDestinationAirports] = useState([]);

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const [loading, setLoading] = useState(false);

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departuredDate: "",
    returnDate: ""
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const [open, setOpen] = useState(false);
  const [cabin, setCabin] = useState("Economy");

  const cabinMap = {
    "Economy": "economy",
    "Business": "business",
    "First Class": "first"
  };

  const handleChange = (type, value) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value)
    }));
  };

  const totalText = `${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}${
    passengers.children ? `, ${passengers.children} Child` : ""
  }${passengers.infants ? `, ${passengers.infants} Infant` : ""}`;

  async function handleSearch(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const origin = formData.get("origin");
    const destination = formData.get("destination");
    const date = formData.get("departuredDate");

    if (!origin || !destination || !date) {
      alert("Please fill all Required field");
      return;
    }

    navigate("/flight-list", {
      state: {
        origin,
        destination,
        date,
        returnDate,
        adults: passengers.adults,
        children: passengers.children,
        infants: passengers.infants,
        cabin: cabinMap[cabin]
      }
    });
  }

  const searchAirports = async (value, type) => {
    if (type === "origin") {
      setOriginQuery(value);
    } else {
      setDestinationQuery(value);
    }

    if (value.length < 2) {
      if (type === "origin") {
        setOriginAirports([]);
        setShowOriginDropdown(false);
      } else {
        setDestinationAirports([]);
        setShowDestinationDropdown(false);
      }
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://www.kradfly.com/api/flight/airports?query=${value}`
      );

      const result = await response.json();

      const airportList = result?.data?.data || [];

      if (type === "origin") {
        setOriginAirports(airportList);
        setShowOriginDropdown(true);
      } else {
        setDestinationAirports(airportList);
        setShowDestinationDropdown(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    function handleClickOutSide(event) {
      if (originRef.current && !originRef.current.contains(event.target)) {
        setShowOriginDropdown(false);
      }

      if (destinationRef.current && !destinationRef.current.contains(event.target)) {
        setShowDestinationDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="font-sans">
      <section className="relative font-sans">
        <div className="w-full pt-20 pb-36 md:pt-28 md:pb-44 relative overflow-hidden bg-slate-900">
          
          {/* Background Video & Overlay */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="/video/herobg.mp4"
              className="w-full h-full object-cover opacity-60"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/10 to-slate-900/40"></div> */}
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 mt-8 md:mt-12">
          {/*  <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Find <span className="text-blue-400">Unpublished</span> Deals
            </motion.h1>*/}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-200 mt-3 text-base sm:text-lg font-medium max-w-xl mx-auto"
            >
              Exclusive fares you won't find anywhere else on the web.
            </motion.p>
          </div>

          {/* Search Box Container */}
          <div className="relative z-20 max-w-6xl mx-auto mt-10 md:mt-14 px-4 sm:px-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200/80">
              <form onSubmit={handleSearch} className="relative z-30">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-5"
                >
                  {/* Row 1: Origin & Destination */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Origin Input */}
                    <div className="group relative" ref={originRef}>
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                        From (Origin)
                      </label>

                      <div className="flex items-center border border-slate-200 group-focus-within:border-blue-600 rounded-xl px-3.5 py-2.5 bg-slate-50/50 group-focus-within:bg-white transition-all shadow-2xs">
                        <PlaneTakeoff size={18} className="text-slate-400 mr-2.5 shrink-0" />
                        <input
                          type="text"
                          placeholder="City or Airport (e.g. JFK)"
                          name="origin"
                          value={originQuery}
                          onChange={(e) => searchAirports(e.target.value, "origin")}
                          className="w-full bg-transparent outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400"
                          autoComplete="off"
                        />
                      </div>

                      {showOriginDropdown && (
                        <div className="absolute top-full mt-2 left-0 w-full bg-white border border-slate-200 shadow-xl rounded-xl max-h-[300px] overflow-y-auto z-[9999]">
                          {loading ? (
                            <div className="p-4 text-center text-xs font-medium text-slate-500">
                              Searching airports...
                            </div>
                          ) : originAirports.length > 0 ? (
                            originAirports.map((item, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  setOriginQuery(item.iata_code.trim().toUpperCase());
                                  setShowOriginDropdown(false);
                                }}
                                className="p-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs border border-slate-200 shrink-0">
                                    {item.iata_code}
                                  </div>
                                  <div>
                                    <p className="font-bold text-slate-900 text-sm">
                                      {item.city_name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 text-center text-xs text-slate-500 font-medium">
                              No Airports Found
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Destination Input */}
                    <div className="group relative" ref={destinationRef}>
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                        To (Destination)
                      </label>

                      <div className="flex items-center border border-slate-200 group-focus-within:border-blue-600 rounded-xl px-3.5 py-2.5 bg-slate-50/50 group-focus-within:bg-white transition-all shadow-2xs">
                        <PlaneLanding size={18} className="text-slate-400 mr-2.5 shrink-0" />
                        <input
                          type="text"
                          placeholder="City or Airport (e.g. LHR)"
                          name="destination"
                          value={destinationQuery}
                          onChange={(e) => searchAirports(e.target.value, "destination")}
                          className="w-full bg-transparent outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400"
                          autoComplete="off"
                        />
                      </div>

                      {showDestinationDropdown && (
                        <div className="absolute top-full mt-2 left-0 w-full bg-white border border-slate-200 shadow-xl rounded-xl max-h-[300px] overflow-y-auto z-[9999]">
                          {loading ? (
                            <div className="p-4 text-center text-xs font-medium text-slate-500">
                              Searching airports...
                            </div>
                          ) : destinationAirports.length > 0 ? (
                            destinationAirports.map((item, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  setDestinationQuery(`${item.iata_code}`);
                                  setShowDestinationDropdown(false);
                                }}
                                className="p-3 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs border border-slate-200 shrink-0">
                                    {item.iata_code}
                                  </div>
                                  <div>
                                    <p className="font-bold text-slate-900 text-sm">
                                      {item.city_name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 text-center text-xs text-slate-500 font-medium">
                              No Airports Found
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Dates, Passengers & Search Action */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    
                    {/* Departure & Return Dates */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                          Departure
                        </label>
                        <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50/50 hover:bg-white transition-all shadow-2xs">
                          <input
                            type="date"
                            name="departuredDate"
                            className="w-full bg-transparent outline-none text-slate-900 text-xs font-medium cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                          Return
                        </label>
                        <div
                          className={`flex items-center border rounded-xl px-3 py-2.5 transition-all shadow-2xs ${
                            roundedEnable
                              ? "border-slate-200 bg-slate-50/50"
                              : "border-dashed border-slate-300 bg-slate-50/30"
                          }`}
                        >
                          <input
                            type="date"
                            disabled={!roundedEnable}
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full bg-transparent outline-none text-slate-900 text-xs font-medium cursor-pointer disabled:text-slate-400"
                          />
                          {roundedEnable ? (
                            <X
                              size={16}
                              className="text-slate-400 hover:text-slate-600 cursor-pointer ml-1 shrink-0"
                              onClick={() => {
                                setRoundedEnable(false);
                                setReturnDate("");
                              }}
                            />
                          ) : (
                            <Calendar
                              size={16}
                              className="text-slate-500 hover:text-blue-600 cursor-pointer ml-1 shrink-0"
                              onClick={() => setRoundedEnable(true)}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Passengers & Class Selector */}
                    <div className="lg:col-span-4 relative">
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                        Travelers & Class
                      </label>
                      <div
                        onClick={() => setOpen(!open)}
                        className="border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50/50 hover:bg-white text-xs cursor-pointer flex justify-between items-center transition-all shadow-2xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Users size={16} className="text-slate-500 shrink-0" />
                          <span className="font-semibold text-slate-900 truncate">
                            {totalText}
                          </span>
                          <span className="text-blue-600 font-bold shrink-0">
                            • {cabin}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-slate-500 transition-transform duration-200 shrink-0 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Passenger Dropdown Popover */}
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute z-[999] mt-2 w-72 left-0 lg:right-0 lg:left-auto bg-white border border-slate-200 rounded-xl shadow-xl p-4 space-y-4"
                        >
                          {["adults", "children", "infants"].map((type) => (
                            <div key={type} className="flex justify-between items-center">
                              <div>
                                <p className="text-xs font-bold text-slate-900 capitalize">
                                  {type}
                                </p>
                                <p className="text-[10px] text-slate-400 font-medium">
                                  {type === "adults"
                                    ? "12+ Years"
                                    : type === "children"
                                    ? "2-11 Years"
                                    : "Under 2 Years"}
                                </p>
                              </div>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => handleChange(type, -1)}
                                  className="w-7 h-7 rounded-md border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="font-bold text-xs w-4 text-center text-slate-900">
                                  {passengers[type]}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleChange(type, 1)}
                                  className="w-7 h-7 rounded-md border border-blue-600 bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            </div>
                          ))}

                          <div className="border-t border-slate-100 pt-3">
                            <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                              Cabin Class
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {["Economy", "Business", "First"].map((item) => (
                                <button
                                  key={item}
                                  type="button"
                                  onClick={() => setCabin(item)}
                                  className={`px-3 py-1 text-xs rounded-md border transition-all font-semibold ${
                                    cabin === item
                                      ? "bg-slate-900 text-white border-slate-900"
                                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                  }`}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={() => setOpen(false)}
                            type="button"
                            className="w-full mt-2 bg-slate-900 text-white py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors"
                          >
                            Done
                          </button>
                        </motion.div>
                      )}
                    </div>

                    {/* Search Submit Button */}
                    <div className="lg:col-span-3">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                      >
                        <Search size={16} />
                        <span>Search Flights</span>
                      </button>
                    </div>

                  </div>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content Components */}
      <HowItWorks />
      <FlightDestination />
      <OurServices />
      <ExploreNearby />
      <Testimonials />
      <FAQPage />
    </div>
  );
}
