import * as React from 'react'
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from '@/components/partials/LanguageSwitcher';
import ThemeSwitcher from '@/components/partials/ThemeSwitcher';

interface HeaderProps {
    headerTitle: string,
    headerSubTitle: string,
    headerEl: itemProps[],
    headerLogo: string
}

interface itemProps {
    label: string,
    route: string,
}


const Header: React.FC<HeaderProps> = ({ headerLogo, headerTitle, headerSubTitle, headerEl }) => {
    // const navigate: NavigateFunction = useNavigate();
    const [mobile, setMobile] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <header className="w-full mx-auto px-4 py-10 md:py-5 color-primary">
                <div className="w-full flex md:flex-row justify-between items-center">
                    <div className='flex flex-row items-center'>
                        <img width={80} height={80} src={headerLogo} />
                        <div className={`flex flex-col pl-4 md:block hidden`}>
                            <h1 className="font-semibold text-xl text-color-primary">
                                {headerTitle}
                            </h1>
                            <p className="text-base font-light text-color-secondary">
                                {headerSubTitle}
                            </p>
                        </div>
                    </div>
                    <div className="space-x-8 hidden md:block">
                        {headerEl && headerEl.length > 1
                            ? headerEl.map((el, index) => (
                                <NavLink
                                    key={index}
                                    to={el.route}
                                    className='text-color-secondary dark:text-slate-200 dark:hover:text-slate-300 hover:font-semibold'
                                    aria-current="page"
                                >
                                    {el.label}
                                </NavLink>
                            )) : ""}
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <div className='p-2'>
                            <ThemeSwitcher />
                        </div>
                        <div className='p-2'>
                            <LanguageSwitcher />
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
                </div>
                <div className={`flex justify-center space-x-8 md:hidden mt-4 ${mobile ? "block" : "hidden"}`}>
                    {headerEl && headerEl.length > 1
                        ? headerEl.map((el, index) => (
                            <NavLink
                                key={index}
                                to={el.route}
                                className={({ isActive }) => (isActive ? 'text-sky-700 py-2 pr-4 pl-3' : 'py-2 pr-4 pl-3 text-color-primary hover:md:text-sky-700')}
                                aria-current="page"
                            >
                                {el.label}
                            </NavLink>
                        )) : ""}
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header