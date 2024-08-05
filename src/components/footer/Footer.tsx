// src/components/Footer/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  font-size: 12px;
  color: white; 
  background-color: rgb(13, 13, 13);
  padding: 10px;

  a {
    color: rgb(5, 151, 248);
    font-size: 20px;
    padding: 10px;
    text-decoration: none;
  }

  a:hover {
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <a href="index.html">Home</a>
      <a href="about.html">About Me</a>
      <a href="contact.html">Contact</a>
      <p>Copyright &copy; 2023 My Portfolio</p>
      <p>Gilbert Santiago Lagman</p>
    </FooterStyled>
  );
};

export default Footer;
