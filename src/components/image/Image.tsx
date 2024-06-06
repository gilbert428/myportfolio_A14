// src/components/Image/Image.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { ImageProps } from './Image.types';

const ImageStyled = styled.img<ImageProps>`
  width: ${({ large }) => (large ? '300px' : '150px')};
  height: auto;
  cursor: pointer;
  border: 2px solid ${({ primary }) => (primary ? 'blue' : 'gray')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(100%);
      cursor: not-allowed;
    `}

  &:hover {
    filter: ${({ disabled }) => !disabled && 'brightness(0.8)'};
  }

  @media (max-width: 768px) {
    width: ${({ large }) => (large ? '200px' : '100px')};
  }

  @media (max-width: 480px) {
    width: ${({ large }) => (large ? '150px' : '75px')};
  }
`;

export const Image: React.FC<ImageProps> = ({ primary = false, large = false, disabled = false, backgroundColor, src, alt, onClick }) => (
  <ImageStyled primary={primary} large={large} disabled={disabled} backgroundColor={backgroundColor} src={src} alt={alt} onClick={onClick} />
);

// export default Image;
