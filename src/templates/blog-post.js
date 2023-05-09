import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CourseDetails from "../components/course-details/course-details"

const Post = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark

  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <CourseDetails data={data} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 148)
      frontmatter {
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        instructorImage
        instructorName
        courseLevel
        courseName
        studentsCount
        totalLessons
        totalTime
        totalQuizzes
        shortDescription
        overview {
          courseDescription
          whatLearn {
            list
          }
          prerequisites {
            list
          }
        }
        curriculum {
          chapter
          chapterDetails
          description
          details {
            detail
            duration
          }
        }
        instructor {
          name
          profession
          totalCourses
          studentsLearned
          description
        }
        faqs {
          question
          answer
        }
      }
    }
  }
`
