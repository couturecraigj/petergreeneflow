import React from 'react'
import { get, has } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import pic1 from '../assets/images/pic01.jpg'
// import BlogList from '../components/BlogList'
import Layout from '../layouts'

const Pagination = ({ index, pageCount, group }) => {
  if (index === 1 && index === pageCount) return null
  const before = index !== 1
  const prevUrl = index - 1 === 1 ? `/blog` : `/blog/${index - 1}`
  const nextUrl = index === pageCount ? '#' : `/blog/${index + 1}`
  const after = index !== pageCount
  return (
    <section className="special">
      <ul className="pagination">
        <li>
          {before ? (
            <Link
              to={prevUrl}
              className={`button small ${!before ? 'disabled' : ''}`}
            >
              Prev
            </Link>
          ) : (
            <span className={`button small ${!before ? 'disabled' : ''}`}>
              Prev
            </span>
          )}
        </li>
        {before ? (
          <li>
            <Link to={prevUrl} className={`page`}>
              {index - 1}
            </Link>
          </li>
        ) : null}
        <li>
          <span className={`page active`}>{index}</span>
        </li>
        {after ? (
          <li>
            <Link to={`/blog/${index + 1}`} className={`page`}>
              {index + 1}
            </Link>
          </li>
        ) : null}
        <li>
          {after ? (
            <Link
              to={nextUrl}
              className={`button small ${!after ? 'disabled' : ''}`}
            >
              Next
            </Link>
          ) : (
            <span className={`button small ${!before ? 'disabled' : ''}`}>
              Next
            </span>
          )}
        </li>
      </ul>
    </section>
  )
}

const BlogListTemplate = props => {
  const { data, pathContext } = props
  const { group = [], index = 1, pageCount = 1 } = pathContext
  // const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  // const nextUrl = (index + 1).toString()
  return (
    <Layout data={data}>
      <div id="main">
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <header className="major container medium">
          <h2>Blog</h2>
        </header>

        <div className="box alt container">
          {group.map(({ node }, i) => {
            return (
              <section
                key={node.slug}
                className={`feature ${i % 2 ? 'left' : 'right'}`}
              >
                <Link to={node.path + node.slug} className="image">
                  {has(
                    node,
                    'featured_media.localFile.childImageSharp.fluid'
                  ) ? (
                    <Img
                      fluid={get(
                        node,
                        'featured_media.localFile.childImageSharp.fluid'
                      )}
                      alt=""
                    />
                  ) : (
                    <img src={pic1} alt={node.title} />
                  )}
                </Link>
                <div className="content">
                  <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </section>
            )
          })}
          <Pagination index={index} pageCount={pageCount} group={group} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogListTemplate
