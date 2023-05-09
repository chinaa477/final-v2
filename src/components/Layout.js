/** @jsx jsx */
import { useState } from 'react'
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const Layout = ({ children }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000)

  const Preloader = () => {
    return (
      <div className="tsl-preloader">
        <div className='loading-spinner'>
          <div className="preloader-spin-1"></div>
          <div className="preloader-spin-2"></div>
        </div>
      </div>
    )
  }

  return (
    loading ?
      <Preloader />
      :
      <div className="primary-container">
        <Header>
          <div className='md:(grid grid-cols-2) flex flex-row gap-x-3 text-center place-items-center container mx-auto md:px-8 px-5 justify-between'>
            <Logo title={siteTitle} />
            <div sx={layoutStyle.nav}>
              <Navigation />
            </div>
          </div>
        </Header>
        <main>{children}</main>
        <Footer />
      </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
