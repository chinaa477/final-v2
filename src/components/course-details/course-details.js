import React from "react"
import StyledCourseDetails from "./style/course-details"
import img1 from '../../assets/images/shapes/shape2.png'
import img2 from '../../assets/images/shapes/shape3.png'
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse"
import { BsPersonWorkspace } from "react-icons/bs"
import { BiBookAlt } from "react-icons/bi"
import { MdOutlineAccessTime } from "react-icons/md"
import CourseContent from "./course-content"

const CourseDetails = ({ data }) => {
    const details = data.markdownRemark.frontmatter;
    return (
        <StyledCourseDetails>
            <MouseParallaxContainer
                className="banner"
                resetOnLeave>
                <div className="container">
                    <h1>{details.courseName}</h1>
                    <ul className="course-meta">
                        <li>
                            <BsPersonWorkspace className="icon" />
                            <span>by {details.instructorName}</span>
                        </li>
                        <li>
                            <span className="divider"></span>
                        </li>
                        <li>
                            <BiBookAlt className="icon" />
                            <span>{details.totalLessons} Lectures</span>
                        </li>
                        <li>
                            <span className="divider"></span>
                        </li>
                        <li>
                            <MdOutlineAccessTime className="icon" />
                            <span>{details.totalTime}</span>
                        </li>
                    </ul>
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
            <CourseContent details={details} />
        </StyledCourseDetails>
    )
};

export default CourseDetails
