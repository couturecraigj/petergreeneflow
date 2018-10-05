import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { get, has } from 'lodash'
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost
    const siteDescription = get(
      this.props,
      'data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <div id="main">
          <Helmet>
            <title>{post.title}</title>
          </Helmet>
          {siteDescription && (
            <header className="major container medium">
              <h2>{siteDescription}</h2>
            </header>
          )}
          <div className="box alt container">
            {has(post, 'featured_media.localFile.childImageSharp.fluid') && (
              <Img
                fluid={get(
                  post,
                  'featured_media.localFile.childImageSharp.fluid'
                )}
              />
            )}
            <br />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            sizes(
              traceSVG: {
                color: "#edcaa0"
                background: "#a87f5c"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
              cropFocus: ATTENTION
              maxWidth: 1000
              toFormat: PNG
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
