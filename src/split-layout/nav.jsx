import React from 'react'
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { device, GlobalStyles } from '../components/globalStyle'
import {
  TiSocialGithubCircular,
  TiSocialAtCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti'

const colors = {
  primary: '#faf6f0',
  secondary: '#faf7f2',
  accent: '#4a3f35',
  background: '#f5f0e8',
  white: '#ffffff',
}

const fonts = {
  primary: "'Nunito', sans-serif",
  heading: "'Playfair Display', serif",
}

const transitions = {
  smooth: 'all 0.3s ease',
  hover:
    'background-color 0.4s ease, color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease',
  shimmer: 'left 0.7s ease',
}

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    135deg,
    rgba(212, 165, 165, 0.85) 0%,
    rgba(169, 68, 66, 0.8) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  height: 6rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  box-shadow:
    0 8px 32px rgba(75, 63, 53, 0.12),
    0 2px 8px rgba(169, 68, 66, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media ${device.mobileM} {
    padding: 0.5rem 0.85rem;
  }

  @media ${device.mobileL} {
    padding: 0.5rem 1rem;
  }

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
  font-size: 0.9rem;
  color: ${colors.primary};
  margin: 0;
  text-align: left;
  font-family: ${fonts.heading};
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(75, 63, 53, 0.3);
  letter-spacing: 0.5px;
  user-select: none;
  white-space: nowrap;
  min-width: fit-content;
  flex-shrink: 0;

  @media ${device.mobileS} {
    font-size: 0.95rem;
  }

  @media ${device.mobileM} {
    font-size: 1.1rem;
  }

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

const InteractivePortfolioTab = styled.div`
  position: sticky;
  top: 6rem;
  right: 1rem;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  margin-top: -0.5rem;
  width: 100%;
  pointer-events: none;

  @media ${device.tablet} {
    top: 4.5rem;
    right: 2rem;
  }

  @media ${device.laptop} {
    top: 5rem;
    right: 3rem;
  }
`

const NavLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  justify-content: center;
  flex: 1;

  @media ${device.mobileS} {
    gap: 0.2rem;
  }

  @media ${device.mobileM} {
    gap: 0.25rem;
  }

  @media ${device.mobileL} {
    gap: 0.3rem;
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 0.8rem;
    justify-content: flex-end;
    flex: none;
  }

  @media ${device.laptop} {
    gap: 1.2rem;
  }
`

const NavLink = styled(GatsbyLink)`
  padding: 0.25rem 0.8rem;
  font-family: ${fonts.primary};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.3rem;
  transition: ${transitions.hover};
  position: relative;
  overflow: hidden;
  color: ${colors.secondary};
  text-align: center;
  white-space: nowrap;
  min-width: fit-content;
  width: auto;

  @media ${device.mobileS} {
    padding: 0.3rem 0.9rem;
    font-size: 0.78rem;
    border-radius: 0.35rem;
  }

  @media ${device.mobileM} {
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    border-radius: 0.4rem;
  }

  @media ${device.mobileL} {
    padding: 0.35rem 1.1rem;
    font-size: 0.85rem;
    border-radius: 0.45rem;
  }

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
    transition: ${transitions.shimmer};
  }

  &:hover {
    color: ${colors.accent} !important;
    background-color: ${colors.background} !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: 2px solid #d4a5a5;
    outline-offset: 3px;
    border-radius: 0.6rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &.active {
    color: ${colors.accent} !important;
    background-color: ${colors.background} !important;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
    pointer-events: none;
    cursor: default;

    &:hover {
      transform: none !important;
      box-shadow: none !important;
    }

    &::before {
      display: none;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  min-width: fit-content;

  @media ${device.mobileM} {
    gap: 0.15rem;
  }

  @media ${device.mobileL} {
    gap: 0.2rem;
  }

  @media ${device.tablet} {
    gap: 0.3rem;
  }

  @media ${device.laptop} {
    gap: 0.4rem;
  }
`
// Base icon style to be shared across all social media icons
const baseLinkIconStyle = `
  color: ${colors.secondary};
  height: 1.8rem;
  width: 1.8rem;
  padding: 0.2rem;
  transition: ${transitions.smooth};

  @media ${device.tablet} {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0.3rem;
  }

  @media ${device.laptop} {
    height: 3rem;
    width: 3rem;
    padding: 0.4rem;
  }

  &:hover {
    color: ${colors.white} !important;
    fill: ${colors.white} !important;
    transform: scale(1.1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &:active {
    transform: scale(1.05);
  }
`

const InteractivePortfolioLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  font-family: ${fonts.primary};
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s ease,
    box-shadow 0.3s ease;
  padding: 0.3rem 0.5rem 0.6rem 0.5rem;
  background: linear-gradient(
    135deg,
    rgba(169, 68, 66, 0.8) 0%,
    rgba(169, 68, 66, 0.9) 100%
  );
  border-radius: 0 0 0.8rem 0.8rem;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  width: fit-content;
  margin-right: 0.7rem;
  pointer-events: auto;
  position: relative;
  overflow: hidden;
  transform: translateY(-0.5rem);
  box-shadow:
    0 3px 8px rgba(75, 63, 53, 0.25),
    0 1px 3px rgba(169, 68, 66, 0.1);

  /* Mobile-specific button enhancements */
  @media (max-width: 767px) {
    box-shadow:
      0 4px 12px rgba(75, 63, 53, 0.2),
      0 2px 6px rgba(169, 68, 66, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);

    /* Add subtle glow effect for mobile */
    &::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      border-radius: inherit;
      z-index: -1;
      opacity: 0.5;
    }
  }

  @media ${device.mobileM} {
    gap: 0.3rem;
    padding: 0.35rem 0.6rem 0.7rem 0.6rem;
    margin-right: 0.6rem;
    transform: translateY(-0.5rem);
  }

  @media ${device.mobileL} {
    gap: 0.35rem;
    padding: 0.4rem 0.7rem 0.8rem 0.7rem;
    border-radius: 0 0 0.8rem 0.8rem;
    margin-right: 0.7rem;
    transform: translateY(-0.55rem);
  }

  @media ${device.tablet} {
    gap: 0.4rem;
    padding: 0.4rem 0.8rem 0.8rem 0.8rem;
    border-radius: 0 0 0.9rem 0.9rem;
    margin-right: 0.8rem;
    transform: translateY(-0.6rem);
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
    color: ${colors.primary} !important;
    background: linear-gradient(
      135deg,
      rgba(212, 165, 165, 0.9) 0%,
      rgba(169, 68, 66, 0.85) 100%
    ) !important;
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-0.7rem) scale(1.02);
    box-shadow: 0 8px 24px rgba(75, 63, 53, 0.25);

    &::before {
      left: 100%;
    }

    @media ${device.mobileM} {
      transform: translateY(-0.8rem) scale(1.02);
    }

    @media ${device.mobileL} {
      transform: translateY(-0.85rem) scale(1.02);
    }

    @media ${device.tablet} {
      transform: translateY(-0.9rem) scale(1.02);
    }
  }

  &:active {
    transform: translateY(-0.5rem) scale(0.98);
    box-shadow: 0 4px 12px rgba(75, 63, 53, 0.2);

    @media (max-width: 767px) {
      box-shadow:
        0 2px 8px rgba(75, 63, 53, 0.25),
        inset 0 2px 4px rgba(0, 0, 0, 0.1);
      border-color: rgba(255, 255, 255, 0.4);
    }
  }

  @media ${device.laptop} {
    padding: 0.5rem 1rem 1rem 1rem;
    gap: 0.5rem;
    margin-right: 1.5rem;
  }

  @media ${device.laptop} {
    margin-right: 3rem;
  }
`

const PixelRabbitIcon = styled(GatsbyImage)`
  width: 1.3rem !important;
  height: 1.3rem !important;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  transform: translateY(0.2rem);

  @media ${device.mobileM} {
    width: 1.4rem !important;
    height: 1.4rem !important;
    transform: translateY(0.2rem);
  }

  @media ${device.mobileL} {
    width: 1.5rem !important;
    height: 1.5rem !important;
    transform: translateY(0.25rem);
  }

  @media ${device.tablet} {
    width: 2rem !important;
    height: 2rem !important;
    transform: translateY(0.25rem);
  }
`

const InteractivePortfolioText = styled.span`
  font-family: ${fonts.primary};
  font-size: 0.65rem;
  color: ${colors.secondary};
  white-space: nowrap;
  transition: color 0.3s ease;
  transform: translateY(0.2rem);

  @media ${device.mobileM} {
    font-size: 0.7rem;
    transform: translateY(0.2rem);
  }

  @media ${device.mobileL} {
    font-size: 0.75rem;
    transform: translateY(0.25rem);
  }

  @media ${device.tablet} {
    font-size: 0.85rem;
    transform: translateY(0.25rem);
  }
`

const StyledGithubLinkIcon = styled(TiSocialGithubCircular)`
  ${baseLinkIconStyle}
`

const StyledLinkedinLinkIcon = styled(TiSocialLinkedinCircular)`
  ${baseLinkIconStyle}
`

const StyledEmailLinkIcon = styled(TiSocialAtCircular)`
  ${baseLinkIconStyle}
`
export default function Nav() {
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

  // Helper function to determine if a link is active
  const isActive = path => {
    if (typeof window === 'undefined') return false
    const pathname = window.location.pathname
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <NavContainer>
        <GlobalStyles />
        <NavHeader>Andria Hibe</NavHeader>
        <NavLinkContainer>
          <NavLink
            to="/"
            className={isActive('/') ? 'active' : ''}
            onClick={isActive('/') ? e => e.preventDefault() : undefined}
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={isActive('/projects') ? 'active' : ''}
            onClick={
              isActive('/projects') ? e => e.preventDefault() : undefined
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={isActive('/about') ? 'active' : ''}
            onClick={isActive('/about') ? e => e.preventDefault() : undefined}
          >
            About
          </NavLink>
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
      <InteractivePortfolioTab>
        <InteractivePortfolioLink
          href="https://andria-hibe.github.io/2d-portfolio-cottage/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit interactive 2D portfolio cottage"
        >
          <InteractivePortfolioText>
            Visit my cottage portfolio
          </InteractivePortfolioText>
          <PixelRabbitIcon
            image={pixelRabbitImage}
            alt="Pixel art rabbit icon"
            loading="eager"
          />
        </InteractivePortfolioLink>
      </InteractivePortfolioTab>
    </>
  )
}
