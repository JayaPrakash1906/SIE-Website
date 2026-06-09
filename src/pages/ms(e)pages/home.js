import React from 'react';
import { useNavigate } from 'react-router-dom';
// src/pages/HomePage.jsx
import { STag, STitle, FeatureList, CtaSection,  } from '../components/shared';
import Navbar from '../../components/navbar_ms(e)';

import imgAbout from '../../assets/nirmaan_pic.jpg';
import imgJourney from '../../assets/agnirath.jpg';

import {
  FaRocket,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBuilding,
  FaCalendarAlt,
  FaLeaf,
  FaRobot,
  FaHeartbeat,
  FaUniversity,
  FaBriefcase,
  FaHandshake,
  FaLightbulb,
  FaFlask,
  FaGlobe,
} from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  const go = (p) => {
    if (p === 'projects') navigate('/ms(e)/project');
    else if (p === 'apply') navigate('/ms(e)/apply');
    else navigate('/ms(e)/home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="animate-fadeUp font-dm-sans">

        {/* ── HERO ── */}
      <div
        id="home"
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: 'calc(100vh)',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg,rgba(12,52,97,.88) 0%,rgba(24,95,165,.45) 60%,transparent 100%)' }} />

        <div className="relative z-[2] px-6 md:px-10 py-12 md:py-[72px] max-w-[700px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.12] text-[#B5D4F4] text-xs font-medium px-3.5 py-1.5 rounded-[20px] mb-6 border border-white/20">
            <span className="w-[7px] h-[7px] rounded-full bg-[#85B7EB] inline-block animate-pulse" />
            M.S. (Entrepreneurship) · IIT Madras
          </div>

          {/* Heading */}
          <h1
            className="font-dm-serif font-normal leading-[1.1] text-white mb-5"
            style={{ fontSize: 'clamp(40px,6vw,68px)' }}
          >
            Innovation<br />without <em className="text-[#85B7EB] italic">limits</em>
          </h1>

          <p className="text-base text-white/75 leading-[1.75] mb-8 max-w-[540px] font-light">
            IIT Madras offers the M.S. (Entrepreneurship) — a unique, research-driven programme designed to
            transform ideas into impactful ventures through faculty mentorship and deep-tech innovation.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => go('apply')}
              className="bg-white text-[#0C3461] border-none px-7 py-3 rounded-[10px] text-sm font-semibold cursor-pointer"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Apply now
            </button>
            <button
              onClick={() => go('projects')}
              className="bg-transparent text-white border border-white/40 px-7 py-3 rounded-[10px] text-sm font-medium cursor-pointer"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Browse projects →
            </button>
          </div>

          <p className="mt-6 text-[13px] text-white/50">
            Applications closed&nbsp;
            <strong className="text-[#F09595]">April 2026</strong> — check for next cycle
          </p>
        </div>
      </div>

      {/* ── PARTNER STRIP ── */}
      <div className="flex flex-wrap border-b border-[#DDE7F3]">
        {[
          { logo: 'IITM', logoBg: '#E6F1FB', logoColor: '#0C3461', name: 'IIT Madras',                              sub: 'Institute of Eminence, India' },
          null,
          { logo: 'SIE',  logoBg: '#E1F5EE', logoColor: '#085041', name: 'School of Innovation & Entrepreneurship', sub: 'Driving deep-tech ventures' },
        ].map((item, i) =>
          item === null ? (
            <div key={i} className="flex items-center justify-center px-3.5 text-[22px] text-[#7A96B4]">·</div>
          ) : (
            <div key={i} className="flex-1 flex items-center gap-3.5 px-7 py-5 min-w-[200px] border-r border-[#DDE7F3]">
              <div
                className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{ background: item.logoBg, color: item.logoColor }}
              >
                {item.logo}
              </div>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <span className="text-xs text-[#7A96B4] block mt-0.5">{item.sub}</span>
              </div>
            </div>
          )
        )}
        <div className="flex-[1.2] flex items-center justify-center text-center px-7 py-5 bg-[#E6F1FB] min-w-[200px]">
          <div>
            <p className="text-sm font-semibold text-[#0C3461]">Build ventures. Earn a research degree.</p>
            <span className="text-xs text-[#378ADD] block mt-0.5">Master of Science (Entrepreneurship) — Startup as Thesis</span>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-[#DDE7F3] bg-[#F4F8FC]">
        {[
          { num: 'M.S.',    lbl: 'Degree awarded by IITM' },
          { num: <FaRocket className="inline-block" />, lbl: 'Startup as Thesis' },
          { num: '2–3 yrs', lbl: 'Flexible duration' },
          { num: '₹12,400', lbl: 'Monthly HTRA stipend' },
          { num: '4',       lbl: 'Deep-tech focus domains' },
        ].map((s, i) => (
          <div key={i} className={`px-4 py-6 md:py-[26px] text-center border-b md:border-b-0 lg:border-r border-[#DDE7F3] last:border-b-0 last:border-r-0`}>
            <div className="text-[22px] text-[#185FA5] leading-none" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{s.num}</div>
            <div className="text-xs text-[#7A96B4] mt-1.5">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── ABOUT SPLIT ── */}
      <div className="flex min-h-[420px] flex-wrap md:flex-nowrap">
        <div
          className="flex-1 min-w-[280px] min-h-[280px] bg-cover bg-center"
          style={{ backgroundImage: `url(${imgAbout})` }}
        />
        <div className="flex-1 min-w-[280px] px-6 md:px-11 py-10 md:py-14 flex flex-col justify-center bg-white">
          <STag>About the programme</STag>
          <STitle>Where research meets entrepreneurship</STitle>
          <p className="text-[15px] text-[#4A6080] leading-[1.75] font-light">
            The M.S. (Entrepreneurship) programme at IIT Madras enables students to work on real-world
            problems, often originating from faculty research labs, and convert them into scalable startups.
          </p>
          <FeatureList items={[
            'Work on deep-tech and high-impact innovations',
            'Collaborate with faculty, researchers, and industry experts',
            'Build ventures within a world-class innovation ecosystem',
            'Opportunity to engage with investors and incubators',
          ]} />
        </div>
      </div>

      {/* ── JOURNEY SPLIT ── */}
      <div className="flex min-h-[420px] flex-wrap md:flex-nowrap flex-row-reverse">
        <div
          className="flex-1 min-w-[280px] min-h-[280px] bg-cover bg-center"
          style={{ backgroundImage: `url(${imgJourney})` }}
        />
        <div className="flex-1 min-w-[280px] px-6 md:px-11 py-10 md:py-14 flex flex-col justify-center bg-[#F4F8FC]">
          <STag>Academic journey</STag>
          <STitle>From idea to venture</STitle>
          <p className="text-[15px] text-[#4A6080] leading-[1.75] font-light">
            Students progress through a structured entrepreneurial journey — from problem identification all
            the way to scaling a real venture, evaluated through milestones, not exams.
          </p>
          <FeatureList items={[
            'Problem identification & validation',
            'Solution development & prototyping',
            'Market testing & business modelling',
            'Scaling and venture building',
          ]} />
        </div>
      </div>

      {/* ── PROGRAMME SNAPSHOT ── */}
      <div id="projects" className="px-6 md:px-10 py-10 md:py-16 bg-[#F4F8FC]">
        <STag>Programme snapshot</STag>
        <STitle>Everything in one degree</STitle>
        <p className="text-[15px] text-[#4A6080] font-light mb-9">Key highlights of the M.S. (Entrepreneurship) at a glance.</p>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))' }}>
          {[
            { icon: <FaGraduationCap />, title: 'M.S. Degree',       sub: 'Awarded by IIT Madras' },
            { icon: <FaRocket />,        title: 'Startup as Thesis',  sub: 'Build and scale your venture' },
            { icon: <FaChalkboardTeacher />, title: 'Faculty Mentorship', sub: 'IITM professors & domain experts' },
            { icon: <FaBuilding />,      title: 'IITM Ecosystem',     sub: 'Incubation, funding & industry connects' },
            { icon: <FaCalendarAlt />,   title: 'Flexible Duration',  sub: 'Typically 2–3 years' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-[#DDE7F3] rounded-xl p-5 flex items-start gap-3.5">
              <span className="text-[24px] text-[#185FA5] shrink-0">{s.icon}</span>
              <div>
                <strong className="text-sm font-semibold block mb-1">{s.title}</strong>
                <span className="text-xs text-[#4A6080] leading-[1.5] block font-light">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RESEARCH DOMAINS ── */}
      <div className="px-6 md:px-10 py-10 md:py-16">
        <STag>Research & innovation focus</STag>
        <STitle>Solve real-world problems through startups</STitle>
        <p className="text-[15px] text-[#4A6080] font-light mb-9">Choose from faculty-led problem statements or propose your own idea across these domains.</p>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          {[
            { icon: <FaLeaf />, title: 'Sustainability & Climate Tech',  desc: 'Renewable energy, waste management, circular economy' },
            { icon: <FaRobot />, title: 'AI & Digital Technologies',      desc: 'Machine learning, platforms, automation' },
            { icon: <FaBuilding />, title: 'Infrastructure & Smart Cities', desc: 'Urban systems, construction tech, mobility' },
            { icon: <FaHeartbeat />, title: 'Healthcare & Bio Innovation',    desc: 'Medical devices, diagnostics, health-tech' },
          ].map((d, i) => (
            <div key={i} className="bg-white border border-[#DDE7F3] rounded-xl p-6">
              <span className="text-[28px] text-[#185FA5] block mb-3">{d.icon}</span>
              <h3 className="text-sm font-semibold mb-1.5">{d.title}</h3>
              <p className="text-[13px] text-[#4A6080] leading-[1.65] font-light">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ECOSYSTEM ── */}
      <div id="scholarship" className="px-6 md:px-10 py-10 md:py-16 bg-[#F4F8FC]">
        <STag>Ecosystem advantage</STag>
        <STitle>Be part of the IIT Madras innovation ecosystem</STitle>
        <p className="text-[15px] text-[#4A6080] font-light mb-9">Access world-class resources, networks, and mentors right on campus.</p>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {[
            { icon: <FaUniversity />, label: 'Infrastructure', title: 'IITM Incubation Cell & Research Park',  desc: "Direct access to one of India's leading startup incubators and a thriving research ecosystem.", tag: 'On campus',       tagColor: '#185FA5', tagBg: '#E6F1FB' },
            { icon: <FaBriefcase />, label: 'Funding',         title: 'Accelerators & VC Networks',            desc: 'Exposure to startup accelerators and VC networks that actively back IITM ventures.',          tag: 'Funding access',  tagColor: '#085041', tagBg: '#E1F5EE' },
            { icon: <FaHandshake />, label: 'Community',       title: 'IITM Startup Founders Network',         desc: 'Work alongside successful IITM founders and collaborate with industry partners on real problems.', tag: 'Industry connect', tagColor: '#185FA5', tagBg: '#E6F1FB' },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-[#DDE7F3] rounded-xl overflow-hidden">
              <div className="h-40 flex items-center justify-center text-[38px] text-[#185FA5]" style={{ background: 'linear-gradient(135deg,#E6F1FB,#B5D4F4)' }}>
                {c.icon}
              </div>
              <div className="p-5">
                <p className="text-[11px] text-[#7A96B4] uppercase tracking-[0.5px] mb-1.5">{c.label}</p>
                <p className="text-[15px] font-semibold mb-2 leading-tight">{c.title}</p>
                <p className="text-[13px] text-[#4A6080] leading-[1.65] font-light">{c.desc}</p>
                <span className="inline-block mt-3 text-[11px] font-medium px-2.5 py-1 rounded-[20px]" style={{ background: c.tagBg, color: c.tagColor }}>{c.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHO SHOULD APPLY ── */}
      <div id="eligibility" className="px-6 md:px-10 py-10 md:py-16">
        <STag>Who should apply</STag>
        <STitle>Built for builders</STitle>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          {[
            { icon: <FaRocket />, title: 'Aspiring Entrepreneurs', desc: 'Have an idea and want a structured, research-backed path to build it into a company.' },
            { icon: <FaLightbulb />, title: 'Early-Stage Founders',   desc: 'Founders who want faculty mentorship, institutional credibility, and ecosystem access.' },
            { icon: <FaFlask />, title: 'Engineers & Researchers',desc: 'Technical professionals passionate about converting lab research into market-ready ventures.' },
            { icon: <FaGlobe />, title: 'Impact Builders',        desc: 'Individuals driven to build ventures that create measurable real-world impact at scale.' },
          ].map((w, i) => (
            <div key={i} className="bg-[#F4F8FC] border border-[#DDE7F3] rounded-xl p-5">
              <h3 className="text-[15px] font-semibold mb-2 flex items-center gap-2 text-[#0D1B2A]">
                <span className="text-[#185FA5] text-[18px]">{w.icon}</span>
                <span>{w.title}</span>
              </h3>
              <p className="text-sm text-[#4A6080] leading-[1.7] font-light">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaSection 
        title="Ready to build your startup journey?" 
        desc="Join a programme where ideas evolve into ventures and research creates real-world impact." 
        btn1="Apply now" 
        btn2="View projects" 
        onBtn1={() => go('apply')} 
        onBtn2={() => go('projects')}
      />
    </div>
    </>
  );
}