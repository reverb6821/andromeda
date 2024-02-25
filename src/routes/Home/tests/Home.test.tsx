import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home Component')).toBeInTheDocument();
  });
})
