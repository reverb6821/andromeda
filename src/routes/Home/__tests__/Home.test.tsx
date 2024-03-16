import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  test('rendered component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home Route')).toBeInTheDocument();
  });
})