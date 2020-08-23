import React from 'react'
import styled from 'styled-components'
import { device } from '../components/globalStyle'

import Nav from '../split-layout/nav'

const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;

  @media ${device.laptop} {
    display: grid;
    justify-items: center;
    grid-template-columns: 30% auto;
    overflow: hidden;
  }
`

const NavLayout = styled.div`
  @media ${device.laptop} {
    grid-column: 1;
  }
`

const PageLayout = styled.div`
  width: 100%;
  padding: 0 2em 3em;

  @media ${device.laptop} {
    overflow-y: scroll;
    grid-column: 2;
    padding: 0 5em 3em;
  }
`

const ScrollToTop = styled.div`
  font-size: 0;

  @media (max-width: 1023px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: white;
    text-align: center;
    font-size: 1rem;
  }

  :hover {
    color: #555555;
  }
`

export default function SplitLayout(props) {
  return (
    <ContentContainer>
      <NavLayout>
        <a name="top">
          <Nav />
        </a>
      </NavLayout>
      <PageLayout>
        {props.children}
        <a href="#top">
          <ScrollToTop>Scroll to the top</ScrollToTop>
        </a>
      </PageLayout>
    </ContentContainer>
  )
}
