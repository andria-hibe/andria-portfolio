import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { device, GlobalStyles } from '../components/globalStyle'
import IconLink from '../components/icon-link'

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(#a6c1ee, #fbc2eb);
  width: 100%;
  height: 5vh;

  @media ${device.laptop} {
    width: 20em;
    height: 30em;
    flex-direction: column;
  }
`

const NavHeader = styled.h1`
  font-size: 1rem;
  color: #5b5b5b;
  margin-left: 0.5em;

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
  height: 1em;
  border: 0.1em solid #828282;

  @media ${device.laptop} {
    width: 15em;
    height: 0;
    margin: 1em 0;
  }
`

const NavLink = styled(GatsbyLink)`
  font-size: 1rem;
  padding: 1em;

  @media ${device.laptop} {
    font-size: 1.5rem;
    padding: 0.5em;
    margin-top: 0.5em;
  }
`

export default function Nav() {
  return (
    <NavContainer>
      <GlobalStyles whitetext />
      <NavLink to="/">
        <NavHeader>Andria Hibe</NavHeader>
      </NavLink>
      <Divider />
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <IconLink size="nav" />
    </NavContainer>
  )
}
