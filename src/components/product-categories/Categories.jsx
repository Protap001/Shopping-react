import React from 'react'
import sports from '../../images/01.webp'
import casual from '../../images/02.webp'
import fashion from '../../images/03.webp'
const Categories = () => {
    return (
        <div className="row mb-n8">
            <div className='col-sm-6 col-md-4 mb-8'>
                <a className='product-category-item' href="">
                    <div className="product-category-thumb">
                        <img src={sports} alt="" />
                    </div>
                    <h4 className='product-category-title'>DX
                        <span>Sports</span></h4>
                    <p className='product-category-desc'>
                        Lorem Ipsum
                    </p>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 mb-8'>
                <a className='product-category-item' href="">
                    <div className="product-category-thumb">
                        <img src={casual} alt="" />
                    </div>
                    <h4 className='product-category-title'>RX
                        <span>casual</span></h4>
                    <p className='product-category-desc'>
                        Lorem Ipsum
                    </p>
                </a>
            </div>
            <div className='col-sm-6 col-md-4 mb-8'>
                <a className='product-category-item' href="">
                    <div className="product-category-thumb">
                        <img src={fashion} alt="" />
                    </div>
                    <h4 className='product-category-title'>SX
                        <span>fashion</span></h4>
                    <p className='product-category-desc'>
                        Lorem Ipsum
                    </p>
                </a>
            </div>


        </div>
    )
}

export default Categories