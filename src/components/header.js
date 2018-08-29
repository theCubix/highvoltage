import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header">
      <Link className="heading header__link" to="/">
        <h1 className="header__title">
          {siteTitle}
        </h1>
      </Link>
  </div>
)

export default Header
