import * as React from 'react';

const LoaderSkeleton: React.FC = () => {
    return(
        <React.Fragment>
            <span className='mr-2 px-2.5 py-0.5 rounded animate-pulse bg-slate-300' />
        </React.Fragment>
    )
}

export default LoaderSkeleton
