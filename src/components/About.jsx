import React from "react";
import styled from "styled-components";
import Code from "../assets/svg/code.svg";
import Coding from "../assets/svg/new_coding.svg";
import { slideUp } from "./Projects";

const About = () => {
  return (
    <>
      <AboutHeading>About</AboutHeading>
      <AboutWrapper>
        <AboutImage
          small
          src={Code}
          alt="Sitting beside Laptop"
          className="first-image"
        />
        <AboutDescription>
          <p>
            I'm an informatics student who is passionate about web development.
          </p>
          <p>
            I'm currently learning web development with a focus on the MERN
            stack, but still exploring other technologies and frameworks that
            catch my interest!
          </p>
        </AboutDescription>
        <div>
          <AboutImage src={Coding} alt="Coding" />
        </div>
      </AboutWrapper>
    </>
  );
};

const AboutHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 5rem 0 0 0;
  animation: ${slideUp} 0.8s forwards;
`;
const AboutWrapper = styled.section`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  margin: -8rem auto;
  img {
    width: 300px;
    height: 400px;
    align-self: flex-start;
  }
  div {
    align-self: flex-end;
  }
  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: -7rem auto 5rem auto;
    .first-image {
      display: none;
    }
    div {
      align-self: center;
      height: 200px;
      margin: 3rem auto;
    }
  }
`;

const AboutDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  animation: ${slideUp} 1.2s forwards;

  @media screen and (max-width: 1250px) {
    width: 50%;
    margin: 0 auto;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const AboutImage = styled.img`
  animation: ${slideUp} 1.2s forwards;
`;
export default About;
