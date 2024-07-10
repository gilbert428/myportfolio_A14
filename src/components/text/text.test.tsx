// text.test.ts
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import Text from './Text';

test("Text has correct color when disabled prop is true", () => {
  const { getByText } = render(<Text disabled={true}>Disabled Text</Text>);
  const textElement = getByText('Disabled Text');
  expect(textElement).toHaveStyle('color: lightgray');
});
