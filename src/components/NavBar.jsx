import React from 'react'
import { NavLink } from 'react-router'
import './_navbar.scss'

export const NavBar = () => {
  return (
    <nav>
      <ul className='flexContainer centerFC'>
        <li>
          <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'nombreClase' : ''}>
              Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
              to='/catalogo'
              className={({ isActive }) => isActive ? 'nombreClase' : ''}>
              Catalogo cuadros
          </NavLink>
        </li>
        <li>
          <NavLink
              to='/juego'
              className={({ isActive }) => isActive ? 'nombreClase' : ''}>
              Juego
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
