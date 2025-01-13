import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Project = () => {
  const { id } = useParams(); // Get the project ID from the URL

  const projectDetails = {
    1: { name: 'project 1', description: 'Description for project 1' },
    2: { name: 'project 2', description: 'Description for project 2' },
    3: { name: 'project 3', description: 'Description for project 3' },
  };

  const project = projectDetails[id];

  return (
    <div>
      <header>
        <h1>{project?.name || 'project not found'}</h1>
      </header>
      <main>
        {project ? (
          <>
            <p>{project.description}</p>
            <Link to="/">← back to home</Link>
          </>
        ) : (
          <p>Sorry, this project does not exist.</p>
        )}
      </main>
    </div>
  );
};

export default Project;
