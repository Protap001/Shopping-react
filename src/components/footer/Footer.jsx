import React from 'react'
import './footer.scss'
import logo from '../../images/logo-light.webp'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-area'>

            <div className="footer-main">
                <div className="container">
                    <div className='row mb-n6'>
                        <div className='col-sm-12 col-md-3 col-lg-3 mb-6'>
                            <div className="widget-item">
                                <div className="widget-about">
                                    <img src={logo} alt="" />
                                    <p className='desc'>Merier fashion is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="widget-social">
                                    <i><FaFacebookF /></i>
                                    <i><FaLinkedinIn /></i>
                                    <i><AiOutlineTwitter /></i>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3 mb-6'>
                            <div className="widget-item">
                                <h4 className='widget-title'>Ecommerce</h4>
                                <div className="widget-collapse-body collapse">
                                    <ul className='widget-nav'>
                                        <li><Link to='/'>Product</Link></li>
                                        <li><a href="">Your Cart</a></li>
                                        <li><a href="">Your Order</a></li>
                                        <li><a href="">Tracking</a></li>
                                        <li><a href="">Wishlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3 mb-6'>
                            <div className="widget-item">
                                <h4 className='widget-title'>Support</h4>
                                <div className="widget-collapse-body collapse">
                                    <ul className='widget-nav'>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="">Live Chat</a></li>
                                        <li><a href="">Product Detail</a></li>
                                        <li><a href="">Tracking</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-3 col-lg-3 mb-6'>
                            <div className="widget-item">
                                <h4 className='widget-title'>Products</h4>
                                <div className="widget-collapse-body collapse">
                                    <ul className='widget-nav'>
                                        <li><a href="">Man</a></li>
                                        <li><a href="">Women</a></li>
                                        <li><a href="">KID</a></li>
                                        <li><a href="">Jackets</a></li>
                                        <li><a href="">Others</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer