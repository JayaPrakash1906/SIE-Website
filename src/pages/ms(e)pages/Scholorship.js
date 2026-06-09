import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar_ms(e)';
import { STag, STitle, CtaSection, Footer } from '../components/shared';
import { FaExclamationTriangle, FaBullseye } from 'react-icons/fa';

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

export default function ScholarshipPage() {
  const navigate = useNavigate();
  const go = (p) => {
    if (p === 'apply') navigate('/ms(e)/apply');
    else if (p === 'eligibility') navigate('/ms(e)/eligibility');
    else navigate(p);
    window.scrollTo(0, 0);
  };

  const [tab, setTab] = useState('htra');

  const tabs = [
    { id: 'htra', label: 'Regular – HTRA' },
    { id: 'fellowship', label: 'Fellowship' },
    { id: 'project', label: 'Project-Funded' },
    { id: 'other', label: 'Other Categories' },
  ];
  const cards = {
    htra: { title: 'Regular – HTRA', badge: 'Primary Category', sub: 'Half-Time Research Assistantship for eligible full-time scholars', rows: [['Monthly Stipend', '₹12,400 / month'], ['Type', 'Half-Time Research Assistantship'], ['Continuation', 'Subject to GTC recommendation'], ['Eligibility', 'Satisfactory academic & research progress']] },
    fellowship: { title: 'Regular – Fellowship', badge: 'External Funding', sub: 'External fellowship from UGC / CSIR / Industry or other agencies', rows: [['Source', 'UGC / CSIR / External Agencies / Industry'], ['Amount', 'As per sponsoring agency norms'], ['Varies by', 'Fellowship type and duration']] },
    project: { title: 'Project-Funded (HTRA / NHTRA)', badge: 'Project Sponsored', sub: 'Funded through sponsored research projects under IC&SR, IIT Madras', rows: [['Project-HTRA', 'Funded via IC&SR project provisions'], ['Project-NHTRA', 'Not eligible for HTRA conversion'], ['Note', 'NHTRA scholars cannot switch to HTRA category']] },
    other: { title: 'Other Categories', badge: 'Self/Employer Funded', sub: 'External, Part-time, and Staff scholars — no institute stipend', rows: [['External', 'Sponsored by employer organization'], ['Part-time', 'Self-funded / employer-supported'], ['Staff', 'As per IITM employment norms']] },
  };
  const curr = cards[tab];

  return (
    <>
      <Navbar />
      <div className="animate-fadeUp pt-16 font-dm-sans min-h-screen bg-white">
        <PageHeader
          tag="Financial support"
          title="Scholarship & Assistantship"
          desc="Financial support for the M.S. (Entrepreneurship) programme is provided as per institute norms under different admission categories."
        />

        <div className="px-6 md:px-10 py-12">
          <div className="flex flex-wrap gap-2 mb-7">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-2.5 rounded-lg text-[13.5px] font-medium cursor-pointer border transition-all duration-150 ${tab === t.id
                    ? 'bg-[#185FA5] text-white border-[#185FA5] shadow-sm'
                    : 'bg-[#F4F8FC] text-[#4A6080] border-[#DDE7F3] hover:bg-gray-100'
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="border border-[#DDE7F3] rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 md:px-7 py-6 bg-gradient-to-br from-[#0C3461] to-[#185FA5] flex justify-between items-start flex-wrap gap-3">
              <div>
                <p className="font-serif text-xl font-normal text-white mb-1">{curr.title}</p>
                <p className="text-[13px] text-white/70 font-light">{curr.sub}</p>
              </div>
              <span className="text-xs bg-white/15 text-white px-3.5 py-1.5 rounded-full border border-white/25 whitespace-nowrap">
                {curr.badge}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white">
              {curr.rows.map(([lbl, val], i) => (
                <div key={i} className="p-5 border-b border-[#DDE7F3] md:border-b-0 md:border-r last:border-r-0 lg:[&:nth-child(4n)]:border-r-0">
                  <p className="text-[11px] text-[#7A96B4] uppercase tracking-wider mb-1 font-semibold">{lbl}</p>
                  <p className="text-[15px] font-semibold text-[#0D1B2A]">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 py-12 bg-[#F4F8FC]">
          <STag>Important conditions</STag>
          <STitle>HTRA eligibility & continuation</STitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-4">
            {[
              { color: 'border-t-[#185FA5]', title: 'HTRA Eligibility', desc: 'HTRA is provided only for eligible full-time (Regular) scholars. Continuation depends on a GTC review, typically after 18 months.' },
              { color: 'border-t-[#27AE81]', title: 'Conversion Restrictions', desc: 'Scholars under Project-NHTRA, External, or Part-time categories cannot convert to the HTRA category at any point.' },
              { color: 'border-t-[#9B59B6]', title: 'Primary Programme Value', desc: 'The primary value lies in venture creation, product development, and techno-commercial validation — not just the stipend.' },
            ].map((c, i) => (
              <div key={i} className={`bg-white border border-[#DDE7F3] border-t-4 ${c.color} rounded-xl p-6 shadow-sm`}>
                <h3 className="text-[15px] font-semibold text-[#0D1B2A] mb-2">{c.title}</h3>
                <p className="text-sm text-[#4A6080] leading-relaxed font-light">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF9E6] border border-[#F5D87A] rounded-xl p-6 mb-4">
            <h3 className="text-[15px] font-semibold text-[#7A5A00] mb-2 flex items-center gap-2"><FaExclamationTriangle className="text-[#7A5A00] text-sm" /> For M.S. (Entrepreneurship) Applicants</h3>
            <p className="text-sm text-[#5A4200] leading-relaxed font-light">
              All applicants must submit a startup / research proposal OR apply against a faculty-listed problem statement. Financial support is secondary to programme intent, which focuses on venture creation, product development, and techno-commercial validation.
            </p>
          </div>

          <div className="bg-white border border-[#DDE7F3] border-l-4 border-l-[#185FA5] rounded-xl p-6 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#0D1B2A] mb-2 flex items-center gap-2"><FaBullseye className="text-[#185FA5] text-sm" /> Key Takeaway</h3>
            <p className="text-sm text-[#4A6080] leading-relaxed font-light">
              The programme provides basic financial assistance (HTRA), while the primary value lies in access to the IITM innovation ecosystem, faculty mentorship, and the opportunity to build a startup as part of the degree.
            </p>
          </div>
        </div>

        <CtaSection
          title="Ready to apply?"
          desc="Start your venture journey with the support of IIT Madras."
          btn1="Apply now"
          btn2="Check eligibility"
          onBtn1={() => go('apply')}
          onBtn2={() => go('eligibility')}
        />

      </div>
    </>
  );
}
