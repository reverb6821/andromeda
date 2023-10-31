import classnames from "classnames";
import * as React from "react";

import { BadgeProps } from '@/interfaces/components.properties';

const Badge: React.FC<BadgeProps> = ({
  badgeStyle,
  label,
}) => {
  return (
    <React.Fragment>
      <span
        id="badge-dismiss-default"
        className={classnames(
          "text-sm font-medium mr-2 px-2.5 py-0.5 rounded",
          {
            "bg-sky-100 text-sky-800": badgeStyle === 'primary',
            "bg-transparent text-sky-800 border border-sky-400": badgeStyle === 'secondary',
            "bg-red-100 text-red-800": badgeStyle === 'alert',
            "bg-green-100 text-green-800": badgeStyle === 'success',
            "bg-yellow-100 text-yellow-800 ": badgeStyle === 'warning',
          }
        )}
      >
        {label}
      </span>
    </React.Fragment>
  );
};

export default Badge;
