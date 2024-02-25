import { render } from '@testing-library/react';

import Badge from '../Badge';

describe('Badge', () => {
  test('rendered component', () => {
    const { getByText } = render(<Badge badgeStyle='primary' label='Lorem Ipsum' />);
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
  });
})
