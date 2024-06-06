import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.types';

const TextStyled = styled.span<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '14px';
      case 'medium':
        return '16px';
      case 'large':
        return '18px';
      default:
        return '16px';
    }
  }};
  color: ${({ color }) => color || 'black'};

  ${({ disabled }) =>
    disabled &&
    css`
      color: lightgray;
      cursor: not-allowed;
    `}
`;

const Text: React.FC<TextProps> = ({ size = 'medium', color, disabled = false, children }) => (
  <TextStyled size={size} color={color} disabled={disabled}>
    {children}
  </TextStyled>
);

export default Text;
