import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  BookOpen,
  FileText,
  Info,
  List,
  GraduationCap
} from "lucide-react";
import Footer from "../components/footer";

const courseData = [
  {
    id: 1,
    code: "ID4101*",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Essentials for an Entrepreneur",

    description: `This course is the first part of a two-course series designed to provide students with an immersive and experiential introduction to entrepreneurship. It focuses on the essential foundations of becoming an entrepreneur, including understanding customers, identifying opportunities, and developing a value-driven mindset.

Students will explore the principles of customer discovery, learn how customer segments and value creation influence the success of entrepreneurial ventures, and develop the ability to identify and validate real-world problems.

By the end of the course, students will gain key insights into customer value and market needs, enabling them to progress to the next course in the series, where they will develop a Minimum Viable Product (MVP) and move toward venture creation and launch.`,

    content: [
      "Understanding the process and context in which breakthrough innovations emerge.",
      "Developing and articulating a clear entrepreneurial vision.",
      "Personal branding and identity building for aspiring entrepreneurs.",
      "Principles and frameworks of ideation for opportunity generation.",
      "Introduction to design thinking and creativity-driven problem solving,Rigorous feasibility analysis.",
      "Understanding customer value and developing value proposition maps.",
      "Customer discovery process based on lean start-up principles."
    ],

    pedagogy:
      "Blended theory and practice through lectures, case studies, workshops, group projects, quizzes, peer reviews, final presentations, flipped classroom sessions with pre-readings, tools-based learning, and guest lectures. The structure ensures progressive skill-building from mindset to execution.",

    modules: [
      "Module 1 – Introduction to Entrepreneurship",
      "Module 2 – Understanding the Financials",
      "Module 3 – Understanding Creativity and Innovation",
      "Module 4 – Understanding the Customer",
      "Module 5 – Risk Management and Business Planning",
      "Module 6 – Understanding Processes and Compliance",
      "Module 7 – Building an Organisation and Operations"
    ],

    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, 2009.",
      "The Design of Everyday Things — Don Norman, 2013."
    ],

    references: [
      "Supplementary readings and reference materials will be drawn from the above texts and additional resources provided by the instructor during the course."
    ],

    prerequisite: "Nil"
  },
  {
    id: 2,
    code: "ID4101",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Essentials for an Entrepreneur",

    description: `This course is the first part of a two-course series designed to provide students with an immersive and experiential introduction to entrepreneurship. It focuses on the essential foundations of becoming an entrepreneur, including understanding customers, identifying opportunities, and developing a value-driven mindset.
Students will explore the principles of customer discovery, learn how customer segments and value creation influence the success of entrepreneurial ventures, and develop the ability to identify and validate real-world problems. Through structured learning and practical exercises, the course helps students build a strong foundation in entrepreneurial thinking and problem discovery.
By the end of the course, students will gain key insights into customer value and market needs, enabling them to progress to the next course in the series, where they will develop a Minimum Viable Product (MVP) and move toward venture creation and launch.
`,
    content: [

      "Understanding the process and context in which breakthrough innovations emerge.",
      "Developing and articulating a clear entrepreneurial vision.",
      "Personal branding and identity building for aspiring entrepreneurs.",
      "Principles and frameworks of ideation for opportunity generation.",
      "Introduction to design thinking and creativity-driven problem solving,Rigorous feasibility analysis.",
      "Understanding customer value and developing value proposition maps.",
      "Customer discovery process based on lean start-up principles."
    ],

    pedagogy:
      "Blended theory and practice through lectures, case studies, workshops, group projects, quizzes, peer reviews, final presentations, flipped classroom sessions with pre-readings, tools-based learning, and guest lectures. The structure ensures progressive skill-building from mindset to execution.",

    modules: [
      "Module 1 – Introduction to Entrepreneurship",
      "Module 2 – Understanding the Financials",
      "Module 3 – Understanding Creativity and Innovation",
      "Module 4 – Understanding the Customer",
      "Module 5 – Risk Management and Business Planning",
      "Module 6 – Understanding Processes and Compliance",
      "Module 7 – Building an Organisation and Operations"
    ],

    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, 2009.",
      "The Design of Everyday Things — Don Norman, 2013."
    ],

    references: [
      "Supplementary readings and reference materials will be drawn from the above texts and additional resources provided by the instructor during the course."
    ],

    prerequisite: "Nil"
  },
  {
    id: 3,
    code: "ID5101",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Customer Discovery",

    description: `This course is the first part of a two-course series designed to provide students with an immersive and experiential introduction to entrepreneurship. Part I focuses on customer discovery, emphasizing the importance of understanding customer segments and creating meaningful value as foundational elements for successful entrepreneurial ventures.

    Students will learn to identify customer needs, uncover pain points, and validate assumptions through structured exploration and discovery-based approaches. By the end of the course, students will develop strong insights into customer value and market understanding, enabling them to progress to the subsequent course in the series, where they will develop a Minimum Viable Product (MVP) and work toward venture creation and launch.
`,

    content: [
      "Understanding how breakthrough innovations emerge.",
      "Building and articulating an entrepreneurial vision.",
      "Personal branding for entrepreneurs.",
      "Principles and frameworks of ideation.",
      "Introduction to design thinking, holistic thinking, and creativity-driven problem solving.",
      "Understanding customer value and developing a value proposition map.",
      "Customer discovery process using lean start-up principles."
    ],

    pedagogy:
      " lectures (cases), workshops (interviews/canvases),  projects (insights reports),  assessments (quizzes/journals/presentations). Flipped model with lean readings, emphasizing customer segments for venture foundations.",

    modules: [
      "Module 1 – Breakthrough innovations",
      "Module 2 – Entrepreneurial vision",
      "Module 3 – Personal branding",
      "Module 4 – Ideation frameworks",
      "Module 5 – Design/holistic thinking",
      "Module 6 – Customer value & propositions",
      "Module 7 – Lean discovery (needs/pain points/validation)",
      "Module 8 –  Synthesis for Part II MVP"
    ],

    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
      "The Design of Everyday Things — Don Norman, Basic Books, 2013."
    ],

    references: [
      "Additional readings and supplementary resources will be recommended during the course."
    ],

    prerequisite: "Nil"
  },
  {
    id: 4,
    code: "ID5102",
    title: "Innovative Entrepreneur - 2",
    subtitle: "Launching Your Venture",

    description: `This course is the second part of a two-course series designed to provide students with an immersive and practice-oriented experience in entrepreneurship. While Part I focuses on customer discovery and identifying viable customer segments, Part II emphasizes venture launch and execution.

    Building on insights gained from customer discovery, this course guides students through the process of maturing validated ideas into executable ventures. Students will learn how to translate opportunities into sustainable business models, develop product and go-to-market strategies, and understand the operational and strategic elements required for launching a venture.
`,

    content: [
      "Understanding and analyzing sales processes.",
      "Building and evaluating business models.",
      "Hypothesis development, validation, and testing.",
      "Fundamental components and processes of venture creation.",
      "Costing and financial considerations, including customer acquisition costs.",
      "Defining and evaluating minimum viable business models.",
      "Development of product and execution plans."
    ],

    pedagogy:
      " Need to complete ID4101 / ID4101* / ID5101/ Start up team .",

    modules: [
      
    ],

    textbooks: [
      "Core reading materials and instructor-provided resources will be shared during the course."
    ],

    references: [
      "Additional readings and supplementary resources will be recommended during the course."
    ],

    prerequisite: "Nil"
  },
  {
    id: 5,
    code: "ID4031",
    title: "Innovation and Entrepreneurship",
    subtitle: "A Multidisciplinary Approach",
  
    description: `This course adopts a multidisciplinary approach to innovation and entrepreneurship, enabling learners to identify meaningful problems that can be addressed through science and technology, and to translate ideas into value-creating ventures.
  
  Students will learn to mobilize resources for innovation, develop entrepreneurial thinking, prepare compelling business plans, and effectively communicate and market both themselves and their ideas.
  
  Through lectures, assignments, discussions, and experiential learning activities, the course provides exposure to real-world entrepreneurial journeys and emphasizes the transformation of technology-driven ideas into viable businesses.`,
  
    content: [
      "course is structured around lecture modules, assignments, group discussions, case analyses, and business idea development activities. These components are designed to provide a comprehensive understanding of entrepreneurship and innovation, integrating theoretical concepts with applied learning.",
      "Teaching responsibilities are distributed among multiple faculty members, each contributing domain-specific expertise in different aspects of entrepreneurship and innovation to ensure academic depth and interdisciplinary perspective." ,
      
    ],
  
    pedagogy:
      `The course adopts an experiential and interactive pedagogical approach. In addition to classroom lectures and discussions, students will engage in structured case analyses and collaborative activities aimed at developing viable business ideas.

Students will also participate in interaction sessions with entrepreneurs, alumni, and industry executives. These engagements are intended to expose students to real-world challenges and opportunities in venture creation, particularly those emerging from academic and research environments, thereby bridging theory and practice.`,
    
    modules: [
      "Module 1 – Entrepreneurial Thinking and Innovation Value Chain",
      "Module 2 – Incubation and Venture Development",
      "Module 3 – Value Creation and Growth",
      "Module 4 – From Ideas to Businesses"
    ],
  
    textbooks: [
      "Chemistry Entrepreneurship — Javier Garcia-Martinez and Kunhao Li, Wiley-VCH, 2022.",
      "Empowering India – Ideas for Action by Scientists and Engineers — T. Pradeep and Krishnan Narayanan, Indian Academy of Sciences, 2023.",
      "The Lean Startup — Eric Ries, Penguin Random House, 2019.",
      "Innovation and Entrepreneurship — Peter F. Drucker, Harper Business Edition, 1993.",
      "Startup Opportunities — Sean Wise and Brad Feld, Wiley, 2018.",
      "Entrepreneurship Simplified — Ashok Soota and S. R. Gopalan, Penguin Random House, 2021.",
      "The Art of the Start 2.0 — Guy Kawasaki, Penguin Random House, 2015.",
      "Entrepreneurship — Robert D. Hirsh et al., McGraw Hill (India), 2020.",
      "Entrepreneurship: Theory, Process, Practice — Donald F. Kuratko, Cengage, 2022.",
      "Case studies on emerging technologies from technical journals and other curated resources."
    ],
  
    references: [
      "Additional readings and resources will be provided during the course."
    ],
  
    prerequisite: "Nil"
  },
  {
    id: 6,
    code: "ID5031",
    title: "Innovation and Entrepreneurship",
    subtitle: "A Multidisciplinary Perspective",
  
    description: `This course adopts a multidisciplinary perspective to innovation and entrepreneurship, enabling learners to identify meaningful problems that can be addressed through science and technology and to translate ideas into impactful ventures. Students will develop the ability to mobilize resources for innovation, create and enhance value, prepare clear and compelling business plans, and communicate and market their ideas effectively.

    Through experiential learning, interaction with practitioners, and applied assignments, the course encourages students to explore opportunities for entrepreneurship emerging from research and advanced technologies.`,
  
    content: [
      `The course is structured around a combination of lecture modules, assignments, discussions, case studies, and business idea development activities. These components are integrated to ensure a balanced approach between theoretical foundations and applied learning.

      Evaluation is designed to incorporate all these elements, thereby assessing both conceptual understanding and practical application. Different modules of the course will be delivered by faculty members with domain-specific expertise to ensure depth and rigor in each thematic area.`,

    ],
  
    pedagogy:[
      "The course is delivered through lecture modules, assignments, discussions, case studies, and business idea development activities. Evaluation integrates these components to ensure both conceptual understanding and practical application.",
"Students will participate in interaction sessions with entrepreneurs, business executives, faculty, and alumni who have successfully built companies, providing exposure to real-world entrepreneurial experiences. Different modules will be taught by faculty members with domain-specific expertise.",
],
    modules: [
      "Module 1 – Entrepreneurial Thinking and Innovation Value Chain",
      "Module 2 – Incubation and Venture Development",
      "Module 3 –  Value Creation and Growth",
      "Module 4 – Ideas to Businesses"
    ],
  
    textbooks: [
      "Chemistry Entrepreneurship — Javier Garcia-Martinez and Kunhao Li, Wiley-VCH, 2022.",
      "Empowering India – Ideas for Action by Scientists and Engineers — T. Pradeep and Krishnan Narayanan, Indian Academy of Sciences, 2023.",
      "The Lean Startup — Eric Ries, Penguin Random House, 2019.",
      "Innovation and Entrepreneurship — Peter F. Drucker, Harper Business Edition, 1993.",
      "Startup Opportunities — Sean Wise and Brad Feld, Wiley, 2018.",
      "Entrepreneurship Simplified — Ashok Soota and S. R. Gopalan, Penguin Random House, 2021.",
      "The Art of the Start 2.0 — Guy Kawasaki, Penguin Random House, 2015.",
      "Entrepreneurship — Robert D. Hirsh et al., McGraw Hill (India), 2020.",
      "Entrepreneurship: Theory, Process, Practice — Donald F. Kuratko, Cengage, 2022.",
      "Case studies on emerging technologies from technical journals and curated resources."
    ],
  
    references: [
      "Additional reference materials and readings will be provided during the course."
    ],
  
    prerequisite: "Nil"
  }
];

