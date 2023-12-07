import classnames from "classnames";
import { Field, ErrorMessage } from 'formik';
import * as React from "react";

import Tooltip from '@/components/partials/tooltip/Tooltip';
import Grid from '@/components/ui/Grid/Grid';
import { CheckboxFieldProps } from '@/interfaces/components.properties';

const Checkbox: React.FC<CheckboxFieldProps> = ({ label, disabled, model, tooltipText }) => {
  return (
    <React.Fragment>
        <Grid direction='column'>
            <div className="flex items-center mb-4">
                <Field
                id={label}
                disabled={disabled}
                name={model}
                type="checkbox"
                className={classnames(
                    "w-4 h-4 text-sky-600 bg-slate-100 border-slate-300 rounded focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600",
                    {
                    "disabled:": disabled === true,
                    }
                )}
                />
                <label htmlFor={label} className="ml-2 text-sm font-medium text-color-primary">
                    {label}
                </label>
                {tooltipText ? (
                <div className='pl-2'>
                    <Tooltip tooltipText={tooltipText} />
                </div>) : ''}
            </div>
            <ErrorMessage
                name={model}
                component="div"
                className="p-1 text-sm text-red-600 text font-semibold"
            />
        </Grid>
     
    </React.Fragment>
  );
};

export default Checkbox;
