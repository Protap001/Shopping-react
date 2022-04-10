import React from 'react'
import '../components/product-list/products.scss'
import imageone from '../images/10.webp'
import imagetwo from '../images/11.webp'
import imagethree from '../images/12.webp'
import prince from '../images/13.webp'
import boot from '../images/14.webp'
import sprit from '../images/17.webp'
import race from '../images/18.webp'
import sports from '../images/01.webp'
import casual from '../images/02.webp'
import fashion from '../images/03.webp'
import perspiciatis from '../images/16.webp'
import { FaExpandAlt } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import HeroSlide from '../components/hero-slide/HeroSlide'
import ProductList from '../components/product-list/ProductList'
import CategoriesList from '../components/categories-list/CategoriesList'
import BlogList from '../components/blog-list/BlogList'
import ContentList from '../components/content-list/ContentList'
import BannerList from '../components/banner-list/BannerList'



const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="main-content">
                <ProductList title="Trend" description="Lorem Trend" />
                <BannerList />
                <ProductList title="Best Product" description="Lorem Best" />
                <CategoriesList title="Best Product" description="Lorem Best" />
                <BlogList title="Best Product" description="Lorem Best" />
                <ContentList />
                



            </div>

        </>

    )
}

export default Home