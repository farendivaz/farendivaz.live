import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Brand>
          <Name>Farendivaz</Name>
        </Brand>
        <Nav>
          <List>Home</List>
          <List>About</List>
          <List>Projects</List>
          <List>Contact</List>
        </Nav>
        <Nav icons>
          <List>
            <FaGithub />
          </List>
          <List>
            <FaLinkedin />
          </List>
          <List>
            <FaTwitter />
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

const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #5f5858;
  }
`;
export default Navbar;
