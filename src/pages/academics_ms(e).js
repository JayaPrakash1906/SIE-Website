import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const projects = [
 { topic: "Development of alternative battery technology", description: "Design and development of high-performance zinc-based (Zn-air and Zn-ion) batteries addressing corrosion, dendrite formation, and efficiency challenges for next-generation energy storage.", }, 
 { topic: "Distributed Energy Resource Management and Scheduling for RE sources and EV sinks", description: "Development of real-time monitoring and forecasting algorithms for rooftop solar and EV charging integration to enhance grid stability. Enables green day-ahead market readiness and optimized tariff management through smarter energy usage.", }, 
 { topic: "Global AI-Enabled E-Platform for on-Demand Contract Prototype Manufacturing", description: "Create a ZETWERK-style global portal for high-quality prototype creation and manufacturing. Connect users with reliable, affordable manufacturers from top hubs.", }, 
 { topic: "All-Weather Portable Refrigeration Systems", description: "Reliable cooling protects food, vaccines, and pharma in energy-scarce areas—but vapor-compression needs constant power, and absorption systems are bulky and immobile. India's roadside vendors suffer spoilage losses from inefficient ice methods; we need compact, compressor-free, renewable-powered coolers.", }, 
 { topic: "A Hand-held Multiplexed Heavy Metal Ions Sensor for Water Quality Testing using U-FOS Technology", description: "Development of a low-cost U-bent fiber optic sensing (U-FOS) platform for rapid, ultrasensitive on-site detection of heavy metal ions in water.Enables lab-grade sensitivity in portable format for decentralized monitoring in resource-limited settings.", }, 
 { topic: "Energy efficient electric vehicles for fruits and vegetable vendors", description: "Design and fabrication of an energy-efficient mobile vending vehicle with integrated temperature control, weather protection, and optimized display for fruits and vegetables.Scalable and modular platform adaptable for larger configurations, including mobile restaurant applications.", }, 
 { topic: "Development of a Data-Driven Platform for Optimal Management of Construction and Demolition Waste Management for cities", description: "Development of an integrated digital waste-tracking system using computer vision and GIS technologies to detect, quantify, and analyze Construction & Demolition (C&D) waste in urban areas.Aims to support cities and government agencies with data-driven analytics and optimized collection planning for effective waste management.", }, 
 { topic: "ization Integrated Decarbon Solutions for Indian Steel Industries: Technology Pilots, Roadmaps, and Implementation Support", description: "Design and demonstration of a phased decarbonization roadmap for the Indian steel sector aligned with national net-zero goals and green steel initiatives. Includes emissions baseline assessment, technology evaluation, plant and cluster-level transition pathways, and capacity building for MSMEs and secondary producers.", }, 
 { topic: "Measurement of blood-based biomarkers", description: "Development of a scalable microfluidics-based diagnostic platform for rapid, low-cost isolation and quantification of target cells and biomarkers from complex biological fluids.Initial application focuses on early mastitis detection in milk through somatic cell analysis, enabling portable, point-of-need dairy health monitoring and future multi-diagnostic expansion.", }, 
 { topic: "Development and Commercialisation of an Affordable Wearable Neuromodulation Device for Migraine Relief in India Using Hybrid Energy Storage", description: "Development of accessible, technology-enabled solutions for improved diagnosis, monitoring, and management of migraine, a leading cause of disability affecting nearly 200 million Indians. Aims to reduce productivity loss, economic burden, and gender disparities by enabling timely, evidence-based care beyond over-the-counter treatment.", }, 
 { topic: "Resource recovery from plastic waste and product development", description: "Development of decentralized, mobile and solar-powered processing platforms to convert polyolefin-based plastic packaging waste into value-added products.Focuses on technology development and feasibility to enable distributed recycling, job creation, and income generation in semi-urban and rural regions.", }, 
 { topic: "Laser-processed medical materials and devices - lab-to-market", description: "Development of bio-inspired, femtosecond laser-structured polypropylene surgical meshes with tunable surface properties for enhanced biocompatibility and cell response.Enables scalable, chemical-free manufacturing of next-generation implants with customizable wettability and improved cellular integration.", }, 
 { topic: "Digital-twinning and AI-enhancement for Molten Salt Reactors for Nuclear Energy", description: "Development of a high-fidelity Digital Twin for a 5 MW thorium-based Molten Salt Reactor using OpenModelica and MEDA frameworks for safety assurance and operational optimization.Integrates coupled neutronic–thermal–hydraulic modeling with natural convection physics and real thermophysical data for accurate, real-time reactor behavior simulation.", }, 
 { topic: "Customizable silicone wearables in healthcare", description: "Development of a multi-material extrusion 3D printing platform for high-viscosity silicone and elastomeric materials with UV-assisted curing for complex geometries. Enables customizable, patient-specific biomedical products such as prosthetics and non-implant care devices.", }, 
 { topic: "AI based ERP for NDT Business", description: "Development of an AI-enhanced intelligent platform for manpower planning, workflow optimization, reporting, and data management in Non-Destructive Testing (NDT).Aims to improve operational efficiency, accuracy, and digital integration for industrial inspection and compliance.", }, 
 { topic: "Development of a Smart Robotic System for Nondestructive Evaluation of Pavement Systems ", description: "Development of an automated robotic platform for non-destructive surface wave testing to estimate individual layer properties of bituminous pavements.Integrates robotic field systems with advanced on-site signal processing and inversion algorithms for accurate layer modulus and thickness evaluation.", }, 
 { topic: "Development of a Machine Learning-Based Lubricant Condition Monitoring System for Electric Vehicle Applications ", description: "Development of a machine learning-based multi-parameter lubricant condition monitoring system for electric vehicle applications.Integrates innovative machine design with AI-driven analytics for real-time health assessment and predictive maintenance.", },
 { topic: " 2D material based devices for next generation communication", description: "Development of next-generation communication devices using advanced 2D materials to enable high-performance operation at mmWave and terahertz frequencies.Aims to deliver faster, lighter, and energy-efficient hardware for 5G/6G, satellite, IoT, and wearable communication systems.", },
 { topic: " Development of field assisted ultrafast manufacturing technologies", description: "Advancement and commercialization of a field-assisted ultrafast manufacturing platform based on Flash Sintering for rapid, energy-efficient densification of advanced ceramics.Focuses on system optimization, real-time process control, safety, and scalability to transition from lab-scale prototype to industry-ready deep-tech solution.", },
 { topic: " Lithium-ion Battery Cathode Active Material Manufacturing", description: "Synthesis and development of LFP, NMC, and Ni-rich cathode active materials for lithium-ion batteries using a novel scalable rapid synthesis process.Aims to enhance material performance, reduce production time, and enable cost-effective large-scale manufacturing.", },
 { topic: "HumanVoice: An Adaptive Human-like Voice AI System for Personalized Child Learning and Ecosystem Development ", description: "Development of HumanVoice, an AI-powered voice companion that delivers emotionally adaptive, curriculum-aligned learning experiences for children aged 3–12.Combines human-like neural speech, real-time personalization, and multilingual content to extend quality education beyond the classroom.", },
 { topic: "Development of a Carbon Credit Trading System ", description: "Development of a financial and market architecture for voluntary carbon trading with a digital platform for transparent credit ownership and exchange. Incorporates revenue-sharing models and portfolio management tools to enable efficient, scalable carbon market participation.", },
 { topic: "Development of Electrically-driven Single Photon Emitters for Quantum Communication ", description: "Development of electrically driven on-demand single-photon sources for scalable quantum communication and secure quantum key distribution (QKD). Focuses on integrating compact quantum light emitters into photonic circuits and fiber networks, advancing prototypes toward real-world quantum technology applications.", },
 { topic: "Bridging Discovery and Delivery: Scalable Innovation in Cancer Drug Development", description: "Development of scalable, GMP-ready manufacturing platforms and smart quality systems to enable reliable and affordable production of novel cancer therapeutics. Focuses on strategic translation from lab to market through regulatory alignment, industry partnerships, and sustainable business models.", },
 { topic: "Managing next generation autonomous factories using digital twins ", description: "Development of a digital twin platform for autonomous factories by integrating 3D printers, CNC machines, robotic arms, and AMRs with real-time data and detailed CAD models. Enables advanced simulation, adaptive control, and real-time optimization to improve efficiency and intelligent decision-making in smart manufacturing.", },
 { topic: " Design and Implementation of Real Time Digital Twin Based Kidney Disease Diagnostic Device", description: "Development of a digital twin–based kidney health monitoring system for diabetes patients including (i) personalized kidney function monitoring sensors, (ii) predictive diagnostics, and (iii) clinical data–driven research insights. Incorporates a patient-specific wearable ultrasound patch for continuous, biocompatible, and real-time monitoring of kidney health.", },
  { topic: "Optimal Battery Thermal Management System Design with Performance–Cost Trade-Off for Second-Life Battery Packs in Solar PV-Based Rural EV Charging Stations ", description: "Development of an optimized battery thermal management system (BTMS) for second-life lithium-ion battery packs used in PV-integrated rural EV charging stations. Focuses on electro-thermal modeling, thermal architecture evaluation, and cost–performance optimization to enhance safety, reliability, and circular battery utilization.", },
{ topic: " Ball tracking system development for sports analytics", description: "Ball and spin tracking is a foundational technology that can make a difference to multiple sports. In this context, we intend to develop an umpire decision review system that can have the fidelity of a human umpire, while minimizing error possibility.", },
{ topic: "Drone based air quality monitoring ", description: "Mount Kaatru device on a drone to get 3-D spatio-temporal characterization of air pollution", },
];

