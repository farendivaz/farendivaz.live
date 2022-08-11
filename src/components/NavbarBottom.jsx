import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

const NavbarBottom = () => {
  return (
    <>
      <NavBottom>
        <ListNavBottom>
          <NavLink to="/">
            <AiOutlineHome />
            Home
          </NavLink>
        </ListNavBottom>
        <ListNavBottom>
          <NavLink to="/about">
            <HiOutlineInformationCircle />
            About
          </NavLink>
        </ListNavBottom>
        <ListNavBottom>
          <NavLink to="/projects">
            <AiOutlineProject />
            Projects
          </NavLink>
        </ListNavBottom>
        <ListNavBottom>
          <NavLink to="/contact">
            <BsPerson />
            Contact
          </NavLink>
        </ListNavBottom>
      </NavBottom>
    </>
  );
};

const NavBottom = styled.nav`
  height: 60px;
  max-width: 750px;
  /* background-color: rgba(255, 255, 255, 0.3); */
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(15px);
  /* border-top: 2px solid #f5f5f5; */
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
    /* color: #000; */
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    color: #6c63ff;
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
  .active {
    color: #6c63ff;
    font-weight: bold;
  }
`;
export default NavbarBottom;
