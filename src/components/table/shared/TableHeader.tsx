import * as React from 'react';

interface TableHeaderProps {
    columns: string[],
    onEdit?: () => void,
    onDelete?: () => void,
}

const TableHeader: React.FC<TableHeaderProps> =({columns, onEdit, onDelete})=>{

    return(
        <React.Fragment>
            <thead className="text-xs text-color-primary uppercase color-primary">
                <tr>
                    {columns && columns.length > 1 ? columns.map((el, index)=>
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