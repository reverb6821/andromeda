import classnames from "classnames";
import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import { InputTextFieldProps } from '@/interfaces/components.properties';

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  disabled,
  icon,
  placeholder,
  type,
  helper,
  model,
  value,
  onChange
}) => {
  return (
    <React.Fragment>
      <div className='py-4 px-2 w-64 max-md:w-full'>
        {icon ? (
          <React.Fragment>
            <label
              htmlFor={model}
              className="block mb-2 text-sm font-medium text-color"
            >
              {label}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className={`${icon} text-color`} />
              </div>
              <Field
                name={model}
                type={type}
                id={model}
                onChange={onChange}
                value={value}
                className={classnames(
                  "shadow-md w-full input-style text-color text-sm block pl-10 p-2.5 placeholder-slate-400 dark:placeholder-slate-700",
                  {
                    "disabled:": disabled === true,
                  }
                )}
                placeholder={placeholder}
                disabled={disabled}
              />
            </div>
            <p className="mt-1 text-sm text-sub-color">{helper}</p>
            <ErrorMessage
                  name={model}
                  component="div"
                  className="p-1 text-sm text-red-600 text font-semibold"
                />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label
              htmlFor={model}
              className="block mb-2 text-sm font-medium text-color"
            >
              {label}
            </label>
            <Field
              name={model}
              type={type}
              id={model}
              className={classnames(
                "shadow-md w-full input-style text-color text-sm block p-2.5 placeholder-slate-400 dark:placeholder-slate-700",
                {
                  "disabled:": disabled === true,
                }
              )}
              placeholder={placeholder}
              disabled={disabled}
            />
            <p className="mt-1 text-sm text-sub-color">{helper}</p>
            <ErrorMessage
              name={model}
              component="div"
              className="p-1 text-sm text-red-600 text font-semibold"
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default InputTextField;
