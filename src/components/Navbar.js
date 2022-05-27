import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

const Wrapper = styled.nav`
  width: 80%;
  max-width: 1000px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem auto 0 auto;
  a {
    text-decoration: none;
    color: #000;
  }
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  font-weight: 500;
  font-size: ${(props) => (props.icons ? "1.3rem" : "1.1rem")};
`;
const Brand = styled.section`
  font-family: "Grape Nuts", cursive;
`;

const List = styled.li`
  list-style: none;
  cursor: pointer;
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
  &:hover {
    color: #5f5858;
  }
`;
export default Navbar;
