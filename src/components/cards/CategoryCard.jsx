import React from 'react'

const CategoryCard = ({ image, category }) => {
  return (
    <div className='category-card d-flex flex-column align-items-center justify-content-center'>
      <div className="category-img">
        <img src={image} alt="category" />
      </div>
      <div className="category-name">
        {category}
      </div>
    </div>
  )
}

export default CategoryCard