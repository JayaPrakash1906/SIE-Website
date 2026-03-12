
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PhdAdmissions = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full px-6 lg:px-20 mt-16">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#3b4a6b]">
            PhD (Innovation & Entrepreneurship)
          </h1>
        </div>

        {/* About Program */}
        <div className="mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-4">
            About the Program
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
          The School of Innovation and Entrepreneurship (SIE), IIT Madras invites Expressions of Interest 
          from highly motivated candidates who wish to pursue doctoral research in areas related to entrepreneurship, 
          innovation, and deep-tech ecosystems.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
          SIE is building a world-class research program that generates rigorous and applied knowledge to inform practice, 
          policy, and pedagogy in the Indian deep-tech context. The research program focuses on understanding how innovation 
          emerges, how startups scale, and how academic research can translate into real-world impact.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
          Doctoral scholars at SIE will work closely with faculty members and industry stakeholders while contributing to 
          research that addresses critical challenges in India’s evolving innovation and entrepreneurial ecosystem.
          </p>
        </div>

        {/* Research Domains Table */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-[#3b4a6b] mb-6">
            Research Domains
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-[#3b4a6b] text-white">
                <tr>
                  <th className="p-3 border">Domain</th>
                  <th className="p-3 border">Research Areas</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border">
                  <td className="p-3 font-semibold border">
                    Entrepreneurship
                  </td>
                  <td className="p-3 border">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Venture Science</li>
                      <li>Entrepreneurship Management</li>
                      <li>Network Effects in Entrepreneurship</li>
                      <li>Capital Structure for Early-Stage Deep-Tech Ventures</li>
                      <li>Venture Studios and Venture Builders</li>
                    </ul>
                  </td>
                </tr>

                <tr className="border">
                  <td className="p-3 font-semibold border">
                    Innovation
                  </td>
                  <td className="p-3 border">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Design Innovation for the Creator Economy</li>
                      <li>AI in Innovation and Manufacturing</li>
                      <li>Open Innovation for Scaling Academic R&D</li>
                      <li>Innovation Ecosystems and Policy</li>
                      <li>Lab-to-Market Commercialisation Pathways</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Who Should Apply */}
        <div className="mb-14">
  <h2 className="text-2xl font-semibold text-[#3b4a6b] mb-6">
    Who Should Apply
  </h2>

  <p className="text-gray-700 mb-8">
    We encourage applications from candidates with strong academic backgrounds
    and research interest in areas such as:
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="bg-white shadow-md p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">
        Entrepreneurship & Innovation
      </h3>
      <p className="text-gray-600">
        Research on startup ecosystems, venture creation, and innovation-led
        economic growth.
      </p>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">
        Technology Commercialisation
      </h3>
      <p className="text-gray-600">
        Focus on translating academic research into market-ready technologies
        and scalable startups.
      </p>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">
        Innovation Policy & Ecosystems
      </h3>
      <p className="text-gray-600">
        Study policy frameworks, national innovation systems, and their role in
        economic transformation.
      </p>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">
        Deep-Tech Startups & Venture Creation
      </h3>
      <p className="text-gray-600">
        Research on science-driven startups, venture scaling, and technology
        entrepreneurship.
      </p>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg border">
      <h3 className="font-semibold text-lg mb-2">
        AI & Manufacturing Innovation
      </h3>
      <p className="text-gray-600">
        Exploring how artificial intelligence and advanced manufacturing
        technologies drive industrial innovation.
      </p>
    </div>

  </div>

  <p className="text-gray-700 mt-6">
    Applicants from engineering, management, economics, public policy, and
    related disciplines are welcome.
  </p>
</div>
        {/* Program Highlights */}
        <div className="mb-14">
  <h2 className="text-2xl font-semibold text-[#3b4a6b] mb-6">
    Program Highlights
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <p className="font-semibold">
        Opportunity to work with faculty and industry collaborators
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <p className="font-semibold">
        Exposure to deep-tech startup ecosystems
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <p className="font-semibold">
        Interdisciplinary research environment
      </p>
    </div>

    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <p className="font-semibold">
        Access to IIT Madras research facilities and innovation ecosystem
      </p>
    </div>

  </div>
</div>

        {/* Application Details */}
        <div className="mb-14">
  <h2 className="text-2xl font-semibold text-[#3b4a6b] mb-6">
    Application Details
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300">
      <tbody>
        <tr className="border">
          <td className="p-3 font-semibold bg-gray-100 w-1/3">
            Programme
          </td>
          <td className="p-3">
            PhD in Innovation & Entrepreneurship
          </td>
        </tr>

        <tr className="border">
          <td className="p-3 font-semibold bg-gray-100">
            Institution
          </td>
          <td className="p-3">
            School of Innovation and Entrepreneurship, IIT Madras
          </td>
        </tr>

        <tr className="border">
          <td className="p-3 font-semibold bg-gray-100">
            Mode
          </td>
          <td className="p-3">
            Full-Time Doctoral Programme
          </td>
        </tr>

        <tr className="border">
          <td className="p-3 font-semibold bg-gray-100">
            Application Process
          </td>
          <td className="p-3">
            Apply through the IIT Madras PhD Admissions Portal
          </td>
        </tr>

        <tr className="border">
          <td className="p-3 font-semibold bg-gray-100">
            Deadline
          </td>
          <td className="p-3">
            To be announced
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Additional text section */}
  <div className="mt-6 text-gray-700 leading-relaxed">
    <p>
      Interested candidates are invited to submit their applications through the 
      IIT Madras PhD admissions portal.
    </p>
    <p className="mt-2">
      More details on eligibility, application process, and deadlines will be 
      available on the website.
    </p>
  </div>
</div>

        {/* Apply Button */}
        <div className="text-center mb-16">
          <a
            href="https://forms.gle/otX6HXKsfTSkq9nv9"target="_blank"
        rel="noreferrer"
            className="bg-[#3b4a6b] text-white px-8 py-3 rounded-md text-lg hover:bg-[#2e3a56] transition"
          >
            Apply Now
          </a>
        </div>
        
      </div><Footer />
    </div>
  );
};

export default PhdAdmissions;

