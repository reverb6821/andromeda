import * as React from 'react';

import TooltipProperties from './Tooltip.properties'

const Tooltip: React.FC<TooltipProperties> = ({ content, direction, delay }) => {
    const [active, setActive] = React.useState(false);
    let timeout: NodeJS.Timeout | null;

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 400);
    };

    const hideTip = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        setActive(false);
    };

    return (
        <React.Fragment>
            <div className="relative inline-block">
                <span
                    className="cursor-pointer"
                    onMouseEnter={showTip}
                    onMouseLeave={hideTip}
                >
                    <i className="ri-information-line text-sky-800"/>
                </span>
                {active && (
                    <div
                        className={`absolute m-1 bg-slate-200 text-slate-800 p-2 rounded-md shadow-md ${direction === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2' :
                            direction === 'left' ? 'right-full top-1/2 transform -translate-y-1/2' :
                                direction === 'right' ? 'left-full top-1/2 transform -translate-y-1/2' :
                                    'top-full left-1/2 transform -translate-x-1/2'
                            } transition-opacity duration-300 opacity-100`}
                        style={{ transitionDelay: `${delay}ms` }}
                    >
                        {content}
                    </div>
                )}
            </div>
        </React.Fragment>
    )
};

export default Tooltip