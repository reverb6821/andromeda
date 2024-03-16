import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SidebarItem from '../SidebarItem';

describe('SidebarItem', () => {
  const item = 
    {
      title: 'Messages',
      path: '/messages',
      icon: 'ri-discuss-line',
      submenu: false,
    }

  test('rendered component', () => {
    const { getByText } = render(
    <MemoryRouter>
      <SidebarItem item={item} />
    </MemoryRouter>
    );
    expect(getByText('Messages')).toBeInTheDocument();
  });
})