const Courses = () => {
  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  const toggleCourse = (id) => {
    setOpenId(openId === id ? null : id);
    setActiveTab("description");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="text-center py-6 mt-20 text-4xl font-semibold text-[#3b4a6b]">
        Academic Courses
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-16 h-1 bg-[#3b4a6b] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-10">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md border mb-6"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleCourse(course.id)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <div>
                <p className="text-sm text-blue-800 font-semibold">
                  {course.code}
                </p>
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {course.subtitle}
                </p>
              </div>

              {openId === course.id ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Expanded Section */}
            {openId === course.id && (
              <div className="border-t p-6 space-y-6">

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 border-b pb-4">
                  {[
                    { key: "description", label: "Description", icon: <Info size={16} /> },
                    { key: "content", label: "Course Content", icon: <Layers size={16} /> },
                    { key: "pedagogy", label: "Pedagogy", icon: <GraduationCap size={16} /> },
                    { key: "modules", label: "Modules", icon: <List size={16} /> },
                    { key: "textbooks", label: "Textbooks", icon: <BookOpen size={16} /> },
                    { key: "references", label: "References", icon: <FileText size={16} /> },
                    { key: "prerequisite", label: "Prerequisite", icon: <FileText size={16} /> }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                        activeTab === tab.key
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}

                {activeTab === "description" && (
                  <div className="text-gray-700 whitespace-pre-line">
                    {course.description}
                  </div>
                )}

                {activeTab === "content" && (
                  <div className="space-y-3">
                    {course.content.map((item, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl border">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "pedagogy" && (
                  <div className="text-gray-700">
                    {course.pedagogy}
                  </div>
                )}

                {activeTab === "modules" && (
                  <div className="space-y-3">
                    {course.modules.map((module, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl border">
                        {module}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "textbooks" && (
                  <div className="space-y-3">
                    {course.textbooks.map((book, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl border">
                        {book}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "references" && (
                  <div className="space-y-3">
                    {course.references.map((ref, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl border">
                        {ref}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "prerequisite" && (
                  <div className="p-4 bg-gray-50 rounded-xl border">
                    {course.prerequisite}
                  </div>
                )}

              </div>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Courses;