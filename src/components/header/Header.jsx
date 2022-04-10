import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-light.webp'
import './header.scss'
import { BsFillBasket2Fill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';



const Header = () => {
    const [closeNav, setCloseNav] = useState(false);
    const [cartActive, setCartActive] = useState(false);
    return (
        <header className='header d-xl-block d-none'>
            <div className="container">
                <div className="boxes">

                    <div className="box-1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="box-2">
                        <ul className='first'>
                            <li className='home'>
                                <Link to='/'>Home</Link>
                                <ul className='list-unstyled drop-ul'>
                                    <li className='bor'><a href="#">Home one</a></li>
                                    <li><a href="#">Home Two</a></li>
                                </ul>
                            </li>
                            <li className='shop'><Link to='prdetail'>Shop</Link>
                                <div className="menu-sub">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <h6 className='menu-category'>SHOP LAYOUT</h6>
                                            <ul>
                                                <li><a href="#">Shop 3 Column</a></li>
                                                <li><a href="#">Shop 4 Column</a></li>
                                                <li><a href="#">Shop Left Sidebar</a></li>
                                                <li><a href="#">Shop Right Sidebar</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 className='menu-category'>SINGLE PRODUCT</h6>
                                            <ul>
                                                <li><a href="#">Single Product Normal</a></li>
                                                <li><a href="#">Single Product Variable</a></li>
                                                <li><a href="#">Single Product Group</a></li>
                                                <li><a href="#">Single Product Affiliate</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 className='menu-category'>OTHER PAGES</h6>
                                            <ul>
                                                <li><a href="#">Shopping Cart</a></li>
                                                <li><a href="#">Chekout</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                                <li><a href="#">Compare</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className='home'><a href="#">Pages</a>
                                <ul className='list-unstyled drop-ul'>
                                    <li className='bor' ><Link to='/about'>About</Link></li>
                                    <li className='bor' ><a href="#">Account</a></li>
                                    <li className='bor' ><Link to='/login'>Login/Register</Link></li>
                                    <li className='bor' ><a href="#">Page Not Found</a></li>
                                    <li className='bor' ><a href="#">Contact</a></li>
                                </ul>
                            </li>
                            <li className='home'><Link to='/blog'>Blog</Link>
                                <ul className='list-unstyled drop-ul'>
                                    <li className='bor' ><a href="#">Blog Grid</a></li>
                                    <li className='bor' ><a href="#">Blog Left Sidebar</a></li>
                                    <li className='bor' ><a href="#">Blog Right Sidebar</a></li>
                                    <li className='bor' ><Link to='/details'>Blog Details</Link></li>
                                    <li className='bor' ><a href="#">Blog Details Left Sidebar</a></li>
                                    <li className='bor' ><a href="#">Blog Details Right Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="box-3">
                        <input type='search' className='form-control' placeholder='Search' />
                        <i> <BiSearch /></i>
                    </div>
                    <div className="box-4" onClick={() => setCartActive(!cartActive)}>
                        {cartActive ? (<button>
                            <a href="#">02 Items</a>
                            <i><BsFillBasket2Fill /></i>
                        </button>) : (<button>
                            <a href="#">02 Items</a>
                            <i><BsFillBasket2Fill /></i>
                        </button>)}
                    </div>
                </div>
            </div>
            <div id="offcanvas-cart" className={cartActive ? ("offcanvas-cart cart-active ") : ("offcanvas-cart ")}>
                <div className="inner">
                    <div className="head">
                        <span className="title">SHOPPING CART</span>
                        <div className="offcanvas-close" onClick={() => setCartActive(!cartActive)}>
                        <AiOutlineCloseCircle/>
                        </div>
                    </div>
                    <div className="body customScroll">
                        <ul className="minicart-product-list">
                            <li>
                                <Link className="image" to="/productdetail">
                                    <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/s2.jpg" alt="Cart product Image" />
                                </Link>
                                <div className="content">
                                    <Link className="title" to="/productdetail">
                                    Strapless Crop Top Gown
                                    </Link>
                                    <span className="quantity-price">1 x <span className="amount">$12.00</span></span>
                                    
                                </div>
                            </li>
                            <li>
                                <Link className="image" to="/productdetail">
                                    <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/s1.jpg" alt="Cart product Image" />
                                </Link>
                                <div className="content">
                                    <Link className="title" to="/productdetail">
                                    Short Lilac Ruffled Dress
                                    </Link>
                                    <span className="quantity-price">1 x <span className="amount">$59.90</span></span>
                                    
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="foot">
                        <div className="sub-total">
                            <strong>Subtotal :</strong>
                            <span className="amount">$144.00</span>
                        </div>
                        <div className="buttons">
                            <Link to="/cart" className='btns d-block mt-3 mb-2 '>View Cart</Link>
                            <Link to="/checkout" className='btns btns1 d-block mb-2'>checkout</Link>
                        </div>
                        <p className="minicart-message">Free Shipping on All Orders Over $59!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header