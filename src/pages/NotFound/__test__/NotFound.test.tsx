import { render } from '@testing-library/react';

import NotFound from '../NotFound';

describe('NotFound', () => {
  test('rendered component', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Error 404')).toBeInTheDocument();
  });
})