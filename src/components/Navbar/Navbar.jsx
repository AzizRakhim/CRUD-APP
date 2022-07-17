import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-3 bg-danger w-100 d-block'>
      <nav>
        <ul className='nav__ul d-flex justify-content-around w-25 list-unstyled text-light'>
          <li className="nav__link">
            <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to={'/books'} className={({isActive}) => isActive ? 'active-link' : ''}>
              Books
            </NavLink>
          </li>
          <li className="nav__link">
            <NavLink to={'/control'} className={({isActive}) => isActive ? 'active-link' : ''}>
              Control
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
