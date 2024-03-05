import classnames from 'classnames';
import * as React from 'react';

import FlexContainerProperties from './FlexContainer.properties'

const FlexContainer: React.FC<FlexContainerProperties> = ({children, className, direction}) => {
    return(
        <React.Fragment>
            <div className={classnames(`${className} flex p-2`,
            {
                "flex-row flex-wrap shrink-0 max-md:justify-center": direction === 'row',
                "flex-row-reverse flex-wrap shrink-0": direction === 'row-reverse',
                "flex-col": direction === 'column',
                "flex-col-reverse": direction === 'column-reverse'
            })}
            >
                {children}
            </div>
        </React.Fragment>
)};

export default FlexContainer