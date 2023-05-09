/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/home/Banner"
import Strategy from "../components/home/Strategy"
import ContactSection from "../components/common/ContactSection"
import HomeCourses from "../components/home/HomeCourses"
import Testimonial from "../components/common/Testimonial"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    courses: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
            instructorImage
            instructorName
            courseLevel
            courseName
            studentsCount
            totalLessons
            totalTime
            shortDescription
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { courses } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <Seo />
      <Banner />
      <Strategy />
      <HomeCourses data={courses} />
      <ContactSection />
      <Testimonial />
    </Layout>
  )
}

export default HomePage
