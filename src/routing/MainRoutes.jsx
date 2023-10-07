import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Acounts/Register'
import Login from '../components/Acounts/Login'
import Home from '../components/Home'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default MainRoutes