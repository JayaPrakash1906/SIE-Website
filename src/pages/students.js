import { useState, useMemo } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/Students/Devika.jpg";
import img2 from "../assets/Students/Bala Murugan.jpg";
import img3 from "../assets/Students/sandeepkumar.jpg";
import img4 from "../assets/Students/sivasubramaniam.jpg";
import img5 from "../assets/Students/vijayraja.jpg";
import img6 from "../assets/Students/Mayank.jpg";
import img7 from "../assets/Students/SumantBansal.jpg";
import img8 from "../assets/Students/Srijan.jpg";
import img9 from "../assets/Students/Kaushik.jpg"
import img10 from "../assets/Students/guhan.jpg";
import img11 from "../assets/Students/nimesh.jpg";
import img12 from "../assets/Students/sanjeev.jpg";
import img13 from "../assets/Students/chaturvedi.jpg"
import img14 from "../assets/Students/bhaskar.jpg"
import img15 from "../assets/Students/sudhir.jpg";
import img16 from '../assets/Students/Pavansudhan.jpg';
import img17 from '../assets/Students/Vikas.jpg';
import img18 from '../assets/Students/dinesh.jpg';
import img19 from '../assets/Students/Shrirengarajan.jpg';
import img20 from "../assets/Students/Dhulipalla_Venu.jpg";
import img22 from "../assets/Students/aadhil.jpg";
import img23 from "../assets/Students/Harish.jpg";
import img24 from "../assets/Students/Kartheek Korlepara.png";
import img25 from "../assets/Students/Gatram Sravan Kumar.png";
import img26 from "../assets/Students/Jayanthi S P.png";
import img27 from "../assets/Students/Gokula Vishnu Kirti Damodaran.png";
import img28 from "../assets/Students/Mahalakshmi.jpeg";
import img29 from "../assets/Students/Sankara narayanan.jpg";
// ─── Data ───────────────────────────────────────────────────────────────────
const INITIAL_STUDENTS = [
  { id: 1, 
    yr: "2021", 
    name: "Devika S Menon",                   
    roll: "ME21S402", 
    title: "Coconut shell biochar production from a sustainable",                                                                                                         
    linkedin: "https://www.linkedin.com/in/devika-s-menon-4052ab107/", 
    image: img1 
  },
  { 
    id: 2, 
    yr: "2021", 
    name: "Bala Murugan L",                   
    roll: "MM21S401", 
    title: "Affordable Continuous Glucose Monitoring Device",                                                                                                             
    linkedin: "https://www.linkedin.com/in/intelaegis/", 
    image: img2 
  },
  { 
    id: 3, 
    yr: "2021", 
    name: "Sandeep Kumar",                    
    roll: "MM21S400", 
    title: "Battery and supercapacitor hybrid system for high power density, performance improvement, safety improvement and battery life enhancement ",                  
    linkedin: "https://www.linkedin.com/in/connect-sandeep-kumar-engg/", 
    image: img3 
  },
  { 
    id: 4, 
    yr: "2021", 
    name: "Sivasubramanian M",                
    roll: "EE21S402", 
    title: "An Electronic modular device to check the purity of water at point of use",                                                                                   
    linkedin: "https://www.linkedin.com/in/sivasubramanian-m-71b070100/", 
    image: img4 
  },
  { id: 5, 
    yr: "2021", 
    name: "VijayaRaja",                       
    roll: "ME21S401", 
    title: "Plenome allows for interoperability of systems for multiple hospitals, institutes and healthcare organizations. It integrates medical supply chain management and proactive tracking of the spread of contagious infections.",    
    linkedin: "https://www.linkedin.com/in/vijayaraja-rathinasamy/", 
    image: img5 
  },
  { 
    id: 6, 
    yr: "2022", 
    name: "Mayank Rajkumar Mishra",           
    roll: "MM22S400", 
    title: "In-situ miniaturized mechanical testing machine: Our aim is to develop a modular miniaturized mechanical testing machine with in-situ characterisation",      
    linkedin: "https://www.linkedin.com/in/mayank-r-mishra/", 
    image: img6 
  },
  { 
    id: 7, 
    yr: "2022", 
    name: "Sumant Bansal",                    
    roll: "AM22S400", 
    title: "Energy efficiecy: Developing pressure recovery to power generation expanders for use in process industries, where steam is used as a working fluid",         
    linkedin: "https://www.linkedin.com/in/sumant-bansal/", 
    image: img7 
  },
  { id: 8, 
    yr: "2023", 
    name: "Srijan Tiwari",                    
    roll: "ME23S401", 
    title: "To become all in one umbrella platform for all Inspection and Workflow management Needs",   
    linkedin: "https://www.linkedin.com/in/srijantiwari10/", 
    image: img8
  },
  { 
    id: 9, 
    yr: "2023", 
    name: "Kaushik V N",                      
    roll: "ME23S403", 
    title: "Revolutionising Railway Safety with Groundbreaking Digital Technology",      
    linkedin: "https://www.linkedin.com/in/kaushiknarayanan27/", 
    image: img9 
  },
  { 
    id: 10, 
    yr: "2023", 
    name: "GUHAN GUNASEKARAN",               
    roll: "ME23S404", 
    title: "",      
    linkedin: "https://www.linkedin.com/in/guhan-gunasekaran-25882657/", 
    image: img10 
  },
  { 
    id: 11, 
    yr: "2023", 
    name: "Nimesh",                          
    roll: "ME23S402", 
    title: "Implement a blockchain-based system to manage the entire lifecycle of carbon credits, ensuring transparency and authenticity from issuance to retirement of tokens.",      
    linkedin: "https://www.linkedin.com/in/nimeshch/?skipRedirect=true", 
    image: img11 
  },
  { 
    id: 12, 
    yr: "2023", 
    name: "Sanjeev Rajput",                 
    roll: "CY23S400", 
    title: "redox flow batteries",     
     linkedin: "https://www.linkedin.com/in/sanjee-eev/?skipRedirect=true", 
     image: img12 
    },
  { 
    id: 13, 
    yr: "2023", 
    name: "Sanidhya chaturvedi",             
    roll: "EE23S400", 
    title: "Multi Parameter Sensing using optical fibers",      
    linkedin: "https://www.linkedin.com/in/sanidhyachaturvedi/", 
    image: img13 
  },
  { 
    id: 14, 
    yr: "2023", 
    name: "Baskar V.S",                      
    roll: "MS23S401", 
    title: "Metaverse( Mixed Reality) application for mental wellness , targeting Residential Institutes and their Students ",      
    linkedin: "https://www.linkedin.com/in/baskar-sk-1764983b/", 
    image: img14 
  },
  { 
    id: 15, 
    yr: "2023", 
    name: "Sudhir.S",                        
    roll: "CY23S401", 
    title: "Real-time water quality data visualization",      
    linkedin: "https://www.linkedin.com/in/sudhir-s07/", 
    image: img15 
  },
  { 
    id: 16, 
    yr: "2024", 
    name: "Pavansudhan H",                   
    roll: "ME24S401", 
    title: "Tribology of Electric Vehicle Bearings ",      
    linkedin: "https://www.linkedin.com/in/pavansudhan-hari-2135081b9/", 
    image: img16 
  },
  { 
    id: 17, 
    yr: "2024", 
    name: "Vikas Kumar",                     
    roll: "ME24S400", 
    title: "Reduction of vibration in automobile by modification in crank shaft",      
    linkedin: "https://www.linkedin.com/in/vikas-kumar-47a92018b/", 
    image: img17 
  },
  { 
    id: 18, 
    yr: "2024", 
    name: "Dinesh Sundrani",                 
    roll: "AM24S401", 
    title: "Full body Kinematics Measurement Device for early Detection of Parkinson Disease",      
    linkedin: "https://www.linkedin.com/in/dinesh-sundrani-1258551b4/", 
    image: img18 
  },
  { 
    id: 19, 
    yr: "2024", 
    name: "Shri Rengarajan",                  
    roll: "AM24S400", 
    title: "Decarbonisation and sustainability consulting ",      
    linkedin: "https://www.linkedin.com/in/shri-rengarajan-8b9a24162/", 
    image: img19 
  },
  { 
    id: 20,
    yr: "2024", 
    name: "Dhulipalla Venu",                 
    roll: "MM24S400", 
    title: " Next-gen Smart car windshield that can change its tint automatically",      
    linkedin: "https://www.linkedin.com/in/venu-dhulipalla-861939332/", 
    image: img20 
  },
  { 
    id: 21, 
    yr: "2024", 
    name: "Mohith Kumar Sindhu",             
    roll: "ED24S401", 
    title: "Apply AI features in cad and make a product of it",      
    linkedin: "https://www.linkedin.com/in/mohit-kumar-sindhu/"
  },
  { 
    id: 22, 
    yr: "2024", 
    name: "Aadil Mohammad Afzal Rasoliwala", 
    roll: "CH24S400",
    title: "Simulations,3d printing, personalised properties and products in less time and precise manner.",      
    linkedin: "https://www.linkedin.com/in/aadil-rasoliwala-9626761b5/", 
    image: img22 
  },
  { 
    id: 23, 
    yr: "2024", 
    name: "Harish kumar",                    
    roll: "MS24S400", 
    title: "VAIP is a platform where fans can buy digital tokens (NFTs) of their favorite creators using e₹ (India’s digital currency). Creators earn money when fans buy these tokens, and they keep earning every time the token is resold. This helps creators make steady money while fans can support and benefit.",      
    linkedin: "https://www.linkedin.com/in/harish-kumar-tn/", 
    image: img23 
  },
  { 
    id: 24, 
    yr: "2025", 
    name: "KARTHEEK KORLEPARA",              
    roll: "ID25S403", 
    title: "We give farmers a free app to save money on fertilizer, and in exchange, they share the unique drone data with us and help them to get carbon credits and sell audit dashboards to big companies who must prove their supply chains are climate-friendly.",      
    linkedin: "https://www.linkedin.com/in/kartheek-korlepara-a232291ab/", 
    image: img24
  },
  { 
    id: 25, 
    yr: "2025", 
    name: "GATRAM SRAVAN KUMAR",             
    roll: "ID25S405", 
    title: " Developed the PAN India web-based supply chain platform to signup & onboard vendors with reporting dashboards",      
    linkedin: "https://www.linkedin.com/in/sravan-kumar-gatram/", 
    image: img25 
  },
  { 
    id: 26, 
    yr: "2025", 
    name: "SHRI JAYANTHI S P",               
    roll: "ID25S406", 
    title: "We connect government and industry problem statements with young innovators and startups, providing mentorship, technology guidance, and funding support, so solutions can be developed faster and effectively.",      
    linkedin: "https://www.linkedin.com/in/shrijayanthisp/", 
    image: img26 
  },
  { 
    id: 27, 
    yr: "2025", 
    name: "GOKULA VISHNU KIRTI DAMODARAN",   
    roll: "ID25S407", 
    title: "Developed a physics model that can adapt to a dynamic and human centric environment and optimised path planning based on various aspects",      
    linkedin: "https://www.linkedin.com/in/gokula-vishnu-kirti-damodaran-a3148316b/", 
    image: img27
  },
  { 
    id: 28, 
    yr: "2025", 
    name: "MAHALAKSHMI S",                   
    roll: "ID25S409", 
    title: "GEMESH is a single device that combines a Wi-Fi router and smart home hub, letting all brands of smart devices work together through one app",      
    linkedin: "https://www.linkedin.com/in/mahalakshmisiva/", 
    image: img28 
  },
  { 
    id: 29, 
    yr: "2025", 
    name: "SANKARA NARAYANAN V",             
    roll: "ID25S411", 
    title: "I am creating a platform that is web and mobile app as a service that allows people or the government to give money in a safe and specific way. For example, if money is given for school fees or medicines, it can only be used for that purpose. This helps make sure the money goes where it’s supposed to and is not misused. ",      
    linkedin: "https://www.linkedin.com/in/abhinavvsankar/", 
    image: img29 
  }
];


