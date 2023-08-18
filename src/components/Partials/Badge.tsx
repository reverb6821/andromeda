import React from "react";
import classnames from "classnames";

interface BadgeProps {
  primary: boolean;
  secondary?: boolean;
  alert?: boolean;
  success?: boolean;
  warning?: boolean;
  label: string;
}

const Badge: React.FC<BadgeProps> = ({
  primary,
  secondary,
  alert,
  success,
  warning,
  label,
}) => {
  return (
    <React.Fragment>
      <span
        id="badge-dismiss-default"
        className={classnames(
          "text-sm font-medium mr-2 px-2.5 py-0.5 rounded",
          {
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300":
              primary === true,
            "bg-transparent text-blue-800 dark:bg-transparent dark:text-blue-400 border border-blue-400":
              secondary === true,
            "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300":
              alert === true,
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300":
              success === true,
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300":
              warning === true,
          }
        )}
      >
        {label}
      </span>
    </React.Fragment>
  );
};

export default Badge;
