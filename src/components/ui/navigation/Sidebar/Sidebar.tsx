import * as React from 'react';
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from './shared/LanguageSwitcher';
import SidebarFooter from './shared/SidebarFooter';
import SidebarItem from './shared/SidebarItem';
import { SideNavItem, SidebarProps } from './Sidebar.properties';

const Sidebar: React.FC<SidebarProps> = ({ children, sidebarLogo, sidebarTitle, sidebarSubTitle, items }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <div className="flex flex-no-wrap h-screen w-full">
                <div className="w-96 absolute sm:relative color-primary shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <div className="h-32 w-full my-10">
                            <NavLink
                                to={'/'}
                                className='flex flex-row items-center mt-5 py-4'
                            >
                                <img width={80} height={80} src={sidebarLogo} />
                                <div className={`flex flex-col pl-4 md:block`}>
                                    <h1 className="font-semibold text-xl text-color-primary">
                                        {sidebarTitle}
                                    </h1>
                                    <p className="text-base font-light text-color-secondary">
                                        {sidebarSubTitle}
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <ul className="mt-30">
                            {items.map((item: SideNavItem, idx: number) => {
                                return <SidebarItem key={idx} item={item} />;
                            })}
                        </ul>
                        <div className="flex justify-center mt-48 mb-4 w-full">
                            <LanguageSwitcher />
                        </div>
                    </div>
                   <SidebarFooter isOpen={!isOpen}/>
                </div>

                <div className={`${isOpen ? 'w-80' : 'w-0'} h-full z-40 absolute color-primary shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out`}>
                    <div className="h-10 w-10 color-primary absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-color-primary"  onClick={toggleSidebar}>
                        <i className="ri-menu-line m-auto text-sm"></i>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} px-8`}>
                        <div className="h-16 w-full flex items-center">
                        <NavLink
                                to={'/'}
                                className='flex flex-row items-center mt-5 py-4'
                            >
                                <img width={80} height={80} src={sidebarLogo} />
                                <div className={`flex flex-col pl-4 md:block`}>
                                    <h1 className="font-semibold text-xl text-color-primary">
                                        {sidebarTitle}
                                    </h1>
                                    <p className="text-base font-light text-color-secondary">
                                        {sidebarSubTitle}
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                        <ul className="mt-12">
                            {items.map((item, idx) => {
                                return <SidebarItem key={idx} item={item} />;
                            })}
                        </ul>
                        <div className="flex justify-center mt-48 mb-4 w-10">
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <SidebarFooter isOpen={isOpen} />
                </div>
                
                <div className="py-10 h-full w-full px-6 color-secondary">
                    <div className="w-full h-full">
                    {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar