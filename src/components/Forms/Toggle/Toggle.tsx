import React from "react";
import classnames from "classnames";

interface ToggleProps {
  label: string;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ label, disabled, value, checked }) => {
  return (
    <React.Fragment>
      <label
        className={classnames(
          "relative inline-flex items-center cursor-pointer",
          {
            "disabled:": disabled === true,
          }
        )}
      >
        <input
          id={label}
          type="checkbox"
          value={value}
          disabled={disabled}
          checked={checked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-sky-600" />
        <span className="ml-3 text-sm font-medium text-slate-900 dark:text-slate-300">
          {label}
        </span>
      </label>
    </React.Fragment>
  );
};

export default Toggle;
