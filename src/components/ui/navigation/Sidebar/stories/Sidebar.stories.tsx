import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from 'react-redux';

import Logo from '@/assets/logo-placeholder-image.png'
import store from '@/store/store.ts';

import Sidebar from "../Sidebar.tsx";

const meta: Meta<typeof Sidebar> = {
    title: "Andromeda/UI/Sidebar",
    component: Sidebar,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ]
  };

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarExample: Story = {
    args: {
        sidebarLogo: Logo,
        sidebarTitle:'Andromeda',
        sidebarSubTitle:'A component Collection',
        items: [
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
          ],
    }
}