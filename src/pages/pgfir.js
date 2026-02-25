import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import img1 from "../assets/PGFIR/kgmg2020-1.jpg";
import img2 from "../assets/PGFIR/kgmg2020-2.jpg";
import img3 from "../assets/PGFIR/kgmg2020-3.jpg";
import img4 from "../assets/PGFIR/kgmg2020-4.jpg";
import img5 from "../assets/PGFIR/kgmg2020-5.jpg";
import img6 from "../assets/PGFIR/kgmg2020-6.jpg";
import img7 from "../assets/PGFIR/kgmg2021-1.jpg";
import img8 from "../assets/PGFIR/kgmg2021-2.png";
import img9 from "../assets/PGFIR/kgmg2021-3.jpg";
import img10 from "../assets/PGFIR/kgmg2022-1.jpg";
import img11 from "../assets/PGFIR/kgmg2022-2.jpg";
import img12 from "../assets/PGFIR/kgmg2023-1.jpg";
import img13 from "../assets/PGFIR/kgmg2023-2.jpg";
import img14 from "../assets/PGFIR/kgmg2023-3.jpg";
import img15 from "../assets/PGFIR/kgmg2023-4.jpg";
import img16 from "../assets/PGFIR/kgmg2024-1.jpg";
import img17 from "../assets/PGFIR/kgmg2025-1.jpg";
import img18 from "../assets/PGFIR/kgmg2025-2.jpg";
import img19 from "../assets/PGFIR/kgmg2025-3.jpg";
import img20 from "../assets/PGFIR/kgmg2025-4.jpg";


const cohortData = {
  2025: [
    {
      img: img17,
      name: "Sumukha V Nadig",
      role: "MS",
      company: "",
      link: "https://www.linkedin.com/in/sumukhanadig8/",
    },
    {
      img: img18,
      name: "Shubham Gupta",
      role: "MS",
      company: "",
      link: "https://www.linkedin.com/in/shubhamgupta45/",
    },
    {
      img: img19,
      name: "Praveen Venkatesh C",
      role: "MS",
      company: "",
      link: "https://www.linkedin.com/in/praveen-venkatesh-4425a7199/",
    },
    {
      img: img20,
      name: "Rahul Kumar Gupta",
      role: "Master's Degree",
      company: "",
      link: "https://www.linkedin.com/in/rahul-kumar-gupta-a836b41b5/",
    },
  ],
  2024: [
    {
      img: img16,
      name: "Muthu Kumar K",
      role: "PhD",
      company: "",
      link: "https://www.linkedin.com/company/getrecontact",
    },
  ],
  2023: [
    {
      img: img12,
      name: "Vijayaraja R",
      role: "MS in Entrepreneurship, Blockchain for Healthcare",
      company: "",
      link: "https://www.linkedin.com/in/vijayaraja-rathinasamy/",
    },
    {
      img: img13,
      name: "Panchal Nikhilkumar Rajnikantbhai",
      role: "MS, Chemical Engineering",
      company: "",
      link: "https://www.linkedin.com/in/nikhilpanchal/?originalSubdomain=in",
    },
    {
      img: img14,
      name: "ARAVIND I B",
      role: "MS, Aerospace, Aeronautical and Astronautical/Space Engineering",
      company: "",
      link: "https://www.linkedin.com/in/aravindib/?originalSubdomain=in",
    },
    {
      img: img15,
      name: "Sourav Singha Roy",
      role: "PhD, Organometallics and Polymer",
      company: "",
      link: "https://www.linkedin.com/in/sourav-singha-roy-903a61216/?originalSubdomain=in",
    },
  ],
  2022: [
    {
      img: img10,
      name: "Balamurugan L ",
      role: "MS, Metallurgical Engineering",
      company: "",
      link: "https://www.linkedin.com/in/intelaegis/?originalSubdomain=in",
    },
    {
      img: img11,
      name: "SivaSubramanian M",
      role: " MS , Entrepreneurship by research",
      company: "",
      link: "https://www.linkedin.com/in/sivasubramanian-m-71b070100/?originalSubdomain=in",
    },
  ],
  2021: [
    {
      img: img7,
      name: "Prabaharan T",
      role: "PhD ",
      company: "",
      link: "https://www.linkedin.com/in/prabaharan-thiruvengetam-50452b88/?originalSubdomain=uk",
    },
    {
      img: img8,
      name: "Vijaykumar Pediredla",
      role: "PhD.Telerobotics, Haptics and Advanced control system design",
      company: "",
      link: "https://www.linkedin.com/in/vijay-kumar-pediredla-ph-d-657435112/?originalSubdomain=ca",
    },
    {
      img: img9,
      name: " Srinivasa Rakesh ",
      role: "PhD ",
      company: "",
      link: "https://www.linkedin.com/in/srinivasarakesh/?originalSubdomain=in",
    },
  ],
  2020: [
    {
      img: img1,
      name: "  Gautam R  ",
      role: "MS, Integrated Circuit Design",
      company: "",
      link: "https://www.linkedin.com/company/edarlabs/",
    },
    {
      img: img2,
      name: "Suseendiran Ravichandran ",
      role: "PhD, Chemical Engineering",
      company: "",
      link: "https://www.linkedin.com/in/srsuseendiran/?originalSubdomain=in",
    },
    {
      img: img3,
      name: "Dhivyaraja Kumaran ",
      role: "PhD, Atomization & Aerosol Transport ",
      company: "",
      link: "https://www.linkedin.com/in/dhivyaraja/?originalSubdomain=in",
    },
    {
      img: img4,
      name: "MD Homaidur Rahman",
      role: "PhD ",
      company: "",
      link: "https://www.linkedin.com/in/md-homaidur-rahman/",
    },
    {
      img: img5,
      name: "Vipul Dogra",
      role: "PhD ",
      company: "",
      link: "https://www.linkedin.com/in/vipuldogra2126/",
    },
    {
      img: img6,
      name: "Kancharla Surendra Reddy",
      role: "PhD, Transportation Systems Engineering ",
      company: "",
      link: "https://www.linkedin.com/in/surendrark92/",
    },
  ],
};

