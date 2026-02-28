import React from 'react'
import Navbar from "../components/navbar"

const academics = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-[#3b4a6b]">
          MS (Entrepreneurship)
        </h2>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mb-4">
          About the Program
        </h1>

        <p className="text-sm sm:text-base text-justify mb-4">
        IIT Madras is renowned as India's premier institute for promoting startups, incubation, and entrepreneurship, 
        with a special focus on deep-tech ventures supported by one of the country's most dynamic ecosystems. 
        Since its launch in 1982-83, the MS (Entrepreneurship) by Research program has pioneered entrepreneurship 
        education, steadily maturing over four decades to become a global benchmark—as evidenced by the international 
        and national awards bestowed on our scholars and their successful startups.

        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
          We guide selected full-time scholars through a structured journey: discovering entrepreneurial opportunities, 
          rigorously researching ideas under expert supervision, mastering taught courses, and gaining invaluable mentorship 
          from accomplished entrepreneurs and ecosystem leaders. This holistic approach equips you to formally establish and 
          scale ventures.

        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
        Program alumni have earned key technology patents, many commercialized through strategic transfers to leading organizations 
        across sectors. If our program's rich legacy inspires you, apply today to contribute to its storied future and drive India's 
        innovation wave.

        </p>

        <p className="text-sm sm:text-base text-justify mb-4 text-blue-600">
          Currently we have 43 students who are well on their way to discover exciting opportunities in the projects
          they applied for. Out of them, 4 are already incorporating their start-up and a few more are in the discovery
          stage.
        </p>

        {/* Next Steps */}
        {/* <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mt-8 mb-2">Next steps:</h2>
        <p className="text-sm sm:text-base text-justify mb-12">
          Please find below a list of topics/projects currently open for applications. You may select up to 2 topics that
          align with your interests and background. Once you’ve made your selection, kindly submit your preferences using
          the ‘Submit Preferences’ button at the top of the page. Shortlisted applicants will be invited for an interview.
        </p>
         <div className="text-left py-6 px-4 md:px-20 lg:px-40 mt-10 font-dmsans">
              <h1 className="text-2xl font-semibold text-sky-700 mb-4">
                The final Thesis submitted will cover the following aspects for award of degree
              </h1> */}
              {/* <img
                src={img1}
                alt="Application Process Flow"
                className="rounded-md mt-8 w-full max-w-4xl mx-auto"
              /> */}
            {/* </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-4">
          List of Projects Available for 2026 July Admissions
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-sky-100 text-left">
              <tr>
                <th className="border border-gray-300 px-4 py-2">S.No.</th>
                <th className="border border-gray-300 px-4 py-2">Topic of the Proposed Project</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Development of alternative battery technology",
                "Distributed Energy Resource Management and Scheduling for RE sources and EV sinks",
                "Global AI-Enabled E-Platform for on-Demand Contract Prototype Manufacturing",
                "All-Weather Portable Refrigeration Systems",
                "A Hand-held Multiplexed Heavy Metal Ions Sensor for Water Quality Testing using U-FOS Technology",
                "Energy efficient electric vehicles for fruits and vegetable vendors",
                "Development of a Data-Driven Platform for Optimal Management of Construction and Demolition Waste Management for cities",
                "izationIntegrated Decarbon Solutions for Indian Steel Industries: Technology Pilots, Roadmaps, and Implementation Support",
                "Measurement of blood-based biomarkers",
                "Development and Commercialisation of an Affordable Wearable Neuromodulation Device for Migraine Relief in India Using Hybrid Energy Storage",
                "Resource recovery from plastic waste and product development",
                "Digital-twinning and AI-enhancement for Molten Salt Reactors for Nuclear Energy",
                "Laser-processed medical materials and devices - lab-to-market",
                "Customizable silicone wearables in healthcare",
                "AI based ERP for NDT Business",
                "Development of a Smart Robotic System for Nondestructive Evaluation of Pavement Systems",
                "Development of a Machine Learning-Based Lubricant Condition Monitoring System for Electric Vehicle Applications",
                "2D material based devices for next generation communication",
                "Development of field assisted ultrafast manufacturing technologies"
              ].map((topic, index) => (
                <tr key={index}>
                   <td className="border border-gray-300 px-4 py-2">{`P${String(index + 1).padStart(2, '0')}`}</td>
                  <td className="border border-gray-300 px-4 py-2">{topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4'></div>
      </div>
      </div>
    </div>
  )
}

export default academics
