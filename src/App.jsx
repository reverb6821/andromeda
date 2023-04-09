import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './layout/admin/Admin'
import Dashboard from './pages/admin/Dashboard'
import Table from './pages/admin/Table'
import Calendar from './pages/admin/Calendar'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route element={<Admin/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/table' element={<Table/>} />
          <Route path='/calendar' element={<Calendar/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
