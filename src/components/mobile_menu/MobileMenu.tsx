// src/components/MobileMenu/MobileMenu.tsx
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface MobileMenuProps {
  collapsed?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  onHover?: () => void;
  onFocus?: () => void;
}

const MenuStyled = styled.div<MobileMenuProps>`
  width: 200px;
  height: 50px;
  background-color: ${({ collapsed, expanded }) => (collapsed ? 'gray' : expanded ? 'blue' : 'lightgray')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: lightblue;
      }
      &:focus {
        outline: 2px solid blue;
      }
    `}
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ collapsed = false, expanded = false, disabled = false, onHover, onFocus }) => {
  const [state, setState] = useState(collapsed ? 'collapsed' : expanded ? 'expanded' : 'default');

  const handleClick = () => {
    if (!disabled) {
      setState(state === 'collapsed' ? 'expanded' : 'collapsed');
    }
  };

  return (
    <MenuStyled
      collapsed={state === 'collapsed'}
      expanded={state === 'expanded'}
      disabled={disabled}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onClick={handleClick}
      tabIndex={0}
    >
      {state === 'collapsed' ? 'Menu' : 'Menu Expanded'}
    </MenuStyled>
  );
};

export default MobileMenu;
