import React from 'react'
// import Link from 'gatsby-link'
import { get, has } from 'lodash'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import Link from 'gatsby-link'
import pic1 from '../assets/images/pic01.jpg'

const IndexPage = ({ data }) => {
  const siteDescription = data.allWordpressWpSettings.edges[0].node.description
  const content = data.wordpressPage.content
  return (
    <Layout data={data}>
      <div id="main">
        {siteDescription && (
          <header className="major container medium">
            <h2>{siteDescription}</h2>
          </header>
        )}
        <div className="box alt container">
          {data.allWordpressPost.edges.map(({ node }, i) => (
            <section
              key={node.slug}
              className={`feature ${i % 2 ? 'left' : 'right'}`}
            >
              <Link to={node.path + node.slug} className="image">
                {has(node, 'featured_media.localFile.childImageSharp.fluid') ? (
                  <Img
                    fluid={get(
                      node,
                      'featured_media.localFile.childImageSharp.fluid'
                    )}
                    alt=""
                  />
                ) : (
                  <img src={pic1} alt={node.slug} />
                )}
              </Link>
              <div className="content">
                <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </section>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="major container medium"
        />
        <footer className="major container medium">
          <h3>Get shady with science</h3>
          <p>
            Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur
            tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
            vivamus.
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

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    wordpressPage(slug: { eq: "home" }) {
      content
    }
    allWordpressWpSettings {
      edges {
        node {
          title
          description
        }
      }
    }
    allWordpressPost(limit: 3) {
      edges {
        node {
          title
          slug
          path: date(formatString: "/YYYY/MM/DD/")
          excerpt
        }
      }
    }
  }
`
