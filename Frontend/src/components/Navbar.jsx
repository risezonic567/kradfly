import { Menu, X, Plane, Car, Hotel, Ship, Phone, PlaneTakeoffIcon, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    navigate("/login");
  }

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("name");

    if (auth === "true") {
      setIsLoggedIn(true);
      setUserName(name || "User");
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path) => location.pathname === path;

  const navClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-200 ${
      isActive(path)
        ? "text-blue-600 bg-blue-50/80 font-semibold"
        : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/60"
    }`;

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 h-[76px] sm:h-[84px] md:h-[92px] lg:h-[100px] fixed top-0 left-0 z-[100] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        
        {/* Logo - properly contained */}
        <Link to="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
          <img
            src="/logo/logo1.png"
            alt="Krad Global Travel"
            className="h-14 sm:h-16 md:h-18 lg:h-22 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Items - visible at xl and above */}
        <ul className="hidden xl:flex items-center gap-1.5 text-sm">
          <li>
            <Link to="/about-us" className={navClass("/about-us")}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={navClass("/contact-us")}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className={navClass("/")}>
              <PlaneTakeoffIcon size={16} className="shrink-0" /> Flight
            </Link>
          </li>
          <li>
            <Link to="/car-rental" className={navClass("/car-rental")}>
              <Car size={16} className="shrink-0" /> Car Rental
            </Link>
          </li>
          <li>
            <Link to="/hotel" className={navClass("/hotel")}>
              <Hotel size={16} className="shrink-0" /> Hotel
            </Link>
          </li>
          <li>
            <Link to="/cruise" className={navClass("/cruise")}>
              <Ship size={16} className="shrink-0" /> Cruise
            </Link>
          </li>
        </ul>

        {/* Right Action Items (Desktop) */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="tel:+971-542919259"
            className="flex items-center gap-2 text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 px-3.5 py-2 rounded-full font-semibold text-xs border border-slate-200/80 transition-all duration-200"
          >
            <Phone size={14} className="text-blue-600 shrink-0" />
            <span>+971-542919259</span>
          </a>

         
        </div>

        {/* Hamburger Button - Visible below xl */}
        <button
          className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Overlay via Portal */}
      {createPortal(
        <>
          {/* Mobile menu backdrop */}
          <div
            className={`xl:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 z-[101] ${
              open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Mobile sidebar drawer */}
          <div
            className={`xl:hidden fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-[102] ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
                <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
                  <img
                    src="/logo/logo1.png"
                    alt="Krad Global Travel"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

           

              {/* Navigation Links */}
              <ul className="flex flex-col gap-1 p-4 text-sm font-medium">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/"
                    className={`${navClass("/")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    <Plane size={18} className="text-blue-600" /> Flight
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/car-rental"
                    className={`${navClass("/car-rental")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    <Car size={18} className="text-blue-600" /> Car Rental
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/hotel"
                    className={`${navClass("/hotel")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    <Hotel size={18} className="text-blue-600" /> Hotel
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/cruise"
                    className={`${navClass("/cruise")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    <Ship size={18} className="text-blue-600" /> Cruise
                  </Link>
                </li>
                {/* <li className="my-2 border-t border-slate-100"></li> */}
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/about-us"
                    className={`${navClass("/about-us")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/contact-us"
                    className={`${navClass("/contact-us")} w-full py-2.5 px-3.5 rounded-xl`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
              <a
                onClick={() => setOpen(false)}
                href="tel:+971-542919259"
                className="flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                <Phone size={16} /> +971-542919259
              </a>

             
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
}


// import { Menu, X, Plane, Car, Hotel, Ship, Phone, PlaneTakeoffIcon, User, LogOut } from "lucide-react";
// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   const navigate = useNavigate();

//   async function handleLogout() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("name");
//     setIsLoggedIn(false);
//     navigate("/login");
//   }

//   // Close mobile menu on route change
//   useEffect(() => {
//     setOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const auth = localStorage.getItem("isLoggedIn");
//     const name = localStorage.getItem("name");

//     if (auth === "true") {
//       setIsLoggedIn(true);
//       setUserName(name || "User");
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [location]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const isActive = (path) => location.pathname === path;

//   const navClass = (path) =>
//     `flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-200 ${
//       isActive(path)
//         ? "text-blue-600 bg-blue-50/80 font-semibold"
//         : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/60"
//     }`;

//   return (
//     <nav className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 h-[72px] fixed top-0 left-0 z-[100] shadow-xs">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        
//         {/* Logo - properly contained */}
//         <Link to="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
//           <img
//             src="/logo/logo1.png"
//             alt="Krad Global Travel"
//             className="h-12 sm:h-14 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Nav Items - visible at xl and above */}
//         <ul className="hidden xl:flex items-center gap-1.5 text-sm">
//           <li>
//             <Link to="/about-us" className={navClass("/about-us")}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact-us" className={navClass("/contact-us")}>
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className={navClass("/")}>
//               <PlaneTakeoffIcon size={16} className="shrink-0" /> Flight
//             </Link>
//           </li>
//           <li>
//             <Link to="/car-rental" className={navClass("/car-rental")}>
//               <Car size={16} className="shrink-0" /> Car Rental
//             </Link>
//           </li>
//           <li>
//             <Link to="/hotel" className={navClass("/hotel")}>
//               <Hotel size={16} className="shrink-0" /> Hotel
//             </Link>
//           </li>
//           <li>
//             <Link to="/cruise" className={navClass("/cruise")}>
//               <Ship size={16} className="shrink-0" /> Cruise
//             </Link>
//           </li>
//         </ul>

//         {/* Right Action Items (Desktop) */}
//         <div className="hidden xl:flex items-center gap-3">
//           <a
//             href="tel:+971-542919259"
//             className="flex items-center gap-2 text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 px-3.5 py-2 rounded-full font-semibold text-xs border border-slate-200/80 transition-all duration-200"
//           >
//             <Phone size={14} className="text-blue-600 shrink-0" />
//             <span>+971-542919259</span>
//           </a>

         
//         </div>

//         {/* Hamburger Button - Visible below xl */}
//         <button
//           className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           <Menu size={24} />
//         </button>
//       </div>

//       {/* Mobile Drawer Overlay via Portal */}
//       {createPortal(
//         <>
//           {/* Mobile menu backdrop */}
//           <div
//             className={`xl:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 z-[101] ${
//               open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
//             }`}
//             onClick={() => setOpen(false)}
//           />

//           {/* Mobile sidebar drawer */}
//           <div
//             className={`xl:hidden fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-[102] ${
//               open ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             {/* Drawer Header */}
//             <div>
//               <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100">
//                 <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
//                   <img
//                     src="/logo/logo.png"
//                     alt="Krad Global Travel"
//                     className="h-10 w-auto object-contain"
//                   />
//                 </Link>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <X size={22} />
//                 </button>
//               </div>

           

//               {/* Navigation Links */}
//               <ul className="flex flex-col gap-1 p-4 text-sm font-medium">
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/"
//                     className={`${navClass("/")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     <Plane size={18} className="text-blue-600" /> Flight
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/car-rental"
//                     className={`${navClass("/car-rental")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     <Car size={18} className="text-blue-600" /> Car Rental
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/hotel"
//                     className={`${navClass("/hotel")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     <Hotel size={18} className="text-blue-600" /> Hotel
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/cruise"
//                     className={`${navClass("/cruise")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     <Ship size={18} className="text-blue-600" /> Cruise
//                   </Link>
//                 </li>
//                 {/* <li className="my-2 border-t border-slate-100"></li> */}
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/about-us"
//                     className={`${navClass("/about-us")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => setOpen(false)}
//                     to="/contact-us"
//                     className={`${navClass("/contact-us")} w-full py-2.5 px-3.5 rounded-xl`}
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Drawer Footer Actions */}
//             <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
//               <a
//                 onClick={() => setOpen(false)}
//                 href="tel:+971-542919259"
//                 className="flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
//               >
//                 <Phone size={16} /> +971-542919259
//               </a>

             
//             </div>
//           </div>
//         </>,
//         document.body
//       )}
//     </nav>
//   );
// }
