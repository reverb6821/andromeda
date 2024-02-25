import { render } from '@testing-library/react';

import Alert from '../Alert';

describe('Alert', () => {
  test('rendered component', () => {
    const { getByText } = render(<Alert title='Done!' alertStyle='success' message='Lorem Ipsum Dolor Sit Amet' />);
    expect(getByText('Lorem Ipsum Dolor Sit Amet')).toBeInTheDocument();
  });
})
