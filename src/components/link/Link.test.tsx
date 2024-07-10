// link.test.ts
import "@testing-library/jest-dom";
import React from 'react';
import { render } from '@testing-library/react';
import Link from './Link';

test("Link has correct color when primary prop is true", () => {
  const { getByTestId } = render(<Link primary="true" href="#">Test Link</Link>);
  const link = getByTestId('LinkElement');
  expect(link).toHaveStyle('color: darkblue');
});
