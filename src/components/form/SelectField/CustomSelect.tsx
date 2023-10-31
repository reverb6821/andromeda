import {useField} from "formik";
import * as React from "react";
import { useTranslation } from 'react-i18next';
import Select, {Props} from "react-select";

export interface CustomSelectProps extends Props{
    name : string,
    label? : string,
    isMulti: boolean,
    disabled?: boolean,
    sendValue? : (event: React.MouseEvent) => void,
}

const CustomSelect:React.FC<CustomSelectProps> =({name,label , isMulti, disabled, sendValue , ...props})=> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [field , meta , helper] = useField(name)
        const { t } = useTranslation();

    return(
        <React.Fragment>
            <div className={`py-4 px-2 max-md:w-full`}>
                <label className="block mb-2 text-sm font-medium text-color">
                    {label}
                </label>
                <Select id={name}
                    {...field}
                    {...props}
                    unstyled
                    classNames={{
                        control: () => 'py-2.5 px-2 w-60 max-md:w-full rounded-md block max-md:w-full shadow-md input-style text-sm rounded-md p-0.5  relative',
                        input: () => 'text-color block',
                        placeholder: () => 'placeholder-slate-400 dark:placeholder-slate-700',
                        singleValue: () => 'text-color',
                        valueContainer: () => 'text-color w-full',
                        multiValue: () => 'bg-slate-200 dark:bg-slate-600 ml-1 mb-0.5 p-1',
                        multiValueLabel: () => 'bg-slate-200 dark:bg-slate-600 text-color text-sm rounded-none block mr-1',
                        multiValueRemove: () => 'bg-slate-200 dark:bg-slate-600 text-color rounded-none hover:text-red-600',
                        indicatorSeparator: () => 'hidden',
                        clearIndicator: () => 'text-color hover:text-red-600',
                        dropdownIndicator: () => 'text-color dark:hover:text-slate-400',
                        option: () => '  hover:font-bold text-color py-3 px-2',
                        menu: () => 'shadow-md w-full text-color input-style text-sm rounded-md block p-2.5',
                    }}
                    placeholder={t("t.app.formfield.reactselect.placeholder")}
                    noOptionsMessage={() => t("t.app.formfield.reactselect.noOptions")}
                    onBlur={() => helper.setTouched(true)}
                    isDisabled={disabled}
                    isMulti={isMulti}
                    onChange={(e) => {
                        helper.setValue(e)
                        sendValue && sendValue(e.value)
                    }}
                />
                {meta.touched && meta.error &&
                <div className='p-1 text-sm text-red-600 text font-semibold'>
                    {meta.error}
                </div>
                }
            </div>
        </React.Fragment>
    )
}

export default CustomSelect