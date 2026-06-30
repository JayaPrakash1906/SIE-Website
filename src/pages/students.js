import { useState, useMemo, useSyncExternalStore } from "react";
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
import img9 from "../assets/Students/Kaushik.jpg";
import img10 from "../assets/Students/guhan.jpg";
import img11 from "../assets/Students/nimesh.jpg";
import img12 from "../assets/Students/sanjeev.jpg";
import img13 from "../assets/Students/chaturvedi.jpg";
import img14 from "../assets/Students/bhaskar.jpg";
import img15 from "../assets/Students/sudhir.jpg";
import img16 from '../assets/Students/Pavansudhan.jpg';
import img17 from '../assets/Students/Vikas.jpg';
import img18 from '../assets/Students/dinesh.jpg';
import img19 from '../assets/Students/Shrirengarajan.jpg';
import img20 from "../assets/Students/Dhulipalla_Venu.jpg";
import img21 from "../assets/Students/Mohith.jpeg";
import img22 from "../assets/Students/aadhil.jpg";
import img23 from "../assets/Students/Harish.jpg";
import img24 from "../assets/Students/Kartheek Korlepara.png";
import img25 from "../assets/Students/Gatram Sravan Kumar.png";
import img26 from "../assets/Students/Jayanthi S P.png";
import img27 from "../assets/Students/Gokula Vishnu Kirti Damodaran.png";
import img28 from "../assets/Students/Mahalakshmi.jpeg";
import img29 from "../assets/Students/Sankara narayanan.jpg";
import img30 from "../assets/Students/Gati Ambaliya.jpg";
import img32 from "../assets/Students/subham_sha.jpeg";
import img33 from "../assets/Students/Mariam Fatima.jpeg";
import img34 from "../assets/Students/fasil.png";
import img35 from "../assets/Students/Hritij Rana.png";
import img36 from "../assets/Students/N P J Vedhaanth.jpg";
import img37 from "../assets/Students/Samuel Mugin J.jpg";
import img38 from "../assets/Students/Gautham.jpeg";
import img39 from "../assets/Students/vishal.jpeg";
import img40 from "../assets/Students/Suriya Dileepan.png";
import img41 from "../assets/Students/Elango.png";
import img42 from "../assets/Students/Abhimanyu.jpeg";
import img43 from "../assets/Students/Sathvik.png";
import img44 from "../assets/Students/sugan.jpg";
import img45 from "../assets/Students/prasanth.png";
import img46 from "../assets/Students/badri.png";
import img47 from "../assets/Students/sasikumar.png";
import img48 from "../assets/Students/roopesh.png";
import img49 from "../assets/Students/manu.png";

import profimg1 from "../assets/ms_mentor/imon.jpg";
import profimg2 from "../assets/ms_mentor/samuel.png";
import profimg3 from "../assets/ms_mentor/nithin.jpg";
import profimg4 from "../assets/ms_mentor/magesh.jpg";
import profimg5 from "../assets/ms_mentor/vivek.jpg";
import profimg6 from "../assets/ms_mentor/ragavendrasai.jpg";
import profimg7 from "../assets/ms_mentor/tiju.png"
import profimg8 from "../assets/ms_mentor/raghu.png"
import profimg9 from "../assets/ms_mentor/balas.png"
import profimg10 from "../assets/ms_mentor/ranjit.png"
import profimg11 from "../assets/ms_mentor/srkrishnan.jpg"
import profimg12 from "../assets/ms_mentor/M.Thenmozhi.jpg"
import profimg13 from "../assets/ms_mentor/bhuvan.png"
import profimg14 from "../assets/ms_mentor/Varunkumar.jpg"
import profimg15 from "../assets/ms_mentor/PS.jpeg"
import profimg16 from "../assets/ms_mentor/Advisor_Message.png"
import profimg17 from "../assets/ms_mentor/BobyGeorge.jpg"
import profimg18 from "../assets/ms_mentor/profsatyav5.webp"
import profimg19 from "../assets/ms_mentor/ravikumar.jpg"
import profimg20 from "../assets/ms_mentor/viji.jpg"
import profimg21 from "../assets/ms_mentor/kothandam.jpg"
import profimg22 from "../assets/ms_mentor/satyan.jpg"
import profimg23 from "../assets/ms_mentor/balaji.jpg"
import profimg24 from "../assets/ms_mentor/Pradeep.png"
import profimg25 from "../assets/ms_mentor/ramanthan.jpg"
import profimg26 from "../assets/ms_mentor/piyush.jpg"
import profimg27 from "../assets/ms_mentor/Varadhan SKM.png"
import profimg28 from "../assets/ms_mentor/Abhijith.png"
import profimg29 from "../assets/ms_mentor/vimal.png"
import profimg30 from "../assets/ms_mentor/santosh_sahu.jpg"


