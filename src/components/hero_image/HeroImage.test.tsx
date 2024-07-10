// src/components/HeroImage/HeroImage.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroImage from './HeroImage';

test('renders Primary Hero Image and simulates click', async () => {
  render(<HeroImage primary={true} src="https://via.placeholder.com/800x400" alt="Primary Hero Image" />);
  const imageElement = screen.getByAltText('Primary Hero Image');
  expect(imageElement).toBeInTheDocument();
  
  await userEvent.click(imageElement);
  // Add any additional assertions here if needed
});

test('renders Disabled Hero Image and attempts to click', async () => {
  render(<HeroImage disabled={true} src="https://via.placeholder.com/800x400" alt="Disabled Hero Image" />);
  const imageElement = screen.getByAltText('Disabled Hero Image');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveStyle('cursor: not-allowed');
  
  await userEvent.click(imageElement);
  // Verify the image is still not clickable
  expect(imageElement).toHaveStyle('opacity: 0.5');
});
