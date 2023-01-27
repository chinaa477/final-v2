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
            <div className="heading">
              Combine real-life experiments with school concepts
            </div>
            <div className="description">
              Erudex virtual labs helps students understand complex concepts
              from CBSE, State curriculum by making these concepts interactive
              and immersive. This ensures students get complete subject
              knowledge.
            </div>
            <ul>
              <li>
                <span className="heading">Attention span: </span>
                <span className="description">
                  Combining the best of both physical and digital world, virtual
                  labs ensures students are engaged and attentive for longer
                  periods.
                </span>
              </li>
              <li>
                <span className="heading">Learn by doing: </span>
                <span className="description">
                  The gamification of the curriculum can make students'
                  attitudes more positive. It makes learning interesting, fun,
                  and effortless and improves collaboration and capabilities.
                </span>
              </li>
              <li>
                <span className="heading">Effective Learning System: </span>
                <span className="description">
                  Helps students to gain knowledge through rich visuals and
                  immersion into the subject matter. Speech technology also
                  engages students by providing explaining the topic in a voice
                  format.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </StyledFeatureDetails>
    </div>
  )
}

export default FeatureDetails
