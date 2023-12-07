import * as React from 'react';

import { TableHeaderProps } from '@/interfaces/components.properties';

const TableHeader: React.FC<TableHeaderProps> =({head})=>{

    return(
        <React.Fragment>
            <thead className="text-xs text-color-primary uppercase color-primary">
                <tr>
                    {head && head.length > 1 ? head.map((el, index)=>
                        <th scope="col" className="px-6 py-3" key={index}>
                            {el}
                        </th>
                    ) : ''}
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
        </React.Fragment>
    )
}

export default TableHeader