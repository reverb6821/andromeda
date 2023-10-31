import classnames from "classnames";
import * as React from 'react'

import { ButtonProps } from '@/interfaces/components.properties';

import Loader from "../partials/loader/Loader";

const Button: React.FC<ButtonProps> = ({
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
            "btn-primary text-slate-200": btnStyle === 'primary',
            "btn-secondary": btnStyle === 'secondary',
            "text-slate-200 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300": btnStyle === 'alert',
            "text-slate-200 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300": btnStyle === 'warn',
            "text-slate-200 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300": btnStyle === 'success',
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
                    "text-color text-slate-200": btnStyle === 'primary' || btnStyle ==='alert' || btnStyle ==='warn' || btnStyle ==='success',
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
  );
};

export default Button;
