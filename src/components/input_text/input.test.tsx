// input.test.ts
import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

test("Input has correct border color when state is 'focused'", () => {
  const { getByRole } = render(<Input state="focused" />);
  const input = getByRole('textbox');
  expect(input).toHaveStyle('border-color: darkgray');
});
