import React, { useState, useEffect } from "react";
import { FaArrowUp, FaQuoteLeft } from "react-icons/fa";
import Navbar from "../components/navbar";
import img1 from "../assets/hero-bg.jpg";
import img2 from "../assets/Advisor_Message.png";
import Footer from "../components/footer";

const About = () => {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Intro Section */}
      <section className="text-center py-12 px-4 transition duration-700 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          About Our School
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-justify">
         We provide an academic footprint to IITM’s extensive startup evosystem. Through regular and ‘ professor of practice’ faculty we aim to provide structured entrepreneurship education to startup founders and corporates. Our flagship programme include the maker space CFI, pre-incubator Nirmaan, MS in Entrepreneurship, UG & PG FIR and EIR programmes along with seed funding and mentorship.
        </p>
      </section>

      {/* Director Section */}
      <div className="space-y-16 px-4 md:px-16 py-10">
      {/* Director's Message */}
      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-2/5 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-6">
          <img
  src={img1}
  alt="Director"
  className="w-40 h-40 object-cover rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
/>

        </div>
        <div className="md:w-3/5 p-8 bg-[#f9fafb] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2 text-blue-700">
            <FaQuoteLeft className="text-2xl" />
            <h2 className="text-3xl font-bold">Director's Message</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
             The School of Innovation & Entrepreneurship provides the academic foundation to IITM’s ‘ I&E Stack’ and will train the coming generation of startup founders who will produce distinctive solutions addressing some of the most pressing industrial and societal challenges. SIE at IIT Madras is one of our key initiatives towards the vision of Viksit Bharat 2047 and is aligned with visionary programmes such as Make in India, Swacch Bharat and NEP.
          </p>
           <p className="text-right font-semibold text-gray-800 mt-4">
            - Prof. Kamakoti Veezhinathan
          </p>
          {/* <button className="self-start bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 mt-2 rounded-lg transition">
            Read More
          </button> */}
        </div>
      </div>

      {/* Faculty Advisor's Message */}
      <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row-reverse overflow-hidden">
        <div className="md:w-2/5 bg-gradient-to-bl from-green-100 to-white flex items-center justify-center p-6">
          <img
  src={img2}
  alt="Advisor"
  className="w-40 h-40 object-cover rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
/>

        </div>
        <div className="md:w-3/5 p-8 bg-[#f9fafb] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2 text-green-700">
            <FaQuoteLeft className="text-2xl" />
            <h2 className="text-3xl font-bold">Head of School's Message</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
             We are setting up a world-class entrepreneurial training ecosystem that is ‘ by the founders for the founders’, and aim to be among the top entrepreneurial universities across the world within the coming decade.
          </p>
           <p className="text-right font-semibold text-gray-800 mt-4">
            - Prof. Prabhu Rajagopal
          </p>
          {/* <button className="self-start bg-green-600 hover:bg-green-700 text-white px-5 py-2 mt-2 rounded-lg transition">
            Read More
          </button> */}
        </div>
      </div>
    </div>

   
      {/* Scroll to Top Button */}
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

export default About;
