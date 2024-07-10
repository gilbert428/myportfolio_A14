// src/components/Section/Section.tsx
import React from 'react';
import styled, { css } from 'styled-components';

interface SectionProps {
  primary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const SectionStyled = styled.div<SectionProps>`
  padding: 20px;
  border: 1px solid #ccc;
  background-color: ${({ primary }) => (primary ? 'blue' : 'gray')};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: darkgray;
      }
    `}
`;

const Section: React.FC<SectionProps> = ({ primary = false, disabled = false, children }) => (
  <SectionStyled primary={primary} disabled={disabled}>
    {children}
  </SectionStyled>
);

export default Section;
