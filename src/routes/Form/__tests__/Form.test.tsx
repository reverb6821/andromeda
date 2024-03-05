import { render } from '@testing-library/react';

import Form from '../Form';

describe('Form', () => {
  test('rendered component', () => {
    const { getByText } = render(<Form />);
    expect(getByText('Form Component')).toBeInTheDocument();
  });
})
