import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'
import { BsFillPlayFill } from 'react-icons/bs';
import moto from '../../images/about1.webp'
import f1 from '../../images/f1.webp'
import f2 from '../../images/f2.webp'
import f3 from '../../images/f3.webp'
import f4 from '../../images/f4.webp'
import f5 from '../../images/1 (1).webp'
import f6 from '../../images/2 (1).webp'
import f7 from '../../images/3.webp'
import f8 from '../../images/4.webp'
import f9 from '../../images/5.webp'
import f10 from '../../images/about2.webp'
import ft1 from '../../images/ft1.webp'
import ft2 from '../../images/ft2.webp'
import ft3 from '../../images/ft3.webp'
import ft4 from '../../images/ft4.webp'
import ft5 from '../../images/ft5.webp'
import ft6 from '../../images/ft6.webp'
import ft7 from '../../images/about3.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContentList from '../../components/content-list/ContentList';

const About = () => {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className='col-sm-12 col-md-6 col-xl-5'>
              <div className='about-content'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    About
                  </li>
                </ol>
                <h4 className='about-content-title'>About merier, Learn more about our company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie tincidunt nascetur amet libero, volutpat.
                  Amet diam blandit justo rhoncus vitae. Ultricies arcu, urna placerat ac urna adipiscing augue ornare dolor.</p>
                <a className='ht-popup-video' datatype='iframe' href="https://player.vimeo.com/video/172601404?autoplay=1">
                  <span>Play Now</span>
                  <BsFillPlayFill className='icon' />
                </a>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-xl-7 align-self-center'>
              <div className='about-thumb'>
                <img src={moto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-space pt-5'>
        <div className="container">
          <div className='section-title text-center mb-7 mb-md-5 mb-xl-10 pb-0 pb-md-3'>
            <h2 className='title'>Company Progress</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
          <div className='row mb-n9'>
            <div className='col-sm-6 col-lg-3 mb-9'>
              <div className='funfact-item'>
                <img src={f1} alt="" />
                <h2 className='funfact-info'>
                  5000+
                  <span>Clients</span>
                </h2>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-9'>
              <div className='funfact-item'>
                <img src={f2} alt="" />
                <h2 className='funfact-info'>
                  200+
                  <span>Project</span>
                </h2>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-9'>
              <div className='funfact-item'>
                <img src={f3} alt="" />
                <h2 className='funfact-info'>
                  1.5M+
                  <span>Revenue</span>
                </h2>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 mb-9'>
              <div className='funfact-item'>
                <img src={f4} alt="" />
                <h2 className='funfact-info'>
                  150+
                  <span>Team</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-space'>
        <div className="pt-lg-5 pb-lg-5">
          <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper">
            <SwiperSlide><img src={f5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={f6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={f7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={f8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={f9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={f7} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className='features-area section-space mb-n3'>
        <div className="container">
          <div className="row">
            <div className='col-lg-10 offset-lg-1'>
              <img src={f10} alt="" width={970} />
            </div>
          </div>
          <div className='section-title section-title-feature text-center pb-2'>
            <h2 className='title'>Why should you choose Merier</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus pulvinar et enim et maecenas faucibus.
              Volutpat consectetur non, ac, porttitor. Lorem cursus malesuada viverra morbi.</p>
          </div>
          <div className='row mb-n6 mb-xl-n10 sol'>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft1} alt="" />
                  Support Team
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft2} alt="" />
                  Creative Support
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft3} alt="" />
                  Project Management
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft4} alt="" />
                  Quality Control
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft5} alt="" />
                  Team Management
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-6 mb-xl-10'>
              <div className='feature-item mb-2'>
                <h2 className='feature-title'>
                  <img src={ft6} alt="" />
                  Client Management
                </h2>
                <p>Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis id.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='divider-area section-bottom-space'>
        <div className="container">
          <div className="row">
            <div className='col-md-12 col-lg-6'>
              <div className='divider-thumb'>
                <img src={ft7} alt="" />
              </div>
            </div>
            <div className='col-md-12 col-lg-6 align-self-center'>
              <div className='divider-content'>
                <h4 className='divider-content-title'>
                  Merier fashion is demo amet adipiscing elit.
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nascetur <br /> commodo et convallis mi.
                  Enim, enim felis, amet aliquam donec quisque quisque <br /> malesuada aliquam.
                  Semper enim amet sit natoque felis tristique orci nullam.
                  Quis erat in <br /> ac tellus malesuada elit libero.
                  Suspendisse scelerisque lacus semper posuere pulvinar <br /> arcu at non non.
                  Lobortis interdum morbi tincidunt convallis elit.</p>
                <a href="" className='btn-border-secondary'>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentList/>
    </>
  )
}

export default About