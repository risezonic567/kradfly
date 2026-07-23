import React, { useEffect, useState, useMemo } from "react"
import { Plane, Filter, X } from "lucide-react"
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
    state: { flight,

        passengers:searchData
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
                }
                )
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
                    "https://www.7uptravel.com/api/flight/flight-search",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(searchData) ,
                    }
                )

                const data = await res.json()

                // console.log("API DATA:", data)

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
            <div className="flex items-center justify-center min-h-screen w-full">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600 font-medium animate-pulse">
                        Searching for Best Flights...
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen mt-28 bg-gray-100 p-4 md:p-8">

            {/* phone menu filter */}
            <div className="lg:hidden  mb-4">
                <button
                    onClick={() => setFilterOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    <Filter size={18} /> Filter
                </button>

                <div className={`fixed top-0 left-0 w-full h-screen bg-black/40 z-50 transition-all duration-300 ${filterOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                    <div className={`bg-white w-[80%] max-w-sm h-full p-5 transition-transform duration-300 ${filterOpen ? "translate-x-0" : "-translate-x-full"}`}>

                        <div className="flex justify-between items-center mb-6 mt-10">
                            <h2 className="text-lg font-bold">Filter</h2>
                            <button onClick={() => setFilterOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">

                            <div>
                                <h3 className="text-sm font-semibold mb-2">Cabin</h3>
                                <select
                                    value={cabinFilter}
                                    onChange={(e) => setCabinFilter(e.target.value)}
                                    className="border px-3 py-2 rounded-lg w-full"
                                >
                                    <option value="all">All</option>
                                    <option value="economy">Economy</option>
                                    <option value="premium_economy">Premium Economy</option>
                                    <option value="business">Business</option>
                                    <option value="first">First</option>
                                </select>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-2">Stops</h3>
                                <label className="block">
                                    <input
                                        checked={stopFilter === "nonstop"}
                                        onChange={() => setStopFilter(stopFilter === "nonstop" ? "all" : "nonstop")}
                                        type="checkbox"
                                    /> Non Stop
                                </label>
                                <label className="block">
                                    <input
                                        checked={stopFilter === "1stop"}
                                        onChange={() => setStopFilter(stopFilter === "1stop" ? "all" : "1stop")}
                                        type="checkbox"
                                    /> 1 Stop
                                </label>

                                <label className="block">
                                    <input
                                        checked={stopFilter === "2stop"}
                                        onChange={() =>
                                            setStopFilter(
                                                stopFilter === "2stop" ? "all" : "2stop"
                                            )
                                        }
                                        type="checkbox"
                                    />{" "}
                                    2 stop
                                </label>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-2">Max Price</h3>
                                <input
                                    type="range"
                                    min="2000"
                                    max="25000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full"
                                />
                                <p className="text-md mt-1">Up to ₹{maxPrice}</p>
                            </div>

                            <div className="h-64 overflow-y-auto">
                                <h3 className="text-sm font-semibold mb-2">Airlines</h3>
                                {airlines.map((airline, i) => (
                                    <label key={i} className="block">
                                        <input
                                            type="checkbox"
                                            checked={selectedAirlines.includes(airline)}
                                            onChange={() => handleAirline(airline)}
                                        />{" "}
                                        {airline}
                                    </label>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            {/* phone menu filter end */}

            <div className="max-w-7xl mx-auto flex gap-6">

                <aside className="w-1/4 hidden lg:block">
                    <div className="bg-white rounded-lg shadow-sm p-5 sticky top-8">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Filter size={20} /> Filters
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-2">Cabin</h3>
                            <select
                                value={cabinFilter}
                                onChange={(e) => setCabinFilter(e.target.value)}
                                className="border px-3 py-2 rounded-lg"
                            >
                                <option value="all">All</option>
                                <option value="economy">Economy</option>
                                <option value="premium_economy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-2">Stops</h3>
                            <label className="block">
                                <input
                                    checked={stopFilter === "nonstop"}
                                    onChange={() =>
                                        setStopFilter(
                                            stopFilter === "nonstop" ? "all" : "nonstop"
                                        )
                                    }
                                    type="checkbox"
                                />{" "}
                                Non Stop
                            </label>
                            <label className="block">
                                <input
                                    checked={stopFilter === "1stop"}
                                    onChange={() =>
                                        setStopFilter(
                                            stopFilter === "1stop" ? "all" : "1stop"
                                        )
                                    }
                                    type="checkbox"
                                />{" "}
                                1 Stop
                            </label>
                            <label className="block">
                                <input
                                    checked={stopFilter === "2stop"}
                                    onChange={() =>
                                        setStopFilter(
                                            stopFilter === "2stop" ? "all" : "2stop"
                                        )
                                    }
                                    type="checkbox"
                                />{" "}
                                2 stop
                            </label>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-2">Max Price</h3>
                            <input
                                type="range"
                                min="2000"
                                max="25000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-full"
                            />
                            <p className="text-md mt-1">Up to ₹{maxPrice}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-2">Airlines</h3>
                            {airlines.map((airline, i) => (
                                <label key={i} className="block">
                                    <input
                                        type="checkbox"
                                        checked={selectedAirlines.includes(airline)}
                                        onChange={() => handleAirline(airline)}
                                    />{" "}
                                    {airline}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="mb-4 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                        <h1 className="text-lg font-bold">
                            Flights From{" "} {flight[0]?.originCity} ({searchData?.origin}) to {""}
                            {flight[0]?.destinationCity} ({searchData?.destination})
                        </h1>
                        <span className="text-sm text-gray-500">
                            {filteredFlights.length} Flights found
                        </span>
                    </div>

                    <div className="space-y-4">
                        {filteredFlights.slice(0, visible).map((flight) => (

                            <div
                                key={flight.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
                            >
                                <div className="flex flex-col lg:flex-row justify-between gap-6">



                                    <div className="flex-1 space-y-4">


                                        <div className="flex items-center gap-3">
                                            <img src={flight.logo} className="w-10 h-10 rounded" />
                                            <div>
                                                <p className="font-semibold">{flight.airline}</p>
                                                <p className="text-md text-gray-500">
                                                    Flight: {flight.flightNumber}
                                                </p>
                                                <p className="text-md font-semibold text-green-500">
                                                    {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop via ${flight.stopFlight.join(",")}`}
                                                </p>

                                                {flight.layover.map((l, i) => (
                                                    <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-md">
                                                        {l.city} - {l.duration}
                                                    </span>
                                                ))}

                                            </div>
                                        </div>
                                        <p className="text-md mt-0 mb-0 text-center font-semibold text-gray-500">{flight.departureDate}</p>

                                        <div className="flex items-center justify-between text-center">


                                            <div>

                                                <p className="text-lg font-bold">{flight.departure}</p>
                                                <p className="text-md text-gray-500">{flight.originCity}</p>
                                            </div>

                                            <div className="flex-1 px-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-[2px] bg-gray-300 flex-1"></div>
                                                    <Plane size={16} className="text-blue-500" />
                                                    <div className="h-[2px] bg-gray-300 flex-1"></div>
                                                </div>
                                                <p className="text-md text-gray-500 mt-1">{flight.duration}</p>
                                            </div>

                                            <div>
                                                <p className="text-lg font-bold">{flight.arrival}</p>
                                                <p className="text-md text-gray-500">{flight.destinationCity} </p>
                                            </div>

                                        </div>

                                        <div className="flex flex-wrap gap-2 text-md">

                                            <span className="px-3 py-1 captazide bg-blue-100 text-blue-700 rounded-full">
                                                {flight.cabin.replace("_", " ")}
                                            </span>
                                            {flight.isFreeRefundable && (
                                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-md">
                                                    Free Cancellation
                                                </span>
                                            )}

                                            {flight.isRefundable && !flight.isFreeRefundable && (
                                                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-md">
                                                    Refundable (Fee applies)
                                                </span>
                                            )}

                                            {flight.isRefundable === false && (
                                                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-md">
                                                    Non-Refundable
                                                </span>
                                            )}

                                            {flight.isRefundable === null && (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-md">
                                                    Refund Not Available
                                                </span>
                                            )}

                                            {flight.hasWifi && (
                                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-md">
                                                    📶 Wifi ({flight.wifiType})
                                                </span>
                                            )}




                                            {flight.baggage.length > 0 ? (
                                                flight.baggage.map((bag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full"
                                                    >
                                                        {bag.type === "checked" && "🧳"}
                                                        {bag.type === "carry_on" && "🎒"} {bag.quantity}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                                    No baggage
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                    <div className="flex flex-col justify-between items-end border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6">

                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-blue-600">
                                                $ {flight.price}
                                            </p>
                                            <p className="text-md text-gray-500">/adult</p>
                                        </div>

                                        <button
                                            
                                                onClick={() => handleSelectFlight(flight)}
                                            className="mt-4 bg-blue-600 cursor-pointer hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg text-sm font-semibold"
                                        >
                                            Select Flight
                                        </button>

                                    </div>

                                </div>

                                {flight.hasReturn && (
                                    <div className="mt-4 border-t pt-4 bg-gray-50 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">
                                            Return Flight
                                        </p>
                                        <p className="text-md text-gray-500">
                                            Flight: {flight.flightNumber}
                                        </p>
                                        <p className="text-md text-black">
                                             {flight.returnDepartureDate}
                                        </p>
                                        <div className="flex justify-between text-sm">
                                            <div>
                                                <p className="font-bold">{flight.returnDeparture}</p>
                                                <p className="text-md text-gray-500">
                                                    {searchData?.destination}
                                                </p>
                                            </div>

                                            <Plane size={20} className="text-gray-400" />

                                            <div>
                                                <p className="font-bold">{flight.returnArrival}</p>
                                                <p className="text-md text-gray-500">
                                                    {searchData?.origin}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>


                        ))}
                        {
                            visible < filteredFlights.length && (
                                <div className="text-center mt-6">
                                    <button
                                        onClick={() => setVisisble((prev) => prev + 15)}
                                        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                                    >
                                        View More
                                    </button>
                                </div>
                            )
                        }

                    </div>


                </main>
            </div>
        </div>
    )
}

export default FlightSearchPage