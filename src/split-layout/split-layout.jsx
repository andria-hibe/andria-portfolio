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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 2rem 3rem;
  }

  @media ${device.laptop} {
    padding: 3rem 4rem;
  }
`

export default function SplitLayout(props) {
  return (
    <ContentContainer>
      <GlobalStyles />
      <Nav />
      <PageLayout>
        {props.children}
      </PageLayout>
    </ContentContainer>
  )
}
