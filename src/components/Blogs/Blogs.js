import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <section className='section-blogs'>
      <h1>What is Context API?</h1>
      <p>
        Context api is a in-built state management tool from react js. It
        provides a way to pass data through the component tree without having to
        pass down manually at every level. This is the alternative to "prop
        drilling" or moving props from grandparent to child to parent, and so
        on. Context is also treated as an easier, lighter approach to state
        management using Redux. Though there are some limitations of context
        api, but it is recommended to use for small to medium application.
      </p>
      <h1 className='blog-question'>What is HTML Semantic Tag?</h1>
      <p>
        Semantic HTML or semantic markup is HTML that introduces meaning to the
        web page rather than just presentation. Examples of semantic HTML5 tags
        include nav, footer and section. This is both semantic and
        presentational because people know what they are, and browsers know how
        to display them. It has greater accessibility. Search engines and
        assistive technologies (like screen readers for users with a sight
        impairment) are also able to better understand the context and content
        of the website, meaning a better experience for the users.
      </p>
    </section>
  )
}

export default Blogs
