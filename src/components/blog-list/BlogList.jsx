import React from 'react'
import Blog from '../blog/Blog'

const BlogList = ({title,description}) => {
  return (
    <section className='blog-area section-space'>
                <div className="container">
                    <div className="section-text">
                        <h2 className='title'>{title}</h2>
                        <p className='ms-0'>{description}</p>
                    </div>
                    <div className="row mb-n8">
                       <Blog/>
                    </div>
                </div>
            </section>
  )
}

export default BlogList