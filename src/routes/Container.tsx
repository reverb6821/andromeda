import * as React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(()=> import('@/routes/Home/Home.tsx'))
const Form = React.lazy(()=> import('@/routes/Form/Form.tsx'))
// ROUTES IMPORT

const Container:React.FC =()=> {
  const isDarkMode = useSelector((content: RootState) => content.theme.isDarkMode) || null;

  return (
    <React.Fragment>
      <div className={`App w-full ${isDarkMode ? "dark" : ""} `}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/home" element={<Home />} />
<Route path="/form" element={<Form />} />
// COMPONENTS ROUTES
          </Routes>
        </React.Suspense>
      </div>
    </React.Fragment>
  )
}

export default Container