const Academics = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Page Title */}
      <div className="text-center py-8 mt-16 px-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-[#3b4a6b]">
          MS (Entrepreneurship)
        </h2>
      </div>

      {/* About Section */}
      <div className="w-full px-6 lg:px-20">
        <h1 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-4">
          About the Program
        </h1>

        <p className="text-sm sm:text-base text-justify mb-4 leading-relaxed">
        IIT Madras is renowned as India's premier institute for promoting startups, 
        incubation, and entrepreneurship, with a special focus on deep-tech ventures 
        supported by one of the country's most dynamic ecosystems. Since its launch in 1982-83, 
        the MS (Entrepreneurship) by Research program has pioneered entrepreneurship education, 
        steadily maturing over four decades to become a global benchmark—as evidenced by the 
        international and national awards bestowed on our scholars and their successful startups.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4 leading-relaxed">
        We guide selected full-time scholars through a structured journey: discovering entrepreneurial 
        opportunities, rigorously researching ideas under expert supervision, mastering taught courses, 
        and gaining invaluable mentorship from accomplished entrepreneurs and ecosystem leaders. 
        This holistic approach equips you to formally establish and scale ventures.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4 leading-relaxed">
        Program alumni have earned key technology patents, many commercialized through strategic transfers 
        to leading organizations across sectors. If our program's rich legacy inspires you, apply today to 
        contribute to its storied future and drive India's innovation wave.
        </p>

        <p className="text-sm sm:text-base text-blue-600 font-medium mb-8">
        Currently we have 43 students who are well on their way to discover exciting opportunities in the 
        projects they applied for. Out of them, 4 are already incorporating their start-up and a few more are in the discovery stage.
        </p>

        <div className="p-6 text-left">
  <h2 className="text-xl font-semibold mb-4 text-sky-700">
    Eligibility to Apply
  </h2>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>B.Tech / B.E. or any postgraduate degree (M.Com / M.A.)</li>
    <li>Must have graduated from a recognized university</li>
    <li>
      All candidates applying for the MS in Entrepreneurship must submit a
      startup proposal
    </li>
  </ul>

  {/* <div className="flex justify-center mt-6">
    <a
      href="https://forms.gle/SHQ9V1odSujjbYHp6"  target="_blank"
        rel="noreferrer"
      className="bg-sky-600 text-white px-6 py-2 rounded-md font-medium hover:bg-sky-700 transition duration-200"
    >
      Click Here to Apply
    </a>
  </div> */}
</div>
      </div>

      

      {/* Projects Section */}
      <div className="w-full px-4 sm:px-6 lg:px-20 pb-16">
        <h1 className="text-xl sm:text-3xl font-semibold text-sky-700 mb-6">
          List of Projects Available for 2026 July Admissions
        </h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse text-sm sm:text-base">
            <thead className="bg-sky-100">
              <tr>
                <th className="border px-4 py-3 text-left font-semibold">
                  S.No
                </th>
                <th className="border px-4 py-3 text-left font-semibold">
                  Topic of the Proposed Project
                </th>
                <th className="border px-4 py-3 text-left font-semibold">
                  Description
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="border px-4 py-3 font-medium">
                    {`P${String(index + 1).padStart(2, "0")}`}
                  </td>
                  <td className="border px-4 py-3">{item.topic}</td>
                  <td className="border px-4 py-3">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Academics;