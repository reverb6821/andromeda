import classnames from 'classnames';
import * as React from 'react';

interface GridProps {
    children?: JSX.Element|JSX.Element[],
    classNames?: string,
    direction: string,
}

const Grid: React.FC<GridProps> = ({children, classNames, direction}) => {
    return(
        <React.Fragment>
            <div className={classnames(`${classNames} flex p-2`,
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
    )
}

export default Grid