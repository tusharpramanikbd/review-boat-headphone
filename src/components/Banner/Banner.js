import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <section className='section-center section-banner'>
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
            Every person reach to the haven of music. Our boat can take you
            there. Our series of boat headphones are designed to give you
            ultimate music feelings. It has different custom feature for
            different music lovers.
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
  )
}

export default Banner
