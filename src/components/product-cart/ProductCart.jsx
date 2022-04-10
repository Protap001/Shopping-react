import React from 'react'
import { FaExpandAlt } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { FaExchangeAlt } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import imageone from '../../images/10.webp'
import imagetwo from '../../images/11.webp'
import imagethree from '../../images/12.webp'
import imagefour from '../../images/04.webp'
import imagefive from '../../images/05.webp'
import imagesix from '../../images/06.webp'
import imageseven from '../../images/07.webp'
import prince from '../../images/13.webp'
import { Link } from 'react-router-dom';
const ProductCart = () => {
  return (
    <div className="col-sm-6 col-lg-4 mb-6">
    <div className="product-item">   
        <img src={imageone} alt="" />
        <span className='badges'>New</span>
        <div className="product-action">
            <button type='button' className='product-action-btn action-btn-quick-view'>
                <i><FaExpandAlt /></i>
            </button>
            <button type='button' className='product-action-btn action-btn-cart'>
                <i><HiShoppingCart /></i>
            </button>
            <button type='button' className='product-action-btn action-btn-compare'>
                <i><FaExchangeAlt /></i>
            </button>
        </div>
        <div className="product-info">
            <h4 className='title'>Casual Prince</h4>
            <div className="price">
                $650.00
                <span className='price-old'>$650.00</span>
            </div>
            <button type='button' className='info-btn-wishlist'>
                <i><AiOutlineHeart /></i>
            </button>
        </div>
    </div>
</div>
  )
}

export default ProductCart