import React from 'react';
import SideBar from '../components/SideBar'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
import { Route, Routes } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='lg:flex'>

        <SideBar />
        
        <Routes>
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
        
    </div>
  )
}

export default Admin