// ─── Faculty registry ───────────────────────────────────────────────────────
// Single source of truth for faculty info. Multiple students can point at
// the SAME faculty object (same key in STUDENT_FACULTY_MAP) and the UI will
// automatically group their projects under one faculty card.
//
// dept/email are left blank where not yet provided — fill them in here and
// both the admin table and the Student Startups page update immediately.
//
// NOTE: all `dept` values are normalized to start with "Department of ..."
// so the faculty cell renders consistently across the table.
export const FACULTY_DIRECTORY = {
  // ── 2026 batch faculty ──
  "fac-imon-chakraborty":          { id: "fac-imon-chakraborty",          name: "Prof.Imon Chakraborty",        email: "imon@iitm.ac.in", dept: "Department of Management Studies", img:profimg1  },
  "fac-gl-samuel":                 { id: "fac-gl-samuel",                 name: "Prof.GL Samuel",               email: "samuelgl@iitm.ac.in", dept: "Department of Mechanical Engineering", img: profimg2},
  "fac-nitin-muralidharan":        { id: "fac-nitin-muralidharan",        name: "Prof. Nitin Muralidharan",  email: "muralidharan@iitm.ac.in", dept: "Department of Chemical Engineering", img: profimg3 },
  "fac-mahesh-panchagnula":        { id: "fac-mahesh-panchagnula",        name: "Prof. Mahesh Panchagnula",      email: "mvp@iitm.ac.in", dept: "Department of Applied Mechanics", img: profimg4 },
  "fac-vivek-samu":                { id: "fac-vivek-samu",                name: "Prof. Vivek Samu",              email: "viveksamu@iitm.ac.in", dept: "Department of Civil Engineering", img: profimg5 },
  "fac-vv-raghavendra-sai":        { id: "fac-vv-raghavendra-sai",        name: "Prof. V V Raghavendra Sai",     email: "vvrsai@iitm.ac.in", dept: "Department of Applied Mechanics", img: profimg6 },
  "fac-tiju-thomas":               { id: "fac-tiju-thomas",               name: "Prof. Tiju Thomas",             email: "tijuthomas@iitm.ac.in", dept: "Department of Metallurgical and Materials Engineering", img: profimg7 },
  "fac-raghunathan-rengasamy":     { id: "fac-raghunathan-rengasamy",     name: "Prof. Raghunathan Rengasamy",   email: "raghur@iitm.ac.in", dept: "Department of Chemical Engineering", img: profimg8 },
  "fac-krishnan-balasubramanian":  { id: "fac-krishnan-balasubramanian",  name: "Prof. Krishnan Balasubramanian",email: "balas@iitm.ac.in", dept: "Department of Mechanical Engineering", img: profimg9 },
  "fac-ranjit-bauri":              { id: "fac-ranjit-bauri",              name: "Prof. Ranjit Bauri",            email: "bauri@iitm.ac.in", dept: "Department of Metallurgical and Materials Engineering", img: profimg10 },
  "fac-sivarama-krishnan":         { id: "fac-sivarama-krishnan",         name: "Prof. Sivarama Krishnan",       email: "srkrishnan@iitm.ac.in", dept: "Department of Physics", img: profimg11 },
  "fac-thenmozhi-m":               { id: "fac-thenmozhi-m",               name: "Prof. M. Thenmozhi",             email: "mtm@iitm.ac.in", dept: "Department of Management Studies", img: profimg12 },
  "fac-bhuvanesh-srinivasan":      { id: "fac-bhuvanesh-srinivasan",      name: "Prof. Bhuvanesh Srinivasan",    email: "bhuvanesh.srini.iitm.ac.in", dept: "Department of Metallurgical and Materials Engineering", img: profimg13 },

  // ── 2021–2025 batch faculty ──
  "fac-varunkumar-s":              { id: "fac-varunkumar-s",              name: "Prof. Varunkumar S",            email: "varuns@iitm.ac.in",   dept: "Department of Mechanical Engineering", img: profimg14 },
  "fac-parasuraman-swaminathan":   { id: "fac-parasuraman-swaminathan",   name: "Prof. Parasuraman Swaminathan", email: "swamnthn@iitm.ac.in", dept: "Department of Metallurgical and Materials Engineering", img: profimg15 },
  "fac-prabhu-rajagopal":          { id: "fac-prabhu-rajagopal",          name: "Prof. Prabhu Rajagopal",      email: "prajagopal@iitm.ac.in", dept: "Department of Mechanical Engineering", img: profimg16 },
  "fac-boby-george":               { id: "fac-boby-george",               name: "Prof. Dr. Boby George",       email: "boby@iitm.ac.in",     dept: "Department of Electrical Engineering", img: profimg17 },
  "fac-satyanarayanan-seshadri":   { id: "fac-satyanarayanan-seshadri",   name: "Prof. Satyanarayanan Seshadri", email: "satya@iitm.ac.in",   dept: "Department of Applied Mechanics", img: profimg18 },
  "fac-ravi-kumar-nv":             { id: "fac-ravi-kumar-nv",             name: "Prof. Ravi Kumar N V",        email: "nvrk@smail.iitm.ac.in", dept: "Department of Metallurgical and Materials Engineering", img: profimg19 },
  "fac-vijayalakshmi":             { id: "fac-vijayalakshmi",             name: "Prof. Vijayalakshmi",         email: "viji@iitm.ac.in",     dept: "Department of Management Studies", img: profimg20 },
  "fac-kothandaraman-r":           { id: "fac-kothandaraman-r",           name: "Prof. Kothandaraman R",             email: "rkraman@iitm.ac.in",  dept: "Department of Chemistry", img: profimg21 },
  "fac-sathyan-subbiah":           { id: "fac-sathyan-subbiah",           name: "Prof. Sathyan Subbiah",       email: "sathyans@iitm.ac.in", dept: "Department of Mechanical Engineering", img: profimg22 },
  "fac-balaji-srinivasan":         { id: "fac-balaji-srinivasan",         name: "Prof. Balaji Srinivasan",       email: "sbalaji@iitm.ac.in",  dept: "Department of Mechanical Engineering", img: profimg23 },
  "fac-t-pradeep":                 { id: "fac-t-pradeep",                 name: "Prof. T Pradeep",             email: "pradeep@iitm.ac.in",  dept: "Department of Chemistry", img: profimg24 },
  "fac-ramanathan-m":              { id: "fac-ramanathan-m",              name: "Prof. Ramanathan M",                email: "mraman@iitm.ac.in",   dept: "Department of Engineering Design", img: profimg25 },
  "fac-piyush-shakya":             { id: "fac-piyush-shakya",             name: "Prof. Piyush Shakya",           email: "pshakya@iitm.ac.in",  dept: "Department of Mechanical Engineering", img: profimg26 },
  "fac-skm-varadhan":              { id: "fac-skm-varadhan",              name: "Prof. SKM Varadhan",            email: "skm@iitm.ac.in",      dept: "Department of Applied Mechanics", img: profimg27 },
  "fac-abhijit-deshpande":         { id: "fac-abhijit-deshpande",         name: "Prof. Abhijit Deshpande",           email: "abhijit@iitm.ac.in",  dept: "Department of Chemical Engineering", img: profimg28 },
  "fac-vimal-edachery":            { id: "fac-vimal-edachery",            name: "Prof. Vimal Edachery",          email: "vimal@iitm.ac.in",    dept: "Department of Mechanical Engineering", img: profimg29 },
  "fac-santosh-sahu":              { id: "fac-santosh-sahu",              name: "Prof. Santosh Sahu",          email: "santhosh@iitm.ac.in", dept: "Department of Humanities and Social Sciences", img: profimg30 },
};

