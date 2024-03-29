import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = ({ toggleTheme, dark }) => {
  return (
    <Header>
      <Wrapper>
        <Brand>
          <Name>
            <NavLink to="/">Farendivaz</NavLink>
          </Name>
        </Brand>
        <Nav>
          <List>
            <NavLink to="/">Home</NavLink>
          </List>
          <List>
            <NavLink to="/about">About</NavLink>
          </List>
          <List>
            <NavLink to="/projects">Projects</NavLink>
          </List>
          <List>
            <NavLink to="/contact">Contact</NavLink>
          </List>
        </Nav>
        <Nav icons>
          <Button onClick={toggleTheme}>
            {dark ? <BsSunFill size="20px" /> : <BsMoonFill size="20px" />}
          </Button>
          <List>
            <LinkIcon href="https://github.com/farendivaz" target="_blank">
              <StyledFaGithub size="20px" />
            </LinkIcon>
          </List>
          <List>
            <LinkIcon
              href="https://linkedin.com/in/farizdandy/"
              target="_blank"
              className="linkedin"
            >
              <StyledFaLinkedIn size="20px" />
            </LinkIcon>
          </List>
          <List>
            <LinkIcon href="https://twitter.com/farendivaz" target="_blank">
              <StyledFaTwitter size="20px" />
            </LinkIcon>
          </List>
        </Nav>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  background: ${({ theme }) => theme.glass};
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(15px);
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    height: 85px;
  }
`;
const Wrapper = styled.nav`
  width: 65%;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 7rem; */
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #000;
  }
  /* button {
    margin-right: 1rem;
  } */
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
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Nav = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  list-style: none;
  gap: ${(props) => (props.icons ? "1rem" : "1.5rem")};
  font-weight: 500;
  text-align: center;
  a {
    text-decoration: none;
    /* color: #000; */
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    /* color: #6c63ff; */
    color: #a96bf4;
  }
  .active {
    /* color: #6c63ff; */
    color: #a96bf4;
    font-weight: bold;
    border-bottom: 3px solid #a96bf4;
  }
  @media screen and (max-width: 960px) {
    li:not(button) {
      display: none;
    }
  }
`;
const Brand = styled.section`
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 960px) {
    align-self: flex-start;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const List = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${(props) => (props.white ? "white" : "black")};
`;

const LinkIcon = styled.a`
  margin: auto;
`;
const Name = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  /* margin-right: 2rem; */
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.text};
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px;
  cursor: pointer;
`;

const StyledFaGithub = styled(FaGithub)`
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.text};
  }
`;
const StyledFaLinkedIn = styled(FaLinkedin)`
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.text};
  }
`;
const StyledFaTwitter = styled(FaTwitter)`
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.text};
  }
`;

export default Navbar;
