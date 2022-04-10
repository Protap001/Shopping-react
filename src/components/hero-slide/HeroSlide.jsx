import React from 'react'
import "./hero-slide.scss"
import bermud from "../../images/shape-polygon1.webp"
const HeroSlide = () => {
    return (
        <div className="main-header">
            <div className="hero-two-slide-content mousemove">
                <img src={bermud} alt="" />
                <h1 className='hero-two-slide-stroke-title mousemove-layer'>SUPER</h1>
                <h2 className='hero-two-slide-title mousemove-layer'>SALE</h2>
            </div>
        </div>
    )
}

export default HeroSlide