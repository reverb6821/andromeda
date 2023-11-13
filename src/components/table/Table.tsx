import * as React from 'react';

import { TableProps } from '@/interfaces/components.properties';

const Table: React.FC<TableProps> =({head, body, /*action*/})=>{

    return(
        <React.Fragment>
            {head}
            {body}
            {/* {action} */}
        </React.Fragment>
    )
}

export default Table