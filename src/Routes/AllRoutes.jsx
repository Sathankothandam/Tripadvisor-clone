import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ProductDetails from '../Pages/ProductDetails'
import Products from '../Pages/Products'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:detail_id' element={<ProductDetails />}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes