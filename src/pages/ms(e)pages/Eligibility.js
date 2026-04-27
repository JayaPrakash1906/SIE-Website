import React from "react";
import Navbar from "../../components/navbar_ms(e)";
import {
  FaGraduationCap,
  FaRocket,
  FaClipboardList,
  FaFileAlt,
} from "react-icons/fa";

export default function EligibilityPage() {
  const qualifications = [
    {
      icon: <FaGraduationCap className="text-[#2B6CB0] mr-2" />,
      title: "Eligible Qualifications",
      items: [
        "B.Tech / BE (with strong academic performance)",
        "M.Tech / ME / MSc",
        "MBA / M.Com (with technology or innovation focus)",
        "Any equivalent degree recognised by IIT Madras",
      ],
    },
    {
      icon: <FaRocket className="text-[#2F855A] mr-2" />,
      title: "Entrepreneurial Background",
      sub: "While not mandatory, the following will strengthen your application:",
      items: [
        "Prior startup experience / idea development",
        "Participation in hackathons / innovation challenges",
        "Experience in product development / prototyping",
        "Work in research labs or industry projects",
      ],
    },
    {
      icon: <FaClipboardList className="text-[#805AD5] mr-2" />,
      title: "Statement of Purpose (SOP)",
      sub: "Applicants must submit an SOP including:",
      items: [
        "Interest in entrepreneurship",
        "Problem area or startup idea (if any)",
        "Selection of up to 2 project themes",
      ],
    },
    {
      icon: <FaFileAlt className="text-[#DD6B20] mr-2" />,
      title: "Supporting Documents",
      items: [
        "Academic transcripts",
        "Resume / CV",
        "Portfolio (if applicable)",
        "Any proof of startup / project work",
      ],
    },
  ];

  const selectionData = [
    {
      color: "border-t-[#2B6CB0]",
      title: "Academic Performance",
      desc: "CGPA and degree credentials are evaluated as a baseline for technical and academic strength.",
    },
    {
      color: "border-t-[#2F855A]",
      title: "Quality of SOP / Startup Idea",
      desc: "Clarity of your entrepreneurial motivation and the strength of your proposed idea or problem area.",
    },
    {
      color: "border-t-[#2B6CB0]",
      title: "Alignment with Project Themes",
      desc: "How well your background and interests align with the available faculty-led problem statements.",
    },
    {
      color: "border-t-[#805AD5]",
      title: "Interview Performance",
      desc: "Panel interview with faculty to assess entrepreneurial potential, problem-solving ability, and drive.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-16 font-dm-sans">

        {/* HEADER */}
        <div className="bg-gradient-to-br from-[#0C3461] to-[#185FA5] px-6 md:px-10 py-10 md:py-14 text-white">
          <p className="text-[11px] tracking-[1.5px] uppercase text-white/70 mb-2 font-semibold">
            Entry requirements
          </p>

          <h1 className="text-[clamp(28px,4vw,46px)] font-dm-serif mb-3">
            Eligibility Criteria
          </h1>

          <p className="text-sm text-white/70 max-w-xl">
            Check the requirements before applying to the M.S. (Entrepreneurship)
            Programme at IIT Madras.
          </p>
        </div>

        {/* TABLE SECTION */}
        <div className="px-6 md:px-10 py-10 md:py-14">
          <p className="text-[11px] tracking-[2px] uppercase text-[#2B6CB0] font-semibold mb-3">
            Academic Requirements
          </p>

          <h2 className="text-[clamp(28px,4vw,46px)] font-dm-serif mb-4">
            Minimum academic qualification
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mb-8">
            Applicants must have a strong academic background along with a demonstrated interest in innovation, startups, or problem-solving.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-[#DDE7F3] rounded-xl overflow-hidden">
              <thead className="bg-[#0C3461] text-white text-sm">
                <tr>
                  <th className="px-4 py-3 text-left">Criterion</th>
                  <th className="px-4 py-3 text-left">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Degree", "B.Tech / BE / M.Tech / ME / MSc / MBA"],
                  ["Academic Performance", "Minimum CGPA of 7.0 / 10"],
                  ["Background", "Engineering, Science, Management"],
                  ["Entrepreneurial Interest", "Strong motivation to build"],
                ].map(([c, r], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F8FC]"}>
                    <td className="px-4 py-3 text-sm font-medium border-b">
                      {c}
                    </td>
                    <td className="px-4 py-3 text-sm border-b">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-semibold mb-4">
            Additional qualifications
          </h2>

          {/* QUALIFICATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualifications.map((q, i) => (
              <div
                key={i}
                className="bg-[#F4F8FC] border border-[#DDE7F3] rounded-xl p-5"
              >
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  {q.icon}
                  {q.title}
                </h3>

                {q.sub && (
                  <p className="text-xs text-gray-600 mb-2">{q.sub}</p>
                )}

                <ul>
                  {q.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTION PROCESS */}
        <div className="bg-[#F5F7FA] px-6 md:px-10 py-10 md:py-16">
          <p className="text-[11px] tracking-[2px] uppercase text-[#2B6CB0] font-semibold mb-2">
            Selection Process
          </p>

          <h2 className="text-3xl font-serif mb-10">
            How candidates are evaluated
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionData.map((item, i) => (
              <div
                key={i}
                className={`bg-white border border-[#E2E8F0] rounded-xl p-6 border-t-4 ${item.color}`}
              >
                <h3 className="text-sm font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#2f5379] via-[#3f6b96] to-[#4f7faa] text-center px-6 py-12 md:py-20">
          <h2 className="text-3xl font-serif text-white mb-4">
            Think you qualify?
          </h2>

          <p className="text-white/80 mb-8">
            Take the next step toward building your venture at IIT Madras.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#2f5379] px-6 py-3 rounded-lg w-full sm:w-auto">
              Start Application
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-lg w-full sm:w-auto">
              Browse Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
}