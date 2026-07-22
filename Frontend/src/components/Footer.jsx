import React from 'react';
import { Phone, Mail, Hotel, Plane, Ship, Car, ArrowUp, FlashlightIcon, LucidePlane, PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white mt-10 py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <Link to="/">
              <img src="/logo/logo-light.png" alt="7uplogo" />
              </Link>
            </div>
            <p className="text-sm mb-6">Affordable luxury, one booking away.</p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={16} /> <Link to="tel:+1-888-716-0404" className="hover:text-blue-500 cursor-pointer transition">+1-888-716-0404</Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} /> <Link to="mailto:info@7uptravel.com" className="hover:text-blue-500 cursor-pointer transition">info@7uptravel.com</Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-2xl font-bold mb-6">Page</h4>
            <ul className="space-y-3 text-md">
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/">Home</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/about-us">About us</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/contact-us">Contact us</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-bold mb-6">Link</h4>
            <ul className="space-y-3 text-md">
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/terms-condition">Terms</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/cancellation">Cancellation</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-bold mb-6">Global Site</h4>
            <ul className="space-y-3 text-md">
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/los-angeles">Los Angeles</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="miami">Miami</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/new-york">New York</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/las-vegas">Las Vegas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-bold mb-6">Booking</h4>
            <ul className="space-y-4 text-md">
              <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Hotel size={18}/> <Link to="/hotel">Hotel</Link>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <PlaneTakeoff size={18}/> <Link to="/">Flight</Link>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Ship size={18}/> <Link to="/cruise">Cruise</Link>
              </li>
              <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Car size={18}/> <Link to="/car-rental">Car rental</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-6">
          <h4 className="text-white text-xl font-bold mb-4">Top Links</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-md">
           <div>
            <Link to="/" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Flights</Link>
            <Link to="/hotel" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Hotels</Link>
            <Link to="/cruise" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Cruise</Link>
            <Link to="/car-rental" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Car Rental</Link>
            <Link to="/travel-deals" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Travel Deals</Link>
            <Link to="/california" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">California</Link>
            <Link to="/new-york" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">New York</Link>
            <Link to="/los-angeles" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Los Angeles</Link>
            <Link to="/chicago" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Chicago</Link>
            <Link to="/san-francisco" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">San Francisco</Link>
            <Link to="/miami" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Miami</Link>
            <Link to="/sanjosh" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Sanjosh</Link>
            <Link to="/las-vegas" className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">Las Vegas</Link>

           </div>
           
            {/* {["Flights", "Hotels", "Cruise", "Car Rental", "Travel Deals", "California", "New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Sanjosh", "Las Vegas"].map((link) => (
              <span key={link} className="hover:text-blue-500 cursor-pointer  border-gray-700 pr-4 last:border-none">
                {link}
              </span>
            ))} */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>©2025 7UPTRAVEL LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className='hover:text-blue-500 font-semi-bold'>Privacy Policy</Link>
            <Link to="/terms-condition" className='hover:text-blue-500 font-semi-bold'>Terms and conditions</Link>
            <Link to="/refund-policy" className='hover:text-blue-500 font-semi-bold'>Refund policy</Link>
          </div>
        </div>
      </div>

    
    </footer>
  );
};

 