import { render } from '@testing-library/react';

import FlexContainer from '../FlexContainer';

describe('FlexContainer', () => {
  test('renders learn react link', () => {
    const { container } = render(<FlexContainer direction='row' />);
    expect(container.querySelector('.flex-row')).toBeInTheDocument();
  });
})
