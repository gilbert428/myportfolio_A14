// src/components/HeroImage/HeroImage.tsx
import React from 'react';
import styled, { css } from 'styled-components';

interface HeroImageProps {
  primary?: boolean;
  disabled?: boolean;
  src: string;
  alt: string;
}

const HeroImageStyled = styled.img<HeroImageProps>`
  width: 100%;
  height: auto;
  background-color: ${({ primary }) => (primary ? 'blue' : 'gray')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`;

const HeroImage: React.FC<HeroImageProps> = ({ primary = false, disabled = false, src, alt }) => (
  <HeroImageStyled primary={primary} disabled={disabled} src={src} alt={alt} />
);

export default HeroImage;
