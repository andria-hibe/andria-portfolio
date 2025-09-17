import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'

const colors = {
  primary: '#4a3f35',
  secondary: '#6b5b47',
}

const fonts = {
  heading: "'Playfair Display', serif",
}

const PageHeading = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 300;
`

const IntroText = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${colors.primary};
  font-size: 1.1rem;
  font-weight: 500;
`

const AboutParagraph = styled.p`
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${colors.secondary};
  font-size: 1.05rem;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`

const SectionHeader = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${colors.primary};
  font-style: italic;
`

const HobbiesList = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${colors.secondary};
  font-size: 1.05rem;
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      aboutMePhoto: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "about_photo" }
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
      <PageHeading>A little bit about me:</PageHeading>
      <GatsbyImage
        style={{
          maxWidth: '650px',
          maxHeight: '450px',
          margin: '0 auto 2rem auto',
          display: 'block',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(75, 63, 53, 0.15)',
        }}
        image={getImage(data.aboutMePhoto)}
        alt="Photo of Andria"
      />
      <IntroText>Hi, I&apos;m Andria. 🌷</IntroText>
      <AboutParagraph>
        I&apos;m a full-stack engineer who enjoys solving tricky problems and
        turning them into simple, useful products. I care about creating
        software that feels good to use and makes life easier for the people
        behind the screen.
      </AboutParagraph>

      <AboutParagraph>
        Before moving into tech, I worked in policy advocacy, marketing, and
        event management. These roles gave me a strong foundation in
        communication, strategic thinking, and stakeholder engagement. I still
        draw on those skills every day as an engineer.
      </AboutParagraph>

      <SectionHeader>A few things about me outside of work:</SectionHeader>

      <HobbiesList>
        🌊 I love diving. It&apos;s a mix of calm and discovery that always
        leave me wanting more. Exploring underwater is one of my favourite
        things to do in the world.
        <br />
        🧶 I&apos;m drawn to detail-oriented hobbies that reward focus and
        patience and you will often find me working on pottery, miniatures, and
        embroidery.
        <br />
        🏔️ I enjoy getting outdoors to hike, surf, and ski whenever I can. These
        activities push me out of my comfort zone in the best way possible and I
        love a good adventure!
        <br />
        🌿 I&apos;m slowly filling my home with plants until it looks and feels
        like a jungle. If I wasn&apos;t a software engineer, I would probably be
        a horticulturist.
        <br />
        📚 I love reading books from all over the world. There&apos;s something
        magical about how stories can transport you into completely different
        worlds and perspectives.
        <br />
        🍫 I&apos;m a decent baker, it&apos;s one of my favorite ways to relax
        and it makes my home feel extra cozy.
      </HobbiesList>

      <AboutParagraph>
        At the heart of it, I love creating things, whether that&apos;s a piece
        of software, a ceramic bowl, or something fresh out of the oven.
        I&apos;m curious by nature and enjoy learning new skills, solving
        problems, and finding better ways of doing things.
      </AboutParagraph>
    </SplitLayout>
  )
}

export function Head() {
  return (
    <SEO title="About Andria" description="There's something about Andria" />
  )
}
