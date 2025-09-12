import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, children }) => {
  const { site } = useStaticQuery(query)

  const { defaultTitle, defaultDescription, author, siteUrl } =
    site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={siteUrl} />
      <meta name="author" content={seo.author} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍓</text></svg>"
      />
      {children}
    </>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
        siteUrl: url
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

SEO.defaultProps = {
  title: null,
  description: null,
  children: null,
}
