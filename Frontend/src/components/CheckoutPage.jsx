import React, { useEffect, useState } from 'react';
import { 
  Plane, 
  User, 
  CreditCard, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  AlertCircle, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  FileText
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const searchPassengers = location.state?.passengers || { adults: 1, children: 0, infants: 0 };
  const storedFlight = localStorage.getItem("selectedFlight");
  const [showPayment, setShowPayment] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [flight, setFlight] = useState(
    location.state?.flight || (storedFlight ? JSON.parse(storedFlight) : null)
  );
  const [loading, setLoading] = useState(false);
  const [contactus, setContactUs] = useState({
    email: "",
    phone: ""
  });

  // const token = localStorage.getItem("token")

  // useEffect(()=>{
  //   if(!token){
  //     alert("Please Login Your Account")
  //     navigate("/login")
  //   }
  // },[])

  const validateForm = () => {
    // Passenger Validation
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];

      if (!p.firstName.trim()) {
        setError(`Passenger ${i + 1}: First Name is required`);
        return false;
      }

      if (!p.lastName.trim()) {
        setError(`Passenger ${i + 1}: Last Name is required`);
        return false;
      }

      if (!p.gender) {
        setError(`Passenger ${i + 1}: Gender is required`);
        return false;
      }

      if (!p.dob) {
        setError(`Passenger ${i + 1}: Age is required`);
        return false;
      }

      if (isNaN(p.dob)) {
        setError(`Passenger ${i + 1}: Age must be a valid number`);
        return false;
      }

      // if (!p.passport.trim()) {
      //   setError(`Passenger ${i + 1}: Passport Number is required`);
      //   return false;
      // }

      // if (!p.nationality.trim()) {
      //   setError(`Passenger ${i + 1}: Nationality is required`);
      //   return false;
      // }
    }

    // Contact Validation
    if (!contactus.email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contactus.email)) {
      setError("Invalid Email address");
      return false;
    }

    if (!contactus.phone.trim()) {
      setError("Phone Number is required");
      return false;
    }

    if (contactus.phone.length < 10) {
      setError("Invalid Phone Number (minimum 10 digits)");
      return false;
    }

    setError("");
    return true;
  };

  const [passengers, setPassengers] = useState(() => {
    const list = [];
    const counts = {
      adult: searchPassengers.adults || 0,
      child: searchPassengers.children || 0,
      infant: searchPassengers.infants || 0
    };

    Object.keys(counts).forEach(type => {
      for (let i = 0; i < counts[type]; i++) {
        list.push({
          firstName: "",
          lastName: "",
          gender: "",
          dob: "", // Age or date of birth stored here
          type: type,
          passport: "",
          passportName: "",
          nationality: ""
        });
      }
    });
    return list;
  });

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // =========================
      // STEP 1: CREATE BOOKING
      // =========================

      const bookingRes = await fetch(
        "https://www.kradfly.com/api/checkout/booking",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },

          body: JSON.stringify({
            offerId: flight?.id,

            passengers: passengers.map((p) => ({
              name: `${p.firstName} ${p.lastName}`,
              age: p.dob,
              gender: p.gender,
            })),

            contact: contactus,

            flightData: {
              airline: flight.airline,

              from: flight.originCity,

              to: flight.destinationCity,

              departureTime: flight.departure,

              arrivalTime: flight.arrival,

              price: Number(flight.price),

              currency: "USD",
            },
          }),
        }
      );

      const bookingData = await bookingRes.json();

      if (!bookingData?.booking?._id) {
        alert("Booking Failed");
        return;
      }

      const paymentRes = await fetch(
        "https://www.kradfly.com/api/payment/initiate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },

          body: JSON.stringify({
            bookingId: bookingData.booking._id,
          }),
        }
      );

      const paymentData = await paymentRes.json();

      if (!paymentData?.cashier_token) {
        alert(
          paymentData.message || "Cashier Token Missing"
        );
        return;
      }

      const oldScript = document.getElementById("bridgerpay-widget");
      if (oldScript) {
        oldScript.remove();
      }

      const oldContainer = document.getElementById("bridgerpay-container");
      if (oldContainer) {
        oldContainer.innerHTML = "";
      }

      const script = document.createElement("script");
      script.id = "bridgerpay-widget";
      script.src = "https://checkout.bridgerpay.com/v2/launcher";
      script.async = true;

      script.setAttribute("data-cashier-key", paymentData.cashier_key);
      script.setAttribute("data-cashier-token", paymentData.cashier_token);

      setShowPayment(true);

      setTimeout(() => {
        const container = document.getElementById("bridgerpay-container");

        if (container) {
          container.appendChild(script);
        } else {
          console.log("Container Not Found");
        }
      }, 300);

    } catch (error) {
      console.log("PAYMENT ERROR:", error);
      alert("Payment Error");
    } finally {
      setLoading(false);
    }
  };

  if (!flight) return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4'>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Plane size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">No Flight Selected</h2>
        <p className="text-slate-500 text-sm mb-6">Please select a flight to proceed with your booking details.</p>
        <Link 
          to="/" 
          className='inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition-all shadow-sm shadow-blue-200 w-full'
        >
          Return To Search
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8 mt-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Review & Complete Booking</h1>
          <p className="text-sm text-slate-500 mt-1">Verify your flight details and enter passenger information to finalize your reservation.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Left Form Section */}
          <div className="lg:col-span-2 space-y-6">

            {/* Flight Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5 font-semibold text-sm">
                  <Plane size={18} className="animate-pulse" /> 
                  <span>Flight Summary</span>
                </div>
                {flight.airline && (
                  <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                    {flight.airline}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Origin */}
                  <div className="text-center sm:text-left flex-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Departure</span>
                    <p className="text-2xl font-black text-slate-900 mt-0.5">{flight.originCity}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-500 text-sm mt-1">
                      <Clock size={14} className="text-slate-400" />
                      <span className="font-medium">{flight.departure}</span>
                    </div>
                  </div>

                  {/* Flight Route Indicator */}
                  <div className="flex flex-col items-center justify-center px-4 my-2 sm:my-0 w-full sm:w-auto">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-1">
                      {flight.duration || 'Direct'}
                    </span>
                    <div className="relative w-36 sm:w-28 flex items-center justify-center my-1">
                      <div className="h-[2px] bg-slate-200 w-full"></div>
                      <div className="absolute bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                        <Plane size={14} className="text-blue-600 transform rotate-90" />
                      </div>
                    </div>
                    {flight.departureDate && (
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                        <Calendar size={12} /> {flight.departureDate}
                      </span>
                    )}
                  </div>

                  {/* Destination */}
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Arrival</span>
                    <p className="text-2xl font-black text-slate-900 mt-0.5">{flight.destinationCity}</p>
                    <div className="flex items-center justify-center sm:justify-end gap-1 text-slate-500 text-sm mt-1">
                      <Clock size={14} className="text-slate-400" />
                      <span className="font-medium">{flight.arrival}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Details Form */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <User size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Traveller Details</h2>
                  <p className="text-xs text-slate-500">Please enter passenger info exactly as shown on government IDs</p>
                </div>
              </div>

              <div className="space-y-6">
                {passengers.map((p, i) => (
                  <div key={i} className="p-5 border border-slate-200/70 rounded-xl bg-slate-50/50 hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-100/70 text-blue-800 text-xs font-bold uppercase tracking-wider">
                        <User size={13} /> {p.type} {i + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* First Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">First Name *</label>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={p.firstName}
                          onChange={(e) => handleChange(i, "firstName", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Last Name *</label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={p.lastName}
                          onChange={(e) => handleChange(i, "lastName", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Gender *</label>
                        <select
                          value={p.gender}
                          onChange={(e) => handleChange(i, "gender", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      {/* Age */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Age *</label>
                        <input
                          type="text"
                          placeholder="e.g. 25"
                          value={p.dob}
                          onChange={(e) => handleChange(i, "dob", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      {/* Passport */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Passport Number (Optional)</label>
                        <input
                          type="text"
                          placeholder="Passport Number"
                          value={p.passport}
                          onChange={(e) => handleChange(i, "passport", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>

                      {/* Nationality */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Nationality (Optional)</label>
                        <input
                          type="text"
                          placeholder="Nationality"
                          value={p.nationality}
                          onChange={(e) => handleChange(i, "nationality", e.target.value)}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={18} className="text-blue-600" />
                  <h3 className="font-bold text-slate-900 text-sm">Contact Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={contactus.email}
                        onChange={(e) => setContactUs({ ...contactus, email: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={contactus.phone}
                        onChange={(e) => setContactUs({ ...contactus, phone: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-3.5 py-2.5 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2.5">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Payment Authorization</h2>
                  <p className="text-xs text-slate-500">Encrypted and secure checkout powered by BridgerPay</p>
                </div>
              </div>

              <button
                // onClick={handlePayment}
                disabled={loading}
                className={`${
                  loading 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99]'
                } text-white px-6 py-4 rounded-xl w-full font-bold text-lg transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay ${flight.price}</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50/60 py-2.5 rounded-lg text-xs font-semibold border border-emerald-100">
                <ShieldCheck size={16} /> 
                <span>256-bit SSL Bank-Grade Encryption</span>
              </div>
            </div>

          </div>

          {/* Right Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Price Summary</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">USD</span>
              </h2>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Base Fare ({passengers.length} Traveller{passengers.length > 1 ? 's' : ''})</span>
                  <span className="font-semibold text-slate-800">${flight.price}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Taxes & Carrier Fees</span>
                  <span className="font-semibold text-slate-800">$0.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Booking Fee</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>

                <div className="border-t border-slate-200 pt-4 mt-4 flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-base">Total Amount</span>
                  <span className="font-black text-2xl text-blue-600">${flight.price}</span>
                </div>
              </div>

              <div className="mt-6 bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-xs text-slate-500 leading-relaxed space-y-2">
                <div className="flex items-start gap-2 text-slate-700 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Free cancellation within 24 hours</span>
                </div>
                <p>
                  By clicking "Proceed to Pay", you agree to our booking terms, privacy policy, and airline carriage rules.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Overlay for BridgerPay Widget */}
        {showPayment && (
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 transition-opacity"
            onClick={() => setShowPayment(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                onClick={() => setShowPayment(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <CreditCard size={20} className="text-blue-600" />
                <span>Complete Payment</span>
              </h3>

              {/* BridgerPay Widget Container */}
              <div id="bridgerpay-container" className="min-h-[300px]"></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Plane, User, CreditCard, ShieldCheck } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// export default function CheckoutPage() {
//   const location = useLocation();
//   const searchPassengers = location.state?.passengers || { adults: 1, children: 0, infants: 0 };
//   const storedFlight = localStorage.getItem("selectedFlight");
//   const [showPayment, setShowPayment] = useState(false);

//   const navigate = useNavigate()

//   const [error, setError] = useState("")

//   const [flight, setFlight] = useState(
//     location.state?.flight || (storedFlight ? JSON.parse(storedFlight) : null)
//   );
//   const [loading, setLoading] = useState(false);
//   const [contactus, setContactUs] = useState({
//     email: "",
//     phone: ""
//   });

//   // const token = localStorage.getItem("token")


//   //   useEffect(()=>{
//   //     if(!token){
//   //       alert("Please Login Your Account")

//   //       navigate("/login")
//   //     }

//   //   },[])

//   const validateForm = () => {

//     // Passenger Validation
//     for (let i = 0; i < passengers.length; i++) {

//       const p = passengers[i];

//       if (!p.firstName.trim()) {
//         setError(`Passenger ${i + 1}: First Name is required`);
//         return false;
//       }

//       if (!p.lastName.trim()) {
//         setError(`Passenger ${i + 1}: Last Name is required`);
//         return false;
//       }

//       if (!p.gender) {
//         setError(`Passenger ${i + 1}: Gender is required`);
//         return false;
//       }

//       if (!p.dob) {
//         setError(`Passenger ${i + 1}: Age is required`);
//         return false;
//       }

//       if (isNaN(p.dob)) {
//         setError(`Passenger ${i + 1}: Age must be number`);
//         return false;
//       }

//       // if (!p.passport.trim()) {
//       //   setError(`Passenger ${i + 1}: Passport Number is required`);
//       //   return false;
//       // }

//       // if (!p.nationality.trim()) {
//       //   setError(`Passenger ${i + 1}: Nationality is required`);
//       //   return false;
//       // }
//     }

//     // Contact Validation
//     if (!contactus.email.trim()) {
//       setError("Email is required");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(contactus.email)) {
//       setError("Invalid Email");
//       return false;
//     }

//     if (!contactus.phone.trim()) {
//       setError("Phone Number is required");
//       return false;
//     }

//     if (contactus.phone.length < 10) {
//       setError("Invalid Phone Number");
//       return false;
//     }

//     setError("");
//     return true;
//   };

//   const [passengers, setPassengers] = useState(() => {
//     const list = [];
//     const counts = {
//       adult: searchPassengers.adults || 0,
//       child: searchPassengers.children || 0,
//       infant: searchPassengers.infants || 0
//     };


//     Object.keys(counts).forEach(type => {
//       for (let i = 0; i < counts[type]; i++) {
//         list.push({
//           firstName: "",
//           lastName: "",
//           gender: "",
//           dob: "", // Yahan age ya date of birth store hogi
//           type: type,
//           passport: "",
//           passportName: "",
//           nationality: ""
//         });
//       }
//     });
//     return list;
//   });

//   const handleChange = (index, field, value) => {
//     const updated = [...passengers];
//     updated[index][field] = value
//     setPassengers(updated)
//   };

//   const handlePayment = async () => {
//     if (!validateForm()) return;


//     try {
//       setLoading(true);

//       // =========================
//       // STEP 1: CREATE BOOKING
//       // =========================

//       const bookingRes = await fetch(
//         "https://www.kradfly.com/api/checkout/booking",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//           },

//           body: JSON.stringify({
//             offerId: flight?.id,

//             passengers: passengers.map((p) => ({
//               name: `${p.firstName} ${p.lastName}`,
//               age: p.dob,
//               gender: p.gender,
//             })),

//             contact: contactus,

//             flightData: {
//               airline: flight.airline,

//               from: flight.originCity,

//               to: flight.destinationCity,

//               departureTime: flight.departure,

//               arrivalTime: flight.arrival,

//               price: Number(flight.price),

//               currency: "USD",
//             },
//           }),
//         }
//       );

//       const bookingData = await bookingRes.json();

//       // console.log("BOOKING DATA:", bookingData);

//       if (!bookingData?.booking?._id) {
//         alert("Booking Failed");
//         return;
//       }

//       const paymentRes = await fetch(
//         "https://www.kradfly.com/api/payment/initiate",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//           },

//           body: JSON.stringify({
//             bookingId: bookingData.booking._id,
//           }),
//         }
//       );

//       const paymentData = await paymentRes.json();

//       // console.log("PAYMENT DATA:", paymentData);

//       if (!paymentData?.cashier_token) {
//         // console.log(paymentData);

//         alert(
//           paymentData.message || "Cashier Token Missing"
//         );

//         return;
//       }

//       const oldScript = document.getElementById(
//         "bridgerpay-widget"
//       );

//       if (oldScript) {
//         oldScript.remove();
//       }


//       const oldContainer = document.getElementById(
//         "bridgerpay-container"
//       );

//       if (oldContainer) {
//         oldContainer.innerHTML = "";
//       }


//       const script = document.createElement("script");

//       script.id = "bridgerpay-widget";

//       script.src =
//         "https://checkout.bridgerpay.com/v2/launcher";

//       script.async = true;

//       // IMPORTANT

//       script.setAttribute(
//         "data-cashier-key",
//         paymentData.cashier_key
//       );

//       script.setAttribute(
//         "data-cashier-token",
//         paymentData.cashier_token
//       );

//       setShowPayment(true)

//       setTimeout(() => {

//         const container = document.getElementById(
//           "bridgerpay-container"
//         );

//         if (container) {
//           container.appendChild(script);

//           // console.log("BRIDGERPAY WIDGET LOADED");
//         } else {
//           console.log("Container Not Found");
//         }

//       }, 300);

//     } catch (error) {
//       console.log("PAYMENT ERROR:", error);

//       alert("Payment Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!flight) return (
//     <div className='text-center mt-40'>
//       <p>No Flight Selected</p>
//       <Link to="/" className='text-blue-600 hover:underline'>Return To Search</Link>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Review & Pay</h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">

//             <div className="bg-white rounded-xl shadow border overflow-hidden">
//               <div className="bg-blue-600 px-6 py-3 flex items-center gap-2 text-white">
//                 <Plane size={20} /> Flight Information
//               </div>
//               <div className="p-6 flex justify-between items-center">
//                 <div>
//                   <p className="text-xl font-bold">{flight.originCity}</p>
//                   <p className="text-sm text-gray-500">{flight.departure}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-xs text-gray-400">{flight.departureDate}</p>
//                   <div className="h-[1px] bg-gray-300 w-20 my-1"></div>
//                   <p className="text-xs font-semibold">{flight.duration}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xl font-bold">{flight.destinationCity}</p>
//                   <p className="text-sm text-gray-500">{flight.arrival}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow border p-6">
//               <div className="flex items-center gap-2 mb-4 font-bold border-b pb-3">
//                 <User size={20} className="text-blue-600" />
//                 <h2>Travellers Detail</h2>
//               </div>

//               {passengers.map((p, i) => (
//                 <div key={i} className="mb-6 p-4 border rounded-xl bg-gray-50">
//                   <p className="text-sm font-bold text-blue-600 mb-3 capitalize">{p.type} {i + 1}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       value={p.firstName}
//                       onChange={(e) => handleChange(i, "firstName", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       value={p.lastName}
//                       onChange={(e) => handleChange(i, "lastName", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     />
//                     <select
//                       value={p.gender}
//                       onChange={(e) => handleChange(i, "gender", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     >
//                       <option value="">Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </select>
//                     <input
//                       type="text"
//                       placeholder="Age (e.g. 25)"
//                       value={p.dob}
//                       onChange={(e) => handleChange(i, "dob", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Passport Number"
//                       value={p.passport}
//                       onChange={(e) => handleChange(i, "passport", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Nationality"
//                       value={p.nationality}
//                       onChange={(e) => handleChange(i, "nationality", e.target.value)}
//                       className="border p-2 rounded-lg bg-white"
//                     />
//                   </div>
//                 </div>
//               ))}

//               <div className="mt-4 pt-4 border-t">
//                 <h3 className="font-bold mb-3">Contact Details</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={contactus.email}
//                     onChange={(e) => setContactUs({ ...contactus, email: e.target.value })}
//                     className="border p-2 rounded-lg"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={contactus.phone}
//                     onChange={(e) => setContactUs({ ...contactus, phone: e.target.value })}
//                     className="border p-2 rounded-lg"
//                   />
//                 </div>
//               </div>
//               {error && (
//                 <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-medium animate-bounce">
//                   {error}
//                 </div>
//               )}
//             </div>

//             <div className="bg-white rounded-xl shadow border p-6">
//               <div className="flex items-center gap-2 mb-6 font-bold border-b pb-3">
//                 <CreditCard size={20} className="text-blue-600" /> Secure Payment
//               </div>
//               <button

//                 className={`${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-4 rounded-xl w-full font-bold text-lg transition-colors`}
//               >
//                 {loading ? 'Processing...' : `Pay $${flight.price}`}
//               </button>
//               <div className="mt-4 flex justify-center gap-2 text-green-600 text-xs font-semibold">
//                 <ShieldCheck size={16} /> 256-bit SSL Secure Payment
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow border p-6 sticky top-24">
//               <h2 className="text-lg font-bold mb-4 border-b pb-3">Price Summary</h2>
//               <div className="space-y-3">
//                 <div className="flex justify-between text-gray-600">
//                   <span>Base Fare</span>
//                   <span>${flight.price}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <span>Taxes & Fees</span>
//                   <span>$0.00</span>
//                 </div>
//                 <div className="border-t pt-3 flex justify-between font-bold text-xl text-blue-600">
//                   <span>Total Amount</span>
//                   <span>${flight.price}</span>
//                 </div>
//               </div>
//               <div className="mt-6 bg-blue-50 p-4 rounded-lg text-xs text-blue-700">
//                 Tickets are non-refundable after 24 hours of booking. By clicking "Pay", you agree to our .
//               </div>
//             </div>
//           </div>
//         </div>
//         {showPayment && (
//           <div
//             className="payment-overlay"
//             onClick={() => setShowPayment(false)}
//           >
//             <div
//               className="payment-modal"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="close-btn"
//                 onClick={() => setShowPayment(false)}
//               >
//                 ✕
//               </button>

//               <div id="bridgerpay-container"></div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }