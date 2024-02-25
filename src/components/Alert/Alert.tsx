import classnames from 'classnames';
import * as React from 'react';

import AlertProps from './Alert.properties'

const Alert: React.FC<AlertProps> = ({ alertStyle, title, message, icon }) => {
    return (
        <React.Fragment>
            <div className={classnames("flex items-center p-4 mb-4 text-sm rounded-lg bg-sky-50 dark:bg-slate-800", {
                "text-alert-color ": alertStyle === 'alert',
                "text-success-color": alertStyle === 'success',
                "text-warn-color ": alertStyle === 'warn',
                "text-info-color": alertStyle === 'info',
            })}>
                <div>
                    {icon ? (
                        <React.Fragment>
                            <i className={`flex-shrink-0 inline me-3 ${icon}`} />
                            <span className="sr-only">{title}</span>
                            <span className="font-medium mr-2">{title}</span>{message}
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <span className="font-medium mr-2">{title}</span>{message}
                        </React.Fragment>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
};

export default Alert