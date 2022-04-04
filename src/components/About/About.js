import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='section-about'>
      <h2>This is a Boat Headphone Review Website created with ReactJS.</h2>
      <ul>
        <li>
          <p>
            1. React router is used to show the content over multiple pages.
          </p>
        </li>
        <li>
          <p>
            2. You can see the top 3 review on the homepage and all the reviews
            on reviews page.
          </p>
        </li>
        <li>
          <p>3. Recharts is use to show some charts with given data.</p>
        </li>
        <li>
          <p>4. On the blogs page you can find some question answer.</p>
        </li>
      </ul>
    </div>
  )
}

export default About
