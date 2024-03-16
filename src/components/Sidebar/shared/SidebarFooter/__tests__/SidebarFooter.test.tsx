import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SidebarFooter from '../SidebarFooter';

describe('SidebarFooter', () => {
  test('rendered component', () => {
    const { container } = render(
      <MemoryRouter>
        <SidebarFooter isOpen />
      </MemoryRouter>
    );
    expect(container.querySelector('div.block')).toBeInTheDocument();
  });
})