import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa';

const ContentCart = () => {
  return (
    <section className='news-letter-area section-bottom-space'>
    <div className="container">
        <div className='newsletter-content-wrap'>
            <div className="newsletter-content">
                <h2 className='title'>Connect with us | merier</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="newsletter-form">
                    <form action="">
                        <input type="email" className='form-control' placeholder='Email address' />
                        <button className='btn-submit' type='submit'>
                            <i><FaRegPaperPlane /></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default ContentCart