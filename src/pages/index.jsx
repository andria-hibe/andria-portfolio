import React from 'react'
import styled from 'styled-components'

import { Background } from '../components/global'

const HomeHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
`

export default function Home() {
  return (
    <Background gradient>
      <HomeHeader>Andria Hibe</HomeHeader>
      <p>Heya</p>
    </Background>
  )
}
