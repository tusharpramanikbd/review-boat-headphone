import React, { useEffect, useState } from 'react'
import Review from '../Review/Review'
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('ReviewData.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])
  return (
    <div>
      <h1 className='customer-review-title'>What our customers say!</h1>
      <section className='section-reviews'>
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />
        })}
      </section>
    </div>
  )
}

export default Reviews
