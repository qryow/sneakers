import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Acounts/Register'
import Login from '../components/Acounts/Login'

import HomePage from '../pages/HomePage/HomePage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default MainRoutes