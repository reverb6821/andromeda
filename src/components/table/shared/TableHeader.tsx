import * as React from 'react';

import { TableHeaderProps } from '@/interfaces/components.properties';

const TableHeader: React.FC<TableHeaderProps> =({head, onEdit, onDelete})=>{

    return(
        <React.Fragment>
            <thead className="text-xs text-color-primary uppercase color-primary">
                <tr>
                    {head && head.length > 1 ? head.map((el, index)=>
                        <th scope="col" className="px-6 py-3" key={index}>
                            {el}
                        </th>
                    ) : ''}
                    {onDelete || onEdit ? (
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                    ) : null}
                </tr>
            </thead>
        </React.Fragment>
    )
}

export default TableHeader