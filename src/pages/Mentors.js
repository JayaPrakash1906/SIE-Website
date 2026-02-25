import React, { useState, useEffect } from "react";
import { FaArrowUp, FaUser, FaLinkedin, FaChevronDown } from "react-icons/fa";
import img1 from "../assets/Mentor/director.png"
import img2 from "../assets/Mentor/profsatyav.jpg"
import img3 from "../assets/Mentor/pr.png"
import img4 from "../assets/Mentor/PS.jpeg"
import img5 from "../assets/Mentor/Mohanakrishnan.jpg"
import img6 from "../assets/Mentor/m anand.png"
import img7 from "../assets/Mentor/devadula.png"
import img8 from "../assets/Mentor/balas.png"
import img9 from "../assets/Mentor/Satyesh Kumar.jpg"
import img10 from "../assets/Mentor/sathya.png"
import img11 from "../assets/Mentor/Pradeep.png"
import img12 from "../assets/Mentor/sivaramakrishnan.jpg"
import img13 from "../assets/Mentor/viji.jpg"
import img14 from "../assets/Mentor/Abhijith.png"
import img15 from "../assets/Mentor/manivannan.jpg"
import img16 from "../assets/Mentor/basavaraj.png"
import img17 from "../assets/Mentor/sai_krishnan.jpg"
import img18 from "../assets/Mentor/Pattabi.png"
import img19 from "../assets/Mentor/pandiyan.jpg"
import img20 from "../assets/Mentor/lalithambika.jpg"
import img21 from "../assets/Mentor/dhamodharan.jpg"
import img22 from "../assets/Mentor/Prof. Milind Brahme.jpg"
import img23 from "../assets/Mentor/Dr. Rama Shankar Verma.jpg"
import img24 from "../assets/Mentor/aramesh.png"
import img25 from "../assets/Mentor/M.Thenmozhi.jpg"
import img26 from "../assets/Mentor/david.png"
import img27 from "../assets/Mentor/JoelProfile.jpg"
import img28 from "../assets/Mentor/santosh_sahu.jpg"
import img29 from "../assets/Mentor/Manoj N.png"
import img30 from "../assets/Mentor/vimal.png"
import img31 from "../assets/Mentor/Bala_Ramadurai.jpg"
import img32 from "../assets/Mentor/nandan_kumar.png"
import img33 from "../assets/Mentor/John_Augustine.jpg"
import img34 from "../assets/Mentor/Ganesan. AR.png"
import img35 from "../assets/Mentor/Varadhan SKM.png"
import img36 from "../assets/Mentor/hariharan.png"
import img37 from "../assets/Mentor/Mukesh-Doble.webp"
import img38 from "../assets/Mentor/V_Sriram.png"
import img39 from "../assets/Mentor/Nitin Brave.avif"
import img40 from "../assets/Mentor/Ramesh Nayaka.jpeg"
import img41 from "../assets/Mentor/BobyGeorge.jpg"
import img42 from "../assets/Mentor/Mathava Kumar.png"
import img43 from "../assets/Mentor/Atul Jain.avif"
import img44 from "../assets/Mentor/Velmurugan.png"
import img45 from "../assets/Mentor/Gokul S Krishnan.jpg"
import img46 from "../assets/Mentor/Raj_Jaswa.jpg"
import img47 from "../assets/Mentor/shanti-k.png"
import img48 from "../assets/Mentor/sathyan.jpg"
import img49 from "../assets/Mentor/anuj_tiwari.jpg"
import img50 from "../assets/Mentor/sivakumar MS.png"
import img51 from "../assets/Mentor/Satya_chakrai.avif"
import img52 from "../assets/Mentor/Karthik_raman.jpg"
import img53 from "../assets/Mentor/chester.jpg"
import img54 from "../assets/Mentor/devaprakash.png"
import img55 from "../assets/Mentor/bijo.jpg"
import img56 from "../assets/Mentor/rupesh.webp"
import img57 from "../assets/Mentor/tiju.png"
import img58 from "../assets/Mentor/nishad.jpg"
import img59 from "../assets/Mentor/Suresh Govindarajan.png"
import img60 from "../assets/Mentor/arun.jpg"
import img61 from "../assets/Mentor/Saravanakumar.jpg"
import img62 from "../assets/Mentor/Kaushikmitra.jpg"
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const nirmaanAdvisors = [
  { 
    name: "Prof. V.Kamakoti", 
    designation: "Advisor",
    image: img1,
    linkedin: "https://www.linkedin.com/in/kamakoti-veezhinathan-9a8528b/"
  },
  { 
    name: "Prof. Satyanarayanan S", 
    designation: "Co-founder",
    image: img2,
    linkedin: "https://www.linkedin.com/in/satyaseshadri/"
  },
  { 
    name: "Prof. Prabhu Rajagopal", 
    designation: "Advisor",
    image: img3,
    linkedin: "https://www.linkedin.com/in/prabhu-rajagopal-041ab74/"
  },
  { 
    name: "Prof. Parasuraman Swaminathan", 
    designation: "Advisor",
    image: img4,
    linkedin: "https://www.linkedin.com/in/parasuraman-swaminathan-19032533/"
  },
  { 
    name: "Dr.MohanaKrishnan Logan", 
    designation: "Advisor",
    image: img5,
    linkedin: "https://www.linkedin.com/in/mohanakrishnan-logan-3b4893b6/?originalSubdomain=in"
  },
  { 
    name: "Prof. Manish Anand", 
    designation: "Advisor",
    image: img6,
    linkedin: "https://www.linkedin.com/in/manish-anand-80985a170/"
  },
  { 
    name: "Dr. Sivasrinivasu Devadula", 
    designation: "Advisor",
    image: img7,
    linkedin: "https://www.linkedin.com/in/sivasrinivasu-devadula-74986812/"
  },
  { 
    name: "Prof. Krishnan Balasubramaniam", 
    designation: "Advisor",
    image: img8,
    linkedin: "https://www.linkedin.com/in/krishnan-balasubramanian-534145157/"
  },
  { 
    name: "Dr. Satyesh Kumar Yadav", 
    designation: "Advisor",
    image: img9,
    linkedin: "https://www.linkedin.com/in/satyesh-yadav-91a167a/"
  },
  { 
    name: "Prof. Sathiya N. Gummadi", 
    designation: "Advisor",
    image: img10,
    linkedin: "https://www.linkedin.com/in/sathyanarayana-gummadi-b37575250/"
  },
  { 
    name: "Dr.T. Pradeep", 
    designation: "Advisor",
    image: img11,
    linkedin: "https://www.linkedin.com/in/thalappil-pradeep-b22505ba/?originalSubdomain=in"
  },
  { 
    name: "Prof. Sivarama Krishnan", 
    designation: "Advisor",
    image: img12,
    linkedin: "https://www.linkedin.com/in/srkris/?originalSubdomain=in"
  },
  { 
    name: "Prof.Vijayalakshmi", 
    designation: "Advisor",
    image: img13,
    linkedin: ""
  },
  { 
    name: "Dr. Abhijit P. Deshpande", 
    designation: "Advisor",
    image: img14,
    linkedin: "https://www.linkedin.com/in/abhijit-deshpande-55ba3224a/?originalSubdomain=in"
  },
  { 
    name: "Prof. Manivannan M", 
    designation: "Advisor",
    image: img15,
    linkedin: "https://www.linkedin.com/in/manivannan-muniyandi-5b2591224/?originalSubdomain=in"
  },
  { 
    name: "Prof. Basavaraja Madivala Gurappa", 
    designation: "Advisor",
    image: img16,
    linkedin: "https://www.linkedin.com/in/basaiitm/?originalSubdomain=in"
  },
  { 
    name: "Prof. G. Sai Krishnan", 
    designation: "Advisor",
    image: img17,
    linkedin: "https://www.linkedin.com/in/sai-krishnan-9a0442197/?originalSubdomain=in"
  },
  { 
    name: "Prof. m. pattabiraman", 
    designation: "Advisor",
    image: img18,
    linkedin: "https://www.linkedin.com/in/pattabiraman-murari/?originalSubdomain=in"
  },
  { 
    name: "Dr.S.Pandian", 
    designation: "Advisor",
    image: img19,
    linkedin: "https://www.linkedin.com/in/pandian-ps-51721962/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
  },
  { 
    name: "Dr.Lalithambika", 
    designation: "Advisor",
    image: img20,
    linkedin: ""
  },
  { 
    name: "Prof.R.Dhamodharan", 
    designation: "Advisor",
    image: img21,
    linkedin: "https://www.linkedin.com/in/dhamodharanraghavachari/"
  },
  { 
    name: "Prof. Milind Brahme", 
    designation: "Advisor",
    image: img22,
    linkedin: ""
  },
  { 
    name: "Prof. Rama Shanker Verma", 
    designation: "Advisor",
    image: img23,
    linkedin: ""
  },
  { 
    name: "Prof. Ramesh", 
    designation: "Advisor",
    image: img24,
    linkedin: ""
  },
  { 
    name: "Prof. Thenmozhi", 
    designation: "Advisor",
    image: img25,
    linkedin: "https://www.linkedin.com/in/m-thenmozhi-831894a/"
  },
  { 
    name: "Prof. David Kumar", 
    designation: "Advisor",
    image: img26,
    linkedin: "https://www.linkedin.com/in/david-kumar-22a15468/"
  },
  { 
    name: "Prof. Joel George M", 
    designation: "Advisor",
    image: img27,
    linkedin: "https://www.linkedin.com/in/boby-george-82090262/"
  },
  { 
    name: "Dr. Santhosh Kumar Sahu", 
    designation: "Advisor",
    image: img28,
    linkedin: "https://www.linkedin.com/in/sksahuiitm/"
  },
  { 
    name: "Prof. N Manoj", 
    designation: "Advisor",
    image: img29,
    linkedin: "https://www.linkedin.com/in/manoj-n-ba8b1211/"
  },
  { 
    name: "Dr. Vimal Edachery", 
    designation: "Advisor",
    image: img30,
    linkedin: "https://www.linkedin.com/in/dr-vimal-edachery-a15425aa/"
  },
  { 
    name: "Prof. Bala Ramadurai", 
    designation: "Advisor",
    image: img31,
    linkedin: "https://www.linkedin.com/in/balaramadurai/"
  },
  { 
    name: "Prof. Nandan Kumar Sinha", 
    designation: "Advisor",
    image:img32 ,
    linkedin: ""
  },
  { 
    name: "Prof. John Augustine", 
    designation: "Advisor",
    image:img33,
    linkedin: ""
  },
  { 
    name: "Prof. A.R Ganesan", 
    designation: "Advisor",
    image:img34 ,
    linkedin: ""
  },
  { 
    name: "Prof. Varadhan SKM", 
    designation: "Advisor",
    image:img35 ,
    linkedin: ""
  },
  { 
    name: "Dr.Hariharan K", 
    designation: "Advisor",
    image: img36 ,
    linkedin: ""
  },
  { 
    name: "Prof. Mukesh Doble", 
    designation: "Advisor",
    image: img37 ,
    linkedin: ""
  },
  { 
    name: "Dr. V Sriram", 
    designation: "Advisor",
    image:img38 ,
    linkedin: ""
  },
  { 
    name: "Prof. Nitin Barve", 
    designation: "Advisor",
    image:img39 ,
    linkedin: ""
  },
  { 
    name: "Dr. Ramesh Nayaka", 
    designation: "Advisor",
    image:img40 ,
    linkedin: ""
  },
  { 
    name: "Prof. Boby George", 
    designation: "Advisor",
    image:img41 ,
    linkedin: "https://www.linkedin.com/in/boby-george-82090262/"
  },
  { 
    name: "Dr. Mathava Kumar S", 
    designation: "Advisor",
    image:img42 ,
    linkedin: "https://www.linkedin.com/in/mathava-kumar-s-iitm-1129983a8/"
  },
  { 
    name: "Prof.Atul Jain", 
    designation: "Advisor",
    image:img43 ,
    linkedin: ""
  },
  { 
    name: "Dr.R.Velmurugan", 
    designation: "Advisor",
    image:img44 ,
    linkedin: "https://www.linkedin.com/in/velmurugan-r-iitm-0566ba1b9/"
  },
  { 
    name: "Dr. Gokul S Krishnan", 
    designation: "Advisor",
    image:img45 ,
    linkedin: "https://www.linkedin.com/in/gokul-s-krishnan-437a7654/"
  },
  { 
    name: "Prof.Raj Jaswa", 
    designation: "Advisor",
    image: img46 ,
    linkedin: "https://www.linkedin.com/in/rjaswa/"
  },
  { 
    name: "Prof. Shanti Swarup K", 
    designation: "Advisor",
    image:img47 ,
    linkedin: "https://www.linkedin.com/in/shanti-swarup-7b15b312/"
  },
];

