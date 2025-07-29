import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import About from './pages/About';
import News from './pages/news';
import Contact from './pages/contact';
import Initiatives from './pages/duplicate';

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
          {/* Add more routes as needed */}
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
