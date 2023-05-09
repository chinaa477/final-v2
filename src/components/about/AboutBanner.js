import React from "react"
import img1 from '../../assets/images/shapes/shape2.png'
import img2 from '../../assets/images/shapes/shape3.png'
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse"
import StyledBanner from "./style/banner"
import data from '../../content/about/banner.json'

const AboutBanner = () => {
    return (
        <StyledBanner>
            <MouseParallaxContainer
                className="banner"
                resetOnLeave>
                <div className="container">
                    <h1>About Us</h1>
                    <p className="desc">{data.description}</p>
                    <ul className="shape-group">
                        <li className="shape-1">
                            <span></span>
                        </li>
                        <li className="shape-2">
                            <MouseParallaxChild
                                factorX={0.1}
                                factorY={0.1}>
                                <img src={img1} alt="" />
                            </MouseParallaxChild>
                        </li>
                        <li className="shape-3">
                            <MouseParallaxChild
                                factorX={0.1}
                                factorY={0.1}>
                                <img src={img2} alt="" />
                            </MouseParallaxChild>
                        </li>
                        <li className="shape-4">
                            <span></span>
                        </li>
                    </ul>
                </div>
            </MouseParallaxContainer>
        </StyledBanner>
    )
};

export default AboutBanner