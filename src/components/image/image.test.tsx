// image.test.ts
import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

test("Image has correct border color when primary prop is true", () => {
  const { getByAltText } = render(<Image primary={true} src="test.jpg" alt="test image" />);
  const img = getByAltText('test image');
  expect(img).toHaveStyle('border: 2px solid blue');
});
