import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Review from '../Review/Review'
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('ReviewData.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])
  return (
    <div>
      <Banner />
      <h1 className='customer-review-title'>Customer Reviews(3)</h1>
      <section className='section-reviews'>
        {reviews.map((review, index) => {
          return index < 3 ? <Review key={review.id} review={review} /> : null
        })}
      </section>
    </div>
  )
}

export default Home
