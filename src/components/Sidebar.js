import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter, FaTimes } from "react-icons/fa";
import { Nav, List, LinkIcon } from "./Navbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Bar>
        <div>
          <BarList menu>
            <FaTimes />
          </BarList>
          <BarList>
            {" "}
            <Link to="/">Home</Link>
          </BarList>
          <BarList>
            {" "}
            <Link to="/about">About</Link>
          </BarList>
          <BarList>
            {" "}
            <Link to="/projects">Projects</Link>
          </BarList>
          <BarList>
            {" "}
            <Link to="/contact">Contact</Link>
          </BarList>
        </div>
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
      </Bar>
    </div>
  );
};

const Bar = styled.ul`
  position: absolute;
  background-color: white;
  color: black;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style: none;
  transform: translateX(-100%);
  transition: all 0.8s;
  a {
    color: black;
    text-decoration: none;
  }
`;

const BarList = styled.li`
  padding: 1rem 2rem;
  border-bottom: ${(props) => (props.menu ? "none" : "1px solid black")};
  font-size: 1.5rem;
  font-weight: bold;
`;
export default Sidebar;
