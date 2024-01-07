import classnames from "classnames";
import * as React from 'react'

import { LoaderProps } from './Loader.properties';

const Loader: React.FC<LoaderProps> = ({loaderStyle}) => {
  return (
    <React.Fragment>
      <div
        className={classnames("animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-slate-800 rounded-full dark:text-slate-200",
          {
            "border-slate-200": loaderStyle == 'primary',
            "border-sky-700 hover:border-slate-200": loaderStyle == 'secondary',
            "border-red-700 hover:border-slate-200": loaderStyle == 'secondary--alert',
            "border-yellow-400 hover:border-slate-200": loaderStyle == 'secondary--warn',
            "border-emerald-700 hover:border-slate-200": loaderStyle == 'secondary--success',
          }
        )}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
};

export default Loader;
