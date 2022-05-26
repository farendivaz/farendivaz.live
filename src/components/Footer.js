import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
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
          &copy;{new Date().getFullYear()} All Rights Reserved, Made with 💖 by{" "}
          <Name>Farendivaz</Name>
        </small>
      </Copyright>
    </>
  );
};

const FooterWrapper = styled.footer`
  margin: 7rem auto 0 auto;
  text-align: center;
`;
const Link = styled.a`
  margin: 1rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.span`
  font-family: "Grape Nuts", cursive;
  font-size: 1rem;
  font-weight: bold;
`;

const Copyright = styled.section`
  text-align: center;
  margin: 0.5rem auto 1rem auto;
`;
export default Footer;
