export const SIDENAV_ITEMS = [
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
        { title: 'All', path: '/projects' },
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