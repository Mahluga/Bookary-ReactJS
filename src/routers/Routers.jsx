import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
// import Dashboard from '../dashboard/Dashboard'
import Header from '../components/Header'
import Blog from '../pages/Blog'
import Shop from '../pages/Shop'
import Vendor from '../pages/Vendor'
import About from '../pages/About'
import Contact from '../pages/Contact'
// import ProductDetails from '../pages/ProductDetails'
// import Wishlist from '../pages/Wishlist'


const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
                    <Route path="/shop" element={<Shop />}></Route>
                    {/* <Route path='/shop/:id' element={<ProductDetails />} /> */}
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path='/vendor' element={<Vendor />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    {/* <Route path='/wishlist' element={<Wishlist />}></Route> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routers