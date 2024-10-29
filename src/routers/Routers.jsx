import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Header from '../components/Header'
import Blog from '../pages/Blog'
import Vendor from '../pages/Vendor'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import FAQ from '../pages/FAQ'
import ProductDetails from '../pages/ProductDetails'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'
import Checkout from '../pages/Checkout'
import Dashboard from '../dashboard/Dashboard'
import AddProduct from '../dashboard/AddProduct'
import EditProduct from '../dashboard/EditProduct'
import SuccesfulCheckOut from '../pages/SuccesfulCheckOut'


const Routers = () => {
    const [mode] = useContext(ModeContext);
    return (
        <div className={mode}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/dashboard/edit/:slug" element={<EditProduct />} />
                    <Route path="/dashboard/add/" element={<AddProduct />}></Route>
                    <Route path="/shop" element={<Products />}></Route>
                    <Route path='/shop/:id' element={<ProductDetails />} />
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path='/vendor' element={<Vendor />}></Route>
                    <Route path='/faq' element={<FAQ />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/wishlist' element={<Wishlist />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/checkout' element={<Checkout />}></Route>
                    <Route path='/succesfulcheckout' element={<SuccesfulCheckOut />}></Route>
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routers