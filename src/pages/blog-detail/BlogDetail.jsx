import React from 'react'
import { Link } from 'react-router-dom'
import './blogdetail.scss'
import { FaComment } from 'react-icons/fa';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillReplyFill } from 'react-icons/bs';

export const BlogDetail = () => {
    return (
        <>
            <div className="account">
                <section className='page-header-area'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="page-header-content">
                                    <ol className='breadcrumb'>
                                        <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                                        <li className='breadcrumb-item active' aria-current='page'>
                                            Detail
                                        </li>
                                    </ol>
                                    <h2 className='page-header-title'>News post</h2>
                                </div>
                            </div>
                            <div className="col-sm-4 d-sm-flex justify-content-end align-items-end">
                                <h5 className='showing-pagination-results'>
                                    Blog / Detail
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='blog-detail-area section-space'>
                <div className="container">
                    <div className="blog-detail">
                        <img className='blog-detail-img mb-6 mb-sm-10' src="https://template.hasthemes.com/merier/merier/assets/images/blog/d1.jpg" alt="" width={1170} />
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="meta">
                                    <div className='author-info'>
                                        <img className='author-thumb' src="https://template.hasthemes.com/merier/merier/assets/images/blog/author01.png" alt="Image-HasTech" />
                                        <a className='author-name' href="">Arry twentyk</a>
                                        <span>UI/UX Designer</span>
                                        <a className='post-date' href="">13 Feb 2021</a>

                                    </div>
                                    <div className='meta-like-comment'>
                                        <span> <FaComment className='icon'/>
                                            20 Comment</span>
                                        <span>
                                            <BsFillSuitHeartFill className='icon' />
                                            40 Like
                                        </span>

                                    </div>
                                </div>
                                <a className='category' href="">Women
                                    <span>Coollection</span>
                                </a>
                                <h3 className='blog-detail-title'>Hot Summer Fashion for Women Collections <br /> arrives of Lorem Ipsum available.</h3>
                                <p className='desc mb-0 mt-3 mt-lg-7'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sem fusce tincidunt enim nibh integer a accumsan, lectus ultricies. <br />
                                    Accumsan velit lacus, nulla massa enim, magna in. Sed quis eget ullamcorper at pellentesque.
                                    Sit eu arcu sit penatibus sed. <br />
                                    Nec consequat diam ipsum arcu amet.
                                    Fringilla nulla quam ipsum commodo. Semper parturient lacus lorem massa in <br /> feugiat.
                                </p>
                                <blockquote className='blog-detail-blockquote'>
                                    <p className='desc'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Egestas ac <br /> pulvinar tellus accumsan, nulla eget feugiat.
                                        Platea ornare velit tristique <br /> dolor volutpat tincidunt venenatis lectus.
                                    </p>
                                    <span className='user-name'>
                                        Arry twentyk
                                    </span>
                                    <img className='quote-icon' src="https://template.hasthemes.com/merier/merier/assets/images/icons/quote.png" width={94} alt="Image" />
                                </blockquote>
                                <p className='desc mb-7'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Eget eget ac scelerisque arcu placerat amet urna. Porttitor vivamus <br /> pretium ornare urna donec tortor.
                                    Enim arcu, phasellus ut eget egestas id.
                                    Id laoreet aenean commodo arcu mi eu eu sit <br /> molestie.
                                    Nulla eget iaculis interdum libero faucibus amet ipsum vitae.
                                </p>
                                <img className='blog-detail-img' src="https://template.hasthemes.com/merier/merier/assets/images/blog/ds1.jpg" alt="" width={770} />
                                <p className='desc mt-8'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sem fusce tincidunt enim nibh integer a accumsan, lectus ultricies. <br />
                                    Accumsan velit lacus, nulla massa enim, magna in. Sed quis eget ullamcorper at pellentesque.
                                    Sit eu arcu sit penatibus sed. <br />
                                    Nec consequat diam ipsum arcu amet.
                                    Fringilla nulla quam ipsum commodo. Semper parturient lacus lorem massa in <br /> feugiat.
                                </p>
                                <p className='desc mb-0 mt-6'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Eget eget ac scelerisque arcu placerat amet urna.
                                    Porttitor vivamus <br /> pretium ornare urna donec tortor.
                                    Enim arcu, phasellus ut eget egestas id.
                                    Id laoreet aenean commodo arcu mi eu eu sit <br /> molestie.
                                    Nulla eget iaculis interdum libero faucibus amet ipsum vitae.
                                </p>
                                <div className='blog-detail-tag-social'>
                                    <div className='blog-detail-tag'>
                                        <a href="#">Fashion</a>
                                        <a href="#">eCommerce</a>
                                        <a href="#">Product</a>
                                        <a href="#">Dress</a>
                                    </div>
                                    <div className='blog-detail-social'>
                                        <span>Share:</span>
                                        <a href="https://www.facebook.com/tapdiq.memmedov/" target={'_blank'} rel={'noopener'}>
                                            <FaFacebookF />
                                        </a>
                                        <a href="https://www.facebook.com/tapdiq.memmedov/" target={'_blank'} rel={'noopener'}>
                                            <FaLinkedinIn className='fa'/>
                                        </a>
                                    </div>
                                </div>
                                <div className='row justify-content-between align-items-center'>
                                    <div className="col-6">
                                        <a href="" className='blog-detail-nav'>
                                            <span className='text-prev d-sm-none'>
                                                Prev
                                            </span>
                                            <div className='thumb d-none d-sm-flex'>
                                                <img width={85} src="https://template.hasthemes.com/merier/merier/assets/images/blog/bs1.jpg" alt="" />
                                            </div>
                                            <div className='content d-none d-sm-block'>
                                                <h4 className='title'>Hot Summer Modern New Fashion for Women</h4>
                                                <span className='post-date'>
                                                    13 Feb 2021
                                                </span>
                                                <span className='btn-text'>
                                                    Read More
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a href="" className='blog-detail-nav blog-nav-next'>
                                            <span className='text-next d-sm-none'>Next</span>           
                                            <div className='content d-none d-sm-block'>
                                                <h4 className='title'>My Favorite White Sneaker From new Splurge</h4>
                                                <span className='post-date'>
                                                    13 Feb 2021
                                                </span>
                                                <span className='btn-textt'>
                                                    Read More
                                                </span>
                                            </div>
                                            <div className='thumb d-none d-sm-flex'>
                                                <img width={85} src="https://template.hasthemes.com/merier/merier/assets/images/blog/bs2.jpg" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-xl-3 offsetr-xl-1 offset-lg-0 mt-6 mt-lg-0'>
                                <div className='sidebar-area mt-10 mt-lg-2 mt-xl-3'>
                                    <div className='widget-item'>
                                        <form action="#" className='widget-search-box' method='post'>
                                            <input type="text" id='search2' placeholder='Search' />
                                            <button className='btn-src' type='button'>
                                                <img src="https://template.hasthemes.com/merier/merier/assets/images/icons/search.png" alt="" width={16} />
                                            </button>
                                        </form>
                                    </div>
                                    <div className='widget-item pt-3'>
                                        <h3 className='widget-title'>
                                            Categories
                                        </h3>
                                        <div className='widget-categories'>
                                            <a href="#">
                                                Fashion
                                            </a>
                                            <a href="#">
                                                Clothing
                                            </a>
                                            <a href="#">
                                                Men Jacket
                                            </a>
                                            <a href="#">
                                                Women Shoe
                                            </a>
                                            <a href="#">
                                                KID
                                            </a>
                                            <a href="#">
                                                Lifestyle
                                            </a>
                                        </div>
                                    </div>
                                    <div className='widget-item pt-3'>
                                        <h3 className='widget-title'>
                                            Popular Posts
                                        </h3>
                                        <div className='widget-blog-posts'>
                                            <a className='widget-blog-post' href="">
                                                <div className='thumb'>
                                                    <img width={85} src="https://template.hasthemes.com/merier/merier/assets/images/blog/w1.jpg" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <h4 className='title'>
                                                        Hot Summer Modern Fashion new arrives
                                                    </h4>
                                                    <span className='post-date'>
                                                        13 Feb 2021
                                                    </span>
                                                    <span className='btn-text'>
                                                        Read More
                                                    </span>
                                                </div>
                                            </a>
                                            <a className='widget-blog-post' href="">
                                                <div className='thumb'>
                                                    <img width={85} src="https://template.hasthemes.com/merier/merier/assets/images/blog/w2.jpg" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <h4 className='title'>
                                                        Modern Women Meta Dress Slightly Hoody
                                                    </h4>
                                                    <span className='post-date'>
                                                        13 Feb 2021
                                                    </span>
                                                    <span className='btn-text'>
                                                        Read More
                                                    </span>
                                                </div>
                                            </a>
                                            <a className='widget-blog-post' href="">
                                                <div className='thumb'>
                                                    <img width={85} src="https://template.hasthemes.com/merier/merier/assets/images/blog/w3.jpg" alt="" />
                                                </div>
                                                <div className='content'>
                                                    <h4 className='title'>
                                                        Literature Classical Ruffled Classic
                                                    </h4>
                                                    <span className='post-date'>
                                                        13 Feb 2021
                                                    </span>
                                                    <span className='btn-text'>
                                                        Read More
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='widget-item pt-2'>
                                        <h3 className='widget-title'>
                                            Pin Posts
                                        </h3>
                                        <div className='widget-blog-posts'>
                                            <a href="" className='widget-blog-post'>
                                                <div className='thumb'>
                                                    <img src="https://template.hasthemes.com/merier/merier/assets/images/blog/w4.jpg" alt="" width={85} />
                                                </div>
                                                <div className='content'>
                                                    <h4 className='title'>
                                                        My Favorite White Sneaker From new Splurge
                                                    </h4>
                                                    <span className='post-date'>
                                                        13 Feb 2021
                                                    </span>
                                                    <div className='btn-text'>
                                                        Read More
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='widget-item mb-10'>
                                        <h3 className='widget-title mb-3'>
                                            Newsletter
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                        <form method='post' action="#" className='widget-newsletter-box'>
                                            <input type="text" id='search3' placeholder='Enter your email' />
                                            <button type='button' className='btn-src'>
                                                <img src="https://template.hasthemes.com/merier/merier/assets/images/icons/mail.png" alt="" width={16} />
                                            </button>
                                        </form>
                                    </div>
                                    <div className='widget-item mb-0'>
                                        <a href="" className='widget-banner product-banner-item'>
                                            <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/banner/w1.png" alt="Image-HasTech" width={270} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-10 pt-5 pt-lg-10'>
                            <div className='col-lg-7'>
                                <div className='comment-area'>
                                    <h4 className='comment-area-title'>
                                        Latest Comment
                                    </h4>
                                    <div className='single-comment'>
                                        <div className='single-comment-top'>
                                            <div className='single-comment-thumb'>
                                                <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/details/c1.png" alt="Images" />
                                            </div>
                                            <div className='single-comment-content'>
                                                <h4 className='single-comment-name'>
                                                    Tomas Doe
                                                </h4>
                                                <h5 className='single-comment-designation'>
                                                    Delveloper
                                                </h5>
                                            </div>
                                        </div>
                                        <p className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed viverra amet, sodales faucibus <br /> nibh.
                                            Vivamus amet potenti ultricies nunc gravida duis.
                                            Nascetur scelerisque massa sodales <br /> egestas augue neque euismod scelerisque viverra.
                                        </p>
                                        <button className='reply-icon' type='button'>
                                            <BsFillReplyFill />
                                        </button>
                                    </div>
                                    <div className='single-comment'>
                                        <div className='single-comment-top'>
                                            <div className='single-comment-thumb'>
                                                <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/details/c1.png" alt="Images" />
                                            </div>
                                            <div className='single-comment-content'>
                                                <h4 className='single-comment-name'>
                                                    Robat Fiftyk
                                                </h4>
                                                <h5 className='single-comment-designation'>
                                                    UI/UX Designer
                                                </h5>
                                            </div>
                                        </div>
                                        <p className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed viverra amet, sodales faucibus <br /> nibh.
                                            Vivamus amet potenti ultricies nunc gravida duis.
                                            Nascetur scelerisque massa sodales <br /> egestas augue neque euismod scelerisque viverra.
                                        </p>
                                        <button className='reply-icon' type='button'>
                                            <BsFillReplyFill />
                                        </button>
                                    </div>
                                    <div className='single-comment'>
                                        <div className='single-comment-top'>
                                            <div className='single-comment-thumb'>
                                                <img src="https://template.hasthemes.com/merier/merier/assets/images/shop/details/c1.png" alt="Images" />
                                            </div>
                                            <div className='single-comment-content'>
                                                <h4 className='single-comment-name'>
                                                    Arry twentyk
                                                </h4>
                                                <h5 className='single-comment-designation'>
                                                    UI/UX Designer
                                                </h5>
                                            </div>
                                        </div>
                                        <p className='desc'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed viverra amet, sodales faucibus <br /> nibh.
                                            Vivamus amet potenti ultricies nunc gravida duis.
                                            Nascetur scelerisque massa sodales <br /> egestas augue neque euismod scelerisque viverra.
                                        </p>
                                        <button className='reply-icon' type='button'>
                                            <BsFillReplyFill />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='comment-form-wrap mt-10 pt-5 pt-lg-0 mt-lg-0'>
                                    <h4 className='comment-form-title'>
                                        Leave a reply
                                    </h4>
                                    <div className='comment-form'>
                                        <form action="#">
                                            <div className='form-input-item'>
                                                <textarea className='form-control' placeholder='Write Your Comment'></textarea>
                                            </div>
                                            <div className='form-input-item'>
                                                <input type="text" placeholder='Full Name' className='form-control' />
                                            </div>
                                            <div className='form-input-item'>
                                                <input type="email" placeholder='Email Address' />
                                            </div>
                                            <div className='form-input-item'>
                                                <span className='form-note'>
                                                    We do not Send any Spam
                                                </span>
                                            </div>
                                            <div className='form-input-item mb-0'>
                                                <button type='submit' className='btn'>SUBMIT</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
