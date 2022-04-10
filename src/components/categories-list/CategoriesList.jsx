import React from 'react'
import Categories from '../product-categories/Categories'

const CategoriesList = ({title,description}) => {
  return (
    <section className='product-categories-area'>
    <div className="container">
        <div className="section-text">
            <h2 className='title'>{title}</h2>
            <p className='ms-0'>{description}</p>
        </div>
        <Categories/>
        


    </div>
</section>
  )
}

export default CategoriesList