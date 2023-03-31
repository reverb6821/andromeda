import Link from 'next/link'

import { FcHome, FcDatabase } from 'react-icons/fc'

const SidebarMenu = () => {
    return(
        <div className="h-full px-3 py-4 overflow-y-auto ">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <FcHome size={20} />
               <span className="ml-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link href="/table" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <FcDatabase size={20} />
                <span className="ml-3">Tables</span>
            </Link>
         </li>
      </ul>
   </div>
    )
}

export default SidebarMenu