import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"
import Logo from "./logo"
import "../scss/style.scss"

const Header = ({ siteTitle }) => (
  <header className="header container">
    <div>
      <h1>
        <Link
          to="/"
        >
          <Logo />
        </Link>
      </h1>
    </div>
    <nav className="navbar">
      <Menu />
      </nav>
    <a className="btn btn__primary">Agenda tu cita</a>
  </header>
)





Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
