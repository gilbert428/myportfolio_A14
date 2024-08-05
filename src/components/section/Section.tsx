// src/components/Section/Section.tsx
import React from 'react';
import styled from 'styled-components';
import design from '../../assets/design.jpg';
import design2 from '../../assets/design2.jpg';
import design3 from '../../assets/design3.jpg';

const SectionStyled = styled.section`
  background-image: black;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 50pt;
    text-transform: capitalize;
    margin-top: 25px;
  }

  p {
    font-size: 18pt;
    width: 70%;
    margin: auto;
    font-weight: 300;
    margin-bottom: 50px;
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
  }

  .image-container img {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px #a2a2a2, -1px -1px 2px #a2a2a2;
    transition: transform 0.3s;
  }

  .image-container img:hover {
    box-shadow: 0 0 20px white, 0 0 40px white, 0 0 60px white, 0 0 80px white;
    transform: scale(1.05);
    transition: box-shadow 0.5s, transform 0.5s;
  }
`;

const Section: React.FC = () => {
  return (
    <SectionStyled>
      <h2>
        HI, I’M GILBERT <br />
        aspiring web designer & developer
      </h2>
      <p>
        Hello! I'm a passionate and aspiring web designer eager to bring
        creativity and fresh ideas to the digital world. I may be new to the
        field, but my dedication to learning and creating beautiful,
        functional websites is boundless.
      </p>
      <div className="image-container">
        <img src={design} alt="Image 1" />
        <img src={design2} alt="Image 2" />
        <img src={design3} alt="Image 3" />
      </div>
    </SectionStyled>
  );
};

export default Section;
