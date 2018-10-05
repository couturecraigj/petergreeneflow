import React from 'react'
import Link from 'gatsby-link'
import { get, has } from 'lodash'
import Img from 'gatsby-image'

const BlogList = ({ edges, closingComponent: ClosingComponent }) => {
  return (
    <ul className="blog-list">
      {edges.length ? (
        edges.map(({ node }) => {
          return (
            <li>
              <Link to={node.path + node.slug} className="post">
                <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
                {has(
                  node,
                  'featured_media.localFile.childImageSharp.fluid'
                ) && (
                  <Img
                    fluid={get(
                      node,
                      'featured_media.localFile.childImageSharp.fluid'
                    )}
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </Link>
            </li>
          )
        })
      ) : (
        <React.Fragment>
          <header className="major">
            <h1>I have not posted anything just yet</h1>
          </header>
          <p>This will be updated soon</p>
        </React.Fragment>
      )}
      {ClosingComponent && (
        <li>
          <ClosingComponent />
        </li>
      )}
    </ul>
  )
}

export default BlogList
