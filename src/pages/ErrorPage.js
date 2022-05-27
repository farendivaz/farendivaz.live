import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ErrorIcon from "../images/svg/error_icon.svg";

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <img src={ErrorIcon} alt="Error Page" />
      <h1>Page Not Found</h1>
      <p>Sorry, We couldn't find the page you're looking for</p>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 5rem auto;
  img {
    width: 650px;
    height: 350px;
  }
  h1 {
    margin: 1rem 0 0 0;
  }
  p {
    width: 40%;
    text-align: center;
    margin: 0 0 1rem 0;
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
