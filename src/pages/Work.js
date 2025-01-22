import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ];

  return (
    <div>
      <h2>Work</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/work/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
