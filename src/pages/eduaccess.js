import React from "react"
import { Main } from "@layout"
import Seo from "../components/SEO/SEO"
import { Banner, Features, FeaturesList } from "@common"
import { FeatureDetails } from "@eduaccess"
import { Contact, GetStarted } from "@home"
import BannerImg from "../images/eduaccess/banner.png"
import featureImg from "../images/eduaccess/feature-image.png"
import img1 from "../images/eduaccess/features-list/1.png"
import img2 from "../images/eduaccess/features-list/2.png"
import img3 from "../images/eduaccess/features-list/3.png"
import img4 from "../images/eduaccess/features-list/4.png"
import img5 from "../images/eduaccess/features-list/5.png"
import img6 from "../images/eduaccess/features-list/6.png"

const featuresList = [
  {
    image: img1,
    heading:
      "Real-time first-hand experience in setting up & managing educational institutions across India.",
  },
  {
    image: img2,
    heading: "A strong network of educational experts with field experience.",
  },
  {
    image: img3,
    heading: "Understanding of the geographic & demographic needs.",
  },
  {
    image: img4,
    heading: "Efficient system and policy platforms for profitable delivery.",
  },
  {
    image: img5,
    heading:
      "One-stop boutique operations for all educational / industry needs.",
  },
  {
    image: img6,
    heading: "360 degrees consideration of stakeholders.",
  },
]

const eduaccess = () => {
  const menuValues = [
    { name: "Our Services", link: "ourServices" },
    { name: "Our Features", link: "features" },
  ]
  return (
    <Main values={menuValues}>
      <Seo
        title="Erudex - School Affiliation Services"
        description="Erudex Eduaccess is a strategic consultancy and solution partner for the educational institutions."
      />
      <Banner
        heading="School Accreditation, Affiliation & Audit services for CBSE / STATE / ICSE / IGCSE / IB"
        subHeading="Erudex Eduaccess is a strategic consultancy and solution partner for the educational institutions. It supports and facilitates to establish a new CBSE//ICSE/IGCSE/IB schools affiliated to other boards in India."
        image={BannerImg}
      />
      <Features
        id="ourServices"
        heading1={false}
        subHeading1={false}
        heading2={false}
        subHeading2={false}
        imageHeading="Eduaccess Spectrum of Services"
        image={featureImg}
      />
      <FeatureDetails />
      <FeaturesList
        id="features"
        data={featuresList}
        description={false}
        imageHeading="Our Rigour & Relevance"
      />
      <Contact />
      <GetStarted />
    </Main>
  )
}

export default eduaccess