const YEARS = ["2021", "2022", "2023", "2024", "2025"];

const YR_META = {
  "2021": { label: "Batch 2021–2022", badge: "bg-purple-100 text-purple-800", av: "bg-purple-100 text-purple-800", border: "border-l-4 border-purple-500" },
  "2022": { label: "Batch 2022–2023", badge: "bg-teal-100 text-teal-800",     av: "bg-teal-100 text-teal-800",     border: "border-l-4 border-teal-500"   },
  "2023": { label: "Batch 2023–2024", badge: "bg-orange-100 text-orange-800", av: "bg-orange-100 text-orange-800", border: "border-l-4 border-orange-500" },
  "2024": { label: "Batch 2024–2025", badge: "bg-green-100 text-green-800", av: "bg-green-100 text-green-800", border: "border-l-4 border-green-500" },
  "2025": { label: "Batch 2025–2026", badge: "bg-blue-100 text-blue-800", av: "bg-blue-100 text-blue-800", border: "border-l-4 border-blue-500" },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

// ─── Icons ───────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
);

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SortIcon = ({ col, sortCol, sortDir }) =>
  sortCol !== col
    ? <span className="text-slate-300 text-xs ml-1">↕</span>
    : <span className="text-slate-600 text-xs ml-1">{sortDir === 1 ? "▲" : "▼"}</span>;

