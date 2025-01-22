import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();

  const projectDetails = {
    1: { name: 'Project 1', description: 'Description for Project 1' },
    2: { name: 'Project 2', description: 'Description for Project 2' },
    3: { name: 'Project 3', description: 'Description for Project 3' },
  };

  const project = projectDetails[id];

  return (
    <div>
      {project ? (
        <>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <Link to="/work">← Back to Work</Link>
        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default Project;