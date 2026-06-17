import React, { useState, useEffect } from "react";
import { FaBullhorn, FaArrowUp, FaRocket, FaHandPointRight, FaBullseye, FaTrophy, FaAward, FaMedal, FaChevronLeft, FaChevronRight, FaRupeeSign, FaUsers, FaIndustry, FaBuilding, FaChartLine, FaCalendarAlt, FaTimes } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/bgimage.jpeg";
import img2 from "../assets/vision.jpg";
import img3 from "../assets/Delta_Expo_Invite.jpg";
import img4 from "../assets/DSC.JPG";
import nirmaanImg from "../assets/nirmaan_pic.jpg";
import cfiImg from "../assets/agnirath.jpg";
import Marquee from "react-fast-marquee";
import img5 from "../assets/Funds/amex.png"
import img6 from "../assets/Funds/Aptiv.png"
import img7 from "../assets/Funds/Citibank-wine.png"
import img9 from "../assets/Funds/GameChange.jpg"
import img10 from "../assets/Funds/hdfc-pari.png"
import img11 from "../assets/Funds/hyperverge.webp"
import img12 from "../assets/Funds/IndusBiotech.png"
import img13 from "../assets/Funds/Jane.png"
import img14 from "../assets/Funds/jako-mueller.svg"
import { motion } from "framer-motion";
import img15 from "../assets/Awards/Avishkar-2026.jpeg"
import img16 from "../assets/Awards/Raftar-2026.png"
import img17 from "../assets/Awards/Anveshak-2026.jpeg"
import img18 from "../assets/FundRaised/galaxeye_logo.jpg"
import img19 from "../assets/FundRaised/inboundaerospace_logo.jpg"
import img20 from "../assets/FundRaised/plenome_logo.jpeg"
import img21 from "../assets/FundRaised/urbanmatrix_logo.jpg"
import img22 from "../assets/FundRaised/tan90thermal_logo.jpg"
import img23 from "../assets/FundRaised/susstains.jpg"
import img24 from "../assets/FundRaised/green_aadhaar_logo.jpg"
import img25 from "../assets/FundRaised/grow_your_farm.jpg"
import img26 from "../assets/FundRaised/tiq-logo.png"
import img27 from "../assets/Awards/Pitch-2026.jpeg"
const visionMissionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

// Awards slider auto-change time (ms)
const AWARDS_SLIDE_INTERVAL_MS = 13000;

