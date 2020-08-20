import React from 'react'
import styled from 'styled-components'

const GradientButton = styled.button`
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  border: none;
  text-align: center;
  border-radius: 0.5em;
  height: 2.75em;
  color: white;

  :hover {
    color: #555555;
  }
`

export default function Button(props) {
  return <GradientButton>{props.text}</GradientButton>
}
