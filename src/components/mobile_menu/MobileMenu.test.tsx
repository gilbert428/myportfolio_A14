// src/components/MobileMenu/MobileMenu.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileMenu from './MobileMenu';

test('renders Collapsed MobileMenu and simulates click', async () => {
  render(<MobileMenu collapsed={true} />);
  const menuElement = screen.getByText((content, element) => content.includes('Menu'));
  expect(menuElement).toBeInTheDocument();
  
  await userEvent.click(menuElement);
  expect(menuElement).toHaveTextContent('Menu Expanded');
});

test('renders MobileMenu and simulates hover', async () => {
  render(<MobileMenu collapsed={true} />);
  const menuElement = screen.getByText((content, element) => content.includes('Menu'));
  expect(menuElement).toBeInTheDocument();
  
  await userEvent.hover(menuElement);
  // Add any additional assertions here if needed
});

test('renders MobileMenu and simulates focus', async () => {
  render(<MobileMenu collapsed={true} />);
  const menuElement = screen.getByText((content, element) => content.includes('Menu'));
  expect(menuElement).toBeInTheDocument();
  
  await userEvent.tab();
  expect(menuElement).toHaveFocus();
});

test('renders Expanded MobileMenu and simulates click', async () => {
  render(<MobileMenu expanded={true} />);
  const menuElement = screen.getByText((content, element) => content.includes('Menu Expanded'));
  expect(menuElement).toBeInTheDocument();
  
  await userEvent.click(menuElement);
  expect(menuElement).toHaveTextContent('Menu');
});

test('renders Disabled MobileMenu and attempts to click', async () => {
  render(<MobileMenu disabled={true} />);
  const menuElement = screen.getByText((content, element) => content.includes('Menu'));
  expect(menuElement).toBeInTheDocument();
  expect(menuElement).toHaveStyle('cursor: not-allowed');
  
  await userEvent.click(menuElement);
  // Verify the menu is still not clickable
  expect(menuElement).toHaveStyle('opacity: 0.5');
});
