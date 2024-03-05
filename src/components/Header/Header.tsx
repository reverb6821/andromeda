import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './shared/ThemeSwitcher';
import { HeaderProperties, itemProperties } from './Header.properties'

const Header: React.FC<HeaderProperties> = ({ headerLogo, headerTitle, headerSubTitle, headerEl }) => {
    const [mobile, setMobile] = React.useState<boolean>(false);
    return (
        <React.Fragment>
            <header className="mx-auto px-4 py-10 md:py-5 bg-headline-primary shadow-lg">
                <div className="flex md:flex-row justify-between items-center">
                    <div className='flex flex-row items-center'>
                        <img width={80} height={80} src={headerLogo} />
                        <div className={`flex flex-col pl-4 md:block hidden`}>
                            <h1 className="font-semibold text-md text-slate-300">
                                {headerTitle}
                            </h1>
                            <p className="text-sm font-light text-slate-400">
                                {headerSubTitle}
                            </p>
                        </div>
                    </div>
                    <div className="space-x-8 hidden md:block">
                        {headerEl?.map((el: itemProperties, index: number) => (
                            <NavLink
                                key={index}
                                to={el.route}
                                className='text-slate-300 hover:font-semibold'
                                aria-current="page"
                            >
                                {el.label}
                            </NavLink>
                        )) || ''}
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <div className='p-2'>
                            <ThemeSwitcher />
                        </div>
                        {/* <div className='p-2'>
                            <LanguageSwitcher />
                        </div> */}
                        <div className='p-2'>
                            <button
                                type="button"
                                className="bg-headline-secondary inline-flex items-center p-0 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
                                onClick={() => setMobile(!mobile)}
                            >
                                <i className='ri-menu-line text-3xl text-slate-300' />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className={`flex justify-center space-x-8 md:hidden mt-4 ${mobile ? "block" : "hidden"}`}>
                    {headerEl?.map((el: itemProperties, index: number) => (
                        <NavLink
                            key={index}
                            to={el.route}
                            className='text-slate-300 hover:font-semibold'
                            aria-current="page"
                        >
                            {el.label}
                        </NavLink>
                    )) || ''}
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header