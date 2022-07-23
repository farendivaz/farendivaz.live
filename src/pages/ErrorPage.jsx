import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ErrorIcon from "../images/svg/error_icon.svg";

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <img src={ErrorIcon} alt="Error 404 Icon" />
      <h1>Page Not Found</h1>
      <p>Sorry, We couldn't find the page you're looking for</p>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.main`
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto 5rem auto;
  img {
    width: 500px;
  }
  h1 {
    margin: 1rem 0 0 0;
  }
  p {
    width: 40%;
    text-align: center;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-width: 960px) {
    height: 440px;
    margin: 5rem auto 30rem auto;
    img {
      width: 450px;
    }
    h1 {
      margin: 0;
    }
  }
  @media screen and (max-width: 670px) {
    margin: 1rem auto 10rem auto;
    img {
      width: 300px;
    }
    h1 {
      margin: 0;
    }
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5em 1em;
  background-color: #6c63ff;
  margin: 0 1rem 0 0;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export default ErrorPage;
