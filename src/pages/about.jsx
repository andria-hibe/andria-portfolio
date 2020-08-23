import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { device, GlobalStyles } from '../components/globalStyle'
import Nav from '../split-layout/nav'

const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;

  @media ${device.laptop} {
    display: grid;
    justify-items: center;
    grid-template-columns: 30% auto;
  }
`

const AboutLayout = styled.div`
  padding: 0 1em 3em;

  @media ${device.laptop} {
    padding: 0 10em 3em;
  }
`

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #5b5b5b;
`

const Paragraph = styled.p`
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
`

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
    <ContentContainer>
      <GlobalStyles />
      <Nav />
      <AboutLayout>
        <Heading>A little bit about me:</Heading>
        <Img
          style={{
            maxWidth: '650px',
            maxHeight: '450px',
            margin: '0 auto',
          }}
          fluid={data.aboutMePhoto.childImageSharp.fluid}
          alt="Photo of Andria"
        />
        <Paragraph>
          I am a full stack web developer based in New Zealand.
        </Paragraph>

        <Paragraph>
          I’ve always loved problem solving and tinkering with things to figure
          out how they work which is why after a couple of years working in
          advocacy, marketing, and events—when I finally had the resources to do
          so—I looked into software development.
        </Paragraph>
        <Paragraph>
          I enrolled in an intensive 14-week coding bootcamp where we were
          taught how to create our own web applications through completing
          projects following Agile and Scrum principles.
        </Paragraph>
        <Paragraph>
          After the bootcamp, I became interested in contributing to free
          open-source software communities and was accepted as an intern for the
          Humanitarian OpenStreetMap Team (link to website) through the
          Outreachy Programme (link to wiki) where I was tasked to create a
          Slack app to improve their internal communications and increase
          efficiency.
        </Paragraph>
        <Paragraph>
          But work is not all there is to life and away from my keyboard, you
          can find me travelling, trying out new food, making miniatures,
          tending to my plants, and going on meadering walks.
        </Paragraph>
      </AboutLayout>
    </ContentContainer>
  )
}
