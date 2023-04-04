import React from 'react'

import Welcome from '../../components/dashboard/Welcome'
import Stats from '../../components/dashboard/Stats'

import { FcHome } from 'react-icons/fc'

const Dashboard = () => {
  return (
        <>
            <nav className="flex text-xl font-bold pb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <FcHome size={20} className='mr-2' />
                            Home
                        </a>
                    </li>
                </ol>
            </nav>
            <div className='w-full p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded  shadow-lg'>
                <Welcome />
                <div className="flex flex-wrap flex-row">
                    <div className="flex-shrink max-w-full w-full lg:w-1/3 xl:w-1/4">
                        <Stats />
                    </div>
                    CHART
                </div>
            </div>
        </>
  )
}

export default Dashboard
