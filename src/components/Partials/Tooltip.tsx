import React, { useState } from "react";

interface TooltipProps {
  tooltipText?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipText }) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);

  return (
    <React.Fragment>
      <div
        className="relative mt-20 md:mt-0"
        onMouseEnter={() => setTooltipStatus(1)}
        onMouseLeave={() => setTooltipStatus(0)}
      >
        <div className="mr-2 cursor-pointer">
          <i className="ri-information-line text-sky-800 text-xl"></i>
        </div>
        {tooltipStatus == 1 && (
          <div
            role="tooltip"
            className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-slate-200 p-4 rounded"
          >
            <p className="text-sub-color text-xs leading-4 pb-3">
              {tooltipText}
            </p>
          </div>
        )}{" "}
      </div>
    </React.Fragment>
  );
};

export default Tooltip;
