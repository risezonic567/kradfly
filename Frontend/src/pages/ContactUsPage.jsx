import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Phone, Mail, Globe, MapPin, Send, CheckCircle2, ArrowRight, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [activeOffice, setActiveOffice] = useState("dubai");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChnage = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://www.7uptravel.com/api/contactus/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message Send Successfully");
        setMessage({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.error || "Failed To send Message");
      }
    } catch (error) {
      console.log("Error", error);
      alert("Server Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = {
    dubai: {
      title: "Dubai Office",
      country: "UAE",
      address: "MOHAMED HAMED SAIF ALRUMHI BUILDING, Office B 1-106, Al Mutheena, Deira Dubai - UAE",
      tag: "Middle East HQ"
    },
    usa: {
      title: "USA Office",
      country: "USA",
      address: "17662 Irvine Blvd Suite 9, Tustin, CA 92780",
      tag: "North America HQ"
    },
    india: {
      title: "India Office",
      country: "India",
      address: "272 GF, Sector 38, Gurugram, Haryana, India 122001",
      tag: "Asia Pacific Operations"
    }
  };

  return (
    <div className="bg-slate-900/5 min-h-screen font-sans text-slate-800 pt-10 pb-24 relative overflow-hidden">
      
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Page Header Section */}
      <motion.section
        className="max-w-4xl mx-auto px-6 pt-12 pb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full mb-4 shadow-xs"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles size={14} className="text-blue-600 animate-pulse" />
          <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">
            24/7 Global Concierge
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Let’s Connect & Plan Your Next Journey
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
          At <strong className="text-blue-600 font-semibold">KRAD GLOBAL TRAVEL LLC</strong>, we are more than booking agents—we are your personal travel companions. Share your travel plans with us today.
        </p>
      </motion.section>

      {/* Main Interactive Contact Container */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
          
          {/* Visual Interactive Banner Container */}
          <div className="lg:col-span-5 bg-slate-950 relative min-h-[360px] lg:min-h-full flex flex-col justify-between p-8 md:p-10 text-white overflow-hidden group">
            <img
              src="/images/Contact Us Banner.jpg.jpeg"
              alt="Contact Krad Global Travel"
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
            
            <div className="relative z-10">
              <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 backdrop-blur-md border border-blue-400/20 px-3 py-1 rounded-md">
                Direct Support
              </span>
            </div>

            <div className="relative z-10 space-y-4 my-auto py-8">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Seamless Journeys Start with a Conversation.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Whether booking individual flights, luxury hotel stays, or complex corporate group itineraries, our experts ensure a smooth experience.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="relative z-10 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Global Assistance</span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-white">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">Fill out the details below and we will reach back within 2 hours.</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={message.name}
                    onChange={handleChnage}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={message.email}
                    onChange={handleChnage}
                    placeholder="name@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={message.phone}
                    onChange={handleChnage}
                    placeholder="+1 (234) 567-890"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={message.subject}
                    onChange={handleChnage}
                    placeholder="How can we help?"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={message.message}
                  onChange={handleChnage}
                  placeholder="Tell us about your trip dates, preferred destination, or booking inquiry..."
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-slate-900 placeholder:text-slate-400 hover:border-slate-300 resize-none"
                />
              </div>

              {/* Interactive Checkboxes */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition cursor-pointer"
                  />
                  <span className="text-xs text-slate-500 group-hover:text-slate-800 transition-colors">
                    I agree to the Terms & Conditions and Privacy Policy.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition cursor-pointer"
                  />
                  <span className="text-xs text-slate-500 group-hover:text-slate-800 transition-colors">
                    I agree to receive booking updates and travel notifications.
                  </span>
                </label>
              </div>

              {/* Action Button with Motion Effects */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

            </form>
          </div>

        </div>
      </section>

      {/* Interactive Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Call Us Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Headphones size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Speak directly with our travel experts for immediate bookings and inquiries.
              </p>
            </div>

            <Link 
              to="tel:+971-542919259"
              className="inline-flex items-center justify-between w-full text-sm font-semibold text-blue-600 bg-blue-50/80 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 border border-blue-100/80"
            >
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+971-542919259</span>
              </div>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Email Us Card */}
          <motion.div
            className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Send us your detailed itineraries or corporate queries via email anytime.
              </p>
            </div>

            <a 
              href="mailto:info@7uptravel.com" 
              className="inline-flex items-center justify-between w-full text-sm font-semibold text-blue-600 bg-blue-50/80 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 border border-blue-100/80"
            >
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@7uptravel.com</span>
              </div>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Visit Us Card with Interactive Location Switcher */}
          <motion.div
            className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <MapPin size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Global Offices</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Click tabs below to switch between our global corporate office addresses.
              </p>

              {/* Interactive Office Location Tabs */}
              <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-4">
                {Object.keys(offices).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveOffice(key)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all capitalize ${
                      activeOffice === key 
                        ? "bg-white text-blue-600 shadow-xs" 
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Address Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffice}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed min-h-[90px] flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">{offices[activeOffice].title}</span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md font-semibold">
                      {offices[activeOffice].tag}
                    </span>
                  </div>
                  <p className="text-slate-600">{offices[activeOffice].address}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Headphones, Phone, Mail, Globe } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ContactPage() {
//   const [message, setMessage] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const handleChnage =(e)=>{
//     setMessage({
//       ...message,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleSubmit = async (e)=>{
//     e.preventDefault();

//     try {
//       const response = await fetch("https://www.7uptravel.com/api/contactus/send", {
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json"
//         },
//         body :JSON.stringify(message)
//       })

//       const data = await response.json()

//       if(response.ok){
//         alert("Message Send Successfully")
//         setMessage({
//           name:"",
//           email:"",
//           phone:"",
//           subject:"",
//           message:""
//         })
//       }
//       else{
//         alert(data.error || "Failed To send Message")
//       }
//     } catch (error) {
//       console.log("Error",error)
//       alert("Server Error")
//     }

//   }

//   return (
//     <div className="bg-white min-h-screen font-sans text-gray-800">

//        <motion.section
//         className="max-w-7xl mx-auto px-6 py-10 mt-20 text-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <motion.h1
//           className="text-4xl md:text-4xl font-bold mb-4"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Let's connect and get to know each other
//         </motion.h1>

//         <motion.p
//           className="max-w-4xl font-semibold mx-auto text-gray-500"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Let’s connect and get to know each other better! At <span className="text-blue-600"> KRAD GLOBAL TRAVEL LLC</span>, we’re more than just bookings—we’re your travel companion. Share your dreams, and we’ll help turn them into journeys. Whether it’s flights, hotels, or car rentals, we’re here to make every step smooth, exciting, and unforgettable.
//         </motion.p>
//       </motion.section>

     

//       <motion.section
//         className="max-w-7xl mx-auto px-6 "
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50/50 rounded-[40px] p-8 md:p-16">

//           {/* Image */}
//           <motion.div
//             className=" md:w-1/2 flex justify-center"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/images/Contact Us Banner.jpg.jpeg"
//               alt="Travel Illustration"
//               className="h-full w-full"
//             />
//           </motion.div>

//           <motion.div
//             className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold mb-8">Send us message</h2>

//          <motion.form
//   className="space-y-4"
//   onSubmit={handleSubmit}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   variants={{
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   }}
// >

//   {/* Name + Email */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       className="space-y-2"
//     >
//       <label className="text-sm font-semibold text-slate-700">
//         Full Name
//       </label>

//       <input
//         type="text"
//         name="name"
//         value={message.name}
//         onChange={handleChnage}
//         placeholder="Enter your full name"
//         className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
//       />
//     </motion.div>

//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       className="space-y-1"
//     >
//       <label className="text-sm font-semibold text-slate-700">
//         Email Address
//       </label>

//       <input
//         type="email"
//         name="email"
//         value={message.email}
//         onChange={handleChnage}
//         placeholder="Enter your email"
//         className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
//       />
//     </motion.div>

//   </div>

//   {/* Phone */}
//   <motion.div
//     variants={{
//       hidden: { opacity: 0, y: 30 },
//       visible: { opacity: 1, y: 0 },
//     }}
//     className="space-y-1"
//   >
//     <label className="text-sm font-semibold text-slate-700">
//       Mobile Number
//     </label>

//     <input
//       type="text"
//       name="phone"
//       value={message.phone}
//       onChange={handleChnage}
//       placeholder="+1 234 567 890"
//       className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
//     />
//   </motion.div>

//   {/* Subject */}
//   <motion.div
//     variants={{
//       hidden: { opacity: 0, y: 30 },
//       visible: { opacity: 1, y: 0 },
//     }}
//     className="space-y-1"
//   >
//     <label className="text-sm font-semibold text-slate-700">
//       Subject
//     </label>

//     <input
//       type="text"
//       name="subject"
//       value={message.subject}
//       onChange={handleChnage}
//       placeholder="How can we help you?"
//       className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
//     />
//   </motion.div>

//   {/* Message */}
//   <motion.div
//     variants={{
//       hidden: { opacity: 0, y: 30 },
//       visible: { opacity: 1, y: 0 },
//     }}
//     className="space-y-1"
//   >
//     <label className="text-sm font-semibold text-slate-700">
//       Your Message
//     </label>

//     <textarea
//       rows="3"
//       name="message"
//       value={message.message}
//       onChange={handleChnage}
//       placeholder="Write your message here..."
//       className="w-full p-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
//     />
//   </motion.div>

//   {/* Checkboxes */}
//   <motion.div
//     className="space-y-1 pt-2"
//     variants={{
//       hidden: { opacity: 0 },
//       visible: { opacity: 1 },
//     }}
//   >

//     <label className="flex items-start gap-3 cursor-pointer">
//       <input
//         type="checkbox"
//         className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//       />

//       <span className="text-sm text-slate-500 leading-relaxed">
//         I agree to the Terms & Conditions and Privacy Policy.
//       </span>
//     </label>

//     <label className="flex items-start gap-3 cursor-pointer">
//       <input
//         type="checkbox"
//         className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//       />

//       <span className="text-sm text-slate-500 leading-relaxed">
//         I agree to receive booking updates and travel notifications.
//       </span>
//     </label>

//   </motion.div>

//   {/* Button */}
//   <motion.button
//     className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all"
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     type="submit"
//   >
//     Send Message
//   </motion.button>

// </motion.form>
//             <div className="absolute bottom-4 right-4 grid grid-cols-5 gap-2 opacity-20">
//               {[...Array(15)].map((_, i) => (
//                 <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </motion.section>

//        <motion.section
//         className="max-w-7xl mx-auto px-6 py-20 mt-10 text-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           <motion.div
//             className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
//             initial={{ opacity: 0, x: -100, rotate: -5 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 0.7 }}
//             whileHover={{ scale: 1.05, y: -5 }}
//           >
//             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
//               <Headphones size={20} className="text-blue-400" />
//             </div>
//             <h3 className="text-xl font-bold mb-3">Call us</h3>
//             <p className="text-gray-800 mb-6 text-center">
//               We’re here to help you anytime. Our service is dedicated to providing comfort and care whenever you need it.
//             </p>
//             <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full font-semibold">
//               <Phone size={14} />
//               <Link to="tel:+971-542919259">+971-542919259</Link>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
//               <Mail size={20} className="text-red-400" />
//             </div>
//             <h3 className="text-xl font-bold mb-3">Email us</h3>
//             <p className="text-gray-800 mb-6 text-center">
//               We’re here to help. Your needs matter, and we’re always ready to listen and assist with care and understanding.
//             </p>
//             <a href="mailto:info@7uptravel.com" className="border-b border-blue-600 font-semibold">
//               info@7uptravel.com
//             </a>
//           </motion.div>

//           <motion.div
//             className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center relative"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="absolute -top-4 -right-4 text-yellow-400 text-4xl">★</div>
//             <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
//               <Globe size={20} className="text-orange-400" />
//             </div>
//             <h3 className="text-xl font-bold mb-3">Visit us at</h3>
//             <p className="text-gray-800 mb-4 text-center">
//               Come see us in person—where every visit is an opportunity to connect, assist, and inspire your journey.
//             </p>
//             <div className="text-sm space-y-3 text-left w-full text-gray-700">
//               <p><strong>Dubai Office:</strong> MOHAMED HAMED SAIF ALRUMHI BUILDING, Office Number B 1-106, Al Mutheena, Deira Dubai - UAE</p>
//               <p><strong>USA Office:</strong> 17662 Irvine Blvd Suite 9, Tustin, CA 92780</p>
//               <p><strong>India Office:</strong> 272 GF, Sector 38, Gurugram, Haryana, India 122001</p>
//             </div>
//           </motion.div>

//         </div>
//       </motion.section>

//     </div>
//   );
// }