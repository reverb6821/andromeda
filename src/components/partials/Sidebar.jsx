/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Logo from '../../assets/logo.svg'

// eslint-disable-next-line react/prop-types
const Sidebar = forwardRef(({ collapsed }, sidebarRef) => (
    <motion.nav
    ref={sidebarRef}
    initial={false}
    className={`w-64 min-h-screen p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
      collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
    } ease-in-out`}>
         <div className='flex space-x-3 justify-center text-xl font-bold'>
            <img src={Logo} height={30} width={30} alt='Andromeda Logo' />
            <span>Andromeda</span>
         </div>
         <div className='mt-5 pt-5'>
            TEST
         </div>
    </motion.nav>
))
export default Sidebar
