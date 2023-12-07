import classnames from "classnames";
import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import Grid from '@/components/ui/Grid/Grid';
import { ToggleFieldProps } from '@/interfaces/components.properties';

const ToggleField: React.FC<ToggleFieldProps> = ({ label, disabled, model }) => {
  return (
    <React.Fragment>
        <Grid direction='column'>
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <Field 
                    id={label}
                    disabled={disabled}
                    name={model}
                    type="checkbox"
                    className={classnames("sr-only peer",{
                        "disabled:": disabled === true,
                        }
                    )}
                />
                <div className=" w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-sky-600"></div>
                <span className=" ms-3 text-sm font-medium text-slate-900 dark:text-slate-300"> {label}</span>
            </label>
            <ErrorMessage
                name={model}
                component="div"
                className="p-1 text-sm text-red-600 text font-semibold"
            />
        </Grid>
    </React.Fragment>
  );
};

export default ToggleField;