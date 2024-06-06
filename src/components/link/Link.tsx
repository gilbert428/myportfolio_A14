// Link.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { LinkProps } from './Link.types';

const LinkStyled = styled.a<LinkProps>`
  font-size: 16px;
  color: ${({ primary }) => (primary ? 'blue' : 'gray')};
  text-decoration: none;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: lightgray;
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    color: ${({ primary, disabled }) => !disabled && (primary ? 'darkblue' : 'darkgray')};
  }

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Link: React.FC<LinkProps> = ({ primary = false, disabled = false, backgroundColor, children, onClick, href }) => (
  <LinkStyled primary={primary} disabled={disabled} backgroundColor={backgroundColor} onClick={onClick} href={href}>
    {children}
  </LinkStyled>
);

export default Link;
