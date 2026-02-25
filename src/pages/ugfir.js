import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

// Images
import img1 from "../assets/UGFIR/ugfir_2020-1.jpg";
import img2 from "../assets/UGFIR/ugfir_2020-2.jpg";
import img3 from "../assets/UGFIR/ugfir_2020-3.jpg";
import img4 from "../assets/UGFIR/ugfir_2022-1.jpg";
import img5 from "../assets/UGFIR/ugfir_2023-1.jpg";
import img6 from "../assets/UGFIR/ugfir_2023-2.jpg";
import img7 from "../assets/UGFIR/ugfir_2023-3.jpg";
import img8 from "../assets/UGFIR/ugfir_2023-4.jpg";
import img9 from "../assets/UGFIR/ugfir_2023-5.jpg";
import img10 from "../assets/UGFIR/ugfir_2024-1.jpg";
import img11 from "../assets/UGFIR/ugfir_2024-2.jpg";
import img12 from "../assets/UGFIR/ugfir_2024-3.jpg";
import img13 from "../assets/UGFIR/ugfir_2024-4.png";
import img14 from "../assets/UGFIR/ugfir_2024-5.jpg";
import img15 from "../assets/UGFIR/ugfir_2024-6.jpg";
import img16 from "../assets/UGFIR/ugfir_2024-7.jpg";
import img17 from "../assets/UGFIR/ugfir_2024-8.jpg";
import img18 from "../assets/UGFIR/ugfir_2024-9.jpg";
import img19 from "../assets/UGFIR/ugfir_2024-10.jpg";
import img20 from "../assets/UGFIR/ugfir_2024-11.jpg";
import img21 from "../assets/UGFIR/ugfir_2024-12.jpg";
import img22 from "../assets/UGFIR/ugfir_2024-13.jpg";
import img23 from "../assets/UGFIR/ugfir_2024-14.jpg";
import img24 from "../assets/UGFIR/ugfir_2025-2.jpg";
import img25 from "../assets/UGFIR/ugfir_2025-3.jpg";
import img26 from "../assets/UGFIR/ugfir_2025-4.jpg";
import img27 from "../assets/UGFIR/ugfir_2025-5.jpg";
import img28 from "../assets/UGFIR/ugfir_2025-6.jpg";
import img29 from "../assets/UGFIR/ugfir_2025-7.jpg";
import img30 from "../assets/UGFIR/ugfir_2025-8.jpg";
const cohortData = {
  2025: [
    {
      img: img13,
      name: "G. Sri Venkatesh",
      role: "Co-Founder",
      company: "Krishaka",
      link: "https://www.linkedin.com/in/g-sri-venkatesh-618905249/",
    },
    {
      img: img24,
      name: "Yeshwanth Nayak",
      role: "Founder",
      company: "CollabV",
      link: "https://www.linkedin.com/in/yeshwanth-nayak-66166a244/",
    },
    {
      img: img25,
      name: "Prakhar Maheshwari",
      role: "Co-Founder",
      company: "Preciqube",
      link: "https://www.linkedin.com/in/prakhar-maheshwari-b0b797204 ",
    },
    {
      img: img26,
      name: "Rishabh Sharma",
      role: "Founder",
      company: "Panoculon Labs",
      link: "https://www.linkedin.com/in/goldenrishabh/",
    },
    {
      img: img27,
      name: "Sreeraj R",
      role: "Founder",
      company: "Panoculon Labs",
      link: "https://www.linkedin.com/in/sreerajrenjith/",
    },
    {
      img: img28,
      name: "Asfaq Jalal",
      role: "Co-Founder",
      company: "QPo",
      link: "https://www.linkedin.com/in/asfaqjalal/",
    },
    {
      img: img29,
      name: "Anil Kumar",
      role: "Founder",
      company: "Runverve",
      link: "https://www.linkedin.com/in/anilkumartalari/",
    },
    {
      img: img30,
      name: "Rakshin Ramesh",
      role: "Founder",
      company: "Pravahan",
      link: "https://www.linkedin.com/in/rakshin-ramesh-ab9025228/",
    },
  ],
    2024: [
    {
      img: img10,
      name: "Jayanth K",
      role: "Founder",
      company: "Riverline",
      link: "https://www.linkedin.com/in/jayanth151002/",
    },
    {
      img: img11,
      name: "Phalgun Vyas",
      role: "Founder",
      company: "Sukoon",
      link: "http://linkedin.com/in/phalgunvyas",
    },
    {
      img: img12,
      name: "Shreepoorna S Rao",
      role: "Founder",
      company: "Arctus Aerospace",
      link: "https://www.linkedin.com/in/shreepoornasrao/",
    },
    {
      img: img13,
      name: "Vijai Suraj",
      role: "Founder",
      company: "Demeter",
      link: "https://www.linkedin.com/in/vijaisuraj/",
    },
    {
      img: img14,
      name: "Anirudh Varna",
      role: "CTO",
      company: "Plenome",
      link: "https://www.linkedin.com/in/anirudh-varna-b5b0451b9/",
    },
    {
      img: img15,
      name: "Prakash Dev",
      role: "Founder",
      company: "Electra Wheeler",
      link: "https://www.linkedin.com/in/prakash1202/",
    },
    {
      img: img16,
      name: "Easwar Veeragandham",
      role: "Founder",
      company: "Krishaka",
      link: "https://www.linkedin.com/in/easwar-veeragandham-132367194/",
    },
    {
      img: img17,
      name: "Tamminaina Sai Gowtham",
      role: "Founder",
      company: "Seat of Joy",
      link: "https://www.linkedin.com/in/sai-gowtham-tamminaina-b847311b9/",
    },
    {
      img: img18,
      name: "Sarthak Saurav",
      role: "Founder",
      company: "Matterize",
      link: "https://www.linkedin.com/in/sarthak-saurav/",
    },
    {
      img: img19,
      name: "Amit Kumar",
      role: "Founder",
      company: "Bharat Dream and Devplus",
      link: "https://www.linkedin.com/in/amitkumariitm/",
    },
    {
      img: img20,
      name: "Bindusara Reddy",
      role: "Founder",
      company: "Quark",
      link: "https://www.linkedin.com/in/bindusara-reddy-890b131b9/",
    },
    {
      img: img21,
      name: "Sujay Srivastava",
      role: "Founder",
      company: "Nexuscare",
      link: "https://www.linkedin.com/in/sujaysriv/",
    },
    {
      img: img22,
      name: "Sujith Kumar",
      role: "Founder",
      company: "Kinople",
      link: "www.linkedin.com/in/sujithkumar505",
    },
    {
      img: img23,
      name: "Aditya Ravindran",
      role: "Founder",
      company: "Quark",
      link: "https://www.linkedin.com/in/aditya-ravindran-1b734b211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: img13,
      name: "Mohammad Ali",
      role: "Founder",
      company: "Karobar",
      link: "https://www.linkedin.com/company/karobar-ai/",
    },
  ],
  2023: [
    {
      img: img5,
      name: "Vibhor Jain",
      role: "Co-Founder",
      company: "AeroDome Technologies",
      link: "https://www.linkedin.com/in/vibhor-jain3/",
    },
    {
      img: img6,
      name: "LOKESH KABDAL",
      role: "Co-Founder",
      company: "AeroDome Technologies",
      link: "https://www.linkedin.com/in/lokesh-kabdal/",
    },
    {
      img: img7,
      name: "ASHOK KUMAR",
      role: "Co-Founder",
      company: "Subspace - Grow90",
      link: "https://www.linkedin.com/in/ashok-kumar-3168221a9/",
    },
    {
      img: img8,
      name: "Raghav Talwar",
      role: "Founder",
      company: "Stealth",
      link: "https://www.linkedin.com/in/rgvtalwar/",
    },
    {
      img: img9,
      name: "Akash Anand",
      role: "Co-Founder",
      company: "Clueso",
      link: "https://www.linkedin.com/in/theakashanand/",
    },
  ],
  2022: [
    {
      img: img4,
      name: "PRAJWAL PRAKASH",
      role: "Founder",
      company: "Clueso",
      link: "https://www.linkedin.com/in/prajwalprakash2000/",
    },
  ],
  2020: [
    {
      img: img1,
      name: "Yashwanth Kumar",
      role: "Founder",
      company: "EdarLabs",
      link: "https://www.linkedin.com/in/yashwanth-kumar-b-57876511b/",
    },
    {
      img: img2,
      name: "Rishabh Verma",
      role: "Founder",
      company: "UrbanMatrix",
      link: "https://www.linkedin.com/in/rishabh-verma-a14942133/",
    },
    {
      img: img3,
      name: "Karan Sachin Bhanushali",
      role: "Founder",
      company: "DbyT Dynamics",
      link: "https://www.linkedin.com/in/karanbhanushali55/]",
    },
  ],
};

