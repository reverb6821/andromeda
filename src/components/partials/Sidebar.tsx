import { forwardRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SidebarMenu from './SidebarMenu'

interface Props {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: Props, sidebarRef: React.Ref<HTMLElement>): JSX.Element => (
    <nav
      ref={sidebarRef}
      className={`w-64 min-h-screen p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } ease-in-out`}
    >
      <Link href='/' aria-label='Go to the dashboard' passHref>
        <div className='flex space-x-3 justify-center text-xl font-bold'>
        <Image src="/logo.svg" height={30} width={30} alt='Andromeda Logo'/>
          <span>Andromeda</span>
        </div>
      </Link>
      <div className='mt-5 pt-5'>
        <SidebarMenu/>
      </div>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar