import * as React from 'react';

import { CardsProps } from './Cards.properties';
import Button from '../button/Button';

const Cards: React.FC<CardsProps> = ({ title, subtitle, action, actionLabel, image }) => {
    return (
        <React.Fragment>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image} alt={image ? title : ''} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {subtitle}
                    </p>
                    {action ? (
                        <Button
                            type='button'
                            btnStyle='primary'
                            label={actionLabel || ''}
                            icon="ri-arrow-right-line"
                            onBtnClick={action}
                        />
                    ) : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards