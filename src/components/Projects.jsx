import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    id: 1,
    title: 'Project Title 0',
    description:
      'Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: complement the information: the skills learned or reinforced in its realization and how you faced it, prove to be proactive in the search for solutions.',
    liveUrl: '#!',
    sourceUrl: '#!',
    image: '/assets/project.jpg',
  },
  {
    id: 2,
    title: 'Project Title 1',
    description:
      'Demonstrate in this description the skills of a programmer: such as having commitment, having perseverance and accepting alternative solutions. Remember that being a portfolio you are not selling the project, you are selling yourself, it reflects the resources used: Frameworks, libraries, platforms, etc.',
    liveUrl: '#!',
    sourceUrl: '#!',
    image: '/assets/project.jpg',
  },
  {
    id: 3,
    title: 'Project Title 2',
    description:
      'If the project was collaborative, reflect it in this description, that will demonstrate communication and/or leadership skills. Additionally, if you made use of the mastery of a second language, it will reflect on you professionalism.',
    liveUrl: '#!',
    sourceUrl: '#!',
    image: '/assets/project.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Fade direction="bottom" duration={1000} delay={300} triggerOnce>
            <h2 className="section-title dark-blue-text">Projects</h2>
          </Fade>

          {projects.map((project) => (
            <div className="row" key={project.id}>
              <div className="col-lg-4 col-sm-12">
                <Fade direction="left" duration={1000} delay={500} triggerOnce>
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{project.title}</h3>
                    <div>
                      <p className="mb-4">{project.description}</p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--hero"
                      href={project.liveUrl}
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn text-color-main"
                      href={project.sourceUrl}
                    >
                      Source Code
                    </a>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-8 col-sm-12">
                <Fade direction="right" duration={1000} delay={1000} triggerOnce>
                  <div className="project-wrapper__image">
                    <a rel="noreferrer" href={project.liveUrl} target="_blank">
                      <Tilt
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        glareEnable={true}
                        glareMaxOpacity={0.5}
                        className="thumbnail rounded"
                      >
                        <img
                          alt="Project Image"
                          className="img-fluid"
                          src={project.image}
                        />
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
