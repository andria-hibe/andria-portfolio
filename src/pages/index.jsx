import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import {
  TiSocialGithubCircular,
  TiSocialAtCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti'

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
  border: 0.1em solid #828282;

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

export default function Home() {
  return (
    <MainContainer>
      <GlobalStyles gradient whitetext noscroll />
      <SEO title="Andria Hibe" />
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
