import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { device, GlobalStyles } from '../components/globalStyle'

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    height: 100vh;
  }
`

const HomeHeader = styled.h1`
  font-size: 4rem;
  color: white;
  margin: 0;
  text-align: center;
`

const HomeSubtitle = styled.h2`
  font-size: 2rem;
  color: #5b5b5b;
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
  background: linear-gradient(#fbc2eb, #a6c1ee);
  padding: 50px;
  box-shadow: -0.5em -0.5em 0.1em rgba(91, 91, 91, 0.25);
  border-radius: 0.5em;
  margin: 2.5em;
  font-size: 2rem;
`

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
}

export default function Home() {
  return (
    <>
      <GlobalStyles gradient />
      <MainContainer>
        <HomeHeader>Andria Hibe</HomeHeader>
        <Divider />
        <HomeSubtitle>Full Stack Developer</HomeSubtitle>
        <CardContainer>
          <HomeCard>
            <Link to="/resume" style={linkStyle}>
              Resumé
            </Link>
          </HomeCard>
          <HomeCard>
            <Link to="/projects" style={linkStyle}>
              Projects
            </Link>
          </HomeCard>
          <HomeCard>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </HomeCard>
        </CardContainer>
      </MainContainer>
    </>
  )
}
