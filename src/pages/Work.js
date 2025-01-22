import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Website from './projects/Website';

const Work = () => {
  const projects = [
    { id: 1, name: 'www.lucianadiaz.xyz', path: '/work/projects/1' },
  ];

  return (
    <div>
      <h2>Work</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="/work/projects/1" element={<Website />} />
      </Routes>
    </div>
  );
};

export default Work;
