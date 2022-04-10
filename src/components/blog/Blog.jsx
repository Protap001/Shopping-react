import React from 'react'
import jordan from '../../images/1.webp'
import author from '../../images/author01.webp'
import air from '../../images/2.webp'
import arryy from '../../images/author02.webp'

const Blog = () => {
  return (
    <section className='blog-area section-space'>
                <div className="container">
                    <div className="row mb-n8">
                        <div className='col-sm-12 col-md-6 mb-8'>
                            <div className="post-item">
                                <img src={jordan} alt="" />
                            </div>
                            <div className="content">
                                <a href="" className='post-category'>Fashion</a>
                                <h4 className='title'>
                                    <a href="">Hot Summer Fashion for Women new collections arrives of <br /> Lorem Ipsum available.</a>
                                </h4>
                                <ul className='meta'>
                                    <li className='author-info'>
                                        <img className='author-thumb' src={author} alt="" />
                                        <a href="">Arry twentyk</a>
                                    </li>
                                    <li className='post-date'>
                                        <a href="">13 Feb 2021</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 mb-8'>
                            <div className="post-item">
                                <img src={air} alt="" />
                            </div>
                            <div className="content">
                                <a href="" className='post-category'>Fashion</a>
                                <h4 className='title'>
                                    <a href="">My Favorite White Sneakers From Splurge To Save passages available amet suite.</a>
                                </h4>
                                <ul className='meta'>
                                    <li className='author-info'>
                                        <img className='author-thumb' src={arryy} alt="" />
                                        <a href="">Arry twentyk</a>
                                    </li>
                                    <li className='post-date'>
                                        <a href="">13 Feb 2021</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Blog