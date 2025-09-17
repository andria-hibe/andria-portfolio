import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import { GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  gap: 1.5rem;
`

const CenteredH4 = styled.h4`
  text-align: center;
  margin: 0;
  color: #6b5b47;
  font-family: 'Georgia', serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`

const CozyMessage = styled.p`
  color: #a94442;
  font-style: italic;
  font-size: 1rem;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export default function NotFound() {
  const data = useStaticQuery(graphql`
    query {
      emptyCottage: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "empty_cottage" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <SplitLayout>
      <GlobalStyles />
      <CenteredContainer>
        <GatsbyImage
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
          }}
          image={getImage(data.emptyCottage)}
          alt="Empty cozy cottage interior"
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        <CenteredH4>This cozy corner seems to be empty...</CenteredH4>
        <CozyMessage>
          🍃 Check out the navigation menu to get back on track.
        </CozyMessage>
      </CenteredContainer>
    </SplitLayout>
  )
}

export function Head() {
  return <SEO title="404: You took a wrong turn" />
}
