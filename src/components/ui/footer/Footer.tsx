import * as React from 'react';

import { FooterProps, itemProps } from './Footer.properties';

const Footer: React.FC<FooterProps> =({footerTitle, footerEl})=>{

    return(
        <React.Fragment>
            <footer className="color-primary fixed bottom-0 left-0 z-20 w-full shadow-lg">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div className="text-sm  sm:text-center text-color-primary">© 2024  <a href="" className="hover:underline">{footerTitle}</a>. All Rights Reserved.
                </div>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-color-primary sm:mt-0">
                {footerEl && footerEl.length > 1
                    ? footerEl.map((el: itemProps, index: number) => (
                    <li key={index}>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">{el.label}</a>
                    </li>
                        )) : ""}
                </ul>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer