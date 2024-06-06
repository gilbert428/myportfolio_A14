import React from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from './Input.type';

const InputStyled = styled.input<InputProps>`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  ${({ state }) => {
    switch (state) {
      case 'empty':
        return css`
          color: #777;
        `;
      case 'focused':
        return css`
          border-color: blue;
        `;
      case 'filled':
        return css`
          border-color: green;
        `;
      case 'disabled':
        return css`
          background-color: lightgray;
          cursor: not-allowed;
        `;
      default:
        return null;
    }
  }}

  &:hover {
    border-color: darkgray;
  }
`;

const Input: React.FC<InputProps> = ({ state = 'empty', ...rest }) => (
  <InputStyled state={state} {...rest} />
);

export default Input;
