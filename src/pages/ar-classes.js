import React from "react"
import { Main } from "@layout"
import Seo from "../components/SEO/SEO"
import { Banner, Features, FeaturesList } from "@common"
import { FeatureDetails } from "@arClasses"
import { Contact, GetStarted } from "@home"
import BannerImg from "../images/ar-classes/banner.png"
import featureImg from "../images/ar-classes/feature-image.png"
import img1 from "../images/ar-classes/features-list/1.png"
import img2 from "../images/ar-classes/features-list/2.png"
import img3 from "../images/ar-classes/features-list/3.png"
import img4 from "../images/ar-classes/features-list/4.png"
import img5 from "../images/ar-classes/features-list/5.png"

const featuresList = [
  {
    image: img1,
    heading: "Improved retention",
    description:
      "Studies have shown that AR can improve students' ability to retain information, as it helps to make abstract concepts more concrete and interactive.",
  },
  {
    image: img2,
    heading: "Accessibility",
    description:
      "AR can make education more accessible to students with disabilities, as it allows them to experience concepts and ideas in a way that is tailored to their individual needs.",
  },
  {
    image: img3,
    heading: "Increased collaboration",
    description:
      "AR can facilitate collaboration among students and teachers, as it allows them to share and interact with learning materials in real time.",
  },
  {
    image: img4,
    heading: "Personalization",
    description:
      "AR can allow educators to tailor learning experiences to the needs and interests of individual students, helping to make learning more relevant and effective.",
  },
  {
    image: img5,
    heading: "Cost-effectiveness",
    description:
      "AR can be a cost-effective solution for educators, as it eliminates the need for expensive physical materials and equipment.",
  },
]
const arClasses = () => {
  const menuValues = [
    { name: "AR Use Cases", link: "arUseCases" },
    { name: "Our Features", link: "features" },
  ]
  return (
    <Main values={menuValues}>
      <Seo
        title="Erudex AR Experiences"
        description="Erudex AR allows students to visualize & interact with complex concepts in a engaging manner using the power of augmented reality."
      />
      <Banner
        heading="Augmented reality for better concept clarity"
        subHeading="The Erudex Ed-tech platform enhances the learning experience by incorporating interactive elements, such as augmented reality content, into various materials, including projects, books, events, and lessons. This allows educators to create engaging and immersive educational resources for the classroom and to innovate their teaching programs."
        image={BannerImg}
      />
      <Features
        heading1="Education in AR is estimated to be US $41.8 Billion by 2027"
        subHeading1="The AR platform allows the education industry to easily create augmented reality experiences for their customers using simple and powerful tools, even if they have limited technical expertise. The platform helps to hide the complexity of building AR experiences, allowing users to create them quickly and easily."
        heading2="Benefits of AR in the educational industry:"
        subHeading2="Enhanced engagement: AR can make learning more interactive and engaging for students, helping to hold their attention and keep them motivated."
        imageHeading="AR Use Cases"
        image={featureImg}
        imageId="arUseCases"
      />
      <FeatureDetails />
      <FeaturesList id="features" data={featuresList} description={true} imageHeading="Power Features Of Erudex AR Experiences" />
      <Contact />
      <GetStarted />
    </Main>
  )
}

export default arClasses
