import React from "react"
import { Main } from "@layout"
import Seo from "../components/SEO/SEO"
import { Banner, Features, FeaturesList } from "@common"
import { ProductFeatures } from "@pyschometricTests"
import { Contact, GetStarted } from "@home"
import BannerImg from "../images/psychometric-tests/banner.png"
import featureImg from "../images/psychometric-tests/feature-image.png"
import img1 from "../images/psychometric-tests/features-list/1.png"
import img2 from "../images/psychometric-tests/features-list/2.png"
import img3 from "../images/psychometric-tests/features-list/3.png"
import img4 from "../images/psychometric-tests/features-list/4.png"
import img5 from "../images/psychometric-tests/features-list/5.png"

const featuresList = [
  {
    image: img1,
    heading:
      "Perceive includes traits of visual, auditory, and kinesthetic memory.",
  },
  {
    image: img2,
    heading:
      "Reasoning includes traits of thinking, analysing, and problem-solving.",
  },
  {
    image: img3,
    heading:
      "Intrapersonal includes traits of evaluation principles, attitude, EQ qualities.",
  },
  {
    image: img4,
    heading:
      "Deliver include traits of linguistic skills (verbal and non-verbal), modulation, and choice of words/body language",
  },
  {
    image: img5,
    heading: "Engage includes traits of empathy, teamwork, and leadership.",
  },
]
const psychometricTests = () => {
  const menuValues = [
    { name: "Our Features", link: "features" },
    { name: "Program Highlights", link: "programHighlights" },
  ]
  return (
    <Main values={menuValues}>
      <Seo
        title="Erudex Psychometric Tests"
        description="An AI-based testing platform will analyse your child’s performance, personality traits, and help you unlock their future potential."
      />
      <Banner
        heading="Know your child with Advanced Psychometric tests"
        subHeading="We know that children are more successful when they are taught in a way that is tailored to their individual needs and strengths. Therefore, Erudex psychometric tests make it easy to assess each child individually."
        image={BannerImg}
      />
      <Features
        id="features"
        heading1="A comprehensive assessment of your students’ psychometric skills"
        subHeading1="In order to ensure that a student is developing in a healthy and balanced way, it is important to evaluate their interests, strengths, and abilities across various domains like cognitive, socio-economic & psychomotor to get a holistic picture."
        heading2={false}
        subHeading2={false}
        imageHeading={false}
        image={featureImg}
      />
      <ProductFeatures
        heading="Erudex Pride classified into 5 domains for the student"
        subHeading="Would you like to assist your school students in achieving overall, well-rounded growth and development for their lifetime? Learn more about the different modules of Erudex Pride program."
      />
      <FeaturesList data={featuresList} description={false} imageHeading={false} />
      <Contact />
      <GetStarted />
    </Main>
  )
}

export default psychometricTests
