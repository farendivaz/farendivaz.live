import React from "react";
import Logo from "../images/svg/programming.svg";
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
  margin: 9.5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50%;
  }
  @media screen and (max-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin: 5rem auto;
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin: 5rem auto;
    img {
      width: 400px;
    }
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
  font-weight: bold;
  margin: -1rem 0;
  @media screen and (max-width: 960px) {
    font-size: 4rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export default Hero;
