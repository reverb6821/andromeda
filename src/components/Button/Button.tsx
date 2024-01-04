import classnames from "classnames";
import * as React from 'react'

import Loader from "../partials/loader/Loader";

interface ButtonProps {
  btnStyle: string,
  label: string,
  isLoading?: boolean,
  icon?: string,
  disabled?: boolean,
  type: "button"|"submit"|"reset"|undefined,
  onBtnClick?: () => void,
}

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
            "btn-primary--alert text-slate-200": btnStyle === 'primary--alert',
            "btn-primary--warn text-slate-200": btnStyle === 'primary--warn',
            "btn-primary--success text-slate-200": btnStyle === 'primary--success',
            "btn-secondary": btnStyle === 'secondary',
            "btn-secondary--alert": btnStyle === 'secondary--alert',
            "btn-secondary--warn": btnStyle === 'secondary--warn',
            "btn-secondary--success": btnStyle === 'secondary--success',
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
                    "text-color-primary text-slate-200": btnStyle === 'primary' || btnStyle ==='alert' || btnStyle ==='warn' || btnStyle ==='success',
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
