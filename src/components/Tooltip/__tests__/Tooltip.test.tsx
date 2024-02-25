import { render } from '@testing-library/react';

import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  test('rendered component', () => {
    const { container } = render(<Tooltip content='Lorem Ipsum Dolor sit amet' direction='bottom' />);
    expect(container.querySelector('.ri-information-line')).toBeInTheDocument();
  });
})
