import React from "react"
import { StyledProductFeatures } from "./styles"
import img1 from '../../images/virtual-labs/features-list/1.png'
import img2 from '../../images/virtual-labs/features-list/2.png'
import img3 from '../../images/virtual-labs/features-list/3.png'
import img4 from '../../images/virtual-labs/features-list/4.png'
import img5 from '../../images/virtual-labs/features-list/5.png'
import img6 from '../../images/virtual-labs/features-list/6.png'

const data = [
  {
    image: img1,
    heading: "Teacher Friendly",
    description:
      "Erudex virtual labs user interface is built to be teacher centric, helping them  explain the most complex concepts in simpler ways with the power of 3-D visualizations.",
  },
  {
    image: img2,
    heading: "Immersive And Exploratory",
    description:
      "Environment that allows high engagement levels persuading young minds to learn by doing, thereby sparking curiosity and innovation.",
  },
  {
    image: img3,
    heading: "Performance Analytics Tool",
    description:
      "Helps teachers and parents better understand a child’s learning curve. Suggest changes based on their learning patterns and usage.",
  },
  {
    image: img4,
    heading: "Ease Of Use",
    description:
      "Eliminates risks by allowing students to run experiments in a safe, virtual environment. Experiments can be repeated as needed without any constraints until clarity is achieved.",
  },
  {
    image: img5,
    heading: "Rich Content",
    description:
      "With Erudex virtual labs students have access to a vast repository of experiments & videos to choose from and much more!",
  },
  {
    image: img6,
    heading: "Instruction Mode",
    description:
      "Erudex virtual labs helps teachers by providing step by step guidance on how to perform difficult to understand concepts and experiments.",
  },
]
export default function ProductFeatures() {
  return (
    <StyledProductFeatures className="products-section" id="features">
      {data.map((data, index) => (
        <div key={`products-${index}`} className="wrapper" id={data.linkId}>
          <div className="left">
            <div className="heading">{data.heading}</div>
            <div className="description">{data.description}</div>
          </div>
          <div className="right">
            <img
              src={data.image}
              alt={data.heading}
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
        </div>
      ))}
    </StyledProductFeatures>
  )
}
