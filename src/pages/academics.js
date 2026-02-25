import React from 'react'
import Navbar from "../components/navbar"

const academics = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-sky-700">
          MS (Entrepreneurship)
        </h2>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mb-4">
          About the Program
        </h1>

        <p className="text-sm sm:text-base text-justify mb-4">
          IIT Madras is widely admired as the leading Institute in India promoting Start-ups, incubation,
          and entrepreneurship promotion and support systems, more particularly entrepreneurial ventures
          of the deep technology variety, with an enviable start-up ecosystem. Offered since 1982-83,
          the MS (Entrepreneurship) by Research programme is India's torchbearer among all Institutions
          of higher learning that have aimed to promote entrepreneurship via their programmes. Over the
          last four decades, it has matured steadily and strongly to emerge as a benchmark among all
          entrepreneurship-focused Institutional programmes, as can be evidenced by the prestigious
          international and national awards and honours conferred on the scholars and their start-ups.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
          Selected scholars will be guided to systematically and diligently discover entrepreneurial opportunities
          and formally establish their start-ups via an effective combination of taught courses, intense research
          supported by astute supervision, and mentorship by highly accomplished entrepreneurs and others of the
          start-up ecosystem.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
          Earlier scholars of the programme have been granted valuable technology patents, which have been
          commercialized through formal technology transfers to leading organizations in specific economic sectors.
          Now, this full-time programme invites applications from among eligible persons, who would be inspired by
          its remarkable history and wish to contribute significantly to its future history.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4 text-blue-600">
          Currently we have 31 students who are well on their way to discover exciting opportunities in the projects
          they applied for. Out of them, 4 are already incorporating their start-up and a few more are in the discovery
          stage.
        </p>

        {/* Next Steps */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mt-8 mb-2">Next steps:</h2>
        <p className="text-sm sm:text-base text-justify mb-12">
          Please find below a list of topics/projects currently open for applications. You may select up to 2 topics that
          align with your interests and background. Once you’ve made your selection, kindly submit your preferences using
          the ‘Submit Preferences’ button at the top of the page. Shortlisted applicants will be invited for an interview.
        </p>
         <div className="text-left py-6 px-4 md:px-20 lg:px-40 mt-10 font-dmsans">
              <h1 className="text-2xl font-semibold text-sky-700 mb-4">
                The final Thesis submitted will cover the following aspects for award of degree
              </h1>
              {/* <img
                src={img1}
                alt="Application Process Flow"
                className="rounded-md mt-8 w-full max-w-4xl mx-auto"
              /> */}
            </div>
      </div>
    </div>
  )
}

export default academics
