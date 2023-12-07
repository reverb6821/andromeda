import classnames from "classnames";
import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import Typography from '@/components/ui/Typography/Typography';
import { PasswordFieldProps } from '@/interfaces/components.properties';

const PasswordField: React.FC<PasswordFieldProps> = ({
    label,
    disabled,
    placeholder,
    helper,
    model,
    value,
    // onChange
  }) => {
    const [showHidePassword, changeShowHidePassword] = React.useState(false);

    return(
        <React.Fragment>
            <div className='py-4 px-2 w-64 max-md:w-full'>
                <label htmlFor={model} className="block mb-2 text-sm font-medium text-color-primary">
                    {label}
                </label>
                <div className="relative">
                    <div onClick={() => changeShowHidePassword(!showHidePassword)} className="absolute inset-y-0 z-10 left-0 flex items-center pl-3.5 ">
                        <i className={`text-color-primary ${showHidePassword ? 'ri-eye-off-line' : 'ri-eye-line text-color-primary'}`} />
                    </div>
                    <Field
                        name={model}
                        type={showHidePassword ? "text" : "password"}
                        id={model}
                        // onChange={onChange}
                        value={value}
                        className={classnames(
                        "shadow-md w-full input-style text-color-primary text-sm block pl-10 p-2.5 placeholder-slate-400 dark:placeholder-slate-700",
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
            </div>
        </React.Fragment>
       
    )
  }

  export default PasswordField