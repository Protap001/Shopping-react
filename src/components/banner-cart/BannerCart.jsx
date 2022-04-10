import React from 'react'
import imagefour from '../../images/04.webp'
import imagefive from '../../images/05.webp'
import imagesix from '../../images/06.webp'
import imageseven from '../../images/07.webp'

const BannerCart = () => {
  return (
    <div className="product-banner-area">
    <div className="container">
        <div className="row mb-n6">
            <div className="col-md-6 mb-6">
                <img className='product-banner-item mt-6' src={imagefour} alt="" />
            </div>
            <div className="col-md-6 mb-6">
                <div className="row mb-n6">
                    <div className="col-sm-6 mb-6">
                        <img className='product-banner-item mt-6' src={imagefive} alt="" />
                    </div>
                    <div className="col-sm-6 mb-6">
                        <img className='product-banner-item mt-6 sale' src={imagesix} alt="" />
                    </div>
                </div>
                <img className='product-banner-item mt-6 icon' src={imageseven} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerCart