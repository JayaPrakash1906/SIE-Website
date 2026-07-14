import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar_ms(e)';
import { STag, STitle, CtaSection, Footer } from '../components/shared';
import { FaFileAlt, FaPen, FaUserTie, FaLightbulb, FaFolderOpen, FaMapPin, FaCalendarAlt, FaBullseye, FaExclamationTriangle } from "react-icons/fa";

function PageHeader({ tag, title, desc }) {
  return (
    <div className="bg-gradient-to-br from-[#0C3461] to-[#185FA5] px-6 md:px-10 py-10 md:py-14 text-white">
      <p className="text-[11px] tracking-[1.5px] uppercase text-white/70 mb-2 font-semibold">
        {tag}
      </p>
      <h1 className="text-[clamp(28px,4vw,46px)] font-dm-serif mb-3">
        {title}
      </h1>
      <p className="text-sm text-white/70 max-w-xl">
        {desc}
      </p>
    </div>
  );
}

export default function ApplyPage() {
  const navigate = useNavigate();
  const go = (p) => {
    if (p === 'projects') navigate('/ms(e)/project');
    else if (p === 'eligibility') navigate('/ms(e)/eligibility');
    else navigate(p);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="animate-fadeUp pt-16 font-dm-sans min-h-screen bg-white">
        <PageHeader
          tag="Application process"
          title="How to Apply"
          desc="Follow these simple steps to apply for the M.S. (Entrepreneurship) programme at IIT Madras."
        />

        {/* STEPS */}
        <div className="px-6 md:px-10 py-14">
          <STag>Step by step</STag>
          <STitle>Your application journey</STitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {[
              { n: 1, title: 'Check your eligibility', desc: 'Visit the Eligibility page and ensure you meet academic qualifications, minimum CGPA requirements, and have a relevant background (engineering / science / entrepreneurship).' },
              { n: 2, title: 'Choose your problem statement / idea', desc: 'Select up to 2–3 faculty-listed problem statement preferences, or submit a brief concept note for your own startup idea or proposal.' },
              { n: 3, title: 'Prepare your documents', desc: 'Keep academic transcripts, Resume/CV, Statement of Purpose, portfolio (if applicable), and proof of startup/project work ready before applying.' },
              { n: 4, title: 'Submit your application', desc: 'Apply through the IIT Madras Research Admissions Portal. Upload all required documents and submit before the deadline.' },
              { n: 5, title: 'Shortlisting & Interview', desc: 'Applications are reviewed by faculty. Shortlisted candidates are invited for an online interview covering your problem statement/idea, technical background, and entrepreneurial potential.' },
              { n: 6, title: 'Final selection & offer', desc: 'Based on interview performance, faculty evaluation, and alignment with the problem statement. Selected candidates receive an offer letter from IIT Madras.' },
            ].map(s => (
              <div key={s.n} className="bg-white border border-[#DDE7F3] rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#185FA5] text-white text-base font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <p className="text-[15px] font-semibold text-[#0D1B2A] mb-2">{s.title}</p>
                <p className="text-[13px] text-[#4A6080] leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="px-6 md:px-10 py-14 bg-[#F4F8FC]">
          <STag>Documents checklist</STag>
          <STitle>What you need to submit</STitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              { icon: <FaFileAlt className="text-[#185FA5] text-lg shrink-0 mt-0.5" />, title: 'Academic Documents', desc: 'Degree certificates and semester-wise mark sheets.' },
              { icon: <FaPen className="text-[#185FA5] text-lg shrink-0 mt-0.5" />, title: 'Statement of Purpose (SOP)', desc: 'Clearly explain your background, interest in entrepreneurship, and problem statement/idea preference.' },
              { icon: <FaUserTie className="text-[#185FA5] text-lg shrink-0 mt-0.5" />, title: 'Resume / CV', desc: 'Education, projects, internships, startup experience — anything that highlights your journey.' },
              { icon: <FaLightbulb className="text-[#185FA5] text-lg shrink-0 mt-0.5" />, title: 'Startup / Project Proof', desc: 'Pitch deck, prototype, GitHub repository, or portfolio showcasing prior work (if applicable).' },
              { icon: <FaFolderOpen className="text-[#185FA5] text-lg shrink-0 mt-0.5" />, title: 'Portfolio (Optional)', desc: 'For product, design, or innovation-based work that strengthens your application.' },
            ].map((d, i) => (
              <div key={i} className="bg-white border border-[#DDE7F3] rounded-xl p-5 shadow-sm">
                <h3 className="text-[15px] font-semibold text-[#0D1B2A] mb-2 flex items-start gap-2.5">
                  {d.icon}
                  <span>{d.title}</span>
                </h3>
                <p className="text-sm text-[#4A6080] leading-relaxed font-light">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="px-6 md:px-10 py-14">
          <STag>Key dates</STag>
          <STitle>Application timeline (Indicative)</STitle>
          <div className="relative max-w-2xl mt-6">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#DDE7F3]"></div>
            {[
              { done: true, title: 'Applications open', desc: 'The application portal opens and faculty-listed problem statements are published.', date: 'January' },
              { done: true, title: 'Application deadline', desc: 'All applications and supporting documents due by the announced deadline.', date: 'March' },
              { done: true, title: 'Shortlisting', desc: 'Faculty review applications and shortlist candidates for interview.', date: 'March – April' },
              { done: true, title: 'Interviews', desc: 'Online interviews conducted by faculty panel covering your problem statement, background, and entrepreneurial potential.', date: 'April' },
              { done: true, title: 'Offer letters issued', desc: 'Successful candidates receive formal offer letter from IIT Madras.', date: 'April – May' },
              { done: true, title: 'Programme start', desc: 'New cohort begins their M.S. (Entrepreneurship) journey at IIT Madras.', date: 'July' },
            ].map((t, i) => (
              <div key={i} className="flex gap-6 pb-7 relative">
                <div className={`w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center shrink-0 z-10 border-4 border-white ${t.done ? 'bg-[#185FA5] text-white' : 'bg-[#E6F1FB] text-[#0C3461]'}`}>
                  {t.done ? '✓' : i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-[15px] font-semibold text-[#0D1B2A] mb-1">{t.title}</p>
                  <p className="text-[13.5px] text-[#4A6080] leading-relaxed font-light mb-1">{t.desc}</p>
                  <p className="text-xs text-[#7A96B4] font-medium">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT NOTES */}
        <div className="px-6 md:px-10 py-12 bg-[#F4F8FC]">
          <STag>
            <span className="flex items-center gap-1.5"><FaExclamationTriangle className="text-[#0D1B2A] text-sm" /> Important notes</span>
          </STag>
          <STitle>Before you apply</STitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: <FaMapPin className="text-[#7A5A00] text-base shrink-0 mt-0.5" />, title: 'Project mapping', desc: 'Applicants may be mapped to a different but relevant problem statement based on faculty evaluation.' },
              { icon: <FaCalendarAlt className="text-[#7A5A00] text-base shrink-0 mt-0.5" />, title: 'Interview scheduling', desc: 'Interview scheduling depends on faculty availability. Be prepared for flexibility in dates.' },
              { icon: <FaBullseye className="text-[#7A5A00] text-base shrink-0 mt-0.5" />, title: 'Highly competitive', desc: 'Selection is highly competitive and interview-driven. Quality of your SOP and idea matters greatly.' },
            ].map((n, i) => (
              <div key={i} className="bg-[#FFF9E6] border border-[#F5D87A] rounded-xl p-5 shadow-sm">
                <h3 className="text-[15px] font-semibold text-[#7A5A00] mb-2 flex items-start gap-2">
                  {n.icon}
                  <span>{n.title}</span>
                </h3>
                <p className="text-sm text-[#5A4200] leading-relaxed font-light">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaSection
          title="Ready to begin?"
          desc="Apply through the IIT Madras Research Portal and explore available problem statements."
          btn1="Go to IITM Admissions Portal"
          btn2="Explore Problem Statements"
          onBtn1={() => alert('Redirecting to IITM Research Admissions Portal...')}
          onBtn2={() => go('projects')}
        />

      </div>
    </>
  );
}
