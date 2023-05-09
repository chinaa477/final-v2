import React from "react"
import StyledHomeCourses from "./style/home-courses"
import { GatsbyImage } from 'gatsby-plugin-image'
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "gatsby";

const HomeCourses = ({ data }) => {
    const courseList = [];
    data.edges.forEach(edge => {
        courseList.push({
            courseLevel: edge.node.frontmatter.courseLevel,
            courseName: edge.node.frontmatter.courseName,
            featuredImage: edge.node.frontmatter.featuredImage,
            instructorImage: edge.node.frontmatter.instructorImage,
            instructorName: edge.node.frontmatter.instructorName,
            shortDescription: edge.node.frontmatter.shortDescription,
            slug: edge.node.frontmatter.slug,
            studentsCount: edge.node.frontmatter.studentsCount,
            totalLessons: edge.node.frontmatter.totalLessons,
            totalTime: edge.node.frontmatter.totalTime
        })
    });
    return (
        <StyledHomeCourses>
            <div className="main-container">
                <h3>Courses</h3>
                <h2>Our Most Popular Courses</h2>
                <div className="courses-list">
                    {courseList.map((course, index) => (
                        <div className="card" key={index}>
                            <div className="inner">
                                <div className="thumbnail">
                                    <GatsbyImage
                                        image={course.featuredImage.childImageSharp.gatsbyImageData}
                                        alt={course.courseName}
                                        className="img"
                                    />
                                    <div className="course-duration">
                                        <BiTimeFive />
                                        <span>
                                            {course.totalTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="intructor">
                                        <img src={course.instructorImage}
                                            alt={course.courseName}
                                            title={course.courseName}
                                            className="thumb" />
                                        <span>{course.instructorName}</span>
                                    </div>
                                    <div className="course-level">
                                        {course.courseLevel}
                                    </div>
                                    <h6>
                                        {course.courseName}
                                    </h6>
                                    <hr className="divider" />
                                    <ul className="course-meta">
                                        <li className="item">
                                            <FiUsers />
                                            <span>{course.studentsCount} Students</span>
                                        </li>
                                        <li className="item">
                                            <HiOutlineDocumentText />
                                            <span>{course.totalLessons} Lessons</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content">
                                <div className="content">
                                    <div className="top">
                                        <div className="course-level">
                                            {course.courseLevel}
                                        </div>
                                        <h6>
                                            {course.courseName}
                                        </h6>
                                        <p>{course.shortDescription}</p>
                                        <div className="intructor">
                                            <img src={course.instructorImage}
                                                alt={course.courseName}
                                                title={course.courseName}
                                                className="thumb" />
                                            <span>{course.instructorName}</span>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <ul className="course-meta">
                                            <li className="item">
                                                <FiUsers />
                                                <span>{course.studentsCount} Students</span>
                                            </li>
                                            <li className="item">
                                                <HiOutlineDocumentText />
                                                <span>{course.totalLessons} Lessons</span>
                                            </li>
                                            <li className="item">
                                                <BiTimeFive />
                                                <span>{course.totalTime}</span>
                                            </li>
                                        </ul>
                                        <hr className="divider" />
                                        <Link
                                            className="cta"
                                            to={course.slug}
                                        >
                                            View Course <BsArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledHomeCourses>
    )
};

export default HomeCourses
