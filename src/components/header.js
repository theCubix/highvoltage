import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header" style={{display: 'none'}}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
  </div>
)

export default Header
