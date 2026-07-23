import React, { useEffect, useState } from 'react';
import { Plane, User, CreditCard, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const searchPassengers = location.state?.passengers || { adults: 1, children: 0, infants: 0 };
  const storedFlight = localStorage.getItem("selectedFlight");
  const [showPayment, setShowPayment] =useState(false);

  const navigate = useNavigate()

  const [error,setError] = useState("")

  const [flight, setFlight] = useState(
    location.state?.flight || (storedFlight ? JSON.parse(storedFlight) : null)
  );
  const [loading, setLoading] = useState(false);
  const [contactus, setContactUs] = useState({
    email: "",
    phone: ""
  });

const token = localStorage.getItem("token")


  useEffect(()=>{
    if(!token){
      alert("Please Login Your Account")

      navigate("/login")
    }

  },[])

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
      setError(`Passenger ${i + 1}: Age must be number`);
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
    setError("Invalid Email");
    return false;
  }

  if (!contactus.phone.trim()) {
    setError("Phone Number is required");
    return false;
  }

  if (contactus.phone.length < 10) {
    setError("Invalid Phone Number");
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
          dob: "", // Yahan age ya date of birth store hogi
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
    updated[index][field] = value
    setPassengers(updated)
  };

const handlePayment = async () => {
   if (!validateForm()) return;

   
  try {
    setLoading(true);

    // =========================
    // STEP 1: CREATE BOOKING
    // =========================

    const bookingRes = await fetch(
      "https://www.7uptravel.com/api/checkout/booking",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
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

    // console.log("BOOKING DATA:", bookingData);

    if (!bookingData?.booking?._id) {
      alert("Booking Failed");
      return;
    }

    const paymentRes = await fetch(
      "https://www.7uptravel.com/api/payment/initiate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },

        body: JSON.stringify({
          bookingId: bookingData.booking._id,
        }),
      }
    );

    const paymentData = await paymentRes.json();

    // console.log("PAYMENT DATA:", paymentData);

    if (!paymentData?.cashier_token) {
      // console.log(paymentData);

      alert(
        paymentData.message || "Cashier Token Missing"
      );

      return;
    }

    const oldScript = document.getElementById(
      "bridgerpay-widget"
    );

    if (oldScript) {
      oldScript.remove();
    }

  
    const oldContainer = document.getElementById(
      "bridgerpay-container"
    );

    if (oldContainer) {
      oldContainer.innerHTML = "";
    }


    const script = document.createElement("script");

    script.id = "bridgerpay-widget";

    script.src =
      "https://checkout.bridgerpay.com/v2/launcher";

    script.async = true;

    // IMPORTANT

    script.setAttribute(
      "data-cashier-key",
      paymentData.cashier_key
    );

    script.setAttribute(
      "data-cashier-token",
      paymentData.cashier_token
    );

    setShowPayment(true)

    setTimeout(() => {

  const container = document.getElementById(
    "bridgerpay-container"
  );

  if (container) {
    container.appendChild(script);

    // console.log("BRIDGERPAY WIDGET LOADED");
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
    <div className='text-center mt-40'>
      <p>No Flight Selected</p>
      <Link to="/" className='text-blue-600 hover:underline'>Return To Search</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Review & Pay</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white rounded-xl shadow border overflow-hidden">
              <div className="bg-blue-600 px-6 py-3 flex items-center gap-2 text-white">
                <Plane size={20} /> Flight Information
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">{flight.originCity}</p>
                  <p className="text-sm text-gray-500">{flight.departure}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">{flight.departureDate}</p>
                  <div className="h-[1px] bg-gray-300 w-20 my-1"></div>
                  <p className="text-xs font-semibold">{flight.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{flight.destinationCity}</p>
                  <p className="text-sm text-gray-500">{flight.arrival}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center gap-2 mb-4 font-bold border-b pb-3">
                <User size={20} className="text-blue-600" />
                <h2>Travellers Detail</h2>
              </div>

              {passengers.map((p, i) => (
                <div key={i} className="mb-6 p-4 border rounded-xl bg-gray-50">
                  <p className="text-sm font-bold text-blue-600 mb-3 capitalize">{p.type} {i + 1}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={p.firstName}
                      onChange={(e) => handleChange(i, "firstName", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={p.lastName}
                      onChange={(e) => handleChange(i, "lastName", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    />
                    <select
                      value={p.gender}
                      onChange={(e) => handleChange(i, "gender", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Age (e.g. 25)"
                      value={p.dob}
                      onChange={(e) => handleChange(i, "dob", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Passport Number"
                      value={p.passport}
                      onChange={(e) => handleChange(i, "passport", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Nationality"
                      value={p.nationality}
                      onChange={(e) => handleChange(i, "nationality", e.target.value)}
                      className="border p-2 rounded-lg bg-white"
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t">
                <h3 className="font-bold mb-3">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactus.email}
                    onChange={(e) => setContactUs({ ...contactus, email: e.target.value })}
                    className="border p-2 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={contactus.phone}
                    onChange={(e) => setContactUs({ ...contactus, phone: e.target.value })}
                    className="border p-2 rounded-lg"
                  />
                </div>
              </div>
               {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-medium animate-bounce">
                {error}
              </div>
            )}
            </div>

            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center gap-2 mb-6 font-bold border-b pb-3">
                <CreditCard size={20} className="text-blue-600" /> Secure Payment
              </div>
              <button 
                onClick={handlePayment} 
                disabled={loading}
                className={`${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-4 rounded-xl w-full font-bold text-lg transition-colors`}
              >
                {loading ? 'Processing...' : `Pay $${flight.price}`}
              </button>
              <div className="mt-4 flex justify-center gap-2 text-green-600 text-xs font-semibold">
                <ShieldCheck size={16} /> 256-bit SSL Secure Payment
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow border p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4 border-b pb-3">Price Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Base Fare</span>
                  <span>${flight.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-xl text-blue-600">
                  <span>Total Amount</span>
                  <span>${flight.price}</span>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg text-xs text-blue-700">
                Tickets are non-refundable after 24 hours of booking. By clicking "Pay", you agree to our .
              </div>
            </div>
          </div>
        </div>
      {showPayment && (
  <div
    className="payment-overlay"
    onClick={() => setShowPayment(false)}
  >
    <div
      className="payment-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowPayment(false)}
      >
        ✕
      </button>

      <div id="bridgerpay-container"></div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}