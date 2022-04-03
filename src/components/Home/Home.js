import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className='section-banner'>
        <article className='banner-container'>
          <img
            className='banner-img'
            src='https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=740'
            alt='Headphone'
          />
          <div className='banner-info'>
            <h1>How's The Boat?</h1>
            <h1>
              <span>Your Next Headphone</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quo numquam nihil omnis reprehenderit libero aliquid atque
              deleniti soluta quaerat?
            </p>
            <a
              href='https://www.boat-lifestyle.com/'
              target='_blank'
              rel='noreferrer'
              className='btn'
            >
              Live Demo
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Home
