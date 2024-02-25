import { render } from '@testing-library/react';

import FlexContainer from '../FlexContainer';

describe('FlexContainer', () => {
  test('rendered component', () => {
    const { container } = render(<FlexContainer direction='row' />);
    expect(container.querySelector('.flex-row')).toBeInTheDocument();
  });
})
