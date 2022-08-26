import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:detail_id' element={<ProductDetails />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes