import React from "react"
import { Main } from "@layout"
import Seo from "../components/SEO/SEO"
import { Features, FeatureDetails } from "@virtualLab"
import { Banner } from "@common"
import { ProductFeatures } from "../components/virtualLab"
import { Contact, GetStarted } from "@home"
import BannerImg from "../images/virtual-labs/banner.png"

const virtualLabs = () => {
  const menuValues = [
    { name: "Watch A Demo", link: "demo" },
    { name: "Our Features", link: "features" },
  ]
  return (
    <Main values={menuValues}>
      <Seo
        title="Erudex Virtual Labs — Interactive Classroom Experience"
        description="A high-level 360° interactive experience to deepen students concepts in STEM subjects, through virtual experiments."
      />
      <Banner
        heading="Erudex Virtual Labs — Interactive Classroom Experience"
        subHeading="Erudex Virtual Labs is an experiment-based learning platform, which enables students to run virtual simulations in an advanced virtual lab setting. Erudex uses state-of-the-art tools to provide Augmented Reality (AR) visualisations that are game-like and immersive for students."
        image={BannerImg}
      />
      <Features />
      <FeatureDetails />
      <ProductFeatures />
      <Contact />
      <GetStarted />
    </Main>
  )
}

export default virtualLabs
