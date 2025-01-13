import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const projects = [
    { id: 1, name: 'project 1' },
    { id: 2, name: 'project 2' },
    { id: 3, name: 'project 3' },
  ];

  return (
    <div>
      <header>
        <h1>luciana</h1>
      </header>
      <main>
        <h2>projects</h2>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
