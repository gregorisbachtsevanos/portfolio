import React, { FC } from 'react';
import Project from './components/Project';

import { routes } from '@/constants/routes';
import { StyledProjectsContainer } from './Projects.styled';
import { projectsData } from './constants';
import { useGetProjectsQuery } from '@/store/services/projectApi';
import { selectUserProject } from '@/store/state/userInfoSlice';
import { useSelector } from 'react-redux';

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
