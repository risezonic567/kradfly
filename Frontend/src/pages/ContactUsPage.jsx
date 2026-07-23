import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChnage =(e)=>{
    setMessage({
      ...message,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      const response = await fetch("https://www.7uptravel.com/api/contactus/send", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body :JSON.stringify(message)
      })

      const data = await response.json()

      if(response.ok){
        alert("Message Send Successfully")
        setMessage({
          name:"",
          email:"",
          phone:"",
          subject:"",
          message:""
        })
      }
      else{
        alert(data.error || "Failed To send Message")
      }
    } catch (error) {
      console.log("Error",error)
      alert("Server Error")
    }

  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

       <motion.section
        className="max-w-7xl mx-auto px-6 py-10 mt-20 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's connect and get to know each other
        </motion.h1>

        <motion.p
          className="max-w-4xl font-semibold mx-auto text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let’s connect and get to know each other better! At <span className="text-blue-600"> 7UPTRAVEL LLC</span>, we’re more than just bookings—we’re your travel companion. Share your dreams, and we’ll help turn them into journeys. Whether it’s flights, hotels, or car rentals, we’re here to make every step smooth, exciting, and unforgettable.
        </motion.p>
      </motion.section>

     

      <motion.section
        className="max-w-7xl mx-auto px-6 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50/50 rounded-[40px] p-8 md:p-16">

          {/* Image */}
          <motion.div
            className=" md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/Contact Us Banner.jpg.jpeg"
              alt="Travel Illustration"
              className="h-full w-full"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us message</h2>

         <motion.form
  className="space-y-4"
  onSubmit={handleSubmit}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>

  {/* Name + Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="space-y-2"
    >
      <label className="text-sm font-semibold text-slate-700">
        Full Name
      </label>

      <input
        type="text"
        name="name"
        value={message.name}
        onChange={handleChnage}
        placeholder="Enter your full name"
        className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
      />
    </motion.div>

    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="space-y-1"
    >
      <label className="text-sm font-semibold text-slate-700">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        value={message.email}
        onChange={handleChnage}
        placeholder="Enter your email"
        className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
      />
    </motion.div>

  </div>

  {/* Phone */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    className="space-y-1"
  >
    <label className="text-sm font-semibold text-slate-700">
      Mobile Number
    </label>

    <input
      type="text"
      name="phone"
      value={message.phone}
      onChange={handleChnage}
      placeholder="+1 234 567 890"
      className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
    />
  </motion.div>

  {/* Subject */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    className="space-y-1"
  >
    <label className="text-sm font-semibold text-slate-700">
      Subject
    </label>

    <input
      type="text"
      name="subject"
      value={message.subject}
      onChange={handleChnage}
      placeholder="How can we help you?"
      className="w-full h-12 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
    />
  </motion.div>

  {/* Message */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    className="space-y-1"
  >
    <label className="text-sm font-semibold text-slate-700">
      Your Message
    </label>

    <textarea
      rows="3"
      name="message"
      value={message.message}
      onChange={handleChnage}
      placeholder="Write your message here..."
      className="w-full p-5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
    />
  </motion.div>

  {/* Checkboxes */}
  <motion.div
    className="space-y-1 pt-2"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
  >

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />

      <span className="text-sm text-slate-500 leading-relaxed">
        I agree to the Terms & Conditions and Privacy Policy.
      </span>
    </label>

    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />

      <span className="text-sm text-slate-500 leading-relaxed">
        I agree to receive booking updates and travel notifications.
      </span>
    </label>

  </motion.div>

  {/* Button */}
  <motion.button
    className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
  >
    Send Message
  </motion.button>

</motion.form>
            <div className="absolute bottom-4 right-4 grid grid-cols-5 gap-2 opacity-20">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

       <motion.section
        className="max-w-7xl mx-auto px-6 py-20 mt-10 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Headphones size={20} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Call us</h3>
            <p className="text-gray-800 mb-6 text-center">
              We’re here to help you anytime. Our service is dedicated to providing comfort and care whenever you need it.
            </p>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full font-semibold">
              <Phone size={14} />
              <Link to="tel:+1-888-716-0404">+1-888-716-0404</Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Mail size={20} className="text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email us</h3>
            <p className="text-gray-800 mb-6 text-center">
              We’re here to help. Your needs matter, and we’re always ready to listen and assist with care and understanding.
            </p>
            <a href="mailto:info@7uptravel.com" className="border-b border-blue-600 font-semibold">
              info@7uptravel.com
            </a>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-3xl shadow-md border flex flex-col items-center relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-4 -right-4 text-yellow-400 text-4xl">★</div>
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
              <Globe size={20} className="text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visit us</h3>
            <p className="text-gray-800 mb-6 text-center">
              Come see us in person—where every visit is an opportunity to connect, assist, and inspire your journey.
            </p>
            <p>200 Spectrum Center Dr Irvine, CA 92618, USA</p>
          </motion.div>

        </div>
      </motion.section>

      <motion.section
        className="w-full px-6 py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Find us on map</h3>

          <motion.div
            className="w-full h-[450px] rounded-[40px] overflow-hidden shadow-lg border-8 border-white"
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.123456789!2d-117.751234567!3d33.651234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd123456789%3A0x123456789abcdef!2s200%20Spectrum%20Center%20Dr%2C%20Irvine%2C%20CA%2092618%2C%20USA!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"

              className="w-full h-full grayscale hover:grayscale-0 transition-all"
            />
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}