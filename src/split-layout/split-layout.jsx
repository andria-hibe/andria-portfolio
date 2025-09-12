import React from 'react'
import styled from 'styled-components'
import { device, GlobalStyles } from '../components/globalStyle'

import Nav from '../split-layout/nav'

const ContentContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const PageLayout = styled.div`
  flex: 1;
  width: 100%;
  padding: 2rem 0.5rem;
  max-width: 90%;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 2rem 1rem;
  }

  @media ${device.laptop} {
    padding: 3rem 1rem;
  }
`

export default function SplitLayout(props) {
  return (
    <ContentContainer>
      <GlobalStyles />
      <Nav />
      <PageLayout>{props.children}</PageLayout>
    </ContentContainer>
  )
}
