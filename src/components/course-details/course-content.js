import React from "react"
import StyledCourseContent from "./style/course-content"
import { Tab, Disclosure } from '@headlessui/react'
import { AiOutlineCheckCircle } from "react-icons/ai"
import { MdOutlineQuiz, MdOutlineAccessTime } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im"
import { FiBarChart2 } from "react-icons/fi"
import { BiBookAlt } from "react-icons/bi"
import { HiOutlineChevronRight, HiOutlineDocumentText } from "react-icons/hi"
import Faq from "./faq"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'

const url = typeof window !== 'undefined' ? window.location.href : '';
const CourseContent = ({ details }) => {
    return (
        <StyledCourseContent>
            <div className="main-container">
                <div className="left">
                    <Tab.Group>
                        <Tab.List className="tabs-list">
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Overview</div>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Curriculum</div>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Instructor</div>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    <div className={`${selected ? 'selected ' : ''}button`}>Faqs</div>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <h4>Course Description</h4>
                                    <div className="description" dangerouslySetInnerHTML={{ __html: details.overview.courseDescription }} />
                                    <h4>What you’ll learn</h4>
                                    <ul>
                                        {details.overview.whatLearn.map((data, index) => (
                                            <li key={index}>
                                                <AiOutlineCheckCircle className="icon" />
                                                <span>
                                                    {data.list}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h4>Prerequisites</h4>
                                    <ul>
                                        {details.overview.prerequisites.map((data, index) => (
                                            <li key={index}>
                                                <AiOutlineCheckCircle className="icon" />
                                                <span>{data.list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <div className="disclosure-wrapper">
                                        {details.curriculum.map((data, index) => (
                                            <Disclosure as="div" defaultOpen className="item" key={index}>
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className={`${open ? 'active ' : ''}button`}>
                                                            <div className="course-syllabus">
                                                                <HiOutlineChevronRight className="icon" />
                                                                <h5>{data.chapter}</h5>
                                                            </div>
                                                            <div className="details">
                                                                {data.chapterDetails}
                                                            </div>
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className={`${open ? 'active ' : ''}panel`}>
                                                            <div className="description">
                                                                {data.description}
                                                            </div>
                                                            <ul className="list">
                                                                {data.details.map((subData, index) => (
                                                                    <li key={`subData-${index}`}>
                                                                        <div className="sub-course">
                                                                            <HiOutlineDocumentText className="icon" />
                                                                            <div>{subData.detail}</div>
                                                                        </div>
                                                                        <div className="duration">
                                                                            <span>{subData.duration}</span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <div className="instructor-details">
                                        <div className="instructor-name">
                                            {details.instructor.name}
                                        </div>
                                        <div className="expert">
                                            {details.instructor.profession}
                                        </div>
                                        <ul className="details">
                                            <li>
                                                <HiOutlineDocumentText className="icon" />
                                                <span className="desc">{details.instructor.totalCourses}</span>
                                            </li>
                                            <li>
                                                <span className="divider"></span>
                                            </li>
                                            <li>
                                                <BsPeople className="icon" />
                                                <span className="desc">{details.instructor.studentsLearned}</span>
                                            </li>
                                        </ul>
                                        <p>
                                            {details.instructor.description}
                                        </p>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="tab-panel">
                                    <Faq faqData={details.faqs} />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
                <div className="right">
                    <div className="course-sidebar">
                        <ul className="details">
                            <li>
                                <div className="label">
                                    <MdOutlineAccessTime className="icon" />
                                    <span>Duration</span>
                                </div>
                                <div className="details">
                                    {details.totalTime}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <BiBookAlt className="icon" />
                                    <span>Lessons</span>
                                </div>
                                <div className="details">
                                    {details.totalLessons}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <MdOutlineQuiz className="icon" />
                                    <span>Quizzes</span>
                                </div>
                                <div className="details">
                                    {details.totalQuizzes}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <BsPeople className="icon" />
                                    <span>Max Students</span>
                                </div>
                                <div className="details">
                                    {details.studentsCount}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    <FiBarChart2 className="icon" />
                                    <span>Skill Level</span>
                                </div>
                                <div className="details">
                                    {details.courseLevel}
                                </div>
                            </li>
                        </ul>
                        <ul className="share">
                            <li className="label">
                                Share:
                            </li>
                            <li className="icon">
                                <FacebookShareButton
                                    url={url}
                                >
                                    <ImFacebook />
                                </FacebookShareButton>
                            </li>
                            <li className="icon">
                                <LinkedinShareButton
                                    url={url}
                                >
                                    <ImLinkedin2 />
                                </LinkedinShareButton>
                            </li>
                            <li className="icon">
                                <TwitterShareButton
                                    url={url}
                                >
                                    <ImTwitter />
                                </TwitterShareButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledCourseContent>
    )
};

export default CourseContent
