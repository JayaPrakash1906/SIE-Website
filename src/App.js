import logo from './logo.svg';
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
import Academics_mse from './pages/academics_ms(e)';
import Courses from './pages/courses';
import AcademicAwards from './pages/academic_awards';
import Academics_phd from "./pages/academics_phd";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/scholorship/ugfir" element={<UGFIR />}/>
          <Route path="/scholorship/pgfir" element={<PGFIR />}/>
          <Route path="/academics/overview" element={<Academics_mse />}/>
          <Route path="/academics/courses" element={<Courses />}/>
          <Route path="/academics/awards" element={<AcademicAwards/>}/>
          <Route path="/academics/overview/phd" element={<Academics_phd />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
