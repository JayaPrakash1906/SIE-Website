import React, { useState, useEffect } from "react";
import { FaArrowUp, FaQuoteLeft } from "react-icons/fa";
import Navbar from "../components/navbar";
import img1 from "../assets/hero-bg.jpg"; // This is an image of Prof. Kamakoti Veezhinathan
import img2 from "../assets/profsatyav5.webp";
import nirmaanAdvisorImg from "../assets/murugaiyan.png";
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

      {/* Intro Section - Now always visible */}
      <section className="text-center py-12 px-4 bg-white border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          About Our School
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg text-justify">
          We provide an academic footprint to IITM’s extensive startup ecosystem.
          Through regular and ‘professor of practice’ faculty, we aim to provide
          structured entrepreneurship education to startup founders and
          corporates. Our flagship programmes include the maker space CFI,
          pre-incubator Nirmaan, MS in Entrepreneurship, UG & PG FIR and EIR
          programmes along with seed funding and mentorship.
        </p>
      </section>
      {/* Messages Section */}
      <div className="space-y-16 px-4 md:px-16 py-10">
        {/* Director's Message */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 flex items-center justify-center p-6" style={{ backgroundColor: 'rgba(121, 31, 25, 0.12)' }}>
                <img
                  src={img1}
                  alt="Director"
                  className="w-40 h-40 object-cover rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-3/5 p-8 bg-[#f9fafb] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 text-[#791f19]">
                  <FaQuoteLeft className="text-2xl" />
                  <h2 className="text-3xl font-bold">Director's Message</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The School of Innovation & Entrepreneurship provides the academic foundation to IITM’s ‘ I&E Stack’ and will train the coming generation of startup founders who will produce distinctive solutions addressing some of the most pressing industrial and societal challenges. SIE at IIT Madras is one of our key initiatives towards the vision of Viksit Bharat 2047 and is aligned with visionary programmes such as Make in India, Swacch Bharat and NEP.
                </p>
                <p className="text-right font-semibold text-gray-800 mt-4">
                  - Prof. Kamakoti Veezhinathan
                </p>
                <p className="text-right text-sm text-gray-600">
                  Director, IIT Madras
                </p>
              </div>
            </div>

        {/* Head of School's Message */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row-reverse overflow-hidden">
              <div className="md:w-2/5 bg-blue-50 flex items-center justify-center p-6">
                <img
                  src={img2}
                  alt="Advisor"
                  className="w-40 h-40 object-cover object-top rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-3/5 p-8 bg-[#f9fafb] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 text-blue-700">
                  <FaQuoteLeft className="text-2xl" />
                  <h2 className="text-3xl font-bold">Head of School's Message</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The School of Innovation and Entrepreneurship (SIE) at IIT Madras is leading its transformation into India’s foremost entrepreneurial university. Our vision is to be among the top 5 global entrepreneurial universities and to propel India as the top 3 deep-tech science based start-up nation. SIE is pioneering an active venture creation model, where research to revenue is supported at every step through our unique innovation stack consisting of tinkering labs, deep-tech centres of excellence (COEs), pre-incubation, lab-to-market education and venture studios.
                </p>
                <p className="text-right font-semibold text-gray-800 mt-4">
                  - Prof. Satyanarayanan Seshadri
                </p>
                <p className="text-right text-sm text-gray-600">
                  Head, School of Innovation and Entrepreneurship
                </p>
              </div>
            </div>

        {/* Nirmaan Advisor's Message */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 bg-emerald-50 flex items-center justify-center p-6">
                <img
                  src={nirmaanAdvisorImg}
                  alt="Nirmaan Advisor"
                  className="w-40 h-40 object-cover object-top rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-3/5 p-8 bg-[#f9fafb] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 text-green-700">
                  <FaQuoteLeft className="text-2xl" />
                  <h2 className="text-3xl font-bold">Nirmaan Advisor's Message</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  NIRMAAN, the pre-incubator at IIT Madras, plays a key role in supporting students, researchers, and alumni who are taking their first steps into entrepreneurship. It helps turn early ideas and prototypes into real startup opportunities by offering mentorship, seed funding, prototyping support, and access to the wider IIT Madras startup ecosystem. In NIRMAAN, the focus is also to provide a closely working with all aspiring founders—helping them refine their ideas, validate their technology, and think through peer learning, business and market challenges—while supporting their journey from concept to a strong, scalable venture.
                </p>
                <p className="text-right font-semibold text-gray-800 mt-4">
                  - Prof. Murugaiyan Amirthalingam
                </p>
                <p className="text-right text-sm text-gray-600">
                  Advisor, Nirmaan
                </p>
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
