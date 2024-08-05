import React from 'react';
import styled from 'styled-components';
import image from '../../assets/section.jpg';
import { useLocation } from 'react-router-dom';

const HeaderImageStyled = styled.section`
  width: 100%;
  height: 25vh;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  position: relative; 
`;

const CurrentPageIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6); 
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 24px;
`;

const HeaderImage: React.FC = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'Home' :
                      location.pathname === '/about' ? 'About Me' :
                      location.pathname === '/contact' ? 'Contact' :
                      'Unknown';

  return (
    <HeaderImageStyled>
      <CurrentPageIndicator>{currentPage}</CurrentPageIndicator>
    </HeaderImageStyled>
  );
};

export default HeaderImage;
