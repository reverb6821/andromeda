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
        className={classnames(
          "text-sm font-medium mr-2 px-2.5 py-0.5 rounded",
          {
            "bg-sky-800 text-sky-100": badgeStyle === 'primary',
            "bg-red-800 text-red-100": badgeStyle === 'primary--alert',
            "bg-emerald-800 text-emerald-100": badgeStyle === 'primary--success',
            "bg-yellow-500 text-yellow-100 ": badgeStyle === 'primary--warn',
            "bg-transparent text-sky-800 border border-sky-400": badgeStyle === 'secondary',
            "bg-transparent text-red-800 border border-red-400": badgeStyle === 'secondary--alert',
            "bg-transparent text-emerald-800 border border-emerald-400": badgeStyle === 'secondary--success',
            "bg-transparent text-yellow-800 border border-yellow-400": badgeStyle === 'secondary--warn',
          }
        )}
      >
        {label}
      </span>
    </React.Fragment>
  );
};

export default Badge;
