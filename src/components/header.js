import React from 'react'
import Link from 'gatsby-link'
const Header = ({ siteTitle }) => (
  <div id="header">
    <Link to="/">
      <span className="logo icon fa-paper-plane-o" alt="home_button" />
    </Link>
    <h1>Hi. Welcome to Flow</h1>
    <p>
      We are Mixed-Martial Arts Studio that specialized in Brizilian Jiu Jitsu.
      <br />
      located at:
      <br />
      140 Monadnock Hwy, Swanzey, NH 03446
    </p>
  </div>
)

export default Header
