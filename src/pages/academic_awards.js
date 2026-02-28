import React from 'react'
import Navbar from '../components/navbar'
import { FaLinkedin } from 'react-icons/fa'
import img1 from "../assets/PGFIR/kgmg2025-1.jpg"
import img2 from "../assets/UGFIR/ugfir_2025-6.jpg"

const awards = [
  {
    id: '01',
    name: 'Seshan Rammohan Nirmaan Award for Entrepreneurship and Innovation',
    criteria:
      'Deserving Startup from Nirmaan — Preferably Biotechnology / Life Sciences',
    scope: 'Nirmaan Programme',
  },
  {
    id: '02',
    name: 'Chinmay Deodhar Prize',
    criteria: 'Endowment Award for one Student',
    scope: 'Across IIT Madras',
    awardees: [
      {
        year: '2024–2025',
        name: 'Sumukha V Nadig',
        image: img1, // put image inside public/awardees
        linkedin: 'https://www.linkedin.com/in/sumukhanadig8/',
      },
    ],
  },
  {
    id: '03',
    name: 'Ashok Khanna Award for Entrepreneurship',
    criteria: 'Endowment Award for one Student',
    scope: 'Across IIT Madras',
    awardees: [
      {
        year: '2024–2025',
        name: 'Asfaq Jalal',
        image: img2,
        linkedin: 'https://www.linkedin.com/in/asfaqjalal/',
      },
    ],
  },
]

const AcademicAwards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="text-center py-6 mt-20 text-4xl font-semibold text-[#3b4a6b]">
        Academic Awards
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-16 h-1 bg-[#3b4a6b] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-8">
        {awards.map((award) => (
          <div
            key={award.id}
            className="border border-[#3b4a6b]/20 rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-xs font-bold text-white bg-[#3b4a6b] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                {award.id}
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#3b4a6b] mb-2">
                  {award.name}
                </h2>

                <span className="inline-block text-xs text-[#3b4a6b] border border-[#3b4a6b]/40 rounded-full px-3 py-1 mb-3">
                  {award.scope}
                </span>

                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-700">
                    Criteria:
                  </span>{' '}
                  {award.criteria}
                </div>

                {/* Awardees */}
                {award.awardees && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {award.awardees.map((person, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border"
                      >
                        {/* Image */}
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#3b4a6b]"
                        />

                        {/* Info */}
                        <div>
                          <div className="font-semibold text-[#3b4a6b]">
                            {person.name}
                          </div>
                          <div className="text-xs text-gray-500 mb-1">
                            {person.year}
                          </div>

                          {/* LinkedIn */}
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                          >
                            <FaLinkedin />
                            View Profile
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicAwards