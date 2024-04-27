import React, { useState } from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
    padding: 1.5% 0;
`;

const TitleInfo = styled.div`
    padding-bottom: 2%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 2%;
`;

const InputGroup = styled.div`
    padding: 1% 0;
`;

const Input = styled.input`
    color: inherit;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #757575;
    padding: 1.5%;
    font-size: 20px;

    &:focus {
        background-color: transparent;
        outline: transparent;
        border-bottom: 2px solid #69f0ae;
    }

    &::placeholder {
        color: transparent;
    }
`;

const TextArea = styled.textarea`
    color: inherit;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #757575;
    padding: 1.5%;
    font-size: 20px;

    &:focus {
        background-color: transparent;
        outline: transparent;
        border-bottom: 2px solid #69f0ae;
    }

    &::placeholder {
        color: transparent;
    }
`;

const Label = styled.label`
    color: #757575;
    position: relative;
    left: 0.5em;
    top: -2em;
	cursor: auto;
    transition: 0.3s ease all;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    padding: 2%;
    width: 50%;
    border: 1px solid;
    border-color: #212121;
    border-radius: 5px;
    font-family: inherit;
    font-size: 18px;
    background-color: black;
    color: inherit;
    box-shadow: 0 0 10px #212121;

    &:hover {
        background-color: #424242;
        color: #69f0ae;
        cursor: pointer;
    }
`;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission
    console.log('Form submitted:', formData);
    alert("Thank You for Contacting Us. We will be right back to you!!");
    // Clear form fields after submission if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <Main>
      <Title>Contact us</Title>
      <TitleInfo>We'll get back to you soon!</TitleInfo>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Label htmlFor="first-name">First name</Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Label htmlFor="last-name">Last name</Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Label htmlFor="email">Email</Label>
        </InputGroup>

        <InputGroup>
          <TextArea
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></TextArea>
          <Label htmlFor="message">Message</Label>
        </InputGroup>

        <ButtonDiv>
          <Button type="submit">Send</Button>
        </ButtonDiv>
      </Form>
    </Main>
  );
};

export default ContactMe;
