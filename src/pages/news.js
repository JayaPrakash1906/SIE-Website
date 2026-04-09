import React, { useState } from 'react';
import {Heart,  User,  Clock,  MessageCircle,  Eye,  MoreHorizontal,  ChevronLeft,  ChevronRight,} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import img1 from '../assets/News/news2.png';
import img2 from '../assets/News/news1.jpg'; 
import img3 from '../assets/News/news3.jpg'; // Replace with your actual image import
import img4 from "../assets/News/news4.JPG"
import img5 from "../assets/News/news5.jpg"
import img6 from "../assets/News/news6.jpg"
import img7 from "../assets/News/news7.jpg"
// Single News Card
const NewsCard = ({ article }) => {
  const showFullImage = article.id === 7;
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden mb-6 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full ${
            showFullImage
              ? "h-auto max-h-[360px] object-contain"
              : "h-full max-h-[250px] object-cover"
          } ${article.id === 4 && !showFullImage ? "object-top" : ""}`}
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <User className="w-4 h-4" />
            </div>
            <span className="mr-2">Admin</span>
            <span className="mr-2">•</span>
            <span className="mr-2">{article.date}</span>
            <span className="mr-2">•</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {article.readTime}
            </span>
            <div className="ml-auto mt-2 md:mt-0">
              <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{article.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.subtitle}</p>

          {/* Read More Link */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-600 hover:underline text-sm inline-block"
          >
            Read more →
          </a>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {article.views} views
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {article.comments} comments
            </span>
          </div>
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

// Main News Component
const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const newsData = [
    {
      id: 7,
      title: 'Delta Expo 2026: Showcasing Innovation at IIT Madras ',
      date: 'March 14, 2025',
      readTime: '4 min read',
      subtitle:' Delta Expo 2026 at IIT Madras brings bold ideas to life, showcasing innovative student startups and breakthrough technologies. Inaugurated by the Hon’ble Governor of Tamil Nadu, Rajendra Vishwanath Arlekar, the expo is open to students, visitors, and the public.',
      views: 125,
      comments: 10,
      image: img7,
      link: 'https://www.linkedin.com/posts/deltaexpo2026-ewebstoreai-deltaexpo2026-ugcPost-7443199743192723456-TR0u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    }, 
    {
      id: 6,
      title: 'Delta Expo 2026: Showcasing Innovation at IIT Madras ',
      date: 'March 14, 2025',
      readTime: '4 min read',
      subtitle:' From bold ideas to real-world impact, Delta Expo 2026 is a celebration of innovation at IIT Madras, bringing together cutting-edge student startups and breakthrough technologies. Hosted by the School for Innovation and Entrepreneurship (SIE), IIT Madras, the event was inaugurated by the Hon’ble Governor of Tamil Nadu, Rajendra Vishwanath Arlekar.',
      views: 180,
      comments: 17,
      image: img6,
      link: 'https://www.linkedin.com/posts/from-bold-ideas-to-real-world-impactdelta-ugcPost-7439904929886031872-hKu_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    },
    {
      id: 5,
      title: 'New Advisors for NIRMAAN & CFI, IIT Madras ',
      date: 'Nov 21, 2025',
      readTime: '4 min read',
      subtitle:' Prof. Murugaiyan Amirthalingam takes charge as Advisor of NIRMAAN and Prof. Manish Anand as Advisor of CFI, ushering in a new phase of leadership to further strengthen innovation and entrepreneurship at IIT Madras.',
      views: 120,
      comments: 8,
      image: img5,
      link: '',
    },
    {
      id: 4,
      title: 'Leadership Transition at SIE, IIT Madras',
      date: 'Nov 2, 2025',
      readTime: '4 min read',
      subtitle:' Prof. Satyanarayanan Seshadri assumes charge as Head of SIE, IIT Madras, succeeding Prof. Prabhu Rajagopal and building on his remarkable contributions to strengthening the innovation and entrepreneurship ecosystem.',
      views: 120,
      comments: 8,
      image: img4,
      link: 'https://www.linkedin.com/posts/school-of-innovation-entrepreneurship_we-are-delighted-to-welcome-prof-satyanarayanan-activity-7393541475063689217-VuD9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    },
    {
      id: 3,
      title: ' Research Conclave 2025',
      date: 'Nov 2, 2025',
      readTime: '4 min read',
      subtitle:
        ' The Centre for Innovation (CFI), IIT Madras successfully hosted Research Conclave 2025 on 2nd November 2025, bringing together a vibrant community of students, researchers, and innovators for a full day of learning, collaboration, and knowledge exchange.',
      views: 120,
      comments: 8,
      image: img3,
      link: 'https://www.linkedin.com/posts/activity-7351133381549592578-MVzu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    },
    {
      id: 2,
      title: 'Launch of SIE ',
      date: 'August 4, 2025',
      readTime: '5 min read',
      subtitle:
        ' IIT Madras Launches the School of Innovation and Entrepreneurship',
      views: 180,
      comments: 5,
      image: img1,
      link: 'https://www.linkedin.com/posts/activity-7358405925990273024-0eYQ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    },
    {
      id: 1,
      title: 'National Security Advisor Shri Ajit Doval Visits SSIH ',
      date: 'July 11, 2025',
      readTime: '2 min read',
      subtitle:
        ' National Security Advisor Shri Ajit Doval visited IIT Madras’s Innovation Hub, recognizing its impactful student-led startups and thriving innovation ecosystem',
      views: 120,
      comments: 5,
      image: img2,
      link: 'https://www.linkedin.com/posts/activity-7351133381549592578-MVzu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg',
    },
    
    // Add more news items here...
  ];

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedArticles = newsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="text-black text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">Latest News</h1>
      </section>

      {/* News Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {selectedArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}

        {/* Pagination Controls - Show only if more than 1 page */}
        {totalPages > 1 && (
          <nav className="flex justify-center mt-8" aria-label="Pagination">
            <ul className="inline-flex -space-x-px rounded-md shadow-sm">
              <li>
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </li>

              {/* Dynamic Page Numbers */}
              {(() => {
                const pages = [];
                for (let i = 1; i <= totalPages; i++) {
                  if (
                    i === 1 ||
                    i === totalPages ||
                    (i >= currentPage - 1 && i <= currentPage + 1)
                  ) {
                    pages.push(
                      <li key={i}>
                        <button
                          onClick={() => setCurrentPage(i)}
                          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-20 ${
                            currentPage === i
                              ? 'bg-[#1a1a36] text-white border-[#1a1a36]'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                          aria-current={currentPage === i ? 'page' : undefined}
                        >
                          {i}
                        </button>
                      </li>
                    );
                  } else if (
                    (i === currentPage - 2 && i > 1) ||
                    (i === currentPage + 2 && i < totalPages)
                  ) {
                    pages.push(
                      <li key={`ellipsis-${i}`} className="px-2 py-2 text-gray-400">
                        …
                      </li>
                    );
                  }
                }
                return pages;
              })()}

              <li>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === totalPages
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default News;
