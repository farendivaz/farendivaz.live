import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <Brand>
          <Name>
            <Link to="/">Farendivaz</Link>
          </Name>
        </Brand>
        <Nav>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/about">About</Link>
          </List>
          <List>
            <Link to="/projects">Projects</Link>
          </List>
          <List>
            <Link to="/contact">Contact</Link>
          </List>
        </Nav>
        <Nav icons>
          <List>
            <LinkIcon href="https://github.com/farendivaz" target="_blank">
              <FaGithub />
            </LinkIcon>
          </List>
          <List>
            <LinkIcon
              href="https://linkedin.com/in/farizdandylazuardi/"
              target="_blank"
            >
              <FaLinkedin />
            </LinkIcon>
          </List>
          <List>
            <LinkIcon href="https://twitter.com/farendivaz" target="_blank">
              <FaTwitter />
            </LinkIcon>
          </List>
        </Nav>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Wrapper = styled.nav`
  width: 65%;
  background-color: #fff;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  margin: 1.5rem auto 0 auto;

  a {
    text-decoration: none;
    color: #000;
  }
  @media screen and (max-width: 1510px) {
    gap: 3rem;
    margin: 0 auto;
    width: 70%;
  }
  @media screen and (max-width: 1080px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
    width: 90%;
  }
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  font-weight: 500;
  text-align: center;
  font-size: ${(props) => (props.icons ? "1.3rem" : "1.1rem")};
  margin: 0 2.2rem;
  a {
    text-decoration: none;
    color: #000;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Brand = styled.section`
  font-family: "Grape Nuts", cursive;
  @media screen and (max-width: 960px) {
    align-self: flex-start;
  }
`;

const List = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${(props) => (props.white ? "white" : "black")};
  &:hover {
    text-decoration: underline;
    color: #5f5858;
  }
`;

const LinkIcon = styled.a`
  margin: auto;
`;
const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;
  &:hover {
    color: #5f5858;
  }
  a {
    color: #000;
  }
`;

export default Navbar;
