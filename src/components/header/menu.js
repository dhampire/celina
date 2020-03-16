import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Nosotros</a>
        </li>
        <li>
          <Link to="/projectos">Proyecto</Link>
        </li>
        <li>
          <a href="/">Responsabilidad Social</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>
  )
}

export default Menu
