import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Auth from '../Auth';

describe('Auth', () => {
  test('rendered component', () => {
    const { container } = render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>);
    expect(container.querySelector('div.flex')).toBeInTheDocument();
  });
})