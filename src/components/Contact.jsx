import React from "react";
import styled from "styled-components";
import Email from "../images/svg/email.svg";

const Contact = () => {
  return (
    <Wrapper>
      <img src={Email} alt="Email Icon" />
      <ContactWrapper>
        <h4>Contact Me</h4>
        <p>Leave a message</p>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" rows="8" placeholder="Message" />
          <button>Send</button>
        </form>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 4rem auto;
  img {
    height: 400px;
  }
  h4 {
    font-weight: 600;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    margin: 0 0 1rem 0;
  }
`;

const ContactWrapper = styled.section`
  width: 500px;
  background-color: #fff;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input,
  textarea {
    background-color: #f5f5f5;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 5px;
  }
  button {
    width: 20%;
    align-self: flex-end;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #6c63ff;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default Contact;
