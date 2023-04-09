import React from 'react'
import { FcHome, FcNext, FcDatabase } from 'react-icons/fc'

const Table = () => {
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
                    <li>
                    <div className="flex items-center">
                        <FcNext size={20} className='mr-2' />
                    </div>
                    </li>
                    <li aria-current="page">
                    <div className="flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <FcDatabase size={20} className='mr-2' />
                            Table
                        </a>
                    </div>
                    </li>
                </ol>
            </nav>
            <div className='w-full p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded  shadow-lg'>

            </div>
    </>
  )
}

export default Table
