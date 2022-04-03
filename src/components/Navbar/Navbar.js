import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul className='navlinks'>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              }
            }}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              }
            }}
            to='/reviews'
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              }
            }}
            to='/dashboard'
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              }
            }}
            to='/blogs'
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              }
            }}
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