// Map of student id -> faculty id.
// Students NOT listed here (or set to null) have NO faculty — the UI shows nothing.
export const STUDENT_FACULTY_MAP = {
  // ── 2021–2025 batch ──
  1: "fac-varunkumar-s",                // Devika S Menon
  2: "fac-parasuraman-swaminathan",     // Bala Murugan L            (groups with Dhulipalla Venu)
  3: "fac-tiju-thomas",                 // Sandeep Kumar             (groups with Vshal A)
  4: "fac-boby-george",                 // Sivasubramanian M
  5: "fac-prabhu-rajagopal",            // VijayaRaja                (groups with Nimesh, Gokula, Jayanthi, Mahalakshmi)
  6: "fac-ravi-kumar-nv",               // Mayank Rajkumar Mishra
  7: "fac-satyanarayanan-seshadri",     // Sumant Bansal             (groups with Shri Rengarajan)
  8: "fac-krishnan-balasubramanian",    // Srijan Tiwari             (groups with Kaushik, Abhimanyu, Sathvik, Manu)
  9: "fac-krishnan-balasubramanian",    // Kaushik V N               (groups with Srijan, Abhimanyu, Sathvik, Manu)
  10: "fac-sathyan-subbiah",            // GUHAN GUNASEKARAN
  11: "fac-prabhu-rajagopal",           // Nimesh                    (groups with VijayaRaja, Gokula, Jayanthi, Mahalakshmi)
  12: "fac-kothandaraman-r",            // Sanjeev Rajput
  13: "fac-balaji-srinivasan",          // Sanidhya chaturvedi
  14: "fac-vijayalakshmi",              // Baskar V.S
  15: "fac-t-pradeep",                  // Sudhir.S
  16: "fac-vimal-edachery",             // Pavansudhan H
  17: "fac-piyush-shakya",              // Vikas Kumar
  18: "fac-skm-varadhan",               // Dinesh Sundrani
  19: "fac-satyanarayanan-seshadri",    // Shri Rengarajan           (groups with Sumant Bansal)
  20: "fac-parasuraman-swaminathan",    // Dhulipalla Venu           (groups with Bala Murugan)
  21: "fac-ramanathan-m",               // Mohith Kumar Sindhu
  22: "fac-abhijit-deshpande",          // Aadil Mohammad Afzal Rasoliwala
  23: "fac-thenmozhi-m",                // Harish kumar              (groups with Sankara Narayanan, Gatram Sravan, Sasikumar)
  24: "fac-santosh-sahu",               // KARTHEEK KORLEPARA
  25: "fac-thenmozhi-m",                // GATRAM SRAVAN KUMAR        (groups with Harish, Sankara Narayanan, Sasikumar)
  26: "fac-prabhu-rajagopal",           // SHRI JAYANTHI S P          (groups with VijayaRaja, Nimesh, Gokula, Mahalakshmi)
  27: "fac-prabhu-rajagopal",           // GOKULA VISHNU KIRTI DAMODARAN (groups with VijayaRaja, Nimesh, Jayanthi, Mahalakshmi)
  28: "fac-prabhu-rajagopal",           // MAHALAKSHMI S              (groups with VijayaRaja, Nimesh, Gokula, Jayanthi)
  29: "fac-thenmozhi-m",                // SANKARA NARAYANAN V        (groups with Harish, Gatram Sravan, Sasikumar)

  // ── 2026 batch ──
  30: "fac-imon-chakraborty",          // Gati Ambaliya
  32: "fac-gl-samuel",                 // Shubham Jha
  33: "fac-gl-samuel",                 // Mariam Fatima        (groups with Shubham + Badri)
  34: "fac-nitin-muralidharan",        // Fasil C
  35: "fac-mahesh-panchagnula",        // Hritij Rana
  36: "fac-vivek-samu",                // N P J Vedhaanth
  37: "fac-vv-raghavendra-sai",        // Samuel Mugin J
  38: "fac-mahesh-panchagnula",        // Gautam Swaminathan   (groups with Hritij + Suriya)
  39: "fac-tiju-thomas",               // Vshal A              (groups with Sandeep Kumar)
  40: "fac-mahesh-panchagnula",        // Suriya Dileepan      (groups with Hritij + Gautam)
  41: "fac-raghunathan-rengasamy",     // Elango
  42: "fac-krishnan-balasubramanian",  // Abhimanyu Kumar
  43: "fac-krishnan-balasubramanian",  // Sathvik P Narayan    (groups with Abhimanyu + Manu)
  44: "fac-ranjit-bauri",              // Sugan D
  45: "fac-sivarama-krishnan",         // Prashanth Krishnamoorthy
  46: "fac-gl-samuel",                 // Badrinarayanan Rangarajan (groups with Shubham + Mariam)
  47: "fac-thenmozhi-m",               // Sasikumar V G
  48: "fac-bhuvanesh-srinivasan",      // Roopesh Cuppala
  49: "fac-krishnan-balasubramanian",  // Manu Areraa A K      (groups with Abhimanyu + Sathvik)
};

// Returns the faculty object for a given student id, or null when none is assigned.
// Accepts live (edited) state via optional params; defaults to static seed data.
export const getFacultyForStudent = (
  studentId,
  facultyMap = STUDENT_FACULTY_MAP,
  facultyDirectory = FACULTY_DIRECTORY
) => {
  const facId = facultyMap[studentId];
  if (!facId) return null;
  return facultyDirectory[facId] || null;
};