// ─── StudentFormModal ─────────────────────────────────────────────────────────
const EMPTY_FORM = { yr: "2021", name: "", roll: "", title: "", linkedin: "" };

function StudentFormModal({ student, onSave, onClose }) {
  const [form, setForm] = useState(student ? { yr: student.yr, name: student.name, roll: student.roll, title: student.title, linkedin: student.linkedin } : EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const isEdit = Boolean(student);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.roll.trim())  e.roll  = "Roll number is required";
    if (!form.title.trim()) e.title = "Research title is required";
    if (form.linkedin && !/^https?:\/\/.+/.test(form.linkedin)) e.linkedin = "Enter a valid URL (https://...)";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSave(form);
  };

  const Field = ({ fkey, label, placeholder, type = "text" }) => (
    <div>
      <label className="block text-xs font-medium text-slate-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={form[fkey]}
        onChange={(e) => set(fkey, e.target.value)}
        placeholder={placeholder}
        className={`w-full text-sm bg-slate-50 border rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-300 outline-none focus:ring-2 focus:bg-white transition
          ${errors[fkey] ? "border-red-300 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-300"}`}
      />
      {errors[fkey] && <p className="text-xs text-red-400 mt-1">{errors[fkey]}</p>}
    </div>
  );

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-base font-semibold text-slate-800">{isEdit ? "Edit student" : "Add new student"}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{isEdit ? `Editing ${student.name}` : "Fill in the details below"}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Batch year</label>
            <div className="flex gap-2">
              {YEARS.map((yr) => (
                <button key={yr} type="button" onClick={() => set("yr", yr)}
                  className={`flex-1 py-2 text-sm font-medium rounded-xl border transition-all duration-150
                    ${form.yr === yr ? "bg-slate-800 text-white border-slate-800" : "bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300"}`}>
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <Field fkey="name"     label="Full name"                   placeholder="e.g. Arun Kumar" />
          <Field fkey="roll"     label="Roll number"                 placeholder="e.g. MS21E001" />
          <Field fkey="title"    label="Research title"              placeholder="e.g. VLSI Design Engineer" />
          <Field fkey="linkedin" label="LinkedIn URL (optional)"     placeholder="https://linkedin.com/in/..." type="url" />

          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-150">
              Cancel
            </button>
            <button type="submit"
              className="flex-1 py-2.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 active:scale-95 rounded-xl transition-all duration-150">
              {isEdit ? "Save changes" : "Add student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── YearTable ────────────────────────────────────────────────────────────────
function YearTable({ yr, students, onEdit, onDelete }) {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState(1);
  const m = YR_META[yr];

  const sorted = useMemo(() => {
    if (!sortCol) return students;
    return [...students].sort((a, b) => a[sortCol].localeCompare(b[sortCol]) * sortDir);
  }, [students, sortCol, sortDir]);

  const handleSort = (col) => {
    if (sortCol === col) setSortDir((d) => d * -1);
    else { setSortCol(col); setSortDir(1); }
  };

  return (
    <div className="mb-8">
      <div className={`flex items-center gap-3 px-4 py-3 bg-white rounded-t-xl border border-b-0 border-slate-200 ${m.border}`}>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${m.badge}`}>{yr}</span>
        <span className="text-sm font-medium text-slate-700">{m.label}</span>
        <span className="ml-auto text-xs text-slate-400">{students.length} student{students.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="border border-slate-200 rounded-b-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 w-10">#</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-500 cursor-pointer hover:text-slate-700 w-56 select-none" onClick={() => handleSort("name")}>
                Student <SortIcon col="name" sortCol={sortCol} sortDir={sortDir} />
              </th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-500 cursor-pointer hover:text-slate-700 select-none" onClick={() => handleSort("title")}>
                Research title <SortIcon col="title" sortCol={sortCol} sortDir={sortDir} />
              </th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 w-24">Profile</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {sorted.map((s, i) => (
              <tr key={s.id} className="hover:bg-slate-50 transition-colors duration-100">
                <td className="py-3 px-3 text-xs text-slate-300 font-mono">{i + 1}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    {s.image ? (
                      <img src={s.image} alt={s.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-slate-200" />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${m.av}`}>
                        {getInitials(s.name)}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium text-slate-800">{s.name}</div>
                      <div className="text-xs text-slate-400 font-mono">{s.roll}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 text-sm text-slate-500">{s.title}</td>
                <td className="py-3 px-3">
                  <a href={s.linkedin} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1.5 hover:bg-blue-100 transition-colors duration-150">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function MSEStudentSelection() {
  const [students, setStudents]       = useState(INITIAL_STUDENTS);
  const [search, setSearch]           = useState("");
  const [yrFilter, setYrFilter]       = useState("");
  const [modalOpen, setModalOpen]     = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return students.filter(
      (s) =>
        (!q || s.name.toLowerCase().includes(q) || s.roll.toLowerCase().includes(q) || s.title.toLowerCase().includes(q)) &&
        (!yrFilter || s.yr === yrFilter)
    );
  }, [students, search, yrFilter]);

  const activeYears = yrFilter ? [yrFilter] : YEARS;

  const handleAdd = () => { setEditStudent(null); setModalOpen(true); };
  const handleEdit = (s) => { setEditStudent(s); setModalOpen(true); };
  const handleDelete = (id) => setStudents((prev) => prev.filter((s) => s.id !== id));
  const handleSave = (formData) => {
    if (editStudent) {
      setStudents((prev) => prev.map((s) => (s.id === editStudent.id ? { ...s, ...formData } : s)));
    } else {
      setStudents((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow py-8 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">MS(E) Programme Student List </h1>
              <p className="text-sm text-slate-400 mt-1">Year-wise directory · Batches 2021–2025</p>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, roll no, or title..."
              className="flex-1 min-w-48 text-sm bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 placeholder-slate-300 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
            />
            <select value={yrFilter} onChange={(e) => setYrFilter(e.target.value)}
              className="text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-600 outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
              <option value="">All batches</option>
              {YEARS.map((yr) => <option key={yr} value={yr}>{yr} batch</option>)}
            </select>
          </div>

          {/* Tables */}
          {activeYears.map((yr) => {
            const group = filtered.filter((s) => s.yr === yr);
            if (!group.length) return null;
            return <YearTable key={yr} yr={yr} students={group} onEdit={handleEdit} onDelete={handleDelete} />;
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">No students match your search.</div>
          )}

          
        </div>
      </main>

      <Footer />

      {modalOpen && (
        <StudentFormModal student={editStudent} onSave={handleSave} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}