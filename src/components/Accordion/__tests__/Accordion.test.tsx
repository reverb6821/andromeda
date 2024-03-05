import { render } from '@testing-library/react';

import Accordion from '../Accordion';

describe('Accordion', () => {
  test('rendered component', () => {
    const { getByText } = render(<Accordion title='Accordion Example' message='Lorem Ipsum Dolor Sit Amet' />);
    expect(getByText('Accordion Example')).toBeInTheDocument();
  });
})
