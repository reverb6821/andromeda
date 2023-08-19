import React from "react";
import classnames from "classnames";

interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  disabled,
  placeholder,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={label}
        className="text-color block mb-2 text-sm font-medium"
      >
        {label}
      </label>
      <textarea
        id={label}
        disabled={disabled}
        rows="4"
        className={classnames(
          "text-color block p-2.5 w-full text-sm input-style",
          {
            "disabled:": disabled === true,
          }
        )}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default TextAreaField;
