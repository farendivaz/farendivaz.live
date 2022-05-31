import React from "react";
import { projects } from "../data/data";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectsWrapper>
        {projects.map((project) => {
          return (
            <ProjectItem className="something">
              <img src={project.imageSrc} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <ButtonWrapper>
                <Button as="a" href={project.demo}>
                  Live Demo
                </Button>
                <Button as="a" href={project.github}>
                  Github
                </Button>
              </ButtonWrapper>
            </ProjectItem>
          );
        })}
      </ProjectsWrapper>
    </>
  );
};

const ProjectsWrapper = styled.main`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ProjectItem = styled.section`
  width: 40%;
  margin: 1rem;
  border-radius: 20px;
  transition: 500ms;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    max-width: 100%;
    min-width: auto;
    height: auto;
    border-radius: 20px 20px 0 0;
  }
  h4 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0 1rem;
  }
  p {
    padding: 0 1rem;
    margin: 1rem 0 0 0;
  }
  &:hover {
    transform: scale(1.0125);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  @media screen and (max-width: 1250px) {
    min-width: 400px;
  }
  @media screen and (max-width: 530px) {
    min-width: 100%;
    min-height: 450px;
    img {
      width: 100%;
    }
  }
`;

const ProjectHeading = styled.h3`
  font-size: 3rem;
  text-align: center;
  margin: 5rem 0 3rem 0;
`;
const Button = styled.button`
  font-size: 1rem;
  padding: 0.5em 1em;
  background-color: #000;
  color: #fff;
  margin: 0 1rem 0 0;
  font-weight: bold;
  border-radius: 15px;
  text-decoration: none;
`;

const ButtonWrapper = styled.section`
  padding: 1rem;
  margin-bottom: 1rem;
`;
export default Projects;
