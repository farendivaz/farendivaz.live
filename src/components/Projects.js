import React from "react";
import { projects } from "../data/data";
import styled from "styled-components";
const Projects = () => {
  return (
    <ProjectsWrapper>
      {projects.map((project) => {
        return (
          <div>
            <img src={project.imageSrc} alt={project.title} />
            <h4>{project.title}</h4>
          </div>
        );
      })}
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.main`
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  img {
    width: 300px;
    height: 200px;
  }
`;
export default Projects;
