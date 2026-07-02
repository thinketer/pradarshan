import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <a href="#!" className="project-item">
            <h3>Project One</h3>
            <p>A minimalist web application built with React and Vite.</p>
          </a>
          <a href="#!" className="project-item">
            <h3>Project Two</h3>
            <p>An open-source tool for optimizing developer workflows.</p>
          </a>
          <a href="#!" className="project-item">
            <h3>Project Three</h3>
            <p>A beautiful, dark-themed dashboard interface.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
