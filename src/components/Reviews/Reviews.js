import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review'
import './Reviews.css'

const Reviews = () => {
  const [reviews] = useReviews()

  return (
    <>
      <h1 className='customer-review-title'>What our customers say!</h1>
      <section className='section-reviews'>
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />
        })}
      </section>
    </>
  )
}

export default Reviews
