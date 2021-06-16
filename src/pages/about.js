import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          Having a fine art background had enabled her to see how to help 
          the learning, fundamentals of Design. To encourage originality,
          through introducing various visual based problems, creative
          thinking is inculcated in the learner. Launching the imagination in
          2-Dimensional form and 3-Dimensional form.
          <br />
          <br />
          Transforming the non-tangible to tangible form. Understanding
          our indigenous cultural forms and its materials and contextualizing
          them. About 10 crafts are been studied, and guided to give a new
          form for its applications to increase the market value. Institution
          based projects are done. Practicing artist had two one man shows,
          and participated in several exhibitions nationally and
          internationally. Written researched papers.
        </TextBody>
        <Button href="mailto:lakshmi.rachupalli@gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/RandomPhoto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
