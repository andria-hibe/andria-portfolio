import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { device, GlobalStyles } from '../components/globalStyle'
import {
  TiSocialGithubCircular,
  TiSocialAtCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti'

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    180deg,
    rgba(166, 193, 238, 0.9) 0%,
    rgba(251, 194, 235, 0.9) 100%
  );
  height: 18vh;
  width: 90%;
  margin-top: 1em;

  @media ${device.tablet} {
    height: 10vh;
    width: 95%;
  }

  @media ${device.laptop} {
    width: 20em;
    height: 30em;
    margin-top: 0;
    flex-direction: column;
  }
`

const NavHeader = styled.h1`
  font-size: 1.3rem;
  color: #5b5b5b;
  margin-left: 0.5em;
  text-align: center;
  font-family: Lato;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 2rem;
    margin: 1em 0 0;
  }

  :hover {
    color: white;
  }
`

const Divider = styled.hr`
  width: 0;
  height: 3em;
  border: 0.1px solid #828282;
  margin: 0;

  @media ${device.laptop} {
    width: 15em;
    height: 0;
  }
`

const NavLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0.5em;

  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    flex-direction: column;
    margin: 0 1em;
  }
`

const NavLink = styled(GatsbyLink)`
  padding: 0.5em;
  font-family: Montserrat;

  @media ${device.mobileL} {
    font-size: 1.2rem;
    padding: 0.7em;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.75rem;
    margin-top: 0.5em;
    padding: 0.5em;
  }

  :hover {
    color: #5b5b5b;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    margin-right: 0;
    margin-bottom: 1em;
  }
`
const linkIconMobileStyle = `
  color: #555555; 
  height: 2em;
  width: 2em;
  padding: 0.1em;
`

const linkIconTabletStyle = `
  height: 2.5em;
  width: 2.5em;
  padding: 0.3em;
`

const linkIconLaptopStyle = `
  height: 3.5em;
  width: 3.5em;
  margin-bottom: 1em;
`

const StyledGithubLinkIcon = styled(TiSocialGithubCircular)`
  ${linkIconMobileStyle}

  @media ${device.tablet} {
    ${linkIconTabletStyle}
  }

  @media ${device.laptop} {
    ${linkIconLaptopStyle}
  }
`

const StyledLinkedinLinkIcon = styled(TiSocialLinkedinCircular)`
  ${linkIconMobileStyle}

  @media ${device.tablet} {
    ${linkIconTabletStyle}
  }

  @media ${device.laptop} {
    ${linkIconLaptopStyle}
  }
`

const StyledEmailLinkIcon = styled(TiSocialAtCircular)`
  ${linkIconMobileStyle}

  @media ${device.tablet} {
    ${linkIconTabletStyle}
  }

  @media ${device.laptop} {
    ${linkIconLaptopStyle}
  }
`
export default function Nav() {
  return (
    <NavContainer>
      <GlobalStyles />
      <NavLink to="/">
        <NavHeader>Andria Hibe</NavHeader>
      </NavLink>
      <Divider />
      <NavLinkContainer>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinkContainer>
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
    </NavContainer>
  )
}