const cfiAdvisors = [
  { 
    name: "Prof. Sathyan Subbiah", 
    designation: "Faculty Advisor, Abhiyaan ",
    image: img48,
    linkedin: "https://www.linkedin.com/in/manish-anand"
  },
  { 
    name: "Prof. Anuj Kumar Tiwari", 
    designation: "Faculty Advisor, Abhyuday & Anveshak",
    image: img49,
    linkedin: "https://www.linkedin.com/in/mahesh-panchagnula"
  },
  { 
    name: "Prof. Sivakumar MS", 
    designation: "Faculty Advisor, Agnirath",
    image: img50,
    linkedin: "https://in.linkedin.com/in/anbudan-siva"
  },
  { 
    name: "Prof. Satyanarayanan Seshadri", 
    designation: "Faculty Advisor, Raftar",
    image: img2,
    linkedin: "https://www.linkedin.com/in/satyaseshadri/"
  },
  { 
    name: "Prof. Satyanarayanan R. Chakravarthy", 
    designation: "Faculty Advisor, Avishkar Hyperloop",
    image: img51,
    linkedin: "https://www.linkedin.com/in/satya-chakravarthy-51326241/"
  },
  { 
    name: "Prof. Karthik Raman", 
    designation: "Faculty Advisor, iGEM",
    image: img52,
    linkedin: "https://www.linkedin.com/in/vikram-reddy"
  },
  { 
    name: "Dr. V Sriram", 
    designation: "Faculty Advisor, Amogh ",
    image: img38,
    linkedin: ""
  },
  { 
    name: "Prof. Chester Reberio", 
    designation: "Faculty Advisor, Cybersecurity Club",
    image: img53,
    linkedin: "https://www.linkedin.com/in/chester-rebeiro-7475192/"
  },
  { 
    name: "Devaprakash Muniraj", 
    designation: "Faculty Advisor, Aero Club",
    image: img54,
    linkedin: "https://www.linkedin.com/in/devaprakash-muniraj-32820729/"
  },
  { 
    name: "Prof. Bijo Sebastian ", 
    designation: "Faculty Advisor, iBot",
    image: img55,
    linkedin: "https://www.linkedin.com/in/bijo-sebastian-389153147/"
  },
  { 
    name: "Prof. Rupesh Nasre", 
    designation: "Faculty Advisor, Programming CLub",
    image: img56,
    linkedin: "https://www.linkedin.com/in/nasre/"
  },
  { 
    name: "Prof. Tiju Thomas", 
    designation: "Faculty Advisor, Sahaay",
    image: img57,
    linkedin: "https://www.linkedin.com/in/tiju-thomas-4826198/"
  },
  { 
    name: "Prof. Nishad Kothari", 
    designation: "Faculty Advisor, Mathematics Club",
    image: img58,
    linkedin: ""
  },
  { 
    name: "Prof. Suresh Govindrajan", 
    designation: "Faculty Advisor, Horizon",
    image: img59,
    linkedin: ""
  },
  { 
    name: "Prof. Arun Karuppaswamy B", 
    designation: "Faculty Advisor, Electronics Club",
    image: img60,
    linkedin: "https://www.linkedin.com/in/arunkaruppaswamyb/"
  },
  { 
    name: "Prof. Prabhu Rajagopal", 
    designation: "Faculty Advisor, Team Envisage",
    image: img3,
    linkedin: "https://www.linkedin.com/in/prabhu-rajagopal-041ab74/"
  },
  { 
    name: "Prof. Manish Anand", 
    designation: "Faculty Advisor, PDC",
    image: img6,
    linkedin: "https://www.linkedin.com/in/manish-anand-80985a170/"
  },
  { 
    name: "Prof. N Manoj", 
    designation: "Faculty Advisor, Biotech Club",
    image: img29,
    linkedin: "https://www.linkedin.com/in/manoj-n-ba8b1211/"
  },
  { 
    name: "Prof. G Saravana Kumar", 
    designation: "Faculty Advisor, 3D Printing Club",
    image: img61,
    linkedin: "https://www.linkedin.com/in/saravana-kumar-gurunathan-8607747b/"
  },
  { 
    name: "Prof. John Augustine", 
    designation: "Faculty Advisor, WebOps & Blockchain",
    image: img33,
    linkedin: "https://www.linkedin.com/in/johnaugustine/"
  },
  { 
    name: "Prof.Kaushik Mitra", 
    designation: "Faculty Advisor, AI Club",
    image: img62,
    linkedin: "https://www.linkedin.com/in/kaushik-mitra-300b2716/"
  },
  
];

