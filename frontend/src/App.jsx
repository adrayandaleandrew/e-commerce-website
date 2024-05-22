import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Footer from './components/Footer';
import clothingbanner from './assets/clothingbanner.png'
import electronicsbanner from './assets/electronicsbanner.png'
import cosmeticsbanner from './assets/cosmeticsbanner.png'
import Cart from './pages/Cart';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <main className='text-tertiary'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path ='/' element={<Home />} />
              <Route path ='/clothing' element={<Category category={"clothing"} banner={clothingbanner} />} />
              <Route path ='/cosmetics' element={<Category category={"cosmetics"} banner={cosmeticsbanner} />} />
              <Route path ='/electronics' element={<Category  category={"electronics"} banner={electronicsbanner} />} />

              <Route path ='/product' element={<Product />}>
                <Route path=':productId' element={<Product />} />
              </Route>

              <Route path='cart-page' element={<Cart />} />
              <Route path ='/login' element={<Login />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App