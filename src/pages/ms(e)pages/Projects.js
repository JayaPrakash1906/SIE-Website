import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar_ms(e)";
import { Footer } from "../components/shared";
import { FaChevronRight as ChevronRight, FaThList, FaLeaf, FaRobot, FaBuilding, FaLightbulb, FaClock, FaHeartbeat, FaCogs, FaLinkedin } from "react-icons/fa";
import { INITIAL_STUDENTS } from "../students";

/* ================= DATA ================= */

const DOMAIN_META = {
  all: { label: 'All Themes', icon: <FaThList />, color: '#185FA5', bg: '#E6F1FB', text: '#185FA5' },
  sustain: { label: 'Sustainability & Energy', icon: <FaLeaf />, color: '#27AE81', bg: '#E1F5EE', text: '#085041' },
  health: { label: 'Healthcare & MedTech', icon: <FaHeartbeat />, color: '#E53E3E', bg: '#FED7D7', text: '#822727' },
  ai: { label: 'Software & AI', icon: <FaRobot />, color: '#805AD5', bg: '#F2E8FA', text: '#44337A' },
  infra: { label: 'Smart Cities & Mobility', icon: <FaBuilding />, color: '#DD6B20', bg: '#FEEBC8', text: '#7B341E' },
  hard: { label: 'Hardware & Manufacturing', icon: <FaCogs />, color: '#718096', bg: '#E2E8F0', text: '#2D3748' },
};

// Simple auto-categorization based on keywords in title
const getDomain = (title) => {
  const t = title.toLowerCase();
  if (t.includes('biochar') || t.includes('carbon') || t.includes('energy') || t.includes('batter') || t.includes('water') || t.includes('decarbonisation') || t.includes('fertilizer') || t.includes('sustain') || t.includes('climate')) return 'sustain';
  if (t.includes('glucose') || t.includes('hospital') || t.includes('health') || t.includes('infection') || t.includes('parkinson') || t.includes('mental wellness') || t.includes('medical') || t.includes('disease') || t.includes('patient')) return 'health';
  if (t.includes('urban') || t.includes('railway') || t.includes('vehicle') || t.includes('automobile') || t.includes('smart home') || t.includes('windshield') || t.includes('mobility') || t.includes('transport')) return 'infra';
  if (t.includes('manufacturing') || t.includes('mechanical') || t.includes('testing machine') || t.includes('3d printing') || t.includes('optical') || t.includes('hardware') || t.includes('bearing') || t.includes('crank shaft') || t.includes('machine') || t.includes('device') || t.includes('physics model')) return 'hard';
  return 'ai';
};

const DOMAIN_IMAGES = {
  sustain: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=400',
  health: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
  ai: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
  infra: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=400',
  hard: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=400',
  all: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400'
};

const PROJECTS = INITIAL_STUDENTS.map((s, idx) => {
  const dom = getDomain(s.title);
  return {
    id: s.roll || `SIE-00${idx + 1}`,
    domain: dom,
    yr: s.yr,
    title: s.title,
    startup: s.startup || 'Startup Title TBD',
    students: [{ name: s.name, img: s.image, linkedin: s.linkedin }],
    img: DOMAIN_IMAGES[dom] || DOMAIN_IMAGES['all'],
    duration: 'Ongoing',
    slots: 0,
    desc: s.title,
    skills: []
  };
});

/* ================= COMPONENT ================= */

