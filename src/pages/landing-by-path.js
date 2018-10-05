import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
// import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import pic1 from '../assets/images/pic01.jpg'
import pic2 from '../assets/images/pic02.jpg'
import pic3 from '../assets/images/pic03.jpg'

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = data.wordpressPage
    // console.log(data)
    // const post = data.wordpressPage
    // const siteTitle = get(data, 'site.siteMetadata.title')
    // const siteDescription = get(data, 'site.siteMetadata.description')
    return (
      <Layout>
        <div id="main">
          <header className="major container medium">
            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
          </header>
          <div
            className="major container medium"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <footer className="major container medium">
            <h3>Get shady with science</h3>
            <p>
              Vitae natoque dictum etiam semper magnis enim feugiat amet
              curabitur tempor orci penatibus. Tellus erat mauris ipsum
              fermentum etiam vivamus.
            </p>
            <ul className="actions special">
              <li>
                <Link to="/join-flow" className="button">
                  Join our crew
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query LandingByPath($slug: String) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    wordpressPage(slug: { eq: $slug }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            sizes(
              cropFocus: ENTROPY
              maxWidth: 1000
              quality: 100
              traceSVG: {
                color: "#edcaa0"
                background: "#a87f5c"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