const Ugfir_home = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-blue-900">
          UG Founder in Residence (UGFIR) Program
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4">
          About the Program
        </h1>
        <p className="text-sm sm:text-base text-justify mb-4">
          Starting a business while balancing college life and planning for the
          future is no easy task. The{" "}
          <strong>UG Founder in Residence (UG–FIR)</strong> program at IIT
          Madras is designed to empower recent graduates to pursue their
          entrepreneurial ambitions without financial or logistical constraints.
        </p>
        <p className="text-sm sm:text-base text-justify mb-4">
          This unique initiative offers a monthly stipend to help founders focus
          entirely on building their startups. Backed by the IITM alumni network
          and the Office of Alumni & Corporate Relations, the UG–FIR program
          provides a nurturing environment for young entrepreneurs to
          thrive—offering access to mentorship, targeted workshops, and the
          wider IIT Madras innovation ecosystem.
        </p>
        {/* <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-black mt-8 mb-2">Note</h2> 
        <p className="text-sm sm:text-base text-justify mb-12 font-semibold">
        If you are a recent UG graduate from IIT Madras with a startup idea and the drive to build something impactful, 
        apply for the UG–FIR program and take your venture to the next level.
        </p> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Program Highlights
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 ">
          <li>
            <strong>Monthly Stipend:</strong> ₹20,000
          </li>
          <li>
            <strong>Duration:</strong> 6 months (extendable up to 1 year based
            on performance review)
          </li>
          <li>
            <strong>Support Includes:</strong> Accommodation, dedicated
            mentorship, and access to Nirmaan’s resources and infrastructure
          </li>
          <li>
            <strong>Eligibility:</strong> Open to recent undergraduate graduates
            from IIT Madras who are startup founders, preferably pre-incubated
            at Nirmaan, IITM
          </li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Application Process
        </h1>
        <ul className="list-disc pl-6 text-sm sm:text-base text-justify space-y-2 ">
          <li>
            <strong>How to Apply:</strong> Click the “Apply Now” button on the
            UG–FIR homepage to access the application form
          </li>
          <li>
            <strong>Requirements:</strong> Submit your personal details and
            upload your pitch deck as part of the application
          </li>
          <li>
            <strong>Selection Timeline:</strong> Applications will be reviewed,
            and results will be announced in the{" "}
            <strong>first week of June</strong>
          </li>
          <li>
            <strong>Onboarding:</strong>Selected fellows will be onboarded
            shortly after the results are announced{" "}
          </li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-4 mt-6">
          Why Apply?
        </h1>
        <ul className="list-decimal list-semibold pl-6 text-sm sm:text-base text-justify space-y-2 mb-16 ">
          <li>
            Work full-time on your startup with financial stability through a
            monthly stipend
          </li>
          <li>
            Be part of a vibrant community of innovators and receive mentorship
            from seasoned entrepreneurs and IITM alumni{" "}
          </li>
          <li>
            {" "}
            Gain access to co-working space, capacity-building workshops, and
            valuable networking opportunities within the IIT Madras
            entrepreneurial ecosystem
          </li>
        </ul>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32 font-dmsans">
        <p className="text-sm sm:text-base text-justify mb-4 mt-4">
          If you’re a recent IIT Madras undergraduate with a promising startup
          idea and the drive to build something impactful,
          <strong> Apply now</strong> for the UG–FIR program and take your
          venture to the next level.
        </p>
        <p className="text-sm sm:text-base text-justify mb-4 mt-4">
          <div className="flex justify-center items-center text-center">
            <strong>Applications are now open – best of luck!</strong>
          </div>
        </p>
      </div>

      {/* --- Past Recipients Section --- */}
      <div className="text-center py-10 px-4 sm:px-6 mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 font-dmsans">
          Fellowship Gallery
        </h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none"
        >
          {Object.keys(cohortData)
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>

      <div className="px-6 sm:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cohortData[selectedYear]?.length > 0 ? (
            cohortData[selectedYear].map((member, index) => (
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
                <h3 className="text-lg font-semibold text-blue-700">
                  {member.name}
                </h3>

                <div className="flex justify-center gap-4 mt-2">
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin
                        size={24}
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                      />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <FaGlobe
                        size={22}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      />
                    </a>
                  )}
                </div>

                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm font-medium text-gray-500">
                  {member.company}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No data available for {selectedYear}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ugfir_home;
