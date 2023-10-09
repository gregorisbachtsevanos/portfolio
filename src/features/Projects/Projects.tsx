import React, { FC } from 'react';

import { useGetProjectsQuery } from '@/store/services/projectApi';

import { routes } from '@/constants/routes';

import Project from './components/Project';

import { StyledProjectsContainer } from './Projects.styled';

const Projects = () => {
  const { data: projectData, isLoading, isSuccess } = useGetProjectsQuery();
  return (
    <StyledProjectsContainer id={routes.PROJECTS}>
      <div className="container">
        <div className="projects">
          {isLoading ? (
            <></>
          ) : (
            projectData?.map((project, index) => (
              <Project
                key={project.title}
                title={project.title}
                link={project.link}
                image={project.images}
              />
            ))
          )}
        </div>
      </div>
    </StyledProjectsContainer>
  );
};

export default Projects;