const awardsData = [
  {
    icon: FaAward,
    title: "Invention Engine Pitch Session Winners",
    year: "2026",
    category: "Pitch Session",
    description: "The session featured representatives from Invention Engine, Mr. Shailendra and Mr. Aashirwad, who evaluated the participating teams. Based on their assessment, three teams were selected as winners for their outstanding performance and innovation.",
    winners: [
      "ScoutEdge (Mr. Satyendra Kumar)",
      "Zeex AI (Mr. Gaurav Yadav)",
      "Immortigen (Mr. Aayan Raj)",
    ],
    image: img27,
    gradient: "from-amber-400 to-yellow-600",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: FaTrophy,
    title: "IIT Madras Avishkar Hyperloop Wins Global Hyperloop Competition 2026",
    year: "2026",
    category: "Global Recognition",
    description: "The Avishkar Hyperloop team from IIT Madras achieved global recognition by winning the Global Hyperloop Competition 2026. Their latest prototype, Pod 9.0, highlighted breakthroughs in scalable, sustainable high-speed mobility, setting new benchmarks in future transportation systems.",
    image: img15,
    gradient: "from-amber-400 to-yellow-600",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: FaTrophy,
    title: "Team Secures 2nd Overall Position at Formula Bharat 2026",
    year: "2026",
    category: "Global Recognition",
    description: "Competing against 40 EV teams at Formula Bharat 2026, the team achieved an impressive 2nd Overall position. Key accolades included the Best Battery Pack Award and Best Embedded System Award, along with podium finishes in Business Plan, Engineering Design, and Cost & Manufacturing, underscoring technical excellence and competitive strategy.",
    image: img16,
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/10",
  },
  {
    icon: FaTrophy,
    title: "Team Anveshak Secures 3rd Overall Position at International Rover Challenge 2026",
    year: "2026",
    category: "Global Recognition",
    description: "Team Anveshak secured the 3rd overall position out of 33 teams, emerging as the 2nd Runner Up at the International Rover Challenge (IRC) 2026. The team was also honored with the Special Award for Best Rover Mission, recognizing excellence in rover design, mission execution, and engineering innovation.",
    image: img17,
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
];

// Startup fundraising highlight data (replace numbers with real data)
const fundingStats = [
  { label: "Total startup funding facilitated", value: "₹50 Cr+", icon: FaRupeeSign },
  { label: "Student & alumni startups supported", value: "10+", icon: FaUsers },
  { label: "Sectors", value: " Healthcare, DroneTech, Agritech, Sustainability, SpaceTech", icon: FaIndustry },
];

const fundedStartups = [
  // Add logo: import a file and set logo: thatImport (png/jpg/svg)
  // If logo is not provided, initials placeholder will show automatically.
  {
    name: "GalaxEye",
    amount: "₹58 Cr",
    stage: "Series A",
    focus: "SpaceTech",
    program: "Nirmaan",
    year: "2025",
    logo: img18,
  },
  {
    name: "Inbound Aerospace",
    amount: "₹9 Cr",
    stage: "Seed",
    focus: "SpaceTech",
    program: "Nirmaan",
    year: "2025",
    logo: img19,
  },
  {
    name: "Plenome Technologies",
    amount: "₹7.5 Cr",
    stage: "Seed",
    focus: "Healthcare",
    program: "Nirmaan",
    year: "2025",
    logo: img20,
  },
  {
    name: "Urban Matrix",
    amount: "₹3.8 Cr",
    stage: "Seed",
    focus: "DroneTech",
    program: "Nirmaan",
    year: "2025",
    logo: img21,
  },
  {
    name: "Tan90 Thermal Solutions Pvt. Ltd",
    amount: "₹5 Cr",
    stage: "Series A",
    focus: "Agritech",
    program: "Nirmaan",
    year: "2025",
    logo: img22,
  },
  {
    name: "Susstains Engineering Solutions LLP",
    amount: "₹1.5 Cr",
    stage: "Seed",
    focus: "Sustainability",
    program: "Nirmaan",
    year: "2025",
    logo: img23,
  },
  {
    name: "Green Aadhaar",
    amount: "₹50 L",
    stage: "Seed",
    focus: "Sustainability",
    program: "Nirmaan",
    year: "2025",
    logo: img24,
  },
  {
    name: "Grow Your Farm",
    amount: "₹32 L",
    stage: "Seed",
    focus: "Agritech",
    program: "Nirmaan",
    year: "2025",
    logo: img25,
  },
  {
    name: "TIQWorld Pvt Ltd",
    amount: "₹15 L",
    stage: "Active",
    focus: "Agritech",
    program: "Nirmaan",
    year: "2025",
    logo: img26,
  },
];

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show popup after 3 seconds on every home page visit
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => (prev + 1) % awardsData.length);
    }, AWARDS_SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const announcements = [
    <>
      {/* <FaRocket className="inline text-red-500 mr-1" /> Launch of The School of Innovation & Entrepreneurship
      {" — "}
      <FaCalendarAlt className="inline text-blue-600 mr-1" /> 4th August 2025
      {" — "}
      <FaClock className="inline text-yellow-500 mr-1" /> 5:00 PM onwards
      {" — "} */}
      {/* <span className="mx-6">
  <FaHandPointRight className="inline text-green-600 mr-1" /> 
  Application Open for MS(Entrepreneurship) July-2026  — 
  <a href="https://research.iitm.ac.in/" className="font-semibold underline">Apply here</a>
</span>

<span className="mx-6">
  <FaHandPointRight className="inline text-green-600 mr-1" /> 
  Application Open for MS(Entrepreneurship) July-2026  — 
  <a href="https://research.iitm.ac.in/" className="font-semibold underline">Apply here  </a>
</span> */}
      <span className="mx-6">
        <FaHandPointRight className="inline text-green-600 mr-1" />
        Applications are closed for UGFIR 2026  
        {/* <a href="scholorship/ugfir" target="_blank"
          rel="noreferrer" className="font-semibold underline"> Click Here  </a> */}
      </span>
      <span className="mx-6">
        <FaHandPointRight className="inline text-green-600 mr-1" />
        Applications are closed for UGFIR 2026  
        {/* <a href="scholorship/ugfir" target="_blank"
          rel="noreferrer" className="font-semibold underline"> Click Here  </a> */}
      </span><span className="mx-6">
        <FaHandPointRight className="inline text-green-600 mr-1" />
        Applications are closed for UGFIR 2026  
        {/* <a href="scholorship/ugfir" target="_blank"
          rel="noreferrer" className="font-semibold underline"> Click Here  </a> */}
      </span>

    </>
  ];

  const currentEvents = [
    // {
    //   title: "MS (Entrepreneurship) – July 2026 admissions open",
    //   date: "2026",
    //   link: "https://research.iitm.ac.in/",
    //   tag: "NEW",
    // },
    // {
    //   title: "PhD – July 2026 admissions open",
    //   date: "2026",
    //   link: "https://research.iitm.ac.in/",
    //   tag: "NEW",
    // },
    // {
    //   title: "Latest updates from SIE",
    //   date: "",
    //   link: "/news",
    //   tag: "",
    // },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Announcement Bar */}
      <div className="w-full bg-[#f8f9fa] py-2 flex flex-col sm:flex-row items-center overflow-hidden border-b border-gray-200">
        <div className="bg-white text-red-500 font-semibold flex items-center px-4 py-2 rounded-md mb-2 sm:mb-0 sm:ml-4 z-10 shrink-0 transition-all duration-300 ">
          <FaBullhorn className="mr-2" />
          Announcements
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee text-[#002855] text-sm whitespace-nowrap">
            {announcements.map((text, idx) => (
              <span
                key={idx}
                className="mx-8 transition-opacity duration-300 hover:opacity-80 text-poppins"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <img
            src={img1}
            alt="Left Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            src={img4}
            alt="Right Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Current Events (responsive) */}
        {/* <div className="absolute left-4 right-4 bottom-4 z-20 md:left-auto md:right-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:w-[360px]">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
              <span className="text-white font-semibold tracking-wide">
                Current Events
              </span>
              <a
                href=""
                className="text-amber-300 hover:text-amber-200 text-xs font-semibold underline underline-offset-2"
              >
                View all
              </a>
            </div>
            <div className="px-4 py-3 space-y-2.5">
              {currentEvents.map((ev, idx) => {
                const isExternal = /^https?:\/\//i.test(ev.link);
                return (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300 shrink-0" />
                    <div className="min-w-0">
                      <a
                        href={ev.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-white text-sm font-medium hover:text-amber-200 transition-colors line-clamp-2"
                      >
                        {ev.title}
                      </a>
                      <div className="mt-1 flex items-center gap-2">
                        {ev.tag ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/90 text-white">
                            {ev.tag}
                          </span>
                        ) : null}
                        {ev.date ? (
                          <span className="text-[11px] text-white/70">
                            {ev.date}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-2xl animate-fadeUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              School of Innovation & Entrepreneurship
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              Empowering the next generation of innovators and entrepreneurs at IIT Madras
            </p>
            <a href="/about_us">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md transition-colors duration-300">
                Learn More
              </button></a>
          </div>
        </div>
      </div>
      {/* Vision & Mission Section */}
      <motion.section
        className="bg-white py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision Card */}
          <motion.div
            className="text-center flex flex-col items-center group"
            variants={visionMissionVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-[#1a1a36] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-shadow duration-300"
              variants={iconVariants}
            >
              <FaBullseye className="text-[#f8f9fa] text-4xl" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <p className="text-gray-500 text-md leading-relaxed max-w-md mb-6 text-justify">
              To be a cornerstone of entrepreneurial excellence at IIT Madras by providing structured academic support and inspiring the next generation of startup founders. Through innovative programs and hands-on learning, we aim to nurture and empower aspiring entrepreneurs on their journey from idea to impact.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="text-center flex flex-col items-center group"
            variants={visionMissionVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-[#1a1a36] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-shadow duration-300"
              variants={iconVariants}
            >
              <FaRocket className="text-[#f8f9fa] text-4xl" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <p className="text-gray-500 text-md leading-relaxed max-w-md mb-6 text-justify">
              To train the next generation of tech founders through practice-based founder-led education that emphasises impact with growth
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission Grid
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:px-64 py-12">
        <div className="transform transition duration-700 hover:scale-105 fade-in">
          <img
            src={img2}
            alt="Group Project"
            className="w-full h-64 md:h-full object-cover opacity-70"
          />
        </div>

        <div className="bg-[#10104B] text-white flex flex-col justify-center items-center p-6 md:p-8  transform transition duration-700 hover:-translate-y-2 fade-in">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">Our Vision</h2>
          <p className="text-start max-w-xl mb-6 text-sm sm:text-base">
           To be a cornerstone of entrepreneurial excellence at IIT Madras by providing structured academic support and inspiring the next generation of startup founders. Through innovative programs and hands-on learning, we aim to nurture and empower aspiring entrepreneurs on their journey from idea to impact.
          </p>
        </div>

        <div className="bg-[#10104B] text-white flex flex-col justify-center items-center p-6 md:p-8  transform transition duration-700 hover:-translate-y-2 fade-in">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">Our Mission</h2>
          <p className="text-start max-w-xl mb-6 text-sm sm:text-base">
           To train the next generation of tech founders through practice-based founder-led education that emphasises impact with growth
          </p>
        </div>

        <div className="transform transition duration-700 hover:scale-105 fade-in">
          <img
            src={img3}
            alt="Students Studying"
            className="w-full h-64 md:h-full object-cover opacity-80 "
          />
        </div>
      </div> */}

      <div>
        <div className="flex items-center justify-center text-4xl font-bold mt-16 mb-8 font-dmsans text-green-600">
          Our Sponsors
        </div>

        <Marquee gradient={false}>
          <div className="flex items-center gap-14 px-4 py-2">
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img5} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img6} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img7} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img9} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img10} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img11} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img12} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img13} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 w-40 h-28 flex items-center justify-center">
              <img src={img14} alt="supporter-logo" className="max-h-24 w-auto object-contain" />
            </div>
          </div>
        </Marquee>
      </div>

      {/* Startup Fundraising Section */}
      <section className="px-6 md:px-24 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a36]">
                Startup Fundraising
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Showcasing student and alumni ventures that have raised external funding with support from the SIE ecosystem.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-stretch">
            {/* Stats column */}
            <div className="lg:col-span-2 space-y-4">
              {fundingStats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 bg-white px-5 py-4 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {Icon && (
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-700">
                          <Icon className="text-sm" />
                        </span>
                      )}
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-[#1a1a36] mt-1">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Funded startups marquee – scrolling cards with details */}
            <div className="lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-7 flex flex-col items-center">
              <div className="w-full flex justify-center mb-4">
                <h3 className="text-xl font-semibold text-[#1a1a36] text-center">
                  Funded startups from our ecosystem
                </h3>
              </div>
              <div className="w-full">
                <Marquee gradient={false} speed={40} pauseOnHover>
                  <div className="flex gap-5 px-2">
                    {fundedStartups.map((startup, idx) => (
                      <div
                        key={idx}
                        className="w-72 flex-shrink-0 rounded-xl border border-gray-100 px-5 py-4 hover:border-amber-400/70 hover:bg-amber-50/40 transition-colors flex flex-col gap-3 min-h-[130px]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                            {startup.logo ? (
                              <img
                                src={startup.logo}
                                alt={`${startup.name} logo`}
                                className="h-full w-full object-contain p-1"
                                loading="lazy"
                              />
                            ) : (
                              <span className="text-xs font-bold text-[#1a1a36]">
                                {getInitials(startup.name)}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-[#1a1a36] truncate">
                              {startup.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate flex items-center gap-1">
                              <FaIndustry className="text-[10px] shrink-0" />
                              {startup.focus}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[11px] sm:text-xs">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            <FaRupeeSign className="text-[10px]" />
                            {startup.amount}
                          </span>
                          <span className="flex items-center gap-1.5 text-gray-500 uppercase tracking-wide">
                            <FaChartLine className="text-[10px]" />
                            {startup.stage}
                          </span>
                        </div>
                        {(startup.program || startup.year) && (
                          <div className="flex items-center justify-between text-[11px] text-gray-500">
                            <span className="flex items-center gap-1.5 truncate">
                              <FaBuilding className="text-[10px] shrink-0" />
                              {startup.program}
                            </span>
                            {startup.year && (
                              <span className="ml-2 shrink-0 flex items-center gap-1">
                                <FaCalendarAlt className="text-[10px]" />
                                {startup.year}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section - Redesigned (same width as Funding section) */}
      <motion.section
        className="relative py-16 px-6 md:px-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Simple light background, no gradients */}
        <div className="absolute inset-0 bg-[#f7f7f9]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-[#1a1a36]" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.header
            className="mb-10"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-amber-500 rounded" /> Recognition
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a36]">
                  Awards & Achievements
                </h2>
                <p className="text-gray-600 mt-2 max-w-xl">
                  Celebrating excellence in innovation and entrepreneurship at IIT Madras
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setCurrentAwardIndex((i) => (i - 1 + awardsData.length) % awardsData.length)}
                  className="p-3 rounded-full border-2 border-[#1a1a36]/20 text-[#1a1a36] hover:bg-[#1a1a36] hover:text-amber-400 hover:border-[#1a1a36] transition-all"
                  aria-label="Previous award"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
                <span className="text-sm font-medium text-gray-500 min-w-[4rem] text-center">
                  {currentAwardIndex + 1} / {awardsData.length}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentAwardIndex((i) => (i + 1) % awardsData.length)}
                  className="p-3 rounded-full border-2 border-[#1a1a36]/20 text-[#1a1a36] hover:bg-[#1a1a36] hover:text-amber-400 hover:border-[#1a1a36] transition-all"
                  aria-label="Next award"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </div>
            </div>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-stretch">
            {/* Main award card - certificate style */}
            <motion.div
              key={currentAwardIndex}
              className="lg:col-span-4 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {(() => {
                const award = awardsData[currentAwardIndex];
                const Icon = award.icon;
                return (
                  <div className="relative flex-1 flex flex-col rounded-2xl bg-white border border-gray-200/80 shadow-lg overflow-hidden">
                    {/* Top bar (solid theme color, no gradient) */}
                    <div className="h-2 bg-[#1a1a36]" />
                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a36] text-amber-400 shadow-md">
                          <Icon className="text-xl" />
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                          {award.year}
                        </span>
                        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                          {award.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a36] mb-3 leading-tight">
                        {award.title}
                      </h3>
                      <div className="text-gray-600 leading-relaxed flex-1">
                        <p className="mb-3">{award.description}</p>
                        {award.winners && (
                          <div>
                            <p className="font-semibold text-gray-700 mb-2">Winners:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              {award.winners.map((winner, index) => (
                                <li key={index}>{winner}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>

            {/* Image + dots */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md aspect-square max-h-[320px] lg:max-h-none">
                <img
                  src={awardsData[currentAwardIndex]?.image}
                  alt="Awards & recognition"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {awardsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentAwardIndex(idx)}
                    className={`rounded-full transition-all duration-200 ${idx === currentAwardIndex
                      ? "h-2.5 w-8 bg-[#1a1a36]"
                      : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Award ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Initiatives Section */}
      <div className="px-6 md:px-24 py-20 space-y-20">
        {[
          {
            title: "Nirmaan",
            description:
              " Nirmaan, The Pre-incubator of IIT Madras, is the first of its kind dedicated pre-incubator on a college campus in the country. Its primary objective is to provide technical guidance and business mentorship to student teams, assisting them in refining their business ideas to achieve both technical robustness and economic viability. In addition to offering a well-equipped collaborative workspace and essential financial support, Nirmaan cultivates a supportive and encouraging environment conducive to innovation. Furthermore, the program facilitates valuable connections between nascent startups and experienced mentors who provide specialized technical and business insights, crucial for translating ideas into successful businesses.",
            image: nirmaanImg,
            link: "https://nirmaan.iitm.ac.in/",
            bg: "bg-gradient-to-r from-green-100 via-white to-green-50",
            accent: "text-green-600",
            glass: "backdrop-blur-xl bg-white/40",
          },
          {
            title: "Centre for Innovation (CFI)",
            description:
              "The Centre for Innovation (CFI) at IIT Madras is a pioneering student-led `Tinker Lab` and one of the oldest academic entities dedicated to “Doing by Learning”. Established by the alumni class of 1981, CFI has expanded over the past fifteen years into a central hub focusing on nurturing innovation and technological inventions. The centre is structured around approximately 14 'Hobby' clubs and 8 competition teams, complemented by additional teams offering expertise in branding, engagement, finance, and web operations/coding support.",
            image: cfiImg,
            link: "https://cfi.iitm.ac.in/",
            bg: "bg-gradient-to-r from-red-100 via-white to-red-50",
            accent: "text-red-600",
            glass: "backdrop-blur-xl bg-white/40",
          },
        ].map((sec, index) => (
          <div
            key={index}
            className={`${sec.bg} rounded-3xl shadow-xl overflow-hidden relative p-8 md:p-14 flex flex-col md:flex-row items-center gap-10`}
          >
            <div className={`md:w-2/3 z-10 ${sec.glass} rounded-2xl p-6 md:p-10 shadow-md`}>
              <h2 className={`text-3xl md:text-4xl font-semibold ${sec.accent}`}>
                {sec.title}
              </h2>
              <p className="text-gray-700 mt-4 text-lg leading-relaxed text-justify">
                {sec.description}
              </p>
              <a
                href={sec.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-block px-6 py-2 rounded-full text-white font-medium ${index % 2 === 0
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
                  } transition`}
              >
                Explore More
              </a>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover scale-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#10104B] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Popup Modal */}
      {/* {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md mx-4 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-red-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            <img
              src={img3}
              alt="Popup Image"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )} */}

      <Footer />
    </div>
  );
};

export default Home;
