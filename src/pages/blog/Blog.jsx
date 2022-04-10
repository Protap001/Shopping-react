import React from 'react'
import { Link } from 'react-router-dom'
import './blog.scss'
import paltar0 from '../../images/9.webp'
import kecel from '../../images/author01 (1).webp' 
import paltar1 from '../../images/3 (1).webp'  
import kecel1 from '../../images/author03.webp'
import ContentList from '../../components/content-list/ContentList'


const Blog = () => {
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
                                            Blog
                                        </li>
                                    </ol>
                                    <h2 className='page-header-title'>Our latest news</h2>
                                </div>
                            </div>
                            <div className="col-sm-4 d-sm-flex justify-content-end align-items-end">
                                <h5 className='showing-pagination-results'>
                                    Blog / Page
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='blog-area section-top-space'>
                <div className='container'>
                    <div className='post-three-item'>
                        <div className='row flex-md-row-reverse align-items-center'>
                            <div className='col-md-6'>
                                <img className='thumb' src={paltar0} alt="" />
                            </div>
                            <div className='col-md-6'>
                                <div className="content">
                                    <h4 className='title'>
                                        <a href="">But I must explain to you how all this mistaken ideal</a>
                                    </h4>
                                    <p className='desc'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Habitasse suspendisse tincidunt rutrum quam.
                                        At ut nulla ultricies praesent.
                                        Consectetur malesuada viverra ut eros lorem.
                                        Sollicitudin vel duis mollis quis hac pretium porttitor aliquam lacus.
                                    </p>
                                    <div className='meta'>
                                        <img className='author-thumb' src={kecel} alt="" />
                                        <a href="" className='author-name'>Arry twentyk</a>
                                        <span>UI/UX Designer</span>
                                        <a href="" className='post-date'>13 Feb 2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<section className='blog-area section-space pt-sm-40'>
    <div className='container'>
        <div className='row mb-n6'>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 mb-6'>
                <div className='post-two-item'>
                    <a href="" className='thumb'>
<img className='w-100' src={paltar1} alt="" width={570} />
</a>
<div className='content'>
    <h4 className='title'>
        <a href="">Hot Summer Modern Fashion new arrives</a>
    </h4>
    <div className='meta'>
        <img className='author-thumb' src={kecel1} alt="" />
        <div className='author-info'>
            <a href="" className='author-name'>Arry twentyk</a>
            <span>UI/UX Designer</span>
        </div>
        <a href="" className='post-date'>26 Dec 2021</a>
    </div>
    <a href="" className='btn-blog-link'>Read more</a>
</div>
                </div>
            </div>
        </div>
    </div>
</section>
<ContentList/>
        </>
    )
}

export default Blog