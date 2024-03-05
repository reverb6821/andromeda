import classnames from "classnames";
import * as React from 'react';

import BadgeProperties from './Badge.properties'

const Badge: React.FC<BadgeProperties> = ({ badgeStyle, label, icon }) => {
    return(
        <React.Fragment>
        <span
          className={classnames(
            "text-sm font-medium mr-2 px-2.5 py-0.5 rounded shadow-xl",
            {
              "bg-sky-800 text-sky-100": badgeStyle === 'primary',
              "bg-alert-color text-red-100": badgeStyle === 'primary--alert',
              "bg-success-color text-emerald-100": badgeStyle === 'primary--success',
              "bg-warn-color text-yellow-100 ": badgeStyle === 'primary--warn',
              "bg-info-color text-sky-100": badgeStyle === 'primary--info',
              "bg-transparent text-sky-800 border border-sky-800": badgeStyle === 'secondary',
              "bg-transparent text-alert-color border border-alert-color": badgeStyle === 'secondary--alert',
              "bg-transparent text-success-color border border-success-color": badgeStyle === 'secondary--success',
              "bg-transparent text-warn-color border border-warn-color": badgeStyle === 'secondary--warn',
              "bg-transparent text-info-color border border-info-color": badgeStyle === 'secondary--info',
            }
          )}
        >
            <React.Fragment>
                {icon ? (
                    <React.Fragment>
                        <i className={`${icon} mr-2`}/>
                        {label}
                    </React.Fragment>
                ) : `${label}` }
            </React.Fragment>
        </span>
      </React.Fragment>
)};

export default Badge