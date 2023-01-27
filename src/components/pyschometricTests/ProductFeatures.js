import React from "react"
import { StyledProductFeatures } from "./styles"

export default function ProductFeatures(props) {
  const { heading, subHeading } = props
  return (
    <StyledProductFeatures className="products-section" id="programHighlights">
      <h4>{heading}</h4>
      <h6>{subHeading}</h6>
    </StyledProductFeatures>
  )
}
