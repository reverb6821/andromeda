import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  const SIDENAV_ITEMS = [
    {
      title: 'Home',
      path: '/',
      icon: 'ri-dashboard-line',

    },
    {
      title: 'Projects',
      path: '/projects',
      icon: 'ri-bar-chart-2-line',
      submenu: true,
      subMenuItems: [
        { title: '', path: '/projects' },
        { title: 'Web Design', path: '/projects/web-design' },
        { title: 'Graphic Design', path: '/projects/graphic-design' },
      ],
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: 'ri-discuss-line',
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: 'ri-equalizer-line',
      submenu: true,
      subMenuItems: [
        { title: 'Account', path: '/settings/account' },
        { title: 'Privacy', path: '/settings/privacy' },
      ],
    },
    {
      title: 'Help',
      path: '/help',
      icon: 'ri-question-line',
    },
  ];

  test('rendered component', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar
          sidebarLogo='{Logo}'
          sidebarTitle='Andromeda'
          sidebarSubTitle='Component Collection'
          items={SIDENAV_ITEMS}
        />
      </MemoryRouter>
    );
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
})