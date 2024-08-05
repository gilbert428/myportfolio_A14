import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(28, 27, 27);
  padding: 10px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  position: relative; /* Position relative for the current page text */

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  li {
    transition: background-color 0.3s, border-radius 0.3s;
    color: blue;
    font-size: 18px;
    padding: 0 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  li:hover {
    background-color: #3498db;
    border-radius: 5px;
    border: 1px solid #2980b9;
  }

  .current-page {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
