import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import Link from 'gatsby-link'

class MenuSelection extends React.Component {
  constructor(props) {
    super(props)
  }
  showSettings(event) {
    event.preventDefault()
  }
  render() {
    return (
      <Menu {...this.props}>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
        <a onClick={this.showSettings} className="menu-item--small" to="#">
          Settings
        </a>
      </Menu>
    )
  }
}

export default MenuSelection
