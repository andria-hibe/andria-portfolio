import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import { GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'

const CenteredH3 = styled.h3`
  text-align: center;
`

const CenteredH4 = styled.h4`
  text-align: center;
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      robot: file(sourceInstanceName: { eq: "images" }, name: { eq: "robot" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SplitLayout>
      <SEO title="404: You took a wrong turn" />
      <GlobalStyles />
      <Img
        style={{
          maxWidth: '250px',
          maxHeight: '250px',
          margin: '0 auto',
        }}
        fluid={data.robot.childImageSharp.fluid}
        alt="Robot graphic"
      />
      <CenteredH3>Oh no... We cannot find that page :(</CenteredH3>
      <CenteredH4>
        Check out the navigation menu to get back on track.
      </CenteredH4>
    </SplitLayout>
  )
}
