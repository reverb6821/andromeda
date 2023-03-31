import { FcLike } from 'react-icons/fc'

const Footer = (): JSX.Element => (
  <footer className='w-screen sm:w-auto pb-6'>
    <div className='flex flex-col sm:block text-center text-sm text-gray-600 dark:text-gray-400'>
      <span>© {new Date().getFullYear()} Andromeda. </span>
      <span>
        Made with
        <div className='inline-flex'>
          <FcLike width={26} height={13} />
        </div>
        by{' '}
        <a
          href=''
          className='text-blue-600 dark:text-blue-400 hover:opacity-75'
          target='_blank'
          rel='noreferrer noopener'
        >
          reverb6821
        </a>
      </span>
    </div>
  </footer>
)

export default Footer