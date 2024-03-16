import * as React from 'react';
import { NavLink } from 'react-router-dom';

import SidebarItemProperties from './SidebarItem.properties'

const SidebarItem: React.FC<SidebarItemProperties> = ({ item }) => {
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <React.Fragment>
            {item.submenu ? (
                <React.Fragment>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex w-full justify-between text-color-primary cursor-pointer items-center ${subMenuOpen ? 'mb-2' : 'mb-6'}`}
                    >
                        <div className="flex flex-row space-x-4 items-center hover:text-slate-600 hover:dark:text-slate-300">
                            <i className={`${item.icon} m-auto text-sm `}></i>
                            <span>{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <i className={`ri-arrow-down-s-line text-sm`} />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <ul className="mt-2 mb-4 ml-4 flex flex-col space-y-1 bg-slate-300 dark:bg-slate-600 p-2 rounded-md w-full">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <li key={idx}>
                                        <NavLink
                                            to={subItem.path}
                                            className='flex flex-row space-x-4 items-center text-sm'
                                        >
                                            <span className='text-color-secondary hover:text-slate-600 hover:dark:text-slate-500 '>{subItem.title}</span>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </React.Fragment>
            ) : (
                <li className="flex w-full justify-between  text-color-primary hover:text-slate-800 hover:dark:text-slate-300 cursor-pointer items-center mb-6">
                    <NavLink to={item.path} className="flex items-center">
                        <i className={`${item.icon} m-auto text-sm `}></i>
                        <span className="text-md ml-2 ">{item.title}</span>
                    </NavLink>
                </li>)}
        </React.Fragment>
    )
};

export default SidebarItem