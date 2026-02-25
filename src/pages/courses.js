import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  ChevronDown,
  ChevronUp,
  Layers,
  BookOpen,
  FileText,
} from "lucide-react";

const courseData = [
  {
    id: 1,
    code: "ID4101*",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Essentials of an Entrepreneur",
    content: [
      "Understanding the process and context in which breakthrough innovations emerge.",
      "Developing and articulating a clear entrepreneurial vision.",
      "Personal branding and identity building for aspiring entrepreneurs.",
      "Principles and frameworks of ideation for opportunity generation.",
      "Introduction to design thinking, holistic thinking, and creativity-driven problem solving.",
      "Understanding customer value and developing effective value proposition maps",
      "Lean startup customer discovery",
    ],
    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
      "The Design of Everyday Things — Don Norman, Basic Books, 2013.",
    ],
    references: ["Supplementary readings and reference materials will be drawn from the above texts and additional resources provided by the instructor during the course."],
  },
  {
    id: 2,
    code: "ID4101",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Essentials of an Entrepreneur",
    content: [
      "Understanding the process and context in which breakthrough innovations emerge.",
      "Developing and articulating a clear entrepreneurial vision.",
      "Personal branding and identity building for aspiring entrepreneurs.",
      "Principles and frameworks of ideation for opportunity generation.",
      "Introduction to design thinking, holistic thinking, and creativity-driven problem solving.",
      "Understanding customer value and developing effective value proposition maps",
      "Lean startup customer discovery",
    ],
    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
      "The Design of Everyday Things — Don Norman, Basic Books, 2013.",
    ],
    references: ["Supplementary readings and reference materials will be drawn from the above texts and additional resources provided by the instructor during the course."],
  },
  {
    id: 3,
    code: "ID5101",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Customer Discovery",
    content: [
      "Understanding how breakthrough innovations emerge.",
      "Building and articulating an entrepreneurial vision.",
      "Personal branding for entrepreneurs.",
      "Principles and frameworks of ideation.",
      "Introduction to design thinking, holistic thinking, and creativity-driven problem solving.",
      "Understanding customer value and developing a value proposition map.",
      "Customer discovery process using lean start-up principles.",
    ],
    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
      "The Design of Everyday Things — Don Norman, Basic Books, 2013.",
    ],
    references: ["Additional readings and supplementary resources will be recommended during the course."],
  },
  {
    id: 4,
    code: "ID5102",
    title: "Innovative Entrepreneur - 1",
    subtitle: "Launching Your Venture",
    content: [
      "Understanding and analyzing sales processes.",
      "Building and evaluating business models.",
      "Hypothesis development, validation, and testing.",
      "Fundamental components and processes of venture creation.",
      "Costing and financial considerations, including customer acquisition costs.",
      "Defining and evaluating minimum viable business models.",
      "Development of product and execution plans.",
    ],
    textbooks: [
        "Core reading materials and instructor-provided resources will be shared during the course.",
    ],
    references: [
        "Disciplined Entrepreneurship — Bill Aulet.",
        "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
        "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
        "The Design of Everyday Things — Don Norman, Basic Books, 2013."
    ],
  },
  {
    id: 5,
    code: "ID4031",
    title: "Innovation and Entrepreneurship",
    subtitle: "A Multidisciplinary Approach",
    content: [
      "Understanding how breakthrough innovations emerge.",
      "Building and articulating an entrepreneurial vision.",
      "Personal branding for entrepreneurs.",
      "Principles and frameworks of ideation.",
      "Introduction to design thinking, holistic thinking, and creativity-driven problem solving.",
      "Understanding customer value and developing a value proposition map.",
      "Customer discovery process using lean start-up principles.",
    ],
    textbooks: [
      "The Startup Owner's Manual — Steve Blank and Bob Dorf, BookBaby, 2012.",
      "Making Breakthrough Innovation Happen — Porus Munshi, Collins Business, 2009.",
      "The Design of Everyday Things — Don Norman, Basic Books, 2013.",
    ],
    references: ["Additional readings and supplementary resources will be recommended during the course."],
  },
];

const Courses = () => {
  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState("content");

  const toggleCourse = (id) => {
    setOpenId(openId === id ? null : id);
    setActiveTab("content"); // Reset to default tab
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="text-center py-6 mt-20 text-4xl font-semibold text-[#3b4a6b]">
        Academic Courses
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-4 pb-10">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md border"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleCourse(course.id)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
               <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="text-blue-800" size={20} />
                </div>

                <div>
                  <p className="text-sm text-blue-800 font-semibold">
                    {course.code}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {course.subtitle}
                  </p>
                </div>
              </div>


              {openId === course.id ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {/* Expanded Section */}
            {openId === course.id && (
              <div className="border-t p-5 space-y-4">

                {/* Tabs */}
                <div className="flex gap-4 border-b pb-3">
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      activeTab === "content"
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Layers size={16} /> Course Content
                  </button>

                  <button
                    onClick={() => setActiveTab("textbooks")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      activeTab === "textbooks"
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <BookOpen size={16} /> Textbooks
                  </button>

                  <button
                    onClick={() => setActiveTab("references")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                      activeTab === "references"
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <FileText size={16} /> References
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "content" && (
                  <div className="space-y-3">
                    {course.content.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl border hover:bg-blue-50 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "textbooks" && (
                  <div className="space-y-3">
                    {course.textbooks.map((book, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl border"
                      >
                        {book}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "references" && (
                  <div className="space-y-3">
                    {course.references.map((ref, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl border"
                      >
                        {ref}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;