import React from "react";
import classnames from "classnames";

interface InputTextFieldProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  type: string;
  icon?: string;
  helper: string;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  disabled,
  icon,
  placeholder,
  type,
  helper,
}) => {
  return (
    <React.Fragment>
      <div>
        {icon ? (
          <React.Fragment>
            <label
              htmlFor={label}
              className="block mb-2 text-sm font-medium text-color"
            >
              {label}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className={`${icon} text-color`} />
              </div>
              <input
                type={type}
                id={label}
                className={classnames(
                  "input-style text-color text-sm block w-full pl-10 p-2.5 dark:placeholder-slate-400",
                  {
                    "disabled:": disabled === true,
                  }
                )}
                placeholder={placeholder}
                disabled={disabled}
              />
            </div>
            <p className="mt-1 text-sm text-sub-color">{helper}</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label
              htmlFor={label}
              className="block mb-2 text-sm font-medium text-color"
            >
              {label}
            </label>

            <input
              type={type}
              id={label}
              className={classnames(
                "input-style text-color text-sm block w-full p-2.5 dark:placeholder-slate-400",
                {
                  "disabled:": disabled === true,
                }
              )}
              placeholder={placeholder}
              disabled={disabled}
            />
            <p className="mt-1 text-sm text-sub-color">{helper}</p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default InputTextField;
