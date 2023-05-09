import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBanner from "../components/about/AboutBanner"
import About from "../components/about/About"
import OurProcess from "../components/about/OurProcess"
import WhatOffer from "../components/about/WhatOffer"
import ContactSection from "../components/common/ContactSection"
import Testimonial from "../components/common/Testimonial"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="TSL About Us" description="TSL About Us" />
      <AboutBanner />
      <About />
      <OurProcess />
      <WhatOffer />
      <ContactSection />
      <Testimonial />
    </Layout>
  )
}

export default AboutPage
