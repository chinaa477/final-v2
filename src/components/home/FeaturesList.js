import React from "react"
import img1 from "../../images/features-list/img-1.png"
import img2 from "../../images/features-list/img-2.png"
import img31 from "../../images/features-list/img-3.1.png"
import img32 from "../../images/features-list/img-3.2.png"
import img41 from "../../images/features-list/img-4.1.png"
import img42 from "../../images/features-list/img-4.2.png"
import { Autoplay, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { StyledFeaturesList } from "./styles"
import _ from "lodash"

const data = [
  {
    image: img1,
    heading: "Blended learning platform that can be customised to your needs",
    description:
      "Designed by teachers, for teachers. Erudex supports live classes, lesson planning, and on-demand class recordings giving teachers an intuitive way to share lessons & interact with their students.",
    list: [
      {
        heading: "For Students",
        description:
          "With animated video lessons, quizzes, and interactive study material, help students engage in learning and study at their own pace.",
      },
      {
        heading: "For Teachers",
        description:
          "Help teachers save time through centralized lesson planning & digital library, and dedicated tools that boost their teaching efficiency",
      },
      {
        heading: "For Administration",
        description:
          "Manage your grades, sections, students & teachers from one place, and assign micro-schedules, track usage or schedule tests",
      },
    ],
  },
  {
    image: img2,
    heading: "Foundation & Competitive Programs for your school.",
    description:
      "Erudex E-Foundation, E-Techno & Competitive programs helps students prepare for exams like JEE, NEET, NTSE & others. The platform is designed  to make student's master concepts related to STEM.",
    list: [
      {
        heading: "Focus on STEM",
        description:
          "An Integrated program gives your students a robust program that will help them master STEM subjects. Perform better in boards & in competitive exams.",
      },
      {
        heading: "Prepared by IITians for Your School",
        description:
          "Our flagship programs are designed by IITians & academic experts. Seamlessly integrated into your academic programs to ensure better outcomes.",
      },
      {
        heading: "Teacher Training Programs & Hand-holding",
        description:
          "Your teachers are thoroughly trained to use our platform. Our team works closely with your teachers to help plan and map their teaching to micro-schedules.",
      },
    ],
  },
  {
    image: [img31, img32],
    heading:
      "Help teachers build, and share online tests & assignments more efficiently.",
    description:
      "Teachers can now create tests, assignments, worksheets in minutes using our readymade question bank of over 5,00,000+ questions.",
    list: [
      {
        heading: "5,00,000+ Questions & Pre-loaded Tests",
        description:
          "Access pre-loaded tests or generate instant online exams & assignments mapped to your curriculums with the click of a button.",
      },
      {
        heading: "Online & Offline Exams Made Simple",
        description:
          "Picking questions, conducting tests & declaring results is now simpler than ever. OMR integration let’s you make the most out of your offline tests.",
      },
      {
        heading: "Weekly Testing & Real-time Reports",
        description:
          "Our assesments test the performance of individual students, the overall progress of the class, ensuring improved outcomes.",
      },
    ],
  },
  {
    image: [img41, img42],
    heading: "Actionable insights that teachers and students need to succeed.",
    description:
      "Teachers can use customised reports to analyse each student's strengths, weaknesses, subject gaps and recurring patterns to provide actionable feedback right when students need it the most.",
    list: [
      {
        heading: "Usage & Performance Metrics",
        description:
          "Usage reports help teachers & management understand student preferences, which helps them adapt their teaching methods to better help their students.",
      },
      {
        heading: "Dedicated Progress Dashboards",
        description:
          "Find live classes conducted, track tests and assignments taken for your students & understand how much syllabus your teachers complete using our content.",
      },
      {
        heading: "Track subjects & assist Teachers",
        description:
          "Teachers can track content usage on the platform, view live classes conducted for each subject, and understand the frequency of tests for a subject or section.",
      },
    ],
  },
]

const sliderSettings = {
  slidesPerView: "1",
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 4000,
    pauseOnMouseEnter: true,
  },
}
export default function FeaturesList() {
  return (
    <StyledFeaturesList className="features-list">
      {data.map((data, index) => (
        <div
          key={`features-${index}`}
          className="wrapper"
          id={`features-${index + 1}`}
        >
          <div className="left">
            <div className="heading">{data.heading}</div>
            <div className="description">{data.description}</div>
            <ul>
              {data.list.map((listData, index) => (
                <li key={index}>
                  <span className="heading">{listData.heading}: </span>
                  <span className="description">{listData.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            {_.isArray(data.image) ? (
              <Swiper
                modules={[Autoplay, EffectFade]}
                {...sliderSettings}
                className="banner-slider"
              >
                {data.image.map((data, index) => (
                  <SwiperSlide key={`banner-${index}`}>
                    <img src={data} alt="banner" width="100" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={data.image}
                alt=""
              />
            )}
          </div>
        </div>
      ))}
    </StyledFeaturesList>
  )
}
