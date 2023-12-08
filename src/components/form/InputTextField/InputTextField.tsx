import classnames from "classnames";
import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import Typography from '@/components/ui/Typography/Typography';
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
              className="block mb-2 text-sm font-medium text-color-primary"
            >
              {label}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className={`${icon} text-color-primary`} />
              </div>
              <Field
                name={model}
                type={type}
                id={model}
                onChange={onChange}
                value={value}
                className={classnames(
                  "shadow-md w-full input-style text-color-primary text-sm block pl-10 p-2.5 placeholder-slate-400 dark:placeholder-slate-200",
                  {
                    "disabled:": disabled === true,
                  }
                )}
                placeholder={placeholder}
                disabled={disabled}
              />
            </div>
            <Typography textSize='caption' textStyle='secondary' text={helper} classNames='mt-1 pl-2'/> 
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
              className="block mb-2 text-sm font-medium text-color-primary"
            >
              {label}
            </label>
            <Field
              name={model}
              type={type}
              id={model}
              className={classnames(
                "shadow-md w-full input-style text-color-primary text-sm block p-2.5 placeholder-slate-400 dark:placeholder-slate-200",
                {
                  "disabled:": disabled === true,
                }
              )}
              placeholder={placeholder}
              disabled={disabled}
            />
            <Typography textSize='caption' textStyle='secondary' text={helper} classNames='mt-1 pl-2'/> 
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
