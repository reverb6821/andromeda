/* eslint-disable react/react-in-jsx-scope */
import { FaHome } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <FaHome />
  },
  {
    path: '/saved',
    name: 'Saved',
    icon: <AiFillHeart />
  }
]

export default routes
