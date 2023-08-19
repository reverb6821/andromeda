import React from "react";
import classnames from "classnames";

interface FileInputField {
  label: string;
  subLabel: string;
  disabled?: boolean;
}

const FileInputField: React.FC<FileInputField> = ({
  label,
  subLabel,
  disabled,
}) => {
  return (
    <React.Fragment>
      <label
        className="block mb-2 text-sm font-medium text-color"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={classnames(
          "block w-full text-sm text-color input-style border rounded-lg cursor-pointer focus:outline-none dark:placeholder-slate-400",
          {
            "disabled:": disabled === true,
          }
        )}
        id={label}
        type="file"
      />
      <p className="mt-1 text-sm text-sub-color">{subLabel}</p>
    </React.Fragment>
  );
};

export default FileInputField;
