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
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    90deg,
    rgba(166, 193, 238, 0.95) 0%,
    rgba(251, 194, 235, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: 0 2rem;
    height: 4.5rem;
  }

  @media ${device.laptop} {
    padding: 0 3rem;
    height: 5rem;
  }
`

const NavHeader = styled.h1`
  font-size: 1.2rem;
  color: #5b5b5b;
  margin: 0;
  text-align: left;
  font-family: Lato;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

const NavLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media ${device.tablet} {
    gap: 1rem;
  }

  @media ${device.laptop} {
    gap: 1.5rem;
  }
`

const NavLink = styled(GatsbyLink)`
  padding: 0.5rem 0.75rem;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
  }

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 0.7rem 1.2rem;
    border-radius: 0.7rem;
  }

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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    color: #5b5b5b !important;
    background-color: rgba(255, 255, 255, 0.25) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`

const LogoLink = styled(GatsbyLink)`
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: transparent !important;
  }

  &:hover h1 {
    color: white !important;
    transform: scale(1.03);
  }

  &:active h1 {
    transform: scale(1.01);
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;

  @media ${device.tablet} {
    gap: 0.2rem;
  }

  @media ${device.laptop} {
    gap: 0.3rem;
  }
`
const linkIconMobileStyle = `
  color: #555555; 
  height: 2rem;
  width: 2rem;
  padding: 0.25rem;
  transition: all 0.2s ease;
`

const linkIconTabletStyle = `
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.3rem;
`

const linkIconLaptopStyle = `
  height: 3rem;
  width: 3rem;
  padding: 0.4rem;
`

const StyledGithubLinkIcon = styled(TiSocialGithubCircular)`
  ${linkIconMobileStyle}

  @media ${device.tablet} {
    ${linkIconTabletStyle}
  }

  @media ${device.laptop} {
    ${linkIconLaptopStyle}
  }

  &:hover {
    color: white !important;
    fill: white !important;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
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

  &:hover {
    color: white !important;
    fill: white !important;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
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

  &:hover {
    color: white !important;
    fill: white !important;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
`
export default function Nav() {
  return (
    <NavContainer>
      <GlobalStyles />
      <LogoLink to="/">
        <NavHeader>Andria Hibe</NavHeader>
      </LogoLink>
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
