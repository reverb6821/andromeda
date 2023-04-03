/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import { FcMenu } from 'react-icons/fc'
import Dropdown from '../dropdown/Dropdown'
import Theme from '../theme/Theme'

// eslint-disable-next-line react/prop-types
const Toolbar = forwardRef(({ toggleCollapsed }, toggleRef) => (
    <nav className='flex justify-between w-screen sm:w-auto p-6'>
      <button
        ref={toggleRef}
        aria-label='Toggle Sidebar'
        type='button'
        className='w-10 h-10 p-2 hover:opacity-75'
        onClick={toggleCollapsed}
      >
        <FcMenu size={30} />
      </button>
      <div className='flex space-x-10'>
        <Theme className='w-10 h-10 p-2 hover:opacity-75' />
        <Dropdown />
      </div>
    </nav>
))

export default Toolbar