// ─── Data ───────────────────────────────────────────────────────────────────
export const INITIAL_STUDENTS = [
  {
    id: 1,
    yr: "2021",
    name: "Devika S Menon",
    roll: "ME21S402",
    title: "Coconut shell biochar production from a sustainable",
    linkedin: "https://www.linkedin.com/in/devika-s-menon-4052ab107/",
    image: img1,
    startup: "Susstains Engineering Solutions LLP"
  },
  {
    id: 2,
    yr: "2021",
    name: "Bala Murugan L",
    roll: "MM21S401",
    title: "Affordable Continuous Glucose Monitoring Device",
    linkedin: "https://www.linkedin.com/in/intelaegis/",
    image: img2,
    startup: " Uniscreen solutions"
  },
  {
    id: 3,
    yr: "2021",
    name: "Sandeep Kumar",
    roll: "MM21S400",
    title: "Battery and supercapacitor hybrid system for high power density, performance improvement, safety improvement and battery life enhancement ",
    linkedin: "https://www.linkedin.com/in/connect-sandeep-kumar-engg/",
    image: img3,
    startup: " Batcapbeyond energy solutions"
  },
  {
    id: 4,
    yr: "2021",
    name: "Sivasubramanian M",
    roll: "EE21S402",
    title: "An Electronic modular device to check the purity of water at point of use",
    linkedin: "https://www.linkedin.com/in/sivasubramanian-m-71b070100/",
    image: img4,
    startup: "Qual Grip"
  },
  {
    id: 5,
    yr: "2021",
    name: "VijayaRaja",
    roll: "ME21S401",
    title: "Plenome allows for interoperability of systems for multiple hospitals, institutes and healthcare organizations. It integrates medical supply chain management and proactive tracking of the spread of contagious infections.",
    linkedin: "https://www.linkedin.com/in/vijayaraja-rathinasamy/",
    image: img5,
    startup: "Plenome technologies pvt ltd"
  },
  {
    id: 6,
    yr: "2022",
    name: "Mayank Rajkumar Mishra",
    roll: "MM22S400",
    title: "In-situ miniaturized mechanical testing machine: Our aim is to develop a modular miniaturized mechanical testing machine with in-situ characterisation",
    linkedin: "https://www.linkedin.com/in/mayank-r-mishra/",
    image: img6,
    startup: "InsituMicron "
  },
  {
    id: 7,
    yr: "2022",
    name: "Sumant Bansal",
    roll: "AM22S400",
    title: "Energy efficiecy: Developing pressure recovery to power generation expanders for use in process industries, where steam is used as a working fluid",
    linkedin: "https://www.linkedin.com/in/sumant-bansal/",
    image: img7,
    startup: "Wankel Energy System"
  },
  {
    id: 8,
    yr: "2023",
    name: "Srijan Tiwari",
    roll: "ME23S401",
    title: "To become all in one umbrella platform for all Inspection and Workflow management Needs",
    linkedin: "https://www.linkedin.com/in/srijantiwari10/",
    image: img8,
    startup: "TIQ World"
  },
  {
    id: 9,
    yr: "2023",
    name: "Kaushik V N",
    roll: "ME23S403",
    title: "Revolutionising Railway Safety with Groundbreaking Digital Technology",
    linkedin: "https://www.linkedin.com/in/kaushiknarayanan27/",
    image: img9,
    startup: "Rail Labs"
  },
  {
    id: 10,
    yr: "2023",
    name: "GUHAN GUNASEKARAN",
    roll: "ME23S404",
    title: "Democratizing precision manufacturing from India to the world",
    linkedin: "https://www.linkedin.com/in/guhan-gunasekaran-25882657/",
    image: img10,
    startup: "Guhan industrial and manufacturing solutions"
  },
  {
    id: 11,
    yr: "2023",
    name: "Nimesh",
    roll: "ME23S402",
    title: "Implement a blockchain-based system to manage the entire lifecycle of carbon credits, ensuring transparency and authenticity from issuance to retirement of tokens.",
    linkedin: "https://www.linkedin.com/in/nimeshch/?skipRedirect=true",
    image: img11,
    startup: "Next carbon"
  },
  {
    id: 12,
    yr: "2023",
    name: "Sanjeev Rajput",
    roll: "CY23S400",
    title: "redox flow batteries",
    linkedin: "https://www.linkedin.com/in/sanjee-eev/?skipRedirect=true",
    image: img12,
    startup: "PulseFlow"
  },
  {
    id: 13,
    yr: "2023",
    name: "Sanidhya chaturvedi",
    roll: "EE23S400",
    title: "Multi Parameter Sensing using optical fibers",
    linkedin: "https://www.linkedin.com/in/sanidhyachaturvedi/",
    image: img13,
    startup: "Folium Sensing Private Ltd"
  },
  {
    id: 14,
    yr: "2023",
    name: "Baskar V.S",
    roll: "MS23S401",
    title: "Metaverse( Mixed Reality) application for mental wellness , targeting Residential Institutes and their Students ",
    linkedin: "https://www.linkedin.com/in/baskar-sk-1764983b/",
    image: img14,
    startup: "Mindverve-Sama"
  },
  {
    id: 15,
    yr: "2023",
    name: "Sudhir.S",
    roll: "CY23S401",
    title: "Real-time water quality data visualization",
    linkedin: "https://www.linkedin.com/in/sudhir-s07/",
    image: img15,
    startup: "People's water Data(Aqua hive)"
  },
  {
    id: 16,
    yr: "2024",
    name: "Pavansudhan H",
    roll: "ME24S401",
    title: "Tribology of Electric Vehicle Bearings ",
    linkedin: "https://www.linkedin.com/in/pavansudhan-hari-2135081b9/",
    image: img16,
    startup: "Stratagem Testing solutions"
  },
  {
    id: 17,
    yr: "2024",
    name: "Vikas Kumar",
    roll: "ME24S400",
    title: "Reduction of vibration in automobile by modification in crank shaft",
    linkedin: "https://www.linkedin.com/in/vikas-kumar-47a92018b/",
    image: img17,
    startup: "Autocrank"
  },
  {
    id: 18,
    yr: "2024",
    name: "Dinesh Sundrani",
    roll: "AM24S401",
    title: "Full body Kinematics Measurement Device for early Detection of Parkinson Disease",
    linkedin: "https://www.linkedin.com/in/dinesh-sundrani-1258551b4/",
    image: img18,
    startup: "Kriya Neuro Technologies"
  },
  {
    id: 19,
    yr: "2024",
    name: "Shri Rengarajan",
    roll: "AM24S400",
    title: "Decarbonisation and sustainability consulting ",
    linkedin: "https://www.linkedin.com/in/shri-rengarajan-8b9a24162/",
    image: img19,
    startup: "Arantree Consulting"
  },
  {
    id: 20,
    yr: "2024",
    name: "Dhulipalla Venu",
    roll: "MM24S400",
    title: " Next-gen Smart car windshield that can change its tint automatically",
    linkedin: "https://www.linkedin.com/in/venu-dhulipalla-861939332/",
    image: img20,
    startup: "GLARE ZERO"
  },
  {
    id: 21,
    yr: "2024",
    name: "Mohith Kumar Sindhu",
    roll: "ED24S401",
    title: "Apply AI features in cad and make a product of it",
    linkedin: "https://www.linkedin.com/in/mohit-kumar-sindhu/",
    image: img21,
    startup: "AI in Enginering Design"
  },
  {
    id: 22,
    yr: "2024",
    name: "Aadil Mohammad Afzal Rasoliwala",
    roll: "CH24S400",
    title: "Simulations,3d printing, personalised properties and products in less time and precise manner.",
    linkedin: "https://www.linkedin.com/in/aadil-rasoliwala-9626761b5/",
    image: img22,
    startup: "Tawakkul"
  },
  {
    id: 23,
    yr: "2024",
    name: "Harish kumar",
    roll: "MS24S400",
    title: "VAIP is a platform where fans can buy digital tokens (NFTs) of their favorite creators using e₹ (India's digital currency). Creators earn money when fans buy these tokens, and they keep earning every time the token is resold. This helps creators make steady money while fans can support and benefit.",
    linkedin: "https://www.linkedin.com/in/harish-kumar-tn/",
    image: img23,
    startup: "Vaip"
  },
  {
    id: 24,
    yr: "2025",
    name: "KARTHEEK KORLEPARA",
    roll: "ID25S403",
    title: "We give farmers a free app to save money on fertilizer, and in exchange, they share the unique drone data with us and help them to get carbon credits and sell audit dashboards to big companies who must prove their supply chains are climate-friendly.",
    linkedin: "https://www.linkedin.com/in/kartheek-korlepara-a232291ab/",
    image: img24,
    startup: "Pramaan"
  },
  {
    id: 25,
    yr: "2025",
    name: "GATRAM SRAVAN KUMAR",
    roll: "ID25S405",
    title: " Developed the PAN India web-based supply chain platform to signup & onboard vendors with reporting dashboards",
    linkedin: "https://www.linkedin.com/in/sravan-kumar-gatram/",
    image: img25,
    startup: "Caterworld ai"
  },
  {
    id: 26,
    yr: "2025",
    name: "SHRI JAYANTHI S P",
    roll: "ID25S406",
    title: "We connect government and industry problem statements with young innovators and startups, providing mentorship, technology guidance, and funding support, so solutions can be developed faster and effectively.",
    linkedin: "https://www.linkedin.com/in/shrijayanthisp/",
    image: img26,
    startup: "ShakthiAI"
  },
  {
    id: 27,
    yr: "2025",
    name: "GOKULA VISHNU KIRTI DAMODARAN",
    roll: "ID25S407",
    title: "Developed a physics model that can adapt to a dynamic and human centric environment and optimised path planning based on various aspects",
    linkedin: "https://www.linkedin.com/in/gokula-vishnu-kirti-damodaran-a3148316b/",
    image: img27,
    startup: "Navic"
  },
  {
    id: 28,
    yr: "2025",
    name: "MAHALAKSHMI S",
    roll: "ID25S409",
    title: "GEMESH is a single device that combines a Wi-Fi router and smart home hub, letting all brands of smart devices work together through one app",
    linkedin: "https://www.linkedin.com/in/mahalakshmisiva/",
    image: img28,
    startup: "GEMESH"
  },
  {
    id: 29,
    yr: "2025",
    name: "SANKARA NARAYANAN V",
    roll: "ID25S411",
    title: "I am creating a platform that is web and mobile app as a service that allows people or the government to give money in a safe and specific way. For example, if money is given for school fees or medicines, it can only be used for that purpose. This helps make sure the money goes where it's supposed to and is not misused. ",
    linkedin: "https://www.linkedin.com/in/abhinavvsankar/",
    image: img29,
    startup: "Kubbera.in"
  },
  {
    id: 30,
    yr: "2026",
    name: "Gati Ambaliya",
    roll: "ER2603M0226",
    title: "",
    linkedin: "https://www.linkedin.com/in/gati-ambaliya/",
    image: img30,
    startup: "HumanVoice: An Adaptive Human-like Voice AI System for Personalized Child Learning and Ecosystem Development"
  },
  {
    id: 32,
    yr: "2026",
    name: "Shubham Jha",
    roll: "ER2603M2559",
    title: "",
    linkedin: "https://www.linkedin.com/in/shubham-jha-founder/",
    image: img32,
    startup: "Managing next generation autonomous factories using digital twins"
  },
  {
    id: 33,
    yr: "2026",
    name: "Mariam Fatima",
    roll: "ER2604M0020",
    title: "",
    linkedin: "https://www.linkedin.com/in/mariam-fatima-eee/",
    image: img33,
    startup: "Managing next generation autonomous factories using digital twins"
  },
  {
    id: 34,
    yr: "2026",
    name: "Fasil C",
    roll: "ER2603M0123",
    title: "",
    linkedin: "https://www.linkedin.com/in/fasil-c-hameed?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    image: img34,
    startup: "Lithium-ion Battery Cathode Active Material Manufacturing"
  },
  {
    id: 35,
    yr: "2026",
    name: "Hritij Rana",
    roll: "ER2604M0112",
    title: "",
    linkedin: "https://www.linkedin.com/in/hritijrana/",
    image: img35,
    startup: "Ball tracking system development for sports analytics"
  },
  {
    id: 36,
    yr: "2026",
    name: "N P J Vedhaanth",
    roll: "ER2603M1903",
    title: "",
    linkedin: "https://www.linkedin.com/in/vedhaanthnpj/",
    image: img36,
    startup: "Development of a Smart Robotic System for Nondestructive Evaluation of Pavement Systems"
  },
  {
    id: 37,
    yr: "2026",
    name: "Samuel Mugin J",
    roll: "ER2603M1491",
    title: "",
    linkedin: "https://www.linkedin.com/in/samuelmugin/",
    image: img37,
    startup: "A Hand-held Multiplexed Heavy Metal Ions Sensor for Water Quality Testing using U-FOS Technology"
  },
  {
    id: 38,
    yr: "2026",
    name: "Gautam Swaminathan",
    roll: "ER2603M0134",
    title: "",
    linkedin: "https://www.linkedin.com/in/gautham-swaminathan-003467278/",
    image: img38,
    startup: "Ball tracking system development for sports analytics"
  },
  {
    id: 39,
    yr: "2026",
    name: "Vshal A",
    roll: "ER2602M0030",
    title: "",
    linkedin: "https://www.linkedin.com/in/vishal-a-4013a034a?trk=contact-info",
    image: img39,
    startup: "Development and Commercialisation of an Affordable Wearable Neuromodulation Device for Migraine Relief in India Using Hybrid Energy Storage"
  },
  {
    id: 40,
    yr: "2026",
    name: "Suriya Dileepan",
    roll: "ER2604M0127",
    title: "",
    linkedin: "https://www.linkedin.com/in/suriya-dileepan-10a03523a/",
    image: img40,
    startup: "Ball tracking system development for sports analytics"
  },
  {
    id: 41,
    yr: "2026",
    name: "Elango",
    roll: "ER2603M0047",
    title: "",
    linkedin: "https://www.linkedin.com/in/elango-m-502461250/",
    image: img41,
    startup: "Drone based air quality monitoring"
  },
  {
    id: 42,
    yr: "2026",
    name: "Abhimanyu Kumar",
    roll: "ER2602M0025",
    title: "",
    linkedin: "Linkedin - https://www.linkedin.com/in/abhimanyu-k-9a502a36",
    image: img42,
    startup: "Global AI-Enabled E-Platform for on-Demand Contract Prototype Manufacturing"
  },
  {
    id: 43,
    yr: "2026",
    name: "Sathvik P Narayan",
    roll: "ER2603M0381",
    title: "",
    linkedin: "https://www.linkedin.com/in/sathviknarayan/",
    image: img43,
    startup: "Global AI-Enabled E-Platform for on-Demand Contract Prototype Manufacturing"
  },
  {
    id: 44,
    yr: "2026",
    name: "Sugan D",
    roll: "ER2603M0568",
    title: "",
    linkedin: "https://www.linkedin.com/in/sugandk/",
    image: img44,
    startup: "Development of alternative battery technology"
  },
  {
    id: 45,
    yr: "2026",
    name: "Prashanth Krishnamoorthy",
    roll: "ER2603M0112",
    title: "",
    linkedin: "",
    image: img45,
    startup: "Laser-processed medical materials and devices - lab-to-market"
  },
  {
    id: 46,
    yr: "2026",
    name: "Badrinarayanan Rangarajan",
    roll: "ER2603M1741",
    title: "",
    linkedin: "",
    image: img46,
    startup: "Managing next generation autonomous factories using digital twins"
  },
  {
    id: 47,
    yr: "2026",
    name: "Sasikumar V G",
    roll: "ER2603M0186",
    title: "",
    linkedin: "https://www.linkedin.com/in/sasikumar-gopalsamy-7b392840?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: img47,
    startup: "Development of a Carbon Credit Trading System"
  },
  {
    id: 48,
    yr: "2026",
    name: "Roopesh Cuppala",
    roll: "ER2603M1822",
    title: "",
    linkedin: "https://www.linkedin.com/in/rcuppala/",
    image: img48,
    startup: "All-Weather Portable Refrigeration Systems"
  },
  {
    id: 49,
    yr: "2026",
    name: "Manu Areraa A K",
    roll: "ER2603M0561",
    title: "",
    linkedin: "https://www.linkedin.com/in/manuareraa",
    image: img49,
    startup: "A Hand-held Multiplexed Heavy Metal Ions Sensor for Water Quality Testing using U-FOS Technology"
  },
];

