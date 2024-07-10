// Link.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from './Link';

test('renders Default Link and simulates click', async () => {
  render(<Link href="#">Link</Link>);
  const linkElement = screen.getByText('Link');
  expect(linkElement).toBeInTheDocument();
  
  await userEvent.click(linkElement);
  // Add any additional assertions here if needed
});

test('renders Primary Link and simulates click', async () => {
  render(<Link primary={true} href="#">Primary Link</Link>);
  const linkElement = screen.getByText('Primary Link');
  expect(linkElement).toBeInTheDocument();
  
  await userEvent.click(linkElement);
  // Add any additional assertions here if needed
});

test('renders Hover Link and simulates hover interaction', async () => {
  render(<Link primary={true} href="#" backgroundColor="lightblue">Hover Link</Link>);
  const linkElement = screen.getByText('Hover Link');
  expect(linkElement).toBeInTheDocument();
  
  await userEvent.hover(linkElement);
  await userEvent.unhover(linkElement);
  // Add any additional assertions here if needed
});
