import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Website from './projects/Website'; 
import './css/Work.css'; 

const Work = () => {
  const projects = [
    {
      id: 1,
      name: 'www.lucianadiaz.xyz',
      path: '/work/projects/1',
      image: '/assets/images/websiteV1.png', // Correct relative path
    },
  ];

  return (
    <div className="work-container">
      <h2>Work</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Link to={project.path} className="project-link">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <p className="project-name">{project.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/work/projects/1" element={<Website />} />
      </Routes>
    </div>
  );
};

export default Work;
