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

const FadeInAnimation = styled.div`
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const StaggeredAnimation = styled.div`
  animation: fadeInUp 0.8s ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 2000;

  &:focus {
    top: 6px;
  }
`

const FocusableElement = styled.div`
  &:focus-within {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
    border-radius: 4px;
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
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  margin: 0;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 3.5rem;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }

  @media ${device.laptop} {
    font-size: 4.5rem;
  }
`

const HomeSubheading = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    font-size: 2rem;
  }
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

const HomeCard = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 3em;
  border-radius: 0.8em;
  border: 0.1em solid rgba(255, 255, 255, 0.2);
  margin: 1em;
  font-size: 2rem;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.2);
    color: #828282;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    gap: 1rem;
  }
`

const SocialIconLink = styled.a`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`

const StyledGithubLinkIcon = styled(TiSocialGithubCircular)`
  color: #555555;
  height: 3.5em;
  width: 3.5em;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    height: 4.5em;
    width: 4.5em;
  }

  ${SocialIconLink}:hover & {
    color: #333333;
  }
`

const StyledLinkedinLinkIcon = styled(TiSocialLinkedinCircular)`
  color: #555555;
  height: 3.5em;
  width: 3.5em;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    height: 4.5em;
    width: 4.5em;
  }

  ${SocialIconLink}:hover & {
    color: #0077b5;
  }
`

const StyledEmailLinkIcon = styled(TiSocialAtCircular)`
  color: #555555;
  height: 3.5em;
  width: 3.5em;
  transition: all 0.3s ease;

  @media ${device.tablet} {
    height: 4.5em;
    width: 4.5em;
  }

  ${SocialIconLink}:hover & {
    color: #ea4335;
  }
`

const TopRightCorner = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  display: flex;

  @media ${device.tablet} {
    top: 2rem;
    right: 2rem;
  }
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
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <MainContainer>
        <MonogramFont />
        <GlobalStyles gradient whitetext noscroll />

        <main id="main-content" role="main">
          <FadeInAnimation>
            <HomeHeader>Andria Hibe</HomeHeader>
          </FadeInAnimation>

          <StaggeredAnimation delay="0.2s">
            <Divider />
          </StaggeredAnimation>

          <StaggeredAnimation delay="0.4s">
            <HomeSubheading>Full Stack Developer</HomeSubheading>
          </StaggeredAnimation>

          <StaggeredAnimation delay="0.6s">
            <IconContainer role="list" aria-label="Social media links">
              <SocialIconLink
                href="mailto:andriacohibe@gmail.com"
                aria-label="Send email to Andria Hibe"
                role="listitem"
              >
                <StyledEmailLinkIcon />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/andria-hibe"
                aria-label="Visit Andria Hibe's GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                <StyledGithubLinkIcon />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/andriacristiahibe/"
                aria-label="Visit Andria Hibe's LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                <StyledLinkedinLinkIcon />
              </SocialIconLink>
            </IconContainer>
          </StaggeredAnimation>

          <StaggeredAnimation delay="0.8s">
            <CardContainer role="navigation" aria-label="Main navigation">
              <HomeCard to="/resume" aria-label="View resume page">
                Resume
              </HomeCard>
              <HomeCard to="/projects" aria-label="View projects page">
                Projects
              </HomeCard>
              <HomeCard to="/about" aria-label="View about page">
                About
              </HomeCard>
            </CardContainer>
          </StaggeredAnimation>
        </main>

        <TopRightCorner>
          <CornerRabbitLink
            href="https://andria-hibe.github.io/2d-portfolio-cottage/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit interactive 2D portfolio cottage"
          >
            <MonogramText>Check out my interactive portfolio!</MonogramText>
            <PixelRabbitIcon
              image={pixelRabbitImage}
              alt="Pixel art rabbit icon"
              loading="eager"
            />
          </CornerRabbitLink>
        </TopRightCorner>
      </MainContainer>
    </>
  )
}

export function Head() {
  return (
    <>
      <SEO
        title="Andria Hibe - Full Stack Developer"
        description="Portfolio of Andria Hibe, a passionate Full Stack Developer specializing in modern web technologies. View my projects, resume, and interactive portfolio."
      />
      <link
        rel="preload"
        href="../fonts/monogram.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#a6c1ee" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../images/pixel_rabbit.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@andria-hibe" />
    </>
  )
}
