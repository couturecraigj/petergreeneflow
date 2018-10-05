import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import Link from 'gatsby-link'
import { graphql, StaticQuery } from 'gatsby'

class MenuSelection extends React.Component {
  // showSettings(event) {
  //   event.preventDefault()
  // }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MenuQuery {
            allWordpressPage(sort: { fields: [menu_order] }) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <Menu {...this.props}>
            {data.allWordpressPage.edges.map(({ node }) => (
              <Link
                id={node.slug}
                key={node.slug}
                className="menu-item"
                to={node.slug}
              >
                {node.title}
              </Link>
            ))}
            {/* <a
              onClick={this.showSettings}
              className="menu-item--small"
              href="/settings"
            >
              Settings
            </a> */}
          </Menu>
        )}
      />
    )
  }
}

export default MenuSelection
