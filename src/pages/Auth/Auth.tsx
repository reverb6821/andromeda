import * as React from 'react';
import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar/Sidebar';

const Auth: React.FC = () => {
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

    return (
        <React.Fragment>
            <div className='flex flex-nowrap'>
                <Sidebar
                    sidebarLogo='{Logo}'
                    sidebarTitle='Andromeda'
                    sidebarSubTitle='Component Collection'
                    items={SIDENAV_ITEMS}
                />
                <div className='mx-auto py-10 md:w-4/5 w-11/12 px-6'>
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
};

export default Auth