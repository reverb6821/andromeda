import { forwardRef } from 'react'

import { FcMenu } from 'react-icons/fc'
import Dropdown from './Dropdown'
import Theme from './Theme'

interface Props {
  toggleCollapsed(): void
}

const Toolbar = forwardRef(
  (
    { toggleCollapsed }: Props,
    toggleRef: React.Ref<HTMLButtonElement>
  ): JSX.Element => (
    <nav className='flex justify-between w-screen sm:w-auto p-6'>
      <button
        ref={toggleRef}
        aria-label='Toggle sidebar'
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
  )
)

Toolbar.displayName = 'Toolbar'

export default Toolbar
