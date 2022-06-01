import React, { useRef, useState } from "react";
import styled from "styled-components";
import Email from "../images/svg/email.svg";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();
  const success = () =>
    toast.success("Your message has been sent successsfully sent", {
      style: {
        fontSize: "14px",
      },
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3t3ri6e",
        "template_zj048oh",
        form.current,
        "Uk2o70IEIMB0mUP6g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <Wrapper>
      <img src={Email} alt="Email Icon" />
      <ContactWrapper>
        <h4>Contact Me</h4>
        <p>Leave a message</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" rows="8" placeholder="Message" />
          <button onClick={success}>Send</button>
          {result ? <Toaster position="top-center" /> : ""}
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
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 300px;
    }
  }
`;

const ContactWrapper = styled.section`
  width: 40%;
  background-color: #fff;
  margin: 0;
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
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 4rem auto 0 auto;
    input,
    textarea {
      width: 80%;
      margin: auto;
    }
    button {
      width: 30%;
      align-self: center;
    }
    h4,
    p {
      text-align: center;
    }
  }
`;
export default Contact;
