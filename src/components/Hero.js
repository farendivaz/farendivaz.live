import React from "react";
import Logo from "../images/programming.svg";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
        <HeroHeading>Hello.</HeroHeading>
        <HeroHeading> I am Fariz</HeroHeading>
        <HeroDescription>I Design & Build things for web</HeroDescription>
      </HeroText>
      <img src={Logo} alt="Programmers Icon" />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  width: 80%;
  max-width: 1000px;
  margin: 7rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50%;
  }
`;

const HeroText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 1rem;
`;
const HeroHeading = styled.span`
  font-size: ${(props) => (props.small ? "1rem" : "5rem")};
  font-weight: 600;
  margin: -1rem 0;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export default Hero;