const Mentors = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("nirmaan");

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const PersonCard = ({ person, accentColor }) => (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-gray-300">
          {person.image ? (
            <img 
              src={person.image} 
              alt={person.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400"
            style={{ display: person.image ? 'none' : 'flex' }}
          >
            <FaUser className="text-gray-600 text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h5 className="font-semibold text-gray-900 text-base leading-tight">
          {person.name}
        </h5>
        {person.designation && (
          <p className={`text-sm ${accentColor} mt-1`}>
            {person.designation}
          </p>
        )}
        {person.linkedin && (
          <a 
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <FaLinkedin className="text-base" />
            <span className="font-medium">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );

  const currentAdvisors = selectedProgram === "nirmaan" ? nirmaanAdvisors : cfiAdvisors;
  const accentColor = selectedProgram === "nirmaan" ? "text-emerald-600" : "text-red-600";
  const bgGradient = selectedProgram === "nirmaan" 
    ? "bg-gradient-to-r from-emerald-600 to-emerald-700" 
    : "bg-gradient-to-r from-red-600 to-red-700";

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Mentors Hero */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mentors & Advisors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Our mentors and advisors guide student innovators and entrepreneurs across Nirmaan and CFI programs.
        </p>
      </section>

      {/* Program Selection and Advisors */}
      <section className="px-4 md:px-16 py-16">

        {/* Dropdown Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block w-full max-w-xs">
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full appearance-none bg-white border-2 border-gray-300 rounded-lg px-6 py-4 pr-12 text-lg font-semibold text-gray-800 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all duration-200"
            >
              <option value="nirmaan">Nirmaan</option>
              <option value="cfi">Centre for Innovation (CFI)</option>
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>
        </div>

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-1 h-10 rounded-full ${bgGradient}`} />
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${bgGradient} flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h4 className="text-lg font-bold text-gray-800">
              {selectedProgram === "nirmaan" ? "Nirmaan" : "Centre for Innovation (CFI)"} — Advisors
            </h4>
          </div>
        </div>

        {/* Cards Grid — full width, no wrapper box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentAdvisors.map((advisor, idx) => (
            <PersonCard 
              key={idx} 
              person={advisor} 
              accentColor={accentColor}
            />
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

export default Mentors;