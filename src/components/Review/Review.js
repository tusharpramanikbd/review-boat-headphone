import React from 'react'
import './Review.css'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Review = (props) => {
  const { name, image, rating, review } = props.review
  return (
    <div className='review-container'>
      <img src={image} alt={name} className='review-image' />
      <h2>{name}</h2>
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStar} />}
        fullSymbol={
          <FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />
        }
        readonly
      ></Rating>
      <p className='review-text'>{review}</p>
    </div>
  )
}

export default Review
