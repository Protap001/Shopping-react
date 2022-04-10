import React from 'react'
import './products.scss'
import imageone from '../../images/10.webp'
import imagetwo from '../../images/11.webp'
import imagethree from '../../images/12.webp'
import imagefour from '../../images/04.webp'
import imagefive from '../../images/05.webp'
import imagesix from '../../images/06.webp'
import imageseven from '../../images/07.webp'
import prince from '../../images/13.webp'
import boot from '../../images/14.webp'
import sprit from '../../images/17.webp'
import race from '../../images/18.webp'
import sports from '../../images/01.webp'
import casual from '../../images/02.webp'
import fashion from '../../images/03.webp'
import perspiciatis from '../../images/16.webp'
import jordan from '../../images/1.webp'
import author from '../../images/author01.webp'
import air from '../../images/2.webp'
import arryy from '../../images/author02.webp'
import { FaExpandAlt } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import ProductCart from '../product-cart/ProductCart'

const ProductList = ({title,description}) => {
    return (
            <div className="product-area">
                <div className="container">
                    <div className="section-text">
                        <h2 className='title'>{title}</h2>
                        <p className='ms-0'>{description}</p>
                    </div>
                    <div className="row mb-n6">
                        <ProductCart />
                        <ProductCart/>
                        <ProductCart/>
                       
                    </div>
                </div>
            </div>
    )
}

export default ProductList