import * as React from 'react'
import { Routes, Route } from "react-router-dom";

const NotFound = React.lazy(() => import('@/pages/NotFound/NotFound'))
const Dashboard = React.lazy(()=> import('@/pages/Dashboard/Dashboard'));
const Home = React.lazy(()=> import('@/routes/Home/Home.tsx'))
const Form = React.lazy(()=> import('@/routes/Form/Form.tsx'))
const Table = React.lazy(()=> import('@/routes/Table/Table.tsx'))
//! route:import

const Router:React.FC =()=> {

  return (
    <React.Fragment>
          <Routes>
            <Route element={<React.Suspense fallback={<div>Loading...</div>}><Dashboard/></React.Suspense>}>
                <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
                <Route path="/form" element={<React.Suspense fallback={<div>Loading...</div>}><Form/></React.Suspense>} />
                <Route path="/table" element={<React.Suspense fallback={<div>Loading...</div>}><Table/></React.Suspense>} />
                //! route:component
                <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />

            </Route>
          </Routes>
    </React.Fragment>
  )
}

export default Router