// ─── Shared store (no Context/Provider needed) ──────────────────────────────
// This is a plain module-level singleton. Because both this file and
// projects.jsx import from the SAME module instance, any edit made on the
// admin table (this page) is instantly visible on the Student Startups page
// too — without wrapping the router in any <Provider>.
//
// React 18+'s useSyncExternalStore is what makes components re-render
// whenever this store's state changes, mimicking what Context would do.
//
// Data is in-memory only — resets on full page reload.
let _state = {
  students: INITIAL_STUDENTS,
  facultyDirectory: FACULTY_DIRECTORY,
  facultyMap: STUDENT_FACULTY_MAP,
};
const _listeners = new Set();

function _setState(updater) {
  _state = typeof updater === "function" ? updater(_state) : { ..._state, ...updater };
  _listeners.forEach((l) => l());
}

function _subscribe(listener) {
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}

function _getSnapshot() {
  return _state;
}

// Resolves a form's faculty payload (existing pick, new entry, or none)
// and applies it for the given student id. Returns the resolved facultyId.
function _assignFaculty(studentId, facultyPayload) {
  let facultyId = facultyPayload.facultyId || "";

  if (facultyPayload.isNew) {
    facultyId = `fac-${facultyPayload.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}-${Date.now()}`;
  }

  _setState((prev) => {
    const nextDirectory = facultyPayload.isNew
      ? {
          ...prev.facultyDirectory,
          [facultyId]: {
            id: facultyId,
            name: facultyPayload.name,
            email: facultyPayload.email || "",
            dept: facultyPayload.dept || "",
            img: null,
          },
        }
      : prev.facultyDirectory;

    const nextMap = { ...prev.facultyMap };
    if (facultyId) {
      nextMap[studentId] = facultyId;
    } else {
      delete nextMap[studentId];
    }

    return { ...prev, facultyDirectory: nextDirectory, facultyMap: nextMap };
  });

  return facultyId;
}

