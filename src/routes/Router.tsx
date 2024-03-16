import * as React from 'react'
import { Routes, Route } from "react-router-dom";

const NotFound = React.lazy(() => import('@/pages/NotFound/NotFound'))
const Auth = React.lazy(()=> import('@/pages/Auth/Auth'))
const Home = React.lazy(()=> import('@/routes/Home/Home.tsx'))
//! route:import

const Router:React.FC =()=> {

  return (
    <React.Fragment>
          <Routes>
            <Route element={<React.Suspense fallback={<div>Loading...</div>}><Auth/></React.Suspense>}>
                <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
                //! route:component
                <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFound/></React.Suspense>} />
            </Route>
          </Routes>
    </React.Fragment>
  )
}

export default Router