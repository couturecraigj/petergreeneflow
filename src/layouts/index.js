import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/Menu'
import '../sass/main.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div id="outer-container">
            <Menu pageWrapId="page-wrap" outerContainerId="outer-container" />
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div id="page-wrap">{children}</div>
            <Footer />
          </div>
        )}
      />
    )
  }
}

export default Layout
