import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'

const IntroText = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
`

const AboutParagraph = styled.p`
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.05rem;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`

const SectionHeader = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.1rem;
`

const HobbiesList = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.05rem;
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      aboutMePhoto: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "about-photo" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 650, height: 450, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <SplitLayout>
      <GlobalStyles />
      <h1>A little bit about me:</h1>
      <GatsbyImage
        style={{
          maxWidth: '650px',
          maxHeight: '450px',
          margin: '0 auto',
          display: 'block',
        }}
        image={getImage(data.aboutMePhoto)}
        alt="Photo of Andria"
      />
      <IntroText>Hi, I'm Andria. 🌷</IntroText>
      <AboutParagraph>
        I'm a full-stack engineer who enjoys solving tricky problems and turning
        them into simple, useful products. I care about creating software that
        feels good to use and makes life easier for the people behind the
        screen.
      </AboutParagraph>

      <AboutParagraph>
        Before moving into tech, I worked in policy advocacy, marketing, and
        event management. These roles gave me a strong foundation in
        communication, strategic thinking, and stakeholder engagement. I still
        draw on those skills every day as an engineer.
      </AboutParagraph>

      <SectionHeader>A few things about me outside of work:</SectionHeader>

      <HobbiesList>
        🌊 I love diving. It's a mix of calm and discovery that always leaves me
        wanting more.
        <br />
        🧶 I'm drawn to detail-oriented hobbies that reward focus and patience
        and you will often find me working on pottery, miniatures, or
        embroidery.
        <br />
        🏔️ I love getting outdoors to hike, surf, and ski whenever I can.
        <br />
        🌿 I'm slowly filling my home with plants until it looks and feels like
        a jungle.
        <br />
        📚 I love reading fiction from all over the world and the way it gives
        me a glimpse into another way of life.
        <br />
        🍫 I love baking, it's one of my favorite ways to relax and it makes
        home feel extra cozy
      </HobbiesList>

      <AboutParagraph>
        At the heart of it, I love creating things, whether that's a piece of
        software, a ceramic bowl, or something fresh out of the oven. I'm
        curious by nature and enjoy learning new skills, solving problems, and
        finding better ways of doing things.
      </AboutParagraph>
    </SplitLayout>
  )
}

export function Head() {
  return (
    <SEO
      title="A little bit about me"
      description="There's something about Andria"
    />
  )
}
