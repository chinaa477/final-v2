import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            og {
              siteName
              twitterUsername
            }
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/featured-image.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage = featuredImage?.childImageSharp?.gatsbyImageData

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: ogImage.images.fallback.src,
        },
        {
          name: "og:image:width",
          content: `${ogImage.width}`
        },
        {
          name: "og:image:height",
          content: `${ogImage.height}`
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "og:title",
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: "og:site_name",
          content: site.siteMetadata.og.siteName
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.siteUrl || ``,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.og.twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: "twitter:image",
          content: ogImage.images.fallback.src
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
