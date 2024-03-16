import * as React from 'react';
import { NavLink } from 'react-router-dom';

import SidebarFooterProperties from './SidebarFooter.properties'

const SidebarFooter: React.FC<SidebarFooterProperties> = ({ isOpen}) => {
    return (
        <React.Fragment>
            <div className={`${isOpen ? 'block' : 'hidden'} absolute bottom-0 w-full flex justify-around px-8 border-t border-slate-700 dark:border-slate-500`}>
                <ul className="w-full flex items-center justify-between">
                    {/* <li className="cursor-pointer text-white pt-5 pb-3">
                                <LanguageSwitcher />
                            </li> */}
                    {/* <li className="cursor-pointer text-white pt-5 pb-3">
                        <ThemeSwitcher />
                    </li> */}
                    <li className="cursor-pointer text-white pt-5 pb-3">
                        <NavLink
                            to={'/profile'}
                            className='bg-slate-300 dark:bg-slate-600 text-color-primary py-2 px-4 rounded inline-flex items-center'
                        >
                            <i className="ri-user-line text-color-primary"></i>
                        </NavLink>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3">
                        <button
                            className='bg-slate-300 dark:bg-slate-600 text-color-primary py-2 px-4 rounded inline-flex items-center'
                            onClick={() => alert('You Logged Out!')}
                        >
                            <i className="ri-logout-circle-r-line" />
                        </button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default SidebarFooter