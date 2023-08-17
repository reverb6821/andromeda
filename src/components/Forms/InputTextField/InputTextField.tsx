import React from "react";

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
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-200"
            >
              {label}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className={`${icon} text-slate-900 dark:text-slate-200`} />
              </div>
              <input
                type={type}
                id={label}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                disabled={disabled}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {helper}
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label
              htmlFor={label}
              className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-200"
            >
              {label}
            </label>

            <input
              type={type}
              id={label}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder}
              disabled={disabled}
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {helper}
            </p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default InputTextField;
