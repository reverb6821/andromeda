import React from "react";
import classnames from "classnames";

interface CheckboxProps {
  label: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, disabled }) => {
  return (
    <React.Fragment>
      <div className="flex items-center mb-4">
        <input
          id={label}
          type="checkbox"
          value=""
          disabled={disabled}
          className={classnames(
            "w-5 h-5 text-sky-600 bg-slate-100 border-slate-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600",
            {
              "disabled:": disabled === true,
            }
          )}
        />
        <label htmlFor={label} className="ml-2 text-sm font-medium text-color">
          {label}
        </label>
      </div>
    </React.Fragment>
  );
};

export default Checkbox;
