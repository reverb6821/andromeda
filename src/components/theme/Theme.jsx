import React, {useState, useRef, useEffect} from 'react'

// eslint-disable-next-line react/prop-types
const Theme = ({ className }) => {
  const [darkMode, setDarkMode] = useState(false)

  const didMountRef = useRef(false)

  useEffect(() => {
    if (
      localStorage.darkMode === 'true' ||
        (!('darkMode' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      localStorage.darkMode = darkMode

      if (darkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('style', 'color-scheme: dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('style', 'color-scheme: light')
      }
    } else {
      didMountRef.current = true
    }
  }, [darkMode])

  return (
      <button
        aria-label='Toggle dark mode'
        type='button'
        className={className}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode
          ? (
          <span className='text-2xl'>🌕</span>
            )
          : (
          <span className='text-2xl'>☀️</span>
            )}
      </button>
  )
}

export default Theme
