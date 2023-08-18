import React from "react";
import classnames from "classnames";

import Loader from "../Partials/Loader";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  label: string;
  isLoading?: boolean;
  icon?: string;
  disabled?: boolean;
  customAction: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  label,
  isLoading,
  icon,
  disabled,
  customAction,
}) => {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        onClick={customAction}
        className={classnames(
          "font-medium text-center inline-flex items-center rounded-md text-sm px-5 py-2.5 mr-2 mb-2 text-color",
          {
            "btn-primary ": primary === true,
            "btn-secondary": secondary === true,
            "disabled:": disabled === true,
          }
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {icon ? (
              <React.Fragment>
                <i
                  className={classnames(`${icon} mr-2`, {
                    "text-color": primary === true,
                    "text-sky-700": secondary === true,
                  })}
                />
                {label}
              </React.Fragment>
            ) : (
              `${label}`
            )}
          </React.Fragment>
        )}
      </button>
    </React.Fragment>
  );
};

export default Button;
