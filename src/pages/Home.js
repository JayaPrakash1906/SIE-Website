import React, { useState, useEffect } from "react";
import {
  FaBullhorn,
  FaArrowUp,
  FaRocket,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/nirmaan.jpg";
import img2 from "../assets/vision.jpg";
import img3 from "../assets/mission.avif";
import img4 from "../assets/DSC.JPG";
import nirmaanImg from "../assets/nirmaan_pic.jpg";
import cfiImg from "../assets/agnirath.jpg";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const announcements = [
    <>
      <FaRocket className="inline text-red-500 mr-1" /> Launch of The School of Innovation & Entrepreneurship
      {" — "}
      <FaCalendarAlt className="inline text-blue-600 mr-1" /> 4th August 2025
      {" — "}
      <FaClock className="inline text-yellow-500 mr-1" /> 5:00 PM onwards
      {" — "}
      <FaMapMarkerAlt className="inline text-green-600 mr-1" /> Sudha & Shankar Innovation Hub
    </>
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

      {/* Vision & Mission Grid */}
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
      </div>

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
                className={`mt-6 inline-block px-6 py-2 rounded-full text-white font-medium ${
                  index % 2 === 0
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

      <Footer />
    </div>
  );
};

export default Home;