function _addStudent(studentFields, facultyPayload) {
  const studentId = Date.now();
  _assignFaculty(studentId, facultyPayload);
  _setState((prev) => ({
    ...prev,
    students: [...prev.students, { ...studentFields, id: studentId }],
  }));
  return studentId;
}

function _updateStudent(studentId, studentFields, facultyPayload) {
  _assignFaculty(studentId, facultyPayload);
  _setState((prev) => ({
    ...prev,
    students: prev.students.map((s) => (s.id === studentId ? { ...s, ...studentFields } : s)),
  }));
}

function _deleteStudent(studentId) {
  _setState((prev) => {
    const nextMap = { ...prev.facultyMap };
    delete nextMap[studentId];
    return {
      ...prev,
      students: prev.students.filter((s) => s.id !== studentId),
      facultyMap: nextMap,
    };
  });
}

// Hook used by both pages. No Provider required — just import and call.
export function useDirectory() {
  const state = useSyncExternalStore(_subscribe, _getSnapshot);

  return {
    students: state.students,
    facultyDirectory: state.facultyDirectory,
    facultyMap: state.facultyMap,
    getFacultyForStudent: (studentId) => getFacultyForStudent(studentId, state.facultyMap, state.facultyDirectory),
    assignFaculty: _assignFaculty,
    addStudent: _addStudent,
    updateStudent: _updateStudent,
    deleteStudent: _deleteStudent,
  };
}


