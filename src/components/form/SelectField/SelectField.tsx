import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import { SelectFieldProps } from '@/interfaces/components.properties';

import CustomSelect from './CustomSelect';


const SelectField: React.FC<SelectFieldProps> = ({
    label,
    disabled,
    // helper,
    options,
    isMulti,
    model,
    sendValue,
  }) => {

    return(
        <React.Fragment>
            {/* <div className='py-4 px-2 w-64 max-md:w-full'>
                <label
                    className="block mb-2 text-sm font-medium text-color"
                >
                    {label}
                </label>
                <Field
                    id={model}
                    name={model}
                    className={classnames(
                        "shadow-md w-full text-color input-style text-sm rounded-md block p-2.5",
                        {
                            "disabled:": disabled === true,
                        }
                    )}
                    disabled={disabled}
                    value={selected}
                    onChange={handleChange}
                    as="select"
                >
                    <option value="" className="text-color">
                        {t("t.app.formfield.select.defaultLabel")}
                    </option>
                    {options && options.length > 1
                    ? options.map((option, index) => (
                        <option value={option.value} key={index} className="text-color">
                            {option.label}
                        </option>
                        ))
                    : ""}
                </Field>
                <p className="mt-1 text-sm text-sub-color">{helper}</p> */}
                <Field component={CustomSelect}
                    label={label}
                    name={model}
                    disabled={disabled}
                    isMulti={isMulti}
                    options={options}
                    onChange={sendValue}
                />
                <ErrorMessage
                  name={model}
                  component="div"
                  className="p-1 text-sm text-red-600 text font-semibold"
                />
            {/* </div> */}
        </React.Fragment>
    )
}

export default SelectField