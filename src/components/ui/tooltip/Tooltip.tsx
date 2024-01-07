import * as React from "react";

import { TooltipProps } from './Tooltip.properties';

const Tooltip: React.FC<TooltipProps> = ({ tooltipText }) => {
  const [tooltipStatus, setTooltipStatus] = React.useState(0);

  return (
    <React.Fragment>
      <div
        className="relative mt-20 md:mt-0"
        onMouseEnter={() => setTooltipStatus(1)}
        onMouseLeave={() => setTooltipStatus(0)}
      >
        <div className="mr-2 cursor-pointer">
          <i className="ri-information-line text-sky-800 dark:text-slate-300 text-xl"></i>
        </div>
        {tooltipStatus == 1 && (
          <div
            role="tooltip"
            className="text-color-primary z-20 -mt-10 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 bg-slate-100 dark:bg-slate-700 p-4 rounded shadow-lg"
          >
            <p className="text-color-primary text-xs leading-4 pb-3">
              {tooltipText}
            </p>
          </div>
        )}{" "}
      </div>
    </React.Fragment>
  );
};

export default Tooltip;