const Pgfir_home = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div>
      <Navbar />
      <div className="bg-blue-100 py-2 overflow-hidden">
  <div className="animate-marquee whitespace-nowrap flex items-center gap-4">
    
    <span className="text-lg font-semibold font-dmsans">
      Applications are welcome for the PGFIR 2026
    </span>

    <a
      href="https://your-application-link.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-blue-900 transition duration-300 ml-3"
    >
      Apply Now
    </a>

  </div>
</div>

      <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-blue-900">
          PG Founder in Residence (PGFIR) Program
        </h2>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4">
          About the Program
        </h1>
        <p className="text-sm sm:text-base text-justify mb-4">
        The K. Ganesh and Meena Ganesh Scholarship for Entrepreneurship Development (PG–FIR) is a flagship initiative at IIT Madras, 
        established to help postgraduate scholars transform their research into viable, market-ready ventures. Targeted at M.S. and PhD scholars 
        who have recently completed their thesis submission, this scholarship provides crucial financial support and resources to those committed 
        to commercialising their research outcomes.
        </p>
        <p className="text-sm sm:text-base text-justify mb-4">
        By offering a monthly stipend and access to the entrepreneurial ecosystem at IIT Madras, the scholarship enables scholars to focus fully on
         translating their academic work into impactful startups. The program is open to those who have submitted their synopsis within the past six 
         months and are not receiving any other project funding or HTRA support. Through this initiative, IIT Madras aims to bridge the gap between
          research and real-world application, empowering the next generation of deep-tech entrepreneurs
        </p>
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-black mt-8 mb-2 font-dmsans">Note</h2> 
        <p className="text-sm sm:text-base text-justify mb-12 font-semibold font-dmsans">
        If you are a postgraduate at IIT Madras with a vision to transform your research into a viable business, the PG–FIR program offers the ideal launchpad.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Program Details
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 ">
          <li>
            <strong>Purpose:</strong> Enable postgraduates to focus on building
            startups rooted in their research, by providing financial support
            and a conducive environment for venture creation
          </li>
          <li>
            <strong>Support:</strong> Monthly stipend and residence, allowing
            scholars to dedicate themselves fully to their entrepreneurial
            journey without financial distractions
          </li>
          <li>
            <strong>Mentorship:</strong> Access to expert guidance, alumni
            networks, and the resources of Nirmaan and IIT Madras
          </li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans mt-8">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4">
          Scholarship Details
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-700">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left text-sm sm:text-base font-medium text-blue-800 px-4 py-2 border border-blue-700">Category</th>
                <th className="text-left text-sm sm:text-base font-medium text-blue-800 px-4 py-2 border border-blue-700">Monthly Stipend</th>
                <th className="text-left text-sm sm:text-base font-medium text-blue-800 px-4 py-2 border border-blue-700">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  M.S. Scholars
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  ₹25,000
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  6 months (extendable by another 6 months)
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  Ph.D. Scholars
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  ₹30,000
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  6 months (extendable by another 6 months)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  MS (Entrepreneurship) Scholars
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  ₹20,000
                </td>
                <td className="px-4 py-2 border border-blue-700 text-sm sm:text-base">
                  Upto 2 Years
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Eligibility
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 ">
          <li>
            {" "}
            Recently graduated or soon-to-be graduating M.S. or PhD scholars from IIT Madras who intend to commercialise their research.
          </li>
          <li>
            {" "}
            Scholars enrolled in the MS (Entrepreneurship) program.
          </li>
          <li>
            {" "}
            Applicants must have submitted their synopsis within the past 6 months (for M.S./PhD).
          </li>
          <li>
            
          Applicants should not be receiving any HTRA or other project funding
          </li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Application Process
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 ">
          <li><strong>Application Release:</strong> Applications are typically released via an online form (Google Form).</li>
          <li><strong>Submission:</strong> Complete the application with personal details and a summary of your research-to-market plan.</li>
          <li><strong>Supporting Documents:</strong> Include documentation such as your research synopsis and commercialisation plan.</li>
          <li><strong>Deadline:</strong>The last date for submission is usually announced with the application release (previously April 15th)</li>
          <li><strong>Selection</strong> Applications are reviewed for entrepreneurial potential and alignment with the scholarship’s objectives.</li>
          <li><strong>Results Announcement:</strong>Selected scholars are notified after the review process.</li>
        </ul> 
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Why Apply?
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 mb-16 ">
          <li>Dedicate time and resources to focus on commercialising your research.</li>
          <li>Mentorship and networking with successful entrepreneurs and faculty.</li>
          <li>Access to Nirmaan’s pre-incubation support, workshops, and IITM’s entrepreneurial ecosystem</li>
          <li>Financial independence during the crucial transition from research to startup.</li>
        </ul> 
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
      <p className="text-sm sm:text-base text-justify mb-4 mt-4">
      If you are a postgraduate at IIT Madras with a vision to transform your research into a viable business, the PG–FIR program offers the ideal launchpad. 
      
        </p>
        <p className="text-sm sm:text-base text-justify mb-4 mt-4">
     
      <strong> Applications are now open – best of luck!</strong> 
        </p>
        </div>

      {/* Fellowship Gallery Section */}
    {/* Fellowship Gallery Section */}
<div className="text-center py-10 px-4 sm:px-6 mt-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 font-dmsans">
    Fellowship Gallery
  </h2>
</div>

{Object.keys(cohortData)
  .sort((a, b) => b - a)
  .map((year) => (
    <div key={year} className="px-6 sm:px-10 pb-16">
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6 ml-16">
        {year}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cohortData[year].map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-5 text-center"
          >
            <div className="relative mx-auto w-32 h-32 mb-4 overflow-hidden rounded-full">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover w-full h-full transition-all duration-500 hover:brightness-50"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-700">{member.name}</h3>
            <div className="flex justify-center gap-4 mt-2">
              {member.link && (
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={24} className="text-blue-400 hover:text-blue-600 transition-colors" />
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <FaGlobe size={22} className="text-gray-600 hover:text-gray-800 transition-colors" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm font-medium text-gray-500">{member.company}</p>
          </div>
        ))}
      </div>
    </div>
))}

    </div>
  );
};

<Footer />
export default Pgfir_home;
