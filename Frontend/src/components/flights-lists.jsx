import React, { useEffect, useState, useMemo } from "react"
import { Plane, Filter, X, Clock, Luggage, Wifi, ShieldCheck, AlertCircle, ArrowRight, RotateCcw } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"

const FlightSearchPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [visible, setVisisble] = useState(20)
    const searchData = location.state || JSON.parse(localStorage.getItem("flightSearchData"))

    const [flight, setFlight] = useState([])
    const [loading, setLoading] = useState(false)

    const [filterOpen, setFilterOpen] = useState(false)

    const [selectedAirlines, setSelectedAirlines] = useState([])

    const [maxPrice, setMaxPrice] = useState(25000)
    const [stopFilter, setStopFilter] = useState("all")

    const [layover, setLayover] = useState("all")

    const [cabinFilter, setCabinFilter] = useState(
        searchData?.cabin || "all"
    )

    const handleSelectFlight = (flight) => {
        const encodedId = btoa(flight.id)

        localStorage.setItem("selectedFlight", JSON.stringify(flight))

        navigate(`/checkout?flightId=${encodedId}`, {
            state: {
                flight,
                passengers: searchData
            }
        })
    }

    const filteredFlights = flight.filter((f) => {
        const airlineMatch =
            selectedAirlines.length === 0 ||
            selectedAirlines.includes(f.airline)

        let stopMatch = true

        if (stopFilter === "nonstop") {
            stopMatch = f.stops === 0
        } else if (stopFilter === "1stop") {
            stopMatch = f.stops === 1
        } else if (stopFilter === "2stop") {
            stopMatch = f.stops === 2
        }

        const priceMatch = f.price <= maxPrice

        const cabinMatch =
            cabinFilter === "all" || f.cabin === cabinFilter

        return airlineMatch && stopMatch && priceMatch && cabinMatch
    })

    const normalizeCabin = (cabin) => {
        return cabin
            ?.toLowerCase()
            .replace(" ", "_")
            .replace("class", "")
            .trim()
    }

    const formatFlights = (offers) => {
        return offers.map((offer) => {
            const segments = offer?.slices?.[0]?.segments || []
            const firstSeg = segments[0] || {}
            const lastSeg = segments[segments.length - 1] || {}

            const retSegments = offer?.slices?.[1]?.segments || []
            const retFirst = retSegments[0] || {}
            const retLast = retSegments[retSegments.length - 1] || {}

            const baggage = segments?.[0]?.passengers?.[0]?.baggages || []

            const rawCabin =
                firstSeg?.passengers?.[0]?.cabin_class_marketing_name ||
                firstSeg?.cabin?.name ||
                "economy"

            const rawReturnCabin =
                retFirst?.passengers?.[0]?.cabin_class_marketing_name ||
                retFirst?.cabin?.name ||
                null

            const flightNumber =
                firstSeg?.marketing_carrier?.iata_code && firstSeg?.marketing_carrier_flight_number
                    ? `${firstSeg.marketing_carrier.iata_code} ${firstSeg.marketing_carrier_flight_number}`
                    : firstSeg?.operating_carrier?.iata_code && firstSeg?.operating_carrier_flight_number
                        ? `${firstSeg.operating_carrier.iata_code} ${firstSeg.operating_carrier_flight_number}`
                        : "N/A"

            const stopFlight = segments
                .slice(0, -1)
                .map(seg => {
                    const city = seg?.destination?.city_name
                    const code = seg?.destination?.iata_code

                    return city && code ? `${city} (${code})` : null
                })
                .filter(Boolean)

            const slice = offer?.slices?.[0] || {}

            const refundData = offer?.conditions?.refund_before_departure
                || slice?.conditions?.refund_before_departure
                || null

            let isRefundable = null
            let isFreeRefundable = null

            if (refundData) {
                isRefundable = refundData.allowed

                isFreeRefundable =
                    refundData.allowed &&
                    Number(refundData.penalty_amount) === 0
            }

            const depDate = new Date(firstSeg?.departing_at)
            const arrDate = new Date(lastSeg?.arriving_at)

            const layover = segments.slice(0, -1).map((seg, i) => {
                const nextSeg = segments[i + 1]

                if (!nextSeg) return null

                const arrival = new Date(seg?.arriving_at)
                const nextDeparture = new Date(nextSeg?.departing_at)

                const diffMs = nextDeparture - arrival

                const hours = Math.floor(diffMs / (1000 * 60 * 60))
                const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

                return {
                    city: seg?.destination?.city_name,
                    code: seg?.destination?.iata_code,
                    duration: `${hours}h ${minutes}m`
                }
            }).filter(Boolean)

            const wifiInfo =
                segments?.[0]?.passengers?.[0]?.cabin?.amenities?.wifi || {}

            const hasWifi = wifiInfo?.available || false
            const wifiType = wifiInfo?.cost === "paid" ? "Paid" : "Free"

            return {
                id: offer.id,

                airline:
                    firstSeg?.marketing_carrier?.name ||
                    firstSeg?.operating_carrier?.name ||
                    firstSeg?.carrier?.name ||
                    firstSeg?.marketing_carrier?.iata_code ||
                    firstSeg?.operating_carrier?.iata_code ||
                    "Unknown Airline",

                logo:
                    firstSeg?.marketing_carrier?.logo_symbol_url ||
                    firstSeg?.operating_carrier?.logo_symbol_url ||
                    "https://placehold.co/40x40",

                departureTime: depDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),

                departureDate: depDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short"
                }),

                arrivalTime: arrDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),

                arrivalDate: arrDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit"
                }),

                departure: depDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),

                arrival: arrDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),

                returnDeparture: retFirst?.departing_at
                    ? new Date(retFirst.departing_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    : null,

                returnArrival: retLast?.arriving_at
                    ? new Date(retLast.arriving_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    : null,

                returnDepartureDate: retFirst?.departing_at
                    ? new Date(retFirst.departing_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short"
                    })
                    : null,

                returnArrivalDate: retLast?.arriving_at
                    ? new Date(retLast.arriving_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short"
                    })
                    : null,

                duration: offer?.slices?.[0]?.duration
                    ?.replace("PT", "")
                    .replace("H", "h ")
                    .replace("M", "m"),

                price: Number(offer.total_amount),
                currency: offer.total_currency,

                originCity: firstSeg?.origin?.city_name,
                destinationCity: lastSeg?.destination?.city_name,

                cabin: normalizeCabin(rawCabin),
                returnCabin: rawReturnCabin
                    ? normalizeCabin(rawReturnCabin)
                    : null,

                hasReturn: offer?.slices?.length > 1,

                baggage: baggage,
                stops: segments.length - 1,

                flightNumber: flightNumber,
                stopFlight: stopFlight,

                hasWifi: hasWifi,
                wifiType: wifiType,

                refundData: refundData,
                isRefundable: isRefundable,
                isFreeRefundable: isFreeRefundable,

                layover: layover,

                fullData: offer,
            }
        })
    }

    const airlines = useMemo(() => {
        return [...new Set(flight.map((f) => f.airline).filter(Boolean))]
    }, [flight])

    const handleAirline = (airline) => {
        setSelectedAirlines((prev) =>
            prev.includes(airline)
                ? prev.filter((a) => a !== airline)
                : [...prev, airline]
        )
    }

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                setLoading(true)

                const res = await fetch(
                    "https://www.kradfly.com/api/flight/flight-search",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(searchData),
                    }
                )

                const data = await res.json()

                const formatted = formatFlights(data.offers || [])
                setFlight(formatted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if (searchData) fetchFlights()
    }, [searchData])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[80vh] w-full bg-slate-50">
                <div className="flex flex-col items-center bg-white px-8 py-10 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full mx-4 text-center">
                    <div className="relative mb-6">
                        <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                        <Plane className="w-6 h-6 text-blue-600 absolute inset-0 m-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Finding Best Deals</h3>
                    <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">
                        Comparing available flights and real-time prices for your trip...
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-16 bg-[#f8fafc]">
            {/* Mobile Filter Floating / Trigger Button */}
            <div className="lg:hidden px-4 mb-4 flex items-center justify-between">
                <button
                    onClick={() => setFilterOpen(true)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition active:scale-95 text-sm"
                >
                    <Filter size={16} className="text-blue-600" />
                    <span>Filter & Refine</span>
                    {(selectedAirlines.length > 0 || stopFilter !== "all" || cabinFilter !== "all") && (
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    )}
                </button>
                <span className="text-xs font-semibold text-slate-500 bg-slate-200/60 px-3 py-1.5 rounded-full">
                    {filteredFlights.length} Flights
                </span>
            </div>

            {/* Mobile Filter Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
                    filterOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
                onClick={() => setFilterOpen(false)}
            >
                <div
                    className={`bg-white w-[85%] max-w-sm h-full p-6 transition-transform duration-300 overflow-y-auto flex flex-col justify-between shadow-2xl ${
                        filterOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <Filter size={18} className="text-blue-600" /> Filters
                            </h2>
                            <button
                                onClick={() => setFilterOpen(false)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-6 py-5">
                            {/* Cabin Class */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Cabin Class</h3>
                                <select
                                    value={cabinFilter}
                                    onChange={(e) => setCabinFilter(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-blue-500 font-medium"
                                >
                                    <option value="all">All Classes</option>
                                    <option value="economy">Economy</option>
                                    <option value="premium_economy">Premium Economy</option>
                                    <option value="business">Business</option>
                                    <option value="first">First Class</option>
                                </select>
                            </div>

                            {/* Stops */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Stops</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
                                        <input
                                            checked={stopFilter === "nonstop"}
                                            onChange={() => setStopFilter(stopFilter === "nonstop" ? "all" : "nonstop")}
                                            type="checkbox"
                                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                        />
                                        <span>Non-Stop</span>
                                    </label>
                                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
                                        <input
                                            checked={stopFilter === "1stop"}
                                            onChange={() => setStopFilter(stopFilter === "1stop" ? "all" : "1stop")}
                                            type="checkbox"
                                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                        />
                                        <span>1 Stop</span>
                                    </label>
                                    <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
                                        <input
                                            checked={stopFilter === "2stop"}
                                            onChange={() =>
                                                setStopFilter(stopFilter === "2stop" ? "all" : "2stop")
                                            }
                                            type="checkbox"
                                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                        />
                                        <span>2+ Stops</span>
                                    </label>
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Max Budget</h3>
                                    <span className="text-sm font-bold text-blue-600">₹{maxPrice.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="2000"
                                    max="25000"
                                    step="500"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            {/* Airlines */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Airlines</h3>
                                <div className="max-h-52 overflow-y-auto space-y-2.5 pr-2">
                                    {airlines.map((airline, i) => (
                                        <label key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedAirlines.includes(airline)}
                                                onChange={() => handleAirline(airline)}
                                                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                            />
                                            <span className="truncate">{airline}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setFilterOpen(false)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-500/20 transition text-sm"
                    >
                        Apply Filters ({filteredFlights.length})
                    </button>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 mt-10  sm:px-6 flex flex-col lg:flex-row gap-6">

                {/* Desktop Sticky Sidebar */}
                <aside className="w-full lg:w-72 xl:w-80 hidden lg:block shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sticky top-24">
                        <div className="flex items-center justify-between  pb-4 border-b border-slate-100">
                            <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                <Filter size={18} className="text-blue-600" /> Filters
                            </h2>
                            {(selectedAirlines.length > 0 || stopFilter !== "all" || cabinFilter !== "all" || maxPrice < 25000) && (
                                <button
                                    onClick={() => {
                                        setSelectedAirlines([])
                                        setStopFilter("all")
                                        setCabinFilter("all")
                                        setMaxPrice(25000)
                                    }}
                                    className="text-xs text-blue-600 hover:underline font-semibold"
                                >
                                    Reset
                                </button>
                            )}
                        </div>

                        {/* Cabin Filter */}
                        <div className="mb-6 ">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Cabin</h3>
                            <select
                                value={cabinFilter}
                                onChange={(e) => setCabinFilter(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-blue-500 font-medium transition"
                            >
                                <option value="all">All Classes</option>
                                <option value="economy">Economy</option>
                                <option value="premium_economy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        </div>

                        {/* Stops Filter */}
                        <div className="mb-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Stops</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 cursor-pointer transition">
                                    <input
                                        checked={stopFilter === "nonstop"}
                                        onChange={() =>
                                            setStopFilter(stopFilter === "nonstop" ? "all" : "nonstop")
                                        }
                                        type="checkbox"
                                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                    />
                                    <span>Non-Stop</span>
                                </label>
                                <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 cursor-pointer transition">
                                    <input
                                        checked={stopFilter === "1stop"}
                                        onChange={() =>
                                            setStopFilter(stopFilter === "1stop" ? "all" : "1stop")
                                        }
                                        type="checkbox"
                                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                    />
                                    <span>1 Stop</span>
                                </label>
                                <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 cursor-pointer transition">
                                    <input
                                        checked={stopFilter === "2stop"}
                                        onChange={() =>
                                            setStopFilter(stopFilter === "2stop" ? "all" : "2stop")
                                        }
                                        type="checkbox"
                                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                    />
                                    <span>2+ Stops</span>
                                </label>
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Max Budget</h3>
                                <span className="text-sm font-bold text-blue-600">₹{maxPrice.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="2000"
                                max="25000"
                                step="500"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Airlines Filter */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Airlines</h3>
                            <div className="max-h-60 overflow-y-scroll space-y-2.5 pr-2">
                                {airlines.map((airline, i) => (
                                    <label key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 cursor-pointer transition">
                                        <input
                                            type="checkbox"
                                            checked={selectedAirlines.includes(airline)}
                                            onChange={() => handleAirline(airline)}
                                            className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                                        />
                                        <span className="truncate">{airline}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Flight Results List */}
                <main className="flex-1 min-w-0">
                    {/* Header route bar */}
                    <div className="mb-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                            <h1 className="text-lg font-bold text-slate-800 flex items-center flex-wrap gap-2">
                                <span>{flight[0]?.originCity || searchData?.origin || "Origin"}</span>
                                <ArrowRight size={16} className="text-slate-400" />
                                <span>{flight[0]?.destinationCity || searchData?.destination || "Destination"}</span>
                            </h1>
                            <p className="text-xs text-slate-500 mt-1">
                                {searchData?.origin && searchData?.destination && (
                                    <span>{searchData.origin} to {searchData.destination} • </span>
                                )}
                                Showing best available flight options
                            </p>
                        </div>
                        <div className="bg-blue-50 text-blue-700 font-semibold text-xs px-3 py-1.5 rounded-full border border-blue-100 self-start sm:self-center">
                            {filteredFlights.length} Flights Found
                        </div>
                    </div>

                    {/* Flight Cards list */}
                    <div className="space-y-4">
                        {filteredFlights.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-sm">
                                <Plane className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                                <h3 className="text-lg font-bold text-slate-700">No flights matched your filter</h3>
                                <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
                                    Try adjusting your filters, budget, or preferred airlines to see more options.
                                </p>
                            </div>
                        ) : (
                            filteredFlights.slice(0, visible).map((flight) => (
                                <div
                                    key={flight.id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200/90 overflow-hidden"
                                >
                                    <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                                        {/* Main Details (Left & Center) */}
                                        <div className="flex-1 space-y-5">
                                            {/* Airline header row */}
                                            <div className="flex items-center justify-between flex-wrap gap-3">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={flight.logo}
                                                        alt={flight.airline}
                                                        className="w-10 h-10 object-contain rounded-lg p-1 bg-slate-50 border border-slate-100"
                                                        onError={(e) => {
                                                            e.target.src = "https://placehold.co/40x40"
                                                        }}
                                                    />
                                                    <div>
                                                        <h4 className="font-bold text-slate-800 leading-tight">{flight.airline}</h4>
                                                        <p className="text-xs text-slate-400 font-medium">
                                                            Flight: <span className="text-slate-600 font-semibold">{flight.flightNumber}</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                                                        flight.stops === 0
                                                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                                            : "bg-amber-50 text-amber-700 border-amber-100"
                                                    }`}>
                                                        {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop via ${flight.stopFlight.join(",")}`}
                                                    </span>

                                                    {flight.layover.map((l, i) => (
                                                        <span key={i} className="text-xs px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full font-medium border border-purple-100">
                                                            {l.city} • {l.duration}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Route & Times Grid */}
                                            <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 flex items-center justify-between gap-4">
                                                {/* Departure */}
                                                <div className="text-left min-w-[80px]">
                                                    <p className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{flight.departure}</p>
                                                    <p className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">{flight.originCity}</p>
                                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{flight.departureDate}</p>
                                                </div>

                                                {/* Flight Path Graphic */}
                                                <div className="flex-1 px-3 flex flex-col items-center">
                                                    <span className="text-xs font-semibold text-slate-500 mb-1.5 flex items-center gap-1">
                                                        <Clock size={12} className="text-slate-400" />
                                                        {flight.duration}
                                                    </span>
                                                    <div className="w-full flex items-center gap-2">
                                                        <div className="h-[2px] bg-slate-200 flex-1"></div>
                                                        <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                                                            <Plane size={12} className="text-blue-600 transform rotate-90" />
                                                        </div>
                                                        <div className="h-[2px] bg-slate-200 flex-1"></div>
                                                    </div>
                                                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-1.5">
                                                        {flight.stops === 0 ? "Direct Flight" : "Connecting"}
                                                    </span>
                                                </div>

                                                {/* Arrival */}
                                                <div className="text-right min-w-[80px]">
                                                    <p className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{flight.arrival}</p>
                                                    <p className="text-xs font-semibold text-slate-600 truncate max-w-[120px]">{flight.destinationCity}</p>
                                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{flight.arrivalDate}</p>
                                                </div>
                                            </div>

                                            {/* Feature Badges */}
                                            <div className="flex flex-wrap items-center gap-2 text-xs">
                                                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md font-semibold border border-blue-100 capitalize">
                                                    {flight.cabin.replace("_", " ")}
                                                </span>

                                                {flight.isFreeRefundable && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md font-medium border border-emerald-100">
                                                        <ShieldCheck size={13} /> Free Cancellation
                                                    </span>
                                                )}

                                                {flight.isRefundable && !flight.isFreeRefundable && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-md font-medium border border-amber-100">
                                                        <AlertCircle size={13} /> Refundable (Fee applies)
                                                    </span>
                                                )}

                                                {flight.isRefundable === false && (
                                                    <span className="px-2.5 py-1 bg-rose-50 text-rose-600 rounded-md font-medium border border-rose-100">
                                                        Non-Refundable
                                                    </span>
                                                )}

                                                {flight.isRefundable === null && (
                                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md font-medium">
                                                        Refund Info N/A
                                                    </span>
                                                )}

                                                {flight.hasWifi && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md font-medium border border-indigo-100">
                                                        <Wifi size={13} /> {flight.wifiType} Wifi
                                                    </span>
                                                )}

                                                {flight.baggage.length > 0 ? (
                                                    flight.baggage.map((bag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-medium"
                                                        >
                                                            <Luggage size={12} className="text-slate-500" />
                                                            <span className="capitalize">{bag.type.replace("_", " ")}</span>: {bag.quantity}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md font-medium">
                                                        No baggage
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Price & Action Section (Right) */}
                                        <div className="flex lg:flex-col justify-between items-center lg:items-end border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 lg:min-w-[190px]">
                                            <div className="lg:text-right">
                                                <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Price per adult</span>
                                                <div className="flex items-baseline gap-1 mt-0.5">
                                                    <span className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                                                        $ {flight.price}
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-slate-400">Taxes & fees included</p>
                                            </div>

                                            <button
                                                onClick={() => handleSelectFlight(flight)}
                                                className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 cursor-pointer"
                                            >
                                                Select Flight
                                            </button>
                                        </div>
                                    </div>

                                    {/* Return flight strip if round trip */}
                                    {flight.hasReturn && (
                                        <div className="border-t border-slate-100 bg-slate-50/80 px-5 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100/70 text-blue-700 font-bold text-xs">
                                                    <RotateCcw size={12} /> Return Flight
                                                </span>
                                                <span className="text-xs text-slate-500 font-medium">
                                                    {flight.returnDepartureDate}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                                                <div>
                                                    <span className="font-bold text-slate-900">{flight.returnDeparture}</span> ({searchData?.destination})
                                                </div>
                                                <Plane size={14} className="text-slate-400" />
                                                <div>
                                                    <span className="font-bold text-slate-900">{flight.returnArrival}</span> ({searchData?.origin})
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}

                        {/* View More Button */}
                        {visible < filteredFlights.length && (
                            <div className="text-center pt-4 pb-2">
                                <button
                                    onClick={() => setVisisble((prev) => prev + 15)}
                                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-xl font-bold text-sm shadow-sm transition active:scale-95"
                                >
                                    View More Flights ({filteredFlights.length - visible} remaining)
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FlightSearchPage