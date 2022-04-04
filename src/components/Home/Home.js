import React from 'react'
import { useNavigate } from 'react-router-dom'
import useReviews from '../../hooks/useReviews'
import Banner from '../Banner/Banner'
import Review from '../Review/Review'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const [reviews] = useReviews()

  const handleSeeAllReviews = () => {
    navigate('/reviews')
  }

  return (
    <div className='home-container'>
      <Banner />
      <h1 className='customer-review-title'>Customer Reviews(3)</h1>
      <section className='section-center section-reviews'>
        {reviews.map((review, index) => {
          return index < 3 ? <Review key={review.id} review={review} /> : null
        })}
      </section>
      <div className='see-all-btn-container'>
        <button onClick={handleSeeAllReviews} className='btn btn-all-reviews'>
          See All Reviews
        </button>
      </div>
    </div>
  )
}

export default Home
