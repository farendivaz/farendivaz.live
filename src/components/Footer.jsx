import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Link href="https://github.com/farendivaz" target="_blank">
          Github
        </Link>
        <Link
          href="https://linkedin.com/in/farizdandylazuardi/"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="https://twitter.com/farendivaz" target="_blank">
          Twitter
        </Link>
      </FooterWrapper>
      <Copyright>
        <small>
          &copy;{new Date().getFullYear()} All Rights Reserved, Made by
          <Name> Farendivaz</Name>
        </small>
      </Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 3rem auto 0.2rem auto;
  @media screen and (max-width: 960px) {
    position: relative;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
  }
`;
const FooterWrapper = styled.nav`
  margin: 10rem auto 0 auto;
  text-align: center;
`;
const Link = styled.a`
  margin: 1rem;
  /* color: black; */
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Copyright = styled.section`
  text-align: center;
  margin: 0 auto;
`;
export default Footer;
