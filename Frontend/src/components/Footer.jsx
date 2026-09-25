import React from 'react';
import { Phone, Mail, Hotel, Ship, Car, PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-300 mt-10 py-16 px-6 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo/kradfly.png" 
                alt="kradfly" 
                className="h-16 w-auto bg-white object-contain rounded-lg p-2 shadow-md"
              />
            </Link>
            <p className="text-xs text-slate-400 mb-6 font-medium">
              Affordable luxury, one booking away.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500 shrink-0" /> 
                <a 
                  href="tel:+971542919259" 
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  +971-542919259
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 shrink-0" /> 
                <a 
                  href="mailto:info@7uptravel.com" 
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  info@7uptravel.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-wide">Page</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About us</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400 transition-colors">Contact us</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-wide">Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/terms-condition" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cancellation" className="hover:text-blue-400 transition-colors">Cancellation</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Global Sites */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-wide">Global Sites</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/los-angeles" className="hover:text-blue-400 transition-colors">Los Angeles</Link></li>
              <li><Link to="/miami" className="hover:text-blue-400 transition-colors">Miami</Link></li>
              <li><Link to="/new-york" className="hover:text-blue-400 transition-colors">New York</Link></li>
              <li><Link to="/las-vegas" className="hover:text-blue-400 transition-colors">Las Vegas</Link></li>
            </ul>
          </div>

          {/* Bookings */}
          <div>
            <h4 className="text-white text-lg font-bold mb-5 tracking-wide">Booking</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/hotel" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                  <Hotel size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" /> 
                  <span>Hotel</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                  <PlaneTakeoff size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" /> 
                  <span>Flight</span>
                </Link>
              </li>
              <li>
                <Link to="/cruise" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                  <Ship size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" /> 
                  <span>Cruise</span>
                </Link>
              </li>
              <li>
                <Link to="/car-rental" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                  <Car size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" /> 
                  <span>Car rental</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 pb-6">
          <h4 className="text-white text-base font-bold mb-4">Visit us at:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-slate-400">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
              <p className="font-semibold text-white mb-1 text-sm">Dubai Office</p>
              <p>MOHAMED HAMED SAIF ALRUMHI BUILDING, Office Number B 1-106, Al Mutheena, Deira Dubai - UAE</p>
            </div>
           
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {currentYear} Krad Fly LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-blue-400 font-semibold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-condition" className="hover:text-blue-400 font-semibold transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-blue-400 font-semibold transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
// import React from 'react';
// import { Phone, Mail, Hotel, Plane, Ship, Car, ArrowUp, FlashlightIcon, LucidePlane, PlaneTakeoff } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-black/90 text-white mt-10 py-16 px-6 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-1 mb-4">
//               <Link to="/">
//               <img src="/logo/logo.png" alt="kradgloballogo" />
//               </Link>
//             </div>
//             <p className="text-sm mb-6">Affordable luxury, one booking away.</p>
//             <div className="space-y-3 text-sm text-gray-300">
//               <div className="flex items-center gap-3">
//                 <Phone size={16} /> <Link to="tel:+971-542919259" className="hover:text-blue-500 cursor-pointer transition">+971-542919259</Link>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail size={16} /> <Link to="mailto:info@7uptravel.com" className="hover:text-blue-500 cursor-pointer transition">info@7uptravel.com</Link>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-white text-2xl font-bold mb-6">Page</h4>
//             <ul className="space-y-3 text-md">
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/">Home</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/about-us">About us</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/contact-us">Contact us</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/faq">FAQ</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white text-2xl font-bold mb-6">Link</h4>
//             <ul className="space-y-3 text-md">
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/terms-condition">Terms</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/privacy-policy">Privacy Policy</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/cancellation">Cancellation</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/disclaimer">Disclaimer</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white text-2xl font-bold mb-6">Global Site</h4>
//             <ul className="space-y-3 text-md">
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/los-angeles">Los Angeles</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="miami">Miami</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/new-york">New York</Link></li>
//               <li className="hover:text-blue-500 cursor-pointer transition"><Link to="/las-vegas">Las Vegas</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white text-2xl font-bold mb-6">Booking</h4>
//             <ul className="space-y-4 text-md">
//               <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
//                 <Hotel size={18}/> <Link to="/hotel">Hotel</Link>
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
//                 <PlaneTakeoff size={18}/> <Link to="/">Flight</Link>
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
//                 <Ship size={18}/> <Link to="/cruise">Cruise</Link>
//               </li>
//               <li className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
//                 <Car size={18}/> <Link to="/car-rental">Car rental</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

        

//         <div className="border-t border-gray-800 pt-8 pb-6">
//           <h4 className="text-white text-xl font-bold mb-4">Visit us at:</h4>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
//             <div>
//               <p className="font-semibold text-white mb-1">Dubai Office:</p>
//               <p>MOHAMED HAMED SAIF ALRUMHI BUILDING, Office Number B 1-106, Al Mutheena, Deira Dubai - UAE</p>
//             </div>
//             <div>
//               <p className="font-semibold text-white mb-1">USA Office:</p>
//               <p>17662 Irvine Blvd Suite 9, Tustin, CA 92780</p>
//             </div>
//             <div>
//               <p className="font-semibold text-white mb-1">India Office:</p>
//               <p>272 GF, Sector 38, Gurugram, Haryana, India 122001</p>
//             </div>
//           </div>
//         </div>

        

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
//           <p>©2026 Krad Fly LLC. All rights reserved.</p>
//           <div className="flex gap-6">
//             <Link to="/privacy-policy" className='hover:text-blue-500 font-semi-bold'>Privacy Policy</Link>
//             <Link to="/terms-condition" className='hover:text-blue-500 font-semi-bold'>Terms and conditions</Link>
//             <Link to="/refund-policy" className='hover:text-blue-500 font-semi-bold'>Refund policy</Link>
//           </div>
//         </div>
//       </div>

    
//     </footer>
//   );
// };

 