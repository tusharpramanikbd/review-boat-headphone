import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review'

const Reviews = () => {
  const [reviews] = useReviews()

  return (
    <>
      <h1 className='customer-review-title'>What our customers say!</h1>
      <section className='section-center section-reviews'>
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />
        })}
      </section>
    </>
  )
}

export default Reviews
