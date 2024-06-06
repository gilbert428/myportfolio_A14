// Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

const ButtonStyled = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: ${({ backgroundColor, primary }) => backgroundColor || (primary ? 'blue' : 'gray')};
  
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: lightgray;
      cursor: not-allowed;
    `}

  &:hover {
    background-color: ${({ primary, disabled }) => 
      !disabled && (primary ? 'darkblue' : 'darkgray')};
  }
`;

const Button: React.FC<ButtonProps> = ({ primary = false, disabled = false, backgroundColor, children, onClick }) => (
  <ButtonStyled primary={primary} disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;
