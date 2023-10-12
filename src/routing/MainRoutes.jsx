import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Acounts/Register'
import Login from '../components/Acounts/Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes