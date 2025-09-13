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

const CenteredH3 = styled.h3`
  text-align: center;
  margin: 0;
`

const CenteredH4 = styled.h4`
  text-align: center;
  margin: 0;
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      robot: file(sourceInstanceName: { eq: "images" }, name: { eq: "robot" }) {
        childImageSharp {
          gatsbyImageData(width: 500, height: 500, layout: CONSTRAINED)
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
            maxWidth: '250px',
            maxHeight: '250px',
          }}
          image={getImage(data.robot)}
          alt="Robot graphic"
        />
        <CenteredH3>Oh no... We cannot find that page :(</CenteredH3>
        <CenteredH4>
          Check out the navigation menu to get back on track.
        </CenteredH4>
      </CenteredContainer>
    </SplitLayout>
  )
}

export function Head() {
  return <SEO title="404: You took a wrong turn" />
}
