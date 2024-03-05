import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  test('rendered component', () => {
    const { container } = render(<Button />);
    expect(container).toHaveLength(1);
  });
})
