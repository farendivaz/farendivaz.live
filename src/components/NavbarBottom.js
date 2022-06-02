import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

const NavbarBottom = () => {
  return (
    <>
      <NavBottom>
        <ListNavBottom>
          <Link to="/">
            <AiOutlineHome />
            Home
          </Link>
        </ListNavBottom>
        <ListNavBottom>
          <Link to="/about">
            <HiOutlineInformationCircle />
            About
          </Link>
        </ListNavBottom>
        <ListNavBottom>
          <Link to="/projects">
            <AiOutlineProject />
            Projects
          </Link>
        </ListNavBottom>
        <ListNavBottom>
          <Link to="/contact">
            <BsPerson />
            Contact
          </Link>
        </ListNavBottom>
      </NavBottom>
    </>
  );
};

const NavBottom = styled.nav`
  height: 60px;
  max-width: 750px;
  background-color: #fff;
  border-top: 2px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  font-size: 0.9rem;
  display: none;
  gap: 1.5rem;
  font-weight: 500;
  font-size: ${(props) => (props.icons ? "1.3rem" : "1.1rem")};
  margin: 1rem auto 0 auto;
  position: sticky;
  bottom: 0;
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const ListNavBottom = styled.li`
  list-style: none;
  cursor: pointer;
  color: black;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`;
export default NavbarBottom;
