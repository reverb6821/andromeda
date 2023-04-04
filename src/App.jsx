import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './layout/admin/Admin'
import Dashboard from './pages/admin/Dashboard'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route element={<Admin/>}>
          <Route path='/' element={<Dashboard/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
