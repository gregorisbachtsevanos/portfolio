import React from 'react';
import Project from './components/Project';

import { routes } from '@/constants/routes';
import { StyledProjectsContainer } from './Projects.styled';
import { projectsData } from './constants';

const Projects = () => {
  const data = projectsData;
  return (
    <StyledProjectsContainer id={routes.PROJECTS}>
      <div className="container">
        <div className="projects">
          {data.map((project, index) => (
            <Project
              key={project?.id}
              title={project.title}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </StyledProjectsContainer>
  );
};

export default Projects;
