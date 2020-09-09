import React from 'react'
import styled from 'styled-components'
import { device } from '../components/globalStyle'

const GradientButton = styled.button`
  background-image: linear-gradient(
    to right,
    rgba(166, 193, 238, 0.9) 0%,
    rgba(251, 194, 235, 0.9) 100%
  );
  border: none;
  text-align: center;
  border-radius: 0.5em;
  color: white;
  padding: 1em 0.75em;

  :hover {
    color: #555555;
    cursor: pointer;
  }

  @media ${device.tablet} {
    font-size: 1.25rem;
  }
`

export default function Button(props) {
  return <GradientButton>{props.text}</GradientButton>
}