export default function ProjectsPage() {
  const navigate = useNavigate();
  const go = (p) => {
    if (p === 'apply') navigate('/ms(e)/apply');
    else navigate(p);
    window.scrollTo(0, 0);
  };

  const [activeDomain, setActiveDomain] = useState('all');
  const [status, setStatus] = useState('ongoing');
  const [expandedId, setExpandedId] = useState(null);

  const data = PROJECTS.map((p) => ({
    ...p,
    status: "ongoing" // Since they are all active MS(E) students
  }));

  const filtered = data.filter(p =>
    (activeDomain === 'all' || p.domain === activeDomain) &&
    (status === 'all' || p.status === status)
  );

  const getCount = (d) =>
    d === 'all'
      ? data.filter(p => status === 'all' || p.status === status).length
      : data.filter(p => p.domain === d && (status === 'all' || p.status === status)).length;

  return (
    <>
      <Navbar />
      <div className="animate-fadeUp pt-16 font-dm-sans min-h-screen flex flex-col bg-[#F4F8FC]">

        {/* STATUS RADIO BAR */}
        <div className="px-8 py-3 bg-white border-b border-[#DDE7F3] flex items-center shrink-0 overflow-x-auto">
          <div className="flex">
            {['all', 'available', 'ongoing'].map((s, i) => (
              <label
                key={s}
                className={`flex items-center gap-2 px-5 py-2.5 text-[13.5px] cursor-pointer border border-[#DDE7F3] transition-all duration-150 select-none
                  ${status === s ? 'bg-[#E6F1FB] text-[#185FA5] font-semibold' : 'bg-[#F4F8FC] text-[#4A6080] font-normal'}
                  ${i === 0 ? 'rounded-l-lg' : i === 2 ? 'rounded-r-lg' : ''}
                  ${i > 0 ? '-ml-px' : ''}
                `}
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === s}
                  onChange={() => setStatus(s)}
                  className="accent-[#185FA5] w-3.5 h-3.5 cursor-pointer"
                />
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden h-[calc(100vh-125px)]">

          {/* LEFT SIDEBAR */}
          <aside className="w-64 lg:w-72 shrink-0 border-r border-[#DDE7F3] bg-white overflow-y-auto pt-2 hidden md:block h-full">
            {Object.keys(DOMAIN_META).map(d => {
              const meta = DOMAIN_META[d];
              const active = activeDomain === d;
              return (
                <button
                  key={d}
                  onClick={() => setActiveDomain(d)}
                  className={`flex items-center gap-3 w-full px-4 py-3 border-l-4 text-[13.5px] text-left transition-all duration-150
                    ${active ? 'bg-[#E6F1FB] border-[#185FA5] text-[#185FA5] font-semibold' : 'bg-transparent border-transparent text-[#4A6080] hover:bg-gray-50 font-normal'}
                  `}
                >
                  <span className="text-base w-6 text-center flex justify-center shrink-0">{meta.icon}</span>
                  <span className="flex-1 leading-snug">{meta.label}</span>
                  <span className={`min-w-[24px] h-5 rounded-full text-[11px] font-bold flex items-center justify-center px-1.5 shrink-0
                    ${active ? 'bg-[#185FA5] text-white' : 'bg-[#EEF4FB] text-[#7A96B4]'}
                  `}>
                    {getCount(d)}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* MOBILE DOMAIN BAR */}
          <div className="md:hidden px-4 py-3 bg-white border-b border-[#DDE7F3] flex gap-2 overflow-x-auto shrink-0 hide-scrollbar">
            {Object.keys(DOMAIN_META).map(d => {
              const meta = DOMAIN_META[d];
              const active = activeDomain === d;
              return (
                <button
                  key={d}
                  onClick={() => setActiveDomain(d)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] whitespace-nowrap transition-colors border shadow-sm
                    ${active ? 'bg-[#185FA5] text-white border-[#185FA5] font-medium' : 'bg-white text-[#4A6080] border-[#DDE7F3] hover:bg-gray-50'}
                  `}
                >
                  <span className={active ? 'text-white' : 'text-[#185FA5]'}>{meta.icon}</span>
                  {meta.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT LIST */}
          <div className="flex-1 p-4 md:p-7 overflow-y-auto h-full pb-20">

            {/* Count bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[13px] text-[#7A96B4] font-normal">
                <strong className="text-[#0D1B2A] font-semibold">{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
                {activeDomain !== 'all' && <span> · <span className="text-[#185FA5] font-medium">{DOMAIN_META[activeDomain].label}</span></span>}
              </p>
              <span className="text-[11.5px] text-[#B0C4DA] hidden sm:block">Click a row to expand ↓</span>
            </div>

            {/* LIST GROUPED BY YEAR */}
            {filtered.length === 0 ? (
              <div className="bg-white border border-[#DDE7F3] rounded-2xl p-10 text-center text-[#7A96B4] text-sm mb-5">No projects found for this filter.</div>
            ) : (
              ['2025', '2024', '2023', '2022', '2021'].map(year => {
                const yearProjects = filtered.filter(p => p.yr === year);
                if (yearProjects.length === 0) return null;

                return (
                  <div key={year} className="mb-8">
                    <h3 className="text-[16px] font-bold text-[#0C3461] mb-3 flex items-center gap-2">
                      <span className="bg-[#E6F1FB] text-[#185FA5] px-3 py-1 rounded-md text-[13.5px]">Batch {year}</span>
                    </h3>
                    <div className="bg-white border border-[#DDE7F3] rounded-2xl overflow-hidden">
                      {yearProjects.map((p, i) => {
                        const meta = DOMAIN_META[p.domain] || DOMAIN_META['all'];
                        const expanded = expandedId === p.id;
                        const isLast = i === yearProjects.length - 1;

                        return (
                          <div key={p.id}>
                            {/* ROW */}
                            <div
                              onClick={() => setExpandedId(expanded ? null : p.id)}
                              className={`flex items-center gap-0 cursor-pointer transition-colors duration-150
                        ${(!isLast || expanded) ? 'border-b border-[#EEF4FB]' : ''}
                        ${expanded ? 'bg-[#F7FBFF]' : 'bg-white hover:bg-[#FAFCFF]'}
                      `}
                            >
                              {/* Left color stripe */}
                              <div className={`w-1 self-stretch shrink-0 transition-colors duration-200`} style={{ backgroundColor: expanded ? meta.color : 'transparent' }} />

                              {/* Thumbnail */}
                              <div className="w-[150px] h-[120px] shrink-0 overflow-hidden my-3.5 ml-3.5 mr-4 rounded-xl border border-[#EEF4FB] relative hidden sm:block bg-gray-50">
                                {p.img && <img src={p.img} alt="" className="w-full h-full object-cover" />}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0C346159] to-transparent" />
                              </div>

                              {/* Main content */}
                              <div className="flex-1 min-w-0 py-3.5 pl-4 sm:pl-0">
                                {/* Top badge row */}
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <span
                                    className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
                                    style={{ backgroundColor: meta.bg, color: meta.text }}
                                  >
                                    {meta.icon} {meta.label}
                                  </span>
                                  <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F4F8FC] text-[#4A6080] border border-[#DDE7F3] flex items-center gap-1.5">
                                    <FaClock /> {p.duration}
                                  </span>
                                </div>

                                {/* Startup Name */}
                                <p className="text-[15px] font-bold text-[#185FA5] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                  <FaLightbulb className="text-[#F6AD55] text-[17px]" /> {p.startup}
                                </p>

                                {/* Student name */}
                                <div className="flex gap-4 flex-wrap mt-3">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-[#085041] bg-[#E1F5EE] px-1.5 py-0.5 rounded tracking-wide">STUDENT FOUNDER</span>
                                    <div className="flex items-center gap-2">
                                      {p.students.map((s, i) => (
                                        <span key={i} className="text-[12.5px] text-[#4A6080] font-medium flex items-center gap-1.5">
                                          {s.name}
                                          {s.linkedin && (
                                            <a href={s.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[#0A66C2] hover:opacity-80">
                                              <FaLinkedin size={14} />
                                            </a>
                                          )}
                                          {i < p.students.length - 1 && ' · '}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Avatar */}
                              <div className="flex flex-col gap-1.5 shrink-0 mx-3.5 items-end hidden md:flex">
                                <div className="flex">
                                  {p.students.map((student, j) => {
                                    const si = student.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
                                    return (
                                      <div key={j} className={`${j > 0 ? '-ml-3' : ''}`}>
                                        {student.img ? (
                                          <img
                                            src={student.img}
                                            alt={student.name}
                                            title={student.name}
                                            className="w-14 h-14 rounded-full border-2 border-[#DDE7F3] object-cover bg-white shadow-sm"
                                          />
                                        ) : (
                                          <div
                                            title={student.name}
                                            className="w-14 h-14 rounded-full bg-[#F4F8FC] border-2 border-[#DDE7F3] flex items-center justify-center text-[14px] font-bold text-[#4A6080] shadow-sm"
                                          >
                                            {si}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Chevron */}
                              <div className={`mr-5 shrink-0 transition-transform duration-200 ${expanded ? 'rotate-90' : 'rotate-0'}`}>
                                <ChevronRight size={17} color={expanded ? meta.color : '#B0C4DA'} />
                              </div>
                            </div>

                            {/* EXPANDED DETAIL PANEL */}
                            {expanded && (
                              <div className={`bg-[#F7FBFF] px-5 sm:pl-[186px] pb-5 pt-1 ${isLast ? '' : 'border-b border-[#DDE7F3]'}`}>
                                <p className="text-[14px] text-[#3A5070] leading-relaxed font-normal mb-4 mt-2">
                                  {p.desc}
                                </p>
                                <div className="flex items-center gap-3 flex-wrap mt-2">
                                  <div className="flex-1 min-w-[20px]" />
                                  <button
                                    onClick={(e) => { e.stopPropagation(); go('apply'); }}
                                    className="bg-[#185FA5] text-white border-none px-5 py-2.5 rounded-lg text-[13px] font-semibold cursor-pointer hover:bg-[#0C3461] transition-colors w-full sm:w-auto"
                                  >
                                    Propose a similar idea →
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}

            {/* PROPOSE CARD */}
            {/* <div className="flex items-center gap-4 p-5 bg-white border border-[#DDE7F3] border-l-4 border-l-[#185FA5] rounded-2xl flex-wrap">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E6F1FB] to-[#B5D4F4] flex items-center justify-center text-[#185FA5] text-lg shrink-0 ml-1">
                <FaLightbulb />
              </div>
              <div className="flex-1 min-w-[180px] ml-2">
                <p className="text-[14.5px] font-semibold mb-1 text-[#0D1B2A]">Propose Your Own Idea</p>
                <p className="text-[13px] text-[#4A6080] leading-relaxed font-light">
                  Have a deep-tech or high-impact startup idea? Apply with a self-initiated proposal aligned with SIE focus areas.
                </p>
              </div>
              <button 
                onClick={() => go('apply')} 
                className="bg-[#185FA5] text-white border-none px-6 py-2.5 rounded-lg text-[13px] font-semibold cursor-pointer whitespace-nowrap shrink-0 hover:bg-[#0C3461] transition-colors"
              >
                Apply →
              </button>
            </div> */}

          </div>
        </div>

      </div>
    </>
  );
}