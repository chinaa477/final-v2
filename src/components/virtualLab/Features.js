import React from "react"
import { StyledFeatures } from "./styles"
import FeatureImg from "../../images/virtual-labs/poster.png"
import video from "../../assets/virtual-labs/demo.mp4"
import { Player } from "video-react"
import "video-react/dist/video-react.css"
import styled from "styled-components"

const CustomPlayer = styled.div`
  & .video-react {
    & .video-react-big-play-button {
      display: none;
    }

    & .video-react-poster {
      background-color: transparent;
    }
  }
`

const Features = () => {
  return (
    <div id="demo">
      <StyledFeatures className="features-wrapper">
        <h4>Fun And Exploratory Learning Experience Awaits Your Students.</h4>
        <h6>
          Our 3-D learning platform is designed to help your students build
          scientific reasoning, curiosity and to innovate. Our technology is
          powered by the world’s most powerful real-time development platform
          UNITY.
        </h6>
        <div className="md:px-20 px-4 relative w-full mt-8 z-auto">
            <CustomPlayer>
            <Player src={video} poster={FeatureImg}></Player>
            </CustomPlayer>
        </div>
      </StyledFeatures>
    </div>
  )
}

export default Features
