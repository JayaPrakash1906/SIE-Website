import React, { useState } from "react";
import { FaTrophy, FaAward, FaMedal, FaArrowUp, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const awardsData = [
  {
    icon: FaTrophy,
    title: "Best Innovation Hub",
    year: "2024",
    category: "Education & Entrepreneurship",
    description: "Recognized for excellence in fostering student startups and innovation ecosystems at IIT Madras. The School of Innovation & Entrepreneurship has been instrumental in bridging academic learning with real-world entrepreneurial practice.",
    gradient: "from-amber-400 to-yellow-600",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: FaAward,
    title: "Excellence in Entrepreneurship Education",
    year: "2024",
    category: "Academic Impact",
    description: "Awarded for outstanding contribution to founder education and practice-based learning. Our programs emphasize hands-on experience and mentor-led growth for aspiring tech founders.",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/10",
  },
  {
    icon: FaMedal,
    title: "Top Pre-Incubator",
    year: "2023",
    category: "Startup Support",
    description: "National recognition for Nirmaan as a leading campus pre-incubator program. Nirmaan continues to support student teams from idea stage to market-ready ventures.",
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
  {
    icon: FaTrophy,
    title: "Innovation in Education",
    year: "2023",
    category: "Curriculum & Pedagogy",
    description: "Honored for innovative curriculum design that combines academic rigor with industry mentorship and real startup exposure.",
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/10",
  },
  {
    icon: FaAward,
    title: "Student Venture Enabler",
    year: "2022",
    category: "Ecosystem Building",
    description: "Recognition for creating a thriving ecosystem that enables student ventures to access funding, mentorship, and incubation support.",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/10",
  },
  {
    icon: FaMedal,
    title: "Collaboration Excellence",
    year: "2022",
    category: "Industry-Academia",
    description: "Awarded for excellence in building partnerships between IIT Madras, industry, and the startup community to drive innovation.",
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/10",
  },
];

const Awards = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            <FaTrophy className="text-lg" /> Awards & Recognition
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Celebrating milestones and recognition in innovation and entrepreneurship education at IIT Madras.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {awardsData.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 hover:border-amber-500/30 transition-all duration-300 ${award.bgGlow}`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${award.gradient} opacity-15 rounded-bl-[120px] rounded-tr-2xl`} />
                  <div className="relative flex gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform`}>
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-amber-400/90 text-sm font-semibold">{award.year}</span>
                        <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">{award.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-2">{award.title}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 text-slate-900 p-3 rounded-full shadow-lg hover:bg-amber-400 transition z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Awards;
