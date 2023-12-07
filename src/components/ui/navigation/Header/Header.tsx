import * as React from 'react'
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from '@/components/partials/LanguageSwitcher';
import ThemeSwitcher from '@/components/partials/ThemeSwitcher';
import { HeaderProps } from '@/interfaces/components.properties';

const Header: React.FC<HeaderProps> = ({headerTitle, headerEl}) => {
    // const navigate: NavigateFunction = useNavigate();
    const [mobile, setMobile] = React.useState<boolean>(false);

    return(
        <React.Fragment>
            <nav className="color-primary border-slate-200  shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src="" className="h-8 mr-3" alt="" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-color-primary">
                            {headerTitle}
                        </span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <div className='p-2'>
                            <ThemeSwitcher />
                        </div>
                        <div className='p-2'>
                            <LanguageSwitcher/>
                        </div>
                        <div className='p-2'>
                        <button
                            type="button" 
                            className=" text-color-primary inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-700" 
                            onClick={() => setMobile(!mobile)}
                        >
                            <i className='ri-menu-line text-3xl' />
                        </button>
                        </div>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${ mobile ? "block" : "hidden"}`}>
                        <ul className={`flex flex-col w-full text-color-primary font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-slate-700 md:dark:bg-slate-700`}>
                        {headerEl && headerEl.length > 1
                            ? headerEl.map((el, index) => (
                                <li key={index} className={ mobile ? "w-full" : "w-full"}>
                                    <NavLink 
                                    to={el.route} 
                                    className={({ isActive }) => (isActive ? 'text-sky-700 py-2 pr-4 pl-3' : 'py-2 pr-4 pl-3 text-color-primary hover:md:text-sky-700')} 
                                    aria-current="page"
                                    >
                                        {el.label} 
                                    </NavLink>
                                </li>
                            )) : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header