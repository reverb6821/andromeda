import * as React from 'react';
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
    return(
        <React.Fragment>
            <Outlet />
        </React.Fragment>
)};

export default Dashboard