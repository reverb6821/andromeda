import * as React from 'react';

import AccordionProperties from './Accordion.properties'

const Accordion: React.FC<AccordionProperties> = ({ title, subtitle, message, icon }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <React.Fragment>
            <div className='shadow-md p-2 rounded-md bg-slate-100 dark:bg-slate-500'>
                <h2>
                    <div
                        role="button"
                        onClick={toggle}
                        className="flex items-center justify-between w-full py-3 font-medium gap-3">
                        {icon ? (
                            <div className='flex flex-row items-center'>
                                <i className={`${icon}  text-xl text-slate-800 dark:text-slate-100`} />
                                <div className={`flex flex-col pl-4 md:block`}>
                                    <h1 className="font-semibold text-md text-slate-800 dark:text-slate-100">
                                        {title}
                                    </h1>
                                    {subtitle && icon ? (
                                        <p className="text-sm font-light text-slate-600 dark:text-slate-200">
                                            {subtitle}
                                        </p>
                                    ) : ''}
                                </div>
                            </div>
                        ) : (
                            <div className={`flex flex-col pl-4 md:block`}>
                                <h1 className="font-semibold text-md text-slate-800 dark:text-slate-100">
                                    {title}
                                </h1>
                                {subtitle && !icon ? (
                                    <p className="text-sm font-light text-slate-600 dark:text-slate-200">
                                        {subtitle}
                                    </p>
                                ) : ''}
                            </div>
                        )}
                        <i className={`group-open:opacity-0 text-slate-600 dark:text-slate-200 ${isOpen === false ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'}`} />
                    </div>
                </h2>
                <div className={`${isOpen === false ? 'hidden' : ''}`}>
                    <div className="py-3 border-t border-headline-primary">
                        <p className="mb-2 text-slate-600 dark:text-slate-200">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Accordion