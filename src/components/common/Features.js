import React from "react"
import { StyledFeatures } from "./styles"

const Features = props => {
  const { heading1, subHeading1, heading2, subHeading2, imageHeading, image, id, imageId } =
    props
  return (
    <StyledFeatures className="features-wrapper" id={id}>
      {heading1 && (
        <>
          <h4>{heading1}</h4>
          <h6>{subHeading1}</h6>
        </>
      )}
      {heading2 && (
        <>
          <h4>{heading2}</h4>
          <h6>{subHeading2}</h6>
        </>
      )}
      {imageHeading && <h4 id={imageId} className="image-heading">{imageHeading}</h4>}
      <div className="md:px-20 px-4 relative w-full z-auto">
        <img src={image} alt="" />
      </div>
    </StyledFeatures>
  )
}

export default Features
