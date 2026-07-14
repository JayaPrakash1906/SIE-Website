import React, { useState, useEffect } from "react";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/Staffs/prof.satya.jpg";
import img2 from "../assets/murugaiyan.png";
import img3 from "../assets/m anand.png";
import img4 from "../assets/Nandhini.jpeg";
import img5 from "../assets/Staffs/Veni (2).JPG"
import img6 from "../assets/Staffs/usha sriram.jpeg"
import img7 from "../assets/Staffs/sundarraj.jpg"
import img8 from "../assets/Staffs/Amrutha.jpg"
import img9 from "../assets/Staffs/Sriram.jpeg"
import img10 from "../assets/Staffs/suvanya.jpg"
import img11 from "../assets/Staffs/manikandan.jpeg"
import img12 from "../assets/Staffs/vela.jpeg"
import img13 from "../assets/Staffs/jp.jpg"


const teamMembers = [
  { name: "Prof. Satyanarayanan Seshadri ", role: "Head,SIE", image: img1, email: "head@sie.iitm.ac.in", objectFit: "contain" },
  { name: "Prof. Murugaiyan Amirthalingam", role: "Advisor,Nirmaan", image: img2, email: "advisor-nirmaan@sie.iitm.ac.in" },
  { name: "Prof. Manish Anand", role: "Advisor,CFI", image: img3, email: "advisor-cfi@sie.iitm.ac.in" },
  { name: "Ms.K.S Nandhini", role: "Chief Operating Officer", image: img4, email: "coo@sie.iitm.ac.in", objectFit: "contain" },
  { name: "Ms.Krishnaveni", role: "Finance Manager", image: img5, email: "finance-manager@sie.iitm.ac.in" },
  { name: "Ms.Usha Sriram", role: "Academic Liason Officer", image: img6, email: "acad@sie.iitm.ac.in", objectFit: "contain" },
  { name: "Mr.E.Sundarraj", role: "IP Manager", image: img7, email: "ip-manager@sie.iitm.ac.in" },
  { name: "Ms.Anjana U P", role: "Pre Incubation Coordinator ", image: null, email: "preincubation1@sie.iitm.ac.in" },
  { name: "Ms.Amrutha Narayanan", role: "Learning Development Coordinator ", image: img8, email: "ldc@sie.iitm.ac.in" },
  { name: "Mr.Sriram", role: "Technician ", image: img9, email: "technician1@sie.iitm.ac.in"},
  { name: "Ms.Suvanya ", role: "Technician(Safety & Inventory) ", image: img10, email: "technician2@sie.iitm.ac.in"},
  { name: "Mr.R.Manikandan", role: "Facility Manager", image: img11, email: "facility-manager@sie.iitm.ac.in"},
  { name: "Mr.Velankanni Robert", role: "Senoir Office Assistant ", image: img12, email: "facility1@sie.iitm.ac.in", objectFit: "top"},
  {name:  "Mr.Rajesh", role: "Office Assistant", image: null, email: ""},
  {name:  "Mr.Jaya Prakash M", role: "Tech Support", image: img13, email: "techsupport@sie.iitm.ac.in", objectFit: "top"}
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const OurTeam = () => {
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
      <section className="bg-slate-50 py-16 px-4 md:px-16 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Meet Our Team</h2>
          <p className="text-lg text-slate-500 mt-2 max-w-2xl mx-auto">
            The dedicated staff behind the School of Innovation & Entrepreneurship.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="relative w-full">
                <div className="w-full aspect-square rounded-md overflow-hidden bg-slate-200 flex items-center justify-center shadow-md">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full"
                      style={{ objectFit: member.objectFit || "cover", objectPosition: member.objectPosition || "center" }}
                    />
                  ) : (
                    <span className="text-5xl font-bold text-slate-500">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-bold text-[#10104B]">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  {member.role}
                </p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <FaEnvelope />
                    <span>{member.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
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

export default OurTeam;