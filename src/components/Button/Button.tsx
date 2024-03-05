import classnames from "classnames";
import * as React from 'react';

import Loader from './shared/Loader';

import ButtonProperties from './Button.properties'

const Button: React.FC<ButtonProperties> = ({
    btnStyle,
    label,
    isLoading,
    icon,
    disabled,
    onBtnClick,
    type,
}) => {
    return (
        <React.Fragment>
            <button
                disabled={disabled}
                onClick={onBtnClick}
                type={type}
                className={classnames(
                    "shadow-md justify-center font-medium text-center inline-flex items-center text-sm px-5 py-2.5 mr-2 mb-2 uppercase max-md:w-full max-md:text-center",
                    {
                        "bg-headline-primary text-slate-200": btnStyle === 'primary',
                        "bg-alert-color text-slate-200": btnStyle === 'primary--alert',
                        "bg-warn-color text-slate-200": btnStyle === 'primary--warn',
                        "bg-success-color text-slate-200": btnStyle === 'primary--success',
                        "bg-info-color text-slate-200": btnStyle === 'primary--info',

                        "text-headline-primary dark:text-slate-100 border border-headline-primary dark:border-slate-200 hover:text-slate-200 hover:bg-headline-primary": btnStyle === 'secondary',
                        "text-alert-color border border-alert-color hover:text-slate-200 hover:bg-alert-color": btnStyle === 'secondary--alert',
                        "text-warn-color border border-warn-color hover:text-slate-200 hover:bg-warn-color": btnStyle === 'secondary--warn',
                        "text-success-color border border-success-color hover:text-slate-200 hover:bg-success-color": btnStyle === 'secondary--success',
                        "text-info-color border border-info-color hover:text-slate-200 hover:bg-info-color": btnStyle === 'secondary--info',

                        "disabled:": disabled === true,
                    }
                )}
            >
                {isLoading ? (
                    <Loader />
                ) : (
                    <React.Fragment>
                        {icon ? (
                            <React.Fragment>
                                <i
                                    className={classnames(`${icon} mr-2`, {
                                        "text-color-primary text-slate-200": btnStyle === 'primary' || btnStyle === 'alert' || btnStyle === 'warn' || btnStyle === 'success',
                                        "text-sky-700 dark:text-slate-200": btnStyle === 'secondary',
                                    })}
                                />
                                {label}
                            </React.Fragment>
                        ) : (
                            `${label}`
                        )}
                    </React.Fragment>
                )}
            </button>
        </React.Fragment>
    )
};

export default Button