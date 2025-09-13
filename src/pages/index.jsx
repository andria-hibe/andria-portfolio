import React from 'react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled, { createGlobalStyle } from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import {
  TiSocialGithubCircular,
  TiSocialAtCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti'

const MonogramFont = createGlobalStyle`
  @font-face {
    font-family: 'Monogram';
    src: url('../fonts/monogram.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1.5em 1em;
`

const HomeHeader = styled.h1`
  font-size: 4.5rem;
  color: white;
  margin: 0;
`

const HomeSubheading = styled.h2`
  font-size: 2rem;
  margin: 0;
`

const Divider = styled.hr`
  width: 20em;
  border: 0.1px solid #828282;

  @media ${device.laptop} {
    width: 30em;
  }
`

const CardContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`

const HomeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 3em;
  border-radius: 0.5em;
  border: 0.1em solid #828282;
  margin: 1em;
  font-size: 2rem;
  font-family: Montserrat;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
`

const StyledGithubLinkIcon = styled(TiSocialGithubCircular)`
  color: #555555;
  height: 4.5em;
  width: 4.5em;
`

const StyledLinkedinLinkIcon = styled(TiSocialLinkedinCircular)`
  color: #555555;
  height: 4.5em;
  width: 4.5em;
`

const StyledEmailLinkIcon = styled(TiSocialAtCircular)`
  color: #555555;
  height: 4.5em;
  width: 4.5em;
`

const TopRightCorner = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
`

const CornerRabbitLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const PixelRabbitIcon = styled(GatsbyImage)`
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 0.3rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
`

const MonogramText = styled.p`
  font-family: 'Monogram', monospace;
  font-size: 0.8rem;
  color: white;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      pixelRabbit: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "pixel_rabbit" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80, layout: FIXED, quality: 100)
        }
      }
    }
  `)

  const pixelRabbitImage = getImage(data.pixelRabbit)

  return (
    <MainContainer>
      <MonogramFont />
      <GlobalStyles gradient whitetext noscroll />
      <HomeHeader>Andria Hibe</HomeHeader>
      <Divider />
      <HomeSubheading>Full Stack Developer</HomeSubheading>
      <IconContainer>
        <a href="mailto:andriacohibe@gmail.com">
          <StyledEmailLinkIcon />
        </a>
        <a href="https://github.com/andria-hibe">
          <StyledGithubLinkIcon />
        </a>
        <a href="https://www.linkedin.com/in/andriacristiahibe/">
          <StyledLinkedinLinkIcon />
        </a>
      </IconContainer>
      <TopRightCorner>
        <CornerRabbitLink
          href="https://andria-hibe.github.io/2d-portfolio-cottage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MonogramText>Check out my interactive portfolio!</MonogramText>
          <PixelRabbitIcon
            image={pixelRabbitImage}
            alt="Interactive Portfolio"
          />
        </CornerRabbitLink>
      </TopRightCorner>
      <CardContainer>
        <HomeCard>
          <GatsbyLink to="/resume">Resume</GatsbyLink>
        </HomeCard>
        <HomeCard>
          <GatsbyLink to="/projects">Projects</GatsbyLink>
        </HomeCard>
        <HomeCard>
          <GatsbyLink to="/about">About</GatsbyLink>
        </HomeCard>
      </CardContainer>
    </MainContainer>
  )
}

export function Head() {
  return <SEO title="Andria Hibe" />
}
