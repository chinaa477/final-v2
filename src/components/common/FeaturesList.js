import React from "react"
import { StyledFeaturesList } from "./styles"

export default function FeaturesList(props) {
  const { data, description, imageHeading, id } = props
  return (
    <StyledFeaturesList className="products-section" id={id}>
      {imageHeading && <div className="imageHeading">{imageHeading}</div>}
      {data &&
        data.map((data, index) => (
          <div key={`products-${index}`} className="wrapper" id={data.linkId}>
            <div className="left">
              <div className="heading">{data.heading}</div>
              {description && (
                <div className="description">{data.description}</div>
              )}
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
    </StyledFeaturesList>
  )
}
