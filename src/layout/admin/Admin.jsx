import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../../components/partials/Sidebar'
import Toolbar from '../../components/partials/Toolbar'

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      const insideToggle = toggleRef.current?.contains(event.target)
      const insideMenu = sidebarRef.current?.contains(event.target)

      if (!(insideToggle || insideMenu)) {
        setCollapsed(false)
      }
    }

    const mediaQuery = window.matchMedia('(max-width: 639px)')

    if (mediaQuery.matches) {
      window.addEventListener('click', handleClick)
    }

    return () => window.removeEventListener('click', handleClick)
  }, [])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
        <div className='flex'>
            <Sidebar collapsed={collapsed} ref={sidebarRef} />
            <div className='w-full overflow-y-hidden'>
                <Toolbar toggleCollapsed={toggleCollapsed} ref={toggleRef} />
            </div>
        </div>
  )
}

export default Admin