// ─── Constants ───────────────────────────────────────────────────────────────
const YEARS = ["2021", "2022", "2023", "2024", "2025", "2026"];

const YR_META = {
  "2021": { label: "Batch 2021–2022", badge: "bg-purple-100 text-purple-800", av: "bg-purple-100 text-purple-800", border: "border-l-4 border-purple-500" },
  "2022": { label: "Batch 2022–2023", badge: "bg-teal-100 text-teal-800",   av: "bg-teal-100 text-teal-800",   border: "border-l-4 border-teal-500"   },
  "2023": { label: "Batch 2023–2024", badge: "bg-orange-100 text-orange-800",av: "bg-orange-100 text-orange-800",border: "border-l-4 border-orange-500" },
  "2024": { label: "Batch 2024–2025", badge: "bg-green-100 text-green-800",  av: "bg-green-100 text-green-800",  border: "border-l-4 border-green-500"  },
  "2025": { label: "Batch 2025–2026", badge: "bg-blue-100 text-blue-800",    av: "bg-blue-100 text-blue-800",    border: "border-l-4 border-blue-500"   },
  "2026": { label: "Batch 2026–2027", badge: "bg-red-100 text-red-800",      av: "bg-red-100 text-red-800",      border: "border-l-4 border-red-500"    },
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
const EMPTY_FORM = {
  yr: "2021", name: "", roll: "", title: "", linkedin: "", startup: "",
  facultyId: "", facultyName: "", facultyEmail: "", facultyDept: "",
};

function StudentFormModal({ student, onSave, onClose, facultyDirectory, facultyMap }) {
  const facultyOptions = Object.values(facultyDirectory);
  const initialFacultyId = student ? (facultyMap[student.id] || "") : "";

  const [form, setForm] = useState(
    student
      ? {
          yr: student.yr, name: student.name, roll: student.roll, title: student.title,
          linkedin: student.linkedin, startup: student.startup || "",
          facultyId: initialFacultyId, facultyName: "", facultyEmail: "", facultyDept: "",
        }
      : EMPTY_FORM
  );
  const [isNewFaculty, setIsNewFaculty] = useState(false);
  const [errors, setErrors] = useState({});
  const isEdit = Boolean(student);

  const set = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.roll.trim()) e.roll = "Roll number is required";
    if (!form.title.trim()) e.title = "Research title is required";
    if (form.linkedin && !/^https?:\/\/.+/.test(form.linkedin)) e.linkedin = "Enter a valid URL (https://...)";
    if (isNewFaculty && !form.facultyName.trim()) e.facultyName = "Faculty name is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Normalize the department field so it always reads "Department of ..."
    let dept = form.facultyDept.trim();
    if (dept && !/^department of\s/i.test(dept)) {
      dept = `Department of ${dept}`;
    }

    const payload = {
      yr: form.yr, name: form.name, roll: form.roll, title: form.title,
      linkedin: form.linkedin, startup: form.startup,
      faculty: isNewFaculty
        ? { isNew: true, name: form.facultyName, email: form.facultyEmail, dept }
        : { isNew: false, facultyId: form.facultyId },
    };
    onSave(payload);
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
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 sticky top-0 bg-white">
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

          <Field fkey="name"     label="Full name"                    placeholder="e.g. Arun Kumar" />
          <Field fkey="roll"     label="Roll number"                  placeholder="e.g. MS21E001" />
          <Field fkey="startup"  label="Startup Name (Optional)"      placeholder="e.g. EcoChar" />
          <Field fkey="title"    label="Research title"               placeholder="e.g. VLSI Design Engineer" />
          <Field fkey="linkedin" label="LinkedIn URL (optional)"      placeholder="https://linkedin.com/in/..." type="url" />

          {/* ── Faculty section ── */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-slate-600">Faculty mentor</label>
              <button
                type="button"
                onClick={() => setIsNewFaculty((v) => !v)}
                className="text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                {isNewFaculty ? "Pick existing faculty instead" : "+ Add new faculty"}
              </button>
            </div>

            {!isNewFaculty ? (
              <select
                value={form.facultyId}
                onChange={(e) => set("facultyId", e.target.value)}
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition cursor-pointer"
              >
                <option value="">No faculty assigned</option>
                {facultyOptions.map((f) => (
                  <option key={f.id} value={f.id}>{f.name}{f.dept ? ` — ${f.dept}` : ""}</option>
                ))}
              </select>
            ) : (
              <div className="space-y-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
                <p className="text-[11px] text-slate-400 -mt-0.5">
                  This creates a new faculty entry. If this faculty already mentors another project, pick them from the dropdown instead so both projects link together.
                </p>
                <div>
                  <input
                    type="text"
                    value={form.facultyName}
                    onChange={(e) => set("facultyName", e.target.value)}
                    placeholder="Faculty name, e.g. Prof. Anita Rao"
                    className={`w-full text-sm bg-white border rounded-lg px-3 py-2 text-slate-800 placeholder-slate-300 outline-none focus:ring-2 transition
                      ${errors.facultyName ? "border-red-300 focus:ring-red-100" : "border-slate-200 focus:ring-blue-100 focus:border-blue-300"}`}
                  />
                  {errors.facultyName && <p className="text-xs text-red-400 mt-1">{errors.facultyName}</p>}
                </div>
                <input
                  type="text"
                  value={form.facultyDept}
                  onChange={(e) => set("facultyDept", e.target.value)}
                  placeholder="Department, e.g. Mechanical Engineering"
                  className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-300 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                />
                <p className="text-[10px] text-slate-400 -mt-1.5 pl-0.5">
                  "Department of" is added automatically — just type the subject (e.g. "Mechanical Engineering").
                </p>
                <input
                  type="email"
                  value={form.facultyEmail}
                  onChange={(e) => set("facultyEmail", e.target.value)}
                  placeholder="Email, e.g. anita@iitm.ac.in"
                  className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-300 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                />
              </div>
            )}
          </div>

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
function YearTable({ yr, students, onEdit, onDelete, facultyMap, facultyDirectory }) {
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
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-500 cursor-pointer hover:text-slate-700 w-40 select-none" onClick={() => handleSort("startup")}>
                Startup <SortIcon col="startup" sortCol={sortCol} sortDir={sortDir} />
              </th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-500 cursor-pointer hover:text-slate-700 select-none" onClick={() => handleSort("title")}>
                Research title <SortIcon col="title" sortCol={sortCol} sortDir={sortDir} />
              </th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 w-52">Faculty</th>
              <th className="py-2 px-3 text-left text-xs font-medium text-slate-400 w-24">Profile</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {sorted.map((s, i) => {
              // Uses live state passed via props so admin edits reflect here.
              const fac = getFacultyForStudent(s.id, facultyMap, facultyDirectory);
              return (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors duration-100">
                  <td className="py-3 px-3 text-xs text-slate-300 font-mono align-middle">{i + 1}</td>
                  <td className="py-3 px-3 align-middle">
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
                  <td className="py-3 px-3 text-sm font-medium text-blue-800 align-middle">{s.startup || "—"}</td>
                  <td className="py-3 px-3 text-sm text-slate-500 align-middle">{s.title}</td>

                  {/* Faculty cell: image vertically centered with name/department,
                      department forced onto a single line (ellipsis instead of wrap) */}
                  <td className="py-3 px-3 text-xs text-slate-500 align-middle">
                    {fac && (
                      <div className="flex items-center gap-2">
                        {fac.img && (
                          <img
                            src={fac.img}
                            alt={fac.name}
                            className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-slate-200"
                          />
                        )}
                        <div className="min-w-0">
                          <div className="font-medium text-slate-600 whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
                            {fac.name}
                          </div>
                          {fac.dept && (
                            <div className="text-[11px] text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">
                              {fac.dept}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-3 align-middle">
                    <a href={s.linkedin} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1.5 hover:bg-blue-100 transition-colors duration-150">
                      <LinkedInIcon /> LinkedIn
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function MSEStudentSelection() {
  const { students, facultyDirectory, facultyMap, addStudent, updateStudent, deleteStudent } = useDirectory();

  const [search, setSearch] = useState("");
  const [yrFilter, setYrFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleAdd  = () => { setEditStudent(null); setModalOpen(true); };
  const handleEdit = (s) => { setEditStudent(s); setModalOpen(true); };
  const handleDelete = (id) => deleteStudent(id);

  const handleSave = (formData) => {
    const { faculty, ...studentFields } = formData;
    if (editStudent) {
      updateStudent(editStudent.id, studentFields, faculty);
    } else {
      addStudent(studentFields, faculty);
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
              <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">MS(E) Programme Student List</h1>
              <p className="text-sm text-slate-400 mt-1">Year-wise directory · Batches 2021–2026</p>
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
            return (
              <YearTable
                key={yr}
                yr={yr}
                students={group}
                onEdit={handleEdit}
                onDelete={handleDelete}
                facultyMap={facultyMap}
                facultyDirectory={facultyDirectory}
              />
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">No students match your search.</div>
          )}

        </div>
      </main>

      <Footer />

      {modalOpen && (
        <StudentFormModal
          student={editStudent}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
          facultyDirectory={facultyDirectory}
          facultyMap={facultyMap}
        />
      )}
    </div>
  );
}