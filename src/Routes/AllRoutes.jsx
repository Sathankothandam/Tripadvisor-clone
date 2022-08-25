import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes