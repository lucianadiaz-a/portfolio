import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Website from './pages/projects/Website';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <header>
            <div>luciana diaz albadan</div>
            <nav>
              <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '15px' }}>
                  <Link to="/">about</Link>
                </li>
                <li style={{ marginRight: '15px' }}>
                  <Link to="/work">work</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work/projects/1" element={<Website />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
