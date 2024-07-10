// import '@testing-library/jest-dom';
// import { sum } from "./Button";
// import {expect, test} from '@jest/globals';
 
// test('adds 1 + 2 to equal 3', () => {
//    expect(sum(1, 2)).toBe(3);
//  });
 

// button.test.ts
import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test("Button has correct background color when primary prop is true", () => {
  const { getByText } = render(<Button primary>Click Me</Button>);
  const button = getByText('Click Me');
  expect(button).toHaveStyle('background-color: blue');
});

