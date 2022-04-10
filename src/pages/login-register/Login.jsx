import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import { FaRegCheckCircle } from 'react-icons/fa';
import ContentList from '../../components/content-list/ContentList';

const Login = () => {
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
                    Account
                  </li>
                </ol>
                <h2 className='page-header-title'>My Account</h2>
              </div>
            </div>
            <div className="col-sm-4 d-sm-flex justify-content-end align-items-end">
              <h5 className='showing-pagination-results'>
                Login / Register
              </h5>
            </div>
          </div>
        </div>
      </section>
      </div>
      <section className='login-register-area section-space'>
        <div className="container">
          <div className="row">
            <div className='col-md-5 login-register-border'>
              <div className='login-register-content'> 
              <div className='login-register-title mb-30'>
                <h2>Login</h2>
                <p>Welcome back! Please enter your username and password to login.</p>
              </div>
              <div className='class="login-register-style login-register-pr"'>
                <form action="#" method='post'>
                    <div className='login-register-input'>
                      <input type="text" name='user-name' placeholder='Username or email address' />
                    </div>
                    <div className='login-register-input'>
                      <input type="password" name="user-password" placeholder='Password' />
                      <div className='forgot'>
                        <a href="#">Forgot?</a>
                      </div>
                    </div>
                    <div className='remember-me-btn'>
                      <input type="checkbox" />
                      <label htmlFor="">Remember me</label>
                    </div>
                    <div className='btn-register'>
                      <a className='btn-register-now' href="">Login</a>
                    </div>
                </form>
              </div>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='login-register-content login-register-pl'>
                <div className='login-register-title mb-30'>
                  <h2>Register</h2>
                  <p>Create new account today to reap the benefits of a personalized <br /> shopping experience. </p>
                </div>
                <div className='login-register-style'>
                  <form action="#" method='post'>
                    <div className='login-register-input'>
                      <input type="text" name='user-name' placeholder='Username' />
                    </div>
                    <div className='login-register-input'>
                    <input type="text" name='user-name' placeholder='E-mail adress' />
                    </div>
                    <div className='login-register-input'>
                      <input type="password" name="user-password" placeholder='Password' />
                    </div>
                    <div className='login-register-paragraph'>
                      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                        <a className='privacy' href="">privacy policy.</a>
                      </p>

                    </div>
                    <div className='btn-register'>
                      <a className='btn-register-now' href="">Register</a>
                    </div>
                  </form>
                  <div className='register-benefits'>
                    <h3>Sign up today and you will be able to :</h3>
                    <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br />
                    or sign in and you will be able to:</p>
                    <ul>
                      <li><FaRegCheckCircle className='fa'/>
                      Speed your way through checkout</li>
                      <li><FaRegCheckCircle className='fa'/>
                      Track your orders easily</li>
                      <li><FaRegCheckCircle className='fa'/>
                      Keep a record of all your purchases</li>
                    </ul>
                  </div>
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

export default Login