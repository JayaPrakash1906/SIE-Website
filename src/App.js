import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import About from './pages/About';
import News from './pages/news';
import Contact from './pages/contact';
import Initiatives from './pages/duplicate';
import Mentors from './pages/Mentors';
import UGFIR from './pages/ugfir';
import PGFIR from './pages/pgfir';
import AcademicsMse from './pages/academics_ms(e)';
import Courses from './pages/courses';
import Students from './pages/students';
import AcademicAwards from './pages/academic_awards';
import AcademicsPhd from "./pages/academics_phd";
import MseHomePage from './pages/ms(e)pages/home';
import Projects from './pages/ms(e)pages/Projects';
import Eligibility from './pages/ms(e)pages/Eligibility';
import Scholarship from './pages/ms(e)pages/Scholorship';
import ApplyPage from './pages/ms(e)pages/How_to_apply';
function App() {
  return (
    <BrowserRouter>
      <div className="font-dm-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/scholorship/ugfir" element={<UGFIR />} />
          <Route path="/scholorship/pgfir" element={<PGFIR />} />
          <Route path="/academics/overview" element={<AcademicsMse />} />
          <Route path="/academics/courses" element={<Courses />} />
          <Route path="/academics/students_ms(e)" element={<Students />} />
          <Route path="/academics/awards" element={<AcademicAwards />} />
          <Route path="/academics/overview/phd" element={<AcademicsPhd />} />
          <Route path="/ms(e)/home" element={<MseHomePage />} />
          <Route path="/ms(e)/project" element={<Projects />} />
          <Route path="/ms(e)/eligibility" element={<Eligibility />} />
          <Route path="/ms(e)/scholorship" element={<Scholarship />} />
          <Route path="/ms(e)/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
