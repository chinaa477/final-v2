import React from "react"
import { StyledFeatureDetails } from "./styles"
import FeatureImg from "../../images/virtual-labs/feature-details.png"

const FeatureDetails = () => {
  return (
    <div id="features-list">
      <StyledFeatureDetails className="features-list">
        <div className="wrapper">
          <div className="left">
            <img
              src={FeatureImg}
              alt=""
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
          <div className="right">
            <div className="heading">AR Features</div>
            <div className="description">
              Visualization: AR allows students to visualize and interact with
              complex concepts in a way that is not possible with traditional
              methods, making it easier to understand and remember.
            </div>
          </div>
        </div>
      </StyledFeatureDetails>
    </div>
  )
}

export default FeatureDetails
