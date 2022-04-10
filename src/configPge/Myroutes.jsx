import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutList from '../pages/about-list/AboutList'
import BlogDetailList from '../pages/blog-detail-list/BlogDetailList'
import BlogList from '../pages/blog-list/BlogList'
import Home from '../pages/Home'
import LoginList from '../pages/login-list/LoginList'
import Page from '../pages/Page'
import ProductDetail from '../pages/product-detail/ProductDetail'


function Myroutes() {
    return (
        <Routes >
            <Route exact path="/" element={<Home/>}/>
            <Route path='/pages' element={<Page/>}/>
            <Route path='/login' element={<LoginList/>}/>
            <Route path='/about' element={<AboutList/>}/>
            <Route path='/blog' element={<BlogList/>}/>
            <Route path='/details' element={<BlogDetailList/>}/>
            <Route path='/prdetail' element={<ProductDetail/>}/>
           

        </Routes>
    )
}

export default Myroutes