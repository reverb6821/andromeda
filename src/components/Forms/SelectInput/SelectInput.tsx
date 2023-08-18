import React, { useState } from "react";
import classnames from "classnames";

interface SelectInputProps {
  label: string;
  disabled?: boolean;
  helper?: string;
  options: optionsProps[];
}

interface optionsProps {
  label: string;
  value: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  disabled,
  helper,
  options,
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('Label 👉️', event.target.selectedOptions[0].label);
    // console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <React.Fragment>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-color"
      >
        {label}
      </label>
      <select
        id={label}
        className={classnames(
          "text-color input-style text-sm rounded-md block w-full p-2.5",
          {
            "disabled:": disabled === true,
          }
        )}
        disabled={disabled}
        value={selected}
        onChange={handleChange}
      >
        <option value="" className="text-color">
          Choose...
        </option>
        {options && options.length > 1
          ? options.map((option, index) => (
              <option value={option.value} key={index} className="text-color">
                {option.label}
              </option>
            ))
          : ""}
      </select>
      <p className="mt-1 text-sm text-sub-color">{helper}</p>
    </React.Fragment>
  );
};

export default SelectInput;
