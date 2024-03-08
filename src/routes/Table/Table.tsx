import * as React from 'react';
import { Helmet } from 'react-helmet';

const Table: React.FC = () => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Andromeda - Table</title>
                <meta name="table" content="A description of my amazing React app" />
            </Helmet>
            Table Route
        </React.Fragment>
)};

export default Table