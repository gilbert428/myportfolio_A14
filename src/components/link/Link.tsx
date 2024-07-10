// src/components/Link/Link.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { LinkProps } from './Link.types';

const LinkStyled = styled.a<LinkProps>`
  font-size: 16px;
  color: ${({ primary }) => (primary ? 'blue' : 'gray')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ primary }) => (primary ? 'darkblue' : 'darkgray')};
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

const Link: React.FC<LinkProps> = ({ primary = false, backgroundColor, children, onClick, href }) => (
  <LinkStyled primary={primary} backgroundColor={backgroundColor} onClick={onClick} href={href} data-testid="LinkElement">
    {children}
  </LinkStyled>
);

export default Link;
