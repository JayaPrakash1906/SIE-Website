import React from 'react';
import nirmaanImg from '../assets/nirmaan.jpg'; // Replace with actual path
import cfiImg from '../assets/sie-logo.png'; 

const Initiatives = () => {
    const sections = [
      {
        title: "Nirmaan",
        description:
          "Nirmaan is IIT Madras' pre-incubator offering students mentorship, workspace, and funding to transform ideas into scalable startups. It’s India’s first such initiative within a college campus.",
        image: nirmaanImg,
        bg: "bg-gradient-to-r from-green-100 via-white to-green-50",
        accent: "text-green-600",
        glass: "backdrop-blur-xl bg-white/40",
      },
      {
        title: "Centre for Innovation (CFI)",
        description:
          "CFI is a student-led innovation lab with hobby clubs, competition teams, and mentoring. It encourages ‘learning by doing’ and is one of IITM’s flagship creativity hubs.",
        image: cfiImg,
        bg: "bg-gradient-to-r from-red-100 via-white to-red-50",
        accent: "text-red-600",
        glass: "backdrop-blur-xl bg-white/40",
      },
    ];
  
    return (
      <div className="px-6 md:px-24 py-20 space-y-20">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`${sec.bg} rounded-3xl shadow-xl overflow-hidden relative p-8 md:p-14 flex flex-col md:flex-row items-center gap-10`}
          >
            {/* Content Card */}
            <div
              className={`md:w-2/3 z-10 ${sec.glass} rounded-2xl p-6 md:p-10 shadow-md`}
            >
              <h2 className={`text-3xl md:text-4xl font-extrabold ${sec.accent}`}>
                {sec.title}
              </h2>
              <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                {sec.description}
              </p>
              <button
                className={`mt-6 px-6 py-2 rounded-full text-white font-medium ${
                  index % 2 === 0
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                } transition`}
              >
                Explore More
              </button>
            </div>
  
            {/* Floating Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Initiatives;