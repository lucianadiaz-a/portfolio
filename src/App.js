import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* Dynamic Project Pages */}
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
