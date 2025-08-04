// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import img1 from "../assets/iitm_logo.png";
import img2 from "../assets/SIE.jpeg";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInnosphereOpen, setIsInnosphereOpen] = useState(false);
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [isMagazineOpen, setIsMagazineOpen] = useState(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);

  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);
  const [isMobileInnosphereOpen, setIsMobileInnosphereOpen] = useState(false);
  const [isMobileScholarshipOpen, setIsMobileScholarshipOpen] = useState(false);
  const [isMobileMagazineOpen, setIsMobileMagazineOpen] = useState(false);
  const [isMobilePodcastOpen, setIsMobilePodcastOpen] = useState(false);

  const eventsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (eventsRef.current && !eventsRef.current.contains(e.target)) {
        setIsEventsOpen(false);
        setIsStudentsOpen(false);
        setIsInnosphereOpen(false);
        setIsScholarshipOpen(false);
        setIsMagazineOpen(false);
        setIsPodcastOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setIsMobileEventsOpen(false);
      setIsMobileInnosphereOpen(false);
      setIsMobileScholarshipOpen(false);
      setIsMobileMagazineOpen(false);
      setIsMobilePodcastOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setIsMobileEventsOpen(false);
    setIsMobileInnosphereOpen(false);
    setIsMobileScholarshipOpen(false);
    setIsMobileMagazineOpen(false);
    setIsMobilePodcastOpen(false);
  };

  const activitiesLinks = [
    { name: "CFI", link: "https://cfi.iitm.ac.in/" },
    { name: "Nirmaan", link: "https://nirmaan.iitm.ac.in/" },
    { name: "OIE", link: "https://oieiitm.org/" },
    {
      name: "Innosphere",
      submenu: [
        {
          name: "Magazine",
          submenu: [
            { name: "Edition 1", link: "https://online.fliphtml5.com/ksjug/zaxv/#p=6" },
            { name: "Edition 2", link: "https://online.fliphtml5.com/ambvh/piht/" },
          ],
        },
        {
          name: "Podcast",
          submenu: [
            { name: "Episode 1", link: "https://www.youtube.com/watch?v=4HMZBd0snlE&ab_channel=Innosphere" },
            { name: "Episode 2", link: "https://www.youtube.com/watch?v=Y-5KWk7k3dY&ab_channel=Innosphere" },
            { name: "Episode 3", link: "https://www.youtube.com/watch?v=vq9Fbt2i39M&ab_channel=Innosphere" },
            { name: "Episode 4", link: "https://www.youtube.com/watch?v=C97Sw3WHQ_U&ab_channel=Innosphere" },
          ],
        },
      ],
    },
    {
      name: "Scholarship",
      submenu: [
        { name: "UGFIR", link: "https://oieiitm.org/ugfir/home" },
        { name: "PGFIR", link: "https://oieiitm.org/pgfir/home" },
      ],
    },
  ];

  return (
    <div className="w-full shadow-md relative z-50">
      {/* Top Header */}
      <div className="px-2 py-4 bg-white relative">
        <div className="flex items-center justify-center md:justify-between w-full gap-x-2 px-1 sm:px-2 md:px-4">
          <img src={img2} alt="SIE Logo" className="h-10 sm:h-14 md:h-20 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[240px]" />
          <div className="flex-1 min-w-0 px-2 text-center">
            <h1 className="truncate text-sm xs:text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              School of Innovation & Entrepreneurship
            </h1>
            <p className="truncate text-[10px] xs:text-xs sm:text-sm md:text-lg text-gray-600">
              Sudha & Shankar Innovation Hub<br /> IIT Madras
            </p>
          </div>
          <img src={img1} alt="IIT Madras Logo" className="h-10 xs:h-12 sm:h-16 md:h-20 w-auto max-w-[80px] sm:max-w-[100px]" />
          <div className="md:hidden ml-2">
            <button onClick={toggleMenu} className="p-2">
              <FaBars className="text-2xl text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="bg-[#1a1a36] text-white p-3 justify-center space-x-6 text-md hidden md:flex">
        <NavLink to="/" className="px-6 hover:text-amber-400">Home</NavLink>
        <NavLink to="/about_us" className="px-6 hover:text-blue-400">About</NavLink>
        <NavLink to="/news" className="px-6 hover:text-blue-400">News</NavLink>

        <div className="relative z-50" ref={eventsRef}>
  <button
    onClick={() => {
      setIsEventsOpen(!isEventsOpen);
      setIsStudentsOpen(false);
      setIsScholarshipOpen(false);
    }}
    className="hover:text-blue-400 flex items-center gap-1 px-6"
  >
    Activities
    <FaChevronDown
      className={`transition-transform duration-300 ${
        isEventsOpen ? "rotate-180" : "rotate-0"
      }`}
    />
  </button>

  {isEventsOpen && (
    <ul className="absolute top-full mt-1 left-0 w-72 bg-white text-black font-medium shadow-lg border-t border-black z-50">
      {activitiesLinks.map(({ name, link, submenu }) => (
        <li
          key={name}
          className="relative border-b border-black last:border-none"
        >
          {submenu ? (
            <>
              <button
                onClick={() => {
                  if (name === "Innosphere") {
                    setIsInnosphereOpen(!isInnosphereOpen);
                    setIsScholarshipOpen(false);
                  } else if (name === "Scholarship") {
                    setIsScholarshipOpen(!isScholarshipOpen);
                    setIsInnosphereOpen(false);
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-amber-400 flex justify-between items-center"
              >
                {name}
                <FaChevronDown
                  className={`ml-2 text-xs transition-transform duration-300 ${
                    (name === "Innosphere" && isInnosphereOpen) ||
                    (name === "Scholarship" && isScholarshipOpen)
                      ? "rotate-[270deg]"
                      : "rotate-0"
                  }`}
                />
              </button>

              {(name === "Innosphere" && isInnosphereOpen) ||
              (name === "Scholarship" && isScholarshipOpen) ? (
                <ul className="absolute left-full top-0 ml-1 w-48 bg-white border border-black shadow-lg z-50">
                  {submenu.map((sub) =>
                    sub.submenu ? (
                      <li key={sub.name} className="relative">
                        <button
                          onClick={() => {
                            if (sub.name === "Magazine") {
                              setIsMagazineOpen(!isMagazineOpen);
                              setIsPodcastOpen(false);
                            } else if (sub.name === "Podcast") {
                              setIsPodcastOpen(!isPodcastOpen);
                              setIsMagazineOpen(false);
                            }
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-amber-300 flex justify-between items-center"
                        >
                          {sub.name}
                          <FaChevronDown
                            className={`ml-2 text-xs transition-transform duration-300 ${
                              (sub.name === "Magazine" && isMagazineOpen) ||
                              (sub.name === "Podcast" && isPodcastOpen)
                                ? "rotate-[270deg]"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        {(sub.name === "Magazine" && isMagazineOpen) ||
                        (sub.name === "Podcast" && isPodcastOpen) ? (
                          <ul className="absolute left-full top-0 ml-1 w-48 bg-white border border-black shadow-lg z-50">
                            {sub.submenu.map((ssub) => (
                              <li key={ssub.name}>
                                <a
                                  href={ssub.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="block px-4 py-2 hover:bg-amber-200"
                                >
                                  {ssub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ) : (
                      <li key={sub.name}>
                        <a
                          href={sub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-4 py-2 hover:bg-amber-300"
                        >
                          {sub.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              ) : null}
            </>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-2 hover:bg-amber-400"
            >
              {name}
            </a>
          )}
        </li>
      ))}
    </ul>
  )}
</div>


        <div className="relative z-50">
          <button
            onClick={() => {
              setIsStudentsOpen(!isStudentsOpen);
              setIsEventsOpen(false);
            }}
            className="hover:text-blue-400 flex items-center gap-1 px-6"
          >
            Academics <FaChevronDown className={`${isStudentsOpen ? "rotate-180" : ""}`} />
          </button>
          {isStudentsOpen && (
            <ul className="absolute top-full mt-1 left-0 w-72 bg-white text-black font-medium shadow-lg border-t border-black z-50">
              <li className="border-b border-black">
                <a href="https://oieiitm.org/ms_entrepreneurship/home" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-amber-400">
                  M.S(E) Program
                </a>
              </li>
            </ul>
          )}
        </div>

        <NavLink to="/contact" className="px-6 hover:text-blue-400">Contact</NavLink>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden">
          <div className="bg-white w-72 h-full fixed top-0 right-0 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleMenu}>
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-lg font-semibold">
              <NavLink to="/" onClick={closeMenu} className="hover:text-amber-500">Home</NavLink>
              <NavLink to="/about_us" onClick={closeMenu} className="hover:text-blue-500">About</NavLink>
              <NavLink to="/news" onClick={closeMenu} className="hover:text-blue-500">News</NavLink>

              {/* Mobile Activities */}
              <button onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)} className="flex justify-between">
                Activities <FaChevronDown className={`${isMobileEventsOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileEventsOpen && (
                <div className="ml-4">
                  {activitiesLinks.map(({ name, link, submenu }) => (
                    submenu ? (
                      <div key={name}>
                        <button onClick={() => {
                          if (name === "Innosphere") {
                            setIsMobileInnosphereOpen(!isMobileInnosphereOpen);
                            setIsMobileScholarshipOpen(false);
                          } else if (name === "Scholarship") {
                            setIsMobileScholarshipOpen(!isMobileScholarshipOpen);
                            setIsMobileInnosphereOpen(false);
                          }
                        }} className="flex justify-between w-full">
                          {name} <FaChevronDown />
                        </button>
                        {(name === "Innosphere" && isMobileInnosphereOpen) ||
                        (name === "Scholarship" && isMobileScholarshipOpen) ? (
                          <div className="ml-4">
                            {submenu.map(sub =>
                              sub.submenu ? (
                                <div key={sub.name}>
                                  <button onClick={() => {
                                    if (sub.name === "Magazine") {
                                      setIsMobileMagazineOpen(!isMobileMagazineOpen);
                                      setIsMobilePodcastOpen(false);
                                    } else if (sub.name === "Podcast") {
                                      setIsMobilePodcastOpen(!isMobilePodcastOpen);
                                      setIsMobileMagazineOpen(false);
                                    }
                                  }} className="flex justify-between w-full">
                                    {sub.name} <FaChevronDown />
                                  </button>
                                  {(sub.name === "Magazine" && isMobileMagazineOpen) ||
                                  (sub.name === "Podcast" && isMobilePodcastOpen) ? (
                                    <div className="ml-4">
                                      {sub.submenu.map(ssub => (
                                        <a key={ssub.name} href={ssub.link} target="_blank" rel="noreferrer" onClick={closeMenu} className="block">
                                          {ssub.name}
                                        </a>
                                      ))}
                                    </div>
                                  ) : null}
                                </div>
                              ) : (
                                <a key={sub.name} href={sub.link} target="_blank" rel="noreferrer" onClick={closeMenu} className="block">{sub.name}</a>
                              )
                            )}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <a key={name} href={link} target="_blank" rel="noreferrer" onClick={closeMenu} className="block">{name}</a>
                    )
                  ))}
                </div>
              )}

              <a href="https://oieiitm.org/ms_entrepreneurship/home" target="_blank" rel="noreferrer" className="hover:text-blue-500">Academics</a>
              <NavLink to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;




















































































































// import React, { useState, useRef, useEffect } from "react";
// import img1 from "../assets/iitm_logo.png";
// import img2 from "../assets/sie-logo.png";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { NavLink, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isEventsOpen, setIsEventsOpen] = useState(false);
//   const [isStudentsOpen, setIsStudentsOpen] = useState(false);
//   const [isSupportOpen, setIsSupportOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isInnosphereOpen, setIsInnosphereOpen] = useState(false);
//   const location = useLocation();

//   // Refs for dropdowns
//   const eventsRef = useRef(null);
//   const studentsRef = useRef(null);
//   const innosphereRef = useRef(null);

//   // Close dropdowns on outside click
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (
//         eventsRef.current && !eventsRef.current.contains(e.target) &&
//         studentsRef.current && !studentsRef.current.contains(e.target) &&
//         innosphereRef.current && !innosphereRef.current.contains(e.target)
//       ) {
//         setIsEventsOpen(false);
//         setIsStudentsOpen(false);
//         setIsInnosphereOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleEventsDropdown = () => {
//     setIsEventsOpen((prev) => {
//       if (!prev) setIsStudentsOpen(false);
//       return !prev;
//     });
//   };

//   const toggleStudentsDropdown = () => {
//     setIsStudentsOpen((prev) => {
//       if (!prev) {
//         setIsEventsOpen(false);
//       } else {
//         setIsSupportOpen(false); // Close sub-menu when closing Students
//       }
//       return !prev;
//     });
//   };

//   const toggleSupportDropdown = () => setIsSupportOpen(!isSupportOpen);
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleInnosphereDropdown = () => setIsInnosphereOpen((prev) => !prev);

//   const activitiesLinks = [
//     { name: "CFI", link: "https://cfi.iitm.ac.in/" },
//     { name: "Nirmaan", link: "https://nirmaan.iitm.ac.in/" },
//     { name: "OIE", link: "https://oieiitm.org/" },
//     {
//       name: "Innosphere",
//       submenu: [
//         { name: "Magazine", link: "https://online.fliphtml5.com/ksjug/zaxv/#p=2" },
//         { name: "Podcast", link: "https://www.youtube.com/@InnovationEntrepreneurship" },
//       ],
//     },
//   ];

//   return (
//     <div className="w-full shadow-md relative z-50">
//       {/* Top Section */}
//       <div className="px-2 py-4 bg-white">
//         <div className="flex flex-row items-center justify-between w-full flex-nowrap gap-x-1 sm:gap-x-2 px-1 sm:px-2 md:px-4">
//           {/* Left Logo */}
//           <img src={img2} alt="IIT Madras Logo" className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain flex-shrink-0 mx-2" />
//           {/* Center Text */}
//           <div className="flex-1 flex flex-col items-center text-center leading-tight min-w-[80px] px-2">
//             <h1 className="truncate text-base xs:text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 font-poppins">
//               School of Innovation & 
//               <br className="block sm:hidden" />
//                Entrepreneurship
//             </h1>
//             <p className="truncate text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 font-poppins hidden md:block">
//               Sudha & Shankar Innovation Hub
//             </p>
//             <p className="truncate text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 font-poppins">
//               IIT Madras
//             </p>
//           </div>
//           {/* Right Logo */}
//           <img src={img1} alt="SIE Logo" className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain flex-shrink-0 mx-2" />
//           {/* Hamburger */}
//           <div className="md:hidden ml-2 flex-shrink-0 min-w-[40px] flex items-center justify-center">
//             <button onClick={toggleMenu} className="p-2">
//               <FaBars className="text-2xl text-black" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Nav */}
//       <div className="bg-[#1a1a36] text-white p-3 justify-center space-x-6 text-md hidden md:flex">
//         <NavLink to="/" end className={({ isActive }) => `px-6 ${isActive ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}>Home</NavLink>
//         <NavLink to="/about_us" className={({ isActive }) => `px-6 ${isActive ? 'text-amber-400 font-bold' : 'hover:text-blue-400'}`}>About</NavLink>
//         <NavLink to="/news" className={({ isActive }) => `px-6 ${isActive ? 'text-amber-400 font-bold' : 'hover:text-blue-400'}`}>News</NavLink>

//         {/* Activities */}
//         <div className="relative z-[999]" ref={eventsRef}>
//           <button onClick={() => { setIsEventsOpen((prev) => { setIsStudentsOpen(false); setIsInnosphereOpen(false); return !prev; }); }} className="hover:text-blue-400 flex items-center gap-1 px-6">
//             Activities
//             <FaChevronDown className={`transition-transform duration-200 ${isEventsOpen ? "rotate-180" : ""}`} />
//           </button>
//           {isEventsOpen && (
//             <ul className="absolute top-full mt-1 left-0 w-72 bg-white text-black font-medium shadow-lg border-t border-black z-[999]">
//               {activitiesLinks.map(({ name, link, submenu }, idx) => (
//                 <li key={name} className={`border-b border-black ${idx === activitiesLinks.length - 1 ? "border-none" : ""} relative`} ref={name === "Innosphere" ? innosphereRef : undefined}>
//                   {submenu ? (
//                     <>
//                       <button onClick={toggleInnosphereDropdown} className={`w-full text-left px-4 py-2 flex justify-between items-center ${
//                         (submenu.some(sub => location.pathname === sub.link)) ? 'bg-amber-100 text-blue-900 font-bold' : 'hover:bg-amber-400'
//                       }`}>
//                         {name}
//                         <FaChevronDown className={`ml-2 text-xs ${isInnosphereOpen ? 'rotate-[-90deg]' : ''}`} />
//                       </button>
//                       {isInnosphereOpen && (
//                         <ul className="absolute left-full top-0 mt-0 ml-1 w-48 bg-white border border-black shadow-lg z-[999]">
//                           {submenu.map((sub) => (
//                             <li key={sub.name} className="border-b border-black last:border-none">
//                               <a href={sub.link} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-amber-300">{sub.name}</a>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   ) : (
//                     <a
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block px-4 py-2 hover:bg-amber-400"
//                     >
//                       {name}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Students */}
//         <div className="relative z-[999]" ref={studentsRef}>
//           <button onClick={() => { setIsStudentsOpen((prev) => { setIsEventsOpen(false); setIsInnosphereOpen(false); return !prev; }); }} className="hover:text-blue-400 flex items-center gap-1 px-6">
//             Academics
//             <FaChevronDown className={`transition-transform duration-200 ${isStudentsOpen ? "rotate-180" : ""}`} />
//           </button>
//           {isStudentsOpen && (
//             <ul className="absolute top-full mt-1 left-0 w-72 bg-white text-black font-medium shadow-lg border-t border-black z-[999]">
//               <li className="relative border-b border-black">
//                <a href="https://oieiitm.org/ms_entrepreneurship/home" target="_blank"
//                     rel="noopener noreferrer"
//                     className=" hover:bg-amber-400"> <button onClick={toggleSupportDropdown} className="w-full text-left px-4 py-2 hover:bg-amber-400 flex justify-between items-center">
//                   M.S(E) Program
//                   {/* <FaChevronDown className={`transition-transform duration-200 ${isSupportOpen ? "rotate-[-90deg]" : ""}`} /> */}
//                 </button></a>
//                 {/* {isSupportOpen && (
//                   <ul className="absolute top-0 left-full ml-1 w-48 bg-white border border-black shadow-lg z-[999]">
//                     <li className="border-b border-black">
//                       <a href="#" className="block px-4 py-2 hover:bg-amber-300">UGFIR</a>
//                     </li>
//                     <li>
//                       <a href="#" className="block px-4 py-2 hover:bg-amber-300">PGFIR</a>
//                     </li>
//                   </ul>
//                 )} */}
//               </li>
//             </ul>
//           )}
//         </div>

//         <NavLink to="/contact" className={({ isActive }) => `px-6 ${isActive ? 'text-amber-400 font-bold' : 'hover:text-blue-400'}`}>Contact</NavLink>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden">
//           <div className="bg-gradient-to-b from-white/90 to-amber-50/80 backdrop-blur-xl w-full max-w-[16rem] h-full p-0 fixed top-0 right-0 shadow-2xl rounded-l-xl transition-transform duration-300 translate-x-0 overflow-y-auto flex flex-col border border-amber-100">
//             <div className="flex items-center justify-between px-6 py-5 border-b border-amber-200">
//               <span className="text-xl font-extrabold text-[#1a1a36] tracking-wide">Menu</span>
//               <button onClick={toggleMenu} className="p-3 rounded-full hover:bg-amber-100 active:bg-amber-200 transition">
//                 <FaTimes className="text-3xl text-gray-700" />
//               </button>
//             </div>
//             <nav className="flex-1 flex flex-col gap-3 text-xl font-semibold text-gray-800 px-6 py-6">
//               <a href="/" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">Home</a>
//               <a href="/about_us" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">About</a>
//               <a href="/news" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">News</a>

//               {/* Activities Dropdown */}
//               <div>
//                 <button onClick={() => { toggleEventsDropdown(); setIsInnosphereOpen(false); }} className="flex justify-between items-center w-full py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition font-semibold">
//                   Activities
//                   <FaChevronDown className={`${isEventsOpen ? "rotate-180" : ""} transition-transform`} />
//                 </button>
//                 {isEventsOpen && (
//                   <div className="ml-4 mt-1 space-y-2">
//                     {activitiesLinks.map(({ name, link, submenu }) => (
//                       submenu ? (
//                         <div key={name} className="relative">
//                           <button onClick={toggleInnosphereDropdown} className={`flex justify-between items-center w-full text-lg py-2 px-3 rounded-lg ${
//                             (submenu.some(sub => location.pathname === sub.link)) ? 'text-amber-500 font-bold bg-amber-100' : 'hover:text-amber-500'
//                           }`}>
//                             {name}
//                             <FaChevronDown className={`ml-2 text-xs ${isInnosphereOpen ? 'rotate-180' : ''}`} />
//                           </button>
//                           {isInnosphereOpen && (
//                             <div className="ml-4 mt-1 space-y-2">
//                               {submenu.map((sub) => (
//                                 <a key={sub.name} href={sub.link} target="_blank" rel="noopener noreferrer" className="block text-lg py-2 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">{sub.name}</a>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <a
//                           key={name}
//                           href={link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block text-lg py-2 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition"
//                         >
//                           {name}
//                         </a>
//                       )
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">Academics</a>

//               {/* Students Dropdown (if needed) */}
//               <div>
//                 <button onClick={toggleStudentsDropdown} className="flex justify-between items-center w-full py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition font-semibold">
//                   Students
//                   <FaChevronDown className={`${isStudentsOpen ? "rotate-180" : ""} transition-transform`} />
//                 </button>
//                 {isStudentsOpen && (
//                   <div className="ml-4 mt-1 space-y-2">
//                     <button onClick={toggleSupportDropdown} className="flex justify-between w-full text-lg py-2 px-3 rounded-lg hover:text-amber-500">
//                       Support
//                       <FaChevronDown className={`${isSupportOpen ? "rotate-[-90deg]" : ""} transition-transform`} />
//                     </button>
//                     {isSupportOpen && (
//                       <div className="ml-4 mt-1">
//                         <a href="#" className="block text-lg py-2 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">UGFIR</a>
//                         <a href="#" className="block text-lg py-2 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">PGFIR</a>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <a href="#" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">Parents</a>
//               <a href="#" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:bg-amber-100 active:bg-amber-200 transition">Admissions</a>
//               <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `py-3 px-3 rounded-lg ${isActive ? 'text-amber-400 font-bold bg-amber-100' : 'hover:text-blue-400'}`}>Contact</NavLink>
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
