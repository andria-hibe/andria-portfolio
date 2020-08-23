import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import { GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      aboutMePhoto: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "about-photo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 650, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SplitLayout>
      <SEO
        title="A little bit about me"
        description="There's something about Andria"
      />
      <GlobalStyles />
      <h1>A little bit about me:</h1>
      <Img
        style={{
          maxWidth: '650px',
          maxHeight: '450px',
          margin: '0 auto',
        }}
        fluid={data.aboutMePhoto.childImageSharp.fluid}
        alt="Photo of Andria"
      />
      <p>I am a full stack web developer based in New Zealand.</p>

      <p>
        I’ve always loved problem solving and tinkering with things to figure
        out how they work which is why after a couple of years working in
        advocacy, marketing, and events—when I finally had the resources to do
        so—I looked into software development.
      </p>
      <p>
        I enrolled in an intensive web development bootcamp where we were taught
        how to create our own web applications through completing projects
        following Agile and Scrum principles.
      </p>
      <p>
        After the bootcamp, I became interested in contributing to free
        open-source software communities and was accepted as an intern for the
        Humanitarian OpenStreetMap Team through the Outreachy Programme where I
        was tasked to create a Slack app to improve their internal
        communications and increase efficiency.
      </p>
      <p>
        But work is not all there is to life and away from my keyboard, you can
        find me travelling, trying out new food, making miniatures, tending to
        my plants, and going on meadering walks.
      </p>
    </SplitLayout>
  )
}
