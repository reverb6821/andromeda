import React from 'react'
import { NavLink } from 'react-router-dom'

import { FcHome, FcDatabase, FcCalendar, FcOpenedFolder, FcComboChart, FcSettings, FcCustomerSupport } from 'react-icons/fc'

const SidebarMenu = () => {
  return (
        <>
            <ul className="space-y-2 font-medium">
                <li className='space-y-2'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcHome size={20} />
                        <span className="ml-3">Dashboard</span>
                    </NavLink>
                    <NavLink
                        to='/tables'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcDatabase size={20} />
                        <span className="ml-3">Tables</span>
                    </NavLink>
                    <NavLink
                        to='/calendar'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcCalendar size={20} />
                        <span className="ml-3">Calendar</span>
                    </NavLink>
                    <NavLink
                        to='/storage'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcOpenedFolder size={20} />
                        <span className="ml-3">Storage</span>
                    </NavLink>
                    <NavLink
                        to='/report'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcComboChart size={20} />
                        <span className="ml-3">Report</span>
                    </NavLink>
                    <NavLink
                        to='/live-chat'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcCustomerSupport size={20} />
                        <span className="ml-3">Live Chat</span>
                    </NavLink>
                    <NavLink
                        to='/components'
                        className={({ isActive }) => (isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-300 dark:bg-blue-700' : 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-300 dark:hover:bg-blue-700')}
                    >
                        <FcSettings size={20} />
                        <span className="ml-3">Components</span>
                    </NavLink>
                </li>
            </ul>
        </>
  )
}

export default SidebarMenu
